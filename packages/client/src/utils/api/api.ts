const API_URL = "http://localhost:3333";

export class TodoApi {
  getFactory =
    <T>(endpoint: string): (() => Promise<T>) =>
    async () => {
      const response = await fetch(`${API_URL}${endpoint}`);
      return await response.json();
    };
  postFactory =
    <T, D>(endpoint: string, data: D): (() => Promise<T>) =>
    async () => {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      return await response.json();
    };
  post = async <T, D>(endpoint: string, data: D): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  };
}

export const todoApi = new TodoApi();
