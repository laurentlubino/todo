import { Prisma, Todo } from "@glorious-todo/database";
import { useState } from "react";
import {
  useCreateTodos,
  useEditTodos,
  useGetTodos,
} from "../../../utils/api/todoHooks";
import { useAuth } from "../../../utils/auth";

const emptyTodoTemplate: Partial<Todo> = {
  id: "",
  title: "",
  description: "",
};

export const useTodosPage = () => {
  const { user } = useAuth();
  const { isLoading, isError, data: todos, error } = useGetTodos();
  const { mutate: createTodo } = useCreateTodos();
  const { mutate: editTodo } = useEditTodos();
  const [editedTodo, setEditedTodo] = useState<
    Prisma.TodoCreateInput | Prisma.TodoUpdateInput
  >(emptyTodoTemplate);
  const [isOpenTodoCreateModal, setIsOpenTodoCreateModal] = useState(false);
  const [isOpenTodoEditModal, setIsOpenTodoEditModal] = useState(false);
  const openCreateTodo = () => {
    setEditedTodo(emptyTodoTemplate);
    setIsOpenTodoCreateModal(true);
  };
  const closeCreateTodo = () => {
    setIsOpenTodoCreateModal(false);
  };
  const openEditTodo = (todoId: string) => {
    const todoToEdit = todos?.find((todo) => todo.id === todoId);
    if (!todoToEdit) {
      return console.error("Can't find todo to be edited");
    }
    setEditedTodo(todoToEdit);
    setIsOpenTodoEditModal(true);
  };
  const closeEditTodo = () => {
    setIsOpenTodoEditModal(false);
  };
  const onTodoCreateSubmit = () => {
    // @ts-ignore
    createTodo(editedTodo);
  };
  const onTodoEditSubmit = () => {
    editTodo(editedTodo);
  };
  const onChangeEditedTodo = (todo: Partial<Todo>) => {
    setEditedTodo(todo);
  };
  return {
    data: {
      user,
      todos,
      isLoading,
      isError,
      error,
      isOpenTodoCreateModal,
      isOpenTodoEditModal,
      editedTodo,
    },
    operations: {
      onTodoCreateSubmit,
      onTodoEditSubmit,
      openCreateTodo,
      closeCreateTodo,
      openEditTodo,
      closeEditTodo,
      onChangeEditedTodo,
    },
  };
};
