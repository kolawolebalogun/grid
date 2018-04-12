import React, { Component } from 'react';
import { Dimensions } from 'react-native';

/* Component */
import Artboard from './src/components/Artboard';


export default class App extends Component{
    state = {
        // TODO: Handle Orientation Change
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }


    render() {
        return (
            <Artboard
                width={this.state.width}
                height={this.state.height}
                rows={7}
                columns={7} />
        );
    }
}
