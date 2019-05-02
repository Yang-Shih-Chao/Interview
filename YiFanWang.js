function YiFanWang(){

d3.csv("https://aa002868.github.io/pdata/YiFanWang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#YiFanWang')//選擇放在html哪個Class的標簽裡
        .words(data)
        .start();
});

}