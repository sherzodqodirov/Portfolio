"use strict";

const addBtn = document.getElementById("add");

let statuses = ["process", "done", "missed"];

let tasks = [];

// taskni statusi asosida kerakli kaklonkaga joylashtiruvchi funksiya
const displayByStatus = (status, task) => {
  const content = document.getElementById(status);
  const html = `<ul>
                              <li><h3>${task.staff}</h3></li>
                              <li><p>${task.description}</p></li>
                              <li><h5 class="date-deadline">${
                                task.date
                              }</h5></li>
                              ${
                                status === "process"
                                  ? `<li><button onclick=changeTaskStatus(${task.id}) class="btn btn-sm btn-secondary">Bajarildi</button></li><br>`
                                  : ""
                              }
                          </ul>`;
  content.innerHTML += html;
};

// barcha tasklarni kalonkalarga taqsimlovchi funksiya
const displayDataUI = (allTasks) => {
  // kalonkalarni tozalash 1-usul
  /*document.getElementById('process').innerHTML = '';
    document.getElementById('done').innerHTML = '';
    document.getElementById('missed').innerHTML = '';*/

  // kalonkalarni tozalash 2-usul
  for (let i = 0; i < statuses.length; i++)
    document.getElementById(statuses[i]).innerHTML = "";

  // tasklarni birma bir kalonkalarga statusi bo'yicha joylashtirish
  for (let i = 0; i < allTasks.length; i++) {
    const statusIndex = allTasks[i].status;
    const status = statuses[statusIndex];

    // kerakli kalonkaga taskni chizib beruvchi funksiya
    displayByStatus(status, allTasks[i]);
  }
};

displayDataUI(tasks);

// taskni statusini o'zgartiruvchi funksiya
function changeTaskStatus(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (id === tasks[i].id) {
        const currentDateMils = new Date().getTime();
        //const currentDays = currentDate / (1000 * 60 * 60 * 24); // kunni hisoblab beradi

        const taskDateMils = new Date(tasks[i].date).getTime();
        //const taskDays = taskDateMils / (1000 * 60 * 60 * 24);

        const differ = taskDateMils - currentDateMils;

        //const differDays = Math.floor(Math.abs(taskDays - currentDays));

        tasks[i].status = differ > 0 ? 1 : 2;

        break;
    }
}
  displayDataUI(tasks);
}

// yangi task qo'shuvchi hodisa (event)
addBtn.addEventListener("click", function () {
  const staff = document.getElementById("name");
  // const staff = const test = document.forms['addForm']['staff'].value;
  const description = document.getElementById("comment");
  const date = document.getElementById("date");
   if (staff.value=='' && description.value=='' && date.value=='') {
       alert("Malumot tolik emas!!!")
   }
   else{
  const currentTask = {
    id: tasks.length + 1,
    staff: staff.value,
    description: description.value,
    date: date.value,
    status: 0,
  };
  tasks.push(currentTask);
  displayDataUI(tasks);
   }
  const form = document.forms["addForm"];
  form.reset();
});
