import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { MyStack } from './routes/Stack';

const Main = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Main;
