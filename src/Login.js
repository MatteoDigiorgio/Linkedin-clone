import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
        alt=""
      />

      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span
          className="login__register"
          onClick={() => props.onFormSwitch("register")}
        >
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
