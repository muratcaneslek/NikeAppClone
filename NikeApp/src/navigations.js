import {Pressable, Text} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ShoppingCart from "./screens/ShoppingCart";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigations = () => {
    const numberOfItems = useSelector(selectNumberOfItems);
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}} >
                <Stack.Screen 
                    name="Products" 
                    component={ProductScreen} 
                    options={({navigation}) => ({
                        headerRight : () =>(
                            <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}} >
                                <Icon name="cart" size={21} color="black" />
                                <Text style={{marginLeft: 3, color:"black", fontWeight: '500'}} >{numberOfItems}</Text>
                            </Pressable>
                            ),
                    })} 
                />
                <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;