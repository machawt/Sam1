let cnt=-1;

let txt=["וַיְהִי *אִישׁ* אֶחָד *מִן־*הָרָמָתַיִם *צוֹפִים *מֵהַר* אֶפְרָיִם","וּשְׁמוֹ *אֶלְקָנָה *בֶּן־יְרֹחָם* בֶּן־אֱלִיהוּא *בֶּן־תֹּחוּ *בֶן־צוּף *אֶפְרָתִֽי.", "וְלוֹ *שְׁתֵּי *נָשִׁים *שֵׁם *אַחַת *חַנָּה *וְשֵׁם *הַשֵּׁנִית *פְּנִנָּה","וַיְהִי *לִפְנִנָּה *יְלָדִים *וּלְחַנָּה *אֵין *יְלָדִֽים׃","וְעָלָה *הָאִישׁ *הַהוּא *מֵֽעִירוֹ *מִיָּמִים *יָמִימָה *לְהִֽשְׁתַּחֲוֺת *וְלִזְבֹּחַ *לַיהוָה *צְבָאוֹת *בְּשִׁלֹה"," וְשָׁם *שְׁנֵי *בְנֵֽי־*עֵלִי *חָפְנִי *וּפִנְחָס *כֹּהֲנִים *לַיהוָֽה׃","וַיְהִי *הַיּוֹם *וַיִּזְבַּח *אֶלְקָנָה *וְנָתַן *לִפְנִנָּה *אִשְׁתּוֹ *וּֽלְכָל־*בָּנֶיהָ *וּבְנוֹתֶיהָ *מָנֽוֹת:","וּלְחַנָּה *יִתֵּן *מָנָה *אַחַת *אַפָּיִם ","כִּי *אֶת־חַנָּה *אָהֵב *וַֽיהוָה *סָגַר *רַחְמָֽהּ׃","וְכִֽעֲסַתָּה *צָֽרָתָהּ *גַּם־*כַּעַס","בַּעֲבוּר *הַרְּעִמָהּ *כִּֽי־*סָגַר *יְהוָה *בְּעַד *רַחְמָֽהּ׃","*וְכֵן *יַעֲשֶׂה *שָׁנָה *בְשָׁנָה *מִדֵּי *עֲלֹתָהּ *בְּבֵית *יְהוָה ","כֵּן *תַּכְעִסֶנָּה *וַתִּבְכֶּה *וְלֹא *תֹאכַֽל׃","וַיֹּאמֶר *לָהּ *אֶלְקָנָה *אִישָׁהּ *חַנָּה *לָמֶה *תִבְכִּי *וְלָמֶה ","לֹא *תֹֽאכְלִי *וְלָמֶה *יֵרַע *לְבָבֵךְ ","הֲלוֹא *אָֽנֹכִי *טוֹב *לָךְ *מֵעֲשָׂרָה *בָּנִֽים׃","וַתָּקָם *חַנָּה *אַחֲרֵי *אָכְלָה *בְשִׁלֹה *וְאַחֲרֵי *שָׁתֹה ","וְעֵלִי *הַכֹּהֵן *יֹשֵׁב *עַל־*הַכִּסֵּא *עַל־*מְזוּזַת *הֵיכַל *יְהוָֽה׃","וְהִיא *מָרַת *נָפֶשׁ *וַתִּתְפַּלֵּל *עַל־*יְהוָה *וּבָכֹה *תִבְכֶּֽה׃","וַתִּדֹּר *נֶדֶר *וַתֹּאמַר, *יְהוָה *צְבָאוֹת ","אִם-*רָאֹה *תִרְאֶה *בָּעֳנִי *אֲמָתֶךָ *וּזְכַרְתַּנִי","וְלֹא-*תִשְׁכַּח *אֶת-*אֲמָתֶךָ, *וְנָתַתָּה *לַאֲמָתְךָ,*זֶרַע *אֲנָשִׁים","וּנְתַתִּיו *לַיהוָה *כָּל-*יְמֵי *חַיָּיו,"," וּמוֹרָה *לֹא-*יַעֲלֶה *עַל-*רֹאשׁוֹ.","וְהָיָה *כִּי *הִרְבְּתָה *לְהִתְפַּלֵּל *לִפְנֵי *יְהוָה;","וְעֵלִי *שֹׁמֵר *אֶת-*פִּיהָ","וְחַנָּה, *הִיא *מְדַבֶּרֶת *עַל-*לִבָּהּ--*רַק *שְׂפָתֶיהָ *נָּעוֹת,"," וְקוֹלָהּ *לֹא *יִשָּׁמֵעַ; *וַיַּחְשְׁבֶהָ *עֵלִי *לְשִׁכֹּרָה","וַיֹּאמֶר *אֵלֶיהָ *עֵלִי, *עַד-*מָתַי *תִּשְׁתַּכָּרִין; ","הָסִירִי *אֶת-*יֵינֵךְ, *מֵעָלָיִךְ","וַתַּעַן *חַנָּה *וַתֹּאמֶר,*לֹא *אֲדֹנִי, *אִשָּׁה *קְשַׁת-*רוּחַ *אָנֹכִי, ","וְיַיִן *וְשֵׁכָר *לֹא *שָׁתִיתִי; ","וָאֶשְׁפֹּךְ *אֶת-*נַפְשִׁי, *לִפְנֵי *יְהוָה","אַל-*תִּתֵּן, *אֶת-*אֲמָתְךָ, *לִפְנֵי, *בַּת-*בְּלִיָּעַל: ","כִּי-*מֵרֹב *שִׂיחִי *וְכַעְסִי, ","דִּבַּרְתִּי *עַד-*הֵנָּה","וַיַּעַן *עֵלִי *וַיֹּאמֶר, *לְכִי *לְשָׁלוֹם;","וֵאלֹהֵי *יִשְׂרָאֵל, *יִתֵּן *אֶת-*שֵׁלָתֵךְ","אֲשֶׁר *שָׁאַלְתְּ, *מֵעִמּוֹ","וַתֹּאמֶר, *תִּמְצָא *שִׁפְחָתְךָ *חֵן *בְּעֵינֶיךָ; ","וַתֵּלֶךְ *הָאִשָּׁה *לְדַרְכָּהּ *וַתֹּאכַל, ","וּפָנֶיהָ *לֹא-*הָיוּ-*לָהּ *עוֹד","וַיַּשְׁכִּמוּ *בַבֹּקֶר, *וַיִּשְׁתַּחֲווּ *לִפְנֵי *יְהוָה, ","וַיָּשֻׁבוּ *וַיָּבֹאוּ *אֶל-*בֵּיתָם, *הָרָמָתָה; ","וַיֵּדַע *אֶלְקָנָה *אֶת-*חַנָּה *אִשְׁתּוֹ, *וַיִּזְכְּרֶהָ *יְהוָה","וַיְהִי *לִתְקֻפוֹת *הַיָּמִים, *וַתַּהַר *חַנָּה ","וַתֵּלֶד *בֵּן; *וַתִּקְרָא *אֶת-*שְׁמוֹ *שְׁמוּאֵל, ","כִּי *מֵיְהוָה *שְׁאִלְתִּיו","וַיַּעַל *הָאִישׁ *אֶלְקָנָה, ","וְכָל-*בֵּיתוֹ, *לִזְבֹּחַ *לַיהוָה *אֶת-*זֶבַח *הַיָּמִים, ","וְאֶת-*נִדְרוֹ *וְחַנָּה, *לֹא *עָלָתָה:  ","כִּי-*אָמְרָה *לְאִישָׁהּ, *עַד *יִגָּמֵל *הַנַּעַר ","וַהֲבִאֹתִיו *וְנִרְאָה *אֶת-*פְּנֵי *יְהוָה, ","וְיָשַׁב *שָׁם,*עַד-*עוֹלָם","וַיֹּאמֶר *לָהּ *אֶלְקָנָה *אִישָׁהּ *עֲשִׂי *הַטּוֹב *בְּעֵינַיִךְ, ","שְׁבִי *עַד-*גָּמְלֵךְ *אֹתוֹ--*אַךְ *יָקֵם *יְהוָה, *אֶת-*דְּבָרוֹ; ","וַתֵּשֶׁב *הָאִשָּׁה *וַתֵּינֶק *אֶת-*בְּנָהּ, *עַד-*גָּמְלָהּ *אֹתוֹ","וַתַּעֲלֵהוּ *עִמָּהּ *כַּאֲשֶׁר *גְּמָלַתּוּ, ","בְּפָרִים *שְׁלֹשָׁה *וְאֵיפָה *אַחַת *קֶמַח *וְנֵבֶל *יַיִן, ","וַתְּבִאֵהוּ *בֵית-*יְהוָה, *שִׁלוֹ; *וְהַנַּעַר, *נָעַר","וַיִּשְׁחֲטוּ, *אֶת-*הַפָּר; *וַיָּבִאוּ *אֶת-*הַנַּעַר, ","אֶל-*עֵלִי","וַתֹּאמֶר *בִּי *אֲדֹנִי, *חֵי *נַפְשְׁךָ *אֲדֹנִי; ","אֲנִי *הָאִשָּׁה, *הַנִּצֶּבֶת *עִמְּכָה *בָּזֶה, *לְהִתְפַּלֵּל, *אֶל-*יְהוָה","אֶל-*הַנַּעַר *הַזֶּה, ","הִתְפַּלָּלְתִּי; *וַיִּתֵּן *יְהוָה *לִי *אֶת-*שְׁאֵלָתִי, ","אֲשֶׁר *שָׁאַלְתִּי *מֵעִמּוֹ","וְגַם *אָנֹכִי, *הִשְׁאִלְתִּהוּ *לַיהוָה, *כָּל-*הַיָּמִים *אֲשֶׁר *הָיָה,","הוּא *שָׁאוּל *לַיהוָה; *וַיִּשְׁתַּחוּ *שָׁם, *לַיהוָה.","000"]

