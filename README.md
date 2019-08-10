# AnimateAnythingJS

Animate any quantitative value by running any of the included animation styles on a loop until the animation is complete. Visualizations of each style can be found [here](https://easings.net/en) for reference.

### Example

```
var animationValue;
var animationDurationInFrames = 60;
var animationCurrentFrame = 1;

function runAnimation( durationInFrames, currentFrame ) {
	animationCurrentFrame++;
	if ( currentFrame <= durationInFrames ) {
		window.requestAnimationFrame( ()=> { 
			animationValue = AJS.easeOutBack( 0, 100, animationDurationInFrames, animationCurrentFrame );
			svg.setAttribute("points", "0 " + animationValue + " 100 " + animationValue );
			runAnimation( animationDurationInFrames, animationCurrentFrame );
		});
	} else {
    animationCurrentFrame = 1;
	}
}

runAnimation( animationDurationInFrames, animationCurrentFrame );
```
