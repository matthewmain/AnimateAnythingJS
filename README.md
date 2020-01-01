# AnimateAnythingJS

AnimateAnythingJS is a very lightweight animation library cabable of animating _any_ quantifiable value. Though it can be used for commonly animationed values such as positions or sizes, it's especially useful for animating values that other animation libraries can't easily handle like SVG points or rgb colors. 

<br>

### Easing Options
AnimateAnythingJS offers the following easing options as functions. (Visualizations of each animation style can be found [here](https://easings.net/en) for reference.)

`.linear()` <br>
`.easeInQuad()`, `.easeOutQuad()`, `.easeInOutQuad()` <br>
`.easeInCubic()`, `.easeOutCubic()`, `.easeInOutCubic()` <br>
`.easeInQuart()`, `.easeOutQuart()`, `.easeInOutQuart()` <br>
`.easeInQuint()`, `.easeOutQuint()`, `.easeInOutQuint()` <br>
`.easeInSine()`, `.easeOutSine()`, `.easeInOutSine()` <br>
`.easeInExpo()`, `.easeOutExpo()`, `.easeInOutExpo()` <br>
`.easeInCirc()`, `.easeOutCirc()`, `.easeInOutCirc()` <br>
`.easeInElastic()`, `.easeOutElastic()`, `.easeInOutElastic()` <br>
`.easeInBack()`, `.easeOutBack()`, `.easeInOutBack()` <br>
`.easeOutBounce()` <br>

<br>

### Example

All AnimateAnythingJS functions require four arguments: 1) the beginning value, 2) the end value, 3) animation duration (as number of frames), and 4) frames elapsed (as an updated frame count). An optional fifth argument can be used to delay the animation's start by a specified number of frames.

```
AJS.<functionName>( <beginningValue>, <endValue>, <durationInFrames>, <framesElapsed>, <[delayInFrames]> );
```

Let's use a simple SVG line as an example. Say you want to animate just one point of the line so that it bounces down to a floor, but you want the other point to remain where it is. Do this by applying the `AJS.EaseOutBounce()` function to a stored y-value on a loop set to iterate however many frames you want the animation to have. On each loop, update the target point's y value using `.setAttribute()` and concatenating the svg path string.


```
var svgShape = document.getElementById("svg-shape");
var animationYValue = 0;
var animationDurationInFrames = 60;
var animationCurrentFrame = 0;

function runAnimation() {
  animationCurrentFrame++;
  if ( animationCurrentFrame <= animationDurationInFrames ) {
    window.requestAnimationFrame( ()=> { 
      animationYValue = AJS.easeOutBounce( 0, 100, animationDurationInFrames, animationCurrentFrame );
      svgShape.setAttribute("points", "0 0 10 " + animationYValue );
      runAnimation();
    });
  } 
}

runAnimation();
```




