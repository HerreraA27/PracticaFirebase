import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';
import Home from '../screens/Login';
import Add from '../screens/Registro';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />
                <Stack.Screen name="Add" component={Add} 
                options={{presentation:'modal', title:'Agregar productos'}}/>
                <Stack.Screen name="Login" component={Login} options={{title:'Home'}} />
                <Stack.Screen name="SingUp" component={Registro} options={{title:'Home'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;