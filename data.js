Oggetti = {
    "monster_spawns" : {
        "goblin" : [1, 40, 20],
        "ogre" : [2, 30, 10],
        "hellhound" : [3, 60, 15],
        "hydra" : [10, 100, 1],
        "gorgon" : [5, 70, 1],
        "witch" : [6, 40, 7],
        "chaotic knight" : [5, 60, 5],
        "unicorn" : [9, 100, 3],
        "sand worm" : [8, 80, 2],
        "sphinx" : [10, 70, 6],
        "titan" : [7, 80, 4],
        "ice giant" : [4, 40, 10]
    }
}

function giveMeObject(type, name) {
    let Oggetti = {

        "player" : {
            "player": {
                "costruttore_entity": ["giobr1", '@', '#000000', false],
                "costruttore_stats": [[100, 100], 10, 10, 10, [0, 1000], 1, 0],
                "costruttore_defender": [5, 5, 5],
                "costruttore_inventory": [undefined, undefined, undefined, undefined]
            }
        },
        
        "weapon" : {
            "spada di prova" : {
                "costruttore_entity":["Spada di Prova", "°", "#8be03g", false], 
                "costruttore_attacker":[[5, 15], [10, 3], ["strength", 2], "elemental", 1], 
                "costruttore_wearable":["Comune", "weapon", "spada di prova"],
            },
            "hammer" : {
                "costruttore_entity":["Hammer", "(", "#8be036", false], 
                "costruttore_attacker":[[20, 30], [20, 3], ["strength", 2], "elemental", 1], 
                "costruttore_wearable":["Comune", "weapon", "hammer"],
            },
            "axe" : {
                "costruttore_entity":["Axe", "(", "#eda221", false], 
                "costruttore_attacker":[[25, 40], [40, 3], ["strength", 4], "physical", 1], 
                "costruttore_wearable":["Raro", "weapon", "axe"],
            },
            "rapier" : {
                "costruttore_entity":["Rapier", "(", "#8f7d5e", false], 
                "costruttore_attacker":[[15, 25], [20, 2], ["dexterity", 3], "physical", 1], 
                "costruttore_wearable":["Comune", "weapon", "rapier"],
            },
            "dagger" : {
                "costruttore_entity":["Dagger", "(", "#d1c6b4", false], 
                "costruttore_attacker":[[20, 30], [40, 2], ["dexterity", 5], "elemental", 1], 
                "costruttore_wearable":["Raro", "weapon", "dagger"],
            },
            "enchanted sword" : {
                "costruttore_entity":["Enchanted sword", "(", "#f9b6fc", false], 
                "costruttore_attacker":[[40, 50], [10, 4], ["intelligence", 10], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "enchanted sword"],
            },
            "ethereal axe" : {
                "costruttore_entity":["Ethereal axe", "(", "#ffbe0d", false], 
                "costruttore_attacker":[[35, 50], [10, 4], ["intelligence", 15], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "ethereal axe"],
            },
            "spear" : {
                "costruttore_entity":["Spear", "(", "#f50a35", false], 
                "costruttore_attacker":[[20, 30], [30, 2], ["strength", 5], "physical", 2], 
                "costruttore_wearable":["Comune", "weapon", "spear"],
            },
            "tomahawk" : {
                "costruttore_entity":["Tomahawk", "(", "#821126", false], 
                "costruttore_attacker":[[25, 30], [30, 2], ["strength", 6], "elemental", 3], 
                "costruttore_wearable":["Raro", "weapon", "tomahawk"],
            },
            "bow" : {
                "costruttore_entity":["Bow", "(", "#6e1682", false], 
                "costruttore_attacker":[[30, 35], [50, 2], ["dexterity", 4], "elemental", 5], 
                "costruttore_wearable":["Comune", "weapon", "bow"],
            },
            "shuriken" : {
                "costruttore_entity":["Shuriken", "(", "#32941c", false], 
                "costruttore_attacker":[[25, 35], [30, 3], ["dexterity", 3], "physical", 4], 
                "costruttore_wearable":["Raro", "weapon", "shuriken"],
            },
            "magic wand" : {
                "costruttore_entity":["Magic wand", "(", "#9bbf93", false], 
                "costruttore_attacker":[[40, 50], [60, 2], ["intelligence", 10], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "magic wand"],
            },
            "magic staff" : {
                "costruttore_entity":["Magic staff", "(", "#3c727d", false], 
                "costruttore_attacker":[[40, 60], [40, 3], ["intelligence", 15], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "magic staff"],
            },
            "spada di grifondoro" : {
                "costruttore_entity":["Spada di Grifondoro", "!", "#e0fc0a", false], 
                "costruttore_attacker":[[150, 200], [50, 3], ["strength", 10], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "spada di grifondoro"],
            },
            "bastone di shazam" : {
                "costruttore_entity":["Bastone di Shazam", "^", "#ad0502", false], 
                "costruttore_attacker":[[50, 70], [50, 2], ["intelligence", 30], "arcane", 1], 
                "costruttore_wearable":["Leggendario", "weapon", "bastone di shazam"],
            },
            "spada di ferro" : {
                "costruttore_entity":["Spada di ferro", "!", "#b0aa9b", false], 
                "costruttore_attacker":[[10, 25], [30, 2], ["strength", 5], "arcane", 1], 
                "costruttore_wearable":["Non comune", "weapon", "spada di ferro"],
            },
        },
    
        "body_armors" : {
            "corazza a scaje" : {
                "costruttore_entity":["Corazza a scaje", "[", "#5e5621", false], 
                "costruttore_defender":[40,30,10], 
                "costruttore_wearable":["Comune", "body_armor", "corazza a scaje"],
            },
            "corazza di cuoio" : {
                "costruttore_entity":["Corazza di cuoio", "[", "#f7b705", false], 
                "costruttore_defender":[20,30,5], 
                "costruttore_wearable":["Comune", "body_armor", "corazza di cuoio"],
            },
            "corazza di maglia" : {
                "costruttore_entity":["Corazza a scaje", "[", "#c9c5b7", false], 
                "costruttore_defender":[40,40,15], 
                "costruttore_wearable":["Comune", "body_armor", "corazza di maglia"],
            },
            "corazza di pelle" : {
                "costruttore_entity":["Corazza di pelle", "[", "#634a04", false], 
                "costruttore_defender":[2, 2, 2], 
                "costruttore_wearable":["Comune", "body_armor", "corazza di pelle"],
            },
            "armatura a bande" : {
                "costruttore_entity":["Armatura a bande", "[", "#19bf7a", false], 
                "costruttore_defender":[60,40,20], 
                "costruttore_wearable":["Raro", "body_armor", "armatura a bande"],
            },
            "armatura di piastre" : {
                "costruttore_entity":["Armatura di piastre", "[", "#158c88", false], 
                "costruttore_defender":[60,30,40], 
                "costruttore_wearable":["Raro", "body_armor", "armatura di piastre"],
            },
            "bardatura da giostra" : {
                "costruttore_entity":["Bardatura da giostra", "[", "#eb1b0c", false], 
                "costruttore_defender":[50,50,70], 
                "costruttore_wearable":["Leggendario", "body_armor", "bardatura da giostra"],
            }
            
        },
            
        "leg_armors" : {
            "calzari di pelle" : {
                "costruttore_entity":["Calzari di pelle", "]", "#15AB24", false], 
                "costruttore_defender":[2, 2, 2], 
                "costruttore_wearable":["Comune", "leg_armor", "Calzari di pelle"],
            },
            "sabatons" : {
                "costruttore_entity":["Sabatons", "]", "#997573", false], 
                "costruttore_defender":[10,10,5], 
                "costruttore_wearable":["Comune", "leg_armor", "sabatons"],
            },
            "calzari alati" : {
                "costruttore_entity":["Calzari alati", "]", "#f011d6", false], 
                "costruttore_defender":[10,30,20], 
                "costruttore_wearable":["Raro", "leg_armor", "calzari alati"],
            },
            "schinieri di ferro" : {
                "costruttore_entity":["Schinieri di ferro", "]", "#a19b9a", false], 
                "costruttore_defender":[30,30,10], 
                "costruttore_wearable":["Raro", "leg_armor", "schinieri di ferro"],
            },
            "cosciali in scaje" : {
                "costruttore_entity":["Cosciali in scaje", "]", "#787144", false], 
                "costruttore_defender":[20,30,20], 
                "costruttore_wearable":["Raro", "leg_armor", "Cosciali in scaje"],
            },
            "gambali speronati" : {
                "costruttore_entity":["Gambali speronati", "]", "#46318c", false], 
                "costruttore_defender":[40,20,30], 
                "costruttore_wearable":["Raro", "leg_armor", "gambali speronati"],
            },
            "pantofole pucciose" : {
                "costruttore_entity":["Pantofole pucciose", "]", "#e31ec9", false], 
                "costruttore_defender":[10,50,70], 
                "costruttore_wearable":["Leggendario", "leg_armor", "pantofole pucciose"],
            },
            
        },
            
        "rings" : {
            "unico anello" : {
                "costruttore_entity":["Unico anello", "*", "#747519", false], 
                "costruttore_defender":[5,40,40], 
                "costruttore_wearable":["Leggendario", "ring_armor", "unico anello"],
            },
            
            "anello d'erba" : {
                "costruttore_entity":["Anello d'erba", "*", "#15AB24", false], 
                "costruttore_defender":[1, 1, 1], 
                "costruttore_wearable":["Raro", "ring_armor", "anello d'erba"],
            },
    
            "anello di totano" : {
                "costruttore_entity":["Anello di totano", "*", "#dbda7b", false], 
                "costruttore_defender":[0, 1, 0], 
                "costruttore_wearable":["Comune", "ring_armor", "anello di totano"],
            },

            "anello orvoloson" : {
                "costruttore_entity":["Anello Orvoloson", "*", "#3b3d40", false], 
                "costruttore_defender":[10, 10, 100], 
                "costruttore_wearable":["Leggendario", "ring_armor", "anello orvoloson"],
            }
    
        },
    
        "monster" : {
            "goblin" : {
                "costruttore_entity":["goblin", "g", "#217519", true],
                "costruttore_stats": [[25, 25], 3, 4, 3, 0, 1, 0],
                "costruttore_attacker":[[5, 20], [20, 2], ["strength", 2], "physical", 1],
                "costruttore_defender":[5,10,5], 
                "costruttore_monster":[50], 
            },
            "ogre" : {
                "costruttore_entity":["ogre", "O", "#473e57", true], 
                "costruttore_stats": [[55, 55], 10, 10, 10, 0, 1, 0],
                "costruttore_attacker":[[20, 40], [25, 2], ["strength", 5], "physical", 1],
                "costruttore_defender":[10,15,10], 
                "costruttore_monster":[150], 
            },
            "hellhound" : {
                "costruttore_entity":["hellhound", "h", "#d9430d", true], 
                "costruttore_stats": [[75, 75], 10, 30, 5, 0, 1, 0],
                "costruttore_attacker":[[30, 50], [33, 2], ["dexterity", 3], "elemental", 1],
                "costruttore_defender":[10,20,25], 
                "costruttore_monster":[250], 
            },
            "hydra" : {
                "costruttore_entity":["hydra", "H", "#ca61ff", true], 
                "costruttore_stats": [[1750, 1750], 110, 100, 120, 0, 1, 0],
                "costruttore_attacker":[[300, 500], [33, 4], ["strength", 10], "arcane", 1],
                "costruttore_defender":[100, 100, 100], 
                "costruttore_monster":[1000000], 
            },
            "gorgon" : {
                "costruttore_entity":["gorgon", "G", "#1f28db", true], 
                "costruttore_stats": [[100, 100], 10, 20, 22, 3, 4, 50],
                "costruttore_attacker":[[60, 70], [40, 3], ["intelligence", 10], "arcane", 1],
                "costruttore_defender":[10, 20, 15], 
                "costruttore_monster":[1000], 
            },
            "witch" : {
                "costruttore_entity":["witch", "w", "#4f2045", true], 
                "costruttore_stats": [[100, 100], 15, 25, 23, 0, 1, 0],
                "costruttore_attacker":[[40, 50], [60, 2], ["dexterity", 2], "elemental", 1],
                "costruttore_defender":[20, 15, 15], 
                "costruttore_monster":[1000], 
            },
            "chaotic knight" : {
                "costruttore_entity":["chaotic knight", "K", "#7d737b", true], 
                "costruttore_stats": [[150, 150], 40, 20, 20, 0, 1, 0],
                "costruttore_attacker":[[40, 70], [20, 3], ["strength", 5], "arcane", 1],
                "costruttore_defender":[30, 20, 10], 
                "costruttore_monster":[2000], 
            },
            "unicorn" : {
                "costruttore_entity":["unicorn", "U", "#a8168b", true], 
                "costruttore_stats": [[200, 200],  15, 30, 15, 0, 1, 0],
                "costruttore_attacker":[[45, 60], [30, 3], ["dexterity", 8], "arcane", 1],
                "costruttore_defender":[30, 30, 40], 
                "costruttore_monster":[-100], 
            },
            "sand worm" : {
                "costruttore_entity":["sand worm", "W", "#e1e88e", true], 
                "costruttore_stats": [[200, 200], 30, 50, 30, 0, 1, 0],
                "costruttore_attacker":[[70, 75], [40, 2], ["dexterity", 7], "elemental", 1],
                "costruttore_defender":[60, 50, 40], 
                "costruttore_monster":[1500], 
            },
            "sphinx" : {
                "costruttore_entity":["sphinx", "s", "#c47733", true], 
                "costruttore_stats": [[300, 30], 30, 20, 50, 0, 1, 0],
                "costruttore_attacker":[[50, 65], [60, 3], ["intelligence", 6], "arcane", 1],
                "costruttore_defender":[40, 40, 30], 
                "costruttore_monster":[2500], 
            },
            "titan" : {
                "costruttore_entity":["titan", "T", "#665341", true], 
                "costruttore_stats": [[1000, 1000], 100, 10, 10, 0, 1, 0],
                "costruttore_attacker":[[90, 100], [20, 5], ["strength", 10], "physical", 1],
                "costruttore_defender":[200, 120, 50], 
                "costruttore_monster":[10000], 
            },
            "ice giant" : {
                "costruttore_entity":["ice giant", "I", "#87dbde", true], 
                "costruttore_stats": [[400, 400], 10, 10, 10, 0, 1, 0],
                "costruttore_attacker":[[20, 30], [40, 3], ["strength", 6], "physical", 1],
                "costruttore_defender":[30, 40, 10], 
                "costruttore_monster":[300], 
            }
        },
    
        "drop_tables" : {
            "goblin" : [["anello di totano", "rings",  10, 1], ["spada di ferro", "weapon",  10, 1]],
        
            "ogre" : [["spada di grifondoro", "weapon", 5, 1]],
    
            "hellhound" : [["anello orvoloson", "rings",  10, 1], ["dexterity_potion", "potion", 20, 2]],
    
            "gorgon" : [["schinieri di ferro", "leg_armors", 10, 1], ["strength_potion", "potion", 10, 2]],
    
            "witch" : [["bastone di shazam", "weapon", 7, 1], ["intelligence_potion", "potion", 20, 1]],
    
            "chaotic knight" : [["corazza a scaje", "body_armors", 33, 1], ["cosciali in scaje", "legs_armors", 33, 1], ["hammer", "weapon", 33, 1], ["strength_potion", "potion", 20, 2]],
    
            "unicorn" : [["heal_potion", "potion",  50, 2], ["calzari alati", "leg_armors", 10, 1]],
    
            "sand worm" : [["unico anello", "rings",  10, 1], [ "bardatura da giostra", "body_armors", 10, 1]],
    
            "sphinx" : [["magic wand", "weapon",  10, 1], ["armature di piastre", "body_armors", 10, 1]],
    
            "titan" : [["tomahawk", "weapon",  10, 1], ["gambali speronati", "leg_armors", 10, 1]],
    
            "ice giant" : [["enchanted sword", "weapon",  10, 1], ["pantofole pucciose", "leg_armors", 10, 1]],
        },
    
        "potion" : {
            "heal_potion" : {
                "costruttore_entity" : ["heal_potion", "+", "#e92f71", false],
                "costruttore_potion" : ["life", 50]
            },
    
            "strength_potion" : {
                "costruttore_entity" : ["strength_potion", "+", "#e92f71", false],
                "costruttore_potion" : ["strength", 2]
            },
    
            "dexterity_potion" : {
                "costruttore_entity" : ["dexterity_potion", "+", "#e92f71", false],
                "costruttore_potion" : ["dexterity", 2]
            },
    
            "intelligence_potion" : {
                "costruttore_entity" : ["intelligence_potion", "+", "#e92f71", false],
                "costruttore_potion" : ["intelligence", 2]
            },
    
            "experience_potion" : {
                "costruttore_entity" : ["experience_potion", "+", "#e92f71", false],
                "costruttore_potion" : ["experience", 500]
            }
        }
    }
    return Oggetti[type][name];
}




