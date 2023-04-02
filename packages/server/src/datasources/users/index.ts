import { PrismaClient } from "@prisma/client";
import { Prisma } from "@glorious-todo/database";

export class UsersDatasource {
  constructor(private database: PrismaClient) {}

  async getUsers() {
    return this.database.user.findMany();
  }
  async getUserById(id: string) {
    return this.database.user.findUnique({ where: { id } });
  }
  async createUser(data: Prisma.UserCreateInput) {
    return this.database.user.create({ data });
  }
  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return this.database.user.update({ where: { id }, data });
  }
  async deleteUser(id: string) {
    return this.database.user.delete({ where: { id } });
  }
}
