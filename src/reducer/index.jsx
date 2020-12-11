import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import counterReducer from './couterReducer';
import homeReducer from './homeReducer';
import logger from 'redux-logger'


const middleware = store => next => action => {
    // console.log(store.getState());
    if (action.payload % 2 === 0) {
        return next(action);
    }
    return () => { }
}

const store = createStore(combineReducers({
    counter: counterReducer,
    home: homeReducer,
    // a: aReducer,
}),
    {},
    compose(
        applyMiddleware( logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )
    // , 

)

export default store;



// let next = store.dispatch;

// store.dispatch = function(action){
//     console.log('prev', store.getState())
//     next(action)
//     console.log('after', store.getState())
// }

// store.dispatch({type: 'INCREMENT_1', payload: 10})
// store.dispatch({type: 'INCREMENT_1'})
// store.dispatch({type: 'INCREMENT_1'})
// store.dispatch({type: 'INCREMENT_1'})

// const store = createStore(counterReducer)

// store.subscribe(() => console.log(store.getState()))