import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  padding: 1.5rem;
  font-family: "Opens sans", sans-serif;
  gap: 2rem;
  border-bottom: 1px solid #fafafa60;
  img {
    width: 100px;
    height: 100px;
    border-radius: 32px;
  }

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a.remover {
    color: #ff0000;
    margin-top: 20px;
  }
`;

interface Repo {
  name?: string;
  full_name?: string;
  html_url?: string;
  id: number;
  owner?: object;
  avatar_url?: string;
}

interface IItemRepo {
  repo: Repo;
  onHandleRemoveRepo: (id: number) => void;
}

function ItemRepo({ repo, onHandleRemoveRepo }: IItemRepo) {
  const handleRemove = () => {
    onHandleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <img src={repo.owner.avatar_url} alt="avatar" />
      <div>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          Ver repositório
        </a>
        <br />
        <a href="#" rel="noreferrer" className="remover">
          Remover
        </a>
      </div>
    </ItemContainer>
  );
}

export default ItemRepo;
