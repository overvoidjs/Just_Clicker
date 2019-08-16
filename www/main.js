var score = 0;
var auto_click = 90000;
var x_click = 1;

function clickBtn() {
  score += +x_click;
  console.log(score);
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;

  auto_click = +$('#lvlup_auto').attr('data_lvl_auto');
  x_click = +$('#lvlup_click').attr('data_lvl_click');

  // loadPage();
}

// $('#lvlup_auto').on('click', function(){
// $(this).attr('data_lvl_auto', auto_click -= +1000);
// });

$('#lvlup_click').on('click', function(){
$(this).attr('data_lvl_click', x_click += +1);
});

function loadPage() {

  // setInterval(function(){
  //   $('#clickbtn').click();
  // }, auto_click);

}
