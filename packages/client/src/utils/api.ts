const API_URL = "http://localhost:3333";

export class TodoApi {
  get = async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    return await response.json();
  };
  post = async (endpoint: string, data: any) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  };
}
