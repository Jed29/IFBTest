import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.user){
            history.push('/')
        }
    },[])

    function submitLogin(e){
        e.preventDefault()
        localStorage.setItem("user",username && password)
        history.push('/')
    }
    return (
        <div>
            <form action="" className="" onSubmit={submitLogin}>
                <h2>Login Page</h2>
                <label className="block" htmlFor="">UserName</label>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
                <label htmlFor="" className="block">Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password"/>
                <button className='border bg-red-600 text-white block'>
                    Login
                </button>
            </form>
        </div>
    )
}
