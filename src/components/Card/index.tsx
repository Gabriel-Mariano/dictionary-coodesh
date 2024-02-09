import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles/styles';

interface ICardProps {
    title:string;
    handleTouch:(value: string) => void;
}

const Card:React.FC<ICardProps> = ({ title, handleTouch }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> handleTouch(title)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export { Card }