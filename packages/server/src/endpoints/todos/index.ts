import { Express } from "express";
import { TodosDatasource } from "../../datasources/todos";

export const createTodosEndpoints = (
  app: Express,
  todosDatasource: TodosDatasource
) => {
  app.get("/todos", async (req, res) => {
    const todos = await todosDatasource.getTodos();
    res.send(todos);
  });
  app.get<{ id: string }>("/todos/{id}", async (req, res) => {
    const todo = await todosDatasource.getTodoById(req.params.id);
    res.send(todo);
  });

  app.post("/todos/create", async (req, res) => {
    await todosDatasource.createTodo(req.body);
    res.sendStatus(200);
  });
  app.post<{ id: string }>("/todos/edit/{id}", async (req, res) => {
    await todosDatasource.updateTodo(req.params.id, req.body);
    res.sendStatus(200);
  });
  app.post<{ id: string }>("/todos/delete/{id}", async (req, res) => {
    await todosDatasource.deleteTodo(req.params.id);
    res.sendStatus(200);
  });
};
