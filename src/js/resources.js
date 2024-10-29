let counter = 0;
let Resources = [];

class Resource{
    #id
    #name
    #count = 0
    increase(amount){
        this.#count += amount || 1;
        document.querySelector("#resource-count-" + this.#id).innerHTML = this.#count;
        return this.#count;
    }
    amount(){
        return this.#count;
    }
    getInfo(){
        return {
            id: this.#id,
            name: this.#name
        };
    }
    constructor(data){
        this.#id = data.id;
    }
}

Resources.push(new Resource({
    id: "wood",
    name: "Wood"
}));
Resources.push(new Resource({
    id: "stone",
    name: "Stone"
}));

export default Resources;