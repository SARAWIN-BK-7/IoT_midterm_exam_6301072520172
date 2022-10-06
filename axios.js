const getdata = () => {
    axios.get('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer').then(response => {
    console.log(response.data);
});
};