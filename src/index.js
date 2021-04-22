
import Phaser from 'phaser'

const config = {
  // WebGL(Web graphics library) JS Api for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    // Arcade ohysics plugin, manages physics simulation
    default: 'arcade'
  },
  scene: {
    preload,
    create,
  }
}

// Loading assets, such as images, music, animations
function preload() {
  // 'this' context - scene
  // contains functions and properties we can use
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
  
}

let bird = null;

function create() {
  // (x, y, key of the image)
  // (400, 300 will center the background image, because (0,0) is the edge)
  // this.add.image(config.width / 2, config.height / 2, 'sky');
  /** but lets use the origin instead */
  this.add.image(0, 0, 'sky').setOrigin(0);
  // middle of the height and 1/10 of weight location
  bird = this.add.sprite(config.width * 0.1, config.height / 2, 'bird').setOrigin(0);
  //debugger
}
new Phaser.Game(config);
