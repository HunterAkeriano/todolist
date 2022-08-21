
let getBtn = document.getElementById('btn-add');
let getInput = document.getElementById('inp-user');
let getDiv = document.querySelector('.todos-wrapper');

let tasks;
localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function task(des){
    this.des = des;
    this.completed  = false;
}
let createTemplate = (item, index) => {
    return `
    
    `
}
let filCathHTML = () => {
    getDiv.innerHTML = '';
    if(tasks.length  > 0){
        tasks.forEach((item, index) =>{
            getDiv.innerHTML += createTemplate(item, index);
        })
    }
}

let updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

getBtn.addEventListener('click', () => { 
    tasks.push(new task(getInput.value));
    updateLocalStorage();
} )