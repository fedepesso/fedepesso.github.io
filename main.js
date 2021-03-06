let isplaying = false;
let	isAlive = true;
let Game = {
	seed: Math.floor(Math.random() * 10),
	font_size: 20, 
	size: [50, 50], //dimensione in celle del dungeon
	display: undefined, //riferimento ad oggetto canvas di rot.js
	display_size: [0, 0],
	gui: undefined, //riferimento ad oggetto canvas di rot.js
	gui_size: [0, 0],
	log: [],
	player: undefined,
	dungeon: [[]], //contiene caselle con 0 o 1 a seconda del contenuto della cella
	dungeon_explored: [[]],
	local_fov: [[]],
	dungeon_fov_object: undefined, //istanza del generatore visuale
	dungeon_object: undefined, //istanza del generatore casuale
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
		document.body.appendChild(Game.display.getContainer()); //getContainer è proprietà dell'oggetto canvas
		document.body.appendChild(Game.gui.getContainer());
		move_to(Game, Game.depth);
		Game.log.push("Use arrows to move, letters near stats && potion to use them, pick up thing with P, switch weapon with S, equip the second weapon with Shift+P. Long range weapon use CTRL+arrow")
		Game.render()
		window.addEventListener("keydown", Game.input);
	},

	input: key => {
		if(isAlive){
			let code = key.keyCode;
			if (!isplaying){
				myAudio = new Audio('soundtrack.mp3');
				myAudio.loop = true;
				myAudio.muted = false;
				myAudio.play();
				isplaying = true;
			}
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
					move_player(Game, Game.player, 0, 0)
					recuperaHP(Game);
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
				case 68: //D
					for(let i=0; i<Game.entities.length; i++){
						if((Game.entities[i].position[0] === Game.player.position[0]) && (Game.entities[i].position[1] === Game.player.position[1])){
							const index = Game.entities.indexOf(Game.entities[i]);
        					if (index > -1) {
            					Game.entities.splice(index, 1);
        					}
						}
					}
			}
			if (Game.take_turn) {
				Game.take_turn = false;
				Game.process();
			}
			Game.render();
			}
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
				if (Game.local_fov[monster.position[0]][monster.position[1]] === 0) {
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
					if (path.length === 2) {
						let danno = Damage_system(Game, monster, Game.player)
						if (Game.player.stats.life[0] - danno <= 0) {
							isAlive = false
							Game.log = []
							Game.log.push("")
							Game.log.push("WASTED")
							Game.log.push("YOU DIED")

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