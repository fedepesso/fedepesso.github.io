let Oggetti = {

    weapons : {
        "spadone" : ["Spadone", [20, 30], [30, 2], ["strength", 20], "physical", 1],
    },

    body_armors : {
        "armatura a scalie" : ["Armatura a Scalie", 10, 10, 10],
    },

    leg_armors : {
        "gambali da gallina" : ["Gambali da Gallina", -2, -2, -2],
    },

    rings : {},

    monster_spawns : {},

    drop_tables : {}
}



const obtain_Object = function(type, name){
    return Oggetti[type][name];
}