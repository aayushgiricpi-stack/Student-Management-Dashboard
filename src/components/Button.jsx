function Button(props) {

  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "12px 25px",
        margin: "10px",
        backgroundColor: props.color,
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;