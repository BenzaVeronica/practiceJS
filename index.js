import TASKS from './data.js';

const headerColumn = document.querySelectorAll('.column');

function logTasks(htmlChapter) {
  let divConsole = document.getElementById('console');
  if (!divConsole) divConsole = document.createElement('console');
  divConsole.innerHTML = '';
  console.clear();
  for (let i = 0; i < TASKS.length; i++) {
    let task = TASKS[i];
    let dataChapter = parseInt(task.title[0]);
    if (dataChapter === htmlChapter) {
      divConsole.innerHTML += `<h4>${task.title}</h4>`;
      divConsole.innerHTML += `<pre>${task.description}</pre>`;
      task.fun(task.title, task.description);
    }
  }
}
document.querySelector('#header').addEventListener('click', (event) => {
  headerColumn.forEach((el) => {
    for (let i = 0; i < el.children.length; i++) {
      el.children[i].classList.remove('current');
    }
  });
  event.target.classList.add('current');
  if (event.path[0].nodeName === 'BUTTON') {
    const id = event.target.getAttribute('data-id');
    if (!id) return;
    let n = parseInt(id);
    logTasks(n);
  }
});

console.clear();
