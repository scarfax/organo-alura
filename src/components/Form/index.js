import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css';

function Form(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const whenSaving = (event) => {
    event.preventDefault();
    props.castratedEmployee({ name, role, image, team });

    setName('');
    setRole('');
    setImage('');
    setTeam('');
  };

  return (
    <section className="forms">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          obligatory={true}
          label="Nome"
          placeholder="Digite seu nome"
          values={name}
          whenChanging={(values) => setName(values)}
        />
        <TextField
          obligatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          values={role}
          whenChanging={(values) => setRole(values)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          values={image}
          whenChanging={(values) => setImage(values)}
        />
        <Dropdown
          label="Time"
          itens={props.teams}
          values={team}
          whenChanging={(values) => setTeam(values)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
