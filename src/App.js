import { useState } from "react";

import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Select from "./components/Select/Select";
import TextInput from "./components/TextInput/TextInput";

import "./App.css";
import "./index.css";

function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="App">
      <Banner />
      <Form
        name="create-colaborador"
        title="Preencha os dados para criar o card do colaborador"
      >
        <TextInput
          label="Nome"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo..."
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da imagem..."
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <Select
          label="Time"
          placeholder="Escolha seu time..."
          options={[
            { label: "Devops", value: "DEVOPS" },
            { label: "Programação", value: "PROGRAMACAO" },
          ]}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button onClick={(e) => console.log("Click Criar Card")}>
          Criar Card
        </Button>
      </Form>
    </div>
  );
}

export default App;
