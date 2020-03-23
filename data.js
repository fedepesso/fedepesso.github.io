let Oggetti = {

    weapons : {
        "spadone" : {
            costruttore_entity:["Spadone", "S", "blue", true], 
            costruttore_attacker:[[20, 30], [30, 2], ["strength", 20], "physical", 1], 
            costruttore_wearable:["Comune", "weapon", "Spada"],
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
    entitaOriginale = new Entity(taker[costruttore_entity]);
    if (type=="weapons"){
        entitaOriginale.attacker = new Attacker(costruttore_attacker);
        entitaOriginale.wearable = new Wearable(costruttore_wearable);
    }else if (type=="body_armors" || type=="leg_armors" || type == "rings"){
        entitaOriginale.defender = new Defender(costruttore_defender);
        entitaOriginale.wearable = new Wearable(costruttore_wearable);
    }else if (type == "monster"){
        entitaOriginale.stats = new Stats(costruttore_stats);
        entitaOriginale.monster = new Monster(costruttore_monster);
        entitaOriginale.attacker = new Attacker(costruttore_attacker);
        entitaOriginale.defender = new Defender(costruttore_defender);
    }

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