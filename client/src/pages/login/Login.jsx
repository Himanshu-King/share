import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const mail = useRef();
  const pass = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { mail: mail.current.value, pass: pass.current.value },
      dispatch
    );
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
              placeholder="mail"
              type="mail"
              required
              className="loginInput"
              ref={mail}
            />
            <input
              placeholder="pass"
              type="pass"
              required
              minLength="6"
              className="loginInput"
              ref={pass}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <div>
              Don't have an account ?
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                  ) : (
                    "Register Now"
                    )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
