import s from "./Global.module.css"
import AddPlayerToGame from "./components/AddPlayerToGame/AddPlayerToGame";
import SelectPlayingPlayersPopup
    from "./components/PopupComponents/SelectPlayingPlayersPopup/SelectPlayingPlayersPopup";
import {useDispatch, useSelector} from "react-redux";
import PlayersInGame from "./components/PlayersInGame/PlayersInGame";
import ReadyTeams from "./components/PopupComponents/ReadyTeamsPopup/ReadyTeams";
import Button from "./components/globalComponents/Button/Button";
import {showReadyTeamsPopup} from "./redux/reducers/popupsReducer";

function App() {
    const dispatch = useDispatch()
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
      <div className={s.backgroundBlack}>
          {selectPlayingPlayersPopupStatus && <SelectPlayingPlayersPopup />}
        <AddPlayerToGame />
          <PlayersInGame />
          {readyTeamsPopupStatus && <ReadyTeams team1={readyTeams.team1} team2={readyTeams.team2}/>}
          {readyTeams.team1.length > 0 && <div className={s.showLastResultsBlock}><Button text={"Show last Teams"} color={"generateColor"} callback={showLastTeamsResult}/></div>}

      </div>
    </div>
  );
}

export default App;
