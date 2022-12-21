import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";

function Register(props) {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // prettier-ignore
  const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

  const register = (e) => {
    e.preventDefault();

    if (re.test(name) && name) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL: profilePic,
                })
              );
            });
        })
        .catch((error) => alert(error));
    } else {
      return alert("Please enter a full name!");
    }
  };

  return (
    <div className="register">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
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
        <button type="submit" onClick={register}>
          Sign Up
        </button>
      </form>

      <p>
        Already a member?{" "}
        <span
          className="register__login"
          onClick={() => props.onFormSwitch("login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
