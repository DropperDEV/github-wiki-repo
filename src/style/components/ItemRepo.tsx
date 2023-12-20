import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

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

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

interface Repo {
  name?: string;
  full_name?: string;
  html_url?: string;
  id: number;
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
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <a href="#" rel="noreferrer" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
