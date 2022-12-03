import {combineReducers, createStore} from "redux";
import defaultPlayersReducer from "./reducers/defaultPlayersReducer";
import popupsReducer from "./reducers/popupsReducer";
import readyPlayersReducer from "./reducers/readyPlayersReducer";
import readyTeamsReducer from "./reducers/readyTeamsReducer";
import isAuthReducer from "./reducers/isAuthReducer";

const reducers = combineReducers({
    defaultPlayers:defaultPlayersReducer,
    readyPlayers:readyPlayersReducer,
    popups:popupsReducer,
    readyTeams:readyTeamsReducer,
    isAuth:isAuthReducer
})

const store = createStore(reducers)
window.store = store
export default store