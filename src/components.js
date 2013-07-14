
Crafty.c('Player', {
    init: function() {
        this.requires('2D, DOM, Mouse, Image, Tween');
        this.bind('itemClick', this.itemSet);
        this.hasGun = false;

    },
    itemSet: function(item) {
        this.item = item;
    },

    makeDialogBox: function(text) {
        Crafty.e('DialogBox').text(this.item.desc);
    },

    engageItem: function() {
        if (this.item) {
            if (this.item.behavior) {
                this.item.behavior();
            } else {
                Crafty.e('DialogBox').text(this.item.desc);
            }
            this.item = null;
        }
        this.unbind('TweenEnd', this.engageItem);
    },
    obtainItem: function(item) {
        this.inventory.push(item);
        alert(this.inventory[item]);
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
        this.bind('changePlant', function() {
            if (this.itemType === 'plant') {
                this.image(office.plant.newPath);
            }
        });

        this.bind('changeCab', function() {
            if (this.itemType === 'cab') {
                this.image(office.filingCab.newPath);
            }
        });

    },

    itemInfo: function(item) {
        this.desc = item.desc;
        this.behavior = item.behavior;
    },

    iType: function(type) {
        this.itemType = itemType;
    }


});

Crafty.c('Splash', {
    init: function() {
        this.requires('2D, DOM, Mouse, Image');
        this.bind('Next', function() {
            this.destroy();
        });
    },
    desc: function(text) {
        Crafty.e('DialogBox').text(text);
    }
});

Crafty.c('UseableItem', {
    init: function() {
        this.requires('Item');
    }
});

Crafty.c('DialogBox', {
    init: function() {
        this.requires('Text,DOM,2D,Mouse').attr({x:0, y:624,w:1000, h: 144});
        this.textFont({ size: '17px', family: 'Courier' });
        this.css('padding', '20px');
        this.css('padding-right', '50px');
        this.css('overflow', 'scroll');

        // this.css('word-break', 'hyphenate');
        this.css('vertical-align', 'middle');

        this.bind('Next', function() {
            this.destroy();
        });

    },
    desc: function(text) {
        Crafty.e('DialogBox').text(text);
    }
});

