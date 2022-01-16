import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import Analytics from "../components/Analytics";
import Furkan from "../assets/furkan_ergun.jpg";
import Adem from "../assets/adem_kepce.jpg";
import Berkay from "../assets/berkay.jpeg";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";


const About = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',}}>
                <Button onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../assets/back_vector.png')}/>
                </Button>
            </View>
            <View style={{marginVertical:45,}}>
                <Text style={{fontWeight:'bold',fontSize:20,fontFamily:'Cochin'}}>
                    Mobil Programlama Proje Grubu :
                </Text>
            </View>
            <Analytics UserName={'Berkay Özdağ'} UserNumber={'b191210051'} UserImage={Berkay}/>
            <Analytics UserName={'Furkan Ergün'} UserNumber={'b181210091'} UserImage={Furkan}/>
            <Analytics UserName={'Adem Kepçe'} UserNumber={'b191210058'} UserImage={Adem}/>
        </SafeAreaView>
    )
}
export default About;


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:'white'
    },
})