import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;

  &:hover {
    background-color: #fafafa40;
    cursor: pointer;
  }
`;

interface IButton {
  action: () => void;
  name: string;
}
export default function Button({ action, name }: IButton) {
  return (
    <ButtonContainer onClick={action} name={name}>
      {name}
    </ButtonContainer>
  );
}
