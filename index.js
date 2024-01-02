document.addEventListener("DOMContentLoaded",()=>{
    const taskInput=document.getElementById("taskInput");
    const addTask=document.getElementById("addTask");
    const taskList=document.getElementById("taskList");


    addTask.addEventListener("click",()=>{
        const taskText=taskInput.value.trim();
        console.log("clicked"+taskText);
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          
          <span>${taskText}</span>
          <button class="deleteBtn">Delete</button>
         
        `;
        taskInput.value="";
        taskList.appendChild(taskItem);
    })

taskList.addEventListener("click",(event)=>{
  if(event.target.classList.contains("deleteBtn")){
    const taskItem=event.target.parentElement;
    taskList.removeChild(taskItem);
  }

})
   

     

})