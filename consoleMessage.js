const message = function (type, text="", danno=0){
    const Messagges = {
        "potion_error" : "You can't drink the " + text + " because you don't have one",
        "potion_used" : "You drank a "+ text, 
        "death" : "WASTED",
        "win" : "YOU CLEARED THE DUNGEON",
        "damage_to_monster" : "You inflicted" + danno + " to " + text,
        "damage_to_you" : text + " inflicted to you " + danno,
        "availablePoint_used" : "You used a point to upgrade " + text,
        "availablePoint_error" : "You don't have available points ",

    };
    return Messagges[type];
}