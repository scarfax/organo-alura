import './TextField.css';

const TextField = (props) => {
  console.log(props.label);
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input required={props.obligatory} placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
