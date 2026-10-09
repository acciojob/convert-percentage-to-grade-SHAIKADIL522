function calculateGrade(percentage) {
  if (typeof percentage !== "number" || Number.isNaN(percentage)) {
    return "F";
  }

  const score = Math.round(percentage);

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));