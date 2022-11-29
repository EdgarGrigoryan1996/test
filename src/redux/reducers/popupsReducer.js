const SHOW_DEFAULT_PLAYERS_POPUP = "SHOW_DEFAULT_PLAYERS_POPUP"
const CLOSE_DEFAULT_PLAYERS_POPUP = "CLOSE_DEFAULT_PLAYERS_POPUP"
const SHOW_ADD_NEW_PLAYER_POPUP = "SHOW_ADD_NEW_PLAYER_POPUP"
const CLOSE_ADD_NEW_PLAYER_POPUP = "CLOSE_ADD_NEW_PLAYER_POPUP"
const SHOW_READY_TEAMS_POPUP = "SHOW_READY_TEAMS_POPUP"
const CLOSE_READY_TEAMS_POPUP = "CLOSE_READY_TEAMS_POPUP"

const initialSTate = {
    selectPlayingPlayersPopup:false,
    addNewPlayerPopup:false,
    readyTeamsPopup:false
}

const popupsReducer = (state = initialSTate,action) =>{
    switch (action.type) {
        case SHOW_DEFAULT_PLAYERS_POPUP:
            return {
                ...state,
                selectPlayingPlayersPopup:action.payload.selectPlayingPlayersPopup
            }
        case CLOSE_DEFAULT_PLAYERS_POPUP:
            return {
                ...state,
                selectPlayingPlayersPopup:action.payload.selectPlayingPlayersPopup
            }

        case SHOW_ADD_NEW_PLAYER_POPUP:
            return {
                ...state,
                addNewPlayerPopup:action.payload.selectPlayingPlayersPopup
            }
        case CLOSE_ADD_NEW_PLAYER_POPUP:
            return {
                ...state,
                addNewPlayerPopup:action.payload.selectPlayingPlayersPopup
            }

        case SHOW_READY_TEAMS_POPUP:
            return {
                ...state,
                readyTeamsPopup:action.payload.readyTeamsStatus
            }
        case CLOSE_READY_TEAMS_POPUP:
            return {
                ...state,
                readyTeamsPopup:action.payload.readyTeamsStatus
            }
        default:
            return state
    }
}

export const showDefaultPlayersPopup = () => {
    return {
        type:SHOW_DEFAULT_PLAYERS_POPUP,
        payload:{
            selectPlayingPlayersPopup:true
        }
    }
}
export const closeDefaultPlayersPopup = () => {
    return {
        type:CLOSE_DEFAULT_PLAYERS_POPUP,
        payload:{
            selectPlayingPlayersPopup:false
        }
    }
}


export const showAddNewPlayerPopup = () => {
    return {
        type:SHOW_ADD_NEW_PLAYER_POPUP,
        payload:{
            selectPlayingPlayersPopup:true
        }
    }
}

export const closeAddNewPlayerPopup = () => {
    return {
        type:CLOSE_ADD_NEW_PLAYER_POPUP,
        payload:{
            selectPlayingPlayersPopup:false
        }
    }
}

export const showReadyTeamsPopup = () => {
    return {
        type:SHOW_READY_TEAMS_POPUP,
        payload:{
            readyTeamsStatus:true
        }
    }
}

export const closeReadyTeamsPopup = () => {
    return {
        type:CLOSE_READY_TEAMS_POPUP,
        payload:{
            readyTeamsStatus:false
        }
    }
}

export default popupsReducer