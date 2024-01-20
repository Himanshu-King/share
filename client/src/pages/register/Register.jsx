import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const Name = useRef();
  const mail = useRef();
  const pass = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== pass.current.value) {
      passwordAgain.current.setCustomValidity("passs don't match!");
    } else {
      const user = {
        Name: Name.current.value,
        mail: mail.current.value,
        pass: pass.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Merny</h3>
          <span className="loginDesc">
            We connect you to the world.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Fullname"
              required
              className="loginInput"
            />
            <input
              placeholder="Name"
              required
              ref={Name}
              className="loginInput"
            />
            <input
              placeholder="mail"
              required
              ref={mail}
              className="loginInput"
              type="mail"
            />
            <input
              placeholder="pass"
              required
              ref={pass}
              className="loginInput"
              type="pass"
              minLength="6"
            />
            <input
              placeholder="pass Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="pass"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <div>
            Already have an account ?<button className="loginRegisterButton">Login Now</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
