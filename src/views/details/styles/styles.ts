import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
     },
     header:{
         position:'relative',
         width:'100%',
         height:300,
         backgroundColor:'pink',
         justifyContent:'center',
         alignItems:'center',
         marginTop:10
     },
     areaTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     },
     title:{
        fontSize:32,
     },
     text:{
        fontSize:16,
        marginTop:20
     },
     footer:{
        position:'absolute',
        width:width,
        bottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10 
     }
})

export { styles };