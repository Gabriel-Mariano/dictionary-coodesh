import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MyStackProps } from '@src/routes/Stack';
import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { db } from '../../config/firebase';
import { styles } from './styles/styles';

const HomeScreen = () => {
    const [words,setWords] = useState<any[]>([]);
    
    const { navigate } = useNavigation<NativeStackNavigationProp<MyStackProps>>();


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
        
            setWords(res[0].word); 
        }

        fetch();
    },[]);

    const handleTouch = (value:string) => {
        navigate("Details",{
            title:value
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperContent}>
                    {words?.map((value:string, index)=> <Card title={value} handleTouch={handleTouch} key={index}/> )}
                </View>
            </ScrollView>
        </View>
    )
}

export { HomeScreen };