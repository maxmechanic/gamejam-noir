Crafty.scene('Intro', function () {
});
Crafty.scene('Loading', function() {});

//For playable scenes, define barriers of the background for what can be considered the floor.
Crafty.scene('Office', function() {
    var office = items.office;
    console.log('office scene launched');
    Crafty.background("url('./assets/bg/office.png')");
    var player = Crafty.e('Player')
        .image('./assets/main_char.png')
        .attr({x:840, y: 300});
    Crafty.e("Item").attr({w:20,h:20,x:50,y:200}).color('red').itemInfo(office.doorSign);


    var positions = [];
    positions.push(new Crafty.math.Vector2D(50,50));
    positions.push(new Crafty.math.Vector2D(200,200));
    positions.push(new Crafty.math.Vector2D(500,500));
    positions.push(new Crafty.math.Vector2D(1000,50));

    //defining in room, left to right.
    //Missing door, plant
    // Crafty.e("Item").itemInfo(office.door).image('./assets/items/')
    Crafty.e("Item").attr({x:900, y: 165}).image('./assets/items/right_door_t.png').itemInfo(office.doorSign);

    Crafty.e("Item, Color, Text").attr({x:930, y: 410}).image(office.plant.path).itemInfo(office.plant);
    Crafty.e("Item, Color, Text, Image").image(office.clientChairs.path).attr({x:740, y: 180}).itemInfo(office.clientChairs);
    Crafty.e("Item, Color, Text").attr({x:640, y: 260}).image(office.dadPhoto.path).itemInfo(office.dadPhoto);
    Crafty.e("Item").attr(new Crafty.polygon([607,270],[665,270],[700,467],[705, 525], [625,525], [625,467])).itemInfo(office.clientChairs);

    // Crafty.e("Item, Color, Text, Image").image('./assets/items/chair_t.png').attr({x:740, y: 180}).itemInfo(office.clientChairs);


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

// Crafty.scene('Apartment', function() {
//     Crafty.e('Item')
// });
// Crafty.scene('Inventory', function() {});
