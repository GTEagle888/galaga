controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 . . . . . . 1 1 1 1 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 2 . . . . . . . . . 
        . . 1 . . . 2 2 . . . . . . . . 
        . . 1 . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . 2 2 2 . 
        `, ship, 50, 0)
   let  projectile1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 . . . . . . 1 1 1 1 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 2 . . . . . . . . . 
        . . 1 . . . 2 2 . . . . . . . . 
        . . 1 . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . 2 2 2 . 
        `, ship, 50, 50)
    let projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 . . . . . . 1 1 1 1 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . . . . 2 . . . . . . 1 . . . 
        . . 1 1 1 2 1 1 1 1 1 1 1 . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 . . . . . . . . . . 
        . . 1 . . 2 2 . . . . . . . . . 
        . . 1 . . . 2 2 . . . . . . . . 
        . . 1 . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . 2 2 2 . 
        `, ship, 50, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let enemy2: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
ship = sprites.create(img`
    . . . . . . . . . . 1 . . . . . 
    . . . . . . . . . . 1 . . . . . 
    . . . . . . 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 2 2 2 1 1 . . . . . . 
    . . . 1 2 2 2 2 2 2 2 2 2 2 2 . 
    . 1 1 2 2 2 2 2 2 1 1 . . . . . 
    . 1 2 2 2 2 2 2 2 2 1 . . . . . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 1 2 2 2 2 2 2 1 1 1 . . . . . 
    1 1 2 2 2 2 2 2 2 1 1 1 1 . . . 
    1 2 2 2 2 2 2 2 2 1 2 2 1 1 1 . 
    1 2 2 2 2 1 1 2 1 2 2 2 2 2 1 . 
    1 2 2 2 1 1 1 1 1 2 2 2 2 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 2 1 1 . . 
    . . . . . . . . . . 1 1 1 . . . 
    `, SpriteKind.Player)
ship.setPosition(20, 60)
controller.moveSprite(ship)
let enemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
enemy.setPosition(160, randint(0, 120))
enemy.setVelocity(-80, 0)
game.onUpdateInterval(1000, function () {
    enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy2.setPosition(160, randint(0, 120))
    enemy2.setVelocity(-80, 0)
})
