import './TextField.css';

const TextField = (props) => {
  const placeholdermodified = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.whenChanging(event.target.value);
  };

  console.log(props.label);
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.values}
        onChange={whenTyped}
        required={props.obligatory}
        placeholder={placeholdermodified}
      />
    </div>
  );
};

export default TextField;
