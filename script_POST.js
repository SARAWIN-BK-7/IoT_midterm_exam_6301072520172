var DataFrom = document.getElementById('send-Data');

DataFrom.addEventListener("submit", function (sending) {
  sending.preventDefault();
  var studentid = document.getElementById('st_id');
  var studentname = document.getElementById('st_name');
  var senname = document.getElementById('sen_name');
  var sentype = document.getElementById('sen_typ');
  var senunit = document.getElementById('sen_unit');
  var senvalue = document.getElementById('sen_value');
  fetch("https://midterm-exam-010723313-2022.herokuapp.com/student_post", {
    method: "POST",
    body: JSON.stringify({
      st_id: studentid.value,
      st_name: studentname.value,
      sensor_name: senname.value,
      sensor_type: sentype.value,
      sensor_unit: senunit.value,
      sensor_value: senvalue.value,
    }),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
