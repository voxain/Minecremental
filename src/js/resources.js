let counter = 0;
let Resources = [];

class Resource{
    #id
    #name
    #icon = ""
    #count = 0
    increase(amount){
        this.#count += amount || 1;
        document.querySelector("#resource-count-" + this.#id).innerHTML = this.#count.toString().padStart(8, "0");
        document.querySelector("#resource-count-" + this.#id).classList.remove("animated");
        void document.querySelector("#resource-count-" + this.#id).offsetWidth;
        document.querySelector("#resource-count-" + this.#id).classList.add("animated");
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
    init(){
        let tr = document.createElement("tr");
        let td_name = document.createElement("td");
        let td_amt = document.createElement("td");

        td_name.classList.add("resource-name");
        td_name.innerHTML = this.#name

        td_amt.classList.add("resource-count");
        td_amt.id = "resource-count-" + this.#id;
        td_amt.innerHTML = this.#count.toString().padStart(8, "0");

        tr.appendChild(td_name);
        tr.appendChild(td_amt);

        document.querySelector("#resources-list").append(tr);
    }
    constructor(data){
        this.#id = data.id;
        this.#name =  data.name;
    }
}

Resources.push(new Resource({
    id: "wood",
    name: "Wood"
}));
Resources.push(new Resource({
    id: "stick",
    name: "└ Stick"
}));
Resources.push(new Resource({
    id: "stone",
    name: "Stone"
}));
Resources.push(new Resource({
    id: "pebble",
    name: "└ Pebble"
}));
Resources.push(new Resource({
    id: "flint",
    name: "└ Flint"
}));
Resources.push(new Resource({
    id: "berries",
    name: "Berries"
}));
Resources.push(new Resource({
    id: "meat",
    name: "Meat"
}));
Resources.push(new Resource({
    id: "coal",
    name: "Coal"
}));
Resources.push(new Resource({
    id: "iron",
    name: "Iron"
}));
Resources.push(new Resource({
    id: "iron-rod",
    name: "└ Iron Rod"
}));
Resources.push(new Resource({
    id: "iron-plate",
    name: "└ Iron Plate"
}));
Resources.push(new Resource({
    id: "iron-bar",
    name: "└ Iron Bar"
}));
Resources.push(new Resource({
    id: "iron-granulate",
    name: "└ Iron Granulate"
}));
Resources.push(new Resource({
    id: "copper",
    name: "Copper"
}));
Resources.push(new Resource({
    id: "copper-rod",
    name: "└ Copper Rod"
}));
Resources.push(new Resource({
    id: "copper-plate",
    name: "└ Copper Plate"
}));
Resources.push(new Resource({
    id: "copper-bar",
    name: "└ Copper Bar"
}));
Resources.push(new Resource({
    id: "copper-granulate",
    name: "└ Copper Granulate"
}));
Resources.push(new Resource({
    id: "sand",
    name: "Sand"
}));
Resources.push(new Resource({
    id: "Glass",
    name: "Glass"
}));
Resources.push(new Resource({
    id: "crushed-glass",
    name: "└ Crushed Glass"
}));
Resources.push(new Resource({
    id: "glass-fiber",
    name: "└ Glass Fiber"
}));
Resources.push(new Resource({
    id: "silicone",
    name: "Silicone"
}));
Resources.push(new Resource({
    id: "semiconductor",
    name: "└ Semiconductor"
}));
Resources.push(new Resource({
    id: "circuit-board",
    name: "Circuit Board"
}));
Resources.push(new Resource({
    id: "microprocessor",
    name: "Microprocessor"
}));
Resources.push(new Resource({
    id: "cpu",
    name: "CPU"
}));
Resources.push(new Resource({
    id: "computer",
    name: "Computer"
}));

Resources.forEach(r => {
    r.init();
});

export default Resources;