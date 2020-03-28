let Game = {
	player_name: "test_char",
	seed: Math.floor(Math.random() * 10),
	font_size: 20,
	size: [50, 50],
	display: undefined,
	display_size: [0, 0],
	gui: undefined,
	gui_size: [0, 0],
	log: [],
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
		Game.display = new ROT.Display({width: Game.display_size[0], height: Game.display_size[1], fontSize: Game.font_size, forceSquareRatio:true});
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
				if (key.ctrlKey) { ranged_combat(Game, Game.player, -1, 0) }
				else  {move_player(Game, Game.player, -1, 0) }
				break;
			case 38: //freccia su
				if (key.ctrlKey) { ranged_combat(Game, Game.player, 0, -1) }
				else { move_player(Game, Game.player, 0, -1) }
				break;
			case 39: //freccia a destra
				if (key.ctrlKey) { ranged_combat(Game, Game.player, 1, 0) }
				else { move_player(Game, Game.player, 1, 0) }
				break;
			case 40: //freccia giù
				if (key.ctrlKey) { ranged_combat(Game, Game.player, 0, 1) }
				else { move_player(Game, Game.player, 0, 1) }
				break;
			case 60: // < per eroi rivoluzionari che usano firefox per combattere i poteri forti e le manipolazioni delle lobby
			case 226: //<
				let stair = controllo_mostri(Game, Game.player.position[0], Game.player.position[1], true)
				if (stair != undefined) {
					move_to(Game, Game.depth + stair.stair.delta_depth)
				}
				break;
			case 80: //P
				let obj = controllo_mostri(Game, Game.player.position[0], Game.player.position[1], true)
				if (obj!==null){
					if (key.shiftKey) {
						if (obj.wearable !== undefined || obj.magical_effect !== undefined) { equipThing(Game, obj, true) }
					}
					else { if (obj.wearable !== undefined || obj.magical_effect !== undefined) { equipThing(Game, obj) }}
				}
				break;
			case 84: //T
				usePotion(Game, "heal_potion")
				break;
			case 89: //Y
				usePotion(Game, "strength_potion")
				break;
			case 85: //U
				usePotion(Game, "dexterity_potion")
				break;
			case 73: //I
				usePotion(Game, "intelligence_potion")
				break;
			case 79: //O
				usePotion(Game, "experience_potion")
				break;
			case 87://Q
			case 81://W
			case 69://E
			case 82://R
				useAvailablePoint(Game, code);
				break;
			case 32: //barra
				recuperaHP(Game);
				move_player(Game, Game.player, 0, 0)

				break;
			case 83: //S
				if (Game.player.inventory.backup_weapon !== null) {
					let backup = {}
					Object.assign(backup, Game.player.inventory.weapon)
					let switch_weapon = {}
					Object.assign(switch_weapon, Game.player.inventory.backup_weapon)
					Game.player.inventory.weapon = switch_weapon
					Game.player.inventory.backup_weapon = backup
					move_player(Game, Game.player, 0, 0)
				}
				break
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
		render_console(Game)
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
						let danno = Damage_system(Game, monster, Game.player)
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