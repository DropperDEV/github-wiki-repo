import styled from "styled-components";
import Input from "./style/components/Input";
import { useState } from "react";

import { api } from "./services/api.ts";
import Button from "./style/components/Button.js";
import ItemRepo from "./style/components/ItemRepo.js";

interface Repos {
  id: number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState<Repos[]>([]);
  const [user, setUser] = useState<string>("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${user}/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev: Repos[]) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id: number) => {
    console.log("Removendo registro", id);
    // Utilize filter to remove the repo with the given id.
    setRepos((prev: Repos[]) => prev.filter((repo) => repo.id !== id));
  };

  console.log(repos)

  return (
    <Container>
      <img src="logoGh.png" width={72} height={72} alt="github logo" />
      <Input
        value={user}
        action={(e) => setUser(e.target.value)}
        name="userName"
      />
      <Input
        value={currentRepo}
        action={(e) => setCurrentRepo(e.target.value)}
        name="repositories"
      />
      <Button name="buscar" action={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          onHandleRemoveRepo={handleRemoveRepo}
          repo={repo}
        />
      ))}
    </Container>
  );
}