/* 
 */

let engs=["1 Sam 1.1a","1 Sam 1.1b","1 Sam 1.2a","1 Sam 1.2b","1 Sam 1.3a","1 Sam 1.3b","1 Sam 1.4","1 Sam 1.5","1 Sam 1.6","1 Sam 1.7","1 Sam 1.8a","1 Sam 1.8b","1 Sam 1.9","1 Sam 1.9b","1 Sam 1.10","1 Sam 1.11a","1 Sam 1.11b","1 Sam 1.11c","1 Sam 1.12","1 Sam 1.12b","1 Sam 1.12cb","1 Sam 1.13a","1 Sam 1.13b","1 Sam 1.13c","1 Sam 1.11a","1 Sam 1.11b","1 Sam 1.11c","1 Sam 1.11d","1 Sam 1.12a","1 Sam 1.12b","1 Sam 1.13a","1 Sam 1.13b","1 Sam 1.14","1 Sam 1.15","1 Sam 1.16a","1 Sam 1.16b","1 Sam 1.17","1 Sam 1.17b","1 Sam 1.18","1 Sam 1.19","1 Sam 1.20","1 Sam 1.18","1 Sam 1.17","1 Sam 1.17b","1 Sam 1.18","1 Sam 1.17","1 Sam 1.17b","1 Sam 1.18"];
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