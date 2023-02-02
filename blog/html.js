//製作部落格
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");
var date = document.getElementById("date");
//確認發布按鈕是否被按下去
btn.addEventListener("click", function(){
   list.innerHTML=list.innerHTML+`
   <div class="article";>
            <h1>標題:${title.value}<h1/>
            <h2>日期:${date.value}</h2>
            <p>文章:${content.value}</p>
    </div>`
    ;
})
