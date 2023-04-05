import { useState } from "react";

import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Select from "./components/Select/Select";
import TextInput from "./components/TextInput/TextInput";
import Button from "./components/Button/Button";

import "./App.css";
import "./index.css";
import Team from "./components/Team/Team";
import Collaborator from "./components/Collaborator/Collaborator";

function App() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const [collaborators, setCollaborator] = useState([
    {
      name: "Stefan Sanches",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/stephulz.png",
      team: "Programação",
    },
    {
      name: "Lucas Sallada",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/yonlu.png",
      team: "Programação",
    },
    {
      name: "Hugo Faria",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/dreackdown.png",
      team: "Programação",
    },
    {
      name: "Stefan Sanches",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/stephulz.png",
      team: "Front-End",
    },
    {
      name: "Gustavo Barreto",
      occupation: "Desenvolvedor Front-End",
      image: "https://github.com/botgu.png",
      team: "Front-End",
    },
    {
      name: "Lucas Sallada",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/yonlu.png",
      team: "Front-End",
    },
    {
      name: "Hugo Faria",
      occupation: "Desenvolvedor Full Stack",
      image: "https://github.com/dreackdown.png",
      team: "Front-End",
    },
  ]);

  const teams = [
    {
      label: "Programação",
      value: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    { label: "Front-End", primaryColor: "#82CFFA", secondaryColor: "#E8F8FF" },
    {
      label: "Data Science",
      value: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    { label: "Devops", primaryColor: "#E06B69", secondaryColor: "#FDE7E8" },
    {
      label: "UX e Design",
      value: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    { label: "Mobile", primaryColor: "#FFBA05", secondaryColor: "#FFF5D9" },
    {
      label: "Inovação e Gestão",
      value: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Click Criar Card: ", name, occupation, image, team);
    setCollaborator([...collaborators, { name, occupation, image, team }]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        name="create-colaborador"
        title="Preencha os dados para criar o card do colaborador"
        onSubmit={handleSave}
      >
        <TextInput
          label="Nome"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo..."
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da imagem..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <Select
          label="Time"
          placeholder="Escolha seu time..."
          options={teams}
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
        />
        <Button>Criar Card</Button>
      </Form>

      {teams.map(
        ({ label, value, primaryColor, secondaryColor }) =>
          collaborators.some(({ team }) => team === label) && (
            <Team
              name={label}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              key={`${label}-${value}`}
            >
              {collaborators.map(
                ({ name, occupation, image, team }) =>
                  team === label && (
                    <Collaborator
                      name={name}
                      occupation={occupation}
                      image={image}
                      primaryColor={primaryColor}
                      key={name}
                    />
                  )
              )}
            </Team>
          )
      )}
    </div>
  );
}

export default App;
