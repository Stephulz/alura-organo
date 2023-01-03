import "./App.css";
import "./index.css";
import Banner from "./components/Banner/Banner";
import TextInput from "./components/TextInput/TextInput";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="App">
      <Banner />
      <TextInput
        label="Nome"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextInput
        label="Cargo"
        placeholder="Digite seu cargo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextInput
        label="Imagem"
        placeholder="Informe o endereço da imagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default App;
