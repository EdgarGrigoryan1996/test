import "./card.css"
import noImg from "../../../assets/playerImages/noImg.png"
import armeniaFlag from "../../../assets/images/armenia.png"
import {useDispatch} from "react-redux";
import {removePlayer} from "../../../redux/reducers/readyPlayersReducer";
import {removeChecked} from "../../../redux/reducers/defaultPlayersReducer";

const PlayerInGame = ({player,badPlayer,onlySee}) =>{
    const dispatch = useDispatch()
    return (
        <div className={badPlayer ? "wrapper badPlayer" : "wrapper"}>
            {!onlySee && <span className="close-card" onClick={() => {
                dispatch(removePlayer(player.id))
                dispatch(removeChecked(player.id))
            }}>x</span>}
            <div className="fut-player-card">
                <div className="player-card-top">
                    <div className="player-master-info">
                        <div className="player-rating"><span>{player.rating}</span></div>
                        <div className="player-position"><span>{player.position}</span></div>
                        <div className="player-nation"><img
                            src={armeniaFlag} alt="Argentina"
                            draggable="false"/></div>
                        <div className="player-club"><img
                            src={player.companyImage} alt="Company Name"
                            draggable="false"/></div>
                    </div>
                    <div className="player-picture"><img
                        src={player.img ? player.img : noImg} alt="Messi"
                        draggable="false"/>
                    </div>
                </div>
                <div className="player-card-bottom">
                    <div className="player-info">
                        <div className="player-name"><span>{player.name}</span></div>
                        <div className="player-features">
                            <div className="player-features-col"><span>
              <div className="player-feature-value">{player.skills.pace}</div>
              <div className="player-feature-title">PAC</div></span><span>
              <div className="player-feature-value">{player.skills.shooting}</div>
              <div className="player-feature-title">SHO</div></span><span>
              <div className="player-feature-value">{player.skills.passing}</div>
              <div className="player-feature-title">PAS</div></span></div>
                            <div className="player-features-col"><span>
              <div className="player-feature-value">{player.skills.dribbling}</div>
              <div className="player-feature-title">DRI</div></span><span>
              <div className="player-feature-value">{player.skills.defending}</div>
              <div className="player-feature-title">DEF</div></span><span>
              <div className="player-feature-value">{player.skills.physical}</div>
              <div className="player-feature-title">PHY</div></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerInGame