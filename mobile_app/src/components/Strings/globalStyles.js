import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#000',
        height: '100%',
        opacity: 1
    },
    loginTitleSections: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 45,
        zIndex: 20
    },
    formContainer: {
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        paddingTop: 45,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: Colors.white,
        marginTop: 30,
        height: '100%',
        zIndex: 20
    },
    loginTextStyles: {
        color: Colors.white,
        paddingTop: 15,
        fontSize: 27
    },
    loginForm: {
        flexDirection: 'column',
    },
    inputField: {
        padding: 10,
        borderColor: Colors.primary,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20
    },
    buttonStyle: {
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        height: 40,
    },
    buttonSpacing:{
        marginTop: 10,
    },
    buttonTextStyle: {
        color: Colors.white,
        textTransform: 'uppercase',
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row'
    },
    camContainer: {
        margin: 5,
        height: '80%',
    },
    modalHeaderText: {
        alignItems: 'flex-start',
        paddingTop: 5,
        width: '50%',
    },
    tipModalHeaderText: {
        alignItems: 'flex-end',
        paddingTop: 5,
        width: '50%',
    },
    modalHeaderIcon: {
        alignItems: 'flex-end',
        width: '50%',
    },
    tipModalHeaderIcon: {
        alignItems: 'flex-start',
        width: '50%',
    },
    camClose: {
        width: '100%',
    },
    modalClose: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    modalBody: {
        flex: 1,
        
    }
})

export default Styles;