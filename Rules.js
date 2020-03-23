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
    game.depth = index;
    ROT.RNG.setSeed(index+game.seed);
    game.dungeon = [...Array(game.size[0])].map(x=>Array(game.size[1]).fill(1));
    game.dungeon_explored = [...Array(game.size[0])].map(x=>Array(game.size[1]).fill(1));
    game.dungeon_object = new ROT.Map.Digger(game.size[0], game.size[1]);
    game.dungeon_object.create((x, y, value) => game.dungeon[x][y] = value)
    game.dungeon_fov_object = new ROT.FOV.PreciseShadowcasting((x, y) => {
        if ((game.dungeon[x] == undefined) || (game.dungeon[x][y] == undefined)) {
            return true;
        }
        return (game.dungeon[x][y] == 0);
    });
    game.entities = [];
    let starting_room = game.dungeon_object.getRooms()[0];
    game.player.position[0] = Math.floor(Math.random() * (starting_room.getRight() - starting_room.getLeft() + 1)) + starting_room.getLeft();
    game.player.position[1] = Math.floor(Math.random() * (starting_room.getTop() - starting_room.getBottom() + 1)) + starting_room.getBottom();
    spawn_entities(game, index)
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
const controllo_mostri = function(game, x, y, non_solid=false){
    if (game.player.x == x && game.player.y == y) {
        return game.player
    }
    for (let i=0; i<game.entities.length; i++){
        if ((game.entities[i].position[0] === x) && (game.entities[i].position[1] === y) && (game.entities[i].solid || non_solid)){
            return game.entities[i]
        }
    }
    return null;
}

const combattimento = function(game, player, mostro) {
    danno = Damage_system(player, mostro);
    if (mostro.stats.hp[0] <= danno) {
        game.entities.filter(val => val != mostro);
        // genera il drop e spawnalo nella cella del monster
        player.stats.experience[0] += mostro.monster
        if (player.stats.experience[0] >= player.stats.experience[1]) {
            player.stats.experience[0] = player.stats.experience[1] - player.stats.experience[0]
            player.stats.level += 1
            player.stats.expendable_points += 1
            player.stats.experience[1] = 1000 + ((player.stats.level - 1) * 200)
        }
    } else {
        mostro.stats.hp[0] -= danno;
    }
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


const spawn_entities = function(game, depth) {
    rooms = game.dungeon_object.getRooms()
    if (depth != 1) {
        upstair = new Entity('Upstair', '<', '#a4a5a5', false)
        upstair.stair = new Stair(-1)
        while (true) {
            room = choice(rooms);
            let x = randint(room.getLeft(), room.getRight());
            let y = randint(room.getTop(), room.getBottom());
            if (controllo_mostri(game, x, y) == null) {
                game.entities.push(upstair);
                upstair.position[0] = x;
                upstair.position[1] = y;
                break;
            }
        }
    }
    if (depth != 10) {
        downstair = new Entity('Downstair', '>', '#a4a5a5', false)
        downstair.stair = new Stair(1)
        while (true) {
            room = choice(rooms);
            let x = randint(room.getLeft(), room.getRight());
            let y = randint(room.getTop(), room.getBottom());
            if (controllo_mostri(game, x, y) == null) {
                game.entities.push(downstair);
                downstair.position[0] = x;
                downstair.position[1] = y;
                break;
            }
        }
    }

    monsters = FilterMonsters(depth)
    Object.keys(monsters).forEach(v => {
        for (let i = 0; i < monsters[v][2]; i++) {
            while (x < 20) {
                room = choice(rooms);
                let x = randint(room.getLeft(), room.getRight());
                let y = randint(room.getTop(), room.getBottom());
                if (controllo_mostri(game, x, y) == null) {
                    if (randint(0, 100) <= monsters[v][1]) {
                        monster_entity = costruttoreUniversale('monster', v);
                        game.entities.push(monster_entity);
                        monster_entity.position[0] = x;
                        monster_entity.position[1] = y;
                        break;
                    }
                    x += 1;
                }
            }
        }
    })
}

