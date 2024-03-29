import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FavoriteScreen } from '../../views/favorites';
import { HomeScreen } from '../../views/home';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Word List" component={HomeScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export { MyTabs }