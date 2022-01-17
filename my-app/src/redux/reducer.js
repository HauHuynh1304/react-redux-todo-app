const initState = {
  filter: {
    search: "",
    status: "All",
    priority: "meduum",
  },
  todoList: [
    { id: 1, name: "learn XXX", competed: false, priority: "Medium" },
    { id: 2, name: "learn XXX", competed: false, priority: "Hight" },
    { id: 3, name: "learn XXX", competed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: 4, name: "learn XXX", competed: false, priority: "Low" },
        ],
      };
    default:
      break;
  }
};

export default rootReducer;
