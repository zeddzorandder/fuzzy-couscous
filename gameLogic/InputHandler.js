export var playerMovement = (player) => {
    if (player.properties.directions[0]) {
        player.vely = -player.properties.speed;
    } else {
        player.vely = 0;
    }
    if (player.properties.directions[1]) {
        player.velx = -player.properties.speed;
    } else {
        player.velx = 0;
    }
    if (player.properties.directions[2]) {
        player.vely = player.properties.speed;
    }
    if (player.properties.directions[3]) {
        player.velx = player.properties.speed;
    }

    player.x += player.velx;
    player.y += player.vely;
}
