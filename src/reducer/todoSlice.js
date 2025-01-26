import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, name: "Do the dishes", category: "cleaning", done: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      // this create a new array value that accepts the conditions below and return objects that doesn't match the ID
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },
    // this allow to remove or addd from the to-do list
    updateTodo: (state, action) => {
      state.todos =  state.todo.filter((todo) => todo.id !==action.payload.id);
      state.todos = [...state.todos, action.payload];
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    
  },
});

export const { deleteTodo, updateTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
