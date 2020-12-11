

const initState = {
    count: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0
}

export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case 'INCREMENT_1':
            return {
                ...state,
                count: state.count + (action.payload || 1)
            }
        case 'INCREMENT_2':
            return {
                ...state,
                count2: state.count2 + 1
            }
        case 'INCREMENT_3':
            return {
                ...state,
                count3: state.count3 + 1
            }
        case 'INCREMENT_4':
            return {
                ...state,
                count4: state.count4 + 1
            }
        case 'INCREMENT_5':
            return {
                ...state,
                count5: state.count5 + 1
            }

        default:
            return state;
    }
}