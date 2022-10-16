import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    let data = {
        token : window.localStorage.getItem('token')
    }
    let navigate = useNavigate();
    let [result,setResult] = useState(false)
    function checkAuth(){
        axios.post('http://localhost:8080/auth', data)
        .then(response=>{
            if(response.data.message.email === window.localStorage.getItem('email')){
                setResult(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    return(
        <>
            {checkAuth()}
            {result?<children/>:navigate('/')}
        </>
    )
}
 export default ProtectedRoute;