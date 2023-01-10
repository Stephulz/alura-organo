import "./Form.css";

const Form = ({ name, title, children }) => {
  return (
    <section data-testid={`form-${name}-section`} className="form-section">
      <form data-testid={`form-${name}`} name={name}>
        <h2 data-testid={`form-${name}-title`}>{title}</h2>
        {children}
      </form>
    </section>
  );
};

export default Form;
