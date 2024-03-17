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
}

export function Maps({ center, position, radius, enableRadius }: MapsProps) {
  const { mapIcon, handleMapClick } = useLeaflet();

  return (
    <Map
      center={[center.latitude, center.longitude]}
      zoom={15}
      style={{ height: '100vh', width: '100%' }}
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
