export class Entity {
    constructor() {
        this.name = undefined;
        this.position = [0, 0];
        this.char = undefined;
        this.color = undefined;
        this.solid = true;
    }
}


export class Stats {
    constructor() {
        this.life = [100, 100];
        this.strength = 10;
        this.dexterity = 10;
        this.intelligence = 10;
        this.experience = [0, 0];
    }
}


export class Attacker {
    constructor() {
        this.damage = [0, 0];
        this.crit = [0, 0];
        this.stat_bonus = [undefined, 0];
        this.damage_type = undefined;
        this.range = 1;
    }
}


export class Defender {
    constructor() {
        this.physical = 0;
        this.elemental = 0;
        this.arcane = 0;
    }
}


export class Wearable {
    constructor() {
        this.rarity = 0;
        // weapon, body_armor, leg_armor, ring_armor
        this.category = undefined;
        // hammer, axe, ecc ecc
        this.type = undefined;
    }
}


export class Inventory {
    constructor() {
        this.items_list = [];
        this.weapon = undefined;
        this.body_armor = undefined;
        this.leg_armor = undefined;
        this.ring_armor = undefined;
    }
}


export class Monster {
    constructor() {
        drop_tables = []
    }
}


