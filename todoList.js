export const todoList = {
    state: [
    {   id: 1,
        task:'Estudiar HTML ',
    },
    {   id: 2,
        task:'Estudiar CSS',
    },
    {   id: 3,    
        task:'Estudiar JS',
    }    
    ],
    
    addTodo(newTodo) {
        this.state.push({id: Math.floor(Math.random()*100),task: newTodo});
        this.render();
    },

    deleteByIndex(index) {
        this.state.splice(index, 1);
        this.render();
    },

    render() {
        let html = "";
    
        for (const todo of this.state) { 
            html += `<li class="lista">${todo.task}
            <button id=${this.state.indexOf(todo)} class="deleteButton"><i class="fa-solid fa-trash-can clear_all_button"></i></button></li>`;        
         }

        let DOMlist = document.getElementById("App") 
        DOMlist.innerHTML = html;
        
        let buttons = document.querySelectorAll(".deleteButton")
        //console.log(buttons);
        buttons.forEach(button => {
            console.log(button);
            button.addEventListener('click', (e) => this.deleteByIndex(e.target.id));
        });
    }

    
}