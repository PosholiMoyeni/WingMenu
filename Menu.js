import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Menu({amount, image, name, totalPrice, setTotalPrice, ratings}) {
  let price= amount;
  const [items, setItems] = useState(0);
  function AddItems(){
    setItems(items + 1)
    price=price + amount;
    setTotalPrice(totalPrice + amount);
  }
  function ReduceItems(){
    setItems(items - 1)
    price=price - amount;
    setTotalPrice(totalPrice - amount);
  }
  return (
    

    <View elevation={10} style={styles.menu}> 
      <Image style={styles.image}
        source={image}
      />
      <View style={styles.information}>
          <Text style={styles.name}>{name}</Text>
          <Text style={{color:"#979491"}}>
           <FontAwesome name="star" size={15} color="#fbb330" />
            {ratings}
          </Text>
          <Text style={{marginTop:10, color:"#979491", fontSize:22}}>Price: M{amount}</Text>
        </View> 
       <View style={{position:"relative", flexDirection:"column", margin:10}}>
         <Button title="+" onPress={AddItems} />
         <Text style={{color:"#979491"}}>{items} Items</Text>
         <Button title="-" onPress={ReduceItems} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    margin:8,
    marginBottom:10,
    width: "96%",
    backgroundColor: "#494745",
    flex: 1,
    borderRadius: 10,
    flexDirection:"row-reverse",
  },
  information: {
    margin:10,
    flexDirection:"column", 
    marginHorizontal:25
  },
  image: {
    margin:7,
    height: 100,
    width: 100,
    borderRadius:20,
  },
  name: {
    color:"white",
    fontSize: 22,
    fontWeight: 'bold'
  }
})