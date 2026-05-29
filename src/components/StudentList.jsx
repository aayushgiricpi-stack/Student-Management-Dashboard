function StudentList(props) {

  // =====================================
  // Empty State
  // =====================================
  if (props.students.length === 0) {

    return (

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "gray",
        }}
      >

        <h2>No Students Found</h2>

        <p>
          Add students to display here
        </p>

      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >

      {props.students.map((student) => (

        <div
          key={student.id}
          style={{
            backgroundColor: "white",
            width: "280px",
            padding: "20px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s",
          }}
        >

          {/* Student Name */}
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "10px",
            }}
          >
            {student.name}
          </h2>

          {/* Course */}
          <p
            style={{
              color: "gray",
              marginBottom: "20px",
            }}
          >
            {student.course}
          </p>

          {/* Buttons */}
          <div>

            {/* Edit */}
            <button
              onClick={() =>
                props.setEditStudent(student)
              }
              style={{
                padding: "10px 15px",
                marginRight: "10px",
                backgroundColor: "#f59e0b",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Edit
            </button>

            {/* Delete */}
            <button
              onClick={() =>
                props.deleteStudent(student.id)
              }
              style={{
                padding: "10px 15px",
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StudentList;