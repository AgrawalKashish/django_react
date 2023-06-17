import React, {useState, useEffect} from 'react'
import '../App.css'
import Apiservice from './Apiservice'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  const [isLogin, setIsLogin] = useState(true)
  let navigate = useNavigate()


  useEffect(()=>{
    if(token['mytoken']) navigate('/articles')
  },[token])
   

  const loginBtn = () =>{
    Apiservice.LoginUser({username, password})
    .then(resp => setToken('mytoken',resp.token))
    .catch(err => console.log(err))
  }

 const registerBtn = () =>{
    Apiservice.RegisterUser({username, password})
    
    .then(resp=> console.log(resp, 'register'))
    .catch(err => console.log(err))
  }
  return (
    <div className='App'>
       
       {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
       <br/>
       <br/>
       <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input type='text' className='form-control'
                 id="username" placeholder="please enter username"
                 value= {username} onChange= {e=> setUsername(e.target.value) }
                  />
       </div>
       <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type='text' className='form-control' 
                id="password" placeholder="please enter password"
                value= {password} onChange= {e=> setPassword(e.target.value) }
                />
       </div>
       {isLogin ? <button className='btn btn-primary' onClick={loginBtn}>Login</button> :
        <button className='btn btn-primary' onClick={registerBtn}>Register</button>}
       <div className='mb-3'>
          <br/>
          {isLogin ? 
          <p>If You don't have a account, Please <button className='btn btn-primary' onClick={()=> setIsLogin(false)}>Register</button> Here</p>
          :
           <p> If you have a account, Please <button className='btn btn-primary' onClick={()=> setIsLogin(true)}>Login</button> Here</p>
           }
       </div>
    </div>
  )
}

export default Login
