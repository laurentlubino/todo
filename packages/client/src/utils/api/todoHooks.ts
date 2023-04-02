import { useMutation, useQuery } from "react-query";
import { Todo, Prisma } from "@glorious-todo/database";
import { todoApi } from "./api";

export const useGetTodos = () => {
  return useQuery("get_todos", todoApi.getFactory<Todo[]>("/todos"));
};

export const useCreateTodos = () => {
  return useMutation((todo: Prisma.TodoCreateInput) => {
    return todoApi.post<Todo, Prisma.TodoUpdateInput>("/todos/create", todo);
  });
};

export const useEditTodos = () => {
  return useMutation((todo: Prisma.TodoUpdateInput) => {
    return todoApi.post<Todo, Prisma.TodoUpdateInput>("/todos/edit", todo);
  });
};
