import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login exitoso para usuario: ${values.email}`);
    // POST http://localhost:3000/api/user/login
    // body ->{email,password}

/*     fetch("http://localhost:3000/api/user/login",{
        method:"POST",
        body:{email,password}
    }) */
  };

  // Calculamos si el formulario es válido
  const isFormValid = values.email.trim() !== "" && values.password.length >= 8;

  return (
    <>
      <h2>Haz login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" onChange={handleChange}></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" onChange={handleChange}></input>
        <br />
        <button disabled={!isFormValid}>Login</button>
        {/* {values.email && values.password.length>=8?<button>Login</button>:""} */}
      </form>
      <p>{values.email}</p>
      <p>{values.password ? "*".repeat(values.password.length) : ""}</p>
    </>
  );
};

export default Login;
