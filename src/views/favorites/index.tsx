import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IFavoriteValues, useWords } from '../../context/words';
import { MyStackProps } from '../../routes/Stack';
import { View, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { styles } from './styles/styles';

const FavoriteScreen = () => {
    const { favoriteWords } = useWords();
    console.log(favoriteWords)

    const { navigate } = useNavigation<NativeStackNavigationProp<MyStackProps>>();

    const handleTouch = (value:string) => {
        navigate("Details",{
            title:value
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperContent}>
                    {favoriteWords?.map((item:IFavoriteValues, index) => {
                        return (
                            <Card title={item.word} handleTouch={handleTouch} key={index} />
                        )
                    }  )}
                </View>
            </ScrollView>
        </View>
    )
}

export { FavoriteScreen };