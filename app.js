const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
dateDisplay.innerText = today.toDateString();

document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

document.getElementById("addSubjectBtn").onclick = () => {
  const name = prompt("Enter subject name:");
  if (!name) return;
  const subject = {
    name: name,
    currentStreak: 0,
    longestStreak: 0
  };
  saveSubject(subject);

  const option = document.createElement("option");
  option.value = name;
  option.innerText = name;
  document.getElementById("subjectSelect").appendChild(option);
};
