class Entity {
    constructor() {
        this.name = undefined;
        this.position = [0, 0];
        this.char = undefined;
        this.color = undefined;
    }
}


class Stats {
    constructor() {
        this.life = [100, 100];
        this.strength = 10;
        this.dexterity = 10;
        this.intelligence = 10;
    }
}


class Attacker {
    constructor() {
        this.damage = [0, 0];
        this.crit = [0, 0];
        this.stat_bonus = [undefined, 0];
        this.damage_type = undefined;
    }
}


class Defender {
    constructor() {
        this.physical = 0;
        this.elemental = 0;
        this.arcane = 0;
    }
}

