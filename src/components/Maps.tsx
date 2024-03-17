import { Circle, Map, Marker, TileLayer } from 'react-leaflet';

import { useLeaflet } from '../hooks/useLeaflet';

interface MapsProps {
  center: {
    latitude: number;
    longitude: number;
  };
  position: {
    latitude: number;
    longitude: number;
  };
  radius: number;
  enableRadius: boolean;
  handleMapClick: (event: any) => void;
}

export function Maps({
  center,
  position,
  radius,
  enableRadius,
  handleMapClick,
}: MapsProps) {
  const { mapIcon } = useLeaflet();

  return (
    <Map
      center={[center.latitude, center.longitude]}
      zoom={15}
      style={{ height: '100vh', width: '100%' }}
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        crossOrigin={true}
      />

      {position.latitude !== 0 && (
        <Marker
          position={[position.latitude, position.longitude]}
          icon={mapIcon}
          interactive={false}
        />
      )}

      {enableRadius && (
        <Circle
          center={[position.latitude, position.longitude]}
          radius={radius}
          color="blueviolet"
        />
      )}
    </Map>
  );
}
