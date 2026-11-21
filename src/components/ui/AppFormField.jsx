const AppFormField = ({ label, id, ...inputProps }) => {
  return (
    <label className="form__lable" htmlFor={id}>
      <span className="form__text">{label}</span>
      <input id={id} className="form__input" {...inputProps} />
    </label>
  );
}

export default AppFormField;