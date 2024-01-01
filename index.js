document.addEventListener("DOMContentLoaded",()=>{
    const taskInput=document.getElementById("taskInput");
    const addTask=document.getElementById("addTask");
    const taskList=document.getElementById("taskList");


     // Check if there are tasks in local storage and display them on the page
    addTask.addEventListener("click",()=>{
        const taskText=taskInput.value.trim();
        console.log("clicked"+taskText);
    })

     

})