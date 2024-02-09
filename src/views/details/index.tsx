import { useEffect, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MyStackProps } from '@src/routes/Stack';
import { styles } from './styles/styles';
import { useWords } from '../../context/words';
import axios from 'axios';

type RootStackParamList = {
    Details: { title: string };
};
  
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
    const [data, setData] = useState({
        word:"",
        phonetics:[],
        audios:[],
        verb:""
    })

    const { favoriteWords, setFavoriteWords } = useWords();
    const { navigate } = useNavigation<NativeStackNavigationProp<MyStackProps>>();
    const { params } = useRoute<DetailsScreenRouteProp>();

    useEffect(()=> {
        fetch();
    },[params.title]);

    const fetch = useCallback(async () => {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${params?.title}`);
        
        setData({
            word:res.data[0].word,
            phonetics:res.data[0].phonetics.map((item:any)=> item.text),
            audios:res.data[0].phonetics.map((item:any)=> item.audio),
            verb:res.data[0].meanings?.map((item:any)=> item.definitions[0].definition)[0]
        })
    },[params.title]);

    const favoriteItem = () => {
        const result = favoriteWords.filter((item)=> item.word === params?.title);

        if(result.length < 1) {
            setFavoriteWords((old)=> [...old, { word:params.title, active:true }])
        } else {
            const itemRemoved = favoriteWords.filter((item)=> item.word !== params?.title);
            setFavoriteWords(itemRemoved);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{data?.word}</Text>
                {data?.phonetics.map((item, index)=> {
                    return <Text key={index}>{item}</Text>
                })}
            </View>
            <View>
                <Text>Tocador</Text>
            </View>
            <View>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>Meanings</Text>
                    <Button title='' onPress={favoriteItem}>Favoritar</Button>
                </View>
                <Text style={styles.text}>Verb - {data.verb}</Text>
            </View>
            <View style={styles.footer}>
                <Button title='Voltar' onPress={()=> navigate("MyTabs")}></Button>
                <Button title='Próximo'></Button>
            </View>
        </View>
    )
}

export { DetailsScreen };