
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
        var distX = x - this._x;
        var distY = y - this._y;

        if (distX === 0 && distY === 0) {
            if (this.item)
                console.log(this.item.desc);
            this.item = null;
            return;
        }
        this.tween({x:x, y:y}, 125);
        this.bind('TweenEnd', function() {
            if (this.item)
                console.log(this.item.desc);
            this.item = null;
        });

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
    itemInfo: function(item) {
        this.desc = item.desc;
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
