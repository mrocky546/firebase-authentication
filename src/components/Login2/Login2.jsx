import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login2 = () => {

const [user, setUser] = useState(null)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const HandelLogin2 = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const LogInUser = result.user;
        setUser(LogInUser)
        console.log(user);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const HandelLogOut2 = () =>{
    signOut(auth)
    .then(()=>{
        console.log('Sign-out successful');
        setUser(null)
    })
    .catch(error =>{
        console.log(error.message);
    })

  }


  return (
    <div>
      <button onClick={HandelLogin2}>Login2</button>
      <button onClick={HandelLogOut2} >LogOut2</button>



     


    </div>
  );
};

export default Login2;
