# AnimateAnythingJS

Animate any quantitative value by running any of the included animation styles on a loop until the animation is complete. Though the library can be used for any value, it's especially useful for animating SVG shapes point-by-point. 


### Easing Options
(Visualizations of each animation style can be found [here](https://easings.net/en) for reference.)

linear			
easeInQuad, easeOutQuad, easeInOutQuad
easeInCubic, easeOutCubic, easeInOutCubic
easeInQuart, easeOutQuart, easeInOutQuart
easeInQuint, easeOutQuint, easeInOutQuint
easeInSine, easeOutSine, easeInOutSine
easeInExpo, easeOutExpo, easeInOutExpo
easeInCirc, easeOutCirc, easeInOutCirc
easeInElastic, easeOutElastic, easeInOutElastic
easeInBack, easeOutBack, easeInOutBack
easeOutBounce


### Example

Say you want to animate just one point of an SVG shape so that it bounces down to a floor, but you want the rest of the shape to remain where it is. Do this by applying the `AJS.EaseOutBounce` function to stored y-value on a loop set to iterate however many frames you want the animation to have. Pass in four arguments when calling any AnimateAnything easing function: 1) the beginning value, 2) the end value, 3) animation duration (as number of frames), and 4) frames elapsed (as an updated frame count). On each loop, update the animated points specific y value using `.setAttribute` and concatenating the svg path string.

```
var svgShape = document.getElementById("svg-shape");
var animationYValue;
var animationDurationInFrames = 60;
var animationCurrentFrame = 0;

function runAnimation() {
  animationCurrentFrame++;
  if ( animationCurrentFrame <= animationDurationInFrames ) {
    window.requestAnimationFrame( ()=> { 
      animationYValue = AJS.easeOutBounce( 0, 10, animationDurationInFrames, animationCurrentFrame );
      svgShape.setAttribute("points", "0 0 10 " + animationYValue );
      runAnimation();
    });
  } 
}

runAnimation();
```

### Delay Option

You can also set a delay before the animation begins. Do this by passing in an optional fifth argument to delay the animation by a specified number of frames. This example will delay the above animation by 10 frames:

```
animationYValue = AJS.easeOutBounce( 0, 10, animationDurationInFrames, animationCurrentFrame, 10 );
```



