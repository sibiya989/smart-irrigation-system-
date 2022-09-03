import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Styles from '../../Strings/globalStyles';
import FirebaseApp from '../../../Functions/Firebase/Config';
import { getDatabase, ref, onValue, get, child} from 'firebase/database';

export default function Sensors() {

    const [data, setData] = useState(null);

    const database = getDatabase(FirebaseApp);

    const tempRef = ref(database, 'Sensors/', 'Atmospheric_Temperuture/', 'time_stamp');

    useEffect(()=>{
        onValue(tempRef, (snapshot) => {
            setData(snapshot.val());
            console.log(snapshot.val());
        })
    },[])

  return (
    <View style={Styles.homeContainer}>
        <View style={Styles.homeHeader}>
            <Text style={Styles.headerText}>Sensor Values</Text>
        </View>
        <ScrollView>
        <View style={Styles.sensorRow}>
          <TouchableOpacity style={Styles.sensorCTA}>
              <Text style={Styles.CTAText}>Teperature</Text>
              <Text style={Styles.CTATextSub}>{data? data.Atmospheric_Temperuture.value: ''}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.tasksCTA}>
              <Text style={Styles.CTAText}>Altitude</Text>
              <Text style={Styles.CTATextSub}>{data? data.Atmospheric_altitude.value: ''}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.sensorRow}>
        <TouchableOpacity style={Styles.sensorCTA}>
              <Text style={Styles.CTAText}>Humidity</Text>
              <Text style={Styles.CTATextSub}>{data? data.Atmospheric_humidity.value: ''}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.tasksCTA}>
              <Text style={Styles.CTAText}>Pressure</Text>
              <Text style={Styles.CTATextSub}>{data? data.Atmospheric_pressure.value: ''}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.sensorRow}>
        <TouchableOpacity style={Styles.sensorCTA}>
              <Text style={Styles.CTAText}>Rain</Text>
              <Text style={Styles.CTATextSub}>{data? data.Rain_Sensor.value: ''}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.tasksCTA}>
              <Text style={Styles.CTAText}>Soil Humidity</Text>
              <Text style={Styles.CTATextSub}>{data? data.Soil_Humidity.value: ''}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={Styles.sensorRow}>
        <TouchableOpacity style={Styles.sensorCTA}>
              <Text style={Styles.CTAText}>Soil Temp</Text>
              <Text style={Styles.CTATextSub}>Teperature</Text>
              <Text style={Styles.CTATextSubVal}>Teperature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.tasksCTA}>
              <Text style={Styles.CTAText}>Tank Level</Text>
              <Text style={Styles.CTATextSub}>Teperature</Text>
              <Text style={Styles.CTATextSubVal}>Teperature</Text>
          </TouchableOpacity>
        </View> */}
        </ScrollView>
    </View>
  )
}
