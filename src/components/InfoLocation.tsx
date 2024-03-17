interface Position {
  latitude: number;
  longitude: number;
}

export function InfoLocation({ position }: { position: Position }) {
  return (
    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
      <code style={{ marginBottom: 5, color: 'blueviolet' }}>
        Latitude: {position.latitude}
      </code>
      <code style={{ marginBottom: 5, color: 'blueviolet' }}>
        Longitude: {position.longitude}
      </code>
    </div>
  );
}
