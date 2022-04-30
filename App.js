import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import {useState} from 'react'
import Menu from './Menu'; 
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
   <View style={styles.container}>
     <StatusBar hidden />
     <View style={styles.TopInfo}>
     <ImageBackground source={require("./assets/Background.jpg")} style={styles.Cover}>
       <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
         <TouchableOpacity><Ionicons name = "arrow-back-sharp" size={35} color = "white" /></TouchableOpacity>
         <Text style={{color:"white", fontSize:25, marginHorizontal:120}}>Menu</Text>
         <TouchableOpacity><Entypo name = "menu" size={35} color = "white" /></TouchableOpacity>
       </View>
        <Image style={{height:120, width:120,}}
         source={require("./assets/WingsLogo.png")}/>
         <View style={{flexDirection:"row", margin:25}}>
           <TouchableOpacity><Text style={styles.Headers}>Fruits</Text></TouchableOpacity>
           <TouchableOpacity><Text style={styles.Headers}>Drinks</Text></TouchableOpacity>
           <TouchableOpacity style={styles.Clicked}>
             <Text style={styles.Headers}>Lunch</Text>
            </TouchableOpacity>
           <TouchableOpacity><Text style={styles.Headers}>Vegetables</Text></TouchableOpacity>            
         </View>
      </ImageBackground>
     </View>
     <Text style={{fontSize: 20, color:"#fffffe"}}>Add items to place your Order</Text>
     <Text style={{fontSize: 15, color:"#fffffe", fontWeight:"bold"}}>The total price is M {totalPrice}</Text> 
     <View style = {styles.Orders}>
      <ScrollView contentContainerStyle={{}}>

          <Menu name="Magnet  Force" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={20} ratings={"4.7(180 Ratings)"} image={require("./assets/Food1.jpg")}/>
          <Menu name="Hot Sandwitch" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={15} ratings={"4.2(167 Ratings)"} image={require("./assets/Food2.jpg")}/>
          <Menu name="SpicySpaghetii" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={25} ratings={"4.9(190 Ratings)"} image={require("./assets/Food3.jpg")}/>
          <Menu name="Potato|Mutton" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={17} ratings={"3.9(145 Ratings)"} image={require("./assets/Food4.jpg")}/>
          <Menu name="Rice N Chunks" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={30} ratings={"4.7(183 Ratings)"} image={require("./assets/Food5.jpg")}/>
          <Menu name="Pork and Peas" totalPrice={totalPrice} setTotalPrice={setTotalPrice} amount={23} ratings={"2.9(114 Ratings)"} image={require("./assets/Food6.jpg")}/>

        </ScrollView>
      </View>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopInfo: {
    alignSelf:"flex-start",
    width: "100%",
    height: "30%",
  },
  Cover:{
    height:"100%",
    width:"100%",
    alignItems:"center",
  },
  Headers:{
    color:"white",
    marginHorizontal:18,
    fontSize:18,
    fontWeight:"bold",
  },
  Clicked:{
    height:"110%",
    width:"25.3%",
    backgroundColor:"#ef6917",
    borderRadius:8,
  },
  Orders:{
    backgroundColor:"#1f1e1e",
    flex: 1,
    alignItems:"center",
  }
});
