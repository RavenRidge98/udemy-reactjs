import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //validation HERE
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCg3Qk-SpQ-NVpLf0BlM1-32C0O1XAKm60",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //ALWAYS SUCCESSFUL!
      history.replace("./");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          type='password'
          id='new-password'
          minLength='6' //DONT USE THIS METHOD
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
