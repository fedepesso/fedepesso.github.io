function render_dungeon(game) {
    for (let x = 0; x < game.display_size[0]; x ++) {
        [0, game.display_size[1] - 1].forEach(y => game.display.draw(x, y, '#'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [0, game.display_size[0] - 1].forEach(x => game.display.draw(x, y, '#'))
    }
    console.log('k')
}

function render_menu(game) {
    for (let x = 0; x < game.gui_size[0]; x ++) {
        [0, game.gui_size[1] - 1].forEach(y => game.gui.draw(x, y, '#'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [0, game.gui_size[0] - 1].forEach(x => game.gui.draw(x, y, '#'))
    }
}