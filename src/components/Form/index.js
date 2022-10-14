import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css';

function Form() {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Designs',
    'Mobile',
    'Inovação e Gestão',
  ];

  const whenSaving = (event) => {
    event.preventDefault();
    console.log('Formulario Submetido');
  };

  return (
    <section className="forms">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          obligatory={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          obligatory={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" itens={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}

export default Form;
