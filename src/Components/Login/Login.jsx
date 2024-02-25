import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Lato, sans-serif',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    backgroundImage: "url('https://www.freepik.com/free-photo/construction-workers-sunset_18416405.htm#query=construction%20background&position=1&from_view=keyword&track=ais&uuid=6e3e2777-e86e-491a-bdfe-d10261508128')", // Update the URL with your image path
    backgroundSize: 'cover',
    filter: 'blur(5px)',
  },
  form: {
    width: '350px',
    position: 'relative',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#007bff',
  },
  btn: {
    backgroundColor: 'yellow',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  btnHover: {
    backgroundColor: 'white',
  },
};

export default Login;