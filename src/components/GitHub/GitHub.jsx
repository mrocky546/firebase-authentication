import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const GitHub = () => {
  const auth = getAuth (app);
  const provider = new GithubAuthProvider();

  const HandelGitHubLog = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={HandelGitHubLog}>GitHubLog</button>
    </div>
  );
};

export default GitHub;
