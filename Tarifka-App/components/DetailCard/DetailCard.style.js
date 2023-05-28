import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        
    },
    image: {
        width: deviceSize.width/1,
        height: deviceSize.height /2,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    body_container: {
        margin: 10,
        
    },
    title: {
        color: '#DB673B',
        fontSize: 25,
        fontWeight: 'bold'
    },
    area: {
        color: '#DB673B',
        fontSize: 17,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        paddingBottom:5,
        borderColor: 'grey'
    },
    desc: {
        paddingVertical: 8,
        fontSize: 15,
        paddingBottom: 30,
    },
    button: {
        paddingVertical: 10,
        alignItems: 'center',
        width: deviceSize.width / 1.5,
        backgroundColor: 'red',
        marginLeft: 60,
        borderRadius: 10,
        borderWidth: 3,
        
        
    },
    text_button: {
        color: 'white',
        fontWeight: 'bold'
    }


});