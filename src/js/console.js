let StartTime = Date.now();

let GameLog = {
    printLn: text => {
        let LogTime = ((Date.now() - StartTime) / 1000).toFixed(0).toString().padStart(7, "0");
        document.querySelector('#text').innerHTML += `<span class="log-entry">[${LogTime}] ${text}<br></span>`;
    },
    printColored: (color, text1, text2) => {
        GameLog.printLn(`<span class='color ${color}'>${text1}</span> ${text2}`);
    },
    printEvent: (type, text) => {
        switch(type){
            case "achievement":
                GameLog.printColored("green", "ACHIEVEMENT UNLOCKED:", text);
                break;
            case "resource":
                GameLog.printColored("blue", "RESOURCE UNLOCKED:", text);
                break;
        }
    }
}

export default GameLog;