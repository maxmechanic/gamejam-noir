Crafty.scene('Intro', function () {
});
Crafty.scene('Loading', function() {});

//For playable scenes, define barriers of the background for what can be considered the floor.
Crafty.scene('Office', function() {
    var office = items.office;
    console.log('office scene launched');
    Crafty.background("url('./assets/beachbg.png')");
    var player = Crafty.e('Player')
        .attr({ x: 580, y: 100, w: 10, h: 100 });
    Crafty.e("Item").attr({w:20,h:20,x:50,y:200}).color('red').itemInfo(office.doorSign);


    var positions = [];
    positions.push(new Crafty.math.Vector2D(50,50));
    positions.push(new Crafty.math.Vector2D(200,200));
    positions.push(new Crafty.math.Vector2D(500,500));
    positions.push(new Crafty.math.Vector2D(1000,50));

    Crafty.e("2D, DOM, Color").attr({w:10,h:10,x:50,y:50}).color('green');
    Crafty.e("2D, DOM, Color").attr({w:10,h:10,x:200,y:200}).color('green');
    Crafty.e("2D, DOM, Color").attr({w:10,h:10,x:500,y:500}).color('green');
    Crafty.e("2D, DOM, Color").attr({w:10,h:10,x:1000,y:50}).color('green');

    Crafty.addEvent('Player', Crafty.stage.elem, "mousedown", checkClick);


    function checkClick(e) {
        var vec = new Crafty.math.Vector2D(e.realX,e.realY);
        var newPos = 0;
        for (var i = 1; i < positions.length; i++) {
            if (vec.distance(positions[i]) < vec.distance(positions[newPos])) {
                newPos = i;
            }
        }

        player.moveChar(positions[newPos].x, positions[newPos].y);

    }

});

Crafty.scene('Apartment', function() {
    Crafty.e('Item')
});
Crafty.scene('Inventory', function() {});
