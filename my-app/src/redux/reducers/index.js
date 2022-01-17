import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todosReducer from "./TodosReducer";

// dont use combineReducers
// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todosReducer(state.todoList, action),
//   };
// };

// use combineReducers
const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todosReducer,
});

export default rootReducer;
