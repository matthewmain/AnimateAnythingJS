


///////////////////////////////// ANIMATE.JS /////////////////////////////////

// adapted from: http://gsgd.co.uk/sandbox/jquery/easing/

// for visual examples, see: https://easings.net/en



var AJS = {

	linear: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return t*(c/d) + b;
	},

	easeInQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return c*(t/=d)*t + b;
	},

	easeOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c *(t/=d)*(t-2) + b;
	},

	easeInOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},

	easeInCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t + b;
	},

	easeOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall		
		return c*((t=t/d-1)*t*t + 1) + b;
	},

	easeInOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},

	easeInQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t + b;
	},

	easeOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},

	easeInOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},

	easeInQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t*t + b;
	},

	easeOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},

	easeInOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},

	easeInSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},

	easeOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},

	easeInOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},

	easeInExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},

	easeOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},

	easeInOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},

	easeInCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},

	easeOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},

	easeInOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},

	easeInElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},

	easeOutElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},

	easeInOutElastic: function( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		var s=1.70158, p=0, a=c;
		if (t==0) return b;  
		if ((t/=d/2)==2) return b+c;  
		if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a) }
		if (t < 1) { return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b }
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;	
	},

	easeInBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},

	easeOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},

	easeInOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},

	easeOutBounce: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var p = t/d;  // progress ratio
		if (p < (1/2.75)) {
			return c*(7.5625*p*p) + b;
		} else if (p < (2/2.75)) {
			return c*(7.5625*(p-=(1.5/2.75))*p + .75) + b;
		} else if (p < (2.5/2.75)) {
			return c*(7.5625*(p-=(2.25/2.75))*p + .9375) + b;
		} else {
			return c*(7.5625*(p-=(2.625/2.75))*p + .984375) + b;
		}
	},

}










