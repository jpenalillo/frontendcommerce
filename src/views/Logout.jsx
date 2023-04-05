import React, { useContext,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
export default function Logout() {
  const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("token", '');
        navigate("/");
    })        
    return (
   <></>
  )
}