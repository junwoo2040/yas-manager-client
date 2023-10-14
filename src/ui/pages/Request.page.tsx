import { FC } from "react";

const RequestPage: FC = () => {
  return (
    <>
      <h1>Request</h1>
      <div>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Username" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <input placeholder="Confirm Password" type="password" />
        <button>Request</button>
      </div>
    </>
  );
};

export default RequestPage;
