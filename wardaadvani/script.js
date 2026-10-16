
// EASY EDIT AREA
const LINKS=["Home","About","Expertise","Projects","Skills","Certifications","Contact"];
const SOCIALS=[["in","LinkedIn","https://www.linkedin.com/in/warda-advani-777016377?utm_source=share_via&utm_content=profile&utm_medium=member_ios"],
["ig","Instagram","https://www.instagram.com/warda_visuals?xtok=aWp6MWY3bmxvMHI0&utm_source=qr"],["gh","GitHub","https://github.com/wardaadvani"]
,["yt","YouTube","https://youtube.com/@wardaadvani?si=cWA7RfRDLbCXtJuq"]];
const RING="WEB DEVELOPER • ANIMATION ARTIST • GENERATIVE AI • CREATIVE DIRECTOR • DEVOPS & CLOUD • GRAPHIC DESIGNER • ";
const $=s=>document.querySelector(s),nav=$("#nav");
nav.innerHTML=LINKS.map(l=>`<a href="#${l.toLowerCase()}">${l}</a>`).join("");
$("#soc").innerHTML=SOCIALS.map(([t,n,u])=>`<a href="${u}" aria-label="${n}">${t}</a>`).join("");
["#r1","#r2"].forEach((s,i)=>{$(s).innerHTML=`<svg viewBox="0 0 400 400"><defs><path id="p${i}" d="M200,200 m-175,0 a175,175 0 1,1 350,0 a175,175 0 1,1 -350,0"/></defs><circle cx="200" cy="200" r="150" fill="none" stroke-width="1.2"/><text><textPath href="#p${i}" textLength="1090" lengthAdjust="spacing">${RING.replace(/&/g,"&amp;")}</textPath></text></svg>`});
const hd=$("header"),links=[...nav.querySelectorAll("a")],bg=$("#bg");
const setOpen=o=>{nav.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰"};
bg.onclick=()=>setOpen(!nav.classList.contains("open"));
links.forEach(a=>a.onclick=()=>setOpen(false));
addEventListener("keydown",e=>e.key==="Escape"&&setOpen(false));
const secs=LINKS.map(l=>document.getElementById(l.toLowerCase()));
function onScroll(){hd.classList.toggle("compact",scrollY>40);let c=0;secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<innerHeight*.4)c=i});links.forEach((a,i)=>a.classList.toggle("on",i===c))}
addEventListener("scroll",onScroll,{passive:true});onScroll();

