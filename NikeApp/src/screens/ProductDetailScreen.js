import {View,Pressable, StyleSheet, Image, FlatList, useWindowDimensions, Text, ScrollView} from "react-native";
import products from "../data/products";
import {useSelector, useDispatch} from 'react-redux';
import { cartSlice } from "../store/cartSlice";

const ProductDetailScreen = () => {
    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();

    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({ product }));
    };

    return (
        <View>
            <ScrollView >
            <FlatList 
                data={product.images}
                renderItem={({item}) => (
                    <Image 
                    source={{ uri: item}}
                    style={{width: width, aspectRatio: 1,}} 
                    /> 
                )} 
                horizontal
                showsHorizontalScrollIndicator= {false}
                pagingEnabled
            />
            
                <View style={styles.inner_container} >
                    <Text style={styles.title}>{product.name}</Text>

                    <Text style={styles.price}>${product.price}</Text>

                    <Text style={styles.description}>{product.description}</Text>
                </View>

            </ScrollView>

            <Pressable onPress={addToCart} style={styles.button} >
                <Text style={styles.buttonText} >Add to cart</Text>
            </Pressable>
        
        </View>
    );
};

const styles = StyleSheet.create({
    inner_container:{
        padding: 20
    },
    title:{
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
        color: 'black'
    },
    price:{
        fontWeight: '500',
        fontSize: 18,
        letterSpacing: 1,
    },
    description:{
        marginVertical: 10,
        fontSize: 19,
        lineHeight: 25,
        fontWeight: '300',
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight:'500',
        fontSize: 16    
    },
});

export default ProductDetailScreen;