import styled from "styled-components";

const InputStyle = styled.input`
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;
  background: transparent;
  padding: 0 20px;
  color: #ffffff;
  font-size: 20px;
`;

interface IInput {
  name: string;
  value: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Input({ name, value, action }: IInput) {
  return <InputStyle name={name} onChange={action} value={value} placeholder={name} />;
}
