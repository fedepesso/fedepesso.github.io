const difesa_universale = 10;
const attacco_universale = 3; 
const mostro_attaccato = null;


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
    game.dungeon = [...Array(game.size[0])].map(x=>Array(game.size[1]).fill(1));
    game.dungeon_explored = [...Array(game.size[0])].map(x=>Array(game.size[1]).fill(1));
    game.dungeon_object = new ROT.Map.Digger(game.size[0], game.size[1]);
    game.dungeon_object.create((x, y, value) => game.dungeon[x][y] = value)
    game.dungeon_fov_object = new ROT.FOV.PreciseShadowcasting((x, y) => {
        if ((game.dungeon[x] == undefined) || (game.dungeon[x][y] == undefined)) {
            return false;
        }
        return game.dungeon[x][y] == 0;
    });
    game.entities = [];
    let starting_room = game.dungeon_object.getRooms()[0];
    game.player.position[0] = Math.floor(Math.random() * (starting_room.getRight() - starting_room.getLeft() + 1)) + starting_room.getLeft();
    game.player.position[1] = Math.floor(Math.random() * (starting_room.getTop() - starting_room.getBottom() + 1)) + starting_room.getBottom();
}

const move_player = function(game, player, delta_x, delta_y) {
    if (controllo_muro(game, player.position[0]+delta_x, player.position[1]+delta_y)) {
        collision = controllo_mostri(game, player.position[0] + delta_x, player.position[1] + delta_y)
        if (collision == null) {
            player.position[0] += delta_x
            player.position[1] += delta_y;
        } else {
            combattimento(game, player, collision)
        }
    }
}

const controllo_muro = function(game, x, y){
    if (game.dungeon[x][y]==0){
        return true;
    }
    return false;
}
const controllo_mostri = function(game, x, y){
    for (let i=0; i<game.entities.length; i++){
        if ((game.entities[i].position[0] === x) && (game.entities[i].position[1] === y) && (game.entities[i].solid)){
            return game.entities[i]
        }
    }
    return null;
}

const combattimento = function(game, player, mostro) {
    //
}

function randint(a, b) {
 min=a
 max= Math.floor(b+1);
 return Math.floor(Math.random() * (max - min)) + min;
}

function choice (arr) {
    l=arr.length-1
    index=randint(0,l)
    return arr[index];
}

