import React, { useState } from "react";

function StudentRow({ student, onUpdateScore }) {
  const [tempScore, setTempScore] = useState(student.score);

  const isPass = student.score >= 40;

  const handleSave = () => {
    onUpdateScore(student.id, tempScore);
  };

  return (
    <tr className={isPass ? "pass-row" : "fail-row"}>
      {/* NAME */}
      <td>{student.name}</td>

      {/* SCORE */}
      <td className="score">{student.score}</td>

      {/* STATUS */}
      <td>
        <span className={`status ${isPass ? "pass" : "fail"}`}>
          ● {isPass ? "PASS" : "FAIL"}
        </span>
      </td>

      {/* UPDATE */}
      <td>
        <input
          type="number"
          value={tempScore}
          onChange={(e) => setTempScore(e.target.value)}
        />

        <button className="save-btn" onClick={handleSave}>
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;