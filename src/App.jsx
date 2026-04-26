import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 }
  ]);

  // ADD STUDENT
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent]);
  };

  // UPDATE SCORE (SAVE BUTTON BASED)
  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );

    setStudents(updated);
  };

  return (
    <div className="app">
      <Header />

      <AddStudentForm onAddStudent={addStudent} />

      <Stats students={students} />

      <StudentTable
        students={students}
        onUpdateScore={updateScore}
      />
    </div>
  );
}

export default App;