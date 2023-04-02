import { Express } from "express";
import { UsersDatasource } from "../../datasources/users";

export const createUsersEndpoints = (
  app: Express,
  usersDatasource: UsersDatasource
) => {
  app.get("/users", async (req, res) => {
    const users = await usersDatasource.getUsers();
    res.send(users);
  });
  app.get<{ id: string }>("/users/{id}", async (req, res) => {
    const user = await usersDatasource.getUserById(req.params.id);
    res.send(user);
  });

  app.post("/users/create", async (req, res) => {
    await usersDatasource.createUser(req.body);
    res.sendStatus(200);
  });
  app.post<{ id: string }>("/users/edit/{id}", async (req, res) => {
    await usersDatasource.updateUser(req.params.id, req.body);
    res.sendStatus(200);
  });
  app.post<{ id: string }>("/users/delete/{id}", async (req, res) => {
    await usersDatasource.deleteUser(req.params.id);
    res.sendStatus(200);
  });
};
