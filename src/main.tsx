import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { WordsProvider } from './context/words';
import { MyStack } from './routes/Stack';

const Main = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <WordsProvider>
                <NavigationContainer>
                    <MyStack />
                </NavigationContainer>
            </WordsProvider>
        </SafeAreaView>
    )
}

export default Main;
