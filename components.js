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
    constructor() {
        this.life = [100, 100];
        this.strength = 10;
        this.dexterity = 10;
        this.intelligence = 10;
        this.experience = [0, 0];
        this.level = 1;
        this.expendable_points = 0;
    }
}


class Attacker {
    constructor(info=[null, [null, null], [null, null], [null, null], null, null]){
        this.name = info[0];
        this.damage = [info[1][0], info[1][1]];
        this.crit = [info[2][0], info[2][1]];
        this.stat_bonus = [info[3][0], info[3][1]];
        this.damage_type = info[4];
        this.range = info[5];
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
    constructor(info = [null]) {
        drop_tables = info[0];
    }
}


