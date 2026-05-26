function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: props.color,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;