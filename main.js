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

	init: () => {
		Game.display_size = [parseInt(window.innerWidth / Game.font_size * 0.5), parseInt(window.innerHeight / Game.font_size - 1)]
		Game.gui_size = [parseInt(window.innerWidth / Game.font_size * 0.4), parseInt(window.innerHeight / Game.font_size - 1)]
		Game.display = new ROT.Display({width:  Game.display_size[0], height: Game.display_size[1], fontSize: Game.font_size, forceSquareRatio:true});
		Game.gui = new ROT.Display({width: Game.gui_size[0], height: Game.gui_size[1], fontSize: Game.font_size, forceSquareRatio:true});
		document.body.appendChild(Game.display.getContainer());
		document.body.appendChild(Game.gui.getContainer());
		Game.player = create_player();
		move_to(Game, Game.depth);
		Game.render()
		window.addEventListener("keydown", Game.input);
	},

	input: key => {
		let code = key.keyCode;
		switch(code) {
			case 37:
				move_player(Game, Game.player, -1, 0)
				break;
			case 38:
				move_player(Game, Game.player, 0, -1)
				break;
			case 39:
				move_player(Game, Game.player, 1, 0)
				break;
			case 40:
				move_player(Game, Game.player, 0, 1)
				break;
		}
        Game.render();
	},

    render: () => {
		render_dungeon(Game)
		render_menu(Game)
    },

    process: () => {
        //
    },
}

function create_player() {
	let player = new Entity();
	player.name = Game.player_name;
	player.char = '@';
	player.color = ROT.Color.toHex([128, 91, 0]);
	player.stats = new Stats();
	player.attacker = new Attacker();
	player.defender = new Defender();
	player.inventory = new Inventory();
	return player;
}