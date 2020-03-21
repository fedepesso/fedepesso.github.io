function render_dungeon(game) {
    x_rel = scroll_map(game.player.position[0], game.display_size[0] - 2, game.size[0])
    y_rel = scroll_map(game.player.position[1], game.display_size[1] * 75 / 100 - 2, game.size[1])
    for (let x = 0; x < game.display_size[0]; x ++) {
        [0, game.display_size[1] - 1].forEach(y => game.display.draw(x, y, '▄'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [0, game.display_size[0] - 1].forEach(x => game.display.draw(x, y, '▄'))
    }
    for (let x = x_rel; x < x_rel + game.display_size[0] - 2; x++) {
        for (let y = y_rel; y < y_rel + game.display_size[1] * 75 / 100 - 2; y++) {
            if (get_val(game.dungeon, x, y, game.size[0]) == 0) {
                game.display.draw(x - x_rel + 1, y - y_rel + 1, '.')
            } else {
                game.display.draw(x - x_rel + 1, y - y_rel + 1, '#')
            }
        }
    }
    for (let i=0; i<game.entities.length; i++){
        if ((x_rel <= game.entities[i].position[0] < x_rel + game.display_size[0] - 2) && (y_rel <= game.entities[i].position[1] < y_rel + game.display_size[1] * 75 / 100 - 2)){
            game.display.draw(game.entities[i].position[0]-x_rel + 1, game.entities[i].position[1]-y_rel + 1, game.entities[i].char)
        }
    }
    game.display.draw(game.player.position[0]-x_rel, game.player.position[1]-y_rel, game.player.char)
}

function render_menu(game) {
    for (let x = 0; x < game.gui_size[0]; x ++) {
        [0, game.gui_size[1] - 1].forEach(y => game.gui.draw(x, y, '▄'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [game.gui_size[0] - 1].forEach(x => game.gui.draw(x, y, '▄'))
    }
    for (let x = 0; x < game.display_size[0]; x ++) {
        game.display.draw(x, parseInt(game.display_size[1] * 0.75), '▄')
    }
}

function scroll_map(p, s, m) {
    if (p<s/2){
        return 0;
    }
    else if (p>=m-s/2){
        return Math.floor(m-s);
    }
    else{
        return Math.floor(p-s/2);
    }
}