import GameLog from "./console.js";
import Inventory from "./inventory.js";
import Achievements from "./achievements.js";

StoryBeginning();

function StoryBeginning(){
    GameLog.printLn("--- Minecremental ---");
    GameLog.printLn("You wake up in the midst of a dense spruce forest. There is nothing but trees around you.");
    setTimeout(() => GameLog.printLn("There is nobody around, no sign of civilization to be seen."), 3000);
    setTimeout(() => GameLog.printLn("You have nothing on you, but you need to find a way to survive."), 6000);
    setTimeout(() => GameLog.printColored("blue", "RESOURCE UNLOCKED:", "Wood"), 6000);
}


var game = {
    Inventory,
    Achievements,

    checkEvents: () => {
        Achievements.forEach(a => {
            a.check();
        });
    },
    gather: id => {
        game.Inventory[id].increase(1);
        game.checkEvents();
    },
}

export default game;