const obtain_Object = function(type, name){
    let taker = giveMeObject(type, name)
    return taker;
}

const costruttoreUniversale = function (type, nome){
    let taker = obtain_Object(type,nome)
    entitaOriginale = new Entity(...taker["costruttore_entity"]);
    if (type=="weapon"){
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
        entitaOriginale.defender = new Defender(...taker["costruttore_defender"]);
        entitaOriginale.inventory = new Inventory(...taker["costruttore_inventory"]);
    }else if (type == "potion"){
        entitaOriginale.potion = new MagicalEffect(...taker["costruttore_potion"]);
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


const DropCalculator = function (game, monster){
    const table = giveMeObject("drop_tables", monster.name);
    for (let i = 0; i<table.length; i++){
        for(let j = 0; j<table[i][3]; j++){
            if ((Math.floor(Math.random() * 100)) <= table[i][2]){
                if(table[i][1] === "potion"){
                    equipThing(game, costruttoreUniversale(table[i][1], table[i][0]));
                }else{
                    let equip = costruttoreUniversale(table[i][1], table[i][0]);
                    equip.position = monster.position;
                    game.entities.push(equip);
                }
            }
        }
    }
}


const equipThing = function (game, entity){
    if(entity.wearable !== undefined){
        if(game.player.inventory[entity.wearable.category] !== undefined){
            const pos = [game.player.position[0], game.player.position[1]]
            if(controller(game, pos[0], pos[1]+1)){
                pos[1]+=1;
                game.player.inventory[entity.wearable.category].position = pos;
            }else if(controller(game, pos[0]-1, pos[1])){
                pos[0]-=1;
                game.player.inventory[entity.wearable.category].position = pos;
            }else if(controller(game, pos[0]+1, pos[1])){
                pos[0]+=1;
                game.player.inventory[entity.wearable.category].position = pos;
            }else if(controller(game, pos[0], pos[1]-1)){
                pos[1]-=1;
                game.player.inventory[entity.wearable.category].position = pos;
            }
            game.entities.push(game.player.inventory[entity.wearable.category]);
        }else{
            //inserire un messaggio di errore nella console
        }
        
        game.player.inventory[entity.wearable.category] = entity;
        
        if (game.entities !== undefined) {
            const index = game.entities.indexOf(entity);
            if (index > -1) {
                game.entities.splice(index, 1);
            }
        }
    }else if (entity.potion !== undefined){
        game.player.inventory.items[entity.name] += 1;
    }
}

const controller = function (game, x, y){
    if ((controllo_muro(game, x, y)) && (controllo_mostri(game, x, y) === null)){
        return true;
    }
    return false;
}



const Lista_Entity = [];


const usePotion = function (game, name){
    if(game.player.inventory.items[name]>0){
        let pozioneP = costruttoreUniversale("potion", name);
        game.player.inventory.items[name] -= 1;
        game.log.push("You drank a "+ name);
        if(name === "heal_potion" && (game.player.stats.life[0] !== game.player.stats.life[1])){
            game.player.stats.life[0]+=pozioneP.potion.bonus
            if(game.player.stats.life[0]>game.player.stats.life[1]){
                game.player.stats.life[0]-=(game.player.stats.life[0]-game.player.stats.life[1]);
            }
        }else{
            game.player.stats[pozioneP.potion.stat] += pozioneP.potion.bonus;
        }
    }else{
        game.log.push("You can't drink the " + name + " because you don't have one");
    }
    
}


const useAvailablePoint = function (game, number){
    if(game.player.stats.expendable_points>0){
        game.player.stats.expendable_points -= 1;
        if(number === 81){
            game.player.stats.strength += 1;
            game.log.push("You used a point to upgrade your strength");
        }else if(number === 87){
            game.player.stats.dexterity += 1;
            game.log.push("You used a point to upgrade your dexterity");
        }else if(number === 69){
            game.player.stats.intelligence += 1;
            game.log.push("You used a point to upgrade your intelligence");
        }else if(number === 82){
            game.player.stats.life[1] += 10;
            game.log.push("You used a point to upgrade your life");
        }
    }
    else{
        game.log.push("There are no available points")
    }
}


const recuperaHP = function (game) {
    if (game.player.stats.life[0]<game.player.stats.life[1]){
        game.player.stats.life[0] += 1;
    }else{
        //error recupero vita
    }
}