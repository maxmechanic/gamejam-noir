Crafty.scene('Intro', function () {

    // Crafty.audio.add("bgm", "url(./assets/sound/bgm.wav)");
    var stem = './assets/cutscenes/cutscene_';
    var scenes = [stem + '1_0.png',stem+'1_1.png',stem+'1_2.png'];
    Crafty.addEvent('Intro', Crafty.stage.elem, "mousedown", start);
    var i = 1;
    function start() {
        page.tween({alpha:0}, 400);
    }


    var third = Crafty.e('2D,DOM,Tween,Image').image(scenes[2]);
    var sec = Crafty.e('2D,DOM,Tween,Image').image(scenes[1]);
    var page = Crafty.e('2D,DOM,Tween,Image').image(scenes[0]);




    page.bind("TweenEnd", function () {
        setTimeout(function() {
            sec.tween({alpha:0}, 600);
        });
    }, 1000);

    sec.bind("TweenEnd", function () {
        third.tween({alpha:0}, 600);
    });

    third.bind("TweenEnd", function () {
        Crafty.scene('Office');
    });


});

Crafty.scene('Cutscene', function() {
    Crafty.background("url('./assets/bg/office.png')");
    var stem = './assets/cutscenes/cutscene_';
    var scenes = [stem + '2_1.png',stem+'2_2.png'];

    var sixth = Crafty.e('2D,DOM,Tween,Image').image(scenes[2]);
    var fifth = Crafty.e('2D,DOM,Tween,Image').image(scenes[1]);
    var fourth = Crafty.e('2D,DOM,Tween,Image').image(scenes[0]);

    fourth.tween({alpha:0}, 600);
    fourth.bind("TweenEnd", function () {
    });

    fifth.bind("TweenEnd", function () {

    });


});

//For playable scenes, define barriers of the background for what can be considered the floor.
Crafty.scene('Office', function() {
    // Crafty.audio.add("bgm", "url(./assets/sound/bgm.wav)");
    // Crafty.audio.add("url('./assets/sound/bgm.png')");

    var office = items.office;

    console.log('office scene launched');
    Crafty.background("url('./assets/bg/office.png')");

    var positions = [];
    positions.push(new Crafty.math.Vector2D(550,280));
    positions.push(new Crafty.math.Vector2D(800,465));
    positions.push(new Crafty.math.Vector2D(800,265));
    positions.push(new Crafty.math.Vector2D(380,387));
    positions.push(new Crafty.math.Vector2D(355,210));
    positions.push(new Crafty.math.Vector2D(540,340));

    //defining in room, left to right.
    Crafty.e("Item").attr({x:900, y: 165}).image(office.doorSign.path).itemInfo(office.doorSign);

    Crafty.e("Item").attr({x:930, y: 410}).image(office.plant.path).itemInfo(office.plant);
    Crafty.e("Item").attr({x:582, y: 280}).image(office.herDesk.path).itemInfo(office.herDesk);
    Crafty.e("Item").image(office.clientChairs.path).attr({x:740, y: 180}).itemInfo(office.clientChairs);
    Crafty.e("Item").attr({x:640, y: 260}).image(office.dadPhoto.path).itemInfo(office.dadPhoto);
    Crafty.e("Item").attr({x:635, y: 325}).image(office.typeWriter.path).itemInfo(office.typeWriter);
    Crafty.e("Item").attr({x:461, y:0}).image(office.midwall.path).itemInfo(office.midwall);
    Crafty.e("Item").attr({x:480, y: 160}).image(office.divider.path).itemInfo(office.divider);
    Crafty.e("Item").attr({x:375, y: 175}).image(office.filingCab.path).itemInfo(office.filingCab);
    Crafty.e("Item").attr({x:165, y: 420}).image(office.detectiveChair.path).itemInfo(office.detectiveChair);
    Crafty.e("Item").attr({x:180, y: 387}).image(office.detectiveDesk.path).itemInfo(office.detectiveDesk);
    Crafty.e("Item").attr({x:220, y: 500}).image(office.gunOil.path).itemInfo(office.gunOil);
    Crafty.e("Item").attr({x:255, y: 395}).image(office.phone.path).itemInfo(office.phone);
    Crafty.e("Item").attr({x:50, y: 180}).image(office.backWindow.path).itemInfo(office.backWindow);
    Crafty.e("Item").attr({x:615, y: 470}).image(office.gunDrawer.path).itemInfo('');

    var player = Crafty.e('Player')
        .image('./assets/main_char_trans.png')
        .attr({x:840, y: 300});


    Crafty.bind('findKey', function() {
        if (!player.hasKey && player.visitedCab) {
            player.hasKey = true;
            Crafty.e('DialogBox').desc('This looks like the key to the filing cabinet.');
            Crafty.trigger('changePlant');
        } else {
            Crafty.e('DialogBox').desc(office.plant.desc);
        }
    });


    Crafty.bind('findGun', function() {
        if (player.hasGun) {
            Crafty.e('DialogBox').desc('An empty drawer.');

        } else {
            player.hasGun = true;
            Crafty.e('Splash').image(office.gun.path).desc(office.gun.desc);
        }
    });

    Crafty.bind('openDrawer', function() {
        if (player.hasKey) {
            player.hasFile = true;
            Crafty.trigger('changeCab');
            Crafty.e('Splash').image(office.caseFile.path).desc(office.caseFile.desc);

        } else {
            player.visitedCab = true;
            Crafty.e('DialogBox').desc(office.filingCab.desc);
        }
    });

    Crafty.bind('leaveOffice', function() {
        if (player.hasFile) {
            Crafty.scene('Cutscene');
        } else {
            Crafty.e('DialogBox').desc(office.doorSign.desc);
        }
    });

    // Crafty.e("Item, Color, Text, Image").image('./assets/items/chair_t.png').attr({x:740, y: 180}).itemInfo(office.clientChairs);


    Crafty.addEvent('Player', Crafty.stage.elem, "mousedown", checkClick);
        // Crafty.audio.play(bgm, -1);


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
