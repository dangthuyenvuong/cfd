


export function Reducer(state, action) {

    switch (action.type) {
        case 'INCREMENT_1':
            
            return {
                ...state,
                count: state.count + 1
            }
        case 'INCREMENT_2':
            
            return {
                ...state,
                count2: state.count2 + 1
            }
            break;
        case 'INCREMENT_3':
            let { count3 } = state;
            count3++;
            return {
                ...state,
                count3
            }
            break;
        case 'INCREMENT_4':
            let { count4 } = state;
            count4++;
            return {
                ...state,
                count4
            }

        default:
            return state;
    }
    return state;
}