const difesa_universale = 10;
const attacco_universale = 3; 

const Damage_system = function(Attivo, Passivo){
    let danno=0;
    let stats_needed = Attivo.attacker.stat_bonus[0];
    let type_of_damage=Attivo.attacker.damage_type;

    let valore_difensivo = difesa_universale/(difesa_universale*Passivo.defender[type_of_damage]);

    let danno_arma = Math.floor(Math.random() * Attivo.attacker.damage[1] + Attivo.attacker.damage[0]);
    let bonus_danno = (Attivo.stats[stats_needed]/2) * Attivo.attacker.stat_bonus[1] * attacco_universale;
    let somma_danni = danno_arma + bonus_danno;

    let tiro_critico = Math.floor(Math.random() * 100);
    if(tiro_critico>Attivo.attacker.crit[0]){
        somma_danni *=Attivo.attacker.crit[1];
    }

    danno = Math.floor(somma_danni*valore_difensivo);

    return danno;
}

const move_to = function(game, index){
    ROT.RNG.setSeed(index+game.seed);
    game.dungeon_object = new ROT.Map.Digger(game.size[0], game.size[1]);
    game.dungeon_object.create((x, y, value) => game.dungeon.push(value))
    game.entities = [];
    console.log(game.dungeon)
    let starting_room = game.dungeon_object.getRooms()[0];
    console.log(starting_room)
    game.player.position[0] = Math.floor(Math.random() * (starting_room.getRight() - starting_room.getLeft() + 1)) + starting_room.getLeft();
    game.player.position[1] = Math.floor(Math.random() * (starting_room.getTop() - starting_room.getBottom() + 1)) + starting_room.getBottom();
}

const get_val = function(arr, x, y, x_size) {
    return arr[(x_size * y) + x];
}

const move_player = function(game, player, delta_x, delta_y) {
    if (true) {
        player.position[0] += delta_x;
        player.position[1] += delta_y;
    }
}