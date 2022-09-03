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
        
    },
    homeContainer:{
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    sensorCTA:{
        width: 150,
        height: 150,
        backgroundColor: '#01877C',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    tasksCTA:{
        width: 150,
        height: 150,
        backgroundColor: '#01877C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    CTAText:{
        color: "#ffffff",
        fontSize: 22,
    },
    CTATextSub:{
        color: "#ffffff",
        fontSize: 15,
    },
    CTATextSubVal:{
        color: "#ffffff",
        fontSize: 18,
    },
    homeHeader: {
        width: '100%',
        height: 80,
        backgroundColor: Colors.googleButton,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    sensorRow:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    controlBtn:{
        height: 150,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    controlBtnText: {
        color: Colors.orange,
        fontSize: 18,
    }
})

export default Styles;