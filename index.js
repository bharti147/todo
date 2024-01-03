/* WITHOUT LOCAL STORAGE  */

// document.addEventListener("DOMContentLoaded", () => {
//   const taskInput = document.getElementById("taskInput");
//   const addTask = document.getElementById("addTask");
//   const taskList = document.getElementById("taskList");

//   addTask.addEventListener("click", () => {
//     const taskText = taskInput.value.trim();
//     console.log("clicked" + taskText);
//     localStorage.setItem("tasks", taskText);
//     const taskItem = document.createElement("li");
//     taskItem.innerHTML = `
          
//           <span>${taskText}</span>
//           <button class="deleteBtn">Delete</button>
         
//         `;
//     taskInput.value = "";
//     taskList.appendChild(taskItem);
//   });

//   taskList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("deleteBtn")) {
//       const taskItem = event.target.parentElement;
//       console.log(event);
//       taskList.removeChild(taskItem);
//     }
//   });
// });




/*  WITH LOCAL STORAGE */
document.addEventListener("DOMContentLoaded",()=>{
  const taskInput=document.getElementById("taskInput");
  const addTask=document.getElementById("addTask");
  const taskList=document.getElementById("taskList");

  

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



  function renderTasks(){
    taskList.innerHTML="";
    tasks.forEach((task,index)=>{
       const taskItem=document.createElement("li");
       taskItem.innerHTML=`<span>${task.text}</span>
       <button class="deleteBtn" data-index=${index}>Delete</button>
       `
       taskList.appendChild(taskItem);
    })
    
   
  }
 

  renderTasks();
//for updating local storage whenever new task is added or any previous one is deleted, RERENDERING WILL HAPPEN HERE.

addTask.addEventListener("click",()=>{
  const taskText=taskInput.value.trim();
  if(taskText !== ""){
    tasks.push({text:taskText});
    console.log("clicked",taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    taskInput.value="";
  }
});


taskList.addEventListener("click",(event)=>{
     if(event.target.classList.contains("deleteBtn")){
      const index= event.target.dataset.index;
      tasks.splice(index,1);
      localStorage.setItem("tasks",JSON.stringify(tasks));
      renderTasks();
     }
})



})
