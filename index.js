function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  const taskDate = document.getElementById("dateInput").value;
  const taskTime = document.getElementById("timeInput").value;
  const taskList = document.getElementById("taskList");

  if (!taskText || !taskDate || !taskTime) {
    alert("Please enter task, date, and time!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="task-details">
      <strong>${taskText}</strong>
      <small>📅 ${taskDate} ⏰ ${taskTime}</small>
    </div>
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  taskList.appendChild(li);

  const alarmTime = new Date(`${taskDate}T${taskTime}`);
  const now = new Date();
  const diff = alarmTime - now;

  if (diff > 0) {
    setTimeout(() => {
      alert(`⏰ Reminder: ${taskText}`);
    }, diff);
  }

  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("timeInput").value = "";
}
