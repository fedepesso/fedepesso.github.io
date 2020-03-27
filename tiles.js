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
var display = new ROT.Display(options); //va cambiato aggiungendo options all'iniziazione di displey in game.init
SHOW(display.getContainer());

tileSet.onload = function() {
    display.draw(game.player.position[0], game.player.position[1], "@");
}