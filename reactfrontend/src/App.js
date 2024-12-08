import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
      try {
        const students = await axios.get("http://127.0.0.1:8080/api/students/");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect React JS to Django</h1>
      </header>
      <div className="students-container">
        {students.length === 0 ? (
          <p>Loading students...</p>
        ) : (
          students.map((student, i) => (
            <div className="student-card" key={i}>
              <h2>{student.name}</h2>
              <p className="student-info">Age: {student.email}</p>
              <p className="student-info">Grade: {student.key}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
