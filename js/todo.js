//1번
const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

//6번
const TODOS_KEY = 'todos'
let toDos = [];
//항상 빈 배열이 아니라  저장된 값으로 불러오고싶다.!!

function saveTpDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//5번
function deleteToDo(e) {
  //console.log(e.target.parentElement.innerText);
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTpDos();
  //삭제를 원하는 데이터를 제외하고 새 배열을 만든다
  /*
  const arr = [1234, 45454, 23, 112, 34, 6774, 334]
// 첫번째 argu 이름
  function sexyFunction(potato) {
    return potato <= 1000 }
  } 1000이상은 제외!
    arr.filter(sexyFunction)
   */
}
//3번
function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  //4번
  const button = document.createElement('button');
  button.innerText = '삭제';
  button.addEventListener('click', deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//2번
function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTpDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
//paintToDo도 newToDo를 받음.
/*
(item) => console.log('this is the turn of', item)
function sayHello(item) {
  console.log('this is the turn of', item)
}

*/


/*
const arr = [1, 2 ,3, 4]


*/