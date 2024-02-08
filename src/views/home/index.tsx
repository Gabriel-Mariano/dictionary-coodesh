import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { db } from '../../config/firebase';
import { styles } from './styles/styles';

const HomeScreen = () => {
    const [test,setTest] = useState<any[]>([])
    async function getWords() {
            const wordsCollection = db().collection('Dictionary');
            const snapshot = await wordsCollection.get();
            
            const words = [];
            snapshot.forEach(doc => {
                words.push(doc.data());
            });
            return words;
        }
        
    useEffect(()=> {
        const fetch = async () => {
            const res = await getWords();
        
            setTest(res[0].word); 
        }

        fetch();
    },[])
    return (
        <View style={styles.container}>
            <Text>Hello Coodesh</Text>
            {test?.map((item:any, index)=> {
                return (
                    <Text key={index}>{item}</Text>
                )
            })}
        </View>
    )
}

export { HomeScreen };