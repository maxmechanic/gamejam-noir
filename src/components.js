
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
            Crafty.e('DialogBox').text(this.item.desc);
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
        Crafty.trigger('Next');


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
        this.requires('Text,DOM,2D,Mouse').attr({x:0, y:624,w:1024, h: 144});
        this.textFont({ size: '20px', weight: 'bold' });
        this.css('background-color', 'grey');
        this.css('padding', '30px');
        this.css('word-break', 'hyphenate');
        this.css('vertical-align', 'middle');

        this.bind('Next', function() {
            this.destroy();
        });

    }
});

Crafty.c('DialogChoice', {
    init: function() {

    }
}); //Inherits from DialogBox
