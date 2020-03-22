class Entity {
    constructor(info = [null, null, null, null]) {
        this.name = info[0];
        this.position = [0, 0];
        this.char = info[1];
        this.color = info[2];
        this.solid = info[3];
    }
}


class Stats {
    constructor(info = [[null, null], null, null, [null, null], null, null]) {
        this.life = [info[0][0], info[0][1]];
        this.strength = info[1];
        this.dexterity = info[2];
        this.intelligence = info[3];
        this.experience = [info[4][0], info[4][1]];
        this.level = info[5];
        this.expendable_points = info[6];
    }
}


class Attacker {
    constructor(info=[[null, null], [null, null], [null, null], null, null]){
        this.damage = [info[0][0], info[0][1]];
        this.crit = [info[1][0], info[1][1]];
        this.stat_bonus = [info[2][0], info[2][1]];
        this.damage_type = info[3];
        this.range = info[4];
    }
}


class Defender {
    constructor(info=[null, null, null, null]) {
        this.name = info[0];
        this.physical = info[1];
        this.elemental = info[2];
        this.arcane = info[3];
    }
}



class Wearable {
    constructor(info=[null, null, null]) {
        this.rarity = info[0];
        // weapon, body_armor, leg_armor, ring_armor
        this.category = info[1];
        // hammer, axe, ecc ecc
        this.type = info[2];
    }
}


class Inventory {
    constructor(info=[null, null, null, null]) {
        this.weapon = info[0];
        this.body_armor = info[1];
        this.leg_armor = info[2];
        this.ring_armor = info[3];
    }
}


class Monster {
    constructor(info = [null, null, null]) {
        this.drop_tables = info[0];
        this.min_depth = info[1];
        this.chance = info[2];
    }
}


