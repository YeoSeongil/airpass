import React,{useState} from 'react';
import "../components/Signup.css"

const Signup = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onChangeIDHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        setId(value);
    }

    const onChangePWHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        setPw(value);
    }

    const onChangeNAMEHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        setName(value);
    }

    const onChangeEMAILHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {target:{value}}=e;
        setEmail(value);
    }



    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className="signup">
            <span>Join</span>
            <form onSubmit={onSubmitHandler}>
                <input className="signup_input_id"
                type="text"
                 placeholder="ID"
                 value={id}
                 onChange={onChangeIDHandler}></input>
                <input className="signup_input_pw" 
                type="password"
                placeholder="PW"
                value={pw}
                onChange={onChangePWHandler}></input>
                <input className="signup_input_name" 
                type="text"
                placeholder="NAME"
                value={name}
                onChange={onChangeNAMEHandler}></input>
                <input className="signup_input_email" 
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={onChangeEMAILHandler}></input>
                <button className="signup_btn">SIGN UP</button>
            </form>
        </div>
    );
};

export default Signup;