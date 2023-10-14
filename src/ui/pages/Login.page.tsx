import { FC } from "react";

const Login: FC = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </div>
    </>
  );
};

export default Login;
