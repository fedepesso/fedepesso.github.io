class Entity {
    constructor(name, char, color, solid) {
        this.name = name;
        this.position = [0, 0];
        this.char = char;
        this.color = color;
        this.solid = solid;
    }
}


class Stats {
    constructor(life, forza, destrezza, intelletto, esperienza, livello, punti) {
        this.life = life;
        this.strength = forza;
        this.dexterity = destrezza;
        this.intelligence = intelletto;
        this.experience = esperienza;
        this.level = livello;
        this.expendable_points = punti;
    }
}


class Attacker {
    constructor(danno, critico, stat, tipo, range){
        this.damage = danno;
        this.crit = critico;
        this.stat_bonus = stat;
        this.damage_type = tipo;
        this.range = range;
    }
}


class Defender {
    constructor(fisico, elementale, arcano) {
        this.physical = fisico;
        this.elemental = elementale;
        this.arcane = arcano;
    }
}


class Wearable {
    constructor(rarità, categoria, tipo) {
        this.rarity = rarità;
        // weapon, body_armor, leg_armor, ring_armor
        this.category = categoria;
        // hammer, axe, ecc ecc
        this.type = tipo;
    }
}


class Inventory {
    constructor(weapon, body_armor, leg_armor, ring_armor) {
        this.weapon = weapon;
        this.body_armor = body_armor;
        this.leg_armor = leg_armor;
        this.ring_armor = ring_armor;
    }
}


class Monster {
    constructor(drop_tables, min_depth, chance) {
        this.drop_tables = drop_tables;
        this.min_depth = min_depth;
        this.chance = chance;
    }
}


class Stair {
    constructor(delta_depth) {
        delta_depth = delta_depth
    }
}


