let cnt=-1;
let txt=["ּפְלִשְׁתִּים*לָקְחוּ*אֵת*אֲרוֹן *הָאֱלֹהִים","וַיְבִאֻהוּ *מֵאֶבֶן *הָעֵזֶר*אַשְׁדּוֹדָה ","וַיִּקְחוּ *פְלִשְׁתִּים *אֶת-אֲרוֹן *הָאֱלֹהִים","וַיָּבִאוּ *אֹתוֹ *בֵּית *דָּגוֹן","וַיַּצִּיגוּ *אֹתוֹ*אֵצֶל *דָּגוֹן","וַיַּשְׁכִּמוּ *אַשְׁדּוֹדִים *מִמָּחֳרָת","וְהִנֵּה *דָגוֹן *נֹפֵל *לְפָנָיו *אַרְצָה*לִפְנֵי *אֲרוֹן *יְהוָה","וַיִּקְחוּ*אֶת-דָּגוֹן* וַיָּשִׁבוּ *אֹתוֹ*לִמְקוֹמוֹ ","וַיַּשְׁכִּמוּ *בַבֹּקֶר* מִמָּחֳרָת","וְהִנֵּה *דָגוֹן *נֹפֵל *לְפָנָיו *אַרְצָה*לִפְנֵי *אֲרוֹן *יְהוָה ","וְרֹאשׁ *דָּגוֹן *וּשְׁתֵּי *כַּפּוֹת *יָדָיו","כְּרֻתוֹת *אֶל-הַמִּפְתָּן* רַק *דָּגוֹן*נִשְׁאַר *עָלָיו"," עַל-כֵּן *לֹא-*יִדְרְכוּ *כֹהֲנֵי *דָגוֹן *וְכָל-הַבָּאִים *בֵּית-דָּגוֹן","עַל-מִפְתַּן *דָּגוֹן*בְּאַשְׁדּוֹד *עַד*הַיּוֹם *הַזֶּה."," וַתִּכְבַּד *יַד-*יְהוָה *אֶל-*הָאַשְׁדּוֹדִים *וַיְשִׁמֵּם ","וַיַּךְ *אֹתָם *בעפלים *בַּטְּחֹרִים","אֶת-*אַשְׁדּוֹד *וְאֶת-גְּבוּלֶיהָ","וַיִּרְאוּ *אַנְשֵׁי-*אַשְׁדּוֹד*כִּי*-כֵן ","וְאָמְרוּ*לֹא-יֵשֵׁב *אֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל *עִמָּנו"," כִּי-*קָשְׁתָה *יָדוֹ *עָלֵינוּ*וְעַל *דָּגוֹן *אֱלֹהֵינוּ"," וַיִּשְׁלְחוּ *וַיַּאַסְפוּ *אֶת-*כָּל-*סַרְנֵי *פְלִשְׁתִּים *אֲלֵיהֶם","וַיֹּאמְרוּ *מַה-נַּעֲשֶׂה *לַאֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל","וַיֹּאמְרוּ* גַּת *יִסֹּב *אֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל ","וַיַּסֵּבּוּ *אֶת-אֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל.","וַיְהִי *אַחֲרֵי *הֵסַבּוּ *אֹתוֹ","וַתְּהִי *יַד-יְהוָה *בָּעִיר *מְהוּמָה *גְּדוֹלָה *מְאֹד","וַיַּךְ *אֶת-אַנְשֵׁי *הָעִיר*מִקָּטֹן *וְעַד-גָּדוֹל ","וַיִּשָּׂתְרוּ *לָהֶם* עפלים *טְחֹרִיםי","וַיְשַׁלְּחוּ *אֶת*-אֲרוֹן *הָאֱלֹהִים*עֶקְרוֹן*","וַיְה  *כְּבוֹא *אֲרוֹן *הָאֱלֹהִים *עֶקְרוֹן","וַיִּזְעֲקוּ *הָעֶקְרֹנִים *לֵאמֹר","הֵסַבּוּ *אֵלַי *אֶת-אֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל*לַהֲמִיתֵנִי *וְאֶת-עַמִּי.","וַיִּשְׁלְחוּ *וַיַּאַסְפוּ *אֶת-*כָּל-*סַרְנֵי *פְלִשְׁתִּים","וַיֹּאמְרוּ *שַׁלְּחוּ *אֶת-אֲרוֹן *אֱלֹהֵי *יִשְׂרָאֵל *וְיָשֹׁב *לִמְקוֹמוֹ","וְלֹא-*יָמִית *אֹתִי *וְאֶת-עַמִּי: ","כִּי-הָיְתָה *מְהוּמַת-מָוֶת *בְּכָל-הָעִיר","כָּבְדָה *מְאֹד *יַד *הָאֱלֹהִים *שָׁם","וְהָאֲנָשִׁים *אֲשֶׁר *לֹא-מֵתוּ","הֻכּוּ *בעפלים *בַּטְּחֹרִים "," וַתַּעַל *שַׁוְעַת *הָעִיר           *הַשָּׁמָיִם."];


let engs=["And the Philistines took the ark of God"," And went from Ebenezer towards Ashdodah","And the Philistines took the ark of God","and they brought it to the house of Dagon","And put it beside Dagon","And the next day the Ashdodites got up","And behold Dagon had fallen on his face earthwards in front of the ark of God.","And they took Dagon and retunred it to its place.","And when they woke up the next day","And behold Dagon had fallen on his face earthwards in front of the ark of God","And his head and two  palms of hands","were cut off on the threshold only Dagon was left on it","Therefore not step the priests of Dagon and all who go to the house of Dagon","on the threshold of Dagon in Ashdod to this day"," And heavy the hand of God on the Ashdodites and he ravished them","and struck them with tumours", "on Ashdod and on its territory","And saw the men of Ashdod that it was so","And they said must not remain the ark of God of Israel","For its hand is heavy on us and on our GOd","And sent and gathered all the lords of Philistine","and said what shall we do with the ark of the God of Israel","and said let the ark of God be brought around to Gath...","And they brought aroud the ark of...","But after they had brought it around","heavy very the hand of God there","And he struck the men of the twon of that place greatly","they were stricken with tumours","And the sent the ark of God to Eqron","And when the ark of God came to Eqron","And the Eqronites cried out","THe ark of the God of Israel has come on me to kill and to my people","And they sent for and gathered all the lords of the Philistines","and said send the ark of the God of Israel and put it in its place","And I and my people will not die","For there had been destruction of death in all the city","heavy much the hand of God on it", "And the men who did not die","were stricken with tumours","And went up the cry of the city to heaven"];






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
