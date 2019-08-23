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

  a = {
  data:localStorage._getdate+','+localStorage._payfor+','+localStorage._buy+','+localStorage._fee+','+localStorage._content,
  sheetUrl:'https://docs.google.com/spreadsheets/d/1NzHDmTcM5IrTUMEaon16l6hTnDPQebnynZcMb50_aq8/edit?usp=sharing',
  sheetTag:'expenditure'
  };
  $.get('https://script.google.com/macros/s/AKfycbyPPidEYflHk6xvQvuhbXh4zwwGcqlJlxZ6rlQ4s5Lmy-g_HMs/exec',a)
}