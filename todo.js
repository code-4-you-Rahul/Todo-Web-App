let input = document.querySelector('input');
let add = document.querySelector('.c');
let parent = document.querySelector('ol');
add.addEventListener("click",function(){
let li = document.createElement('li');
li.classList.add('li');
parent.appendChild(li);
let button = document.createElement('button');
button.innerText = "delete";
button.classList.add('btn');
li.innerText = input.value;
li.appendChild(button);
input.value = "";
});
parent.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
});