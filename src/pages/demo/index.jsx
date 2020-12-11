import { useReducer } from 'react';
import { useAuth } from '../../core/hooks/useAuth';
// import { useAuth } from '../../core/hooks/useAuth';
// import { Reducer } from './reducer';
import './style.scss';
import { createStore, combineReducers } from 'redux';
import { useSelector, Provider } from 'react-redux'


const increment1 = () => {
    return {
        type: 'INCREMENT_1'
    }
}
const increment2 = () => {
    return {
        type: 'INCREMENT_2'
    }
}
const increment3 = () => {
    return {
        type: 'INCREMENT_3'
    }
}
const increment4 = () => {
    return {
        type: 'INCREMENT_4'
    }
}
const increment5 = () => {
    return {
        type: 'INCREMENT_5'
    }
}

const decrement1 = () => {
    return {
        type: 'DECREMENT_1'
    }
}



export function counter(state = {
    count: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
}, action) {

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
        case 'INCREMENT_3':
            let { count3 } = state;
            count3++;
            return {
                ...state,
                count3
            }
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
}


// const counter = (state = {
//     count: 0,
//     count2: 0,
//     count3: 0,
//     count4: 0,
//     count5: 0,
// }, action) => {
//     switch (action.type) {
//         case 
//         default:
//             return state;
//     }
// }

let store = createStore(
    combineReducers({
        counter
    })
    ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(() => console.log(store.getState()))


store.dispatch(increment1())
store.dispatch(increment1())
store.dispatch(increment2())
store.dispatch(decrement1())




export default function Demo() {

    const counter = useSelector(state => state.counter)


    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)

    // let [state, dispach] = useReducer(Reducer, {
    //     count: 0,
    //     count2: 0,
    //     count3: 0,
    //     count4: 0
    // })




    return (
        <Provider store={store}>
            <main className="demopage demo">
                <p>click {counter.count} times</p>
                <button onClick={() => counter.dispach(increment1())}>Click</button>
                <p>click {counter.count2} times</p>
                <button onClick={() => counter.dispach(increment2())}>Click</button>
                <p>click {counter.count3} times</p>
                <button onClick={() => counter.dispach(increment3())}>Click</button>
                <p>click {counter.count4} times</p>
                <button onClick={() => counter.dispach(increment4())}>Click</button>
                <p>click {counter.count5} times</p>
                <button onClick={() => counter.dispach(increment5())}>Click</button>

                <div>User</div>
                <A />
            </main>
        </Provider>

    )
}

function A() {
    // let {user, login} = useContext(AppContext);

    let { user, login } = useAuth();

    return <div>
        <div style={{ fontSize: 100 }}>{login && 'Login'}</div>
        {user.name}
    </div>
}

// function B (){
//     let {background, color} = useContext(ThemeContext);
//     let {user} = useContext(AppContext);
//     return <div style={{background, color}}>
//         {user.name}
//     </div>
// }