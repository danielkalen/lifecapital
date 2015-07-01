var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.14.1",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),c=t.length-1,m=0;c>=m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.14.1",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),c.to(t[u],e,p(r),u*n);return this.add(c,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(c,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.14.1",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=o(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,c=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new n(t[h][s],0,0,t[h+1][s]),c},_=function(t,n,o,_,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=l(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!_){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=o?4:1;--c>-1;)f=x[c],m=w[f],h(m,n,o,_,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=c}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],c=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,c[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=c,o[n]=l,h=0,c=[]);return{length:l,lengths:o,segments:u}},f=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.3",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r
}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),m=f.prototype;f.bezierThrough=_,f.cubicToQuadratic=o,f._autoCSS=!0,f.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},f._cssRegister=function(){var t=_gsScope._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new f;var l,_,u,p=e.values,c=p.length-1,m=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.14.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var l,_,u,p,c,f,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,C=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,z=180/Math.PI,I={},E=document,F=(E.documentElement,E.createElement("div")),L=E.createElement("img"),N=a._internals={_specialProps:o},X=navigator.userAgent,U=function(){var t,e=X.indexOf("Android"),i=E.createElement("div");return u=-1!==X.indexOf("Safari")&&-1===X.indexOf("Chrome")&&(-1===e||Number(X.substr(e+8,1))>3),c=u&&6>Number(X.substr(X.indexOf("Version/")+8,1)),p=-1!==X.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X))&&(f=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},G=E.defaultView?E.defaultView.getComputedStyle:function(){},W=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||G(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},Q=N.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=A.test(i),u=t,p=F.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+W(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(F),o=parseFloat(F[_?"offsetWidth":"offsetHeight"]),u.removeChild(F),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=Q(t,i,s,r,!0))}return c?-o:o},Z=N.calculateOffset=function(t,e,i){if("absolute"!==W(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=W(t,"margin"+s,i);return t["offset"+s]-(Q(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||G(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=Re(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Z(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||G(t,null);--n>-1;)s-=parseFloat(W(t,"padding"+r[n],i,!0))||0,s-=parseFloat(W(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:z)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(f=t.replace(D,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(N._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(N._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},N.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),ce=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,c,f,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,O=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(f=k[u],g=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),O&&-1!==g.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||ne[f]||b.test(f)))S=","===g.charAt(g.length-1)?"),":")",f=oe(f),g=oe(g),w=f.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],g[0]-f[0],",",!0,!0).appendXtra("",f[1],g[1]-f[1],",",!0).appendXtra("",f[2],g[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>g.length?1:g[3])-f,S,!1)));else if(v=f.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)P=v[p],x=f.indexOf(P,c),a.appendXtra(f.substr(c,x-c),Number(P),ie(y[p],P),"",O&&"px"===f.substr(x+P.length,2),0===p),c=x+P.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},fe=9;for(h=pe.prototype,h.l=h.pr=0;--fe>0;)h["xn"+fe]=0,h["xs"+fe]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=N._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return ce(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=N.Transform=function(){this.skewY=0},Pe=window.SVGElement,Se=Pe&&(f||/Android/i.test(X)&&!window.chrome),ke=function(t,e,i){var s=t.getBBox();e=ee(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y},Re=N.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,c,f,m,d,g,v,y=i?t._gsTransform||new be:new be,T=0>y.scaleX,w=2e-5,x=1e5,b=179.99,P=b*M,S=xe?parseFloat(W(t,we,e,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0,k=parseFloat(a.defaultTransformPerspective)||0;if(ye?n=W(t,Te,e,!0):t.currentStyle&&(n=t.currentStyle.filter.match(O),n=n&&4===n.length?[n[0].substr(4),Number(n[2].substr(4)),Number(n[1].substr(4)),n[3].substr(4),y.x||0,y.y||0].join(","):""),n&&"none"!==n&&"matrix(1, 0, 0, 1, 0, 0)"!==n){for(o=(n||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],h=o.length;--h>-1;)l=Number(o[h]),o[h]=(_=l-(l|=0))?(0|_*x+(0>_?-.5:.5))/x+l:l;if(16===o.length){var R=o[8],A=o[9],C=o[10],D=o[12],I=o[13],E=o[14];if(y.zOrigin&&(E=-y.zOrigin,D=R*E-o[12],I=A*E-o[13],E=C*E+y.zOrigin-o[14]),!i||s||null==y.rotationX){var F,L,N,X,U,Y,j,B=o[0],q=o[1],V=o[2],G=o[3],Q=o[4],Z=o[5],$=o[6],H=o[7],K=o[11],J=Math.atan2($,C),te=-P>J||J>P;y.rotationX=J*z,J&&(X=Math.cos(-J),U=Math.sin(-J),F=Q*X+R*U,L=Z*X+A*U,N=$*X+C*U,R=Q*-U+R*X,A=Z*-U+A*X,C=$*-U+C*X,K=H*-U+K*X,Q=F,Z=L,$=N),J=Math.atan2(R,B),y.rotationY=J*z,J&&(Y=-P>J||J>P,X=Math.cos(-J),U=Math.sin(-J),F=B*X-R*U,L=q*X-A*U,N=V*X-C*U,A=q*U+A*X,C=V*U+C*X,K=G*U+K*X,B=F,q=L,V=N),J=Math.atan2(q,Z),y.rotation=J*z,J&&(j=-P>J||J>P,X=Math.cos(-J),U=Math.sin(-J),B=B*X+Q*U,L=q*X+Z*U,Z=q*-U+Z*X,$=V*-U+$*X,q=L),j&&te?y.rotation=y.rotationX=0:j&&Y?y.rotation=y.rotationY=0:Y&&te&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(B*B+q*q)*x+.5)/x,y.scaleY=(0|Math.sqrt(Z*Z+A*A)*x+.5)/x,y.scaleZ=(0|Math.sqrt($*$+C*C)*x+.5)/x,y.skewX=0,y.perspective=K?1/(0>K?-K:K):0,y.x=D,y.y=I,y.z=E}}else if(!(xe&&!s&&o.length&&y.x===o[4]&&y.y===o[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===W(t,"display",e))){var ee=o.length>=6,ie=ee?o[0]:1,se=o[1]||0,re=o[2]||0,ne=ee?o[3]:1;y.x=o[4]||0,y.y=o[5]||0,u=Math.sqrt(ie*ie+se*se),p=Math.sqrt(ne*ne+re*re),c=ie||se?Math.atan2(se,ie)*z:y.rotation||0,f=re||ne?Math.atan2(re,ne)*z+c:y.skewX||0,m=u-Math.abs(y.scaleX||0),d=p-Math.abs(y.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(T?(u*=-1,f+=0>=c?180:-180,c+=0>=c?180:-180):(p*=-1,f+=0>=f?180:-180)),g=(c-y.rotation)%180,v=(f-y.skewX)%180,(void 0===y.skewX||m>w||-w>m||d>w||-w>d||g>-b&&b>g&&false|g*x||v>-b&&b>v&&false|v*x)&&(y.scaleX=u,y.scaleY=p,y.rotation=c,y.skewX=f),xe&&(y.rotationX=y.rotationY=y.z=0,y.perspective=k,y.scaleZ=1)}y.zOrigin=S;for(h in y)w>y[h]&&y[h]>-w&&(y[h]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:k,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=y),y.svg=Pe&&t instanceof Pe,y.svg&&ke(t,W(t,we,r,!1,"50% 50%")+"",y),y.xPercent=y.yPercent=0,y},Ae=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+m*h),b+=m-(c*l+m*_)),v?(c=d/2,m=g/2,w+=", Dx="+(c-(c*o+m*h)+x)+", Dy="+(m-(c*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(C,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>f?1:-1;for(c=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),fe=0;4>fe;fe++)S=J[fe],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Q(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>fe?-s.ieOffsetX:-s.ieOffsetY:2>fe?c-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===fe||2===fe?1:R)))+"px"}}},Oe=N.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,c,f,m,d,g,v,y,T,w,x,b,P,S=this.data,k=this.t.style,R=S.rotation*M,A=S.scaleX,O=S.scaleY,C=S.scaleZ,D=S.x,z=S.y,I=S.z,E=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==C||E||I))return Ce.call(this,t),void 0;if(p){var F=1e-4;F>A&&A>-F&&(A=C=2e-5),F>O&&O>-F&&(O=C=2e-5),!E||S.z||S.rotationX||S.rotationY||(E=0)}if(R||S.skewX)y=Math.cos(R),T=Math.sin(R),e=y,n=T,S.skewX&&(R-=S.skewX*M,y=Math.cos(R),T=Math.sin(R),"simple"===S.skewType&&(w=Math.tan(S.skewX*M),w=Math.sqrt(1+w*w),y*=w,T*=w)),i=-T,a=y;else{if(!(S.rotationY||S.rotationX||1!==C||E||S.svg))return k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+z+"px,"+I+"px)"+(1!==A||1!==O?" scale("+A+","+O+")":""),void 0;e=a=1,i=n=0}u=1,s=r=o=h=l=_=c=f=m=0,d=E?-1/E:0,g=S.zOrigin,v=1e5,R=S.rotationY*M,R&&(y=Math.cos(R),T=Math.sin(R),l=u*-T,f=d*-T,s=e*T,o=n*T,u*=y,d*=y,e*=y,n*=y),R=S.rotationX*M,R&&(y=Math.cos(R),T=Math.sin(R),w=i*y+s*T,x=a*y+o*T,b=_*y+u*T,P=m*y+d*T,s=i*-T+s*y,o=a*-T+o*y,u=_*-T+u*y,d=m*-T+d*y,i=w,a=x,_=b,m=P),1!==C&&(s*=C,o*=C,u*=C,d*=C),1!==O&&(i*=O,a*=O,_*=O,m*=O),1!==A&&(e*=A,n*=A,l*=A,f*=A),g&&(c-=g,r=s*c,h=o*c,c=u*c+g),S.svg&&(r+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),h+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)),r=(w=(r+=D)-(r|=0))?(0|w*v+(0>w?-.5:.5))/v+r:r,h=(w=(h+=z)-(h|=0))?(0|w*v+(0>w?-.5:.5))/v+h:h,c=(w=(c+=I)-(c|=0))?(0|w*v+(0>w?-.5:.5))/v+c:c,k[ye]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|l*v)/v,(0|f*v)/v,(0|i*v)/v,(0|a*v)/v,(0|_*v)/v,(0|m*v)/v,(0|s*v)/v,(0|o*v)/v,(0|u*v)/v,(0|d*v)/v,r,h,c,E?1+-c/E:1].join(",")+")"},Ce=N.set2DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p=this.data,c=this.t,f=c.style,m=p.x,d=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&Se||!xe?(r=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*M,i=e-p.skewX*M,s=1e5,a=Math.cos(e)*r,o=Math.sin(e)*r,h=Math.sin(i)*-n,l=Math.cos(i)*n,p.svg&&(m+=p.xOrigin-(p.xOrigin*a+p.yOrigin*h),d+=p.yOrigin-(p.xOrigin*o+p.yOrigin*l),u=1e-6,u>m&&m>-u&&(m=0),u>d&&d>-u&&(d=0)),_=(0|a*s)/s+","+(0|o*s)/s+","+(0|h*s)/s+","+(0|l*s)/s+","+m+","+d+")",p.svg&&Se?c.setAttribute("transform","matrix("+_):f[ye]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+_):f[ye]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+r+",0,0,"+n+","+m+","+d+")",void 0):(this.setRatio=Oe,Oe.call(this,t),void 0)};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._transform)return n;var l,_,u,p,c,f,m,d=s._transform=Re(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=ve.length,T=h,w={};if("string"==typeof T.transform&&ye)u=F.style,u[ye]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(F),l=Re(F,null,!1),E.body.removeChild(F);else if("object"==typeof T){if(l={scaleX:se(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:se(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:se(T.scaleZ,d.scaleZ),x:se(T.x,d.x),y:se(T.y,d.y),z:se(T.z,d.z),xPercent:se(T.xPercent,d.xPercent),yPercent:se(T.yPercent,d.yPercent),perspective:se(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=se(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=se(T.y,d.yPercent)),l.rotation=re("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),xe&&(l.rotationX=re("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=re("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:re(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:re(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(xe&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=ve[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=I[i])&&(f=!0,n=new pe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,p&&d.svg?(ke(t,p,l),n=new pe(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new pe(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,Me(g,we)):(p||xe&&c&&d.zOrigin)&&(ye?(f=!0,i=we,p=(p||W(t,i,r,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,xe?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):ee(p+"",d)),f&&(s._transformType=d.svg&&Se||!c&&3!==this._transformType?2:3),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=W(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Q(t,"borderLeft",c,v),w=Q(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=Q(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=ce(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",m=r||G(t,null),d=this.format((m?f?m.getPropertyValue(c+"-x")+" "+m.getPropertyValue(c+"-y"):m.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=W(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>f?(h=t.currentStyle,l=8>f?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(W(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(W(t,"borderTopWidth",r,!1,"0px")+" "+W(t,"borderTopStyle",r,!1,"solid")+" "+W(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("borderWidth",{parser:_e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var De=function(t){var e,i=this.t,s=i.filter||W(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!W(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(W(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===W(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=De),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Me=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},ze=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Me(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=ze,a.pr=-11,i=!0,a.b=f,_=$(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=H(t,_,$(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Me(n,i);r&&(Me(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),fe=h.length;fe--;)ge(h[fe]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=G(t,""),n=this._overwriteProps;var h,p,f,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=W(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(x,"zIndex",0)),"string"==typeof e&&(m=x.cssText,h=$(t,r),x.cssText=m+";"+e,h=H(t,h,$(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=W(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(x,"zIndex",0)),c&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,f=p;f&&f._next;)f=f._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,f),y.setRatio=T&&xe?Oe:ye?Ce:Ae,y.data=this._transform||Re(t,r,!0),n.pop()
}if(i){for(;p;){for(g=p._next,f=m;f&&f.pr>p.pr;)f=f._next;(p._prev=f?f._prev:d)?p._prev._next=p:m=p,(p._next=f)?f._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],h=o[a],h?i=h.parse(t,c,a,this,i,n,e):(p=W(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(c)?(d||(c=oe(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=ce(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(_=parseFloat(p),f=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),f="px"):"left"===a||"top"===a?(_=Z(t,a,r),f="px"):(_="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(y,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+_:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&_&&(_=Q(t,a,_,f),"%"===m?(_/=Q(t,a,100,"%")/100,e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=Q(t,a,1,"em"):"px"!==m&&(u=Q(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=ce(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transform=this._transform||Re(this._target,r,!0),this._transformType=this._transform.svg&&Se||!t&&3!==this._transformType?2:3};var Ee=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new pe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ee,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Fe=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Fe(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Fe(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Fe(t,l,u),o.render(i,!0),Fe(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&l.dispatchEvent("tick")};b.call(l),l.time=l.frame=0,l.tick=function(){d(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),d(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?j:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var O=function(){o&&k()-R>2e3&&a.wake(),setTimeout(O,2e3)};O(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new A,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&W(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&W(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.14.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],E={},F=D._internals={isArray:c,isSelector:M,lazyTweens:I},L=D._plugins={},N=F.tweenLookup={},X=0,U=F.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},j=A._rootFramesTimeline=new C,B=A._rootTimeline=new C,q=F.lazyRender=function(){var t,e=I.length;for(E={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};B._startTime=a.time,j._startTime=a.frame,B._active=j._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),j.render((a.frame-j._startTime)*j._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=B._first,(!i||i._paused)&&D.autoSleep&&!j._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(N[n||(t._gsTweenID=n="t"+X++)]||(N[n]={target:t,tweens:[]}),e&&(s=N[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return N[n].tweens},G=function(t,e,i,s){var r=t.vars.onOverwrite;r&&r(t,e,i,s),r=D.onOverwrite,r&&r(t,e,i,s)},W=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||(o._enabled(!1,!1)&&(a=!0),G(o,e));else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Q(e,0,f),0===Q(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&(o._enabled(!1,!1)&&(a=!0),2!==s&&G(o,e));return a},Q=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;E[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&L.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(L[n]&&(h=new L[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&W(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(E[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((c(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill);for(n in l)(a=o[n])&&(u||(u=[]),u.push(n),a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);
!this._firstPT&&this._initted&&this._enabled(!1,!1),u&&i&&G(this,i,e,u)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Z=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Z.prototype},!0);if(n=Z.prototype,Z.version="1.10.1",Z.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Z.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Z.API&&(L[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Z.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Z(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Z.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");


!function(e,t){if("function"==typeof define&&define.amd)define(["jquery","TweenMax","TimelineMax"],t);else{var n=t(e.jQuery,e.TweenMax,e.TimelineMax);e.ScrollMagic=n.Controller,e.ScrollScene=n.Scene}}(this,function(e,t,n){var r=function(t){var n,r,a="ScrollMagic",u={container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100},f=this,g=e.extend({},u,t),h=[],d=!1,p=0,v="PAUSED",w=!0,m=0,S=!0,E=function(){if(f.version=f.constructor.version,e.each(g,function(e){u.hasOwnProperty(e)||delete g[e]}),g.container=e(g.container).first(),0===g.container.length)throw a+" init failed.";w=!e.contains(document,g.container.get(0)),w||g.container.on("resize",function(e){e.stopPropagation()}),m=g.vertical?g.container.height():g.container.width(),g.container.on("scroll resize",b),g.refreshInterval=parseInt(g.refreshInterval),g.refreshInterval>0&&(r=window.setInterval(R,g.refreshInterval)),n=l(T)},F=function(){return g.vertical?g.container.scrollTop():g.container.scrollLeft()},y=function(e){g.vertical?g.container.scrollTop(e):g.container.scrollLeft(e)},T=function(){if(n=l(T),S&&d){var t=e.isArray(d)?d:h.slice(0),r=p;p=f.scrollPos();var i=p-r;v=0===i?"PAUSED":i>0?"FORWARD":"REVERSE",0>i&&t.reverse(),e.each(t,function(e,t){t.update(!0)}),0===t.length&&g.loglevel>=3,d=!1}},b=function(e){"resize"==e.type&&(m=g.vertical?g.container.height():g.container.width()),d=!0},R=function(){w||m!=(g.vertical?g.container.height():g.container.width())&&g.container.trigger("resize"),e.each(h,function(e,t){t.refresh()})},z=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){return e.isArray(t)?e.each(t,function(e,t){f.addScene(t)}):t instanceof i&&(t.parent()!=f?t.addTo(f):e.inArray(t,h)<0&&(h.push(t),h=z(h),t.on("shift."+a+"_sort",function(){h=z(h)}),e.each(g.globalSceneOptions,function(e,n){t[e]&&t[e].call(t,n)}))),f},this.removeScene=function(t){if(e.isArray(t))e.each(t,function(e,t){f.removeScene(t)});else{var n=e.inArray(t,h);n>-1&&(t.off("shift."+a+"_sort"),h.splice(n,1),t.remove())}return f},this.updateScene=function(t,n){return e.isArray(t)?e.each(t,function(e,t){f.updateScene(t,n)}):n?t.update(!0):(e.isArray(d)||(d=[]),-1==e.inArray(t,d)&&d.push(t),d=z(d)),f},this.update=function(e){return b({type:"resize"}),e&&T(),f},this.scrollTo=function(t){if(t instanceof i)t.parent()===f?f.scrollTo(t.scrollOffset()):log(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if("string"===e.type(t)||s(t)||t instanceof e){var n=e(t).first();if(n[0]){var r=g.vertical?"top":"left",a=o(g.container),l=o(n);w||(a[r]-=f.scrollPos()),f.scrollTo(l[r]-a[r])}else log(2,"scrollTo(): The supplied element could not be found. Scroll cancelled.",t)}else e.isFunction(t)?y=t:y.call(g.container[0],t);return f},this.scrollPos=function(t){return arguments.length?(e.isFunction(t)&&(F=t),f):F.call(f)},this.info=function(e){var t={size:m,vertical:g.vertical,scrollPos:p,scrollDirection:v,container:g.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return arguments.length?(g.loglevel!=e&&(g.loglevel=e),f):g.loglevel},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,f.updateScene(h,!0)),f):S},this.destroy=function(e){window.clearTimeout(r);for(var t=h.length;t--;)h[t].destroy(e);return g.container.off("scroll resize",b),c(n),null},E(),f};r.version="1.3.0";var i=function(t){var i,s,l,c,u,f,g,h={onCenter:.5,onEnter:1,onLeave:0},d="ScrollScene",p={duration:0,offset:0,triggerElement:null,triggerHook:"onCenter",reverse:!0,tweenChanges:!1,loglevel:2},v=this,w=e.extend({},p,t),m="BEFORE",S=0,E={start:0,end:0},F=0,y=!0,T={unknownOptionSupplied:function(){e.each(w,function(e){p.hasOwnProperty(e)||delete w[e]})},duration:function(){if(e.isFunction(w.duration)){i=w.duration;try{w.duration=parseFloat(i())}catch(t){i=void 0,w.duration=p.duration}}else w.duration=parseFloat(w.duration),(!e.isNumeric(w.duration)||w.duration<0)&&(w.duration=p.duration)},offset:function(){w.offset=parseFloat(w.offset),e.isNumeric(w.offset)||(w.offset=p.offset)},triggerElement:function(){null!==w.triggerElement&&0===e(w.triggerElement).length&&(w.triggerElement=p.triggerElement)},triggerHook:function(){w.triggerHook in h||(w.triggerHook=e.isNumeric(w.triggerHook)?Math.max(0,Math.min(parseFloat(w.triggerHook),1)):p.triggerHook)},reverse:function(){w.reverse=!!w.reverse},tweenChanges:function(){w.tweenChanges=!!w.tweenChanges}},b=function(){R(),v.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?x():"reverse"===e.what&&v.update())}).on("shift.internal",function(e){C(),v.update(),("AFTER"===m&&"duration"===e.reason||"DURING"===m&&0===w.duration)&&O()}).on("progress.internal",function(){P(),O()}).on("destroy",function(e){e.preventDefault()})},R=function(t){if(arguments.length)e.isArray(t)||(t=[t]);else{t=[];for(var n in T)t.push(n)}e.each(t,function(e,t){T[t]&&T[t]()})},z=function(e,t){var n=!1,r=w[e];return w[e]!=t&&(w[e]=t,R(e),n=r!=w[e]),n},C=function(){E={start:F+w.offset},s&&w.triggerElement&&(E.start-=s.info("size")*v.triggerHook()),E.end=E.start+w.duration},D=function(e){if(i){var t="duration";z(t,i.call(v))&&!e&&(v.trigger("change",{what:t,newval:w[t]}),v.trigger("shift",{reason:t}))}},x=function(t){var n=0;if(s&&w.triggerElement){for(var r=e(w.triggerElement).first(),i=s.info(),a=o(i.container),l=i.vertical?"top":"left";r.parent().data("ScrollMagicPinSpacer");)r=r.parent();var c=o(r);i.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=F;F=n,u&&!t&&v.trigger("shift",{reason:"triggerElementPosition"})},P=function(e){if(l){var t=e>=0&&1>=e?e:S;if(-1===l.repeat())if("DURING"===m&&l.paused())l.play();else{if("DURING"===m||l.paused())return!1;l.pause()}else{if(t==l.progress())return!1;0===w.duration?"DURING"===m?l.play():l.reverse():w.tweenChanges?l.tweenTo(t*l.duration()):l.progress(t).pause()}return!0}return!1},O=function(e){if(c&&s){var t=s.info();if(e||"DURING"!==m){var n={position:u.inFlow?"relative":"absolute",top:0,left:0},r=c.css("position")!=n.position;u.pushFollowers?w.duration>0&&("AFTER"===m&&0===parseFloat(u.spacer.css("padding-top"))?r=!0:"BEFORE"===m&&0===parseFloat(u.spacer.css("padding-bottom"))&&(r=!0)):n[t.vertical?"top":"left"]=w.duration*S,c.css(n),r&&(c.removeClass(u.pinnedClass),A())}else{"fixed"!=c.css("position")&&(c.css("position","fixed"),A(),c.addClass(u.pinnedClass));var i=o(u.spacer,!0),a=w.reverse||0===w.duration?t.scrollPos-E.start:Math.round(S*w.duration*10)/10;i.top-=parseFloat(u.spacer.css("margin-top")),i[t.vertical?"top":"left"]+=a,c.css({top:i.top,left:i.left})}}},A=function(){if(c&&s&&u.inFlow){var t="AFTER"===m,n="BEFORE"===m,r="DURING"===m,i="fixed"==c.css("position"),o=s.info("vertical"),l=u.spacer.children().first(),f=a(u.spacer.css("display")),g={};f?(g["margin-top"]=n||r&&i?c.css("margin-top"):"auto",g["margin-bottom"]=t||r&&i?c.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",u.relSize.width||u.relSize.autoFullWidth?i?e(window).width()==u.spacer.parent().width()?c.css("width",u.relSize.autoFullWidth?"100%":"inherit"):c.css("width",u.spacer.width()):c.css("width","100%"):(g["min-width"]=l.outerWidth(!l.is(c)),g.width=i?g["min-width"]:"auto"),u.relSize.height?i?e(window).height()==u.spacer.parent().height()?c.css("height","inherit"):c.css("height",u.spacer.height()):c.css("height","100%"):(g["min-height"]=l.outerHeight(!f),g.height=i?g["min-height"]:"auto"),u.pushFollowers&&(g["padding"+(o?"Top":"Left")]=w.duration*S,g["padding"+(o?"Bottom":"Right")]=w.duration*(1-S)),u.spacer.css(g)}},I=function(){s&&c&&"DURING"===m&&!s.info("isDocument")&&O()},N=function(){s&&c&&"DURING"===m&&((u.relSize.width||u.relSize.autoFullWidth)&&e(window).width()!=u.spacer.parent().width()||u.relSize.height&&e(window).height()!=u.spacer.parent().height())&&A()},k=function(e){s&&c&&"DURING"===m&&!s.info("isDocument")&&(e.preventDefault(),s.scrollTo(s.info("scrollPos")-(e.originalEvent.wheelDelta/3||30*-e.originalEvent.detail)))};return this.parent=function(){return s},this.duration=function(t){var n="duration";return arguments.length?(e.isFunction(t)||(i=void 0),z(n,t)&&(v.trigger("change",{what:n,newval:w[n]}),v.trigger("shift",{reason:n})),v):w[n]},this.offset=function(e){var t="offset";return arguments.length?(z(t,e)&&(v.trigger("change",{what:t,newval:w[t]}),v.trigger("shift",{reason:t})),v):w[t]},this.triggerElement=function(e){var t="triggerElement";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.triggerHook=function(t){var n="triggerHook";return arguments.length?(z(n,t)&&(v.trigger("change",{what:n,newval:w[n]}),v.trigger("shift",{reason:n})),v):e.isNumeric(w[n])?w[n]:h[w[n]]},this.reverse=function(e){var t="reverse";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.tweenChanges=function(e){var t="tweenChanges";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.loglevel=function(e){var t="loglevel";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.state=function(){return m},this.triggerPosition=function(){var e=w.offset;return s&&(e+=w.triggerElement?F:s.info("size")*v.triggerHook()),e},this.triggerOffset=function(){return v.triggerPosition()},this.scrollOffset=function(){return E.start},this.update=function(e){if(s)if(e)if(s.enabled()&&y){var t,n=s.info("scrollPos");t=w.duration>0?(n-E.start)/(E.end-E.start):n>=E.start?1:0,v.trigger("update",{startPos:E.start,endPos:E.end,scrollPos:n}),v.progress(t)}else c&&"DURING"===m&&O(!0);else s.updateScene(v,!1);return v},this.refresh=function(){return D(),x(),v},this.progress=function(e){if(arguments.length){var t=!1,n=m,r=s?s.info("scrollDirection"):"PAUSED",i=w.reverse||e>=S;if(0===w.duration?(t=S!=e,S=1>e&&i?0:1,m=0===S?"BEFORE":"DURING"):0>=e&&"BEFORE"!==m&&i?(S=0,m="BEFORE",t=!0):e>0&&1>e&&i?(S=e,m="DURING",t=!0):e>=1&&"AFTER"!==m?(S=1,m="AFTER",t=!0):"DURING"!==m||i||O(),t){var o={progress:S,state:m,scrollDirection:r},a=m!=n,l=function(e){v.trigger(e,o)};a&&"DURING"!==n&&(l("enter"),l("BEFORE"===n?"start":"end")),l("progress"),a&&"DURING"!==m&&(l("BEFORE"===m?"start":"end"),l("leave"))}return v}return S},this.setTween=function(e){if(!n)return v;l&&v.removeTween();try{l=new n({smoothChildTiming:!0}).add(e).pause()}catch(t){}finally{e.repeat&&-1===e.repeat()&&(l.repeat(-1),l.yoyo(e.yoyo()))}return P(),v},this.removeTween=function(e){return l&&(e&&P(0),l.kill(),l=void 0),v},this.setPin=function(t,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer",pinnedClass:""};if(n=e.extend({},r,n),t=e(t).first(),0===t.length)return v;if("fixed"==t.css("position"))return v;if(c){if(c===t)return v;v.removePin()}c=t,c.parent().hide();var i="absolute"!=c.css("position"),o=c.css(["display","top","left","bottom","right"]),s=c.css(["width","height"]);c.parent().show(),"0px"===s.width&&i&&a(o.display),!i&&n.pushFollowers&&(n.pushFollowers=!1);var l=e("<div></div>").addClass(n.spacerClass).css(o).data("ScrollMagicPinSpacer",!0).css({position:i?"relative":"absolute","margin-left":"auto","margin-right":"auto","box-sizing":"content-box"}),f=c[0].style;return u={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"0px"===s.width&&i&&a(o.display)},pushFollowers:n.pushFollowers,inFlow:i,origStyle:{width:f.width||"",position:f.position||"",top:f.top||"",left:f.left||"",bottom:f.bottom||"",right:f.right||"","box-sizing":f["box-sizing"]||"","-moz-box-sizing":f["-moz-box-sizing"]||"","-webkit-box-sizing":f["-webkit-box-sizing"]||""},pinnedClass:n.pinnedClass},u.relSize.width&&l.css("width",s.width),u.relSize.height&&l.css("height",s.height),c.before(l).appendTo(l).css({position:i?"relative":"absolute",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(u.relSize.width||u.relSize.autoFullWidth)&&c.css("box-sizing","border-box"),e(window).on("scroll."+d+"_pin resize."+d+"_pin",I),c.on("mousewheel DOMMouseScroll",k),O(),v},this.removePin=function(t){return c&&(t||!s?(c.insertBefore(u.spacer).css(u.origStyle),u.spacer.remove()):"DURING"===m&&O(!0),e(window).off("scroll."+d+"_pin resize."+d+"_pin"),c.off("mousewheel DOMMouseScroll",k),c=void 0),v},this.setClassToggle=function(t,n){var r=e(t);return 0===r.length||"string"!==e.type(n)?v:(f=n,g=r,v.on("enter.internal_class leave.internal_class",function(e){g.toggleClass(f,"enter"===e.type)}),v)},this.removeClassToggle=function(e){return g&&e&&g.removeClass(f),v.off("start.internal_class end.internal_class"),f=void 0,g=void 0,v},this.addTo=function(e){return e instanceof r&&s!=e&&(s&&s.removeScene(v),s=e,R(),D(!0),x(!0),C(),A(),s.info("container").on("resize."+d,function(){N(),v.triggerHook()>0&&v.trigger("shift",{reason:"containerSize"})}),e.addScene(v),v.update()),v},this.enabled=function(e){return arguments.length?(y!=e&&(y=!!e,v.update(!0)),v):y},this.remove=function(){if(s){s.info("container").off("resize."+d);var e=s;s=void 0,e.removeScene(v)}return v},this.destroy=function(e){return v.removeTween(e),v.removePin(e),v.removeClassToggle(e),v.trigger("destroy",{reset:e}),v.remove(),v.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"),null},this.on=function(t,n){if(e.isFunction(n)){var r=e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+d+"_$2").replace(/( |^)(\w+)(?= |$)/g,"$1$2."+d);e(v).on(r,n)}return v},this.off=function(t,n){var r=e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+d+"_$2").replace(/( |^)(\w+)(?= |$)/g,"$1$2."+d+"$3");return e(v).off(r,n),v},this.trigger=function(t,n){var r=e.Event(e.trim(t).toLowerCase(),n);return e(v).trigger(r),v},b(),v},o=function(e,t){var n={top:0,left:0};if(e=e[0],e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||0),n.left+=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0))}return n},s=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},a=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1},l=window.requestAnimationFrame,c=window.cancelAnimationFrame;return function(e){var t,n=0,r=["ms","moz","webkit","o"];for(t=0;!l&&t<r.length;++t)l=e[r[t]+"RequestAnimationFrame"],c=e[r[t]+"CancelAnimationFrame"]||e[r[t]+"CancelRequestAnimationFrame"];l||(l=function(t){var r=(new Date).getTime(),i=Math.max(0,16-(r-n)),o=e.setTimeout(function(){t(r+i)},i);return n=r+i,o}),c||(c=function(t){e.clearTimeout(t)})}(window),{Controller:r,Scene:i}});


!function(){"use strict";function a(a){return a.split("").reverse().join("")}function b(a,b){return a.substring(0,b.length)===b}function c(a,b){return a.slice(-1*b.length)===b}function d(a,b,c){if((a[b]||a[c])&&a[b]===a[c])throw new Error(b)}function e(a){return"number"==typeof a&&isFinite(a)}function f(a,b){var c=Math.pow(10,b);return(Math.round(a*c)/c).toFixed(b)}function g(b,c,d,g,h,i,j,k,l,m,n,o){var p,q,r,s=o,t="",u="";return i&&(o=i(o)),e(o)?(b!==!1&&0===parseFloat(o.toFixed(b))&&(o=0),0>o&&(p=!0,o=Math.abs(o)),b!==!1&&(o=f(o,b)),o=o.toString(),-1!==o.indexOf(".")?(q=o.split("."),r=q[0],d&&(t=d+q[1])):r=o,c&&(r=a(r).match(/.{1,3}/g),r=a(r.join(a(c)))),p&&k&&(u+=k),g&&(u+=g),p&&l&&(u+=l),u+=r,u+=t,h&&(u+=h),m&&(u=m(u,s)),u):!1}function h(a,d,f,g,h,i,j,k,l,m,n,o){var p,q="";return n&&(o=n(o)),o&&"string"==typeof o?(k&&b(o,k)&&(o=o.replace(k,""),p=!0),g&&b(o,g)&&(o=o.replace(g,"")),l&&b(o,l)&&(o=o.replace(l,""),p=!0),h&&c(o,h)&&(o=o.slice(0,-1*h.length)),d&&(o=o.split(d).join("")),f&&(o=o.replace(f,".")),p&&(q+="-"),q+=o,q=q.replace(/[^0-9\.\-.]/g,""),""===q?!1:(q=Number(q),j&&(q=j(q)),e(q)?q:!1)):!1}function i(a){var b,c,e,f={};for(b=0;b<l.length;b+=1)if(c=l[b],e=a[c],void 0===e)f[c]="negative"!==c||f.negativeBefore?"mark"===c&&"."!==f.thousand?".":!1:"-";else if("decimals"===c){if(!(e>=0&&8>e))throw new Error(c);f[c]=e}else if("encoder"===c||"decoder"===c||"edit"===c||"undo"===c){if("function"!=typeof e)throw new Error(c);f[c]=e}else{if("string"!=typeof e)throw new Error(c);f[c]=e}return d(f,"mark","thousand"),d(f,"prefix","negative"),d(f,"prefix","negativeBefore"),f}function j(a,b,c){var d,e=[];for(d=0;d<l.length;d+=1)e.push(a[l[d]]);return e.push(c),b.apply("",e)}function k(a){return this instanceof k?void("object"==typeof a&&(a=i(a),this.to=function(b){return j(a,g,b)},this.from=function(b){return j(a,h,b)})):new k(a)}var l=["decimals","thousand","mark","prefix","postfix","encoder","decoder","negativeBefore","negative","edit","undo"];window.wNumb=k}(),function(a){"use strict";function b(b){return b instanceof a||a.zepto&&a.zepto.isZ(b)}function c(b,c){return"string"==typeof b&&0===b.indexOf("-inline-")?(this.method=c||"html",this.target=this.el=a(b.replace("-inline-","")||"<div/>"),!0):void 0}function d(b){if("string"==typeof b&&0!==b.indexOf("-")){this.method="val";var c=document.createElement("input");return c.name=b,c.type="hidden",this.target=this.el=a(c),!0}}function e(a){return"function"==typeof a?(this.target=!1,this.method=a,!0):void 0}function f(a,c){return b(a)&&!c?(a.is("input, select, textarea")?(this.method="val",this.target=a.on("change.liblink",this.changeHandler)):(this.target=a,this.method="html"),!0):void 0}function g(a,c){return b(a)&&("function"==typeof c||"string"==typeof c&&a[c])?(this.method=c,this.target=a,!0):void 0}function h(b,c,d){var e=this,f=!1;if(this.changeHandler=function(b){var c=e.formatInstance.from(a(this).val());return c===!1||isNaN(c)?(a(this).val(e.lastSetValue),!1):void e.changeHandlerMethod.call("",b,c)},this.el=!1,this.formatInstance=d,a.each(k,function(a,d){return f=d.call(e,b,c),!f}),!f)throw new RangeError("(Link) Invalid Link.")}function i(a){this.items=[],this.elements=[],this.origin=a}function j(b,c,d,e){0===b&&(b=this.LinkDefaultFlag),this.linkAPI||(this.linkAPI={}),this.linkAPI[b]||(this.linkAPI[b]=new i(this));var f=new h(c,d,e||this.LinkDefaultFormatter);f.target||(f.target=a(this)),f.changeHandlerMethod=this.LinkConfirm(b,f.el),this.linkAPI[b].push(f,f.el),this.LinkUpdate(b)}var k=[c,d,e,f,g];h.prototype.set=function(a){var b=Array.prototype.slice.call(arguments),c=b.slice(1);this.lastSetValue=this.formatInstance.to(a),c.unshift(this.lastSetValue),("function"==typeof this.method?this.method:this.target[this.method]).apply(this.target,c)},i.prototype.push=function(a,b){this.items.push(a),b&&this.elements.push(b)},i.prototype.reconfirm=function(a){var b;for(b=0;b<this.elements.length;b+=1)this.origin.LinkConfirm(a,this.elements[b])},i.prototype.remove=function(){var a;for(a=0;a<this.items.length;a+=1)this.items[a].target.off(".liblink");for(a=0;a<this.elements.length;a+=1)this.elements[a].remove()},i.prototype.change=function(a){if(this.origin.LinkIsEmitting)return!1;this.origin.LinkIsEmitting=!0;var b,c=Array.prototype.slice.call(arguments,1);for(c.unshift(a),b=0;b<this.items.length;b+=1)this.items[b].set.apply(this.items[b],c);this.origin.LinkIsEmitting=!1},a.fn.Link=function(b){var c=this;if(b===!1)return c.each(function(){this.linkAPI&&(a.map(this.linkAPI,function(a){a.remove()}),delete this.linkAPI)});if(void 0===b)b=0;else if("string"!=typeof b)throw new Error("Flag must be string.");return{to:function(a,d,e){return c.each(function(){j.call(this,b,a,d,e)})}}}}(window.jQuery||window.Zepto),function(a){"use strict";function b(b){return a.grep(b,function(c,d){return d===a.inArray(c,b)})}function c(a,b){return Math.round(a/b)*b}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function f(a,b,c){a.addClass(b),setTimeout(function(){a.removeClass(b)},c)}function g(a){return Math.max(Math.min(a,100),0)}function h(b){return a.isArray(b)?b:[b]}function i(a){var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){return 100/(b-a)}function k(a,b){return 100*b/(a[1]-a[0])}function l(a,b){return k(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function m(a,b){return b*(a[1]-a[0])/100+a[0]}function n(a,b){for(var c=1;a>=b[c];)c+=1;return c}function o(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=n(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+l([d,e],c)/j(f,g)}function p(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=n(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],m([d,e],(c-f)*j(f,g))}function q(a,b,d,e){if(100===e)return e;var f,g,h=n(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):b[h-1]?a[h-1]+c(e-a[h-1],b[h-1]):e}function r(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function s(a,b,c){return b?void(c.xSteps[a]=k([c.xVal[a],c.xVal[a+1]],b)/j(c.xPct[a],c.xPct[a+1])):!0}function t(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)r(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)s(e,this.xNumSteps[e],this)}function u(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function v(b,c){if("object"!=typeof c||a.isArray(c))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===c.min||void 0===c.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");b.spectrum=new t(c,b.snap,b.dir,b.singleStep)}function w(b,c){if(c=h(c),!a.isArray(c)||!c.length||c.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");b.handles=c.length,b.start=c}function x(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function y(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function z(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function A(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function B(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function C(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function D(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function E(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function F(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function G(b){var c,d={margin:0,limit:0,animate:!0,format:Z};return c={step:{r:!1,t:u},start:{r:!0,t:w},connect:{r:!0,t:z},direction:{r:!0,t:D},snap:{r:!1,t:x},animate:{r:!1,t:y},range:{r:!0,t:v},orientation:{r:!1,t:A},margin:{r:!1,t:B},limit:{r:!1,t:C},behaviour:{r:!0,t:E},format:{r:!1,t:F}},b=a.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},b),a.each(c,function(a,c){if(void 0===b[a]){if(c.r)throw new Error("noUiSlider: '"+a+"' is required.");return!0}c.t(d,b[a])}),d.style=d.ort?"top":"left",d}function H(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[g(d),g(e)]):[d,e]}function I(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),a.originalEvent&&(a=a.originalEvent),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e,g}function J(b,c){var d=a("<div><div/></div>").addClass(Y[2]),e=["-lower","-upper"];return b&&e.reverse(),d.children().addClass(Y[3]+" "+Y[3]+e[c]),d}function K(a,b,c){switch(a){case 1:b.addClass(Y[7]),c[0].addClass(Y[6]);break;case 3:c[1].addClass(Y[6]);case 2:c[0].addClass(Y[7]);case 0:b.addClass(Y[6])}}function L(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(J(b,d).appendTo(c));return e}function M(b,c,d){return d.addClass([Y[0],Y[8+b],Y[4+c]].join(" ")),a("<div/>").appendTo(d).addClass(Y[1])}function N(b,c,d){function e(){return C[["width","height"][c.ort]]()}function j(a){var b,c=[E.val()];for(b=0;b<a.length;b+=1)E.trigger(a[b],c)}function k(a){return 1===a.length?a[0]:c.dir?a.reverse():a}function l(a){return function(b,c){E.val([a?null:c,a?c:null],!0)}}function m(b){var c=a.inArray(b,N);E[0].linkAPI&&E[0].linkAPI[b]&&E[0].linkAPI[b].change(J[c],D[c].children(),E)}function n(b,d){var e=a.inArray(b,N);return d&&d.appendTo(D[e].children()),c.dir&&c.handles>1&&(e=1===e?0:1),l(e)}function o(){var a,b;for(a=0;a<N.length;a+=1)this.linkAPI&&this.linkAPI[b=N[a]]&&this.linkAPI[b].reconfirm(b)}function p(a,b,d,e){return a=a.replace(/\s/g,W+" ")+W,b.on(a,function(a){return E.attr("disabled")?!1:E.hasClass(Y[14])?!1:(a=I(a),a.calcPoint=a.points[c.ort],void d(a,e))})}function q(a,b){var c,d=b.handles||D,f=!1,g=100*(a.calcPoint-b.start)/e(),h=d[0][0]!==D[0][0]?1:0;c=H(g,b.positions,d.length>1),f=v(d[0],c[h],1===d.length),d.length>1&&(f=v(d[1],c[h?0:1],!1)||f),f&&j(["slide"])}function r(b){a("."+Y[15]).removeClass(Y[15]),b.cursor&&a("body").css("cursor","").off(W),U.off(W),E.removeClass(Y[12]),j(["set","change"])}function s(b,c){1===c.handles.length&&c.handles[0].children().addClass(Y[15]),b.stopPropagation(),p(X.move,U,q,{start:b.calcPoint,handles:c.handles,positions:[F[0],F[D.length-1]]}),p(X.end,U,r,null),b.cursor&&(a("body").css("cursor",a(b.target).css("cursor")),D.length>1&&E.addClass(Y[12]),a("body").on("selectstart"+W,!1))}function t(b){var d,g=b.calcPoint,h=0;b.stopPropagation(),a.each(D,function(){h+=this.offset()[c.style]}),h=h/2>g||1===D.length?0:1,g-=C.offset()[c.style],d=100*g/e(),c.events.snap||f(E,Y[14],300),v(D[h],d),j(["slide","set","change"]),c.events.snap&&s(b,{handles:[D[h]]})}function u(a){var b,c;if(!a.fixed)for(b=0;b<D.length;b+=1)p(X.start,D[b].children(),s,{handles:[D[b]]});a.tap&&p(X.start,C,t,{handles:D}),a.drag&&(c=C.find("."+Y[7]).addClass(Y[10]),a.fixed&&(c=c.add(C.children().not(c).children())),p(X.start,c,s,{handles:D}))}function v(a,b,d){var e=a[0]!==D[0][0]?1:0,f=F[0]+c.margin,h=F[1]-c.margin,i=F[0]+c.limit,j=F[1]-c.limit;return D.length>1&&(b=e?Math.max(b,f):Math.min(b,h)),d!==!1&&c.limit&&D.length>1&&(b=e?Math.min(b,i):Math.max(b,j)),b=G.getStep(b),b=g(parseFloat(b.toFixed(7))),b===F[e]?!1:(a.css(c.style,b+"%"),a.is(":first-child")&&a.toggleClass(Y[17],b>50),F[e]=b,J[e]=G.fromStepping(b),m(N[e]),!0)}function w(a,b){var d,e,f;for(c.limit&&(a+=1),d=0;a>d;d+=1)e=d%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=c.format.from(f),(f===!1||isNaN(f)||v(D[e],G.toStepping(f),d===3-c.dir)===!1)&&m(N[e]))}function x(a){if(E[0].LinkIsEmitting)return this;var b,d=h(a);return c.dir&&c.handles>1&&d.reverse(),c.animate&&-1!==F[0]&&f(E,Y[14],300),b=D.length>1?3:1,1===d.length&&(b=1),w(b,d),j(["set"]),this}function y(){var a,b=[];for(a=0;a<c.handles;a+=1)b[a]=c.format.to(J[a]);return k(b)}function z(){return a(this).off(W).removeClass(Y.join(" ")).empty(),delete this.LinkUpdate,delete this.LinkConfirm,delete this.LinkDefaultFormatter,delete this.LinkDefaultFlag,delete this.reappend,delete this.vGet,delete this.vSet,delete this.getCurrentStep,delete this.getInfo,delete this.destroy,d}function A(){var b=a.map(F,function(a,b){var c=G.getApplicableStep(a),d=i(String(c[2])),e=J[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),h=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[[h,f]]});return k(b)}function B(){return d}var C,D,E=a(b),F=[-1,-1],G=c.spectrum,J=[],N=["lower","upper"].slice(0,c.handles);if(c.dir&&N.reverse(),b.LinkUpdate=m,b.LinkConfirm=n,b.LinkDefaultFormatter=c.format,b.LinkDefaultFlag="lower",b.reappend=o,E.hasClass(Y[0]))throw new Error("Slider was already initialized.");C=M(c.dir,c.ort,E),D=L(c.handles,c.dir,C),K(c.connect,E,D),u(c.events),b.vSet=x,b.vGet=y,b.destroy=z,b.getCurrentStep=A,b.getOriginalOptions=B,b.getInfo=function(){return[G,c.style,c.ort]},E.val(c.start)}function O(a){var b=G(a,this);return this.each(function(){N(this,b,a)})}function P(b){return this.each(function(){if(!this.destroy)return void a(this).noUiSlider(b);var c=a(this).val(),d=this.destroy(),e=a.extend({},d,b);a(this).noUiSlider(e),this.reappend(),d.start===e.start&&a(this).val(c)})}function Q(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}function R(b,c,d,e){if("range"===c||"steps"===c)return b.xVal;if("count"===c){var f,g=100/(d-1),h=0;for(d=[];(f=h++*g)<=100;)d.push(f);c="positions"}return"positions"===c?a.map(d,function(a){return b.fromStepping(e?b.getStep(a):a)}):"values"===c?e?a.map(d,function(a){return b.fromStepping(b.getStep(b.toStepping(a)))}):d:void 0}function S(c,d,e,f){var g=c.direction,h={},i=c.xVal[0],j=c.xVal[c.xVal.length-1],k=!1,l=!1,m=0;return c.direction=0,f=b(f.slice().sort(function(a,b){return a-b})),f[0]!==i&&(f.unshift(i),k=!0),f[f.length-1]!==j&&(f.push(j),l=!0),a.each(f,function(b){var g,i,j,n,o,p,q,r,s,t,u=f[b],v=f[b+1];if("steps"===e&&(g=c.xNumSteps[b]),g||(g=v-u),u!==!1&&void 0!==v)for(i=u;v>=i;i+=g){for(n=c.toStepping(i),o=n-m,r=o/d,s=Math.round(r),t=o/s,j=1;s>=j;j+=1)p=m+j*t,h[p.toFixed(5)]=["x",0];q=a.inArray(i,f)>-1?1:"steps"===e?2:0,!b&&k&&(q=0),i===v&&l||(h[n.toFixed(5)]=[i,q]),m=n}}),c.direction=g,h}function T(b,c,d,e,f,g){function h(a){return["-normal","-large","-sub"][a]}function i(a,c,d){return'class="'+c+" "+c+"-"+k+" "+c+h(d[1],d[0])+'" style="'+b+": "+a+'%"'}function j(a,b){d&&(a=100-a),b[1]=b[1]&&f?f(b[0],b[1]):b[1],l.append("<div "+i(a,"noUi-marker",b)+"></div>"),b[1]&&l.append("<div "+i(a,"noUi-value",b)+">"+g.to(b[0])+"</div>")}var k=["horizontal","vertical"][c],l=a("<div/>");return l.addClass("noUi-pips noUi-pips-"+k),a.each(e,j),l}var U=a(document),V=a.fn.val,W=".nui",X=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},Y=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];t.prototype.getMargin=function(a){return 2===this.xPct.length?k(this.xVal,a):!1},t.prototype.toStepping=function(a){return a=o(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},t.prototype.fromStepping=function(a){return this.direction&&(a=100-a),e(p(this.xVal,this.xPct,a))},t.prototype.getStep=function(a){return this.direction&&(a=100-a),a=q(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},t.prototype.getApplicableStep=function(a){var b=n(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},t.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var Z={to:function(a){return a.toFixed(2)},from:Number};a.fn.val=function(b){function c(a){return a.hasClass(Y[0])?Q:V}if(!arguments.length){var d=a(this[0]);return c(d).call(d)}var e=a.isFunction(b);return this.each(function(d){var f=b,g=a(this);e&&(f=b.call(this,d,g.val())),c(g).call(g,f)})},a.fn.noUiSlider=function(a,b){switch(a){case"step":return this[0].getCurrentStep();case"options":return this[0].getOriginalOptions()}return(b?P:O).call(this,a)},a.fn.noUiSlider_pips=function(b){var c=b.mode,d=b.density||1,e=b.filter||!1,f=b.values||!1,g=b.format||{to:Math.round},h=b.stepped||!1;return this.each(function(){var b=this.getInfo(),i=R(b[0],c,f,h),j=S(b[0],d,c,i);return a(this).append(T(b[1],b[2],b[0].direction,j,e,g))})}}(window.jQuery||window.Zepto);

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function c(a){var b="text"==a||"tel"==a;if(!b){var c=document.createElement("input");c.setAttribute("type",a),b="text"===c.type,c=null}return b}function d(b,c,e){var f=e.aliases[b];return f?(f.alias&&d(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,c),!0):!1}function e(b){function c(c){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(c,d,e){var f=b.definitions[d],g=0==c.matches.length;if(e=void 0!=e?e:c.matches.length,f&&!m){f.placeholder=a.isFunction(f.placeholder)?f.placeholder.call(this,b):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,n=k.cardinality;c.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:n?n:1,optionality:c.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}c.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:c.isOptional,newBlockMarker:g,casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else c.matches.splice(e++,0,{fn:null,cardinality:0,optionality:c.isOptional,newBlockMarker:g,casing:null,def:d,placeholder:void 0,mask:d}),m=!1}for(var f,g,h,i,j,k,l=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,m=!1,n=new d,o=[],p=[];f=l.exec(c);)switch(g=f[0],g.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:if(h=o.pop(),o.length>0){if(i=o[o.length-1],i.matches.push(h),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.push(h);break;case b.optionalmarker.start:o.push(new d(!1,!0));break;case b.groupmarker.start:o.push(new d(!0));break;case b.quantifiermarker.start:var r=new d(!1,!1,!0);g=g.replace(/[{}]/g,"");var s=g.split(","),t=isNaN(s[0])?s[0]:parseInt(s[0]),u=1==s.length?t:isNaN(s[1])?s[1]:parseInt(s[1]);if(("*"==u||"+"==u)&&(t="*"==u?0:1),r.quantifier={min:t,max:u},o.length>0){var v=o[o.length-1].matches;if(f=v.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}v.push(f),v.push(r)}else{if(f=n.matches.pop(),!f.isGroup){var w=new d(!0);w.matches.push(f),f=w}n.matches.push(f),n.matches.push(r)}break;case b.escapeChar:m=!0;break;case b.alternatormarker:o.length>0?(i=o[o.length-1],k=i.matches.pop()):k=n.matches.pop(),k.isAlternator?o.push(k):(j=new d(!1,!1,!1,!0),j.matches.push(k),o.push(j));break;default:if(o.length>0){if(i=o[o.length-1],i.matches.length>0&&(k=i.matches[i.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end))),e(i,g),i.isAlternator){j=o.pop();for(var q=0;q<j.matches.length;q++)j.matches[q].isGroup=!1;o.length>0?(i=o[o.length-1],i.matches.push(j)):n.matches.push(j)}}else n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end))),e(n,g)}return n.matches.length>0&&(k=n.matches[n.matches.length-1],k.isGroup&&(k.isGroup=!1,e(k,b.groupmarker.start,0),e(k,b.groupmarker.end)),p.push(n)),p}function d(d,e){if(void 0==d||""==d)return void 0;if(1==d.length&&0==b.greedy&&0!=b.repeat&&(b.placeholder=""),b.repeat>0||"*"==b.repeat||"+"==b.repeat){var f="*"==b.repeat?0:"+"==b.repeat?1:b.repeat;d=b.groupmarker.start+d+b.groupmarker.end+b.quantifiermarker.start+f+","+b.repeat+b.quantifiermarker.end}return void 0==a.inputmask.masksCache[d]&&(a.inputmask.masksCache[d]={mask:d,maskToken:c(d),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:e}),a.extend(!0,{},a.inputmask.masksCache[d])}function e(a){if(a=a.toString(),b.numericInput){a=a.split("").reverse();for(var c=0;c<a.length;c++)a[c]==b.optionalmarker.start?a[c]=b.optionalmarker.end:a[c]==b.optionalmarker.end?a[c]=b.optionalmarker.start:a[c]==b.groupmarker.start?a[c]=b.groupmarker.end:a[c]==b.groupmarker.end&&(a[c]=b.groupmarker.start);a=a.join("")}return a}var f=void 0;if(a.isFunction(b.mask)&&(b.mask=b.mask.call(this,b)),a.isArray(b.mask)){if(b.mask.length>1){b.keepStatic=void 0==b.keepStatic?!0:b.keepStatic;var g="(";return a.each(b.mask,function(b,c){g.length>1&&(g+=")|("),g+=e(void 0==c.mask||a.isFunction(c.mask)?c:c.mask)}),g+=")",d(g,b.mask)}b.mask=b.mask.pop()}return b.mask&&(f=void 0==b.mask.mask||a.isFunction(b.mask.mask)?d(e(b.mask),b.mask):d(e(b.mask.mask),b.mask)),f}function f(d,e,f){function g(a,b,c){b=b||0;var d,e,f,g=[],h=0;do{if(a===!0&&k().validPositions[h]){var i=k().validPositions[h];e=i.match,d=i.locator.slice(),g.push(c===!0?i.input:F(h,e))}else{if(b>h){var j=s(h,d,h-1);f=j[0]}else f=p(h,d,h-1);e=f.match,d=f.locator.slice(),g.push(F(h,e))}h++}while((void 0==db||db>h-1)&&null!=e.fn||null==e.fn&&""!=e.def||b>=h);return g.pop(),g}function k(){return e}function l(a){var b=k();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function m(a){var b=k(),c=-1,d=b.validPositions;void 0==a&&(a=-1);var e=c,f=c;for(var g in d){var h=parseInt(g);(-1==a||null!=d[h].match.fn)&&(a>=h&&(e=h),h>=a&&(f=h))}return c=-1!=e&&a-e>1||a>f?e:f}function n(b,c,d){if(f.insertMode&&void 0!=k().validPositions[b]&&void 0==d){var e,g=a.extend(!0,{},k().validPositions),h=m();for(e=b;h>=e;e++)delete k().validPositions[e];k().validPositions[b]=c;var i,j=!0;for(e=b;h>=e;e++){var l=g[e];if(void 0!=l){var n=k().validPositions;i=!f.keepStatic&&n[e]&&(void 0!=n[e+1]&&s(e+1,n[e].locator.slice(),e).length>1||void 0!=n[e].alternation)?e+1:B(e),j=r(i,l.match.def)?j&&y(i,l.input,!0,!0)!==!1:null==l.match.fn}if(!j)break}if(!j)return k().validPositions=a.extend(!0,{},g),!1}else k().validPositions[b]=c;return!0}function o(a,b,c){var d,e,g=a;void 0!=k().validPositions[a]&&k().validPositions[a].input==f.radixPoint&&(b++,g++);for(d=g;b>d;d++)void 0!=k().validPositions[d]&&(c===!0||0!=f.canClearPosition(k(),d,m(),f))&&delete k().validPositions[d];for(l(!0),d=g+1;d<=m();){for(;void 0!=(e=k().validPositions[g]);)g++;g>d&&(d=g+1);var h=k().validPositions[d];void 0!=h&&void 0==e?(r(g,h.match.def)&&y(g,h.input,!0)!==!1&&(delete k().validPositions[d],d++),g++):d++}var i=m();i>=a&&void 0!=k().validPositions[i]&&k().validPositions[i].input==f.radixPoint&&delete k().validPositions[i],l(!0)}function p(a,b,c){for(var d,e=s(a,b,c),g=m(),h=k().validPositions[g]||s(0)[0],i=void 0!=h.alternation?h.locator[h.alternation].split(","):[],j=0;j<e.length&&(d=e[j],!(d.match&&(f.greedy&&d.match.optionalQuantifier!==!0||(d.match.optionality===!1||d.match.newBlockMarker===!1)&&d.match.optionalQuantifier!==!0)&&(void 0==h.alternation||void 0!=d.locator[h.alternation]&&x(d.locator[h.alternation].toString().split(","),i))));j++);return d}function q(a){return k().validPositions[a]?k().validPositions[a].match:s(a)[0].match}function r(a,b){for(var c=!1,d=s(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){c=!0;break}return c}function s(b,c,d){function e(c,d,f,h){function l(f,h,n){if(g>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+k().mask),!0;if(g==b&&void 0==f.matches)return i.push({match:f,locator:h.reverse()}),!0;if(void 0!=f.matches){if(f.isGroup&&n!==!0){if(f=l(c.matches[m+1],h))return!0}else if(f.isOptional){var o=f;if(f=e(f,d,h,n)){var p=i[i.length-1].match,q=0==a.inArray(p,o.matches);q&&(j=!0),g=b}}else if(f.isAlternator){var r,s=f,t=[],u=i.slice(),v=h.length,w=d.length>0?d.shift():-1;if(-1==w||"string"==typeof w){var x,y=g,z=d.slice();"string"==typeof w&&(x=w.split(","));for(var A=0;A<s.matches.length;A++){i=[],f=l(s.matches[A],[A].concat(h),n)||f,r=i.slice(),g=y,i=[];for(var B=0;B<z.length;B++)d[B]=z[B];for(var C=0;C<r.length;C++)for(var D=r[C],E=0;E<t.length;E++){var F=t[E];if(D.match.mask==F.match.mask&&("string"!=typeof w||-1!=a.inArray(D.locator[v].toString(),x))){r.splice(C,1),F.locator[v]=F.locator[v]+","+D.locator[v],F.alternation=v;break}}t=t.concat(r)}"string"==typeof w&&(t=a.map(t,function(b,c){if(isFinite(c)){var d,e=b.locator[v].toString().split(",");b.locator[v]=void 0,b.alternation=void 0;for(var f=0;f<e.length;f++)d=-1!=a.inArray(e[f],x),d&&(void 0!=b.locator[v]?(b.locator[v]+=",",b.alternation=v,b.locator[v]+=e[f]):b.locator[v]=parseInt(e[f]));if(void 0!=b.locator[v])return b}})),i=u.concat(t),j=!0}else f=l(s.matches[w],[w].concat(h),n);if(f)return!0}else if(f.isQuantifier&&n!==!0)for(var G=f,H=d.length>0&&n!==!0?d.shift():0;H<(isNaN(G.quantifier.max)?H+1:G.quantifier.max)&&b>=g;H++){var I=c.matches[a.inArray(G,c.matches)-1];if(f=l(I,[H].concat(h),!0)){var p=i[i.length-1].match;p.optionalQuantifier=H>G.quantifier.min-1;var q=0==a.inArray(p,I.matches);if(q){if(H>G.quantifier.min-1){j=!0,g=b;break}return!0}return!0}}else if(f=e(f,d,h,n))return!0}else g++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var n=l(c.matches[m],[m].concat(f),h);if(n&&g==b)return n;if(g>b)break}}var f=k().maskToken,g=c?d:0,h=c||[0],i=[],j=!1;if(void 0==c){for(var l,m=b-1;void 0==(l=k().validPositions[m])&&m>-1;)m--;if(void 0!=l&&m>-1)g=m,h=l.locator.slice();else{for(m=b-1;void 0==(l=k().tests[m])&&m>-1;)m--;void 0!=l&&m>-1&&(g=m,h=l[0].locator.slice())}}for(var n=h.shift();n<f.length;n++){var o=e(f[n],h,[n]);if(o&&g==b||g>b)break}return(0==i.length||j)&&i.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),k().tests[b]=a.extend(!0,[],i),k().tests[b]}function t(){return void 0==k()._buffer&&(k()._buffer=g(!1,1)),k()._buffer}function u(){return void 0==k().buffer&&(k().buffer=g(!0,m(),!0)),k().buffer}function v(a,b,c){if(c=c||u().slice(),a===!0)l(),a=0,b=c.length;else for(var d=a;b>d;d++)delete k().validPositions[d],delete k().tests[d];for(var d=a;b>d;d++)c[d]!=f.skipOptionalPartCharacter&&y(d,c[d],!0,!0)}function w(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function x(b,c){for(var d=f.greedy?c:c.slice(0,1),e=!1,g=0;g<b.length;g++)if(-1!=a.inArray(b[g],d)){e=!0;break}return e}function y(b,c,d,e){function g(b,c,d,e){var g=!1;return a.each(s(b),function(h,i){for(var j=i.match,p=c?1:0,q="",r=(u(),j.cardinality);r>p;r--)q+=D(b-(r-1));if(c&&(q+=c),g=null!=j.fn?j.fn.test(q,k(),b,d,f):c!=j.def&&c!=f.skipOptionalPartCharacter||""==j.def?!1:{c:j.def,pos:b},g!==!1){var s=void 0!=g.c?g.c:c;s=s==f.skipOptionalPartCharacter&&null===j.fn?j.def:s;var t=b;if(void 0!=g.remove&&o(g.remove,g.remove+1,!0),g.refreshFromBuffer){var x=g.refreshFromBuffer;if(d=!0,v(x===!0?x:x.start,x.end),void 0==g.pos&&void 0==g.c)return g.pos=m(),!1;if(t=void 0!=g.pos?g.pos:b,t!=b)return g=a.extend(g,y(t,s,!0)),!1}else if(g!==!0&&void 0!=g.pos&&g.pos!=b&&(t=g.pos,v(b,t),t!=b))return g=a.extend(g,y(t,s,!0)),!1;return 1!=g&&void 0==g.pos&&void 0==g.c?!1:(h>0&&l(!0),n(t,a.extend({},i,{input:w(s,j)}),e)||(g=!1),!1)}}),g}function h(b,c,d,e){var g,h,i=a.extend(!0,{},k().validPositions);for(g=m();g>=0;g--)if(k().validPositions[g]&&void 0!=k().validPositions[g].alternation){h=k().validPositions[g].alternation;break}if(void 0!=h)for(var j in k().validPositions)if(parseInt(j)>parseInt(g)&&void 0===k().validPositions[j].alternation){for(var n=k().validPositions[j],o=n.locator[h],p=k().validPositions[g].locator[h].split(","),q=0;q<p.length;q++)if(o<p[q]){for(var r,s,t=j-1;t>=0;t--)if(r=k().validPositions[t],void 0!=r){s=r.locator[h],r.locator[h]=p[q];break}if(o!=r.locator[h]){for(var v=u().slice(),w=j;w<m()+1;w++)delete k().validPositions[w],delete k().tests[w];l(!0),f.keepStatic=!f.keepStatic;for(var w=j;w<v.length;w++)v[w]!=f.skipOptionalPartCharacter&&y(m()+1,v[w],!1,!0);r.locator[h]=s;var x=y(b,c,d,e);if(f.keepStatic=!f.keepStatic,x)return x;l(),k().validPositions=a.extend(!0,{},i)}}break}return!1}function i(b,c){for(var d=k().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(!z(g)){var h=s(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;f>c;c++)b.locator[c]&&x(b.locator[c].toString().split(","),e[c].toString().split(","))&&c>j&&(j=c,i=b)}),n(g,a.extend({},i,{input:i.match.def}),!0)}}d=d===!0;for(var j=u(),p=b-1;p>-1&&!k().validPositions[p];p--);for(p++;b>p;p++)void 0==k().validPositions[p]&&((!z(p)||j[p]!=F(p))&&s(p).length>1||j[p]==f.radixPoint||"0"==j[p]&&a.inArray(f.radixPoint,j)<p)&&g(p,j[p],!0);var q=b,r=!1;if(e&&q>=A()&&l(!0),q<A()&&(r=g(q,c,d,e),!d&&r===!1)){var t=k().validPositions[q];if(!t||null!=t.match.fn||t.match.def!=c&&c!=f.skipOptionalPartCharacter){if((f.insertMode||void 0==k().validPositions[B(q)])&&!z(q))for(var C=q+1,E=B(q);E>=C;C++)if(r=g(C,c,d,e),r!==!1){i(q,C),q=C;break}}else r={caret:B(q)}}return r===!1&&f.keepStatic&&N(j)&&(r=h(b,c,d,e)),r===!0&&(r={pos:q}),r}function z(a){var b=q(a);return null!=b.fn?b.fn:!1}function A(){var a;db=cb.prop("maxLength"),-1==db&&(db=void 0);var b,c=m(),d=k().validPositions[c],e=void 0!=d?d.locator.slice():void 0;for(b=c+1;void 0==d||null!=d.match.fn||null==d.match.fn&&""!=d.match.def;b++)d=p(b,e,b-1),e=d.locator.slice();return a=b,void 0==db||db>a?a:db}function B(a){var b=A();if(a>=b)return b;for(var c=a;++c<b&&!z(c)&&(f.nojumps!==!0||f.nojumpsThreshold>c););return c}function C(a){var b=a;if(0>=b)return 0;for(;--b>0&&!z(b););return b}function D(a){return void 0==k().validPositions[a]?F(a):k().validPositions[a].input}function E(b,c,d,e,g){if(e&&a.isFunction(f.onBeforeWrite)){var h=f.onBeforeWrite.call(b,e,c,d,f);if(h&&h.refreshFromBuffer){var i=h.refreshFromBuffer;v(i===!0?i:i.start,i.end,h.buffer),l(!0),d=h.caret||d}}b._valueSet(c.join("")),void 0!=d&&K(b,d),g===!0&&(gb=!0,a(b).trigger("input"))}function F(a,b){return b=b||q(a),void 0!=b.placeholder?b.placeholder:null==b.fn?b.def:f.placeholder.charAt(a%f.placeholder.length)}function G(b,c,d,e){function f(){var a=!1,b=t().slice(n,B(n)).join("").indexOf(j);if(-1!=b&&!z(n)){a=!0;for(var c=t().slice(n,n+b),d=0;d<c.length;d++)if(" "!=c[d]){a=!1;break}}return a}var g=void 0!=e?e.slice():b._valueGet().split("");l(),k().p=B(-1),c&&b._valueSet("");var h=t().slice(0,B(-1)).join(""),i=g.join("").match(new RegExp(H(h),"g"));i&&i.length>0&&g.splice(0,h.length*i.length);var j="",n=0;a.each(g,function(c,e){var g=a.Event("keypress");g.which=e.charCodeAt(0),j+=e;var h=m(),i=k().validPositions[h],l=p(h+1,i?i.locator.slice():void 0,h);if(!f()||d){var o=d?c:null==l.match.fn&&l.match.optionality&&h+1<k().p?h+1:k().p;T.call(b,g,!0,!1,d,o),n=o+1,j=""}else T.call(b,g,!0,!1,!0,h+1)}),c&&E(b,u(),a(b).is(":focus")?B(m(0)):void 0,a.Event("checkval"))}function H(b){return a.inputmask.escapeRegex.call(this,b)}function I(b){if(b.data("_inputmask")&&!b.hasClass("hasDatepicker")){var c=[],d=k().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var g=(eb?c.reverse():c).join(""),h=(eb?u().slice().reverse():u()).join("");return a.isFunction(f.onUnMask)&&(g=f.onUnMask.call(b,h,g,f)||g),g}return b[0]._valueGet()}function J(a){if(eb&&"number"==typeof a&&(!f.greedy||""!=f.placeholder)){var b=u().length;a=b-a}return a}function K(b,c,d){var e,g=b.jquery&&b.length>0?b[0]:b;if("number"!=typeof c)return g.setSelectionRange?(c=g.selectionStart,d=g.selectionEnd):document.selection&&document.selection.createRange&&(e=document.selection.createRange(),c=0-e.duplicate().moveStart("character",-1e5),d=c+e.text.length),{begin:J(c),end:J(d)};if(c=J(c),d=J(d),d="number"==typeof d?d:c,a(g).is(":visible")){var h=a(g).css("font-size").replace("px","")*d;g.scrollLeft=h>g.scrollWidth?h:0,0==f.insertMode&&c==d&&d++,g.setSelectionRange?(g.selectionStart=c,g.selectionEnd=d):g.createTextRange&&(e=g.createTextRange(),e.collapse(!0),e.moveEnd("character",d),e.moveStart("character",c),e.select())}}function L(b){var c,d,e=u(),f=e.length,g=m(),h={},i=k().validPositions[g],j=void 0!=i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=p(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var l=i&&void 0!=i.alternation?i.locator[i.alternation].split(","):[];for(c=f-1;c>g&&(d=h[c].match,(d.optionality||d.optionalQuantifier||i&&void 0!=i.alternation&&void 0!=h[c].locator[i.alternation]&&-1!=a.inArray(h[c].locator[i.alternation].toString(),l))&&e[c]==F(c,d));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function M(a){for(var b=L(),c=a.length-1;c>b&&!z(c);c--);a.splice(b,c+1-b)}function N(b){if(a.isFunction(f.isComplete))return f.isComplete.call(cb,b,f);if("*"==f.repeat)return void 0;var c=!1,d=L(!0),e=C(d.l),g=m();if(g==e&&(void 0==d.def||d.def.newBlockMarker||d.def.optionalQuantifier)){c=!0;for(var h=0;e>=h;h++){var i=z(h);if(i&&(void 0==b[h]||b[h]==F(h))||!i&&b[h]!=F(h)){c=!1;break}}}return c}function O(a,b){return eb?a-b>1||a-b==1&&f.insertMode:b-a>1||b-a==1&&f.insertMode}function P(b){var c=a._data(b).events;a.each(c,function(b,c){a.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(!this.disabled&&(!this.readOnly||"keydown"==a.type&&a.ctrlKey&&67==a.keyCode)){switch(a.type){case"input":if(gb===!0)return gb=!1,a.preventDefault();break;case"keydown":fb=!1;break;case"keypress":if(fb===!0)return a.preventDefault();fb=!0;break;case"compositionstart":break;case"compositionupdate":gb=!0;break;case"compositionend":}return c.apply(this,arguments)}a.preventDefault()}}})})}function Q(b){function c(b){if(void 0==a.valHooks[b]||1!=a.valHooks[b].inputmaskpatch){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(b){var d=a(b);if(d.data("_inputmask")){if(d.data("_inputmask").opts.autoUnmask)return d.inputmask("unmaskedvalue");var e=c(b),f=d.data("_inputmask"),g=f.maskset,h=g._buffer;return h=h?h.join(""):"",e!=h?e:""}return c(b)},set:function(b,c){var e,f=a(b),g=f.data("_inputmask");return g?(e=d(b,a.isFunction(g.opts.onBeforeMask)?g.opts.onBeforeMask.call(nb,c,g.opts)||c:c),f.triggerHandler("setvalue.inputmask")):e=d(b,c),e},inputmaskpatch:!0}}}function d(){var b=a(this),c=a(this).data("_inputmask");return c?c.opts.autoUnmask?b.inputmask("unmaskedvalue"):h.call(this)!=t().join("")?h.call(this):"":h.call(this)}function e(b){var c=a(this).data("_inputmask");c?(i.call(this,a.isFunction(c.opts.onBeforeMask)?c.opts.onBeforeMask.call(nb,b,c.opts)||b:b),a(this).triggerHandler("setvalue.inputmask")):i.call(this,b)}function g(b){a(b).bind("mouseenter.inputmask",function(){var b=a(this),c=this,d=c._valueGet();""!=d&&d!=u().join("")&&(this._valueSet(a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(nb,d,f)||d:d),b.triggerHandler("setvalue.inputmask"))});//!! the bound handlers are executed in the order they where bound
var c=a._data(b).events,d=c.mouseover;if(d){for(var e=d[d.length-1],g=d.length-1;g>0;g--)d[g]=d[g-1];d[0]=e}}var h,i;if(!b._valueGet){if(Object.getOwnPropertyDescriptor){Object.getOwnPropertyDescriptor(b,"value")}document.__lookupGetter__&&b.__lookupGetter__("value")?(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e)):(h=function(){return b.value},i=function(a){b.value=a},c(b.type),g(b)),b._valueGet=function(a){return eb&&a!==!0?h.call(this).split("").reverse().join(""):h.call(this)},b._valueSet=function(a){i.call(this,eb?a.split("").reverse().join(""):a)}}}function R(b,c,d){function e(){if(f.keepStatic){l(!0);var c,d=[];for(c=m();c>=0;c--)if(k().validPositions[c]){if(void 0!=k().validPositions[c].alternation)break;d.push(k().validPositions[c].input),delete k().validPositions[c]}if(c>0)for(;d.length>0;){k().p=B(m());var e=a.Event("keypress");e.which=d.pop().charCodeAt(0),T.call(b,e,!0,!1,!1,k().p)}}}if((f.numericInput||eb)&&(c==a.inputmask.keyCode.BACKSPACE?c=a.inputmask.keyCode.DELETE:c==a.inputmask.keyCode.DELETE&&(c=a.inputmask.keyCode.BACKSPACE),eb)){var g=d.end;d.end=d.begin,d.begin=g}c==a.inputmask.keyCode.BACKSPACE&&d.end-d.begin<=1?d.begin=C(d.begin):c==a.inputmask.keyCode.DELETE&&d.begin==d.end&&d.end++,o(d.begin,d.end),e();var h=m(d.begin);h<d.begin?(-1==h&&l(),k().p=B(h)):k().p=d.begin}function S(c){var d=this,e=a(d),g=c.keyCode,i=K(d);g==a.inputmask.keyCode.BACKSPACE||g==a.inputmask.keyCode.DELETE||h&&127==g||c.ctrlKey&&88==g&&!b("cut")?(c.preventDefault(),88==g&&(_=u().join("")),R(d,g,i),E(d,u(),k().p,c,_!=u().join("")),d._valueGet()==t().join("")&&e.trigger("cleared"),f.showTooltip&&e.prop("title",k().mask)):g==a.inputmask.keyCode.END||g==a.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var a=B(m());f.insertMode||a!=A()||c.shiftKey||a--,K(d,c.shiftKey?i.begin:a,a)},0):g==a.inputmask.keyCode.HOME&&!c.shiftKey||g==a.inputmask.keyCode.PAGE_UP?K(d,0,c.shiftKey?i.begin:0):f.undoOnEscape&&g==a.inputmask.keyCode.ESCAPE||90==g&&c.ctrlKey?(G(d,!0,!1,_.split("")),e.click()):g!=a.inputmask.keyCode.INSERT||c.shiftKey||c.ctrlKey?0!=f.insertMode||c.shiftKey||(g==a.inputmask.keyCode.RIGHT?setTimeout(function(){var a=K(d);K(d,a.begin)},0):g==a.inputmask.keyCode.LEFT&&setTimeout(function(){var a=K(d);K(d,eb?a.begin+1:a.begin-1)},0)):(f.insertMode=!f.insertMode,K(d,f.insertMode||i.begin!=A()?i.begin:i.begin-1)),hb=-1!=a.inArray(g,f.ignorables)}function T(b,c,d,e,g){var h=this,i=a(h),j=b.which||b.charCode||b.keyCode;if(!(c===!0||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||hb))return!0;if(j){46==j&&0==b.shiftKey&&","==f.radixPoint&&(j=44);var m,o=c?{begin:g,end:g}:K(h),p=String.fromCharCode(j),q=O(o.begin,o.end);q&&(k().undoPositions=a.extend(!0,{},k().validPositions),R(h,a.inputmask.keyCode.DELETE,o),f.insertMode||(f.insertMode=!f.insertMode,n(o.begin,e),f.insertMode=!f.insertMode),q=!f.multi),k().writeOutBuffer=!0;var r=eb&&!q?o.end:o.begin,t=y(r,p,e);if(t!==!1){if(t!==!0&&(r=void 0!=t.pos?t.pos:r,p=void 0!=t.c?t.c:p),l(!0),void 0!=t.caret)m=t.caret;else{var w=k().validPositions;m=!f.keepStatic&&(void 0!=w[r+1]&&s(r+1,w[r].locator.slice(),r).length>1||void 0!=w[r].alternation)?r+1:B(r)}k().p=m}if(d!==!1){var x=this;if(setTimeout(function(){f.onKeyValidation.call(x,t,f)},0),k().writeOutBuffer&&t!==!1){var z=u();E(h,z,c?void 0:f.numericInput?C(m):m,b,c!==!0),c!==!0&&setTimeout(function(){N(z)===!0&&i.trigger("complete")},0)}else q&&(k().buffer=void 0,k().validPositions=k().undoPositions)}else q&&(k().buffer=void 0,k().validPositions=k().undoPositions);if(f.showTooltip&&i.prop("title",k().mask),c&&a.isFunction(f.onBeforeWrite)){var A=f.onBeforeWrite.call(this,b,u(),m,f);if(A&&A.refreshFromBuffer){var D=A.refreshFromBuffer;v(D===!0?D:D.start,D.end,A.buffer),l(!0),A.caret&&(k().p=A.caret)}}b.preventDefault()}}function U(b){var c=(a(this),b.keyCode,u());f.onKeyUp.call(this,b,c,f)}function V(b){var c=this,d=a(c),e=c._valueGet(!0),g=K(c);if("propertychange"==b.type&&c._valueGet().length<=A())return!0;if("paste"==b.type){var h=e.substr(0,g.begin),i=e.substr(g.end,e.length);h==t().slice(0,g.begin).join("")&&(h=""),i==t().slice(g.end).join("")&&(i=""),window.clipboardData&&window.clipboardData.getData?e=h+window.clipboardData.getData("Text")+i:b.originalEvent&&b.originalEvent.clipboardData&&b.originalEvent.clipboardData.getData&&(e=h+b.originalEvent.clipboardData.getData("text/plain")+i)}var j=a.isFunction(f.onBeforePaste)?f.onBeforePaste.call(c,e,f)||e:e;return G(c,!0,!1,eb?j.split("").reverse():j.split("")),d.click(),N(u())===!0&&d.trigger("complete"),!1}function W(b){var c=this;G(c,!0,!1),N(u())===!0&&a(c).trigger("complete"),b.preventDefault()}function X(a){var b=this;_=u().join(""),(""==bb||0!=a.originalEvent.data.indexOf(bb))&&(ab=K(b))}function Y(b){var c=this,d=ab||K(c);0==b.originalEvent.data.indexOf(bb)&&(l(),d={begin:0,end:0});var e=b.originalEvent.data;K(c,d.begin,d.end);for(var g=0;g<e.length;g++){var h=a.Event("keypress");h.which=e.charCodeAt(g),fb=!1,hb=!1,T.call(c,h)}setTimeout(function(){var a=k().p;E(c,u(),f.numericInput?C(a):a)},0),bb=b.originalEvent.data}function Z(){}function $(b){if(cb=a(b),cb.is(":input")&&c(cb.attr("type"))){if(cb.data("_inputmask",{maskset:e,opts:f,isRTL:!1}),f.showTooltip&&cb.prop("title",k().mask),("rtl"==b.dir||f.rightAlign)&&cb.css("text-align","right"),"rtl"==b.dir||f.numericInput){b.dir="ltr",cb.removeAttr("dir");var d=cb.data("_inputmask");d.isRTL=!0,cb.data("_inputmask",d),eb=!0}cb.unbind(".inputmask"),cb.closest("form").bind("submit",function(){_!=u().join("")&&cb.change(),cb[0]._valueGet&&cb[0]._valueGet()==t().join("")&&cb[0]._valueSet(""),f.removeMaskOnSubmit&&cb.inputmask("remove")}).bind("reset",function(){setTimeout(function(){cb.triggerHandler("setvalue.inputmask")},0)}),cb.bind("mouseenter.inputmask",function(){var b=a(this),c=this;!b.is(":focus")&&f.showMaskOnHover&&c._valueGet()!=u().join("")&&E(c,u())}).bind("blur.inputmask",function(b){var c=a(this),d=this;if(c.data("_inputmask")){var e=d._valueGet(),g=u().slice();ib=!0,_!=g.join("")&&(c.change(),_=g.join("")),""!=e&&(f.clearMaskOnLostFocus&&(e==t().join("")?g=[]:M(g)),N(g)===!1&&(c.trigger("incomplete"),f.clearIncomplete&&(l(),g=f.clearMaskOnLostFocus?[]:t().slice())),E(d,g,void 0,b))}}).bind("focus.inputmask",function(){var b=(a(this),this),c=b._valueGet();f.showMaskOnFocus&&(!f.showMaskOnHover||f.showMaskOnHover&&""==c)&&b._valueGet()!=u().join("")&&E(b,u(),B(m())),_=u().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;if(f.clearMaskOnLostFocus){var d=u().slice(),e=c._valueGet();b.is(":focus")||e==b.attr("placeholder")||""==e||(e==t().join("")?d=[]:M(d),E(c,d))}}).bind("click.inputmask",function(){var b=a(this),c=this;if(b.is(":focus")){var d=K(c);if(d.begin==d.end)if(f.radixFocus&&""!=f.radixPoint&&-1!=a.inArray(f.radixPoint,u())&&(ib||u().join("")==t().join("")))K(c,a.inArray(f.radixPoint,u())),ib=!1;else{var e=eb?J(d.begin):d.begin,g=B(m(e));g>e?K(c,z(e)?e:B(e)):K(c,g)}}}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){K(a,0,B(m()))},0)}).bind(j+".inputmask dragdrop.inputmask drop.inputmask",V).bind("setvalue.inputmask",function(){var a=this;G(a,!0,!1),_=u().join(""),(f.clearMaskOnLostFocus||f.clearIncomplete)&&a._valueGet()==t().join("")&&a._valueSet("")}).bind("cut.inputmask",function(b){gb=!0;var c=this,d=a(c),e=K(c);R(c,a.inputmask.keyCode.DELETE,e),E(c,u(),k().p,b,_!=u().join("")),c._valueGet()==t().join("")&&d.trigger("cleared"),f.showTooltip&&d.prop("title",k().mask)}).bind("complete.inputmask",f.oncomplete).bind("incomplete.inputmask",f.onincomplete).bind("cleared.inputmask",f.oncleared),cb.bind("keydown.inputmask",S).bind("keypress.inputmask",T).bind("keyup.inputmask",U),i||cb.bind("compositionstart.inputmask",X).bind("compositionupdate.inputmask",Y).bind("compositionend.inputmask",Z),"paste"===j&&cb.bind("input.inputmask",W),Q(b);var g=a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(b,b._valueGet(),f)||b._valueGet():b._valueGet();G(b,!0,!1,g.split(""));var h=u().slice();_=h.join("");var n;try{n=document.activeElement}catch(o){}N(h)===!1&&f.clearIncomplete&&l(),f.clearMaskOnLostFocus&&(h.join("")==t().join("")?h=[]:M(h)),E(b,h),n===b&&K(b,B(m())),P(b)}}var _,ab,bb,cb,db,eb=!1,fb=!1,gb=!1,hb=!1,ib=!0;if(void 0!=d)switch(d.action){case"isComplete":return cb=a(d.el),e=cb.data("_inputmask").maskset,f=cb.data("_inputmask").opts,N(d.buffer);case"unmaskedvalue":return cb=d.$input,e=cb.data("_inputmask").maskset,f=cb.data("_inputmask").opts,eb=d.$input.data("_inputmask").isRTL,I(d.$input);case"mask":_=u().join(""),$(d.el);break;case"format":cb=a({}),cb.data("_inputmask",{maskset:e,opts:f,isRTL:f.numericInput}),f.numericInput&&(eb=!0);var jb=(a.isFunction(f.onBeforeMask)?f.onBeforeMask.call(cb,d.value,f)||d.value:d.value).split("");return G(cb,!1,!1,eb?jb.reverse():jb),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite.call(this,void 0,u(),0,f),d.metadata?{value:eb?u().slice().reverse().join(""):u().join(""),metadata:cb.inputmask("getmetadata")}:eb?u().slice().reverse().join(""):u().join("");case"isValid":cb=a({}),cb.data("_inputmask",{maskset:e,opts:f,isRTL:f.numericInput}),f.numericInput&&(eb=!0);var jb=d.value.split("");G(cb,!1,!0,eb?jb.reverse():jb);for(var kb=u(),lb=L(),mb=kb.length-1;mb>lb&&!z(mb);mb--);return kb.splice(lb,mb+1-lb),N(kb)&&d.value==kb.join("");case"getemptymask":return cb=a(d.el),e=cb.data("_inputmask").maskset,f=cb.data("_inputmask").opts,t();case"remove":var nb=d.el;cb=a(nb),e=cb.data("_inputmask").maskset,f=cb.data("_inputmask").opts,nb._valueSet(I(cb)),cb.unbind(".inputmask"),cb.removeData("_inputmask");var ob;Object.getOwnPropertyDescriptor&&(ob=Object.getOwnPropertyDescriptor(nb,"value")),ob&&ob.get?nb._valueGet&&Object.defineProperty(nb,"value",{get:nb._valueGet,set:nb._valueSet}):document.__lookupGetter__&&nb.__lookupGetter__("value")&&nb._valueGet&&(nb.__defineGetter__("value",nb._valueGet),nb.__defineSetter__("value",nb._valueSet));try{delete nb._valueGet,delete nb._valueSet}catch(pb){nb._valueGet=void 0,nb._valueSet=void 0}break;case"getmetadata":if(cb=a(d.el),e=cb.data("_inputmask").maskset,f=cb.data("_inputmask").opts,a.isArray(e.metadata)){for(var qb,rb=m(),sb=rb;sb>=0;sb--)if(k().validPositions[sb]&&void 0!=k().validPositions[sb].alternation){qb=k().validPositions[sb].alternation;break}return void 0!=qb?e.metadata[k().validPositions[rb].locator[qb]]:e.metadata[0]}return e.metadata}}if(void 0===a.fn.inputmask){var g=navigator.userAgent,h=null!==g.match(new RegExp("iphone","i")),i=(null!==g.match(new RegExp("android.*safari.*","i")),null!==g.match(new RegExp("android.*chrome.*","i")),null!==g.match(new RegExp("android.*firefox.*","i"))),j=(/Kindle/i.test(g)||/Silk/i.test(g)||/KFTT/i.test(g)||/KFOT/i.test(g)||/KFJWA/i.test(g)||/KFJWI/i.test(g)||/KFSOWI/i.test(g)||/KFTHWA/i.test(g)||/KFTHWI/i.test(g)||/KFAPWA/i.test(g)||/KFAPWI/i.test(g),b("paste")?"paste":b("input")?"input":"propertychange");a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:a.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:a.noop},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},format:function(b,c,g){var h=a.extend(!0,{},a.inputmask.defaults,c);return d(h.alias,c,h),f({action:"format",value:b,metadata:g},e(h),h)},isValid:function(b,c){var g=a.extend(!0,{},a.inputmask.defaults,c);return d(g.alias,c,g),f({action:"isValid",value:b},e(g),g)}},a.fn.inputmask=function(b,c){function g(b,c,e){var f=a(b);f.data("inputmask-alias")&&d(f.data("inputmask-alias"),{},c);for(var g in c){var h=f.data("inputmask-"+g.toLowerCase());void 0!=h&&("mask"==g&&0==h.indexOf("[")?(c[g]=h.replace(/[\s[\]]/g,"").split("','"),c[g][0]=c[g][0].replace("'",""),c[g][c[g].length-1]=c[g][c[g].length-1].replace("'","")):c[g]="boolean"==typeof h?h:h.toString(),e&&(e[g]=c[g]))}return c}var h,i=a.extend(!0,{},a.inputmask.defaults,c);if("string"==typeof b)switch(b){case"mask":return d(i.alias,c,i),h=e(i),void 0==h?this:this.each(function(){f({action:"mask",el:this},a.extend(!0,{},h),g(this,i))});case"unmaskedvalue":var j=a(this);return j.data("_inputmask")?f({action:"unmaskedvalue",$input:j}):j.val();case"remove":return this.each(function(){var b=a(this);b.data("_inputmask")&&f({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?f({action:"getemptymask",el:this}):"";case"hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case"isComplete":return this.data("_inputmask")?f({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case"getmetadata":return this.data("_inputmask")?f({action:"getmetadata",el:this}):void 0;default:return d(i.alias,c,i),d(b,c,i)||(i.mask=b),h=e(i),void 0==h?this:this.each(function(){f({action:"mask",el:this},a.extend(!0,{},h),g(this,i))})}else{if("object"==typeof b)return i=a.extend(!0,{},a.inputmask.defaults,b),d(i.alias,b,i),h=e(i),void 0==h?this:this.each(function(){f({action:"mask",el:this},a.extend(!0,{},h),g(this,i))});if(void 0==b)return this.each(function(){var b=a(this).attr("data-inputmask");if(b&&""!=b)try{b=b.replace(new RegExp("'","g"),'"');var e=a.parseJSON("{"+b+"}");a.extend(!0,e,c),i=a.extend(!0,{},a.inputmask.defaults,e),i=g(this,i),d(i.alias,e,i),i.alias=void 0,a(this).inputmask("mask",i)}catch(f){}if(a(this).attr("data-inputmask-mask")||a(this).attr("data-inputmask-alias")){i=a.extend(!0,{},a.inputmask.defaults,{});var h={};i=g(this,i,h),d(i.alias,h,i),i.alias=void 0,a(this).inputmask("mask",i)}})}}}return a.fn.inputmask});
!function($){return $.extend($.inputmask.defaults.definitions,{h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),$.extend($.inputmask.defaults.aliases,{"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var e=$.inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+e+"[01])")},val2:function(a){var e=$.inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+e+"(0[1-9]|1[012]))|(30"+e+"(0[13-9]|1[012]))|(31"+e+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,e,r){if(isNaN(a))return!1;var t=parseInt(a.concat(e.toString().slice(a.length))),n=parseInt(a.concat(r.toString().slice(a.length)));return(isNaN(t)?!1:t>=e&&r>=t)||(isNaN(n)?!1:n>=e&&r>=n)},determinebaseyear:function(a,e,r){var t=(new Date).getFullYear();if(a>t)return a;if(t>e){for(var n=e.toString().slice(0,2),i=e.toString().slice(2,4);n+r>e;)n--;var y=n+i;return a>y?a:y}return t},onKeyUp:function(a,e,r){var t=$(this);if(a.ctrlKey&&a.keyCode==$.inputmask.keyCode.RIGHT){var n=new Date;t.val(n.getDate().toString()+(n.getMonth()+1).toString()+n.getFullYear().toString()),t.triggerHandler("setvalue.inputmask")}},getFrontValue:function(a,e,r){for(var t=0,n=0,i=0;i<a.length&&"2"!=a.charAt(i);i++){var y=r.definitions[a.charAt(i)];y?(t+=n,n=y.cardinality):n++}return e.join("").substr(t,n)},definitions:{1:{validator:function(a,e,r,t,n){var i=n.regex.val1.test(a);return t||i||a.charAt(1)!=n.separator&&-1=="-./".indexOf(a.charAt(1))||!(i=n.regex.val1.test("0"+a.charAt(0)))?i:(e.buffer[r-1]="0",{refreshFromBuffer:{start:r-1,end:r},pos:r,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,e,r,t,n){isNaN(e.buffer[r+1])||(a+=e.buffer[r+1]);var i=1==a.length?n.regex.val1pre.test(a):n.regex.val1.test(a);return t||i||!(i=n.regex.val1.test("0"+a))?i:(e.buffer[r]="0",r++,{pos:r})},cardinality:1}]},2:{validator:function(a,e,r,t,n){var i=n.getFrontValue(e.mask,e.buffer,n);-1!=i.indexOf(n.placeholder[0])&&(i="01"+n.separator);var y=n.regex.val2(n.separator).test(i+a);if(!t&&!y&&(a.charAt(1)==n.separator||-1!="-./".indexOf(a.charAt(1)))&&(y=n.regex.val2(n.separator).test(i+"0"+a.charAt(0))))return e.buffer[r-1]="0",{refreshFromBuffer:{start:r-1,end:r},pos:r,c:a.charAt(0)};if(n.mask.indexOf("2")==n.mask.length-1&&y){var s=e.buffer.join("").substr(4,4)+a;if(s!=n.leapday)return!0;var d=parseInt(e.buffer.join("").substr(0,4),10);return d%4===0?d%100===0?d%400===0?!0:!1:!0:!1}return y},cardinality:2,prevalidator:[{validator:function(a,e,r,t,n){isNaN(e.buffer[r+1])||(a+=e.buffer[r+1]);var i=n.getFrontValue(e.mask,e.buffer,n);-1!=i.indexOf(n.placeholder[0])&&(i="01"+n.separator);var y=1==a.length?n.regex.val2pre(n.separator).test(i+a):n.regex.val2(n.separator).test(i+a);return t||y||!(y=n.regex.val2(n.separator).test(i+"0"+a))?y:(e.buffer[r]="0",r++,{pos:r})},cardinality:1}]},y:{validator:function(a,e,r,t,n){if(n.isInYearRange(a,n.yearrange.minyear,n.yearrange.maxyear)){var i=e.buffer.join("").substr(0,6);if(i!=n.leapday)return!0;var y=parseInt(a,10);return y%4===0?y%100===0?y%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,e,r,t,n){var i=n.isInYearRange(a,n.yearrange.minyear,n.yearrange.maxyear);if(!t&&!i){var y=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,a+"0").toString().slice(0,1);if(i=n.isInYearRange(y+a,n.yearrange.minyear,n.yearrange.maxyear))return e.buffer[r++]=y.charAt(0),{pos:r};if(y=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,a+"0").toString().slice(0,2),i=n.isInYearRange(y+a,n.yearrange.minyear,n.yearrange.maxyear))return e.buffer[r++]=y.charAt(0),e.buffer[r++]=y.charAt(1),{pos:r}}return i},cardinality:1},{validator:function(a,e,r,t,n){var i=n.isInYearRange(a,n.yearrange.minyear,n.yearrange.maxyear);if(!t&&!i){var y=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,a).toString().slice(0,2);if(i=n.isInYearRange(a[0]+y[1]+a[1],n.yearrange.minyear,n.yearrange.maxyear))return e.buffer[r++]=y.charAt(1),{pos:r};if(y=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,a).toString().slice(0,2),n.isInYearRange(y+a,n.yearrange.minyear,n.yearrange.maxyear)){var s=e.buffer.join("").substr(0,6);if(s!=n.leapday)i=!0;else{var d=parseInt(a,10);i=d%4===0?d%100===0?d%400===0?!0:!1:!0:!1}}else i=!1;if(i)return e.buffer[r-1]=y.charAt(0),e.buffer[r++]=y.charAt(1),e.buffer[r++]=a.charAt(0),{refreshFromBuffer:{start:r-3,end:r},pos:r}}return i},cardinality:2},{validator:function(a,e,r,t,n){return n.isInYearRange(a,n.yearrange.minyear,n.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var e=$.inputmask.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+e+"[0-3])|(02"+e+"[0-2])")},val2:function(a){var e=$.inputmask.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+e+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+e+"30)|((0[13578]|1[02])"+e+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyUp:function(a,e,r){var t=$(this);if(a.ctrlKey&&a.keyCode==$.inputmask.keyCode.RIGHT){var n=new Date;t.val((n.getMonth()+1).toString()+n.getDate().toString()+n.getFullYear().toString()),t.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyUp:function(a,e,r){var t=$(this);if(a.ctrlKey&&a.keyCode==$.inputmask.keyCode.RIGHT){var n=new Date;t.val(n.getFullYear().toString()+(n.getMonth()+1).toString()+n.getDate().toString()),t.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,e,r,t,n){if("24"==n.hourFormat&&24==parseInt(a,10))return e.buffer[r-1]="0",e.buffer[r]="0",{refreshFromBuffer:{start:r-1,end:r},c:"0"};var i=n.regex.hrs.test(a);if(!t&&!i&&(a.charAt(1)==n.timeseparator||-1!="-.:".indexOf(a.charAt(1)))&&(i=n.regex.hrs.test("0"+a.charAt(0))))return e.buffer[r-1]="0",e.buffer[r]=a.charAt(0),r++,{refreshFromBuffer:{start:r-2,end:r},pos:r,c:n.timeseparator};if(i&&"24"!==n.hourFormat&&n.regex.hrs24.test(a)){var y=parseInt(a,10);return 24==y?(e.buffer[r+5]="a",e.buffer[r+6]="m"):(e.buffer[r+5]="p",e.buffer[r+6]="m"),y-=12,10>y?(e.buffer[r]=y.toString(),e.buffer[r-1]="0"):(e.buffer[r]=y.toString().charAt(1),e.buffer[r-1]=y.toString().charAt(0)),{refreshFromBuffer:{start:r-1,end:r+6},c:e.buffer[r]}}return i},cardinality:2,prevalidator:[{validator:function(a,e,r,t,n){var i=n.regex.hrspre.test(a);return t||i||!(i=n.regex.hrs.test("0"+a))?i:(e.buffer[r]="0",r++,{pos:r})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,e,r,t,n){var i=n.regex.mspre.test(a);return t||i||!(i=n.regex.ms.test("0"+a))?i:(e.buffer[r]="0",r++,{pos:r})},cardinality:1}]},t:{validator:function(a,e,r,t,n){return n.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"}}),$.fn.inputmask}(jQuery);


(function(){function q(b){for(var j,s=b.css("color"),g,b=b[0],c=!1;b&&!g&&!c;){try{j=$(b).css("background-color")}catch(d){j="transparent"}"transparent"!==j&&"rgba(0, 0, 0, 0)"!==j&&(g=j);c=b.body;b=b.parentNode}var b=/rgb[a]*\((\d+),\s*(\d+),\s*(\d+)/,c=/#([AaBbCcDdEeFf\d]{2})([AaBbCcDdEeFf\d]{2})([AaBbCcDdEeFf\d]{2})/,a;j=void 0;(j=s.match(b))?a={r:parseInt(j[1],10),g:parseInt(j[2],10),b:parseInt(j[3],10)}:(j=s.match(c))&&(a={r:parseInt(j[1],16),g:parseInt(j[2],16),b:parseInt(j[3],16)});var f;g?
(j=void 0,(j=g.match(b))?f={r:parseInt(j[1],10),g:parseInt(j[2],10),b:parseInt(j[3],10)}:(j=g.match(c))&&(f={r:parseInt(j[1],16),g:parseInt(j[2],16),b:parseInt(j[3],16)})):f=a?127<Math.max.apply(null,[a.r,a.g,a.b])?{r:0,g:0,b:0}:{r:255,g:255,b:255}:{r:255,g:255,b:255};j=function(b){return"rgb("+[b.r,b.g,b.b].join(", ")+")"};a&&f?(b=Math.max.apply(null,[a.r,a.g,a.b]),a=Math.max.apply(null,[f.r,f.g,f.b]),a=Math.round(a+-0.75*(a-b)),a={r:a,g:a,b:a}):a?(a=Math.max.apply(null,[a.r,a.g,a.b]),b=1,127<a&&
(b=-1),a=Math.round(a+96*b),a={r:a,g:a,b:a}):a={r:191,g:191,b:191};return{color:s,"background-color":f?j(f):g,"decor-color":j(a)}}function m(b,j){this.x=b;this.y=j;this.reverse=function(){return new this.constructor(-1*this.x,-1*this.y)};this._length=null;this.getLength=function(){this._length||(this._length=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)));return this._length};var s=function(b){return Math.round(b/Math.abs(b))};this.resizeTo=function(b){if(0===this.x&&0===this.y)this._length=0;else if(0===
this.x)this._length=b,this.y=b*s(this.y);else if(0===this.y)this._length=b,this.x=b*s(this.x);else{var j=Math.abs(this.y/this.x),a=Math.sqrt(Math.pow(b,2)/(1+Math.pow(j,2))),j=j*a;this._length=b;this.x=a*s(this.x);this.y=j*s(this.y)}return this};this.angleTo=function(b){var j=this.getLength()*b.getLength();return 0===j?0:Math.acos(Math.min(Math.max((this.x*b.x+this.y*b.y)/j,-1),1))/Math.PI}}function k(b,j){this.x=b;this.y=j;this.getVectorToCoordinates=function(b,j){return new m(b-this.x,j-this.y)};
this.getVectorFromCoordinates=function(b,j){return this.getVectorToCoordinates(b,j).reverse()};this.getVectorToPoint=function(b){return new m(b.x-this.x,b.y-this.y)};this.getVectorFromPoint=function(b){return this.getVectorToPoint(b).reverse()}}function t(b,j,a,g,c){this.data=b;this.context=j;if(b.length)for(var d=b.length,f,l,i=0;i<d;i++){f=b[i];l=f.x.length;a.call(j,f);for(var e=1;e<l;e++)g.call(j,f,e);c.call(j,f)}this.changed=function(){};this.startStrokeFn=a;this.addToStrokeFn=g;this.endStrokeFn=
c;this.inStroke=!1;this._stroke=this._lastPoint=null;this.startStroke=function(b){if(b&&"number"==typeof b.x&&"number"==typeof b.y){this._stroke={x:[b.x],y:[b.y]};this.data.push(this._stroke);this._lastPoint=b;this.inStroke=!0;var j=this._stroke,a=this.startStrokeFn,g=this.context;setTimeout(function(){a.call(g,j)},3);return b}return null};this.addToStroke=function(b){if(this.inStroke&&"number"===typeof b.x&&"number"===typeof b.y&&4<Math.abs(b.x-this._lastPoint.x)+Math.abs(b.y-this._lastPoint.y)){var j=
this._stroke.x.length;this._stroke.x.push(b.x);this._stroke.y.push(b.y);this._lastPoint=b;var a=this._stroke,g=this.addToStrokeFn,s=this.context;setTimeout(function(){g.call(s,a,j)},3);return b}return null};this.endStroke=function(){var b=this.inStroke;this.inStroke=!1;this._lastPoint=null;if(b){var j=this._stroke,a=this.endStrokeFn,g=this.context,s=this.changed;setTimeout(function(){a.call(g,j);s.call(g)},3);return!0}return null}}function r(b,j,a){var g=this.$parent=$(b),b=this.eventTokens={};this.events=
new v(this);var c=$.fn[e]("globalEvents"),d={width:"ratio",height:"ratio",sizeRatio:4,color:"#000","background-color":"#fff","decor-color":"#eee",lineWidth:0,minFatFingerCompensation:-10,showUndoButton:!1,data:[]};$.extend(d,q(g));j&&$.extend(d,j);this.settings=d;for(var f in a)a.hasOwnProperty(f)&&a[f].call(this,f);this.events.publish(e+".initializing");this.$controlbarUpper=$('<div style="padding:0 !important;margin:0 !important;width: 100% !important; height: 0 !important;margin-top:-1em !important;margin-bottom:1em !important;"></div>').appendTo(g);
this.isCanvasEmulator=!1;a=this.canvas=this.initializeCanvas(d);j=$(a);this.$controlbarLower=$('<div style="padding:0 !important;margin:0 !important;width: 100% !important; height: 0 !important;margin-top:-1.5em !important;margin-bottom:1.5em !important;"></div>').appendTo(g);this.canvasContext=a.getContext("2d");j.data(e+".this",this);g=(g=d.lineWidth)?g:Math.max(Math.round(a.width/400),2);d.lineWidth=g;this.lineCurveThreshold=3*d.lineWidth;d.cssclass&&""!=$.trim(d.cssclass)&&j.addClass(d.cssclass);
this.fatFingerCompensation=0;var g=function(b){var j,a,g=function(g){g=g.changedTouches&&0<g.changedTouches.length?g.changedTouches[0]:g;return new k(Math.round(g.pageX+j),Math.round(g.pageY+a)+b.fatFingerCompensation)},d=new y(750,function(){b.dataEngine.endStroke()});this.drawEndHandler=function(j){try{j.preventDefault()}catch(a){}d.clear();b.dataEngine.endStroke()};this.drawStartHandler=function(c){c.preventDefault();var s=$(b.canvas).offset();j=-1*s.left;a=-1*s.top;b.dataEngine.startStroke(g(c));
d.kick()};this.drawMoveHandler=function(j){j.preventDefault();b.dataEngine.inStroke&&(b.dataEngine.addToStroke(g(j)),d.kick())};return this}.call({},this),l=g.drawEndHandler,i=g.drawStartHandler,p=g.drawMoveHandler,h=this.canvas,j=$(h);this.isCanvasEmulator?(j.bind("mousemove."+e,p),j.bind("mouseup."+e,l),j.bind("mousedown."+e,i)):(h.ontouchstart=function(b){h.onmousedown=void 0;h.onmouseup=void 0;h.onmousemove=void 0;this.fatFingerCompensation=d.minFatFingerCompensation&&-3*d.lineWidth>d.minFatFingerCompensation?
-3*d.lineWidth:d.minFatFingerCompensation;i(b);h.ontouchend=l;h.ontouchstart=i;h.ontouchmove=p},h.onmousedown=function(b){h.ontouchstart=void 0;h.ontouchend=void 0;h.ontouchmove=void 0;i(b);h.onmousedown=i;h.onmouseup=l;h.onmousemove=p});b[e+".windowmouseup"]=c.subscribe(e+".windowmouseup",g.drawEndHandler);this.events.publish(e+".attachingEventHandlers");var n=this,b=d.width.toString(10),w=e;if("ratio"===b||"%"===b.split("")[b.length-1])this.eventTokens[w+".parentresized"]=c.subscribe(w+".parentresized",
function(b,j,a){return function(){var g=j.width();if(g!==a){for(var d in b)b.hasOwnProperty(d)&&(c.unsubscribe(b[d]),delete b[d]);var s=n.settings;n.$parent.children().remove();for(d in n)n.hasOwnProperty(d)&&delete n[d];d=s.data;var g=1*g/a,f=[],l,i,e,h,k,p;i=0;for(e=d.length;i<e;i++){p=d[i];l={x:[],y:[]};h=0;for(k=p.x.length;h<k;h++)l.x.push(p.x[h]*g),l.y.push(p.y[h]*g);f.push(l)}s.data=f;j[w](s)}}}(this.eventTokens,this.$parent,this.$parent.width(),1*this.canvas.width/this.canvas.height));this.resetCanvas(d.data);
this.events.publish(e+".initialized");return this}var e="jSignature",y=function(b,j){var a;this.kick=function(){clearTimeout(a);a=setTimeout(j,b)};this.clear=function(){clearTimeout(a)};return this},v=function(b){this.topics={};this.context=b?b:this;this.publish=function(b,a,g,d){if(this.topics[b]){var c=this.topics[b],f=Array.prototype.slice.call(arguments,1),l=[],i,e,h,p;e=0;for(h=c.length;e<h;e++)p=c[e],i=p[0],p[1]&&(p[0]=function(){},l.push(e)),i.apply(this.context,f);e=0;for(h=l.length;e<h;e++)c.splice(l[e],
1)}};this.subscribe=function(b,a,g){this.topics[b]?this.topics[b].push([a,g]):this.topics[b]=[[a,g]];return{topic:b,callback:a}};this.unsubscribe=function(b){if(this.topics[b.topic])for(var a=this.topics[b.topic],g=0,d=a.length;g<d;g++)a[g][0]===b.callback&&a.splice(g,1)}},z=function(b){var a=this.canvasContext,d=b.x[0],b=b.y[0],g=this.settings.lineWidth,c=a.fillStyle;a.fillStyle=a.strokeStyle;a.fillRect(d+g/-2,b+g/-2,g,g);a.fillStyle=c},u=function(b,a){var d=new k(b.x[a-1],b.y[a-1]),g=new k(b.x[a],
b.y[a]),c=d.getVectorToPoint(g);if(1<a){var f=new k(b.x[a-2],b.y[a-2]),l=f.getVectorToPoint(d),i;if(l.getLength()>this.lineCurveThreshold){i=2<a?(new k(b.x[a-3],b.y[a-3])).getVectorToPoint(f):new m(0,0);var e=0.35*l.getLength(),h=l.angleTo(i.reverse()),p=c.angleTo(l.reverse());i=(new m(i.x+l.x,i.y+l.y)).resizeTo(Math.max(0.05,h)*e);var n=(new m(l.x+c.x,l.y+c.y)).reverse().resizeTo(Math.max(0.05,p)*e),l=this.canvasContext,e=f.x,p=f.y,h=d.x,w=d.y,A=f.x+i.x,f=f.y+i.y;i=d.x+n.x;n=d.y+n.y;l.beginPath();
l.moveTo(e,p);l.bezierCurveTo(A,f,i,n,h,w);l.stroke()}}c.getLength()<=this.lineCurveThreshold&&(c=this.canvasContext,f=d.x,d=d.y,i=g.x,g=g.y,c.beginPath(),c.moveTo(f,d),c.lineTo(i,g),c.stroke())},x=function(b){var a=b.x.length-1;if(0<a){var d=new k(b.x[a],b.y[a]),g=new k(b.x[a-1],b.y[a-1]),c=g.getVectorToPoint(d);if(c.getLength()>this.lineCurveThreshold){if(1<a){var b=(new k(b.x[a-2],b.y[a-2])).getVectorToPoint(g),f=(new m(b.x+c.x,b.y+c.y)).resizeTo(c.getLength()/2),c=this.canvasContext,b=g.x,a=g.y,
l=d.x,i=d.y,e=g.x+f.x,g=g.y+f.y,f=d.x,d=d.y;c.beginPath();c.moveTo(b,a);c.bezierCurveTo(e,g,f,d,l,i)}else c=this.canvasContext,b=g.x,g=g.y,a=d.x,d=d.y,c.beginPath(),c.moveTo(b,g),c.lineTo(a,d);c.stroke()}}};r.prototype.resetCanvas=function(b){var a=this.canvas,d=this.settings,c=this.canvasContext,f=this.isCanvasEmulator,l=a.width,i=a.height;c.clearRect(0,0,l+30,i+30);c.shadowColor=c.fillStyle=d["background-color"];f&&c.fillRect(0,0,l+30,i+30);c.lineWidth=Math.ceil(parseInt(d.lineWidth,10));c.lineCap=
c.lineJoin="round";c.strokeStyle=d["decor-color"];c.shadowOffsetX=0;c.shadowOffsetY=0;var h=Math.round(i/5),p=1.5*h,k=i-h,l=l-1.5*h,i=i-h;c.beginPath();c.moveTo(p,k);c.lineTo(l,i);c.stroke();c.strokeStyle=d.color;f||(c.shadowColor=c.strokeStyle,c.shadowOffsetX=0.5*c.lineWidth,c.shadowOffsetY=-0.6*c.lineWidth,c.shadowBlur=0);b||(b=[]);c=this.dataEngine=new t(b,this,z,u,x);d.data=b;$(a).data(e+".data",b).data(e+".settings",d);var n=this.$parent,w=this.events,A=e;c.changed=function(){w.publish(A+".change");
n.trigger("change")};c.changed();return!0};r.prototype.initializeCanvas=function(b){var a=document.createElement("canvas"),c=$(a);b.width===b.height&&"ratio"===b.height&&(b.width="100%");c.css("margin",0).css("padding",0).css("border","none").css("height","ratio"===b.height||!b.height?1:b.height.toString(10)).css("width","ratio"===b.width||!b.width?1:b.width.toString(10));c.appendTo(this.$parent);"ratio"===b.height?c.css("height",Math.round(c.width()/b.sizeRatio)):"ratio"===b.width&&c.css("width",
Math.round(c.height()*b.sizeRatio));c.addClass(e);a.width=c.width();a.height=c.height();b=a;if(b.getContext)b=!1;else{var c=b.ownerDocument.parentWindow,d=c.FlashCanvas?b.ownerDocument.parentWindow.FlashCanvas:"undefined"===typeof FlashCanvas?void 0:FlashCanvas;if(d){b=d.initElement(b);d=1;c&&(c.screen&&c.screen.deviceXDPI&&c.screen.logicalXDPI)&&(d=1*c.screen.deviceXDPI/c.screen.logicalXDPI);if(1!==d)try{$(b).children("object").get(0).resize(Math.ceil(b.width*d),Math.ceil(b.height*d)),b.getContext("2d").scale(d,
d)}catch(f){}b=!0}else throw Error("Canvas element does not support 2d context. jSignature cannot proceed.");}this.isCanvasEmulator=b;a.onselectstart=function(b){b&&b.preventDefault&&b.preventDefault();b&&b.stopPropagation&&b.stopPropagation();return!1};return a};var p=window,h=function(b,a){var c=new Image,d=this;c.onload=function(){d.getContext("2d").drawImage(c,0,0,c.width<d.width?c.width:d.width,c.height<d.height?c.height:d.height)};c.src="data:"+a+","+b},a=function(b){this.find("canvas."+e).add(this.filter("canvas."+
e)).data(e+".this").resetCanvas(b);return this},f=function(b,a){if(void 0===a&&("string"===typeof b&&"data:"===b.substr(0,5))&&(a=b.slice(5).split(",")[0],b=b.slice(6+a.length),a===b))return;var c=this.find("canvas."+e).add(this.filter("canvas."+e));if(n.hasOwnProperty(a))0!==c.length&&n[a].call(c[0],b,a,function(b){return function(){return b.resetCanvas.apply(b,arguments)}}(c.data(e+".this")));else throw Error(e+" is unable to find import plugin with for format '"+String(a)+"'");return this},d=new v,
c=e,l,i=function(){d.publish(c+".parentresized")};$(p).bind("resize."+c,function(){l&&clearTimeout(l);l=setTimeout(i,500)}).bind("mouseup."+c,function(){d.publish(c+".windowmouseup")});var w={},A={"default":function(){return this.toDataURL()},"native":function(b){return b},image:function(){var b=this.toDataURL();if("string"===typeof b&&4<b.length&&"data:"===b.slice(0,5)&&-1!==b.indexOf(",")){var a=b.indexOf(",");return[b.slice(5,a),b.substr(a+1)]}return[]}},n={"native":function(b,a,c){c(b)},image:h,
"image/png;base64":h,"image/jpeg;base64":h,"image/jpg;base64":h},B={"export":A,"import":n,instance:w},C={init:function(b){return this.each(function(){var a,c=!1;for(a=this.parentNode;a&&!c;)c=a.body,a=a.parentNode;!c||new r(this,b,w)})},getSettings:function(){return this.find("canvas."+e).add(this.filter("canvas."+e)).data(e+".this").settings},clear:a,reset:a,addPlugin:function(b,a,c){B.hasOwnProperty(b)&&(B[b][a]=c);return this},listPlugins:function(b){var a=[];if(B.hasOwnProperty(b)){var b=B[b],
c;for(c in b)b.hasOwnProperty(c)&&a.push(c)}return a},getData:function(b){var a=this.find("canvas."+e).add(this.filter("canvas."+e));void 0===b&&(b="default");if(0!==a.length&&A.hasOwnProperty(b))return A[b].call(a.get(0),a.data(e+".data"))},importData:f,setData:f,globalEvents:function(){return d},events:function(){return this.find("canvas."+e).add(this.filter("canvas."+e)).data(e+".this").events}};$.fn[e]=function(b){if(!b||"object"===typeof b)return C.init.apply(this,arguments);if("string"===typeof b&&
C[b])return C[b].apply(this,Array.prototype.slice.call(arguments,1));$.error("Method "+String(b)+" does not exist on jQuery."+e)}})();
(function(){$.fn.jSignature("addPlugin","instance","UndoButton",function(q){this.events.subscribe("jSignature.attachingEventHandlers",function(){if(this.settings[q]){var m=this.settings[q];"function"!==typeof m&&(m=function(){var e=$('<input type="button" value="Undo last stroke" style="position:absolute;display:none;margin:0 !important;top:auto" />').appendTo(this.$controlbarLower),k=e.width();e.css("left",Math.round((this.canvas.width-k)/2));k!==e.width()&&e.width(k);return e});var k=m.call(this),
t=this;t.events.subscribe("jSignature.change",function(){t.dataEngine.data.length?k.show():k.hide()});var r=this,e=(this.events.topics.hasOwnProperty("jSignature.undo")?q:"jSignature")+".undo";k.bind("click",function(){r.events.publish(e)});r.events.subscribe(e,function(){var e=r.dataEngine.data;e.length&&(e.pop(),r.resetCanvas(e))})}})})})();
(function(){for(var q={},m={},k="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX".split(""),t=k.length/2,r=t-1;-1<r;r--)q[k[r]]=k[r+t],m[k[r+t]]=k[r];var e=function(e){for(var e=e.split(""),h=e.length,a=1;a<h;a++)e[a]=q[e[a]];return e.join("")},y=function(k){for(var h=[],a=0,f=1,d=k.length,c,l,i=0;i<d;i++)c=Math.round(k[i]),l=c-a,a=c,0>l&&0<f?(f=-1,h.push("Z")):0<l&&0>f&&(f=1,h.push("Y")),c=Math.abs(l),c>=t?h.push(e(c.toString(t))):h.push(c.toString(t));return h.join("")},v=function(e){for(var h=
[],e=e.split(""),a=e.length,f,d=1,c=[],l=0,i=0;i<a;i++)f=e[i],f in q||"Z"===f||"Y"===f?(0!==c.length&&(c=parseInt(c.join(""),t)*d+l,h.push(c),l=c),"Z"===f?(d=-1,c=[]):"Y"===f?(d=1,c=[]):c=[f]):c.push(m[f]);h.push(parseInt(c.join(""),t)*d+l);return h},z=function(e){for(var h=[],a=e.length,f,d=0;d<a;d++)f=e[d],h.push(y(f.x)),h.push(y(f.y));return h.join("_")},u=function(e){for(var h=[],e=e.split("_"),a=e.length/2,f=0;f<a;f++)h.push({x:v(e[2*f]),y:v(e[2*f+1])});return h},k=function(e){return["image/jsignature;base30",
z(e)]},r=function(e,h,a){"string"===typeof e&&("image/jsignature;base30"===e.substring(0,23).toLowerCase()&&(e=e.substring(24)),a(u(e)))};if(null==this.jQuery)throw Error("We need jQuery for some of the functionality. jQuery is not detected. Failing to initialize...");var x=this.jQuery.fn.jSignature;x("addPlugin","export","base30",k);x("addPlugin","export","image/jsignature;base30",k);x("addPlugin","import","base30",r);x("addPlugin","import","image/jsignature;base30",r);this.jSignatureDebug&&(this.jSignatureDebug.base30=
{remapTailChars:e,compressstrokeleg:y,uncompressstrokeleg:v,compressstrokes:z,uncompressstrokes:u,charmap:q})}).call("undefined"!==typeof window?window:this);
(function(){function q(a,f){this.x=a;this.y=f;this.reverse=function(){return new this.constructor(-1*this.x,-1*this.y)};this._length=null;this.getLength=function(){this._length||(this._length=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)));return this._length};var d=function(a){return Math.round(a/Math.abs(a))};this.resizeTo=function(a){if(0===this.x&&0===this.y)this._length=0;else if(0===this.x)this._length=a,this.y=a*d(this.y);else if(0===this.y)this._length=a,this.x=a*d(this.x);else{var f=Math.abs(this.y/
this.x),e=Math.sqrt(Math.pow(a,2)/(1+Math.pow(f,2))),f=f*e;this._length=a;this.x=e*d(this.x);this.y=f*d(this.y)}return this};this.angleTo=function(a){var d=this.getLength()*a.getLength();return 0===d?0:Math.acos(Math.min(Math.max((this.x*a.x+this.y*a.y)/d,-1),1))/Math.PI}}function m(a,f){this.x=a;this.y=f;this.getVectorToCoordinates=function(a,c){return new q(a-this.x,c-this.y)};this.getVectorFromCoordinates=function(a,c){return this.getVectorToCoordinates(a,c).reverse()};this.getVectorToPoint=function(a){return new q(a.x-
this.x,a.y-this.y)};this.getVectorFromPoint=function(a){return this.getVectorToPoint(a).reverse()}}function k(a,f){var d=Math.pow(10,f);return Math.round(a*d)/d}function t(a,f,d){var f=f+1,c=new m(a.x[f-1],a.y[f-1]),e=new m(a.x[f],a.y[f]),e=c.getVectorToPoint(e),i=new m(a.x[f-2],a.y[f-2]),c=i.getVectorToPoint(c);return c.getLength()>d?(d=2<f?(new m(a.x[f-3],a.y[f-3])).getVectorToPoint(i):new q(0,0),a=0.35*c.getLength(),i=c.angleTo(d.reverse()),f=e.angleTo(c.reverse()),d=(new q(d.x+c.x,d.y+c.y)).resizeTo(Math.max(0.05,
i)*a),e=(new q(c.x+e.x,c.y+e.y)).reverse().resizeTo(Math.max(0.05,f)*a),e=new q(c.x+e.x,c.y+e.y),["c",k(d.x,2),k(d.y,2),k(e.x,2),k(e.y,2),k(c.x,2),k(c.y,2)]):["l",k(c.x,2),k(c.y,2)]}function r(a,f){var d=a.x.length-1,c=new m(a.x[d],a.y[d]),e=new m(a.x[d-1],a.y[d-1]),c=e.getVectorToPoint(c);if(1<d&&c.getLength()>f){var d=(new m(a.x[d-2],a.y[d-2])).getVectorToPoint(e),e=c.angleTo(d.reverse()),i=0.35*c.getLength(),d=(new q(d.x+c.x,d.y+c.y)).resizeTo(Math.max(0.05,e)*i);return["c",k(d.x,2),k(d.y,2),k(c.x,
2),k(c.y,2),k(c.x,2),k(c.y,2)]}return["l",k(c.x,2),k(c.y,2)]}function e(a,e,d){for(var e=["M",k(a.x[0]-e,2),k(a.y[0]-d,2)],d=1,c=a.x.length-1;d<c;d++)e.push.apply(e,t(a,d,1));0<c?e.push.apply(e,r(a,d,1)):0===c&&e.push.apply(e,["l",1,1]);return e.join(" ")}function y(a){var f=['<?xml version="1.0" encoding="UTF-8" standalone="no"?>','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'],d,c=a.length,l,i=[],h=[],k=l=d=0,n=0,p=[];if(0!==c){for(d=0;d<c;d++){k=
a[d];n=[];l={x:[],y:[]};for(var m=void 0,b=void 0,m=0,b=k.x.length;m<b;m++)n.push({x:k.x[m],y:k.y[m]});n=simplify(n,0.7,!0);m=0;for(b=n.length;m<b;m++)l.x.push(n[m].x),l.y.push(n[m].y);p.push(l);i=i.concat(l.x);h=h.concat(l.y)}a=Math.min.apply(null,i)-1;c=Math.max.apply(null,i)+1;i=Math.min.apply(null,h)-1;h=Math.max.apply(null,h)+1;k=0>a?0:a;n=0>i?0:i;d=c-a;l=h-i}f.push('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+d.toString()+'" height="'+l.toString()+'">');d=0;for(c=p.length;d<
c;d++)l=p[d],f.push('<path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="'+e(l,k,n)+'"/>');f.push("</svg>");return f.join("")}function v(a){return[p,y(a)]}function z(a){return[h,x(y(a))]}var u=window;"use strict";("undefined"!=typeof exports?exports:u).simplify=function(a,e,d){e=void 0!==e?e*e:1;if(!d){for(var c=a.length,l,i=a[0],h=[i],d=1;d<c;d++){l=a[d];var k=l.x-i.x,n=l.y-i.y;k*k+n*n>e&&(h.push(l),i=l)}a=(i!==l&&h.push(l),h)}l=a;var d=l.length,
c=new ("undefined"!=typeof Uint8Array?Uint8Array:Array)(d),i=0,h=d-1,m,p,b=[],j=[],s=[];for(c[i]=c[h]=1;h;){n=0;for(k=i+1;k<h;k++){m=l[k];var g=l[i],r=l[h],q=g.x,t=g.y,g=r.x-q,u=r.y-t,v=void 0;if(0!==g||0!==u)v=((m.x-q)*g+(m.y-t)*u)/(g*g+u*u),1<v?(q=r.x,t=r.y):0<v&&(q+=g*v,t+=u*v);m=(g=m.x-q,u=m.y-t,g*g+u*u);m>n&&(p=k,n=m)}n>e&&(c[p]=1,b.push(i),j.push(p),b.push(p),j.push(h));i=b.pop();h=j.pop()}for(k=0;k<d;k++)c[k]&&s.push(l[k]);return a=s,a};if("function"!==typeof x)var x=function(a){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),
d,c,h,i,k=0,m=0,n="",n=[];do d=a.charCodeAt(k++),c=a.charCodeAt(k++),h=a.charCodeAt(k++),i=d<<16|c<<8|h,d=i>>18&63,c=i>>12&63,h=i>>6&63,i&=63,n[m++]=e[d]+e[c]+e[h]+e[i];while(k<a.length);n=n.join("");a=a.length%3;return(a?n.slice(0,a-3):n)+"===".slice(a||3)};var p="image/svg+xml",h="image/svg+xml;base64";if("undefined"===typeof $)throw Error("We need jQuery for some of the functionality. jQuery is not detected. Failing to initialize...");u=$.fn.jSignature;u("addPlugin","export","svg",v);u("addPlugin",
"export",p,v);u("addPlugin","export","svgbase64",z);u("addPlugin","export",h,z)})();




jQuery(document).ready(function($){

	var $windowHeightTrue = $(window).height();
	var $windowHeight = $windowHeightTrue - 121;


	if ($windowHeightTrue > 570) { //Check window height
		$('.hero').height($windowHeight); //Greater than 570px
	} else if ($windowHeightTrue < 570) {
		$('.hero').height(690); //Less than 570px
	}


	$(window).on('resize', function(){
		var $windowHeightTrue = $(window).height();
		var $windowHeight = $windowHeightTrue - 121;

		if ($windowHeightTrue > 570) { //Check window height
			$('.hero').height($windowHeight); //Greater than 570px
		} else if ($windowHeightTrue < 570) {
			$('.hero').height(728); //Less than 570px
		}


	});

});







	/* ==========================================================================
	   Scroll up on mobile during form
	   ========================================================================== */

		function scrollForMobile() {

			var $formOffset = $('form').offset().top;
			var $windowScroll = $(window).scrollTop();
			var $formScroll = $formOffset - 70;

			if ($formOffset - $windowScroll < 0) {
				$("html, body").animate({ scrollTop: $formScroll }, 300);
			}
		}
	/* ========================================================================== */












	/* ==========================================================================
	   Modal
	   ========================================================================== */

	$('.story').click(function(){
		var $this = $(this).find('.md-modal');

		$this.addClass('md-show').removeClass('hide');
		$('body').addClass('modal-open')

		$('body').keydown(function(e) {
			if (e.keyCode == 27) {
				$('.md-modal').removeClass('md-show').addClass('hide');
				$('body').removeClass('modal-open');
				(evt).stopPropagation();
			}
		});
	});
	$('.terms-link').click(function(){
		var $this = $(this).parent().siblings('.md-modal');

		$this.addClass('md-show').removeClass('hide');
		$('body').addClass('modal-open');
	});



	$('.md-overlay, .icon-cross').click(function(evt){
		$('.md-modal').removeClass('md-show').addClass('hide');
		$('body').removeClass('modal-open');
		(evt).stopPropagation();
	});



	/* ========================================================================== */











	/* ==========================================================================
	   Range Slider
	   ========================================================================== */

	$('.fieldset .range.volume').noUiSlider({
		start: [ 50000 ],
		step: 1000,
		range: {
			'min': [  0 ],
			'max': [ 150000 ]
		},
		format: wNumb({
			decimals: 0,
			thousand: ',',
		})
	});

	$('.fieldset .range.sales').noUiSlider({
		start: [ 320000 ],
		step: 10000,
		range: {
			'min': [  0 ],
			'max': [ 950000 ]
		},
		format: wNumb({
			decimals: 0,
			thousand: ',',
		})
	});
	$(".fieldset .range.volume").Link('lower').to('-inline-');
	$(".fieldset .range.sales").Link('lower').to('-inline-');


	/* ========================================================================== */






	/* ==========================================================================
		Signature Pad   
	   ========================================================================== */

   $('#signature').jSignature();

   $('#signature').on('click mousedown mouseup touchstart touchmove',function(){
   		$('.fieldset.sign').removeClass('error');
   		makeReadyFinal();
   });

   $('.signature-clear').click(function(){
		$('#signature').jSignature("reset");	
   		$('.fieldset.sign').addClass('error');
   		$('form').removeClass('ready');
   });

	/* ========================================================================== */












	/* ==========================================================================
	   Radio Button Replacement
	   ========================================================================== */
	
	$('.choice').click(function(){
		$(this).parents('.fieldset').removeClass('error');

		$(this).siblings().removeClass('checked');
		$(this).addClass('checked');
		$(this).find('.radio').prop('checked', true);
	});	

	$('.step.one .choice').click(function(){makeReady();});
	$('.step.four .choice').click(function(){makeReadyFinal();});
	
	/* ========================================================================== */


	/* ==========================================================================
	   Checkbox Button Replacement
	   ========================================================================== */
	
	$('.choice-checkbox').click(function(){

		$(this).parents('.fieldset').removeClass('error');
			
		if ( !$(this).hasClass('checked') ) {
			$(this).addClass('checked');
			$(this).find('.checkbox').prop('checked', true);
		} else {		
			$(this).removeClass('checked');
			$(this).find('.checkbox').prop('checked', false);
		}
	});
	
	/* ========================================================================== */




	/* ==========================================================================
	   Inputmask
	   ========================================================================== */

	   function inputMasking() {
		   var $filledCheckAdd = function(){$(this).parents('.fieldset').addClass('filled');};
		   var $filledCheckRemove = function(){$(this).parents('.fieldset').removeClass('filled');};

		   $('.business_phone input, .call_phone input').inputmask('(999)-999-9999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.zip input').inputmask('99999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.ssn input').inputmask('999-99-9999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.ownership input').inputmask({ mask: '99[9]%', greedy: false, 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.tax_id input').inputmask('99-9999999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.date input').inputmask('mm/dd/yyyy', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.call_time input').inputmask('hh:mm t', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
	   }

	   inputMasking();  // Init Input Mask Script


	/* ========================================================================== */
















	/* ==========================================================================
	   Skip Calculator
	   ========================================================================== */

	$('#application').click(function(){
		$('#skipped').val('yes');
		$('#skip').animate({'opacity': '0'}, 400);
		setTimeout(function(){
			$('form').addClass('ready').addClass('one-exit').addClass('apply').addClass('skipped');
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('form').addClass('three-enter').removeClass('ready');
		},1800);
		setTimeout(function(){
			$('.button.calculate p').html('Next Step (Owner Info)');
			$('.button.calculate').removeClass('active, calculate').addClass('owner-info');
		},2200)
	});


	$('#schedule').click(function(){
		$('#skipped').val('yes');
		$('#skip').animate({'opacity': '0'}, 400);
		setTimeout(function(){
			$('form').addClass('ready').addClass('one-exit').addClass('call').addClass('skipped');
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('form').addClass('three-enter').removeClass('ready');
		},1800);
	});

	/* ========================================================================== */	











	/* ==========================================================================
	   Form Button Press
	   ========================================================================== */
	
	
	$('.button.calculate').on('click', function(){ 	//	step one
		var $iconGear = '<span class="icon-gear"></span>';
		var $calculateText = '<span class="text">Calculating</span>';
		var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

		if ( !$(this).hasClass('apply') && !$(this).hasClass('owner-info') && !$(this).hasClass('submit') && !$(this).hasClass('done') ) {
			makeReady();
			if ( $('form').hasClass('ready') ) {		// Check if is ready
				$('#skip').hide();
				$('form').removeClass('error-show');
				$('.button.calculate p').html($iconGear);
				$('.button.calculate').addClass('active');
				setTimeout(function(){
					$('form').addClass('one-exit');
					scrollForMobile();
				},400);
				setTimeout(function(){
					$('.button.calculate p').append($calculateText);
					setTimeout(function(){
						$('.button.calculate p .text').animate({opacity:1},300);
					},500);
					$('.button.calculate p .icon-gear').addClass('move spin');
					$('.step.two .number span').html(doCalculation($salesNum));
					termCalculation();
				},1800);
				setTimeout(function(){
					$('.button.calculate p .icon-gear').removeClass('spin');
				},6000);
				setTimeout(function(){
					$('form').addClass('two-enter');
				},6500);
				setTimeout(function(){
					$('.button.calculate p').html('Apply Online');
					$('.button.calculate').removeClass('active calculate').addClass('apply');
				},6900);
				setTimeout(function(){
					$('form').addClass('divide-buttons');
				},7900);
			} else {
				$('form').addClass('error-show');
			}



		$('.button.call').click(function(){		//		Call Button Click

			if ( !$('form').hasClass('two-exit') ) {
				$('form').addClass('call');
				setTimeout(function(){
					$('form').addClass('two-exit');
					scrollForMobile();
				},1000);
				setTimeout(function(){
					$('form').addClass('three-enter').removeClass('ready');
				},2300);
			}

			if ( $('form').hasClass('three-enter') && $('form').hasClass('ready') ) {
				formSubmitCall();
			}

			if ( $('form').hasClass('three-enter') && !$('form').hasClass('ready') ) {
				makeReadyCall();
				$('form').addClass('error-show');
			}

		});

		}



		if ( $(this).hasClass('apply') ) {		//		Apply Online Button Click
			$(this).addClass('active');
			$('form').addClass('apply');
			setTimeout(function(){
				$('form').addClass('two-exit');
				scrollForMobile();
			},1000);
			setTimeout(function(){
				$('form').addClass('three-enter');
			},2400);
			setTimeout(function(){
				$('form').removeClass('ready');
				$('.button.apply p').html('Next Step (Owner Info)');
				$('.button.apply').removeClass('active, apply').addClass('owner-info');
				$('.button.owner-info').removeClass('active');
			},2700);
		}

		if ( $(this).hasClass('owner-info') && $('form').hasClass('three-enter') ) {     //   Proceed to Owner Info Click
			makeReadyNext();
			
			if ( $('form').hasClass('ready') ) {
				$(this).addClass('active');
				$('form').removeClass('divide-buttons');
				setTimeout(function(){
					$('form').addClass('three-exit');
					scrollForMobile();
				},100);
				setTimeout(function(){
					$('form').addClass('four-enter');
				},1400);
				setTimeout(function(){
					$('form').removeClass('ready');
					$('.button.owner-info p').html('Submit Form');
					$('.button.owner-info').removeClass('owner-info').addClass('submit');
					$('.button.submit').removeClass('active');
				},1800);
			} else {
				$('form').addClass('error-show');
			}


		}

		if ( $(this).hasClass('submit') ) {
			makeReadyFinal();	//	Call Validation Final
			if ( $('form').hasClass('ready') ) {
				// alert('ready');
				formSubmit();	//	Call The Submit Funciton
			}
			
			if ( !$('form').hasClass('ready') ) {
				$('form').addClass('error-show');
			}
		}
	});	




	function doCalculation($salesNum) {
		var $num = Math.round($salesNum * 1.2);
		var $numString = $num.toString() + '000';
		var $numFull = parseInt($numString);
		var $temp = addCommas($numFull);

		return $temp;
	};

	function termCalculation() {

		var $checkedOne = $('.choices.credit .choice.checked');



		if ( $checkedOne.hasClass('first') ) {

			$('.choices.terms').addClass('first');

		}
		if ( $checkedOne.hasClass('second') ) {

			$('.choices.terms').addClass('second');

		}
		if ( $checkedOne.hasClass('third') ) {

			$('.choices.terms').addClass('third');

		}
	};

	function addCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}


	/* ========================================================================== */
















/* ==========================================================================
   Form Readiness
   ========================================================================== */

	/* 
	   Calling The Validator
	   ========================================================================== */

	$('.step.one .fieldset.input input').blur(function(){makeReady();});

	$('.step.three.call .fieldset.input input').blur(function(){makeReadyCall();});

	$('.step.three.apply .fieldset.input input, .step.three.apply textarea').blur(function(){makeReadyNext();});
	$('.step.three.apply .fieldset.select select').change(function(){makeReadyNext();});

	function stepFourFieldBlur() {
		$('.step.four .fieldset.input input').blur(function(){makeReadyFinal();});
		$('.step.four .fieldset.select select').change(function(){makeReadyFinal();});
	}
	stepFourFieldBlur();

	$('.fieldset.input.first_name input, .fieldset.input.last_name input').change(function(){updateTerms();});

	/* ========================================================================== */



	$('.noUi-handle div').on('DOMSubtreeModified',function(){
		$(this).parents('.fieldset').removeClass('error');
		makeReady();

		var $volumeNum = parseInt($('.fieldset .range.volume .noUi-handle div').html());
		var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

			if ($volumeNum < 29) {
				$('form').addClass('hide-start-volume');
			} else if ($volumeNum > 29) {
				$('form').removeClass('hide-start-volume');
			} 

			if ($volumeNum > 118) {
				$('form').addClass('hide-end-volume');
			} else if ($volumeNum < 118) {
				$('form').removeClass('hide-end-volume');
			}




			if ($salesNum < 200) {
				$('form').addClass('hide-start-sales');
			} else if ($salesNum > 200) {
				$('form').removeClass('hide-start-sales');
			}

			if ($salesNum > 740) {
				$('form').addClass('hide-end-sales');
			} else if ($salesNum < 740) {
				$('form').removeClass('hide-end-sales');
			}

			$('#credit_volume').val($volumeNum * 1000);
			$('#gross_sales').val($salesNum * 1000);
	});



function makeReady() {
	var $inputEmpty = $('.step.one .fieldset.input input').val();
	var $monthsEmpty = $('.choices.months .choice').hasClass('checked');
	var $creditEmpty = $('.choices.credit .choice').hasClass('checked');
	var $volumeEmpty = $('.fieldset .range.volume .noUi-handle div').html() != '40,000';
	var $salesEmpty = $('.fieldset .range.sales .noUi-handle div').html() != '350,000';

		if ($inputEmpty == 0) {
			$('.step.one .fieldset.input').addClass('error');
		} else if ( $inputEmpty !=0 ) {
			$('.step.one .fieldset.input').removeClass('error');
		}

		if (!$monthsEmpty) {
			$('.choices.months').addClass('error');
		} else {
			$('.choices.months').removeClass('error');
		}

		if (!$creditEmpty) {
			$('.choices.credit').addClass('error');
		} else {
			$('.choices.credit').removeClass('error');
		}

		if (!$volumeEmpty) {
			$('.fieldset.range.volume').addClass('error');
		} else {
			$('.fieldset.range.volume').removeClass('error');
		}

		if (!$salesEmpty) {
			$('.fieldset.range.sales').addClass('error');
		} else {
			$('.fieldset.range.sales').removeClass('error');
		}



	if ( !$('.step.one .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}


function makeReadyCall() {

	$('.step.three.call .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.call .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});




	if ( !$('.step.three.call .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}
}









function makeReadyNext() {
	$('.step.three.apply .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.select select').each(function(){		//	Select Fields Validation
		if ( $(this).val() == 'none' ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.textarea textarea').each(function(){		//	textarea Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});





	if ( !$('.step.three.apply .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}









function makeReadyFinal() {
	$('.step.four .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.four .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});

	$('.step.four .fieldset.select select').each(function(){		//	Select Fields Validation
		if ( $(this).val() == 'none' ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.four .fieldset.textarea textarea').each(function(){		//	textarea Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	// $('.step.four .choice').each(function(){		//	Choice Field Validation
		if ( !$('.step.four .choice').hasClass('checked') ) {
			$('.step.four .choices').addClass('error');
			$('form').removeClass('ready');
		} else {
			$('.step.four .choices').removeClass('error');
		}
	// });







	if ( !$('.step.four .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}

function updateTerms() {
	var $first_name = $('.fieldset.input.first_name input');
	var $last_name = $('.fieldset.input.last_name input');
	var $mergedName = ', ' + $first_name.val() + ' ' + $last_name.val() + ', ';
	if ( $first_name.val() != 0 && $last_name.val() != 0 ) {
		$('.terms-name').html($mergedName);
	}

}

/* ========================================================================== */
















/* ==========================================================================
   Form Submission
   ========================================================================== */

function formSubmit() {

	/* 
   Signature Append
   ========================================================================== */

	var $data = $('#signature').jSignature("getData");	
	var $dataTwo = $('#signature').jSignature("getData", "image");
		$('#sign').val($data);
		$('#img').val($dataTwo);
	/* ========================================================================== */



	/* 
   Date Append
   ========================================================================== */
	var $currentDate = new Date();
	var $date_day =  $currentDate.getDate();
	var $date_month = $currentDate.getMonth() + 1;
	var $date_year = $currentDate.getFullYear();
	var $sign_date = $date_month + '-' + $date_day + '-' + $date_year;

	$('#sign_date').val($sign_date);
	/* ========================================================================== */




	$('.button.submit p').html('<span class="icon-gear"></span>');
	$('.button.submit').addClass('active');
	setTimeout(function(){
		$('form').addClass('four-exit')
		scrollForMobile();
	},400);
	setTimeout(function(){
		$('.button.submit p').append('<span class="text">Submitting</span>');
		setTimeout(function(){
			$('.button.submit p .text').animate({opacity:1},300);
		},500);
		$('.button.submit p .icon-gear').addClass('move spin');
	},1800);

	var $data = $('form').serialize();
	setTimeout(function(){
		$.post( 'php/application.php', $data)
		.done(function(response) {
			$('.button.submit p .icon-gear').removeClass('spin');
			$('.button.submit p .text').html('Success!');
			setTimeout(function(){
				$('form').addClass('success-enter');
			},900);
			setTimeout(function(){
          		$('.icon-success').addClass('animate');
          		$('.icon-success .tip').addClass('animateSuccessTip');
          		$('.icon-success .long').addClass('animateSuccessLong');
				$('.button.submit p').html('Thank You!');
				$('.button.submit').addClass('done').removeClass('submit').removeClass('active');
			},1600);
		} );
	},2200);
}

function formSubmitCall() {
		$('.button.call p').html('<span class="icon-gear"></span>');
		$('.button.call').addClass('active');
		setTimeout(function(){
			$('form').addClass('three-exit')
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('.button.call p').append('<span class="text">Submitting</span>');
			setTimeout(function(){
				$('.button.call p .text').animate({opacity:1},300);
			},500);
			$('.button.call p .icon-gear').addClass('move spin');
			$('form').removeClass('divide-buttons');
		},1800);

		var $data = $('form').serialize();
		setTimeout(function(){
			$.post( 'php/application.php', $data)
			.done(function(response) {
				$('.button.call p .icon-gear').removeClass('spin');
				$('.button.call p .text').html('Success!');
				setTimeout(function(){
					$('form').addClass('success-enter');
				},900);
				setTimeout(function(){
          		$('.icon-success').addClass('animate');
          		$('.icon-success .tip').addClass('animateSuccessTip');
          		$('.icon-success .long').addClass('animateSuccessLong');
					$('.button.call p').html('Thank You!');
					$('.button.call').addClass('done').removeClass('call').removeClass('active');
				},1600);
			} );
		},2200);

}






/* ==========================================================================
   Partner Field Addition
   ========================================================================== */


$('.fieldset.partner .choice.first').click(function(){addPartner();});
$('.fieldset.partner .choice.second').click(function(){removePartner();});

function addPartner() {
	 var $fields = '<p class="step-title partner-title">Partner Information</p><div class="step-four-wrap"> <div class="fieldset partner input half first_name"> <p class="question">First Name</p><div class="wrap"> <input type="text" name="partner_first_name" placeholder="John"> </div></div><div class="fieldset partner input half last_name last"> <p class="question">Last Name</p><div class="wrap"> <input type="text" name="partner_last_name" placeholder="Doe"> </div></div><div class="clearfix-dk"></div><div class="fieldset partner input home_address"> <p class="question">Home Address</p><div class="wrap"> <input type="text" name="partner_home_address"> </div></div><div class="fieldset partner input one-fourth home_city"> <p class="question">City</p><div class="wrap"> <input type="text" name="partner_home_city"> </div></div><div class="fieldset partner select half home_state last"> <p class="question">State</p><div class="wrap"> <select name="partner_home_state"> <option value="none">Select State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> </div></div><div class="fieldset partner input one-fourth zip home_zip last"> <p class="question">Zip</p><div class="wrap"> <input type="text" name="partner_home_zip"> </div></div><div class="clearfix-dk"></div><div class="fieldset partner input number one-third ownership"> <p class="question">Ownership</p><div class="wrap"> <input class="has-inputmask" type="text" placeholder="%" name="partner_ownership"> </div></div><div class="fieldset partner inputmask input one-third ssn last"> <p class="question">SSN</p><div class="wrap"> <input class="has-inputmask" type="text" name="partner_ssn"> </div></div><div class="fieldset partner inputmask input date one-third dob last"> <p class="question">Date of birth</p><div class="wrap"> <input class="has-inputmask" type="text" name="partner_dob"> </div></div><div class="clearfix-dk"></div>';
	 $($fields).appendTo('.partner-placeholder');
	 $('form').addClass('expand').removeClass('ready');
	 inputMasking();
	 stepFourFieldBlur();
}
function removePartner() {
	 $('.partner-placeholder').html('');
	 $('form').removeClass('expand');
	 stepFourFieldBlur();
}


/* ========================================================================== */










/* ==========================================================================
   Scroll Magic
   ========================================================================== */



function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

function textPrepare ($el) {
		$el.css("opacity", 0);
		$el.css("margin-left", 30);
	}

function stepPrepare ($el) {
		$el.css("opacity", 0);
		$el.css("margin-top", -50);
	}

function titlePrepare ($el) {
		$el.css("opacity", 0);
		$el.css("top", -80);
	}

	var $account = $('.svg-account path');
	var $underwriter = $('.svg-underwriter path');
	var $svgLine = $("#svg-line-1");
	var $circleOne = $("#svg-line-2, .possible li.sixth svg");
	var $circleTwo = $("#svg-line-3, .possible li.fifth svg");
	var $circleThree = $("#svg-line-4, .possible li.fourth svg");
	var $circleFour = $("#svg-line-5, .possible li.third svg");
	var $circleFive = $("#svg-line-6, .possible li.second svg");
	var $circleSix = $("#svg-line-7, .possible li.first svg");
	var $textOne = $(".possible li.sixth p");
	var $textTwo = $(".possible li.fifth p");
	var $textThree = $(".possible li.fourth p");
	var $textFour = $(".possible li.third p");
	var $textFive = $(".possible li.second p");
	var $textSix = $(".possible li.first p");
	var $coinsSVG = $(".svg-coins svg");
	var $stepApply = $(".steps .apply");
	var $stepApprove = $(".steps .approve");
	var $stepFund = $(".steps .fund");
	var $firstTitle = $(".section-one > .title-wrap");

	pathPrepare($account);
	pathPrepare($underwriter);
	pathPrepare($svgLine);
	pathPrepare($circleOne);
	pathPrepare($circleTwo);
	pathPrepare($circleThree);
	pathPrepare($circleFour);
	pathPrepare($circleFive);
	pathPrepare($circleSix);

	textPrepare($textOne);
	textPrepare($textTwo);
	textPrepare($textThree);
	textPrepare($textFour);
	textPrepare($textFive);
	textPrepare($textSix);

	stepPrepare($stepApply);
	stepPrepare($stepApprove);
	stepPrepare($stepFund);
	titlePrepare($firstTitle);



	var controller = new ScrollMagic();
	var tween = new TimelineMax()
			.add(TweenMax.to($account, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween2 = new TimelineMax()
			.add(TweenMax.to($underwriter, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween3 = new TimelineMax()
			.add(TweenMax.to($svgLine, 1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween4 = new TimelineMax()
			.add(TweenMax.to($circleOne, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween5 = new TimelineMax()
			.add(TweenMax.to($circleTwo, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween6 = new TimelineMax()
			.add(TweenMax.to($circleThree, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween7 = new TimelineMax()
			.add(TweenMax.to($circleFour, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween8 = new TimelineMax()
			.add(TweenMax.to($circleFive, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween9 = new TimelineMax()
			.add(TweenMax.to($circleSix, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween10 = new TimelineMax()
			.add(TweenMax.to($textOne, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween11 = new TimelineMax()
			.add(TweenMax.to($textTwo, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween12 = new TimelineMax()
			.add(TweenMax.to($textThree, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween13 = new TimelineMax()
			.add(TweenMax.to($textFour, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween14 = new TimelineMax()
			.add(TweenMax.to($textFive, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween15 = new TimelineMax()
			.add(TweenMax.to($textSix, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween16 = new TimelineMax()
			.add(TweenMax.to($coinsSVG, 0.1, {top: 235, ease:Linear.easeNone}));
	var tween17 = new TimelineMax()
			.add(TweenMax.to($stepApply, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween18 = new TimelineMax()
			.add(TweenMax.to($stepApprove, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween19 = new TimelineMax()
			.add(TweenMax.to($stepFund, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween20 = new TimelineMax()
			.add(TweenMax.to($firstTitle, 0.1, {opacity: 1, top: 0, ease:Linear.easeNone}));





	var scene = new ScrollScene({triggerElement: ".svg-account", duration: 800, tweenChanges: true, offset: 50, triggerHook: 1})
					.setTween(tween)
					.addTo(controller);

	var scene2 = new ScrollScene({triggerElement: ".svg-underwriter", duration: 2400, tweenChanges: true, offset: 150, triggerHook: 1})
					.setTween(tween2)
					.addTo(controller);


	var scene3 = new ScrollScene({triggerElement: ".possible li.first", duration: 600, tweenChanges: true, offset: 100, triggerHook: 1})
					.setTween(tween3)
					.addTo(controller);

	var scene4 = new ScrollScene({triggerElement: "#svg-line-2", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween4)
					.addTo(controller);

	var scene5 = new ScrollScene({triggerElement: "#svg-line-3", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween5)
					.addTo(controller);

	var scene6 = new ScrollScene({triggerElement: "#svg-line-4", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween6)
					.addTo(controller);

	var scene7 = new ScrollScene({triggerElement: "#svg-line-5", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween7)
					.addTo(controller);

	var scene8 = new ScrollScene({triggerElement: "#svg-line-6", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween8)
					.addTo(controller);

	var scene9 = new ScrollScene({triggerElement: "#svg-line-7", duration: 200, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween9)
					.addTo(controller);

	var scene10 = new ScrollScene({triggerElement: "#svg-line-2", duration: 200, tweenChanges: true, offset: 230, triggerHook: 1})
					.setTween(tween10)
					.addTo(controller);

	var scene11 = new ScrollScene({triggerElement: "#svg-line-3", duration: 200, tweenChanges: true, offset: 210, triggerHook: 1})
					.setTween(tween11)
					.addTo(controller);

	var scene12 = new ScrollScene({triggerElement: "#svg-line-4", duration: 200, tweenChanges: true, offset: 190, triggerHook: 1})
					.setTween(tween12)
					.addTo(controller);

	var scene13 = new ScrollScene({triggerElement: "#svg-line-5", duration: 200, tweenChanges: true, offset: 170, triggerHook: 1})
					.setTween(tween13)
					.addTo(controller);

	var scene14 = new ScrollScene({triggerElement: "#svg-line-6", duration: 200, tweenChanges: true, offset: 150, triggerHook: 1})
					.setTween(tween14)
					.addTo(controller);

	var scene15 = new ScrollScene({triggerElement: "#svg-line-7", duration: 200, tweenChanges: true, offset: 130, triggerHook: 1})
					.setTween(tween15)
					.addTo(controller);

	var scene16 = new ScrollScene({triggerElement: ".svg-coins", duration: 1300, tweenChanges: true, offset: 200, triggerHook: 1})
					.setTween(tween16)
					.addTo(controller);

	var scene17 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 300, triggerHook: 1})
					.setTween(tween17)
					.addTo(controller);

	var scene18 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 500, triggerHook: 1})
					.setTween(tween18)
					.addTo(controller);

	var scene19 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 700, triggerHook: 1})
					.setTween(tween19)
					.addTo(controller);

	var scene20 = new ScrollScene({triggerElement: ".section-one", duration: 200, offset: 200, triggerHook: 1})
					.setTween(tween20)
					.addTo(controller);

/* ========================================================================== */




