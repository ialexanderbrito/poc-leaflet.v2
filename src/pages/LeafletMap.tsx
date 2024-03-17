import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Checkbox } from '../components/Checkbox';
import { InfoLocation } from '../components/InfoLocation';
import { Maps } from '../components/Maps';
import { Range } from '../components/Range';
import { useLeaflet } from '../hooks/useLeaflet';

export function LeafletMap() {
  const {
    enableRadius,
    handleSaveLocation,
    position,
    radius,
    setEnableRadius,
    setRadius,
  } = useLeaflet();

  return (
    <>
      <Card title="Configurações">
        <Checkbox
          enableRadius={enableRadius}
          setEnableRadius={setEnableRadius}
        />

        <Range
          radius={radius}
          setRadius={setRadius}
          enableRadius={enableRadius}
        />

        <InfoLocation position={position} />

        <Button onClick={handleSaveLocation}>Salvar localização</Button>
      </Card>

      <Maps
        center={position}
        position={position}
        radius={radius}
        enableRadius={enableRadius}
      />
    </>
  );
}
