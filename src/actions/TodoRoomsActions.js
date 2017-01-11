export const ADD_TODO_ROOM = 'ADD_TODO_ROOM';
export const DELETE_TODO_ROOM = 'DELETE_TODO_ROOM';
export const FETCH_CACHED_TODO_ROOMS = 'FETCH_CACHED_TODO_ROOMS';
export const RECEIVE_CACHED_TODO_ROOMS = 'RECEIVE_CACHED_TODO_ROOMS';
export const ADD_INIT_TODO_ROOMS = 'ADD_INIT_TODO_ROOMS';

export const addInitTodoRooms = () => ({type: ADD_INIT_TODO_ROOMS});
export const addTodoRoom = name => ({type:ADD_TODO_ROOM, name});
export const deleteTodoRoom = id => ({type:DELETE_TODO_ROOM, id});
export const fetchCachedTodoRooms = () => ({type:FETCH_CACHED_TODO_ROOMS});
export const receiveCachedTodoRooms = todoRooms => ({type:RECEIVE_CACHED_TODO_ROOMS, todoRooms});