import {combineReducers, createStore} from "redux";
import defaultPlayersReducer from "./reducers/defaultPlayersReducer";
import popupsReducer from "./reducers/popupsReducer";
import readyPlayersReducer from "./reducers/readyPlayersReducer";
import readyTeamsReducer from "./reducers/readyTeamsReducer";

const reducers = combineReducers({
    defaultPlayers:defaultPlayersReducer,
    readyPlayers:readyPlayersReducer,
    popups:popupsReducer,
    readyTeams:readyTeamsReducer
})

const store = createStore(reducers)
window.store = store
export default store