import React from 'react';
import s from "./Navbar.module.css"
import { getAuth, signOut } from "firebase/auth";
import Button from "../globalComponents/Button/Button";
import {useDispatch} from "react-redux";
import {signOutAC} from "../../redux/reducers/isAuthReducer";
function Navbar(props) {
    const dispatch = useDispatch()
    function signOutCallback(){
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(signOutAC())
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className={s.navbar}>
            <div>Logo</div>
            {props.authUser ?
                (
                    <div className={s.authUser}>
                        <div className={s.avatar}></div>
                        <div>{props.authUser.email}</div>
                        <button className={s.signOut} onClick={signOutCallback}>Sign Out</button>
                    </div>
                )
                :
                (
                    <div><Button text={"Sign In"} color={"myColor"} /></div>
                )}
        </div>
    );
}

export default Navbar;