export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const FETCH_CACHED_TODOS = 'FETCH_CACHED_TODOS';
export const RECEIVE_CACHED_TODOS = 'RECEIVE_CACHED_TODOS';
export const MARK_TODO = 'MARK_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text, roomId) => ({type: ADD_TODO, text, roomId});
export const fetchCachedTodos = () => ({type: FETCH_CACHED_TODOS});
export const clearTodos = (roomId) => ({type: CLEAR_TODOS, roomId});
export const markTodo = (id, completed) => ({type: MARK_TODO, id, completed});
export const receiveCachedTodos = todos => ({type: RECEIVE_CACHED_TODOS, todos});
export const deleteTodo = (id) => ({type:DELETE_TODO, id});