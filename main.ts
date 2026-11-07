scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprites.changeDataNumberBy(sprite, "bounces", 1)
    if (infinite) {
        mySprite = sprites.create(img`
            2 2 2 . . . 2 . . . 2 . 2 2 2 . . 
            2 . . 2 . . 2 . . . 2 . 2 . . 2 . 
            2 . . . 2 . 2 . . . 2 . 2 . . . 2 
            2 . . . 2 . . 2 . 2 . . 2 . . . 2 
            2 . . . 2 . . 2 . 2 . . 2 . . . 2 
            2 . . 2 . . . 2 . 2 . . 2 . . 2 . 
            2 2 2 . . . . . 2 . . . 2 2 2 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        sprites.setDataNumber(mySprite, "bounces", randint(0, 6))
        mySprite.setPosition(sprite.x, sprite.y)
        mySprite.setBounceOnWall(true)
        mySprite.setVelocity(randint(-50, 50), randint(-50, 50))
    }
    if (sprites.readDataNumber(sprite, "bounces") == 6) {
        sprites.setDataNumber(sprite, "bounces", 0)
    }
    if (sprites.readDataNumber(sprite, "bounces") == 0) {
        sprite.setImage(img`
            2 2 2 . . . 2 . . . 2 . 2 2 2 . . 
            2 . . 2 . . 2 . . . 2 . 2 . . 2 . 
            2 . . . 2 . 2 . . . 2 . 2 . . . 2 
            2 . . . 2 . . 2 . 2 . . 2 . . . 2 
            2 . . . 2 . . 2 . 2 . . 2 . . . 2 
            2 . . 2 . . . 2 . 2 . . 2 . . 2 . 
            2 2 2 . . . . . 2 . . . 2 2 2 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataNumber(sprite, "bounces") == 1) {
        sprite.setImage(img`
            4 4 4 . . . 4 . . . 4 . 4 4 4 . . 
            4 . . 4 . . 4 . . . 4 . 4 . . 4 . 
            4 . . . 4 . 4 . . . 4 . 4 . . . 4 
            4 . . . 4 . . 4 . 4 . . 4 . . . 4 
            4 . . . 4 . . 4 . 4 . . 4 . . . 4 
            4 . . 4 . . . 4 . 4 . . 4 . . 4 . 
            4 4 4 . . . . . 4 . . . 4 4 4 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 
            4 4 4 4 4 4 . . . . . 4 4 4 4 4 4 
            4 4 4 4 4 4 4 . . . 4 4 4 4 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataNumber(sprite, "bounces") == 2) {
        sprite.setImage(img`
            5 5 5 . . . 5 . . . 5 . 5 5 5 . . 
            5 . . 5 . . 5 . . . 5 . 5 . . 5 . 
            5 . . . 5 . 5 . . . 5 . 5 . . . 5 
            5 . . . 5 . . 5 . 5 . . 5 . . . 5 
            5 . . . 5 . . 5 . 5 . . 5 . . . 5 
            5 . . 5 . . . 5 . 5 . . 5 . . 5 . 
            5 5 5 . . . . . 5 . . . 5 5 5 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 . . . 5 5 5 5 5 5 5 
            5 5 5 5 5 5 . . . . . 5 5 5 5 5 5 
            5 5 5 5 5 5 5 . . . 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataNumber(sprite, "bounces") == 3) {
        sprite.setImage(img`
            7 7 7 . . . 7 . . . 7 . 7 7 7 . . 
            7 . . 7 . . 7 . . . 7 . 7 . . 7 . 
            7 . . . 7 . 7 . . . 7 . 7 . . . 7 
            7 . . . 7 . . 7 . 7 . . 7 . . . 7 
            7 . . . 7 . . 7 . 7 . . 7 . . . 7 
            7 . . 7 . . . 7 . 7 . . 7 . . 7 . 
            7 7 7 . . . . . 7 . . . 7 7 7 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            7 7 7 7 7 7 7 . . . 7 7 7 7 7 7 7 
            7 7 7 7 7 7 . . . . . 7 7 7 7 7 7 
            7 7 7 7 7 7 7 . . . 7 7 7 7 7 7 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataNumber(sprite, "bounces") == 4) {
        sprite.setImage(img`
            8 8 8 . . . 8 . . . 8 . 8 8 8 . . 
            8 . . 8 . . 8 . . . 8 . 8 . . 8 . 
            8 . . . 8 . 8 . . . 8 . 8 . . . 8 
            8 . . . 8 . . 8 . 8 . . 8 . . . 8 
            8 . . . 8 . . 8 . 8 . . 8 . . . 8 
            8 . . 8 . . . 8 . 8 . . 8 . . 8 . 
            8 8 8 . . . . . 8 . . . 8 8 8 . . 
            . . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 . . . 8 8 8 8 8 8 8 
            8 8 8 8 8 8 . . . . . 8 8 8 8 8 8 
            8 8 8 8 8 8 8 . . . 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (sprites.readDataNumber(sprite, "bounces") == 5) {
        sprite.setImage(img`
            a a a . . . a . . . a . a a a . . 
            a . . a . . a . . . a . a . . a . 
            a . . . a . a . . . a . a . . . a 
            a . . . a . . a . a . . a . . . a 
            a . . . a . . a . a . . a . . . a 
            a . . a . . . a . a . . a . . a . 
            a a a . . . . . a . . . a a a . . 
            . . . . . . . . . . . . . . . . . 
            . . . . a a a a a a a a a . . . . 
            . a a a a a a a a a a a a a a a . 
            a a a a a a a . . . a a a a a a a 
            a a a a a a . . . . . a a a a a a 
            a a a a a a a . . . a a a a a a a 
            . a a a a a a a a a a a a a a a . 
            . . . . a a a a a a a a a . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    }
})
let mySprite: Sprite = null
let infinite = false
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Singular"),
miniMenu.createMenuItem("Infinite")
)
miniMenu.setDimensions(myMenu, 100, 100)
myMenu.setPosition(80, 60)
miniMenu.setTitle(myMenu, "Choose a mode")
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        infinite = false
    } else {
        infinite = true
    }
    mySprite = sprites.create(img`
        2 2 2 . . . 2 . . . 2 . 2 2 2 . . 
        2 . . 2 . . 2 . . . 2 . 2 . . 2 . 
        2 . . . 2 . 2 . . . 2 . 2 . . . 2 
        2 . . . 2 . . 2 . 2 . . 2 . . . 2 
        2 . . . 2 . . 2 . 2 . . 2 . . . 2 
        2 . . 2 . . . 2 . 2 . . 2 . . 2 . 
        2 2 2 . . . . . 2 . . . 2 2 2 . . 
        . . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(randint(0, 160), randint(0, 120))
    mySprite.setBounceOnWall(true)
    mySprite.setVelocity(50, 50)
    sprites.setDataNumber(mySprite, "bounces", 0)
    tiles.setCurrentTilemap(tilemap`level1`)
    miniMenu.close(myMenu)
})
