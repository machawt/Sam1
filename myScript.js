let cnt=-1;

let txt=["וַיְהִי *אִישׁ* אֶחָד *מִן־*הָרָמָתַיִם *צוֹפִים *מֵהַר* אֶפְרָיִם","וּשְׁמוֹ *אֶלְקָנָה *בֶּן־יְרֹחָם* בֶּן־אֱלִיהוּא *בֶּן־תֹּחוּ *בֶן־צוּף *אֶפְרָתִֽי.", "וְלוֹ *שְׁתֵּי *נָשִׁים *שֵׁם *אַחַת *חַנָּה *וְשֵׁם *הַשֵּׁנִית *פְּנִנָּה","וַיְהִי *לִפְנִנָּה *יְלָדִים *וּלְחַנָּה *אֵין *יְלָדִֽים׃","וְעָלָה *הָאִישׁ *הַהוּא *מֵֽעִירוֹ *מִיָּמִים *יָמִימָה *לְהִֽשְׁתַּחֲוֺת *וְלִזְבֹּחַ *לַיהוָה *צְבָאוֹת *בְּשִׁלֹה"," *וְשָׁם *שְׁנֵי *בְנֵֽי־*עֵלִי *חָפְנִי *וּפִנְחָס *כֹּהֲנִים *לַיהוָֽה׃","וַיְהִי *הַיּוֹם *וַיִּזְבַּח *אֶלְקָנָה *וְנָתַן *לִפְנִנָּה *אִשְׁתּוֹ *וּֽלְכָל־*בָּנֶיהָ *וּבְנוֹתֶיהָ *מָנֽוֹת:","וּלְחַנָּה *יִתֵּן *מָנָה *אַחַת *אַפָּיִם *כִּי *אֶת־חַנָּה *אָהֵב *וַֽיהוָה *סָגַר *רַחְמָֽהּ׃","וְכִֽעֲסַתָּה *צָֽרָתָהּ *גַּם־*כַּעַס *בַּעֲבוּר *הַרְּעִמָהּ *כִּֽי־*סָגַר *יְהוָה *בְּעַד *רַחְמָֽהּ׃","*וְכֵן *יַעֲשֶׂה *שָׁנָה *בְשָׁנָה *מִדֵּי *עֲלֹתָהּ *בְּבֵית *יְהוָה *כֵּן *תַּכְעִסֶנָּה *וַתִּבְכֶּה *וְלֹא *תֹאכַֽל׃","וַיֹּאמֶר *לָהּ *אֶלְקָנָה *אִישָׁהּ *חַנָּה *לָמֶה *תִבְכִּי *וְלָמֶה *לֹא *תֹֽאכְלִי *וְלָמֶה *יֵרַע *לְבָבֵךְ ","הֲלוֹא *אָֽנֹכִי *טוֹב *לָךְ *מֵעֲשָׂרָה *בָּנִֽים׃","וַתָּקָם *חַנָּה *אַחֲרֵי *אָכְלָה *בְשִׁלֹה *וְאַחֲרֵי *שָׁתֹה ","וְעֵלִי *הַכֹּהֵן *יֹשֵׁב *עַל־*הַכִּסֵּא *עַל־*מְזוּזַת *הֵיכַל *יְהוָֽה׃","וְהִיא *מָרַת *נָפֶשׁ *וַתִּתְפַּלֵּל *עַל־*יְהוָה *וּבָכֹה *תִבְכֶּֽה׃׃"]

/* ["Pi*ka*_*ka*li*ka*li*_*ka*pi*_*ma*ka*ti*nga*.","Ti*rri*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ta*ka*.","Pu*la*ngum*wa*ka*_*pa*pi*_*ji*yi*mi*_*ka*pi*_*ma*ka*ti*nga*.","Nin*ki*yi*,*_*pi*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ya*wu*rla*ma*."]; */

let engs=["1 Sam 1.1a","1 Sam 1.1b","1 Sam 1.2a","1 Sam 1.2b","1 Sam 1.3a","1 Sam 1.3b","1 Sam 1.4","1 Sam 1.5","1 Sam 1.6","1 Sam 1.7","1 Sam 1.8a","1 Sam 1.8b","1 Sam 1.9","1 Sam 1.9b","1 Sam 1.10"];
let re= document.getElementById("read");

function next1(){
let re= document.getElementById("read");
let test=document.getElementById("echo");
hd();
console.log (test.innerText);
console.log (re.innerText);


if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
update();}
                                  
function update(){                                  
let re= document.getElementById("read");
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
let test=document.getElementById("echo");
test.innerText="";
engdiv=document.getElementById("english");
engdiv.innerText=engs[cnt];
keys();
hd();}

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);}
};


function fd(){cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1};
update();}
    
function bk1(){ cnt=cnt-1;if (cnt<0){cnt=0};
    update(); }

function hd() {
    let re= document.getElementById("read");
    if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
else{engdiv.style.visibility="visible";}}

function clr(){let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;}