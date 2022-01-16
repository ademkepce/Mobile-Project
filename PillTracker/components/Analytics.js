import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

export default function Analytics({UserName,UserNumber,UserImage}) {
    return (
            <View style={{
                alignItems: "center",
                padding: 24,
                flexDirection:"row",
                borderRadius: 24,
                borderWidth: 1,
                borderColor: "#ECEDEF",
                width: "100%",
                height: 110,
                marginVertical:15
            }}>
                <View style={{height:80, width: 80, backgroundColor: 'white', borderRadius: 999,alignItems:'center',justifyContent:'center'}}>
                    <Image style={{width: 70, height: 70,borderRadius:999}} source={UserImage}/>
                </View>
                <View style={{
                    marginLeft:12,
                    flexDirection:"column",
                    flex:1,
                }}>
                    <Text style={{
                        color:"#191D30",
                        fontSize:20,
                        lineHeight:24,
                        fontWeight:"bold"
                    }}>{UserName}</Text>

                    <View style={{
                        marginTop:8,
                        flexDirection:"row",
                    }}>
                        <Text
                            style={{
                                color:"#8C8E97",
                                fontSize:16,
                                lineHeight:20,
                            }}
                        >{UserNumber}</Text>
                    </View>
                </View>

            </View>
    );
}
const style = StyleSheet.create({
});

