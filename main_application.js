/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* global item */

//alert of due date
    function show_message(){
    window.alert("The projects due date is the 28th of September");
    }
    show_message();


// Date of today
    var todaysdate = new Date(),
    weekday = todaysdate.getDay(),
    thedate = todaysdate.getDate(),
    themonth = todaysdate.getMonth(),
    theyear = todaysdate.getFullYear();
    ds = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"],
            date_div = document.getElementById("write_date");
    themonth += 1;
    date_div.innerHTML = ds[weekday] + " - " + thedate + "/" + themonth + "/" + theyear ;
    

//Selectors
    const taskInput = document.querySelector('.task_input');
    const taskButton = document.querySelector('.task_button');
    const taskList = document.querySelector('.task_list');
    const filterOption = document.querySelector('.filter_task');


//Add event listener
    taskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", deleteCheck);
    filterOption.addEventListener("click", filterTask);


//Functions
    function addTask(event) {
    event.preventDefault();
//Task DIV
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
//Task LI 
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task_item');
    taskDiv.appendChild(newTask);
    if(taskInput.value === ""){
        return null;
    }
    
    
//Check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_button');
    taskDiv.appendChild(completedButton);

    
//Delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_button');
    taskDiv.appendChild(deleteButton);
    
    
//Append to Actual LIST
    taskList.appendChild(taskDiv);
    
    
//Clear todo input VALUE
    taskInput.value = "";
}


//DELETE & CHECK
    function deleteCheck(e) {
    const item = e.target;
    
    
//DELETE ITEM
    if (item.classList[0] === "delete_button") {
        const task = item.parentElement;
        task.classList.add("fall");
        task.addEventListener('transitionend', function () {
            task.remove();
        });
    }
    
    
//COMPLETE UNCOMPLETE ITEM
    if (item.classList[0] === "complete_button") {
        const task = item.parentElement;
        task.classList.toggle("completedItem");
        task.classList.toggle("uncompletedItem");
        
    }
}


//FILTERING THE TASKS 
    function filterTask(e) {
    const task = taskList.childNodes;
    for(let count = 1; count <task.length; count++ ){
        switch (e.target.value) {
            case "all":
                task[count].style.display = "flex";
                break;
            case "completed":
                if (task[count].classList.contains('completedItem')) {
                    task[count].style.display = "flex";
                } else {
                    task[count].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!task[count].classList.contains('uncompletedItem')) {
                    task[count].style.display = "flex";
                } else {
                    task[count].style.display = "none";
                }
                break;
        }
    }
} 




