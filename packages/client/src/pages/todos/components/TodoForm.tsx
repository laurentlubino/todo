import { Prisma, Todo } from "@glorious-todo/database";

export type TodoFormProps = {
  title: string;
  todo?: Prisma.TodoCreateInput | Prisma.TodoUpdateInput;
  onClose: VoidFunction;
  onSubmit?: VoidFunction;
  onChange?: (todo: Todo) => void;
};

export const TodoForm = (props: TodoFormProps) => {
  return <div>TodoForm</div>;
};
