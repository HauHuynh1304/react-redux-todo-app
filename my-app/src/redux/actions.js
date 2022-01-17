export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilter = (data) => {
  return {
    type: "search/searchFilter",
    payload: data,
  };
};

export const statusFilter = (data) => {
  return {
    type: "search/statusFilter",
    payload: data,
  };
};

export const clickChangeStatus = (id) => {
  return {
    type: "todoList/updateTodoStatus",
    payload: id,
  };
};

export const prioritiesFilter = (data) => {
  return {
    type: "search/prioritiesFilter",
    payload: data,
  };
};
