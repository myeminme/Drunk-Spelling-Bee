const LEVELS = {
  "First grade": [
    ["aunt","noun","The sister of your mother or father.","My aunt brings flan to every party.","Old French ante, from Latin amita","ANT or AHNT"],
    ["again","adverb","One more time.","Read the word again, slower this time.","Old English ongēan","uh-GEN or uh-GAYN"],
    ["been","verb","A form of 'be' used after has, have, or had.","I have been here since noon.","Old English bēon","BIN or BEEN"],
    ["roof","noun","The top covering of a building.","The cat climbed onto the roof.","Old English hrōf","ROOF or RUF (like 'hoof')"],
    ["because","conjunction","For the reason that.","We left early because it was raining.","Middle English 'by cause', from French cause","bih-KAWZ or bih-KUZ"],
    ["water","noun","The clear liquid in rain, rivers, and the sea.","Drink some water between rounds.","Old English wæter","WAW-ter or WAH-ter"],
    ["orange","noun","A round citrus fruit, or the color of that fruit.","She peeled an orange for the kids.","Old French orenge, via Arabic nāranj from Persian","OR-inj or AR-inj"],
    ["creek","noun","A small stream.","We caught tadpoles in the creek.","Middle English crike, from Old Norse kriki","KREEK or KRIK"]
  ],
  "Second grade": [
    ["often","adverb","Many times; frequently.","He often forgets his keys.","Middle English, from Old English oft","OFF-en or OFF-ten"],
    ["either","pronoun","One or the other of two.","You can pick either seat.","Old English ǣgther","EE-ther or EYE-ther"],
    ["route","noun","A way or path taken to get somewhere.","The bus changed its route today.","French route, from Latin rupta (via), 'broken road'","ROOT or ROWT"],
    ["syrup","noun","A thick, sweet liquid.","Pour syrup on the pancakes.","Old French sirop, from Arabic sharāb","SEER-up or SUR-up"],
    ["tomato","noun","A red, juicy fruit eaten as a vegetable.","Slice a tomato for the sandwich.","Spanish tomate, from Nahuatl tomatl","tuh-MAY-toh or tuh-MAH-toh"],
    ["pajamas","noun","Loose clothes worn for sleeping.","The kids wore pajamas to the movie night.","Hindi/Urdu pāy-jāma, from Persian","puh-JAH-muz or puh-JAM-uz"],
    ["garage","noun","A building or room where a car is kept.","Dad's tools are in the garage.","French garer, 'to shelter'","guh-RAHZH or guh-RAHJ"],
    ["coupon","noun","A ticket that gives you money off something.","Mom used a coupon for the pizza.","French couper, 'to cut'","KOO-pon or KYOO-pon"]
  ],
  "Third grade": [
    ["caramel","noun","A sweet, chewy candy made by heating sugar.","The apple was dipped in caramel.","French caramel, from Spanish caramelo","KAR-uh-mel or KAR-mul"],
    ["almond","noun","An oval nut that grows on a tree.","She packed almonds for a snack.","Old French almande, from Latin amygdala","AH-mund or AL-mund"],
    ["pecan","noun","A sweet nut that grows on a hickory tree.","Grandma baked a pecan pie.","Illinois (Algonquian) pakani, via French","pih-KAHN or PEE-can"],
    ["envelope","noun","A paper cover for a letter.","Lick the envelope to seal it.","French enveloppe, 'to wrap up'","EN-vuh-lope or AHN-vuh-lope"],
    ["schedule","noun","A plan that shows when things will happen.","Check the schedule for practice times.","Late Latin schedula, from Greek skhedē, 'papyrus leaf'","SKEJ-ool or SHED-yool"],
    ["vase","noun","A container used to hold flowers.","Put the roses in a vase.","French vase, from Latin vas, 'vessel'","VAYS or VAHZ"],
    ["data","noun","Facts or numbers collected to study something.","The class collected data on the weather.","Latin, plural of datum, 'something given'","DAY-tuh or DAT-uh"],
    ["interpret","verb","To explain the meaning of something.","Can you interpret this map for me?","Latin interpretari, 'to explain'","in-TUR-prit or in-TUR-pret"]
  ],
  "Fourth grade": [
    ["mischievous","adjective","Playfully causing small trouble.","The mischievous puppy hid my sock.","Anglo-French meschief, 'misfortune'","MIS-chuh-vus (often heard as mis-CHEE-vee-us)"],
    ["library","noun","A place where books are kept for people to borrow.","Return your books to the library.","Latin librarium, from liber, 'book'","LY-brer-ee or LY-bree"],
    ["February","noun","The second month of the year.","Her birthday is in February.","Latin Februarius","FEB-roo-air-ee or FEB-yoo-air-ee"],
    ["nuclear","adjective","Having to do with the center of an atom.","The town gets power from a nuclear plant.","Latin nucleus, 'kernel'","NOO-klee-er (often heard as NOO-kyuh-ler)"],
    ["herb","noun","A plant used to flavor food or as medicine.","Basil is my favorite herb.","Old French erbe, from Latin herba","URB or HURB"],
    ["ration","noun","A fixed amount of something given to each person.","Each hiker got a ration of water.","French ration, from Latin ratio","RASH-un or RAY-shun"],
    ["process","noun","A series of steps to get something done.","Baking bread is a long process.","Latin processus, 'a going forward'","PRAH-ses or PROH-ses"],
    ["adult","noun","A person who is fully grown.","Kids under ten need an adult with them.","Latin adultus, 'grown up'","uh-DULT or AD-ult"]
  ],
  "Fifth grade": [
    ["lieutenant","noun","An officer ranking below a captain.","The lieutenant gave the order.","French lieu, 'place' + tenant, 'holding'","loo-TEN-unt or lef-TEN-unt (British)"],
    ["niche","noun","A small space in a wall, or a role that fits someone well.","She found her niche in the art club.","French niche, 'recess in a wall'","NITCH or NEESH"],
    ["gyro","noun","A Greek sandwich of roasted meat in pita bread.","He ordered a gyro with extra sauce.","Greek gyros, 'turn'","YEER-oh or JY-roh"],
    ["clique","noun","A small, close group that keeps others out.","The new kid didn't want to join a clique.","French clique","KLEEK or KLIK"],
    ["forte","noun","Something a person is especially good at.","Math is not my forte.","French fort, 'strong'","FORT or FOR-tay"],
    ["integral","adjective","Necessary to make something whole.","Practice is integral to getting better.","Latin integer, 'whole'","IN-tuh-grul or in-TEG-rul"],
    ["debris","noun","Scattered pieces left after something breaks.","Debris covered the road after the storm.","French débris, from débriser, 'to break down'","duh-BREE or DAY-bree"],
    ["coyote","noun","A wild animal in the dog family.","We heard a coyote howl at night.","Mexican Spanish, from Nahuatl coyotl","ky-OH-tee or KY-oht"]
  ],
  "Sixth grade": [
    ["apricot", "noun", "A small orange fruit with soft, fuzzy skin and a pit.", "She spread apricot jam on her toast.", "French abricot, from Arabic al-barqūq, from Latin praecoquum 'early-ripening'", "AP-rih-kot or AY-prih-kot"],
    ["kilometer", "noun", "A unit of length equal to 1,000 meters.", "The race was five kilometers long.", "Greek khilioi 'thousand' + French mètre", "KIL-uh-mee-ter or kih-LOM-ih-ter"],
    ["status", "noun", "A person's or thing's position or condition.", "Check the status of your order.", "Latin status, 'standing'", "STAT-us or STAY-tus"],
    ["yogurt", "noun", "A thick, tangy food made from milk.", "I had yogurt and granola for breakfast.", "Turkish yoğurt", "YOH-gurt or YOG-urt"],
    ["vitamin", "noun", "A substance in food that the body needs to stay healthy.", "Oranges are full of vitamin C.", "Latin vita 'life' + amine", "VY-tuh-min or VIT-uh-min"],
    ["pianist", "noun", "A person who plays the piano.", "The pianist bowed after the concert.", "French pianiste, from Italian pianoforte", "pee-AN-ist or PEE-uh-nist"],
    ["economic", "adjective", "Having to do with money, trade, and business.", "The town went through a period of economic growth.", "Greek oikonomia, 'household management'", "ee-kuh-NOM-ik or ek-uh-NOM-ik"],
    ["harass", "verb", "To keep bothering or pressuring someone.", "Don't harass the referee.", "French harasser, 'to tire out'", "huh-RAS or HAIR-us"]
  ],
  "Seventh grade": [
    ["cerebral", "adjective", "Having to do with the brain or with careful thinking.", "Chess is a cerebral game.", "Latin cerebrum, 'brain'", "suh-REE-brul or SAIR-uh-brul"],
    ["mauve", "noun", "A pale purple color.", "She painted her room mauve.", "French mauve 'mallow plant', from Latin malva", "MOHV or MAWV"],
    ["privacy", "noun", "The state of being left alone or unseen by others.", "Close the door for some privacy.", "Latin privatus, 'set apart'", "PRY-vuh-see or PRIV-uh-see"],
    ["zebra", "noun", "An African animal like a horse with black and white stripes.", "The zebra ran across the plain.", "Italian and Portuguese zebra, earlier origin uncertain", "ZEE-bruh or ZEB-ruh"],
    ["lever", "noun", "A bar used to lift or move something by pushing on one end.", "Pull the lever to start the ride.", "Old French levier, from lever 'to raise'", "LEV-er or LEE-ver"],
    ["dynasty", "noun", "A series of rulers from the same family.", "The Ming dynasty ruled China for centuries.", "Greek dynasteia, 'power'", "DY-nuh-stee or DIN-uh-stee"],
    ["exquisite", "adjective", "Extremely beautiful and delicate.", "The cake had exquisite sugar flowers.", "Latin exquisitus, 'sought out'", "ek-SKWIZ-it or EK-skwiz-it"],
    ["patronize", "verb", "To talk down to someone, or to be a regular customer of a business.", "Don't patronize me just because I'm new.", "Latin patronus, 'protector'", "PAY-truh-nize or PAT-ruh-nize"]
  ],
  "Eighth grade": [
    ["homage", "noun", "Something done to show honor or respect.", "The mural pays homage to the city's history.", "Old French homage, from homme 'man'", "HOM-ij or oh-MAHZH"],
    ["precedence", "noun", "The state of being more important or coming first.", "Safety takes precedence over speed.", "Latin praecedere, 'to go before'", "PRES-ih-dens or prih-SEE-dens"],
    ["simultaneous", "adjective", "Happening at the same time.", "The two buzzers made a simultaneous beep.", "Latin simul, 'at the same time'", "sy-mul-TAY-nee-us or sim-ul-TAY-nee-us"],
    ["controversy", "noun", "A long public disagreement.", "The new rule caused a lot of controversy.", "Latin controversia, 'turned against'", "KON-truh-vur-see or kun-TROV-er-see"],
    ["contribute", "verb", "To give something to help a cause or group.", "Everyone should contribute to the snack table.", "Latin contribuere, 'to bring together'", "kun-TRIB-yoot or KON-trib-yoot"],
    ["envoy", "noun", "A messenger sent to represent a government.", "The president sent an envoy to the peace talks.", "French envoyé, 'sent'", "EN-voy or AHN-voy"],
    ["mature", "adjective", "Fully grown, or acting like an adult.", "He's very mature for his age.", "Latin maturus, 'ripe'", "muh-TOOR or muh-CHOOR"],
    ["renaissance", "noun", "A rebirth or revival, especially of art and learning.", "The old neighborhood is having a renaissance.", "French renaissance, 'rebirth'", "REN-uh-sahns or rih-NAY-suns"]
  ],
  "Ninth grade": [
    ["despicable", "adjective", "Deserving hatred and disgust.", "Stealing from a charity is despicable.", "Latin despicari, 'to look down on'", "dih-SPIK-uh-bul or DES-pik-uh-bul"],
    ["lamentable", "adjective", "Very bad or disappointing.", "The team's defense was lamentable.", "Latin lamentari, 'to wail'", "luh-MEN-tuh-bul or LAM-en-tuh-bul"],
    ["applicable", "adjective", "Relevant or able to be used in a situation.", "The discount isn't applicable to sale items.", "Latin applicare, 'to attach'", "uh-PLIK-uh-bul or AP-lik-uh-bul"],
    ["formidable", "adjective", "Causing fear or respect because of being powerful.", "She was a formidable opponent in the final round.", "Latin formidabilis, from formido 'fear'", "FOR-mih-duh-bul or for-MID-uh-bul"],
    ["comparable", "adjective", "Similar enough to be compared.", "The two phones have comparable prices.", "Latin comparabilis", "KOM-per-uh-bul or kum-PAIR-uh-bul"],
    ["inexplicable", "adjective", "Impossible to explain.", "The lights went out for some inexplicable reason.", "Latin inexplicabilis, 'cannot be unfolded'", "in-ek-SPLIK-uh-bul or in-EK-splik-uh-bul"],
    ["hospitable", "adjective", "Friendly and welcoming to guests.", "Our hosts were very hospitable.", "Latin hospitari, 'to be a guest'", "hah-SPIT-uh-bul or HAH-spit-uh-bul"],
    ["kiln", "noun", "An oven used to bake pottery or bricks.", "The bowls were fired in the kiln overnight.", "Old English cylene, from Latin culina 'kitchen'", "KILN or KIL"]
  ],
  "Tenth grade": [
    ["dour", "adjective", "Stern, gloomy, and unfriendly.", "The dour librarian never smiled.", "Latin durus, 'hard'", "DOOR or DOW-er"],
    ["err", "verb", "To make a mistake.", "It's better to err on the side of caution.", "Latin errare, 'to wander'", "UR or AIR"],
    ["acumen", "noun", "The ability to make good judgments quickly.", "Her business acumen made the shop a success.", "Latin acumen, 'sharpness'", "AK-yuh-men or uh-KYOO-men"],
    ["machination", "noun", "A secret plot or scheme.", "The villain's machinations finally failed.", "Latin machinari, 'to contrive'", "mak-uh-NAY-shun or mash-uh-NAY-shun"],
    ["plethora", "noun", "A large or excessive amount.", "The menu offers a plethora of choices.", "Greek plēthōrē, 'fullness'", "PLETH-er-uh or pluh-THOR-uh"],
    ["chimera", "noun", "A wild, impossible idea, or a mythical monster made of different animals.", "His plan to get rich overnight was a chimera.", "Greek khimaira, 'she-goat'", "ky-MEER-uh or kih-MEER-uh"],
    ["nonchalant", "adjective", "Calm and seeming not to care.", "He gave a nonchalant shrug.", "French nonchalant, 'not caring'", "non-shuh-LAHNT or NON-shuh-lunt"],
    ["prescient", "adjective", "Knowing about things before they happen.", "Her warning about the storm was prescient.", "Latin praescire, 'to know beforehand'", "PRESH-unt or PREE-shee-unt"]
  ],
  "Eleventh grade": [
    ["hegemony", "noun", "Control or leadership of one group or country over others.", "The empire kept its hegemony for two centuries.", "Greek hēgemonia, 'leadership'", "hih-JEM-uh-nee or HEJ-uh-moh-nee"],
    ["comptroller", "noun", "An official who oversees spending and financial records.", "The state comptroller released the budget report.", "Variant of controller, from French; spelling influenced by French compte 'account'", "kun-TROH-ler or KOMP-troh-ler"],
    ["quay", "noun", "A stone platform beside water where boats load and unload.", "The ferry was tied up at the quay.", "Old French kai", "KEE or KAY"],
    ["conch", "noun", "A large sea shell with a spiral shape.", "He held the conch up to his ear.", "Latin concha, from Greek konkhē", "KONK or KONCH"],
    ["coxswain", "noun", "The person who steers a boat and directs the rowers.", "The coxswain shouted the stroke count.", "Middle English cock 'small boat' + swain 'servant'", "KOK-sun or KOK-swayn"],
    ["banal", "adjective", "Boring and unoriginal.", "The movie's ending was banal.", "French banal, 'common'", "buh-NAHL or BAY-nul"],
    ["inveigle", "verb", "To trick or flatter someone into doing something.", "She inveigled her brother into doing her chores.", "French aveugler, 'to blind'", "in-VAY-gul or in-VEE-gul"],
    ["lichen", "noun", "A crusty, plant-like growth on rocks and trees.", "Green lichen covered the old gravestone.", "Greek leikhēn", "LY-ken or LICH-en"]
  ],
  "Twelfth grade": [
    ["puerile", "adjective", "Childishly silly.", "Their puerile jokes got old fast.", "Latin puer, 'boy'", "PYOOR-ul or PYOO-er-ile"],
    ["spontaneity", "noun", "The quality of acting on a sudden impulse.", "The trip was fun because of its spontaneity.", "Latin sponte, 'of one's own accord'", "spon-tuh-NAY-ih-tee or spon-tuh-NEE-ih-tee"],
    ["schism", "noun", "A split between groups because of disagreement.", "The vote caused a schism in the club.", "Greek skhisma, 'split'", "SKIZ-um or SIZ-um"],
    ["irrevocable", "adjective", "Impossible to change or undo.", "Once signed, the decision was irrevocable.", "Latin irrevocabilis", "ih-REV-uh-kuh-bul or eer-ih-VOH-kuh-bul"],
    ["deity", "noun", "A god or goddess.", "The temple was built to honor a sun deity.", "Latin deus, 'god'", "DEE-ih-tee or DAY-ih-tee"],
    ["macabre", "adjective", "Disturbing because it involves death or horror.", "The museum had a macabre display of old surgical tools.", "French macabre, from danse macabre", "muh-KAH-bruh or muh-KAHB"],
    ["sinecure", "noun", "A job that pays but requires little work.", "His title at the company was a sinecure.", "Latin sine cura, 'without care'", "SY-nih-kyoor or SIN-ih-kyoor"],
    ["obfuscate", "verb", "To make something unclear or confusing on purpose.", "The ad tried to obfuscate the hidden fees.", "Latin obfuscare, 'to darken'", "OB-fuh-skayt or ob-FUS-kayt"]
  ]
};
const HINTS = [
  ["def","Definition","What the word means"],
  ["sent","Sentence","Hear it used in a sentence (read aloud)"],
  ["pos","Part of speech","Noun, verb, adjective, etc."],
  ["orig","Language of origin","Where the word comes from"]
];
const MAX_HINTS = 3; let LIVES = 3;
try{ const l=parseInt(localStorage.getItem("bee-lives")); if(l>=1&&l<=10) LIVES=l; }catch(e){}
const $ = id => document.getElementById(id);
const heartSVG = lost => `<svg class="heart${lost?' lost':''}" viewBox="0 0 20 18" aria-hidden="true"><path fill="#FF3B1F" d="M10 18 1.6 9.6A5 5 0 0 1 10 2.6a5 5 0 0 1 8.4 7z"/></svg>`;
const hearts = n => Array.from({length:LIVES},(_,i)=>heartSVG(i>=n)).join("");

