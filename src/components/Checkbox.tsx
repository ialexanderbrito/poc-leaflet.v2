interface CheckboxProps {
  enableRadius: boolean;
  setEnableRadius: (value: boolean) => void;
}

export function Checkbox({ enableRadius, setEnableRadius }: CheckboxProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <input
        type="checkbox"
        checked={enableRadius}
        onChange={(e) => {
          setEnableRadius(e.target.checked);
        }}
        style={{ accentColor: 'blueviolet' }}
      />
      <label style={{ marginLeft: 10 }}>Habilitar raio</label>
    </div>
  );
}
