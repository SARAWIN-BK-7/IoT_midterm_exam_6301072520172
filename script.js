const express= require('express');
const app = express();

const sensor_data = {
    "0": {
        "name" : "RTD",
        "value" : 700,
        "unit" : "*C"
    },
    "1" :{
        "name" : "Flow transducer",
        "value" : 205,
        "unit"  : "m^3/h"
    }
};
app.set("views", "views-ejs");
app.set('view engine','ejs');

app.get('/',function(req, res){
    res.render('index');
});

app.get('/device', function(req, res){
    const sensor_id = req.query.sensor_id;
    if(sensor_id in sensor_data == false) {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end("404 Device not found!");
    }
    else{
        const sensor_name = sensor_data[sensor_id].name;
        const sensor_value = sensor_data[sensor_id].value;
        const sensor_unit = sensor_data[sensor_id].unit;
        res.render('device',
        {name: sensor_name, value: sensor_value, unit: sensor_unit},
        );
    }
})

app.listen(8080,function(){
    console.log('Express get query example');
});
