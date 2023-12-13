import './App.css';

function App() {
  return (
    <div className='main_css'>
      <h2 className='signup'>Sign Up</h2>
      <form>
        <input type='text' placeholder='Name' className='inpt'/>
        <p></p>
        <input type='email' placeholder='E-mail' className='inpt'/>
        <p></p>
        <input type='password' placeholder='Password' className='inpt'/>
        <p></p>
        <p><input type='checkbox'/><span>I read and agree to</span><span><a href='#.com' className='link'> Terms & Condition</a></span></p>
        <button type='button' className='btn'>Create Account</button>
      </form>
      
    </div>
  );
}

export default App;

