import { useState } from "react";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import "./Form.css";

const Form = ({ name, title }) => {
  const [time, setTime] = useState("");

  return (
    <section data-testid={`form-${name}-section`} className="form-section">
      <form data-testid={`form-${name}`} name={name}>
        <h2 data-testid={`form-${name}-title`}>{title}</h2>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome..."
          //value={nome}
          //onChange={(e) => setNome(e.target.value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo..."
          //value={nome}
          //onChange={(e) => setNome(e.target.value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da imagem..."
          //value={nome}
          //onChange={(e) => setNome(e.target.value)}
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
      </form>
    </section>
  );
};

export default Form;
