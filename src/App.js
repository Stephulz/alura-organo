import "./App.css";
import "./index.css";
import Banner from "./components/Banner/Banner";
import TextInput from "./components/TextInput/TextInput";
import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [nome, setNome] = useState("");

  return (
    <div className="App">
      <Banner />
      <Form
        name="create-colaborador"
        title="Preencha os dados para criar o card do colaborador"
      />
      <Button onClick={(e) => console.log("Click Criar Card")}>
        Criar Card
      </Button>
    </div>
  );
}

export default App;
