import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import PropType from 'prop-types';

class Square extends Component {
    render(){
        return(
            <TouchableOpacity
                style={[{width: this.props.width, height: this.props.width,
                        backgroundColor: this.props.color},
                        styles.square]}
                        onPress={()=>{
                            this.props.onPress(this.props.index);
                        }}>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    square: {
        borderWidth: 1,
        borderColor: '#fff'
    }
});

Square.propTypes = {
    width: PropType.number.isRequired,
    color: PropType.string.isRequired,
    onPress: PropType.func.isRequired,
    index: PropType.number.isRequired
};

export default Square;
