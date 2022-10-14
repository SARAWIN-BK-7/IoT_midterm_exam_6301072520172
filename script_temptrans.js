document.addEventListener('DOMContentLoaded',function(){
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
    .then(response=>response.json())
    .then(data => {
        // Display the value in the console F12
        console.log(data[0].value); 
        console.log(data[1].value);
        console.log(data[2].value);
        // temp-transducer-0 Display in the HTML 
        document.getElementById('name_0').innerHTML = `name : ${data[0].name}`;
        document.getElementById('type_0').innerHTML = `Type : ${data[0].type}`;
        document.getElementById('unit_0').innerHTML = `unit : ${data[0].unit}`;
        document.getElementById('range_0').innerHTML = `range : ${data[0].range}`;
        document.getElementById('plant-site_0').innerHTML = `plant-site : ${data[0]["plant-site"]}`;
        document.getElementById('value_0').innerHTML = `value : ${data[0].value}`;
        // temp-transducer-1 Display in the HTML
        document.getElementById('name_1').innerHTML = `name : ${data[1].name}`;
        document.getElementById('type_1').innerHTML = `Type : ${data[1].type}`;
        document.getElementById('unit_1').innerHTML = `unit : ${data[1].unit}`;
        document.getElementById('range_1').innerHTML = `range : ${data[1].range}`;
        document.getElementById('plant-site_1').innerHTML = `plant-site : ${data[1]["plant-site"]}`;
        document.getElementById('value_1').innerHTML = `value : ${data[1].value}`;
        // temp-transducer-2 Display in the HTML 
        document.getElementById('name_2').innerHTML = `name : ${data[2].name}`;
        document.getElementById('type_2').innerHTML = `Type : ${data[2].type}`;
        document.getElementById('unit_2').innerHTML = `unit : ${data[2].unit}`;
        document.getElementById('range_2').innerHTML = `range : ${data[2].range}`;
        document.getElementById('plant-site_2').innerHTML = `plant-site : ${data[2]["plant-site"]}`;
        document.getElementById('value_2').innerHTML = `value : ${data[2].value}`;
    });
});


