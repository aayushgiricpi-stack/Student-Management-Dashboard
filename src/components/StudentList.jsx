function StudentList(props) {

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >

      {props.students.map((student) => (

        <div
          key={student.id}
          style={{
            backgroundColor: "white",
            width: "250px",
            margin: "15px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >

          <h2>{student.name}</h2>

          <p>{student.course}</p>

          <button
            onClick={() =>
              props.setEditStudent(student)
            }
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              backgroundColor: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              props.deleteStudent(student.id)
            }
            style={{
              padding: "8px 12px",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default StudentList;