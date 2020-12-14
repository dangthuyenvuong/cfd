import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment1, increment2, increment3, increment4, increment5 } from "../../actions/counterAction";
import './style.scss'




export default function Demo2() {


    let counter = useSelector(store => store.counter);
    let dispatch = useDispatch();

    // let [count, setCount] = useState(0)
    // let [count2, setCount2] = useState(0)
    // let [count3, setCount3] = useState(0)
    // let [count4, setCount4] = useState(0)
    // let [count5, setCount5] = useState(0)


    // function increment1() { setCount(count + 1) }
    // function increment2() { setCount2(count2 + 1) }
    // function increment3() { setCount3(count3 + 1) }
    // function increment4() { setCount4(count4 + 1) }
    // function increment5() { setCount5(count5 + 1) }

    function inc1(){
        let num = Math.round(Math.random() * 10)
        console.log(num)
        dispatch(increment1(num))
    }

    return (
        <main className="demopage demo2">
            <p>click {counter.count} times</p>
            <button onClick={inc1}>Click</button>
            <p>click {counter.count2} times</p>
            <button onClick={() => (dispatch(increment2()))}>Click</button>
            <p>click {counter.count3} times</p>
            <button onClick={() => (dispatch(increment3()))}>Click</button>
            <p>click {counter.count4} times</p>
            <button onClick={() => (dispatch(increment4()))}>Click</button>
            <p>click {counter.count5} times</p>
            <button onClick={() => (dispatch(increment5()))}>Click</button>

            <div>User</div>
        </main>
    )
}