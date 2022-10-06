// const express= require('express');
// const app = express();
document.addEventListener('DOMContentLoaded',function(){
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
    .then(response=>response.json())
    .then(data => {
        console.log(data[0]["plant-site"]); 
        console.log(data[1].value);
        console.log(data[2].value);
        document.querySelector('#name').innerHTML = `name : ${data[0].name}`;
        document.querySelector('#type').innerHTML = `Type : ${data[0].type}`;
        document.querySelector('#unit').innerHTML = `unit : ${data[0].unit}`;
        document.querySelector('#range').innerHTML = `range : ${data[0].range}`;
        document.querySelector('#plant-site').innerHTML = `plant-site : ${data[0]["plant-site"]}`;
        document.querySelector('#value').innerHTML = `value : ${data[0].value}`;
    });
});
// async function getUser(){
//     let response = await fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer');
//     console.log(response)
//     let data=await response.json();
//     return data;
// }
// getUser().then(data => console.log(data));

