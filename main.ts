namespace SpriteKind {
    export const Platform = SpriteKind.create()
    export const Fire = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava_left`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    info.changeLifeBy(-1)
    simplified.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Star1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`blank`, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava_right`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    info.changeLifeBy(-1)
    simplified.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Lava_right`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava_down`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    info.changeLifeBy(-1)
    simplified.gravity_jump(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`RightStopPlayer`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`LeftStopPlayer`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Portal`, function (sprite, location) {
    if (level == 1) {
        level += 1
    } else if (level == 2) {
        info.setLife(3)
        level += 1
        tiles.setTilemap(tilemap`level2`)
        console.log(location)
        mySprite.say("Level 2", 500)
        mySprite.setPosition(8, 8)
        scene.setBackgroundImage(assets.image`background2`)
    } else {
        info.setLife(3)
        level += 1
        scene.setBackgroundImage(assets.image`background2`)
        tiles.setTilemap(tilemap`level3`)
        mySprite.setPosition(8, 8)
        console.log(location)
        mySprite.say("Level 3: Stared Visiom", 500)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Lava_down`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite, location) {
    game.over(true)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava_up`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    info.changeLifeBy(-1)
    simplified.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`SnowMoundBridge`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`DeepLava`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    info.changeLifeBy(-1)
    simplified.gravity_jump(mySprite)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Lava_left`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Lava_up`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let projectile: Sprite = null
let mySprite: Sprite = null
let level = 0
effects.blizzard.startScreenEffect()
level = 1
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
mySprite.setPosition(6, 89)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        pause(1500)
        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
    }
})
