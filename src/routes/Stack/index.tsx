import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTabs } from '../Tab';
import { DetailsScreen }  from '../../views/details';

const Stack = createNativeStackNavigator();

export type MyStackProps = {
    MyTabs:undefined,
    Details:{
      title:string
    },
}

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export { MyStack }