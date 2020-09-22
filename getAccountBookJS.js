$.ajax({
  success: function () {
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


function saveValues() {
  var price = $('#price').val();
  if (price){
    var appUrl = "https://script.google.com/macros/s/AKfycbzbBRDe-M_qG16v1GrRFuLTSAd-K9iJIBkrxBvg6loCIp5yb6cd/exec";
    var sheetsUrl = "https://docs.google.com/spreadsheets/d/1NzHDmTcM5IrTUMEaon16l6hTnDPQebnynZcMb50_aq8/edit?usp=sharing";
    var timestamp = new Date().toLocaleDateString() +' '+ new Date().toLocaleTimeString();
    var calendar = $('#calendar'),
        payfor = $('#payfor'),
        expenditure_type = $('#expenditure_type'),
        content = $('#content'),
        memo = $('#memo');
    var data = [timestamp, calendar.val(), payfor.val(), expenditure_type.val(), price, content.val(), memo.val()];
    var parameter = {
        url: sheetsUrl,
        name: 'expenditure',
        data: data.toString(),
        row: data.length,
        column: data[0].length,
        insertType: 'top'
    };
    $.get(appUrl, parameter);
  }   
};