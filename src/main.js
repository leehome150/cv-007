let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是leehome
*接下来就是我的Show time
*首先我得准备一个容器*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来我得打一套太极拳
*所以我需要一个八卦图
*我们先把div变成一个圆
*/
#div1{
  border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*太极八卦图阴阳相承
*一白一黑
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个灵珠*/
#div1::before{
 height:100px;
 width:100px;
 top:0;
 left:50%;
 transform:translateX(-50%);
 background:#fff;
 border-radius:50%;
 background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)

}
#div1::after{
  height:100px;
  width:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);
}

`;
let n = 0;
let string2 = "";

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 88888);
    html.scrollTo(0, 88888);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 5);
};
step();