let players, cur, round, word, revealed, used, done, pending, level, usedWords, extra, reason;

function newGame(names){
  players = names.map(n=>({name:n,lives:LIVES,score:0,shots:0}));
  cur = 0; round = 1; usedWords = {}; newWord();
}
function alive(){return players.filter(p=>p.lives>0)}
function nextIndex(from){
  if(!alive().length) return -1;
  let i = from;
  for(let k=0;k<players.length;k++){ i=(i+1)%players.length; if(players[i].lives>0) return i; }
  return -1;
}
function pickWord(){
  const list = LEVELS[level];
  usedWords[level] = usedWords[level] || [];
  let pool = list.filter(w=>!usedWords[level].includes(w[0]));
  if(!pool.length){ usedWords[level]=[]; pool=list; }
  const w = pool[Math.floor(Math.random()*pool.length)];
  usedWords[level].push(w[0]);
  return {w:w[0],pos:w[1],def:w[2],sent:w[3],orig:w[4],alt:w[5]};
}
function newWord(){
  sayIdx = 0; level = levelFor(round); word = pickWord(); revealed = 0; extra = 0; reason = ""; used = []; done = null;
  render(true);
}
let voices=[], voice=null, rate=.75, autoSay=true, gradeMode="auto";
try{ const r=parseFloat(localStorage.getItem("bee-rate")); if(r) rate=r; if(localStorage.getItem("bee-autosay")==="0") autoSay=false; }catch(e){}
function rankVoice(v){
  let s=0; const n=v.name;
  if(/natural|neural/i.test(n)) s+=6;
  if(/premium|enhanced/i.test(n)) s+=5;
  if(/google/i.test(n)) s+=3;
  if(/aria|jenny|ava|samantha|allison|guy|zira|daniel/i.test(n)) s+=2;
  if(/en[-_]US/i.test(v.lang)) s+=1;
  if(/novelty|whisper|bells|bad news|bubbles|jester|organ|trinoids|zarvox|cellos|albert|boing|superstar/i.test(n)) s-=20;
  return s;
}
function loadVoices(){
  try{
    voices = speechSynthesis.getVoices().filter(v=>/^en/i.test(v.lang)).sort((a,b)=>rankVoice(b)-rankVoice(a));
    if(!voices.length) return;
    let saved=null; try{ saved=localStorage.getItem("bee-voice"); }catch(e){}
    voice = voices.find(v=>v.name===saved) || voices[0];
    const vs=$("voice"); vs.innerHTML="";
    voices.forEach(v=>{ const o=document.createElement("option"); o.value=v.name; o.textContent=`${v.name} (${v.lang})`; vs.appendChild(o); });
    vs.value=voice.name;
  }catch(e){}
}
function say(text){
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    if(voice){ u.voice=voice; u.lang=voice.lang; } else u.lang="en-US";
    u.rate=rate; u.pitch=1; u.volume=1;
    setTimeout(()=>speechSynthesis.speak(u),60);
  }catch(e){}
}
let sayIdx = 0;
function pronunciations(){
  const alts = (word.alt||"").replace(/\(.*?\)/g,"").split(/\s+or\s+/)
    .map(p=>p.trim().toLowerCase().replace(/-/g," ")).filter(Boolean);
  return [word.w, ...alts];
}
function sayNext(){
  const list = pronunciations();
  say(list[sayIdx % list.length]);
  sayIdx++;
  $("say").textContent = `🔊 Say the word (${((sayIdx-1) % list.length)+1}/${list.length})`;
}
function hintText(k){
  if(k==="rep") return "Said it again 🔊";
  if(k==="sent") return "🔊 Read aloud · click to hear it again";
  return word[k];
}

