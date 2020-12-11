import { INIT_DATA, UPDATE_DATA } from '../actions'
const initState = {
    offline: [],
    online: [],
    loading: true,
}

export default function homeReducer(state = initState, action) {
    console.log(action.type)

    switch (action.type) {
        case INIT_DATA:

            return {
                ...state,
                loading: false,
                online: action.payload.online,
                offline: action.payload.offline
            }
            break;
        case UPDATE_DATA:

            return {
                ...state,
                loading: false,
                online: action.payload.online,
                offline: action.payload.offline
            }
            break;

        default:
            return state;
    }
}