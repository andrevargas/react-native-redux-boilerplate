import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(createLogger())
        )
    );
};

export default configureStore;
