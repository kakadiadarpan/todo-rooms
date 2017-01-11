import { takeEvery, select, put } from 'redux-saga/effects'
import { saveTodos, getTodos, saveTodoRooms, getTodoRooms } from '../utilities/storageUtility'
import { ADD_TODO, EDIT_TODO, CLEAR_TODOS, MARK_TODO, FETCH_CACHED_TODOS, receiveCachedTodos, DELETE_TODO } from '../actions/TodoActions'
import { FETCH_CACHED_TODO_ROOMS, receiveCachedTodoRooms, ADD_TODO_ROOM, DELETE_TODO_ROOM } from '../actions/TodoRoomsActions'
import { saveTodoRoomsDB, saveTodosDB } from '../utilities/firebase';

function* cacheTodos() {
  try {
    const todos = yield select(state => state.todos);
    saveTodosDB(todos);
    saveTodos(todos);
  } catch(e) {
    yield e;
  }
}

function* getCachedTodos() {
  try {
    const todos = yield getTodos();
    yield put(receiveCachedTodos(todos));
  } catch(e) {
    yield e;
  }
}

function* cacheTodoRooms() {
  try {
    const todoRooms = yield select(state => state.todoRooms);
    saveTodoRoomsDB(todoRooms);
    saveTodoRooms(todoRooms);
  } catch(e) {
    yield e;
  }
}

function* getCachedTodoRooms() {
  try {
    const todoRooms = yield getTodoRooms();
    yield put(receiveCachedTodoRooms(todoRooms));

  } catch(e) {
    yield e;
  }
}

function* todoStorageSaga() {
  yield [
    takeEvery(FETCH_CACHED_TODOS, getCachedTodos),
    takeEvery([ADD_TODO, EDIT_TODO, CLEAR_TODOS, MARK_TODO, DELETE_TODO], cacheTodos),
    takeEvery(FETCH_CACHED_TODO_ROOMS, getCachedTodoRooms),
    takeEvery([ADD_TODO_ROOM, DELETE_TODO_ROOM], cacheTodoRooms)
  ];
}

export default todoStorageSaga