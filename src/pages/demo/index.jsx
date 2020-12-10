import { useReducer } from 'react';
import { useAuth } from '../../core/hooks/useAuth';
// import { useAuth } from '../../core/hooks/useAuth';
// import { Reducer } from './reducer';
import './style.scss';
import { createStore } from 'redux';


const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}

let store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


store.subscribe(() => console.log(store.getState()))


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())



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

export default function Demo() {




    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)
    // let [count, setCount] = useState(0)

    let [state, dispach] = useReducer(Reducer, {
        count: 0,
        count2: 0,
        count3: 0,
        count4: 0
    })




    return (
        <main className="demopage demo">
            <p>click {state.count} times</p>
            <button onClick={() => dispach({ type: 'INCREMENT_1' })}>Click</button>
            <p>click {state.count2} times</p>
            <button onClick={() => dispach({ type: 'INCREMENT_2' })}>Click</button>
            <p>click {state.count3} times</p>
            <button onClick={() => dispach({ type: 'INCREMENT_3' })}>Click</button>
            <p>click {state.count4} times</p>
            <button onClick={() => dispach({ type: 'INCREMENT_4', asdf: 123423 })}>Click</button>
            <button onClick={() => dispach({ type: 'INCREMENT_8798', asdf: 123423 })}>Click 8957349875</button>

            <div>User</div>
            <A />
        </main>
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