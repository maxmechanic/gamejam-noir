
Crafty.c('Player', {
    init: function() {
        this.requires('2D, DOM, Mouse, Color, Tween')
        .color('rgb(20, 75, 40)').stopOnSolids();


    },

    engageItem: function(item) {
        alert(item);
    },

    moveChar: function(x, y, item) {

        this.tween({x:x, y:y}, 200);

    }

});


Crafty.c('Inventory', {
    init: function() {

    }
});

Crafty.c('Item', {
    init: function() {
        this.requires('2D, Grid, Mouse');
    },

}); //Have one component for when on level and in inventory?

Crafty.c('UseableItem', {
    init: function() {
        this.requires('Item');
    }
});

Crafty.c('DialogBox', {
    init: function() {

    }
});
Crafty.c('DialogChoice', {
    init: function() {

    }
}); //Inherits from DialogBox
