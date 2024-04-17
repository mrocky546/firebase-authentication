import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const HandelGoogleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div>
      <button onClick={HandelGoogleLogIn}>Google login</button>
    </div>
  );
};

export default Login;
