$.ajax({
  success: function() {
    // 給input  date設定預設值
    var now = new Date();

    //格式化日，如果小於9，前面補0
    var day = ("0" + now.getDate()).slice(-2);

    //格式化月，如果小於9，前面補0
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    //拼裝完整日期格式
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    //完成賦值
    $('#calendar').val(today);
  }
});


function saveValues(){
  localStorage._getdate = document.getElementById("calendar").value;
  localStorage._payfor = document.getElementById("payfor").value;
  localStorage._buy = document.getElementById("buy").value;
  localStorage._fee = document.getElementById("fee").value;
  localStorage._content = document.getElementById("content").value;
  
}