// ============================================
// EASY EDIT AREA — all portfolio content
// ============================================
const SITE={whatsapp:"03357210257",email:"wardaadvani@gmail.com",designer:"https://www.behance.net/gallery/257193383/Warda-Advani-Portfolio",logoTitle:"Brands • Collaborations"};
const ABOUT={lead:"I'm Warda Advani, a creative technologist who works where design, animation, AI and engineering overlap.",
paras:[" I work at the intersection of technology, artificial intelligence, visual storytelling, and creative innovation — transforming ideas into intelligent, visually compelling, and high-performing digital experiences.","From developing seamless full-stack web applications and directing AI-powered creative projects to designing impactful graphics and building reliable cloud infrastructure, I bring together technical precision and artistic vision to create solutions that are as functional as they are visually engaging.My approach combines clean code, thoughtful design, generative AI, and efficient deployment workflows. I believe great digital experiences are built when creativity meets engineering — where every detail has a purpose, every interaction feels intuitive, and every solution is designed to make an impact.I don't just build digital products; I shape ideas into experiences that look exceptional, work seamlessly, and are built to scale."],
cards:[["Who I am","A multidisciplinary technology professional blending software engineering, AI-driven creativity, and visual design."],["What I do","Full-stack development, generative AI, creative direction, graphic design, DevOps, and cloud engineering."],["How I think","I combine creative vision with engineering logic, choosing the right tools and technologies to solve meaningful problems."],["What I build","Intelligent AI-powered applications, polished digital experiences, impactful visual content, and scalable technology solutions."]]};
// Counting numbers: change the numbers. A value of 0 shows a dash.
const STATS=[["Projects",20 ,"+"],["Years of experience",2,"+"],["Certifications",6,"+"],["Disciplines",10,"+"]];
const EXPERTISE=[
["Full-Stack Development","Interfaces, APIs and data, built end to end.",["React","Node.js","TypeScript","JavaScript","HTML","CSS","REST APIs","Git","GitHub","Databases"]],
["DevOps & Cloud","Reliable delivery from commit to production.",["Linux","Docker","Git","GitHub","CI/CD","Pipelines","Cloud","Deployment","Monitoring"]],
["Generative AI","Using AI as a creative and engineering partner.",["Generative AI","AI-assisted development","Prompt engineering","Creative AI","AI workflows","Automation","Generative design"]],
["Creative Direction","Ideas, systems and stories with a clear point of view.",["Art Direction","Creative Strategy","Visual Storytelling","Campaign Concepts","Digital Experiences","Brand Direction"]],
["Graphic Design","Clean, editorial visuals across print and screen.",["Photoshop","Illustrator","Figma"]],
["Animation / Motion","Movement that gives ideas rhythm and emotion.",["Motion Design","Motion Graphics","2D Animation","Visual Effects","Interactive Animation","Visual Storytelling"]]];
const SKILL_NOTES={};
const PROJECTS=[
{title:"Project 01",cat:"frontend-development",desc:"",tags:["Tag one","Tag two"],img:"assets/servi.connect.jpeg",url:"https://serviconnect-hackathonproject.netlify.app/"},
{title:"Project 02",cat:"frontend-development",desc:"",tags:["Tag one","Tag two"],img:"assets/todo app.jpeg",url:"https://wardaadvani.github.io/todo-list/html/index.html"},
{title:"Project 03",cat:"generative AI ",desc:"",tags:["Tag one","Tag two"],img:"assets/generative ai.jpeg",url:"https://www.instagram.com/warda_visuals?mdxt=aWp6MWY3bmxvMHI0&utm_source=qr"},
{title:"Project 04",cat:"calculator",desc:"",tags:["Tag one","Tag two"],img:"assets/calculator.jpeg",url:"https://wardaadvani.github.io/premium-calculator/advance%20calculator/"},
{title:"Project 05",cat:"Quick Bites",desc:"",tags:["Tag one","Tag two"],img:"assets/quickbites.jpeg",url:"https://effulgent-bienenstitch-2e4e74.netlify.app/html/index.html"},
{title:"Project 06",cat:"Travel website",desc:"",tags:["Tag one","Tag two"],img:"assets/travel.jpeg",url:"https://wardaadvani.github.io/khalil-ul-barkaat/"}];
const LOGOS=[
{name:"Logo 1",src:"assets/logo.4.jpeg"},
{name:"Logo 2",src:"assets/2-logo.jpeg"},
{name:"Logo 3",src:"assets/3-logo.jpeg"},
{name:"Logo 4",src:"assets/logo1.0.jpeg"},
{name:"Logo 5",src:"assets/logo.3.jpeg"},
{name:"Logo 6",src:"assets/logo2.0.jpeg"}];
const CURRENT=[["Currently working on Graphic Designer & Generative AI Creative Specialist | Naturalize by Dr. Bilquis & PAK Rishta Network | Present","Create AI-generated visuals, product advertisements, promotional creatives, and social media content for brand marketing. Develop engaging advertising campaigns and AI-assisted visual content while maintaining brand identity and supporting digital marketing initiatives. social media post designing and sticker designing "]

,["Founder & Creative Lead | DREI SOLUNEX STUDIO | Present"
,"Run an independent creative venture providing graphic design, branding, product advertisements, AI-generated videos, and marketing visuals. Work with Pakistani and international clients, manage creative projects, and use Warda Visuals on Instagram to showcase work and attract freelance clients through Instagram, LinkedIn, and referrals."],["Front-End Developer & Brand Operations Lead | AL-GAUSSS FRAGRANCE | Present","Develop front-end website interfaces and contribute to the brand’s digital presence using front-end technologies. Support brand operations, manage digital initiatives, and contribute to the development of the brand’s online identity and business presence."]];
const CERTS=[
{name:"Certification Name 1",issuer:"Html Essentials",date:"December 2025",id:"Credential ID",url:" https://share.google/BBcITlM9Yg5wpxGhY"},
{name:"Certification Name 2",issuer:"Css Essentials",date:"December 2025",id:"Credential ID",url:" https://share.google/YLWZLDQy8XFDd1bqD"},
{name:"Certification Name 3",issuer:"Javascript Essentials",date:"December 2025",id:"Credential ID",url:" https://share.google/Gei8mZ2mNCVoPGIfT"},
{name:"Certification Name 4",issuer:"Introduction To Cybersecurity",date:"December 2025",id:"Credential ID",url:" https://share.google/UR6kudS0CCnHlL1p8"}];
// ============================================
const H=(a,f)=>a.map(f).join(""),sec=(e,t,p)=>`<div class="sh rv"><small class="eyebrow">${e}</small><h2>${t}</h2>${p?`<p>${p}</p>`:""}</div>`;
$("#about").innerHTML=`<div class="wrap"><div class="about"><div class="tgt rv"><small>ABOUT ME</small><div class="tgt-slot" id="tslot"></div></div><div class="rv"><small class="eyebrow">About me</small><p class="lead">${ABOUT.lead}</p>${H(ABOUT.paras,p=>`<p class="p">${p}</p>`)}<div class="mini">${H(ABOUT.cards,c=>`<div><h4>${c[0].toUpperCase()}</h4><p>${c[1]}</p></div>`)}</div></div></div><div class="stats">${H(STATS,s=>`<div class="st rv"><b class="num" data-to="${s[1]}" data-suf="${s[2]}">0</b><span>${s[0]}</span></div>`)}</div></div>`;
$("#expertise").innerHTML=`<div class="wrap">${sec("What I do","Expertise","Tap a card to see the technologies and tools behind each discipline.")}<div class="g3">${H(EXPERTISE,(e,i)=>`<article class="xp rv"><button class="xph" aria-expanded="false"><span class="n">0${i+1}</span><h3>${e[0]}</h3><p>${e[1]}</p><span class="pl" aria-hidden="true">+</span></button><div class="more">${H(e[2],x=>`<span class="tg">${x}</span>`)}</div></article>`)}</div></div>`;
$("#projects").innerHTML=`<div class="wrap">${sec("Selected work","Projects","")}<div class="g3">${H(PROJECTS,(p,i)=>`<a class="pj rv" href="${p.url}"><div class="pv">${p.img?`<img src="${p.img}" alt="${p.title}" loading="lazy">`:`<b aria-hidden="true">0${i+1}</b>`}</div><div class="pb"><small>${p.cat}</small><h3>${p.title}</h3><p>${p.desc}</p><div class="row">${H(p.tags,x=>`<span class="tg">${x}</span>`)}</div><span class="go">View project <i>→</i></span></div></a>`)}</div><div class="more-btn rv"><a class="btn p" href="${SITE.designer}" target="_blank" rel="noopener">See my designer work <i>→</i></a></div></div>`;
$("#skills").innerHTML=`<div class="wrap">${sec("Toolbox","Skills","Choose a category, then tap a skill.")}<div class="tabs rv" role="tablist">${H(EXPERTISE,(e,i)=>`<button class="tab" role="tab" data-i="${i}" aria-selected="${i==0}">${e[0]}</button>`)}</div><div class="skl" id="skl"></div><div class="panel rv" id="panel" aria-live="polite">Tap a skill to see more.</div></div>`;
function skills(i){$("#skl").innerHTML=H(EXPERTISE[i][2],x=>`<button class="sk" aria-pressed="false" data-c="${i}">${x}</button>`);$("#panel").innerHTML="Tap a skill to see more."}skills(0);
$("#clients").innerHTML=`<h3>${SITE.logoTitle}</h3><div class="mq"><div class="track">${[0,1].map(k=>H(LOGOS,l=>`<div class="lg" ${k?'aria-hidden="true"':""}>${l.src?`<img src="${l.src}" alt="${l.name}" loading="lazy">`:`<span class="ph">${l.name.toUpperCase()}</span>`}</div>`)).join("")}</div></div>`;
$("#current").innerHTML=`<div class="wrap">${sec("Right now","Currently working on")}<div class="g3">${H(CURRENT,(c,i)=>`<div class="cur rv"><small>0${i+1}</small><h3>${c[0]}</h3><p>${c[1]}</p></div>`)}</div></div>`;
$("#certifications").innerHTML=`<div class="wrap">${sec("Credentials","Certifications")}<div class="g4">${H(CERTS,(c,i)=>`<div class="ce rv"><div class="bd">0${i+1}</div><h3>${c.name}</h3><p>${c.issuer}</p><p>${c.date}</p><p>${c.id}</p><a href="${c.url}">View credential →</a></div>`)}</div></div>`;
const wa="https://wa.me/"+SITE.whatsapp.replace(/\D/g,"").replace(/^0+/,"");
$("#contact").innerHTML=`<div class="wrap">${sec("Say hello","Contact")}<div class="ct"><div class="rv"><p class="lead">Have an idea, a project or just want to talk? Send a message.</p><p class="p">Write to ${SITE.email} or message me directly on WhatsApp.</p><a class="btn p" href="${wa}" target="_blank" rel="noopener">WhatsApp me <i>→</i></a></div><form class="rv" id="f" novalidate><label>Name<input name="name" autocomplete="name"><span class="err"></span></label><label>Email<input name="email" type="email" autocomplete="email"><span class="err"></span></label><label>Subject<input name="subject"><span class="err"></span></label><label>Message<textarea name="message" rows="5"></textarea><span class="err"></span></label><button class="btn p" type="submit">Send message <i>→</i></button><div class="msg" id="msg" role="status"></div></form></div></div>`;
$("#footer").innerHTML=`<span><b>WARDA ADVANI</b> © ${new Date().getFullYear()}</span><span>${SOCIALS.map(s=>`<a href="${s[2]}">${s[1]}</a>`).join(" · ")}</span><a href="#home">Back to top ↑</a>`;
document.addEventListener("click",e=>{const x=e.target.closest(".xph");if(x){const c=x.parentElement.classList.toggle("open");x.setAttribute("aria-expanded",c)}
const t=e.target.closest(".tab");if(t){document.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected",b===t));skills(+t.dataset.i)}
const s=e.target.closest(".sk");if(s){document.querySelectorAll(".sk").forEach(b=>b.setAttribute("aria-pressed",b===s));const n=s.textContent;$("#panel").innerHTML=`<strong>${n}</strong> · ${EXPERTISE[+s.dataset.c][0]}<br>${SKILL_NOTES[n]||"Add your own note about this skill in SKILL_NOTES (script.js)."}`}});
$("#f").addEventListener("submit",e=>{e.preventDefault();const f=e.target,v=n=>f[n].value.trim(),er={};
if(v("name").length<2)er.name="Please enter your name.";if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email")))er.email="Please enter a valid email.";if(v("subject").length<3)er.subject="Please add a subject.";if(v("message").length<10)er.message="Message should be at least 10 characters.";
["name","email","subject","message"].forEach(n=>f[n].nextElementSibling.textContent=er[n]||"");const m=$("#msg");
if(Object.keys(er).length){m.className="msg bad";m.textContent="Please fix the highlighted fields.";return}
m.className="msg";m.textContent="Thanks! Opening your email app to send this message…";
location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(v("subject"))}&body=${encodeURIComponent(v("message")+"\n\n— "+v("name")+" ("+v("email")+")")}`});
// reveal + counters
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;en.target.classList.add("in");const n=en.target.querySelector(".num");if(n)count(n);io.unobserve(en.target)}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
function count(n){const to=+n.dataset.to,suf=n.dataset.suf;if(!to){n.textContent="—";return}if(RM){n.textContent=to+suf;return}const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400);n.textContent=Math.round(to*(1-Math.pow(1-p,3)))+(p==1?suf:"");p<1&&requestAnimationFrame(f)})(t0)}
// scroll progress
const pg=$("#prog");
// ONE portrait travels from hero slot to About target, driven by scroll progress
const por=$("#portrait"),slot=$(".slot"),ts=$("#tslot");let S,E,end=1;
const R=el=>{const r=el.getBoundingClientRect();return{x:r.left+scrollX,y:r.top+scrollY,w:r.width,h:r.height}};
function measure(){S=R(slot);E=R(ts);por.style.width=S.w+"px";por.style.height=S.h+"px";end=Math.max(300,E.y-(innerHeight-E.h)/2);place()}
function place(){const p=Math.min(1,Math.max(0,scrollY/end)),e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
const x=S.x+(E.x-S.x)*e,y=S.y+(E.y-S.y)*e,s=1+(E.w/S.w-1)*e,r=-6*Math.sin(Math.PI*e);
por.style.transform=`translate3d(${x}px,${y}px,0) rotate(${RM?0:r}deg) scale(${s})`;por.classList.toggle("still",p>.02)}
addEventListener("scroll",()=>{place();pg.style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`},{passive:true});
addEventListener("resize",measure);addEventListener("load",measure);document.fonts&&document.fonts.ready.then(measure);measure();
// intro
const it=$("#intro");it.innerHTML=[..."WARDA ADVANI"].map((c,i)=>`<span class="l" style="--i:${i}">${c==" "?"&nbsp;":c}</span>`).join("");
setTimeout(()=>it.classList.add("gone"),RM?0:1500);
// ---- developer ID card ----
(function(){const g=i=>document.getElementById(i),card=g("idCard"),tilt=g("idTilt"),enter=g("idEnter");
[2,1,3,1,1,2,3,1,2,1,1,3,2,1,2,3,1,1,2,1,3,1,2].forEach(w=>{const i=document.createElement("i");i.style.width=w+"px";g("idBars").appendChild(i)});
const flip=()=>{const f=card.classList.toggle("is-flipped");card.setAttribute("aria-pressed",f)};
card.addEventListener("click",flip);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}});
const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting){enter.classList.add("is-in");ob.disconnect()}},{threshold:.35});ob.observe(g("custom"));
enter.addEventListener("animationend",e=>{if(e.target===enter)g("idFloat").classList.add("is-idle")});
if(matchMedia("(prefers-reduced-motion: reduce)").matches)g("idFloat").classList.add("is-idle");
let raf=0;tilt.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{tilt.style.setProperty("--ry",x*10+"deg");tilt.style.setProperty("--rx",-y*8+"deg")})});
tilt.addEventListener("pointerleave",()=>{cancelAnimationFrame(raf);tilt.style.setProperty("--rx","0deg");tilt.style.setProperty("--ry","0deg")})})();
