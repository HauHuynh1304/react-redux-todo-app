import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const todoListSelectorByName = (state) => state.filter.search;
export const todoListSelectorByStatus = (state) => state.filter.status;
export const todoListSelectorByPriorities = (state) => state.filter.priorities;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  todoListSelectorByName,
  todoListSelectorByStatus,
  todoListSelectorByPriorities,
  (todoList, searchText, status, priorities) => {
    switch (status) {
      case "Completed":
        return todoList.filter((e) => {
          return (
            e.name.toLowerCase().includes(searchText.toLowerCase()) &&
            e.competed &&
            priorities.includes(e.priority)
          );
        });
      case "Todo":
        return todoList.filter((e) => {
          return (
            e.name.toLowerCase().includes(searchText.toLowerCase()) &&
            !e.competed &&
            priorities.includes(e.priority)
          );
        });
      default:
        if (priorities.length) {
          return todoList.filter((e) => {
            return (
              e.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priorities.includes(e.priority)
            );
          });
        } else {
          return todoList;
        }
    }
  }
);
