interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      style={{
        marginTop: 10,
        width: '100%',
        padding: 10,
        backgroundColor: 'blueviolet',
        color: 'white',
        borderRadius: 5,
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderStyle: 'solid',
        cursor: 'pointer',
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}
