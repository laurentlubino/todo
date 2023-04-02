import { TodoForm } from "./components/TodoForm";
import { useTodosPage } from "./viewModels/useTodosPage";

export const TodosPage = () => {
  const {
    data: {
      user,
      todos,
      isOpenTodoCreateModal,
      isOpenTodoEditModal,
      editedTodo,
    },
    operations: {
      closeCreateTodo,
      closeEditTodo,
      onTodoCreateSubmit,
      onTodoEditSubmit,
      openCreateTodo,
      openEditTodo,
      onChangeEditedTodo,
    },
  } = useTodosPage();

  return (
    <div>
      <header>
        <h1>Glorious Todos</h1>
        <h2>Hey {user?.name}!</h2>
      </header>
      <div>
        <button onClick={openCreateTodo}>Add Todo</button>
        {todos?.map((todo) => (
          <div>
            <div>
              <h3>{todo.title}</h3>
              <button onClick={() => openEditTodo(todo.id)}>Edit</button>
            </div>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
      {isOpenTodoCreateModal && (
        <TodoForm
          title="Create:"
          onClose={closeCreateTodo}
          onSubmit={onTodoCreateSubmit}
          todo={editedTodo}
          onChange={onChangeEditedTodo}
        />
      )}
      {isOpenTodoEditModal && (
        <TodoForm
          title="Edit:"
          onClose={closeEditTodo}
          onSubmit={onTodoEditSubmit}
          todo={editedTodo}
          onChange={onChangeEditedTodo}
        />
      )}
    </div>
  );
};
