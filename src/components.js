
Crafty.c('Player', {
    init: function() {
        this.requires('2D, DOM, Mouse, Color, Tween')
        .color('rgb(20, 75, 40)');

        this.bind('itemClick', this.itemSet);

    },
    itemSet: function(item) {
        this.item = item;
    },

    engageItem: function() {
    },

    moveChar: function(x, y) {
        this.tween({x:x, y:y}, 150);
        this.bind('TweenEnd', function() {
            if (this.item)
                alert(this.item.desc);
        });
        this.item = null;

    }

});


Crafty.c('Inventory', {
    init: function() {

    }
});

Crafty.c('Item', {
    init: function() {
        this.requires('2D, DOM, Mouse, Color');
        this.bind('Click', function() {
            Crafty.trigger('itemClick', this);
        });
    },
    description: function(desc) {
        this.desc = desc;
    }


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
