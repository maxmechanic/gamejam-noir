items = {
    office: {
        doorSign: {
            desc: "Thomas Stone, Private Investigator. Straight and to the point. Of course, anyone this far off the beaten path is either lost or already knows who we are.",
            path: createPath('right_door_t.png')
        },
        clientChairs: {
            desc: "Chairs for the clients to wait in. I've never seen anyone go straight through to the boss, even if he's not doing anything. He thinks having people wait makes him look more important.",
            path: createPath('chair_t.png')
        },
        plant: {
            desc: "Our meager attempt to make the the office seem more homey and inviting. It would probably work better if the damn things would stop dying on us.",
            path: createPath('plant_t.png')

        },
        herDesk: {
            desc: "Where I spend most of my day, when I'm not off running errands. I truly live a life of excitement.",
            path: createPath('front_desk_w_chair_t.png')
        },

        dadPhoto: {
            desc: "Me and my dad. I still miss him. He was a cop, and tough as nails. I like to think I'm just as tough, but I haven't exactly had the chance to prove it.",
            path: createPath('photo_t.png')
        },

        typeWriter: {
            desc: "The Monster. Fast as a tommy gun, but as loud as one, too.",
            path: createPath('typewriter_t.png')
        },
        divider: {
            desc: "The clear border between the boss and me. He always makes a show of closing the door whenever he has a client in there. Not that it matters much; the wall's as thin as paper, and I can hear pretty much everything. It's the only real entertainment I get.",
            path: createPath('central_door_t.png')
        },
        door: {
            transition: true
        },
        detectiveChair: {
            desc: "The boss's throne, from where he holds court and hears the people's problems. It squeaks.",
            path: createPath('desk_chair_t.png')
        },
        detectiveDesk: {
            desc: "A beautiful desk, solid oak. He says it's been in his family for generations. I think he picked mine up off the curb.",
            path: createPath('desktop_t.png')
        },
        backWindow: {
            desc: "Not a bad view, all told. Pity I get to stare at a blank wall all day.",
            path: createPath('window_t.png')
        },
        filingCab: {
            desc: "Every case that the boss has ever worked on. I hate to admit it, but he's pretty good at his job, and almost every file in here had been solved. He guards them pretty closely; you need a key to get at them.",
            path: createPath('filing_cabinet_clsd_t.png')
        },
        gunOil: {
            desc:"Gun oil. The boss loves his .38 special and always takes very good care of it. Constant getting oil stains on our paperwork seems to be of secondary concern.",
            path: createPath('gunoil_t.png')
        },
        phone: {
            path: createPath('phone_t.png'),
            desc: "No one calling, no one to call."
        },
        deskDrawer: {
            desc: "I don't really see the point of locking the filing cabinet when you keep the key in a place so easily found. I suppose the idea is to discourage very lazy crooks.",
            locked: true,
            hasSplash: true,
            splash: {
                desc: "Here it is, the Carmichael girl's case file. It's a sad story, but unfortunately not an uncommon one. Young girl from a small town comes to LA with stars in her eyes, sure she'll find fame and fortune in Hollywood. Most of the time they stop writing home because they're embarrassed that they end up waiting tables for just enough money to get by. They're usually pretty easy to find. I wonder what's different about little Wendy? Looks like the boss made a note on the last page: 'diary', circled in red. Did he go back to the girl's apartment? Maybe I should go there, check what's going on. It would be a good excuse to get out of the office. I can even bring my gun. Better get it out of my desk before I go.",
                path: createPath('casefile_foreground.png')
            }
        },
        caseFile: {
            desc: "Here it is, the Carmichael girl's case file. It's a sad story, but unfortunately not an uncommon one. Young girl from a small town comes to LA with stars in her eyes, sure she'll find fame and fortune in Hollywood. Most of the time they stop writing home because they're embarrassed that they end up waiting tables for just enough money to get by. They're usually pretty easy to find. I wonder what's different about little Wendy? Looks like the boss made a note on the last page: 'diary', circled in red. Did he go back to the girl's apartment? Maybe I should go there, check what's going on. It would be a good excuse to get out of the office. I can even bring my gun. Better get it out of my desk before I go.",
            path: createPath('casefile_foreground.png'),
            hasSplash: true

        },
        gunDrawer: {
            hasGun: true,
            path: createPath('knob_t.png'),
            desc: "I ask the boss to get me a gun, he buys me this little thing. It's practically a toy, and doesn't have much punch to it. Still, a bullet between the eyes is a bullet between the eyes, and I'm good enough to put one there, thanks to Dad. Time to hit the road.",
            hasSplash: true
        }

    }
    // apartment: {
    //     dresser: {
    //         desc: "Nice dresser. Still full of clothes, so she hasn't moved somewhere else. Doesn't seem to be much missing at all really. Is it just me, or do they look like someone went digging through them? Was that you, boss?"
    //         path:
    //     },

    //     musicBox: {
    //         desc: "Cute music box. Sweet little tune. Fits perfectly with the small-town-girl image. The music probably reminds her of home."
    //         path:
    //     },

    //     mirror: {
    //         desc: "Really, who needs a mirror this big? Sure, you have to be able to put on your make-up, but after certain point you have to come clean and admit that you just like looking at yourself."
    //         path:
    //     },

    //     coffeeTable: {
    //         desc: "Scripts, playbills and times for almost a dozen open audition scrawled on scraps of paper. You can almost feel the eager desperation. Doesn't look like Wendy was doing too well. Then again, most girls don't."
    //         path:
    //     },

    //     chair: {
    //         desc: "Only one chair. She must not have a lot of guests come by. Of course, this isn't exactly the kind of place you'd host a party. Size of the room aside, it doesn't really have the most cheerful atmosphere. I doubt any of the apartments in this place do."
    //         path:
    //     },

    //     bed: {
    //         desc: "Well, at least Wendy knows how to keep the place neat. I don't remember the last time I've seen sheets so crisply made. But all I really have as a reference is my own, and they're not exactly something to aspire to. Hmmm. It doesn't look like anyone have slept here for a while."
    //         path:
    //     },


    //     lamp: {
    //         desc: "A nice touch of color, but it's fighting a losing battle in this room."
    //     },

    //     bracelet: {
    //         desc: "Whoa. I'm no expert, but I think those are real diamonds! How on earth does a girl like Wendy,  living in a place like this, get a piece of jewelry that should cost more than she'd make in a month? There's something fishy about this."
    //         path:
    //     },

    //     outsideWindow: {
    //         desc: "A lovely view of a brick wall. You get what you pay for. Still, you can at least get a bit of fresh air through it."
    //     },

    //     closet: {
    //         desc: "Huh, locked. Who locks their closet? There has to be a key around here somewhere.",
    //         locked: true
    //     },

    //     nightstand: {
    //         desc: "Make-up, lipstick and ... Ah! Here we go. This looks like it goes to the closet"
    //     },

    //     fedora: {
    //         desc: "What is ...? That's the boss's hat! Why is it...? Blood that's blood on the brim. He was here, but... Boss, Wendy, what have you guys gotten yourself into?"
    //         path:
    //     }

    // }
}

function createPath(item) {
    return './assets/items/' + item;
}