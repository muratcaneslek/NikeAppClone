import { FlatList, Text, View, StyleSheet, Pressable} from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {
    const subTotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return(
        <View style={styles.totalContainer} >
            <View style={styles.row} >
                <Text style={styles.text} >Subtotal</Text>
                <Text style={styles.text} >{subTotal} US$</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.text} >Delivery</Text>
                <Text style={styles.text} >{deliveryFee} US$</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.textTotal} >Total</Text>
                <Text style={styles.textTotal} >{total} US$</Text>
            </View>
        </View>

    )
}

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);

    return(
        <>
            <FlatList 
                data={cartItems} 
                renderItem={({item}) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button} >
                <Text style={styles.buttonText} >Checkout</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    totalContainer:{
        margin: 20,
        paddingTop: 10,
        borderColor:'gainsboro',
        borderTopWidth: 1,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 2,
    },
    text:{
        fontSize: 17,
        color: 'gray'
    },
    textTotal:{
        fontSize: 17,
        fontWeight: '500',
        color:'black'
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 10,
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
})

export default ShoppingCart;