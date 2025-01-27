import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducer/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import  {thunk}  from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
