interface CardProps {
  children: React.ReactNode;
  title: string;
}

export function Card(props: CardProps) {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 50,
        marginTop: 10,
        borderRadius: 5,
        width: 300,
        borderColor: '#999999',
        borderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '0px 0px 5px 0px #999999',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}
