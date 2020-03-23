let Oggetti = {

    player: {
        "player": {
            "costruttore_entity": [Game.player_name, '@', '#000', true],
            "costruttore_stats": [[100, 100], 10, 10, 10, 0, 1, 0],
            "costruttore_attacker": [[0, 0], [0, 0], ['strength', 0], 'physical', 1],
            "costruttore_defender": [0, 0, 0],
            "costruttore_inventory": [undefined, undefined, undefined, undefined]
        }
    },
    
    weapons : {
        "spadone" : {
            "costruttore_entity":["Spadone", "S", "blue", true], 
            "costruttore_attacker":[[20, 30], [30, 2], ["strength", 20], "physical", 1], 
            "costruttore_wearable":["Comune", "weapon", "Spada"],
        }
    },

    body_armors : {},

    leg_armors : {},

    rings : {},

    monster_spawns : {},

    monster: {}
}


const obtain_Object = function(type, name){
    return Oggetti[type][name];
}

const costruttoreUniversale = function (type, nome){
    let taker = obtain_Object(type, nome);
    entitaOriginale = new Entity(...taker["costruttore_entity"]);
    if (type=="weapons"){
        entitaOriginale.attacker = new Attacker(...taker["costruttore_attacker"]);
        entitaOriginale.wearable = new Wearable(...taker["costruttore_wearable"]);
    }else if (type=="body_armors" || type=="leg_armors" || type == "rings"){
        entitaOriginale.defender = new Defender(...taker["costruttore_defender"]);
        entitaOriginale.wearable = new Wearable(...taker["costruttore_wearable"]);
    }else if (type == "monster"){
        entitaOriginale.stats = new Stats(...taker["costruttore_stats"]);
        entitaOriginale.monster = new Monster(...taker["costruttore_monster"]);
        entitaOriginale.attacker = new Attacker(...taker["costruttore_attacker"]);
        entitaOriginale.defender = new Defender(...taker["costruttore_defender"]);
    }else if (type == "player"){
        entitaOriginale.stats = new Stats(...taker["costruttore_stats"]);
        entitaOriginale.attacker = new Attacker(...taker["costruttore_attacker"]);
        entitaOriginale.defender = new Defender(...taker["costruttore_defender"]);
        entitaOriginale.inventory = new Inventory(...taker["costruttore_inventory"])
    }
    return entitaOriginale;
}

const FilterMonsters = function(depth) {
    let new_list = {};
    Object.keys(Oggetti.monster_spawns).forEach(v => {
        let data = Oggetti.monster_spawns[v]
        if (depth >= data[0]) {
            new_list[v] = data;
        }
    })
    return new_list;
}