
#include <ESP8266WebServer.h>
#include <Wire.h>
//#include <Firebase_ESP_Client.h>
#include <ESP8266WiFi.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <FirebaseArduino.h>    
#define SEALEVELPRESSURE_HPA (1013.25)
#define FIREBASE_HOST "test2-c2636-default-rtdb.firebaseio.com"                          // the project name address from firebase id
#define FIREBASE_AUTH "bqWk5YbBhIETzStobbGqU4wVy9qkjQDIAcY7r7d9" 

Adafruit_BME280 bme;

float temperature, humidity, pressure, altitude;
const int sensorPin = 17; 
float sensorState;



// output pins for decision making 
int RainSensor = 13;
int TankSensor = 0                    ;
int SoilHumidity = 15;
int WaterTankPump = 16;
int IrrigationPump = 15;


const char* ssid = "VodafoneMobileWiFi-01A925";  // Enter SSID here
const char* password = "8551701125";  //Enter Password here
//Pin_D4

void setup() 
{
  Serial.begin(115200);
  delay(1000);
  
  bme.begin(0x76);   

  Serial.println("Connecting to ");
  Serial.println(ssid);

  //connect to your local wi-fi network
  WiFi.begin(ssid, password);

  //check wi-fi is connected to wi-fi network
  while (WiFi.status() != WL_CONNECTED)
  {
  delay(1000);
  Serial.println(" cannot connect to Wi-Fi");
  }
  Serial.println("");
  Serial.println("WiFi connected..!");
  Serial.print("Got IP: ");  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);   

  pinMode(sensorPin, INPUT);// pin used to read multiple alalogue sensors 
  
  pinMode(RainSensor, OUTPUT);
  pinMode(TankSensor, OUTPUT);
  pinMode(SoilHumidity, OUTPUT);
  pinMode(WaterTankPump, OUTPUT);
  pinMode(IrrigationPump, OUTPUT);

}

void loop() 
{

  temperature = bme.readTemperature();
  humidity = bme.readHumidity();
  pressure = bme.readPressure() / 100.0F;
  altitude = bme.readAltitude(SEALEVELPRESSURE_HPA);

  // wrap this in a while loop for a safety button.
      // water tank is empty
 if(Rain_Sensor() > 600 && Soil_Humidity() > 700 &&  temperature < 40 && Tank_Sensor() > 20 )
  {

    // send reason of not irrigating to firebase and user interface
    Serial.println("irrigating due to low soil humidity and low Rain ");
    digitalWrite(IrrigationPump, HIGH);
  
 }
 //
 else if(Rain_Sensor() > 600 && Soil_Humidity() > 700 &&  temperature < 40 && Tank_Sensor() < 20 )
 {

    // send reason of not irrigating to firebase and user interface
    Serial.println("water tank is empty aand water pump set ON ");
    digitalWrite(IrrigationPump, HIGH);
  
 }
 else
 {
  
    // send reason of not irrigating to firebase and user interface
    Serial.println("Predicting high chances of Rain due to hight pressure and Humidity level");
    digitalWrite(IrrigationPump, LOW);
  
 }

   
   Serial.println(temperature);
   Serial.println(Rain_Sensor());
   Serial.println(Soil_Humidity());
   Serial.println( Tank_Sensor());
 
delay(2000);



// send to Firebase 

   Firebase.pushFloat("Sensors/Rain_Sensor/value",float(Rain_Sensor()));
    Firebase.pushFloat("Sensors/Rain_Sensor/time_stamp", millis());

    Firebase.pushFloat("Sensors/Soil_Humidity/value",float(Soil_Humidity()));
    Firebase.pushFloat("Sensors/Soil_Humidity/time_stamp", millis()); 

    Firebase.pushFloat("Sensors/Tank_Sensor/value",float(Tank_Sensor()));
    Firebase.pushFloat("Sensors/Tank_Sensor/time_stamp", millis());
    
    
    Firebase.pushFloat("Sensors/Atmospheric_Temperuture/value",float(temperature));
    Firebase.pushFloat("Sensors/Atmospheric_Temperuture/time_stamp", millis());


    Firebase.pushFloat("Sensors/Atmospheric_humidity/value",float(humidity));
    Firebase.pushFloat("Sensors/Atmospheric_humidity/time_stamp", millis());


    
    Firebase.pushFloat("Sensors/Atmospheric_pressure/value",float(pressure));
    Firebase.pushFloat("Sensors/Atmospheric_pressure/time_stamp", millis());

    
    Firebase.pushFloat("Sensors/Atmospheric_altitude/value",float(altitude));
    Firebase.pushFloat("Sensors/Atmospheric_altitude/time_stamp", millis());

}

int Rain_Sensor() 
{

    digitalWrite(RainSensor, HIGH); // Turn D1 On
     digitalWrite(TankSensor, LOW); // Turn D2 Off
    digitalWrite(SoilHumidity, LOW); // Turn D2 Off
 
    delay(1000);
    return analogRead(sensorPin);
}

int Soil_Humidity() {
  
    digitalWrite(SoilHumidity, HIGH); // Turn D2 Off
    digitalWrite(RainSensor, LOW); //  Turn D1 On
    digitalWrite(TankSensor, LOW); // Turn D2 Off
   
    delay(1000);
    return analogRead(sensorPin);
}

int Tank_Sensor() {
   
    digitalWrite(TankSensor, HIGH); // Turn D2 Off
    digitalWrite(RainSensor, LOW); //  Turn D1 On
    digitalWrite(SoilHumidity, LOW); // Turn D2 Off
   
    delay(1000);
    return analogRead(sensorPin);
}
