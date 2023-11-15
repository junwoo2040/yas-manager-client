import { ChangeEventHandler, FC } from "react";

interface Props {
  label: string;
  type: "text" | "date" | "email";
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const FormInput: FC<Props> = ({ label, type, value, handleChange }) => {
  return (
    <>
      <label id={label}>{label}</label>
      <input id={label} type={type} value={value} onChange={handleChange} />
    </>
  );
};

export default FormInput;
