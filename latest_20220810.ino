

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
float lastState;


// output pins for decision making 
int RainSensor = 13;
int TankSensor = 16;
int SoilHumidity = 15;
int SoilTemperuture = 12;

const char* ssid = "VodafoneMobileWiFi-01A925";  // Enter SSID here
const char* password = "8551701125";  //Enter Password here
//Pin_D4

void setup() 
{
  Serial.begin(115200);
  delay(2000);
  
  bme.begin(0x76);   

  Serial.println("Connecting to ");
  Serial.println(ssid);

  //connect to your local wi-fi network
  WiFi.begin(ssid, password);

  //check wi-fi is connected to wi-fi network
  while (WiFi.status() != WL_CONNECTED)
  {
  delay(2000);
  Serial.print(" cannot connect to Wi-Fi");
  }
  Serial.println("");
  Serial.println("WiFi connected..!");
  Serial.print("Got IP: ");  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);   

  pinMode(sensorPin, INPUT);// pin used to read multiple alalogue sensors 
  
  pinMode(RainSensor, OUTPUT);
  pinMode(TankSensor, OUTPUT);
  pinMode(SoilHumidity, OUTPUT);
  pinMode(SoilTemperuture, OUTPUT);


 
}
void loop() 
{

   Serial.print("Rain_Sensor = ");
   Serial.println(Rain_Sensor());

   
   Serial.println();
   Serial.print(" Tank_Sensor= ");
   Serial.println(Tank_Sensor());
 
   
   Serial.println();
   Serial.print(" Soil_Humidity= ");
   Serial.println(Soil_Humidity());

   Serial.println();
   Serial.print(" Soil_Humidity= ");
   Serial.println(Soil_Temperuture());
   
   
    Firebase.pushFloat("Sensors/Rain_Sensor/value",float(Rain_Sensor()));
    Firebase.pushFloat("Sensors/Rain_Sensor/time_stamp", millis());

    Firebase.pushFloat("Sensors/Soil_Humidity/value",float(Soil_Humidity()));
    Firebase.pushFloat("Sensors/Soil_Humidity/time_stamp", millis()); 

    Firebase.pushFloat("Sensors/Tank_Sensor/value",float(Tank_Sensor()));
    Firebase.pushFloat("Sensors/Tank_Sensor/time_stamp", millis());
    
    Firebase.pushFloat("Sensors/Soil_Temperuture/value",float(Soil_Temperuture()));
    Firebase.pushFloat("Sensors/Soil_Temperuture/time_stamp", millis());
    

  // Firebase.pushString("/sensors/temperature", String(temperature)); 
  // Firebase.pushString("/sensors/humidity", String(humidity));
  // Firebase.pushString("/sensors/pressure", String(pressure)); 
  // Firebase.pushString("/sensors/altitude", String(altitude));

   
}

int Rain_Sensor() 
{

    digitalWrite(RainSensor, HIGH); // Turn D1 On
     digitalWrite(TankSensor, LOW); // Turn D2 Off
    digitalWrite(SoilHumidity, LOW); // Turn D2 Off
    digitalWrite(SoilTemperuture, LOW); // Turn D2 Off
    delay(2000);
    return analogRead(sensorPin);
}
 
int Tank_Sensor() {
   
    digitalWrite(TankSensor, HIGH); // Turn D2 Off
    digitalWrite(RainSensor, LOW); //  Turn D1 On
    digitalWrite(SoilHumidity, LOW); // Turn D2 Off
    digitalWrite(SoilTemperuture, LOW); // Turn D2 Off
    delay(2000);
    return analogRead(sensorPin);
}

int Soil_Humidity() {
  
    digitalWrite(SoilHumidity, HIGH); // Turn D2 Off
    digitalWrite(RainSensor, LOW); //  Turn D1 On
    digitalWrite(TankSensor, LOW); // Turn D2 Off
    digitalWrite(SoilTemperuture, LOW); // Turn D2 Off
    delay(2000);
    return analogRead(sensorPin);
}

int Soil_Temperuture() {
   
    digitalWrite(SoilTemperuture, HIGH); // Turn D2 Off
    digitalWrite(RainSensor, LOW); //  Turn D1 On
    digitalWrite(TankSensor, LOW); // Turn D2 Off
    digitalWrite(SoilHumidity, LOW); // Turn D2 Off
    delay(2000);
    return analogRead(sensorPin);
}

void handle_OnConnect() 
{
  temperature = bme.readTemperature();
  humidity = bme.readHumidity();
  pressure = bme.readPressure() / 100.0F;
  altitude = bme.readAltitude(SEALEVELPRESSURE_HPA);
 
}
