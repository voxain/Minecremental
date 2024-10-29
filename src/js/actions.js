import Resources from "./resources.js";

let counter = 0;
let actions = {}

class CostRequirement{

}

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