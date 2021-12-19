
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apicalls";
import { AuthContext } from "../../Context/AuthContext";
export default function Login() {

    const email = useRef();
    const password = useRef();
    const { isFetching, user, err, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value,password: password.current.value},dispatch)
    }
    console.log('user:', user)


    return (
        <div className="login">
            <div className="loginwraper">
                <div className="loginleft">
                    <h3 className="loginlogo">LogoHere</h3>
          <span className="loginDesc">Slogan of instagram</span>
                </div>
                <div className="loginright">
                    <form className="loginBox" onSubmit={handleClick }>
                        <input placeholder="mail" type="text" required className="loginIp" ref={email }/>
                        <input placeholder="pass" type="password" required minLength="3" className="loginIp" ref={ password}/>
                        <button className="lognBtn">Login </button>
                        <span className="loginForget">Forgot password?</span>
                    </form>
          <button className="loginRegisterBtn">New account </button>
                </div>
            </div>
        </div>
    )
}
