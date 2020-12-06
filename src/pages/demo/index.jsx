import { useContext, useEffect, useReducer, useState } from 'react';
import { useAuth } from '../../core/hooks/useAuth';
// import { useAuth } from '../../core/hooks/useAuth';
import { Reducer } from './reducer';
import './style.scss';



export default function Demo({user}) {

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