import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';
import Styles from '../../Strings/globalStyles';
import { getDatabase, ref, onValue, get,set, child} from 'firebase/database';
import FirebaseApp from '../../../Functions/Firebase/Config';

export default function Tasks() {

  const [isSpray, setIsSpray] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const database = getDatabase(FirebaseApp);
  const tempRef = ref(database, 'Sensors/', 'Atmospheric_Temperuture/', 'time_stamp');

  const toggleSwitch = () => {
    console.log('isSpray', isSpray);
    setIsSpray(previousState => !previousState);

    if(isSpray){
      set(ref(database, 'UserControl/'), 1)
    }else{
      set(ref(database, 'UserControl/'), 0)
    }
    
  }

  const toggleEmergency = () => {
    setIsEmergency(previousState => !previousState);
    console.log('isEmergency', isEmergency);

    if(isEmergency){
      set(ref(database, 'EmergencyStop/'), 1)
    }else{
      set(ref(database, 'EmergencyStop/'), 0)
    }
  }

  return (
    <View style={Styles.homeContainer}>
        <View style={Styles.homeHeader}>
            <Text style={Styles.headerText}>Control Panel</Text>
        </View>
        <View style={Styles.controlBtn}>
            <Text style={Styles.controlBtnText}>
                Toggle Sprays
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={isSpray ? "#00ff00" : "#ff0000"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isSpray}
            />
        </View>
        <View style={Styles.controlBtn}>
            <Text style={Styles.controlBtnText}>
                Emergency Button
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={isEmergency ? "#00ff00" : "#ff0000"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleEmergency}
              value={isEmergency}
            />
        </View>
    </View>
  )
}
