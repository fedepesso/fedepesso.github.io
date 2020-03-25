let Game = {
	player_name: "test_char",
	seed: Math.floor(Math.random() * 10),
	font_size: 20,
	size: [50, 50],
	display: undefined,
	display_size: [0, 0],
	gui: undefined,
	gui_size: [0, 0],
	log: undefined,
	log_size: [0, 0],
	player: undefined,
	dungeon: [[]],
	dungeon_explored: [[]],
	local_fov: [[]],
	dungeon_fov_object: undefined,
	dungeon_object: undefined,
	entities: undefined,
	depth: 1,
	take_turn: false,

	init: () => {
		Game.player = create_player();
		armor_weapon_giver(Game);
		Game.display_size = [parseInt(window.innerWidth / Game.font_size * 0.5), parseInt(window.innerHeight / Game.font_size - 1)]
		Game.gui_size = [parseInt(window.innerWidth / Game.font_size * 0.4), parseInt(window.innerHeight / Game.font_size - 1)]
		Game.display = new ROT.Display({width:  Game.display_size[0], height: Game.display_size[1], fontSize: Game.font_size, forceSquareRatio:true});
		Game.gui = new ROT.Display({width: Game.gui_size[0], height: Game.gui_size[1], fontSize: Game.font_size, forceSquareRatio:true});
		document.body.appendChild(Game.display.getContainer());
		document.body.appendChild(Game.gui.getContainer());
		move_to(Game, Game.depth);
		Game.render()
		window.addEventListener("keydown", Game.input);
	},

	input: key => {
		let code = key.keyCode;
		switch(code) {
			case 37: //freccia a sinistra
				move_player(Game, Game.player, -1, 0)
				break;
			case 38: //freccia su
				move_player(Game, Game.player, 0, -1)
				break;
			case 39: //freccia a destra
				move_player(Game, Game.player, 1, 0)
				break;
			case 40: //freccia giù
				move_player(Game, Game.player, 0, 1)
				break;
			case 60: // < per disagiati che usano firefox 
			case 226: //<
				let stair = controllo_mostri(Game, Game.player.position[0], Game.player.position[1], true)
				if (stair != undefined) {
					move_to(Game, Game.depth + stair.stair.delta_depth)
				}
				break;
			case 80: //P
				let obj = controllo_mostri(Game, Game.player.position[0], Game.player.position[1], true)
				if (obj!==null){
					if (obj.wearable !== undefined) { equipThing(Game, obj) }
					else if (obj.magical_effect !== undefined) {}
				}
				break;
			
		}
		
		if (Game.take_turn) {
			Game.take_turn = false;
			Game.process();
		}
        Game.render();
	},

    render: () => {
		render_dungeon(Game)
		render_menu(Game)
    },

    process: () => {
        for (let i = 0; i < Game.entities.length; i++) {
			if (Game.entities[i].monster !== undefined) {
				let monster = Game.entities[i]
				if (Game.local_fov[monster.position[0]][monster.position[1]] == 0) {
					let dungeon_path_object = new ROT.Path.AStar(Game.player.position[0], Game.player.position[1], (x, y) => {
						if (Game.dungeon[x][y] === 1) {
							return false
						} 
						return true
					});
					
					let path = []
					dungeon_path_object.compute(monster.position[0], monster.position[1], (x, y) => {
						path.push([x, y])
					})
					if (path.length === 1) {
						let danno = Damage_system(monster, Game.player)
						if (Game.player.stats.life[0] - danno <= 0) {
							// sconfitta
						} else {
							Game.player.stats.life[0] -= danno
						}
					} else if (controllo_mostri(Game, path[1][0], path[1][1]) === null) {
						monster.position = path[1]
					}
				}
			}
		}
    },
}

function create_player() {
	let player = costruttoreUniversale('player', 'player')
	return player;
}