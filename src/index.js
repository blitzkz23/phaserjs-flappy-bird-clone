
import Phaser from 'phaser'

const config = {
  // WebGL(Web graphics library) JS Api for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade ohysics plugin, manages physics simulation
    default: 'arcade',
    arcade: {
      gravity: { y:400 },
      debug: true
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
}

const VELOCITY = 200;

let bird = null;
const initialBirdPosition = {x: config.width * 0.1, y: config.height / 2}
let flapVelocity = 300;


function create() {
  this.add.image(0, 0, 'sky').setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y,'bird').setOrigin(0);

  this.input.on('pointerdown', flap);
  this.input.keyboard.on('keydown_SPACE', flap);
}

function update(time, delta) {
  if(bird.y <= 0 - bird.height || bird.y > config.height) {
    restartBirdPosition();
  }
}

function restartBirdPosition() {
  bird.x = initialBirdPosition.x;
  bird.y = initialBirdPosition.y;
  bird.body.velocity.y = 0;  
}

function flap() {
  bird.body.velocity.y = -flapVelocity
}

new Phaser.Game(config);
