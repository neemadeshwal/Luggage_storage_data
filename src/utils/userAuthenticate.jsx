// import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function userAuthentication(){
  const navigate=useNavigate()
const loginInfo=JSON.parse(localStorage.getItem("User-LoginData"))
  console.log(loginInfo)
  if(loginInfo){
    navigate.push("/")
  }
  else{
    console.log("no user found")
    return;
  }
}

export {userAuthentication}