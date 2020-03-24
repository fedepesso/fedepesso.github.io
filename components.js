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

    getResistance (entity, type_of){
        if (entity.inventory === undefined){
            return this.type_of; 
        }else{
            let somma = 0;
            somma+=this.type_of;
            if (entity.inventory.body_armor !== undefined) {somma+=entity.inventory.body_armor[type_of];}
            if (entity.inventory.leg_armor !== undefined) {somma+=entity.inventory.leg_armor[type_of];}
            if (entity.inventory.ring_armor !== undefined) {somma+=entity.inventory.ring_armor[type_of];}
            return somma;
        };
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
    constructor(xp_reward) {
        this.xp_reward = xp_reward;
    }
}


class Stair {
    constructor(delta_depth) {
        this.delta_depth = delta_depth
    }
}


class Potion{
    constructor(statAffected, bonus){
        this.position = [0,0]
        this.stat = statAffected
        this.bonus = bonus;
    }
}

