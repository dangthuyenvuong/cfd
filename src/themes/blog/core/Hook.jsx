

let actions = {};
let actionsOneTime = {};

export default {
    doAction: (name,...ref) => {
        if(name in actions){
            actions[name].forEach(e => e(...ref))
        }

        if(name in actionsOneTime){
            for(let i in actionsOneTime[name]){
                actionsOneTime[name][i](...ref)
            }
            actionsOneTime[name] = []
        }
    },
    addAction: (name, callback) => {
        if(!(name in actions)) actions[name] = []
        actions[name].push(callback);
    },
    // doActionOneTime: (name,...ref) => {
    //     if(name in actionsOneTime){
    //         for(let i in actionsOneTime[name]){
    //             actionsOneTime[name][i](...ref)
    //         }
    //         actionsOneTime[name] = []
    //     }
    // },
    addActionOneTime: (name, callback) => {
        if(!(name in actionsOneTime)) actionsOneTime[name] = []
        actionsOneTime[name].push(callback);
    },
}