function render(fresh){
  const p = players[cur];
  $("pname").textContent = p ? p.name : "Add players →";
  const av=$("avatar");
  av.style.backgroundImage = p && p.photo ? `url(${p.photo})` : "";
  av.textContent = p && p.photo ? "" : (p ? p.name.trim()[0].toUpperCase() : "?");
  const cam=document.createElement("span"); cam.className="cam"; cam.textContent="📷"; av.appendChild(cam);
  $("phearts").innerHTML = p ? hearts(p.lives) : "";
  $("pshots").textContent = p ? p.shots : 0;
  $("round").textContent = round;
  if(sayIdx===0) $("say").textContent = "🔊 Say the word";
  $("levelText").textContent = level.toLowerCase() + " level";

  const L = $("letters"); L.innerHTML = "";
  [...word.w.slice(0,revealed)].forEach((ch,i)=>{
    const s=document.createElement("div"); s.className="slot"; s.textContent=ch;
    if(i===revealed-1 && !fresh) s.classList.add("pop");
    L.appendChild(s);
  });
  for(let i=0;i<extra;i++){ const x=document.createElement("div"); x.className="slot extra"+(i===extra-1&&!fresh?" pop":""); x.textContent="✗"; L.appendChild(x); }
  if(!done){ const q=document.createElement("div"); q.className="slot"; q.textContent="?"; L.appendChild(q); }
  $("clickline").textContent = done ? "" : "Click to reveal a letter · Confirm when they're done";
  const st=$("status");
  st.className = "status" + (done==="ok"?" ok":done==="bad"?" bad":"");
  st.textContent = done==="ok" ? "Correct! 🐝" : done==="bad" ? (p && p.lives===0 ? `${reason}${p.name} is out!` : `${reason}Wrong! Lose a heart.`) : "";

  const H=$("hints"); H.innerHTML="";
  for(let i=0;i<MAX_HINTS;i++){
    const d=document.createElement("div"); const k=used[i];
    d.className="hintbar"+(k?"":" empty");
    d.innerHTML = k ? `<b>${HINTS.find(h=>h[0]===k)[1]}</b><span></span>` : `<b>Hint ${i+1}</b><span>—</span>`;
    if(k) d.querySelector("span").textContent = hintText(k);
    if(k==="sent"){ d.style.cursor="pointer"; d.setAttribute("role","button"); d.tabIndex=0; d.onclick=()=>say(word.sent); d.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); say(word.sent); } }; }
    H.appendChild(d);
  }
  $("drink").disabled = !p || used.length>=MAX_HINTS || !!done;
  $("right").disabled = $("wrong").disabled = $("confirmSpell").disabled = !p || !!done;
  $("confirmSpell").hidden = !!done;
  $("undoLetter").hidden = !!done;
  $("undoLetter").disabled = !p || (revealed===0 && extra===0);

  const PL=$("plist"); PL.innerHTML="";
  players.forEach((q,i)=>{
    const li=document.createElement("li");
    li.className="p"+(i===cur?" cur":"")+(q.lives===0?" out":"");
    li.innerHTML=`<span class="pic"${q.photo?` style="background-image:url(${q.photo})"`:""}></span><span class="nm"></span><span class="hearts small">${hearts(q.lives)}</span><span class="shots">${q.shots}🥃</span>`;
    li.querySelector(".nm").textContent=q.name;
    if(!q.photo) li.querySelector(".pic").textContent=q.name.trim()[0].toUpperCase();
    PL.appendChild(li);
  });
  const n = nextIndex(cur);
  if(alive().length===1 && players.length>1){ $("upnext").textContent = `🏆 ${alive()[0].name} wins!`; $("upHearts").innerHTML=""; }
  else { $("upnext").textContent = n>=0 ? players[n].name : "—"; $("upHearts").innerHTML = n>=0 ? hearts(players[n].lives) : ""; }
}

