// تفاعل مخطط دورة حياة مِداد في الصفحة الرئيسية
(function(){var lc=document.getElementById('lc');if(!lc)return;
var D=[{c:'var(--tl)',t:'يكتب الطالب مشكلته في <mark>رادار الجامعة</mark>، مثل «أضيع كثيرًا داخل الجامعة وأحتاج خريطة تفاعلية».',a:'اطرح مشكلتك',h:'#radar'},
{c:'var(--pri)',t:'تُوجَّه المشكلة تلقائيًا إلى النادي المختص، مثل <mark>نادي Google للطلاب المطورين</mark>، ويتولاها أعضاؤه.',a:'شاهد المشاكل',h:'#radar'},
{c:'var(--ac)',t:'تتحوّل الحلول إلى فكرة مشروع بمهاراتها المطلوبة، وتجد الأنسب لك في <mark>كوّن فريقك</mark>، وتعرف ما ينقصك من مسارك الأكاديمي.',a:'ابدأ بناء الفريق',h:'#team'},
{c:'var(--co)',t:'ينجز الفريق المشروع ويحلّ المشكلة فعليًا، ثم تبدأ <mark>دورة جديدة</mark> بفكرة وفريق أقوى.',a:'ابدأ دورة جديدة',h:'#radar'}];
var nodes=lc.querySelectorAll('.lcn'),box=lc.querySelector('.lcd'),p=box.querySelector('p'),a=box.querySelector('a'),i=0,t;
function set(n){i=n;nodes.forEach(function(x,k){x.classList.toggle('on',k===n);x.setAttribute('aria-pressed',k===n)});var d=D[n];box.style.setProperty('--nc',d.c);p.innerHTML=d.t;a.textContent=d.a+' ←';a.href=d.h;box.classList.remove('sw');void box.offsetWidth;box.classList.add('sw')}
nodes.forEach(function(x,k){x.addEventListener('click',function(){clearInterval(t);set(k)})});set(0);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(function(){if(!document.hidden)set((i+1)%4)},4500)})()
