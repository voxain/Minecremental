import Inventory from "./inventory.js";
import GameLog from "./console.js";

let counter = 0;
let Achievements = [];

class Achievement {
    #id
    #name
    #description
    #unlocked = false
    check = () => { 
        if(!this.#unlocked){
            if(this.#checkCondition()){
                return this.unlock();
            }
        }
        return false; 
    }
    #checkCondition = () => { return false; }
    unlock = () => {
        this.#unlocked = true;
        GameLog.printEvent("achievement", `${this.#name}: ${this.#description}`)
    }

    constructor(data){
        this.#id = counter++;
        this.#name = data.name;
        this.#description = data.description;
        this.#checkCondition = data.condition;
    }
}

Achievements.push( new Achievement({
    name: "Morning Wood",
    description: "Gather 10 wood.",
    condition: () => {
        return Inventory.wood.amount() >= 10;
    }
}) );

Achievements.push( new Achievement({
    name: "Stoner",
    description: "Gather 10 stone.",
    condition: () => {
        return Inventory.stone.amount() >= 10;
    }
}) );

export default Achievements;