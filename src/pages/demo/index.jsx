import { useContext, useEffect, useReducer, useState } from 'react';
import { AppContext } from '../../App';
import { useAuth, AuthContext } from '../../core/hooks/useAuth';
// import { useAuth } from '../../core/hooks/useAuth';
// import { Reducer } from './reducer';
import './style.scss';


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

export default function Demo({user}) {


    let appContext = useContext(AuthContext);


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
            <A/>
        </main>
    )
}

function A(){
    // let {user, login} = useContext(AppContext);

    let { user, login } = useAuth();

    return <div>
        <div style={{fontSize: 100}}>{login && 'Login'}</div>
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