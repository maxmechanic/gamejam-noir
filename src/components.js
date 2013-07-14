
Crafty.c('Player', {
    init: function() {
        this.requires('2D, DOM, Mouse, Image, Tween');
        this.bind('itemClick', this.itemSet);

    },
    itemSet: function(item) {
        this.item = item;
    },

    engageItem: function() {
        if (this.item) {
            if (this.item.hasSplash) {
                //display splash image, destroy on any click to the scene
                alert('splash!');
            }
            alert('!!!' + this.item.desc);
            this.item = null;
        }
        this.unbind('TweenEnd', this.engageItem);
    },

    moveChar: function(x, y) {
        this.bind('TweenEnd', this.engageItem);
        var distX = x - this._x;
        var distY = y - this._y;
        var frames = 50;

        if (distX === 0 && distY === 0) {
            frames = 5;
        }
        this.tween({x:x, y:y}, frames);


    }

});


Crafty.c('Item', {
    init: function() {
        this.requires('2D, DOM, Mouse, Color, Image');
        this.bind('Click', function() {
            Crafty.trigger('itemClick', this);
        });
        this.bind('MouseOver', function() {
            this.css('cursor', 'pointer');
        });

    },
    itemInfo: function(item) {
        this.desc = item.desc;
    }


}); //Have one component for when on level and in inventory?

Crafty.c('Splash', {});

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
