import localforage from 'localforage';

const TODO_ROOMS = "TODO_ROOMS";
const TODOS = 'TODOS';
const HAS_RUN = 'HAS_RUN';

const configStorage = () => {
  localforage.config({
    name        : 'todo-db',
    version     : 1.0,
    storeName   : 'todos',
    description : 'Todos'
  });
}
configStorage();

const isFirstRun = !localStorage.getItem(HAS_RUN);

const setAsRun = () => localStorage.setItem(HAS_RUN, 1);

const getTodos = () => localforage.getItem(TODOS);

const getTodoRooms = () => localforage.getItem(TODO_ROOMS);

const saveTodos = todos => localforage.setItem(TODOS, todos);

const saveTodoRooms = todoRooms => localforage.setItem(TODO_ROOMS, todoRooms);

export { getTodos, saveTodos, isFirstRun, setAsRun, getTodoRooms, saveTodoRooms };