function undoLetter(){ if(done) return; if(extra>0) extra--; else if(revealed>0) revealed--; render(true); }
$("undoLetter").onclick=undoLetter;
function revealOne(){ if(done) return; if(revealed<word.w.length) revealed++; else extra++; render(); }
$("wordbox").onclick = e=>{ if(e.target.closest("button")) return; revealOne(); };
$("wordbox").onkeydown = e=>{ if(e.target!==$("wordbox")) return; if(e.key==="Enter"||e.key===" "){e.preventDefault();revealOne();} };
$("revealAll").onclick = ()=>{ revealed=word.w.length; extra=0; render(true); };
$("say").onclick = sayNext;
$("confirmSpell").onclick = ()=>{
  if(revealed===word.w.length && extra===0){ $("right").onclick(); return; }
  reason = extra>0 ? `Too many letters! It's “${word.w}”. ` : `Stopped too early! It's “${word.w}”. `;
  players[cur].lives=Math.max(0,players[cur].lives-1); done="bad"; revealed=word.w.length; render(true);
};
$("right").onclick = ()=>{ done="ok"; revealed=word.w.length; render(true); };
$("wrong").onclick = ()=>{ players[cur].lives=Math.max(0,players[cur].lives-1); done="bad"; revealed=word.w.length; render(true); };
function advance(){
  const n = nextIndex(cur);
  if(n<0) return;
  if(n<=cur) round++;
  cur = n; newWord(); if(autoSay) sayNext();
}
$("next2").onclick = advance;

