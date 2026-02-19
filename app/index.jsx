import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
    return (
        // Style using a StyleSheet
        <View style={styles.container}> 
            <Image source={Logo} style={styles.img}/>
            <Text style={styles.title}>
                The Number 1
            </Text> 

            {/* In-line Style */}
            <Text style={{marginTop: 10, marginBottom: 30}}>
                Reading List App
            </Text> 

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    //Style for all objects
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Style for title text
    title: { 
        fontWeight: 'bold',
        fontSize: 18
    },

    // Style for light logo
    img: {
        marginVertical: 20,

    },
})