/**
 * manage a todo array
 * {id: 1, title: '...', description: '...' }
 */

// let instance = null;

class TodoService {
    // static getInstance() {
    //     if (instance !== null) {
    //         return instance;
    //     } else {
    //         // instance = new this()
    //         instance = new TodoService();
    //         return instance
    //     }
    // }    

    constructor() {
        this.tasks = [];
    }

    /**
     * return all tasks
     */
    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        task.id = this.tasks.length + 1;
        this.tasks.push(task);
        return task;
    }

    updateTask(id, task) {
        const taskToBeUpdated = this.tasks.find((singleTask) => singleTask.id === id);
        for (let key of Object.keys(task)) {
            taskToBeUpdated[key] = task[key];
        }
        return taskToBeUpdated
    }

    deleteTask(id) {
        this.tasks.splice(id);
    }
}

module.exports = new TodoService();