function removePlayer(i){
  players.splice(i,1);
  if(!players.length){ cur=0; render(true); renderAdmin(); return; }
  if(i<cur) cur--; else if(i===cur){ cur = cur % players.length; if(players[cur].lives===0){ const n=nextIndex(cur); if(n>=0) cur=n; } newWord(); renderAdmin(); return; }
  render(true); renderAdmin();
}
$("addForm").onsubmit = e=>{
  e.preventDefault(); const v=$("newName").value.trim(); if(!v) return;
  players.push({name:v,lives:LIVES,score:0,shots:0}); $("newName").value="";
  if(players.length===1) cur=0;
  render(true); renderAdmin();
};
const RESET_LABEL="Restart game (full hearts, round 1)";
let resetArmed=false;
$("reset").onclick = ()=>{
  if(!resetArmed){ resetArmed=true; $("reset").textContent="Tap again to restart"; setTimeout(()=>{resetArmed=false;$("reset").textContent=RESET_LABEL;},3000); return; }
  resetArmed=false; $("reset").textContent=RESET_LABEL;
  newGame(players.map(p=>p.name)); renderAdmin();
};

const LEVEL_ORDER = ["Second grade","Third grade","Fourth grade","Fifth grade","Sixth grade","Seventh grade","Eighth grade","Ninth grade","Tenth grade","Eleventh grade","Twelfth grade"];
function levelFor(r){ return gradeMode==="auto" ? LEVEL_ORDER[Math.min(r-1, LEVEL_ORDER.length-1)] : gradeMode; }

