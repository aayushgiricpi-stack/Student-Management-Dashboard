
function StudentProfile({
    student,
    onClose,
}) {

    if (!student) return null;

    return (

        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor:
                    "rgba(0,0,0,0.5)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <div
                style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    width: "350px",
                    textAlign: "center",
                }}
            >

                <h2>Student Profile</h2>

                <h3>{student.name}</h3>

                <p>
                    <strong>Course:</strong>
                    {student.course}
                </p>

                <p>
                    <strong>Email:</strong>
                    {student.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    {student.phone}
                </p>

                <p>
                    <strong>Address:</strong>
                    {student.address}
                </p>

                <button
                    onClick={onClose}
                >
                    Close
                </button>

            </div>

        </div>
    );
}

export default StudentProfile;