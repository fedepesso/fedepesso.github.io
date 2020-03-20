let settings = {
	player_name: "test_char",
	seed: Math.floor(Math.random()),
	font_size: 25,
	size: [0, 0]
}


let Game = {
	display: undefined,
	display_size: [0, 0],
	gui: undefined,
	gui_size: [0, 0],
	player: undefined,
	dungeon: undefined,
	entities: undefined,
	ai_turn: false,

	init: () => {
		Game.display_size = [parseInt(window.innerWidth / settings.font_size), parseInt(window.innerHeight / settings.font_size - 1)]
		Game.gui_size = [parseInt(window.innerWidth / settings.font_size * 0.5), parseInt(window.innerHeight / settings.font_size - 1)]
		Game.display = new ROT.Display({width:  Game.display_size[0], height: Game.display_size[1], fontSize: settings.font_size});
		Game.gui = new ROT.Display({width: Game.gui_size[0], height: Game.gui_size[1], fontSize: settings.font_size});
		document.body.appendChild(Game.display.getContainer());
		document.body.appendChild(Game.gui.getContainer());
		window.addEventListener("keydown", Game.input);
		Game.render()
	},

	input: key => {
        Game.render();
	},

    render: () => {
		render_dungeon(Game);
		render_menu(Game);
    },

    process: () => {
        //
    }
}