// حركة شاشة الترحيب
(function(){var sp=document.getElementById('splash');if(!sp)return;var h=document.documentElement,done=false;h.classList.add('sp');
function go(x,y,hash){if(done)return;done=true;if(!x&&!y){x=innerWidth/2;y=innerHeight/2}if(hash){location.hash=hash}
sp.style.setProperty('--x',x+'px');sp.style.setProperty('--y',y+'px');requestAnimationFrame(function(){sp.classList.add('out')});
setTimeout(function(){h.classList.add('in')},420);setTimeout(function(){sp.remove();h.classList.remove('sp')},1150);removeEventListener('keydown',kd)}
function kd(e){if(e.target.closest&&e.target.closest('.sp-c'))return;if(e.key==='Enter'||e.key===' '||e.key==='Escape'){e.preventDefault();go()}}
addEventListener('keydown',kd);
sp.addEventListener('pointermove',function(e){sp.style.setProperty('--px',((e.clientX/innerWidth)-.5)*2);sp.style.setProperty('--py',((e.clientY/innerHeight)-.5)*2)});
sp.addEventListener('click',function(e){var b=e.target.closest('[data-go]');go(e.clientX,e.clientY,b?b.dataset.go:'')});
var g=sp.querySelector('.sp-go');if(g)try{g.focus({preventScroll:true})}catch(e){}})()
