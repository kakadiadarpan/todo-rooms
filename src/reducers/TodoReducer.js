import { ADD_TODO, CLEAR_TODOS, MARK_TODO, RECEIVE_CACHED_TODOS, DELETE_TODO } from '../actions/TodoActions'
import { makeTodo } from '../utilities/todo'

export default (state = [], action) => {
  switch (action.type) {

    case ADD_TODO:
      const todo = makeTodo(action.text, action.roomId);
      return [ ...state, todo ];

    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: action.completed } : todo
      );

    case RECEIVE_CACHED_TODOS:
      return action.todos?[ ...action.todos ] : [];
    
    case CLEAR_TODOS:
      return state.filter(todo => todo.rId!==action.roomId);

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}

