function render_dungeon(game) {
    for (let x = 0; x < game.display_size[0]; x ++) {
        [0, game.display_size[1] - 1].forEach(y => game.display.draw(x, y, '#'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [0, game.display_size[0] - 1].forEach(x => game.display.draw(x, y, '#'))
    }
    for (let i=0; i<game.entities.length; i++){
        if(camera_contained(game.entities[i])){
        game.display.draw(game.entities[i].position[0]-x_rel,game.entities[i].position[1]-y_rel,game.entities[i].char)
    }
    }
}

function render_menu(game) {
    for (let x = 0; x < game.gui_size[0]; x ++) {
        [0, game.gui_size[1] - 1].forEach(y => game.gui.draw(x, y, '#'))
    }
    for (let y = 0; y < game.display_size[1]; y ++) {
        [game.gui_size[0] - 1].forEach(x => game.gui.draw(x, y, '#'))
    }
    for (let x = 0; x < game.display_size[0]; x ++) {
        game.display.draw(x, parseInt(game.display_size[1] * 0.75), '#')
    }
}



function scroll_map_x(p, s, m) {
    real_s=s-2
    hs=real_s/2
    if (p<hs){
        return 0;
    }
    else if (p>=m-hs){
        return m-real_s;
    }
    else{
        return p-hs;
    }
}

function scroll_map_y(p, s, m) {
    real_s=s*75/100-2
    hs=real_s/2
    if (p<hs){
        return 0;
    }
    else if (p>=m-hs){
        return m-real_s;
    }
    else{
        return p-hs;
    }
}

const x_rel=scroll_map_x(player.position,game.display_size[0],game.size[0])
const y_rel=scroll_map_y(player.position,game.display_size[1],game.size[1])

function check_x(entity){
    if((entity.position[0]>x_rel)&&
    (entity.position[0]<(x_rel+game.display_size[0]))){
        return true;
    }
    else{
        return false;
    }
}

function check_y(entity){
    if((entity.position[1]>y_rel)&&
    (entity.position[1]<(y_rel+game.display_size[1]))){
        return true;
    }
    else{
        return false;
    }
}

function camera_contained(e){
    if (check_x(e)&&check_y(e)){
        return true;
    }
    else {
        return false;
    }
}
