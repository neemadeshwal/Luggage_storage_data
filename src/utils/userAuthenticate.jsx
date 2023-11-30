// import { useHistory } from "react-router-dom"


function userAuthentication(){
const loginInfo=JSON.parse(localStorage.getItem("User-LoginData"))
  console.log(loginInfo)
  if(loginInfo){
    return true
  }
  else{
    return false
  }
}

export {userAuthentication}