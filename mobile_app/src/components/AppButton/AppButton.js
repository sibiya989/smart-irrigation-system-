import React from 'react';
import {Text, TouchableHighlight } from 'react-native';
import { Styles } from '../Strings/globalStyles';

const AppButton = (props) => {
    return (<TouchableHighlight style={[Styles.buttonStyle, props.customStyle]} underlayColor={props.color} onPress={props.emailLogin}>
    <Text style={[Styles.buttonTextStyle]}>{props.buttonText}</Text>
</TouchableHighlight>);
}

export default AppButton;