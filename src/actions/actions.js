import React from "react";
import { ADD_TODO, ON_DELETE } from "./actionsList";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    newTodo: text,
  };
}
export function onDelete(id) {
  return {
    type: ON_DELETE,
    id,
  };
}
