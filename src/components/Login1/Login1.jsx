import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login1 = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const HandelLogIn1 = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={HandelLogIn1}>logIn1</button>
    </div>
  );
};

export default Login1;
