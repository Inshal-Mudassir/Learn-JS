switch (expression) {
  case value1:
    // Code runs if expression === value1
    break;

  case value2:
    // Code runs if expression === value2
    break;

  default:
    // Code runs if no case matches
}

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
  case "yellow":
    console.log("Slow Down");
  case "green":
    console.log("Go");
  default:
    console.log("Invalid Color");
}

let grade = "c";

switch (grade.toUpperCase()) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  default:
    console.log("Invalid Grade");
}