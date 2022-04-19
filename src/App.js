import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>XSS Vulnerability</h1>
        <p>by Igor Mpore</p>
      </header>
      <div className='formWrapper'>
        <div className='form'>
          <input type="text" placeholder='Your name' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Type your comment'></textarea>
          <button>Submit</button>
        </div>
      </div>
      <div className='notifyWrapper'>
        <p className='notification-1'>Thanks for submission! </p>
        <p className='notification-2'> Your comment was successfully recieved.</p>
      </div>
    </div>
  );
}

export default App;
