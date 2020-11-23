import { createStore, applyMiddleware, compose } from 'redux';
// middlewares
import thunkMiddleware from 'redux-thunk'
// Import custom components
import reducers from '../Redux-reducer-action';

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));

export default store;