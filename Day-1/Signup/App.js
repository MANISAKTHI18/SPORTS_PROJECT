import './App.css';

function App() {
 
  return (
    <div className='log_main'>
      <h2 className='head'>WELCOME AGAIN!</h2>
      <form>
        <input className='inpt1' id="u_name" type='email' placeholder='Email Id'></input>
        <p></p>
        <input className='inpt1' type='password' placeholder='Password'></input>
        <p></p>
        <a className='link' href="www.google.com">Forgot password?</a>
        <p></p>
        <button className='btn1' type='button' >Login</button>
        <p></p>
        <p className='last'>Don't have an account?<span><a className="link2" href='www.google.com'>Register</a></span></p>
      </form>
    </div>
  );
}

export default App;