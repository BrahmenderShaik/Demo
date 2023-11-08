function sendData() {
  // Get values from text boxes
  var temperature = document.getElementById("temperature").value;
  var humidity = document.getElementById("humidity").value;

  // Construct the URL with the entered values
  var url = "https://api.thingspeak.com/update?api_key=" + Apikey + "&field1=" + temperature + "&field2=" + humidity;

  // Use AJAX to send data to Arduino
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      alert("Data sent successfully!");
    } else {
      alert("Error sending data. Please try again.");
    }
  };
}
