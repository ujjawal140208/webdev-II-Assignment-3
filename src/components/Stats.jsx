function Stats({ students }) {
  const total = students.length;

  const passed = students.filter((s) => s.score >= 40).length;

  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((acc, s) => acc + s.score, 0) / total
        );

  return (
    <div className="stats">
      <div className="stat">
        <p>TOTAL</p>
        <h3>{total}</h3>
      </div>

      <div className="stat">
        <p>PASSED</p>
        <h3>{passed}</h3>
      </div>

      <div className="stat">
        <p>AVG SCORE</p>
        <h3>{avg}</h3>
      </div>
    </div>
  );
}

export default Stats;