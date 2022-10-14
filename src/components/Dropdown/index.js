import './Dropdown.css';

const Dropdown = (props) => {
  console.log(props.itens);
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
