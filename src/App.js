import s from "./Global.module.css"
import AddPlayerToGame from "./components/AddPlayerToGame/AddPlayerToGame";
import SelectPlayingPlayersPopup
    from "./components/PopupComponents/SelectPlayingPlayersPopup/SelectPlayingPlayersPopup";
import {useDispatch, useSelector} from "react-redux";
import PlayersInGame from "./components/PlayersInGame/PlayersInGame";
import ReadyTeams from "./components/PopupComponents/ReadyTeamsPopup/ReadyTeams";
import Button from "./components/globalComponents/Button/Button";
import {showReadyTeamsPopup} from "./redux/reducers/popupsReducer";
import Login from "./components/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import { getAuth } from "firebase/auth";
import {useEffect} from "react";
import {setAuthUser} from "./redux/reducers/isAuthReducer";
import Users from "./components/Firebase Test/Users";

function App() {
    const dispatch = useDispatch()
    const auth = getAuth()
    const authUser = useSelector((state) => {
        return state.isAuth
    })
    console.log(auth)
    useEffect(() => {
        console.log(auth.currentUser)
        if(auth.currentUser){
            dispatch(setAuthUser(auth.currentUser))
        }
    },[])

    const showLastTeamsResult = () => {
        dispatch(showReadyTeamsPopup())
    }
    const selectPlayingPlayersPopupStatus = useSelector((state) => {
        return state.popups.selectPlayingPlayersPopup
    })
    const readyTeamsPopupStatus = useSelector((state) => {
        return state.popups.readyTeamsPopup
    })
    const readyTeams = useSelector((state) => {
        return state.readyTeams
    })

  return (
    <div className={s.appWrapper}>

            <Navbar authUser={authUser}/>

        {authUser == null ?
            (<div className={s.backgroundBlack}><Users /><Login /></div>)
            :
            (<div className={s.backgroundBlack}>
                {selectPlayingPlayersPopupStatus && <SelectPlayingPlayersPopup />}
                <AddPlayerToGame />
                <PlayersInGame />
                {readyTeamsPopupStatus && <ReadyTeams team1={readyTeams.team1} team2={readyTeams.team2}/>}
                {readyTeams.team1.length > 0 && <div className={s.showLastResultsBlock}><Button text={"Show last Teams"} color={"generateColor"} callback={showLastTeamsResult}/></div>}

            </div>)
        }

    </div>
  );
}

export default App;


