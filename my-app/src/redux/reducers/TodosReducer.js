const initState = [
  { id: 1, name: "Learn java", competed: false, priority: "Medium" },
  { id: 2, name: "Learn vuejs", competed: true, priority: "High" },
  { id: 3, name: "Learn AI", competed: false, priority: "Low" },
  { id: 4, name: "Play Pokemon", competed: true, priority: "Low" },
  { id: 5, name: "Stretching", competed: false, priority: "Low" },
];

const todosReducer = (state = initState, action, i = 0) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [
        ...state,
        action.payload, //update state
      ];
    case "todoList/updateTodoStatus":
      return state.map((e) =>
        e.id === action.payload ? { ...e, competed: !e.competed } : e
      );
    default:
      return state;
  }
};

export default todosReducer;
