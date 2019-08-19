# AnimateAnythingJS

Animate any quantitative value by running one of the included animation styles on a loop until the animation is complete. Especially useful for animating SVG shapes. Visualizations of each animation style can be found [here](https://easings.net/en) for reference.

### Example

```
var animationValue;
var animationDurationInFrames = 60;
var animationCurrentFrame = 1;

function runAnimation() {
	animationCurrentFrame++;
	if ( animationCurrentFrame <= animationDurationInFrames ) {
		window.requestAnimationFrame( ()=> { 
			animationValue = AJS.easeOutBack( 0, 100, animationDurationInFrames, animationCurrentFrame );
			svg.setAttribute("points", "0 " + animationValue + " 100 " + animationValue );
			runAnimation();
		});
	} 
}

runAnimation();
```
