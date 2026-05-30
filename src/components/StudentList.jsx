function StudentList(props) {

  // Empty State
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
        <p>Add students to display here</p>
      </div>
    );
  }

  return (
    <div>

      {/* Student Count */}
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        Total Students: {props.students.length}
      </h2>

      {/* Student Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >

        {props.students.map((student, index) => (

          <div
            key={student.id}
            style={{
              backgroundColor: "white",
              width: "300px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >

            {/* Student Number */}
            <p
              style={{
                color: "gray",
                fontSize: "14px",
              }}
            >
              Student #{index + 1}
            </p>

            {/* Name */}
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
                color: "#555",
                marginBottom: "20px",
              }}
            >
             
              <p>📚 {student.course}</p>

              <p>📧 {student.email}</p>

              <p>📱 {student.phone}</p>
            </p>

            {/* Button Group */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >

              {/* View */}
              <button
                onClick={() =>
                  props.setSelectedStudent &&
                  props.setSelectedStudent(student)
                }
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                View
              </button>

              {/* Edit */}
              <button
                onClick={() =>
                  props.setEditStudent(student)
                }
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
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
                }}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StudentList;