import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropType from 'prop-types';

/* Components */
import Square from './Square';

/* Styles */
import globalStyles from '../styles/GlobalStyles';

class Artboard extends Component {
    state = {
        squares: []
    }

    componentDidMount(){
        /* Set each square object */
        this.setState({
            squares: Array.from({length: this._totalSquares}).map((item, index) => {
                return { color: colors[index % this.props.rows]};
            })
        });
    }

    /* Total Square to place on board */
    _totalSquares = this.props.rows * this.props.columns

    /* Calculate the length(L) for each square */
    _squareWidth = (this.props.width / this.props.columns) - 2


    /* Set color of next element on press */
    _onPressHandler = (index) => {
        /* Check if there is a next box */
        if(index < this._totalSquares - 1){
            const selectedBackgroundColor = this.state.squares[index].color;
            this.setState((prevState) => {
                prevState.squares[index + 1].color = selectedBackgroundColor;
                return { squares: prevState.squares };
            });
        }
    }


    render() {
        return (
            <ScrollView style={globalStyles.board}>
                <View style={styles.container}>
                    {this.state.squares.map((box, index)=>(
                        <Square key={`box_${index}`}
                                width={this._squareWidth}
                                color={this.state.squares[index].color}
                                onPress={this._onPressHandler}
                                index={index}>
                        </Square>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

/* Predefined color */
const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];

Artboard.propTypes = {
    width: PropType.number.isRequired,
    height: PropType.number.isRequired,
    rows: PropType.number.isRequired,
    columns: PropType.number.isRequired
};

export default Artboard;
