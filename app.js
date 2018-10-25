var mainDiv=document.getElementById("todo");
var p=document.createElement("p");
p.setAttribute("id","mainHeading");
var ptext=document.createTextNode("TODO APP");
p.appendChild(ptext);
mainDiv.appendChild(p);
var inputDiv=document.createElement("div");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","inp");
input.setAttribute("placeholder","Add To-Do Item");
// input.style.alignContent="center";
inputDiv.appendChild(input);
mainDiv.appendChild(inputDiv);
var a=document.createElement("a");
var i=document.createElement("i");
a.setAttribute("onclick","todo()");
i.setAttribute("class","far fa-plus-square");
a.setAttribute("id","plus");
a.setAttribute("href","#");
a.appendChild(i);
inputDiv.appendChild(a);
var listDiv=document.createElement("div");
listDiv.setAttribute("id","lidv");
var list=document.createElement("ul");
function todo(){
// alert("hi");
var todoValue=document.getElementById("inp").value;
var listItem=document.createElement("li");
var liText=document.createTextNode(" "+todoValue);
var deleteA=document.createElement("a");
var deleteI=document.createElement("i");
deleteI.setAttribute("class","far fa-trash-alt");
deleteA.setAttribute("href","#");
deleteA.setAttribute("class","deed")
deleteA.appendChild(deleteI);
var editA=document.createElement("a");
var editI=document.createElement("i");
editI.setAttribute("class","far fa-edit");
editA.setAttribute("href","#");
editA.setAttribute("class","deed")
editA.appendChild(editI);
var starA=document.createElement("a");
var starI=document.createElement("i");
starI.setAttribute("class","far fa-star");
starA.setAttribute("href","#");
starA.setAttribute("class","deed")
starA.appendChild(starI);
var time=new Date();
var hour=time.getHours();
var min=time.getMinutes();
console.log(hour+":"+min);
var t=hour+":"+min;
if(hour>=0 || hour<=12){
if(hour<10){hour="0"+hour};
if(min<10){min="0"+min};
t=hour+":"+min+" AM";
}
var timeP=document.createElement("span");
var timeText=document.createTextNode(t);
timeP.appendChild(timeText);
timeP.style.fontSize="20px"
listItem.appendChild(timeP);
listItem.appendChild(liText);
listItem.appendChild(starA)
listItem.appendChild(deleteA);
listItem.appendChild(editA);
listItem.appendChild(starA)
list.appendChild(listItem);
deleteA.addEventListener("click",function(){
deleteA.parentNode.remove();
})
editA.addEventListener("click",function(){
// var editText=litext;
var editProm=prompt("Change",todoValue);
console.log(editProm);
liText.data="";
liText=editProm;
var editText=document.createTextNode(" "+liText);
listItem.appendChild(timeP);
listItem.appendChild(editText);
listItem.appendChild(deleteA);
listItem.appendChild(editA);
listItem.appendChild(starA)
// list.appendChild(listItem);
// input.value="";
})
starA.addEventListener("click",function(){
starA.style.color="rgb(255, 160, 89)"
})
listDiv.appendChild(list);
mainDiv.appendChild(listDiv);
document.getElementById("inp").value='';
}