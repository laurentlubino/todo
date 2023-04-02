import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);

    let email = formData.get("email") as string;
    let name = formData.get("username") as string;

    auth.signin({ name, email }, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email:</label>
        <input name="email" type="email" />
        <label>Username:</label>
        <input name="name" type="text" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
