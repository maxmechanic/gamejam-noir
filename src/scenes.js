Crafty.scene('Intro', function () {
});
Crafty.scene('Loading', function() {});

//For playable scenes, define barriers of the background for what can be considered the floor.
Crafty.scene('Office', function() {
    var office = items.office;
    console.log('office scene launched');
    Crafty.background("url('./assets/bg/office.png')");



    var positions = [];
    positions.push(new Crafty.math.Vector2D(50,50));
    positions.push(new Crafty.math.Vector2D(200,200));
    positions.push(new Crafty.math.Vector2D(500,500));
    positions.push(new Crafty.math.Vector2D(1000,50));

    //defining in room, left to right.
    Crafty.e("Item").attr({x:900, y: 165}).image(office.doorSign.path).itemInfo(office.doorSign);

    Crafty.e("Item").attr({x:930, y: 410}).image(office.plant.path).itemInfo(office.plant);
    Crafty.e("Item").attr({x:582, y: 280}).image(office.herDesk.path).itemInfo(office.herDesk);
    Crafty.e("Item").image(office.clientChairs.path).attr({x:740, y: 180}).itemInfo(office.clientChairs);
    Crafty.e("Item").attr({x:640, y: 260}).image(office.dadPhoto.path).itemInfo(office.dadPhoto);
    Crafty.e("Item").attr(new Crafty.polygon([607,270],[665,270],[700,467],[705, 525], [625,525], [625,467])).itemInfo(office.clientChairs);
    Crafty.e("Item").attr({x:635, y: 325}).image(office.typeWriter.path).itemInfo(office.typeWriter);
    Crafty.e("Item").attr({x:615, y: 470}).image(office.gunDrawer.path).itemInfo(office.gunDrawer);
    Crafty.e("Item").attr({x:480, y: 160}).image(office.divider.path).itemInfo(office.divider);
    Crafty.e("Item").attr({x:375, y: 175}).image(office.filingCab.path).itemInfo(office.filingCab);
    Crafty.e("Item").attr({x:165, y: 420}).image(office.detectiveChair.path).itemInfo(office.detectiveChair);
    Crafty.e("Item").attr({x:180, y: 387}).image(office.detectiveDesk.path).itemInfo(office.detectiveDesk);
    Crafty.e("Item").attr({x:220, y: 500}).image(office.gunOil.path).itemInfo(office.gunOil);
    Crafty.e("Item").attr({x:255, y: 395}).image(office.phone.path).itemInfo(office.phone);
    Crafty.e("Item").attr({x:50, y: 180}).image(office.backWindow.path).itemInfo(office.backWindow);



    var player = Crafty.e('Player')
        .image('./assets/main_char_trans.png')
        .attr({x:840, y: 300});


    Crafty.bind('findKey', function() {
        alert('found key');
        player.hasKey = true;
    });

    Crafty.bind('openDrawer', function() {
        if (player.hasKey) {
            Crafty.e('Splash').image(office.caseFile.path).desc(office.caseFile.desc);

        } else {
            Crafty.e('DialogBox').desc(office.filingCab.desc);
        }

    });

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
