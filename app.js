var inputs=document.querySelector("#inputs")
var task=document.querySelector("#listing")
var box1=document.querySelector(".d1")

function addtask(){
       var list=document.createElement("li")
       list.innerHTML=inputs.value+"<button id='btnd'onclick='removed(event)'>Delete</button>"
       box1.append(list)
}
function removed(event){
       event.target.parentElement.remove()
}