/* pictures */
let photoTarget=null;
function pickPhoto(i){ photoTarget=i; $("photoInput").value=""; $("photoInput").click(); }
let camStream=null;
function stopCam(){ if(camStream){ camStream.getTracks().forEach(t=>t.stop()); camStream=null; } $("camScrim").hidden=true; }
async function takePhoto(i){
  photoTarget=i;
  if(!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)){ $("cameraInput").value=""; $("cameraInput").click(); return; }
  $("camMsg").textContent=`Photo for ${players[i]?players[i].name:""}. Allow camera access if your browser asks.`;
  $("snap").disabled=true; $("camScrim").hidden=false;
  try{
    camStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:false});
    $("camVideo").srcObject=camStream; $("snap").disabled=false; $("snap").focus();
  }catch(e){
    $("camMsg").textContent="Couldn't open the camera. Check that camera access is allowed for this page, or choose a file instead.";
  }
}
$("snap").onclick=()=>{
  const v=$("camVideo"); if(!v.videoWidth||!players[photoTarget]) return;
  const S=256,c=document.createElement("canvas"); c.width=c.height=S;
  const m=Math.min(v.videoWidth,v.videoHeight), x=c.getContext("2d");
  x.translate(S,0); x.scale(-1,1);
  x.drawImage(v,(v.videoWidth-m)/2,(v.videoHeight-m)/2,m,m,0,0,S,S);
  players[photoTarget].photo=c.toDataURL("image/jpeg",.85);
  stopCam(); render(true); renderAdmin();
};
$("camCancel").onclick=stopCam;
$("camFile").onclick=()=>{ const i=photoTarget; stopCam(); pickPhoto(i); };
$("camScrim").onclick=e=>{ if(e.target.id==="camScrim") stopCam(); };
$("cameraInput").onchange=e=>{ if(photoTarget!==null) setPhoto(photoTarget,e.target.files[0]); };
function setPhoto(i,file){
  if(!file || !/^image\//.test(file.type) || !players[i]) return;
  const r=new FileReader();
  r.onload=()=>{
    const img=new Image();
    img.onload=()=>{
      const S=256, c=document.createElement("canvas"); c.width=c.height=S;
      const m=Math.min(img.width,img.height);
      c.getContext("2d").drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,S,S);
      players[i].photo=c.toDataURL("image/jpeg",.85);
      render(true); renderAdmin();
    };
    img.src=r.result;
  };
  r.readAsDataURL(file);
}
$("photoInput").onchange=e=>{ if(photoTarget!==null) setPhoto(photoTarget,e.target.files[0]); };
$("avatar").onclick=()=>{ if(players[cur]) takePhoto(cur); };
$("avatar").ondragover=e=>{ e.preventDefault(); $("avatar").classList.add("drag"); };
$("avatar").ondragleave=()=>$("avatar").classList.remove("drag");
$("avatar").ondrop=e=>{ e.preventDefault(); $("avatar").classList.remove("drag"); if(players[cur]) setPhoto(cur,e.dataTransfer.files[0]); };

