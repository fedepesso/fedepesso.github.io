var tileSet = document.createElement("img");
tileSet.src = "gionbrown_tile.jpeg";

var options = {
    layout: "tile",
    bg: "transparent",
    tileWidth: 64,
    tileHeight: 64,
    tileSet: tileSet,
    tileMap: {
        "@": [0, 0],
    },
    width: 3,
    height: 3
}

tileSet.onload = function(game) {
    game.display.draw(game.player.position[0], game.player.position[1], "@");
}

function render_dungeon(game) {
    game.display.clear()
    x_rel = scroll_map(game.player.position[0], game.display_size[0] - 2, game.size[0])
    y_rel = scroll_map(game.player.position[1], game.display_size[1] * 75 / 100 - 2, game.size[1])

    game.local_fov= [...Array(game.size[0])].map(x=>Array(game.size[1]).fill(1));
    game.dungeon_fov_object.compute(game.player.position[0],game.player.position[1],6,(x,y,r,visibility) => game.local_fov[x][y]=0);

    for (let x = 0; x < game.display_size[0]; x ++) {
        [0, game.display_size[1] - 1].forEach(y => game.display.draw(x, y, '▄'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [0, game.display_size[0] - 1].forEach(x => game.display.draw(x, y, '▄'))
    }
    for (let x = x_rel; x < x_rel + game.display_size[0] - 2; x++) {
        for (let y = y_rel; y < y_rel + game.display_size[1] * 75 / 100 - 2; y++) {
            if (game.local_fov[x][y] == 0) {
                if (game.dungeon[x][y] == 0) {
                    game.display.draw(x - x_rel + 1, y - y_rel + 1, '.',"#fffc5c")
                } 
                else {
                    game.display.draw(x - x_rel + 1, y - y_rel + 1, '#',"#6b6907")
                }
                game.dungeon_explored[x][y]=0
            }else{
                if (game.dungeon_explored[x][y] == 0) {
                    if (game.dungeon[x][y] == 0) {
                        game.display.draw(x - x_rel + 1, y - y_rel + 1, '.',"#69a5b5")
                    }       
                    else {
                        game.display.draw(x - x_rel + 1, y - y_rel + 1, '#',"#223187")
                    }
                }
            }
            
        }
    }
    for (let i=0; i<game.entities.length; i++){
        if ((x_rel <= game.entities[i].position[0] < x_rel + game.display_size[0] - 2) && (y_rel <= game.entities[i].position[1] < y_rel + game.display_size[1] * 75 / 100 - 2)){
            if ((game.local_fov[game.entities[i].position[0]][game.entities[i].position[1]] == 0) && (game.entities[i].wearable !== undefined || game.entities[i].magical_effect !== undefined || game.entities[i].stair !== undefined)) {
                game.display.draw(game.entities[i].position[0]-x_rel + 1, game.entities[i].position[1]-y_rel + 1, game.entities[i].char, game.entities[i].color)
            }
        }
    }
    for (let i=0; i<game.entities.length; i++){
        if ((x_rel <= game.entities[i].position[0] < x_rel + game.display_size[0] - 2) && (y_rel <= game.entities[i].position[1] < y_rel + game.display_size[1] * 75 / 100 - 2)){
            if ((game.local_fov[game.entities[i].position[0]][game.entities[i].position[1]] == 0 && game.entities[i].monster !== undefined)) {
                game.display.draw(game.entities[i].position[0]-x_rel + 1, game.entities[i].position[1]-y_rel + 1, game.entities[i].char, game.entities[i].color)
            }
        }
    }
    tileset.onload(game)
}


function render_menu(game) {
    game.gui.clear()
    for (let x = 0; x < game.gui_size[0]; x ++) {
        [0, game.gui_size[1] - 1].forEach(y => game.gui.draw(x, y, '▄'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [game.gui_size[0] - 1].forEach(x => game.gui.draw(x, y, '▄'))
    }
    for (let x = 0; x < game.display_size[0]; x ++) {
        game.display.draw(x, parseInt(game.display_size[1] * 0.75), '▄')
    }
    let menu_texts = [
        'Name: ' + game.player.name, 
        'Depth: ' + game.depth, 
        'Hp: ' + game.player.stats.life[0] + '/' + game.player.stats.life[1], 
        'Level: ' + game.player.stats.level + ' - (' + game.player.stats.experience[0] + '/' + game.player.stats.experience[1] + ')', 
        '',
        'Avaible points: ' + game.player.stats.expendable_points, 
        'Q) Strength: ' + game.player.stats.strength,
        'W) Dexterity: ' + game.player.stats.dexterity, 
        'E) Intelligence: ' + game.player.stats.intelligence, 
        'R) Life: ' + (game.player.stats.life[1] - 90) / 10, 
        ''
    ]
    menu_texts.forEach((e, i) => game.gui.drawText(0, i+1, e))
    
    let armor_list = [];
    if (game.player.inventory.body_armor === undefined) {
        armor_list.push('Body: None')
    } else {
        armor_list.push('Body: ' + game.player.inventory.body_armor.name)
    }

    if (game.player.inventory.leg_armor === undefined) {
        armor_list.push('Leg: None')
    } else {
        armor_list.push('Leg: ' + game.player.inventory.leg_armor.name)
    }

    if (game.player.inventory.ring_armor === undefined) {
        armor_list.push('Ring: None')
    } else {
        armor_list.push('Ring: ' + game.player.inventory.ring_armor.name)
    }

    armor_list.forEach((e, i) => game.gui.drawText(0, i+12, e))

    let armor_stats = [
        'Physical defence: ' + game.player.defender.getResistance(game.player, "physical"),
        'Elemental defence: ' + game.player.defender.getResistance(game.player, "elemental"),
        'Arcane defence: ' + game.player.defender.getResistance(game.player, "arcane")
    ]
    armor_stats.forEach((e, i) => game.gui.drawText(0, i+15, e))

    let weapon_text = []
    if (game.player.inventory.weapon === undefined) {
        weapon_text = [
            'Weapon: None', '', '', ''
        ]
    } else {
        let arma = game.player.inventory.weapon
        weapon_text = [
            'Weapon: ' + arma.name, '   - damage: [' + arma.attacker.damage[0] + '-' + arma.attacker.damage[1] + '] ' + arma.attacker.damage_type,
            '   - critics : [' + arma.attacker.crit[0] + "-" + arma.attacker.crit[1] + ']',
            '   - bonus stat: ' + arma.attacker.stat_bonus[0], '',
        ]
    }
    weapon_text.forEach((e, i) => game.gui.drawText(0, i+19, e))
    const buttons = [
    "T) ", 
    "Y) ", 
    "U) ", 
    "I) ", 
    "O) "]
    let items = Object.keys(game.player.inventory.items).map((v, i, arr) => buttons[i] + v + ': ' + game.player.inventory.items[v])
    items.unshift('Items: ')
    items.forEach((e, i) => game.gui.drawText(0, i+24, e))
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
