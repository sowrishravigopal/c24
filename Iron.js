class Iron {
	constructor(x,y,r)
	{
		var options = {
			restitution:0.8,
			friction: 3,
			density: 30
		}
	// assign options to the rubber ball
	iron = new Iron(150, 150, 10);
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			
			//draw the ellipse here to display the rubber ball

			pop()
	}

}