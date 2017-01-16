import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';

const RouterWithRedux = connect()(Router);
const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root" />
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;