/* admin settings */
function renderAdmin(){
  const A=$("adminPlayers"); A.innerHTML="";
  players.forEach((q,i)=>{
    const li=document.createElement("li"); li.className="ap"+(i===cur?" cur":"");
    li.innerHTML=`<button class="apic" data-a="pic" title="Add or change picture" aria-label="Add or change picture"${q.photo?` style="background-image:url(${q.photo})"`:""}>${q.photo?"":"📷"}</button><button data-a="cam" title="Take a photo with your camera">📸 Take photo</button>${q.photo?'<button data-a="nopic">Remove picture</button>':''}<input id="pn-${i}" aria-label="Player name"><button data-a="minus" aria-label="Take a heart">−</button><span class="hearts">${hearts(q.lives)}</span><button data-a="plus" aria-label="Give a heart">+</button><button data-a="turn">${i===cur?"Their turn":"Make it their turn"}</button><button data-a="rm" aria-label="Remove player">✕</button>`;
    const inp=li.querySelector("input"); inp.value=q.name;
    inp.onchange=()=>{ const v=inp.value.trim(); if(v){ q.name=v; render(true); } else inp.value=q.name; };
    li.querySelector('[data-a="minus"]').onclick=()=>{ q.lives=Math.max(0,q.lives-1); render(true); renderAdmin(); };
    li.querySelector('[data-a="plus"]').onclick=()=>{ q.lives=Math.min(LIVES,q.lives+1); render(true); renderAdmin(); };
    li.querySelector('[data-a="turn"]').onclick=()=>{ if(i!==cur){ cur=i; newWord(); renderAdmin(); } };
    li.querySelector('[data-a="rm"]').onclick=()=>removePlayer(i);
    li.querySelector('[data-a="pic"]').onclick=()=>pickPhoto(i);
    li.querySelector('[data-a="cam"]').onclick=()=>takePhoto(i);
    const np=li.querySelector('[data-a="nopic"]'); if(np) np.onclick=()=>{ delete q.photo; render(true); renderAdmin(); };
    A.appendChild(li);
  });
  $("gradeNote").textContent = gradeMode==="auto" ? `Now: ${levelFor(round).toLowerCase()}` : "New grade applies to the next word";
}
(function(){
  const g=$("gradeMode");
  const o=document.createElement("option"); o.value="auto"; o.textContent="Auto (starts at second grade, moves up each round)"; g.appendChild(o);
  Object.keys(LEVELS).forEach(k=>{ const x=document.createElement("option"); x.value=k; x.textContent=k; g.appendChild(x); });
  g.onchange=()=>{ gradeMode=g.value; renderAdmin(); };
})();
$("newWordBtn").onclick=()=>{ newWord(); if(autoSay) sayNext(); renderAdmin(); };
$("rate").value=rate; $("rateVal").textContent=rate.toFixed(2)+"×";
$("rate").oninput=e=>{ rate=parseFloat(e.target.value); $("rateVal").textContent=rate.toFixed(2)+"×"; try{localStorage.setItem("bee-rate",rate);}catch(err){} };
$("rate").onchange=()=>say(word.w);
$("autoSay").checked=autoSay;
$("autoSay").onchange=e=>{ autoSay=e.target.checked; try{localStorage.setItem("bee-autosay",autoSay?"1":"0");}catch(err){} };
$("testVoice").onclick=()=>say(word.w);
$("startLives").value=LIVES;
$("startLives").onchange=e=>{
  let v=parseInt(e.target.value); if(!(v>=1)) v=1; if(v>10) v=10; e.target.value=v; LIVES=v;
  players.forEach(q=>{ q.lives=Math.min(q.lives,LIVES); });
  try{ localStorage.setItem("bee-lives",LIVES); }catch(err){}
  render(true); renderAdmin();
};
$("applyLives").onclick=()=>{ players.forEach(q=>{ q.lives=LIVES; }); render(true); renderAdmin(); };
function openAdmin(){ renderAdmin(); $("adminScrim").hidden=false; $("adminClose").focus(); }
function closeAdmin(){ $("adminScrim").hidden=true; $("adminBtn").focus(); }
$("adminBtn").onclick=openAdmin;
$("adminClose").onclick=closeAdmin;
$("adminScrim").onclick=e=>{ if(e.target.id==="adminScrim") closeAdmin(); };

