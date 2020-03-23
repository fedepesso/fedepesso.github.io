let Oggetti = {
    
    weapons : {
        "hammer" : {
            "costruttore_entity":["hammer", "(", "8be036", true], 
            "costruttore_attacker":[[20, 30], [20, 3], ["strength", 2], "elemental", 1], 
            "costruttore_wearable":["Comune", "weapon", "hammer"],
        }
        "axe" : {
            "costruttore_entity":["axe", "(", "eda221", true], 
            "costruttore_attacker":[[25, 40], [40, 3], ["strength", 4], "physical", 1], 
            "costruttore_wearable":["Raro", "weapon", "axe"],
        }
        "rapier" : {
            "costruttore_entity":["rapier", "(", "8f7d5e", true], 
            "costruttore_attacker":[[15, 25], [20, 2], ["dexterity", 3], "physical", 1], 
            "costruttore_wearable":["Comune", "weapon", "rapier"],
        }
        "dagger" : {
            "costruttore_entity":["dagger", "(", "d1c6b4", true], 
            "costruttore_attacker":[[20, 30], [40, 2], ["dexterity", 5], "elemental", 1], 
            "costruttore_wearable":["Raro", "weapon", "dagger"],
        }
        "enchanted sword" : {
            "costruttore_entity":["enchanted sword", "(", "f9b6fc", true], 
            "costruttore_attacker":[[40, 50], [10, 4], ["intelligence", 10], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "enchanted sword"],
        }
        "ethereal axe" : {
            "costruttore_entity":["ethereal axe", "(", "ffbe0d", true], 
            "costruttore_attacker":[[35, 50], [10, 4], ["intelligence", 15], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "ethereal axe"],
        }
        "spear" : {
            "costruttore_entity":["spear", "(", "f50a35", true], 
            "costruttore_attacker":[[20, 30], [30, 2], ["strength", 5], "physical", 2], 
            "costruttore_wearable":["Comune", "weapon", "spear"],
        }
        "tomahawk" : {
            "costruttore_entity":["tomahawk", "(", "821126", true], 
            "costruttore_attacker":[[25, 30], [30, 2], ["strength", 6], "elemental", 3], 
            "costruttore_wearable":["Raro", "weapon", "tomahawk"],
        }
        "bow" : {
            "costruttore_entity":["bow", "(", "6e1682", true], 
            "costruttore_attacker":[[30, 35], [50, 2], ["dexterity", 4], "elemental", 5], 
            "costruttore_wearable":["Comune", "weapon", "bow"],
        }
        "shuriken" : {
            "costruttore_entity":["shuriken", "(", "32941c", true], 
            "costruttore_attacker":[[25, 35], [30, 3], ["dexterity", 3], "physical", 4], 
            "costruttore_wearable":["Raro", "weapon", "shuriken"],
        }
        "magic wand" : {
            "costruttore_entity":["magic wand", "(", "9bbf93", true], 
            "costruttore_attacker":[[40, 50], [60, 2], ["intelligence", 10], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "magic wand"],
        }
        "magic staff" : {
            "costruttore_entity":["magic staff", "(", "3c727d", true], 
            "costruttore_attacker":[[40, 60], [40, 3], ["intelligence", 15], "arcane", 1], 
            "costruttore_wearable":["Leggendario", "weapon", "magic staff"],
        }
    },

    body_armors : {
    	"corazza a scaje" : {
            "costruttore_entity":["corazza a scaje", "[", "5e5621", true], 
            "costruttore_defender":[40,30,10], 
            "costruttore_wearable":["Comune", "armor", "corazza a scaje"],
        }
    },
    	
    leg_armors : {
    	"calzari alati" : {
            "costruttore_entity":["calzari alati", "[", "#f011d6", true], 
            "costruttore_defender":[10,30,20], 
            "costruttore_wearable":["Raro", "armor", "calzari alati"],
        }
    },
    	
    rings : {
    	"unico anello" : {
            "costruttore_entity":["unico anello", "*", "#747519", true], 
            "costruttore_defender":[5,40,40], 
            "costruttore_wearable":["Raro", "armor", "unico anello"],
        }
    },
    	
    monster_spawns : {
    	"goblin" : [1,40,20]
    	"orco" : [2,30,10]
    	"hellhound" : [3,60,15]
    },

    monster: {
    	"goblin" : {
            "costruttore_entity":["goblin", "g", "#217519", true], 
            "costruttore_attacker":[[10, 20], [20, 2], ["strength", 2], "physical", 1],
            "costruttore_defender":[15,10,5], 
            "costruttore_monster":[null,50], 
        }
        "orco" : {
            "costruttore_entity":["orco", "O", "#473e57", true], 
            "costruttore_attacker":[[30, 40], [30, 2], ["strength", 5], "physical", 1],
            "costruttore_defender":[20,15,10], 
            "costruttore_monster":[null,200], 
        }
        "hellhound" : {
            "costruttore_entity":["hellhound", "h", "#d9430d", true], 
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
        entitaOriginale.defender = new Defender(...taker["costruttore_defendertaker"]);
    }
    return entitaOriginale;
}

const FilterMonsters = function(depth) {
    let new_list = {};
    Oggetti.monster_spawns.keys().forEach(v => {
        let data = Oggetti.monster_spawns[v]
        if (depth >= data[0]) {
            new_list[v] = data;
        }
    })
    return new_list;
}