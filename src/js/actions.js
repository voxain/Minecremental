let counter = 0;
let actions = {}

class Action {
    #id
    #name
    #description
    #cost
    #type           // "gather", "crafting", "projects"
    #requirements
    #unlocked = false
    execute = () => {

    }
    constructor(data) {
        this.#id = counter++;

    }
};



export default actions