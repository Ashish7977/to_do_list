 
 
 const taskInput = document.getElementById('taskInput');
 const taskList = document.getElementById('taskList');
 
 
 function addTask(){
    if (taskInput.value===""){
        alert("write something in box");
    }
    else{
    const newtask= document.createElement('li');
   
    taskList.appendChild(newtask);
    newtask.textContent= taskInput.value;
    let  span = document.createElement("span");
    span.innerHTML="delete";
    newtask.appendChild(span);

    savedata();

    }
    taskInput.value="";
    
    
 }





taskList.addEventListener("click", function(e){

    if(e.target.tagName==="SPAN"){
          e.target.parentElement.remove();
          savedata();
    }

}, false
)

function  savedata () {
     localStorage.setItem("data",taskList.innerHTML)
    }

function showdata(){
    
    taskList.innerHTML = localStorage.getItem("data");

}    

showdata();