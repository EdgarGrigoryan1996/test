import React, {useState} from 'react';
import s from "./Login.module.css"
import Button from "../globalComponents/Button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setAuthUser} from "../../redux/reducers/isAuthReducer";

function Login(props) {
    const dispatch = useDispatch()
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className={s.loginWrapper}>
            <div className={s.loginBlock}>
                <input type="text" placeholder={"Login"} value={login} onChange={(e) => setLogin(e.target.value)}/>
                <input type="password" placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button text={"Sign Up"} color={"myColor"} callback={function(){
                    const auth = getAuth();
                    signInWithEmailAndPassword(auth, login, password)
                        .then((userCredential) => {
                            // Signed in
                            const user = userCredential.user;
                            dispatch(setAuthUser(user))
                            console.log(user)
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage)
                        });
                }}/>
            </div>
        </div>
    );
}

export default Login;