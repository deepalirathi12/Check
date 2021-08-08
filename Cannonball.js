class CB {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };

    this.body = Bodies.circle(x, y, 30, options);

    this.image = loadImage("./assets/cannonball.png");
    this.image1 = loadImage("./assets/gray.jpg");
    this.path = [];
    World.add(world, this.body);
  }

  //shooting the cannonball
  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 30,30);
    pop();

    //getting the positions of ball and pushing them in the trajectory array
    if (this.body.velocity.x > 0 && this.body.position.x > 300) {
      var position = [this.body.position.x, this.body.position.y];
      this.path.push(position);
    }

    // setting image to the trajectory
    for (var i = 0; i < this.path.length; i++) {
      image(this.image, this.path[i][0], this.path[i][1], 5, 5);
    }
  }
}