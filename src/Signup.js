import React, { useState } from 'react'

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isError, setIsError] = useState(false);


  function onChangeUsername(e) {
      setUsername(e.target.value)
  }
  function onChangePassword(e) {
      setPassword(e.target.value)
  }

  function onChangeEmail(e) {
    setEmail(e.target.value)
}
function onChangeNumber(e) {
  setNumber(e.target.value)
  if(e.target.value.length>10){
    setIsError(true)
  }
}
  function onSubmit(e) {
      e.preventDefault()
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('email',email);
      localStorage.setItem('number',number);
  }

  function getData() {
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('password'))
     console.log(localStorage.getItem('email',email));
      console.log(localStorage.getItem('number',number));
  }
  return (
    <>
    <div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <label>Name</label>
                            <input type="text" value={username} onChange={onChangeUsername} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={onChangePassword} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="Email" value={email} onChange={onChangeEmail} />
                        </div>

                        <div>
                            <label>PhoneNumber</label>
                            <input type="PhoneNumber"  error={isError} value={number} onChange={onChangeNumber} />
                        </div>

                        <button type="submit">Submit</button>
                        <button type="button" onClick={getData}>Get Data</button>
                    </form>
                </div>
    </>
  )
}

export default Signup