/* hint menu */
function openMenu(){ pending=null; $("confirm").hidden=true; drawMenu(); $("scrim").hidden=false; $("close").focus(); }
function closeMenu(){ $("scrim").hidden=true; $("drink").focus(); }
function drawMenu(){
  const O=$("opts"); O.innerHTML="";
  HINTS.forEach(([k,label,desc])=>{
    const b=document.createElement("button"); const u=used.includes(k);
    b.className="opt"+(u?" used":"");
    b.innerHTML=`${label}<span>${u?"Already used":desc}</span>`;
    b.disabled = u || used.length>=MAX_HINTS;
    b.onclick=()=>{ pending=k; $("confirmText").textContent=`Take a shot for “${label}”`; $("confirm").hidden=false; $("took").focus(); };
    O.appendChild(b);
  });
  $("glasses").innerHTML = Array.from({length:MAX_HINTS},(_,i)=>`<i class="${i<used.length?'f':''}"></i>`).join("");
}
$("drink").onclick=openMenu;
$("close").onclick=closeMenu;
$("cancel").onclick=()=>{pending=null;$("confirm").hidden=true;};
$("took").onclick=()=>{
  if(!pending) return;
  used.push(pending); players[cur].shots++;
  if(pending==="rep") say(word.w);
  if(pending==="sent") say(word.sent);
  pending=null; $("confirm").hidden=true; render(true);
  if(used.length>=MAX_HINTS) closeMenu(); else drawMenu();
};
$("scrim").onclick=e=>{ if(e.target.id==="scrim") closeMenu(); };
document.addEventListener("keydown",e=>{ if(e.key!=="Escape") return; if(!$("camScrim").hidden){ stopCam(); return; } if(!$("scrim").hidden) closeMenu(); else if(!$("adminScrim").hidden) closeAdmin(); });

try{ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }catch(e){}
$("voice").onchange = e=>{ voice = voices.find(v=>v.name===e.target.value)||null; try{ localStorage.setItem("bee-voice", e.target.value); }catch(err){} say(word.w); };
newGame(["Mykha","Player 2","Player 3","Player 4"]);
