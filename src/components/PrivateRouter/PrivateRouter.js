import React,{ useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    let data = {
        token : window.localStorage.getItem('token')
    }
    let navigate = useNavigate();
    let [result,setResult] = useState(false)
    function checkAuth(){
        axios.post('https://realestate-backend-10x.herokuapp.com/auth', data)
        .then(response=>{
            if(response.data.messesge.email === window.localStorage.getItem('email')){
                console.log(result,response.data.messesge.email);
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