$.ajax({
  url: 'https://data.lass-net.org/data/last.php?device_id=74DA38E69D1C',
  dataType: 'json',
  success: function (body) {
    // console.log(data);
    // 取得的遠端資料
    let data = body.feeds[0];
    let d = new Date().toLocaleDateString();
    let t = new Date().toLocaleTimeString();
    $("#temp").html(data.AirBox["s_t0"]);
    $("#time").html(d+' '+t);
    $("#site").html(data.AirBox["name"]);
  }
});
setTimeout(function(){location.reload()},600000); //指定10min刷新一次