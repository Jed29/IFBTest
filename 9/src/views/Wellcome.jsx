import React, {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
export default function Wellcome() {
    const history = useHistory()
    useEffect(() => {
    if (!localStorage.user) {
        history.push("/login");
    }},[]);

    function logOut(e){
        e.preventDefault()
        localStorage.clear()
        history.push('/login')
    }
    
    return (
        <div>
            <h1>SELAMAT DATANG</h1>
            <button className="bg-red-600 p-2 text-white" onClick={logOut}>
                LogOut
            </button>
        </div>
    )
}
