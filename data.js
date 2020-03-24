let Oggetti = {

    player: {
        "player": {
            "costruttore_entity": ["giobr1", '@', '#000', true],
            "costruttore_stats": [[100, 100], 10, 10, 10, 0, 1, 0],
            "costruttore_attacker": [[0, 0], [0, 0], ['strength', 0], 'physical', 1],
            "costruttore_defender": [0, 0, 0],
            "costruttore_inventory": [undefined, undefined, undefined, undefined]
        }
    },
    
    weapons : {
        "hammer" : {
            "costruttore_entity":["Hammer", "(", "8be036", false], 
            "costruttore_attacker":[[20, 30], [20, 3], ["strength", 2], "elemental", 1], 
            "costruttore_wearable":["Comune", "weapon", "hammer"],
        },
        "axe" : {
            "costruttore_entity":["Axe", "(", "eda221", false], 
            "costruttore_attacker":[[25, 40], [40, 3], ["strength", 4], "physical", 1], 
            "costruttore_wearable":["Raro", "weapon", "axe"],
        },
        "rapier" : {
            "costruttore_entity":["Rapier", "(", "8f7d5e", false], 
            "costruttore_attacker":[[15, 25], [20, 2], ["dexterity", 3], "physical", 1], 
            "costruttore_wearable":["Comune", "weapon", "rapier"],
        },
        "dagger" : {
            "costruttore_entity":["Dagger", "(", "d1c6b4", false], 
            "costruttore_attacker":[[20, 30], [40, 2], ["dexterity", 5], "elemental", 1], 
            "costruttore_wearable":["Raro", "weapon", "dagger"],
        },
        "enchanted sword" : {
            "costruttore_entity":["Enchanted sword", "(", "f9b6fc", false], 
            "costruttore_attacker":[[40, 50], [10, 4], ["intelligence", 10], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "enchanted sword"],
        },
        "ethereal axe" : {
            "costruttore_entity":["Ethereal axe", "(", "ffbe0d", false], 
            "costruttore_attacker":[[35, 50], [10, 4], ["intelligence", 15], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "ethereal axe"],
        },
        "spear" : {
            "costruttore_entity":["Spear", "(", "f50a35", false], 
            "costruttore_attacker":[[20, 30], [30, 2], ["strength", 5], "physical", 2], 
            "costruttore_wearable":["Comune", "weapon", "spear"],
        },
        "tomahawk" : {
            "costruttore_entity":["Tomahawk", "(", "821126", false], 
            "costruttore_attacker":[[25, 30], [30, 2], ["strength", 6], "elemental", 3], 
            "costruttore_wearable":["Raro", "weapon", "tomahawk"],
        },
        "bow" : {
            "costruttore_entity":["Bow", "(", "6e1682", false], 
            "costruttore_attacker":[[30, 35], [50, 2], ["dexterity", 4], "elemental", 5], 
            "costruttore_wearable":["Comune", "weapon", "bow"],
        },
        "shuriken" : {
            "costruttore_entity":["Shuriken", "(", "32941c", false], 
            "costruttore_attacker":[[25, 35], [30, 3], ["dexterity", 3], "physical", 4], 
            "costruttore_wearable":["Raro", "weapon", "shuriken"],
        },
        "magic wand" : {
            "costruttore_entity":["Magic wand", "(", "9bbf93", false], 
            "costruttore_attacker":[[40, 50], [60, 2], ["intelligence", 10], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "magic wand"],
        },
        "magic staff" : {
            "costruttore_entity":["Magic staff", "(", "3c727d", false], 
            "costruttore_attacker":[[40, 60], [40, 3], ["intelligence", 15], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "magic staff"],
        }
    },

    body_armors : {
    	"corazza a scaje" : {
            "costruttore_entity":["Corazza a scaje", "[", "5e5621", false], 
            "costruttore_defender":[40,30,10], 
            "costruttore_wearable":["Comune", "armor", "corazza a scaje"],
        }
    },
    	
    leg_armors : {
    	"calzari alati" : {
            "costruttore_entity":["Calzari alati", "[", "#f011d6", false], 
            "costruttore_defender":[10,30,20], 
            "costruttore_wearable":["Raro", "armor", "calzari alati"],
        }
    },
    	
    rings : {
    	"unico anello" : {
            "costruttore_entity":["Unico anello", "*", "#747519", false], 
            "costruttore_defender":[5,40,40], 
            "costruttore_wearable":["Raro", "armor", "unico anello"],
        }
    },
    	
    monster_spawns : {
    	"goblin" : [1,40,20],
    	"orco" : [2,30,10],
    	"hellhound" : [3,60,15]
    },

    monster: {
    	"goblin" : {
            "costruttore_entity":["Goblin", "g", "#217519", true],
            "costruttore_stats": [[100, 100], 10, 10, 10, 0, 1, 0],
            "costruttore_attacker":[[10, 20], [20, 2], ["strength", 2], "physical", 1],
            "costruttore_defender":[15,10,5], 
            "costruttore_monster":[null,50], 
        },
        "orco" : {
            "costruttore_entity":["Orco", "O", "#473e57", true], 
            "costruttore_stats": [[100, 100], 10, 10, 10, 0, 1, 0],
            "costruttore_attacker":[[30, 40], [30, 2], ["strength", 5], "physical", 1],
            "costruttore_defender":[20,15,10], 
            "costruttore_monster":[null,200], 
        },
        "hellhound" : {
            "costruttore_entity":["Hellhound", "h", "#d9430d", true], 
            "costruttore_stats": [[100, 100], 10, 10, 10, 0, 1, 0],
            "costruttore_attacker":[[20, 30], [50, 2], ["dexterity", 3], "elemental", 1],
            "costruttore_defender":[10,20,10], 
            "costruttore_monster":[null,150], 
        }
    }
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