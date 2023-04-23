import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CategoryScreen } from '../screens/categories';
import { MealDetailsScreen } from '../screens/mealDetails';
import { MealsOverviewScreen } from '../screens/meals';

const Stack = createNativeStackNavigator();

export const NavigatiosScreens = ()=>{
    const option = {
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:'#3f2f25'}
    };
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={option}>
            <Stack.Screen options={{headerTitle:'All Categories',headerTitleAlign:'center'}} name='Home' component={CategoryScreen} />
            <Stack.Screen options={{headerTitleAlign:'center'}} name='Meals' component={MealsOverviewScreen} />
            <Stack.Screen options={{headerTitleAlign:'center'}} name='Details' component={MealDetailsScreen} />
        </Stack.Navigator>
    );
};