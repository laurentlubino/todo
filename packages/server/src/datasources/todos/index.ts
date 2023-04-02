import { Prisma, PrismaClient } from "@prisma/client";

export class TodosDatasource {
  constructor(private database: PrismaClient) {}

  async getTodos() {
    return this.database.todo.findMany();
  }
  async getTodoById(id: string) {
    return this.database.todo.findUnique({ where: { id } });
  }
  async createTodo(data: Prisma.TodoCreateInput) {
    return this.database.todo.create({ data });
  }
  async updateTodo(id: string, data: Prisma.TodoUpdateInput) {
    return this.database.todo.update({ where: { id }, data });
  }
  async deleteTodo(id: string) {
    return this.database.todo.delete({ where: { id } });
  }
}
