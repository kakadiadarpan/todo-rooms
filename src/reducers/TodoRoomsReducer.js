import { RECEIVE_CACHED_TODO_ROOMS, ADD_TODO_ROOM, DELETE_TODO_ROOM } from '../actions/TodoRoomsActions'
import { makeTodoRoom } from '../utilities/todo'

export default (state = [], action) => {
  switch (action.type) {

    case ADD_TODO_ROOM:
      const todoRoom = makeTodoRoom(action.name);
      return [ ...state, todoRoom ];

    case DELETE_TODO_ROOM:
      return state.filter(todoRoom => todoRoom.id !== action.id);

    case RECEIVE_CACHED_TODO_ROOMS:
      return action.todoRooms?[ ...action.todoRooms ] : [];

    default:
      return state;
  }
}

