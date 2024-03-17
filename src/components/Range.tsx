import { useLeaflet } from '../hooks/useLeaflet';

interface RangeProps {
  radius: number;
  setRadius: (value: number) => void;
  enableRadius: boolean;
}

export function Range({ radius, setRadius, enableRadius }: RangeProps) {
  const { convertMeterToKilometer } = useLeaflet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <input
        type="range"
        min="100"
        max="25000"
        value={radius}
        onChange={(e) => {
          setRadius(Number(e.target.value));
        }}
        disabled={!enableRadius}
        style={{ width: '100%', accentColor: 'blueviolet' }}
      />

      <span>{convertMeterToKilometer(radius)} km</span>
    </div>
  );
}
