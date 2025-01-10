


const Greeting = ({ title, name, children }) => {
  return (
    <div>
          <h1>{title}</h1>
          <p> Hello, {name}! </p>
      <div>{children}</div>
    </div>
  );
};


export default Greeting;