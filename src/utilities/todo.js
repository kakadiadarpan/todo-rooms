import { generate } from 'shortid';

const makeTodo = (title, roomId) => ({ id: generate(), rId:roomId, title, ts:new Date().getTime(), completed: false });

const makeTodoRoom = name => ({ id: generate(), name, ts:new Date().getTime() });

export { makeTodo, makeTodoRoom };