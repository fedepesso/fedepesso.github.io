let settings = {
	player_name: "test_char",
	seed: Math.floor(Math.random()),
	font_size: 25,
	size: [0, 0]
}


let Game = {
	display: undefined,
	gui: undefined,
	player: undefined,
	dungeon: undefined,
	entities: undefined,
	ai_turn: false,

	init: () => {
		Game.display = new ROT.Display({width: window.innerWidth / settings.font_size , height: window.innerHeight / settings.font_size - 1, fontSize: settings.font_size});
		Game.gui = new ROT.Display({width: window.innerWidth / settings.font_size * 0.5, height: window.innerHeight / settings.font_size - 1, fontSize: settings.font_size});
		document.body.appendChild(Game.display.getContainer());
		document.body.appendChild(Game.gui.getContainer());
		window.addEventListener("keydown", Game.input);
		while (true) {
            Game.render()
            if (Game.ai_turn) {
                Game.process
                Game.ai_turn = false
            }
        }
	},

	input: key => {
        //
    },

    render: () => {
		//
    },

    process: () => {
        //
    }
}