import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "../components/Login.css";

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeIDHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        console.log(value);
        setId(value);
    }

    const onChangePWHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        console.log(value);
        setPw(value);
    }

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="Login">
            <span>Sign in</span>
            <form onSubmit={onSubmitHandler}>
                <input className="login_input_id"
                type="text"
                 placeholder="ID"
                 value={id}
                 onChange={onChangeIDHandler}></input>
                <input className="login_input_pw" 
                type="password"
                placeholder="PW"
                value={pw}
                onChange={onChangePWHandler}></input>
                <button className="login_btn">SIGN IN</button>
            </form>
            <Link to="/register"><button className="login_join_btn">JOIN</button></Link>

        </div>
    );
};

export default Login;