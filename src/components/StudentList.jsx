function StudentList(props) {

  return (
    <div>

      <h2>Student List</h2>

      {props.students.map((student) => (

        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px auto",
            width: "300px",
            borderRadius: "10px",
          }}
        >

          <h3>{student.name}</h3>

          <p>{student.course}</p>

          <button
            onClick={() =>
              props.deleteStudent(student.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default StudentList;