import React,{createContext, useContext,useState} from "react";

import { useNavigate } from "react-router-dom";
const AppContext=createContext()
import eyeon from '../pages/Assets/eye.png';
import eyeoff from '../pages/Assets/hidden.png';
 

const AppProvider=({children})=>{
 
    const isLoggedIn=true
    const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeoff);
  const [loginData,setLoginData]=useState({
    loginPhno:"",
    loginPassword:""
  })
  const [registerData,setRegisterData]=useState({
    name:"",
    registerNum:"",
    registerPass:"",
    registerConfirmPass:""
  })
  const [loginChecked,setLoginChecked]=useState(false)

  function handleLoginChecked(e){
    if(e.target.checked){
      setLoginChecked(true)

    }
    else{
      setLoginChecked(false)
    }
  }
function handleInputChange(e){
  const {name,value}=e.target
  setLoginData((prevData)=>{
    return {...prevData,[name]:value}
  })
  setRegisterData((prevData)=>{
    return{...prevData,[name]:value}
  })
}

  function handleLoginSubmit(e){
    
    e.preventDefault()
    console.log(loginData.loginPhno)
   if(loginData.loginPhno &&  loginData.loginPassword){
    console.log(loginChecked,isLoggedIn)
    console.log("got data")
    if(loginChecked&&isLoggedIn){
     localStorage.setItem("User-LoginData",JSON.stringify(loginData))
      console.log("saved to local storage")
    }
   }
   else {
    console.log("Please provide credentials")

   }
   console.log(loginData)
  
  }
  
 

  const passHideToggle = () => {
    setType((prevState) => (prevState === 'text' ? 'password' : 'text'));

    
    setIcon((prevIcon) => (prevIcon === eyeoff ? eyeon : eyeoff));
  };
  function displayMsg(text,action){
    const showMsg=document.querySelector(".msg")
    showMsg.textContent=text
    showMsg.classList.add(`alert-${action}`)

    setTimeout(()=>{
      showMsg.textContent=""
      showMsg.classList.remove(`alert-${action}`)
    },1000)
  }

    return(
        <AppContext.Provider value={{type,
        icon,
        passHideToggle,
        handleInputChange,
        loginData,
        handleLoginSubmit,
        handleLoginChecked,
        loginChecked,
        registerData,
        displayMsg

        }}>
          {children}
        </AppContext.Provider>
    )
}

const useGlobalContext=()=>{
return(
    useContext(AppContext)
)
}

export {useGlobalContext,AppProvider}
