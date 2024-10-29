import Resources from "./resources.js";

let Inventory = {};

Resources.forEach(r => {
    Inventory[r.getInfo().id] = r;
});

export default Inventory;