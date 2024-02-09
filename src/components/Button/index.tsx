import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles/styles';

interface IButtonProps extends TouchableOpacityProps {
    title:string;
}

const Button:React.FC<IButtonProps> = ({ title, ...rest }) => {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export { Button }