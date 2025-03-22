function callpv(aff_id)
{
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-M7E3P87KRC', {
  'send_page_view': false,
  'custom_param1': aff_id,
});
  gtag('event', aff_id, {
  'send_to': 'G-M7E3P87KRC',
 'event_category': 'pageview',
            'event_label': aff_id,
 'value': 1,
 'non_interaction': true
        });
}
function loadGtag(aff_id) {
gaMeasurementId="G-M7E3P87KRC";
 if (typeof gtag === 'function') {
callpv(aff_id);
    return; 
}
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); }; 
    document.head.appendChild(script);
    script.onload = function() {
callpv(aff_id);
};
    script.onerror = function() {
        console.error('Failed to load gtag.js');
};
}
function loadblockevent(adunitname)
{
gtag('event', '551817_block', {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'block', 
 'event_label':adunitname, 
            'value': 1, 
 'non_interaction': true
        }); 
}
function loadblock()
{
gtag('event', '551817_block', {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'block', 
 'event_label': '551817_block', 
            'value': 1, 
 'non_interaction': true
        }); 
} 
function loadblockaff(adunitname,aff_id)
{
gtag('event', aff_id, {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'block', 
 'event_label':adunitname, 
            'value': 1, 
 'non_interaction': true
        }); 
}
function loadclickaff(adunitname,aff_id)
{
gtag('event', aff_id, {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'click', 
 'event_label':adunitname, 
            'value': 1, 
 'non_interaction': true
        }); 
}
function loadpubstats(bidder,aff_id,price)
{
gtag('event', aff_id, {
 'send_to': 'G-M7E3P87KRC',
           'event_category': 'prebidstats', 
'event_label':bidder, 
           'value': price, 
'non_interaction': true,
 'timestamp': new Date().getTime()
     }); 
}

try{if(aff_var==undefined)aff_var=Array();}catch(e){aff_var=Array()}aff_var.push(551817);if(aff_var.length==1){var time_interval=500;
var status=1;

var videolabel=Array();
var geoedge=1;
var geopercent=5;
var geoedge=1;
var min_view_andbeyond=0;
var min_view=0;
var timebased_refresh_andbeyond=60;
var hijackabm=0;
var unfilledabm=1;
var andbeyondnewarray={};
var residual=1;
var residual2=residual;
var responsec={};
function settargetkeys(id1,andbeyondnewarray,flag_active,visible,count,adunit2,type)
{

 googletag.cmd.push(function () { 
if(id1!=undefined)
{
try{
id1.setTargeting('prebidtrue', '0');
id1.setTargeting('adunit' ,adunit2);
if(andbeyondnewarray.hijackadunitkey==1)
 id1.setTargeting('andbeyondhijack', '1');
else
  id1.setTargeting('andbeyondhijack', '0');

if(andbeyondnewarray.unfilledadunitkey==1)
   id1.setTargeting('andbeyondunfilled', '1');
else
  id1.setTargeting('andbeyondunfilled', '0');

if(andbeyondnewarray.view)
  id1.setTargeting('viewpercent', andbeyondnewarray.view);

var refreshkey='other';
if(flag_active==undefined || flag_active==0)
{
if(visible==true)
refreshkey='inactivevisible';
else
refreshkey='inactiveinvisible';
}
else
{
if(visible==true)
refreshkey='activevisible';
else
refreshkey='activeinvisible';
}
if(flag_active==undefined || flag_active==0)
id1.setTargeting("active","0");
else
id1.setTargeting("active","1");
if(visible==true)
id1.setTargeting("visible","1");
else
id1.setTargeting("visible","0");
if(flag_active==5)
refreshkey='newunit';
if(flag_active==4)
refreshkey='intersectionrefresh';
if(flag_active==3)
refreshkey='slotrefresh';
if(flag_active==2)
refreshkey='instarefresh';
if(flag_active==-1)
refreshkey='unfilledfirstlook';
if(flag_active==-2)
refreshkey='hijack';
id1.setTargeting('refreshtype', refreshkey);



var andbeyondkeyname='activevisible';
if((visible==true && flag_active==1))
{
andbeyondkeyname='activevisible';

}
if((visible==true && flag_active==0))
{
andbeyondkeyname='inactivevisible';

}

if((visible==false && flag_active==1))
{
andbeyondkeyname='activeinvisible';

}
if((visible==false && flag_active==0))
{
andbeyondkeyname='inactiveinvisible';

}


if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes('refresh1'))
id1.clearTargeting('refresh1');
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes('activevisible'))
id1.clearTargeting('activevisible');

if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes('inactivevisible'))
id1.clearTargeting('inactivevisible');
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes('activeinvisible'))
id1.clearTargeting('activeinvisible');
if(id1.getTargetingKeys().length>0 && id1.getTargetingKeys().includes('inactiveinvisible'))
id1.clearTargeting('inactiveinvisible');


if(type==1 && flag_active!=undefined && flag_active>=2 && flag_active<=4)
{
if(count>=10)
refreshkey=refreshkey+'10';
else
refreshkey=refreshkey+count;
}
if(flag_active!=undefined &&( flag_active==-1 || flag_active==-2 ||  flag_active>=2)){
count=0;
if(type==0 && visible==true)
refreshkey='firstlookvisible';
if(type==0 && visible==false)
refreshkey='firstlookinvisible';
id1.setTargeting('activevisible',refreshkey);}
if(count>0 && type==0)
{
count=0;
if(visible==true)
id1.setTargeting('activevisible','firstlookvisible');
else
id1.setTargeting('activevisible','firstlookinvisible');
}
  if(count==1){
  id1.setTargeting(andbeyondkeyname,'1');
  }else if(count==2){
  id1.setTargeting(andbeyondkeyname,'2');
  }else if(count==3){
  id1.setTargeting(andbeyondkeyname,'3');
  }else if(count==4){
  id1.setTargeting(andbeyondkeyname,'4');
  }else if(count==5){
  id1.setTargeting(andbeyondkeyname,'5');
  }else if(count==6){
  id1.setTargeting(andbeyondkeyname,'6');
  }else if(count==7){
  id1.setTargeting(andbeyondkeyname,'7');
  }else if(count==8){
  id1.setTargeting(andbeyondkeyname,'8');
  }else if(count==9){
  id1.setTargeting(andbeyondkeyname,'9');
  }else if(count>=10){
  id1.setTargeting(andbeyondkeyname,'10');
  }else{
    
  }

if(count==1)
id1.setTargeting('refresh1','1');
if(count==2)
id1.setTargeting('refresh1','2');
if(count==3)
id1.setTargeting('refresh1','3');
if(count==4)
id1.setTargeting('refresh1','4');
if(count==5)
id1.setTargeting('refresh1','5');
if(count==6)
id1.setTargeting('refresh1','6');
if(count==7)
id1.setTargeting('refresh1','7');
if(count==8)
id1.setTargeting('refresh1','8');
if(count==9)
id1.setTargeting('refresh1','9');
if(count>=10)
id1.setTargeting('refresh1','10');
}
catch(e)
{
 console.log('EXCEPTION in setting values'+e.stack);
 }
}

});

}
function adunitnamecheck(newvs2) {
var adunitnamec = newvs2;
let iframeElement = null;
var iframesnew = document.getElementsByTagName('iframe');
for (let i = 0; i < iframesnew.length; i++) {
var iframe2 = iframesnew[i];
var iframeIdnew = iframe2.getAttribute('id');
 if (iframeIdnew && iframeIdnew.includes('google_ads')) {
   var iframeIdnew = iframe2.parentNode.parentNode.getAttribute('id');
  if (iframeIdnew === adunitnamec) {
   iframeElement = iframe2;
   break;
 }
  }
 }
if (iframeElement) {
try {
  var iframeIdnew = iframeElement.getAttribute('id');
 if (iframeIdnew) {
   adunitnamec = iframeIdnew;
 }
 } catch (e) {
    console.log('iframeIdnew' + e +'new'+newvs2);
 }
try {
 if (adunitnamec.indexOf('google_ads_iframe_') >= 0) {
  adunitnamec = adunitnamec.replaceAll('google_ads_iframe_', '');
 pos = adunitnamec.lastIndexOf('/');
 if (pos > 0)
   adunitnamec = adunitnamec.substring(pos + 1);
 len = adunitnamec.length;
   pos123 = adunitnamec.substring(len - 2, len - 1);
if (pos123 == '_') {
  adunitnamec = adunitnamec.substring(0, len - 2);
  }
  adunitnamec = adunitnamec.substring(0, 40);
  return adunitnamec;
  }
  } catch (e) {
    console.log('adunitname' + e +'new'+newvs2);
  }
   }
 }

country_rtb1="TW";conditionblocklogic={};conditionblock='if(conditionblocklogic[id]){if(conditionblocklogic[id]["WW"])country_new="WW";else country_new=country_rtb1;if(!conditionblocklogic[id][country_new])false; else eval(conditionblocklogic[id][country_new]);  }else{if(conditionblocklogic["ALL"] && conditionblocklogic["ALL"]["WW"]){country_new="WW";}else {country_new=country_rtb1;};if(!conditionblocklogic["ALL"] || !conditionblocklogic["ALL"][country_new])false; else eval(conditionblocklogic["ALL"][country_new]);}';
conditionblock="false";var urlandbeyond=window.location.origin + window.location.pathname;
block_segment_url='//rtbcdn.andbeyond.media/block_segment_multi_551817.js';
conditionseg=false;
andbeyondurl=window.location.href;
(function () {
 var gads = document.createElement('script');
 gads.type = 'text/javascript';
 gads.async = true;
 var useSSL = 'https:' == document.location.protocol;
 gads.src = (useSSL ? 'https:' : 'http:') +
        block_segment_url;
 var node = document.getElementsByTagName('script')[0];
 node.parentNode.insertBefore(gads, node);
  })();
videoid = null;
randNumberand =0;
randNumbervid =1;
randNumberinter =1;
randNumbercube =0;
try{
window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(function() {
randnum = Math.floor(Math.random() * 5) + 1;
if(randnum==1){
randnum=Math.round(Math.random());
if(randnum==1)randNumberinter=1; else randNumberinter=0;
if(randnum==1)googletag.pubads().setTargeting("inter","1");else googletag.pubads().setTargeting("inter","0");}
randnum = Math.floor(Math.random() * 5) + 1;
if(randnum==1){
randnum=Math.round(Math.random());
if(randnum==1)googletag.pubads().setTargeting("cubenew","1");else googletag.pubads().setTargeting("cubenew","0");}
});
}
catch(e)
{
console.log(e.stack);
}
sidesanim=2;
maxvariation=1;
googlevalue=1;
usesame=0;

        function modifystyle(sides, maxvariation) {
            if (document.getElementById("rtbstyle")) {
                document.head.removeChild(document.getElementById("rtbstyle"));
            }
            styleElement = document.createElement("style");
            styleElement.id = "rtbstyle";

            if (sides == 6 && maxvariation == 3) {
                styleElement.textContent = `
           .facertb:hover {
    animation-play-state: paused;
}
.facertb {
position: absolute;
width: 100%;
height: 100%;
border: 1px solid #ccc;
box-sizing: border-box;
background: #fff;
overflow: hidden;
}

.contentrtb {
width: calc(100% - 2px); 
height: calc(100% - 2px);
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
}



.facertb {
    transform : scale(0.5);
}
.frontrtb { 
    transform: translateZ(75px) scale(0.5);
}
.backrtb { 
    transform: rotateY(180deg) translateZ(75px) scale(0.5);
}
.rightrtb { 
    transform: rotateY(90deg) translateZ(75px) scale(0.5);
}
.leftrtb { 
    transform: rotateY(-90deg) translateZ(75px) scale(0.5);
}
.toprtb { 
    transform: rotateX(90deg) translateZ(63px) scale(0.5);
}
.bottomrtb { 
    transform: rotateX(-90deg) translateZ(63px) scale(0.5);
}


@keyframes rotatenew {

0%, 100% { transform: rotateX(0) rotateY(0); }
25% { transform: rotateX(90deg) rotateY(0); }
50% { transform: rotateX(90deg) rotateY(90deg); }
75% { transform: rotateX(90deg) rotateY(180deg); }
}
`;


            }
            else if (sides == 6 && maxvariation == 2) {
                styleElement.textContent = `

         
.facertb {
position: absolute;
width: 100%;
height: 100%;
border: 1px solid #ccc;
box-sizing: border-box;
background: #fff;
overflow: hidden;
}

.contentrtb {
width: calc(100% - 2px);
height: calc(100% - 2px);
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
}
.facertb {
    transform : scale(0.5);
}
.frontrtb { 
    transform: translateZ(75px) scale(0.5);
}
.backrtb { 
    transform: rotateY(180deg) translateZ(75px) scale(0.5);
}
.rightrtb { 
    transform: rotateY(90deg) translateZ(75px) scale(0.5);
}
.leftrtb { 
    transform: rotateY(-90deg) translateZ(75px) scale(0.5);
}
.toprtb { 
    transform: rotateX(90deg) translateZ(64px) scale(0.5);
}
.bottomrtb { 
    transform: rotateX(-90deg) translateZ(64px) scale(0.5);
}



@keyframes rotatenew-hover {
    0%, 100% { transform: rotateX(0deg); }
}


@keyframes rotatenew {

0%, 100% { transform: rotateX(0) rotateY(0); }
25% { transform: rotateX(90deg) rotateY(0); }
50% { transform: rotateX(90deg) rotateY(90deg); }
75% { transform: rotateX(90deg) rotateY(180deg); }
}


.cubertb:hover {
    animation-play-state: paused;
}
`;
            }

            else if (sides == 2) {

                styleElement.textContent = `
.frontrtb {
        transform: translateZ(20px) scale(0.7);
}


.facertb {

    position: absolute;
    width: 300px;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
overflow: hidden;
}
@keyframes rotatenew {
            0%{ transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }
.backrtb {
    transform: rotateY(180deg) translateZ(20px) scale(0.7);
}
.leftrtb {
    transform: rotateY(-90deg) translateZ(-14px) scale(0.7);
}
.toprtb {
    transform: rotateY(90deg) translateZ(225px) scale(0.7);
}
    `;
            }


            else if(sides == 4) {
                styleElement.textContent = `


.facertb {
position: absolute;
width: 100%;
height: 100%;
border: 1px solid #ccc;
background: #fff;
overflow: hidden;
box-sizing: border-box; /* Include border in dimensions */
}

.contentrtb {
width: calc(100% - 2px); /* Account for border width */
height: calc(100% - 2px); /* Account for border width */
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
}



.facertb {
    transform : scale(0.7);
}
.frontrtb { 
    transform: translateZ(102px) scale(0.7);
}
.backrtb { 
    transform: rotateY(180deg) translateZ(102px) scale(0.7);
}
.rightrtb { 
    transform: rotateY(90deg) translateZ(102px) scale(0.7);
}
.leftrtb { 
  
    transform: rotateY(-90deg)  translateZ(105px) scale(0.7);

}
.toprtb { 

    transform: rotateY(90deg) translateZ(105px) scale(0.7);

}
.bottomrtb { 
    transform: rotateX(-90deg) translateZ(75px) scale(0.7);
}




@keyframes rotatenew {
0% { transform: rotateY(0); }
100% { transform: rotateY(360deg); }
}
`;
            }
            document.head.appendChild(styleElement);
        }



        var responsec = {};
        function anilogic(slotid, widthr, heightr, slotadid, usesame, maxvariation, sides,googleyes) {
   googletag.cmd.push(function () {
    modifystyle(sides, maxvariation);
          
 existingDiv = document.getElementById(slotid);


                childDiv = existingDiv.parentElement;
childDiv.style.removeProperty("overflow");
                

                existingDiv.classList.add("facertb");
                existingDiv.classList.add("frontrtb");

                childDiv = existingDiv.parentElement;
                childDiv.classList.add("cubertb");

                childDiv.style.width = widthr + "px";
                childDiv.style.height = heightr + "px";
                childDiv.style.transformStyle = "preserve-3d";
                childDiv.style.position = "relative";
                childDiv.style.animationPlayState = "running";
                childDiv.style.animation = "rotatenew 10s infinite linear";
                childDiv.addEventListener("mouseover", function () {
                    this.style.animationPlayState = "paused";

                });

                childDiv.addEventListener("mouseout", function () {
                    this.style.animationPlayState = "running";
                });



  adida = Array();

            adid = null;

len=0;
if(responsec[widthr] && responsec[widthr][heightr])
{
 responsec[widthr][heightr] = shuffleArray1(responsec[widthr][heightr]);
            responsec[widthr][heightr] = shuffleArray(responsec[widthr][heightr]);

            console.log("SHREYANS" + slotadid + JSON.stringify(responsec));

            for (i = 0; i < responsec[widthr][heightr].length; i++) {
                if (!adida.includes(responsec[widthr][heightr][i]["adid"]) && responsec[widthr][heightr][i]["priority"] > 0) {

                    adid = responsec[widthr][heightr][i]["adid"];

                    if (len < maxvariation) {
                        len++;
                        adida.push(adid);
                    }
                }

            }

}
 if (slotadid !== null && slotadid !== undefined) {
                adida.push(slotadid.toString());
                len++;
            }
  if ((slotadid == null || slotadid == undefined) && adida.length > 0)
                slotadid = adida[0];


            if (adida.length == 0 && googleyes==1) {


                modifystyle(2, maxvariation);
                sides = 0;

            }

            numinit = -1;
if(googleyes==1)
{
               
pos1 = Math.floor(Math.random() * 5) + 1;

var slotidcube= slotid.replace("andbeyond", "cube");
idextra = "cubextra" + slotidcube+ widthr + pos1;
sizeslot=widthr+"-"+heightr;
sizenew=[[widthr,heightr]];
 textnew="/21751243814,303462569/551817-ANIMATION-"+pos1;
text="googletag.defineSlot(textnew, sizenew,idextra).addService(googletag.pubads());";   
            console.log("TEXTAGAINEW" + text);



idextra1=null;
            try {
try
{
idextra1=eval(idextra);
}
catch(e)
{
}
if(idextra1==undefined || idextra1==null)
{
                    idextra1 = eval(text);
 eval(idextra + " = idextra1");

            }
            }
            catch (e) {


                console.log("CREATION EXCEPTION" + e + "FOR ID");
            }


            i = 0;
            idextra1 = null;



            if (i == 0 ) {
                var newDiv = document.createElement("div");
                //newDiv.setAttribute("id", idextra);
                newDiv.setAttribute("width", widthr);
                newDiv.setAttribute("height", heightr);

                var newDiv1 = document.createElement("div");

                newDiv1.setAttribute("id", idextra);
                newDiv1.setAttribute("width", widthr);
                newDiv1.setAttribute("height", heightr);

                   newDiv.classList.add("NO_REFRESH");
                   newDiv.classList.add("facertb");
                 newDiv.classList.add("backrtb");
                



                newDiv.appendChild(newDiv1);
                // Create a new script element
                var adScript = document.createElement("script");

                // Set the type attribute of the script
                adScript.type = "text/javascript";

                // Set the content of the script
                adScript.innerHTML = `
    googletag.cmd.push(function() {
idextra1=eval(idextra);
if(idextra1!=undefined)
{
 idextra1.setTargeting("extra", "551817");
         idextra1.setTargeting("prebidtrue", "0");
        googletag.display(idextra);
        googletag.pubads().refresh([idextra1]);
}
    });
`;

                // Append the script element to the div
                newDiv1.appendChild(adScript);

                existingDiv = document.getElementById(slotid);


                childDiv = existingDiv.parentElement;
                childDiv.appendChild(newDiv);


            }



}
if(googleyes==1)
ivalue=1;
else
ivalue=0;

if(sides==0 || sides==2)
{

                existingDiv = document.getElementById(slotid);


                childDiv = existingDiv.parentElement;

for(i=0;i<2;i++)
{
  var newDiv = document.createElement('div');
                newDiv.setAttribute('id', 'rtbani');
                newDiv.setAttribute('width', widthr);
                newDiv.setAttribute('height', heightr);
 newDiv.classList.add('facertb');

if (i == 0)
                        newDiv.classList.add('leftrtb');
                    if (i == 1)
                        newDiv.classList.add('toprtb');


style1 = 'height:250px;width: 60px;margin:0 auto;text-align:center;background: #f9f4f4;;';
                newDiv.setAttribute('style', style1);

                childDiv.appendChild(newDiv);

}
}
            for (i = ivalue; i < (sides - 1); i++) {

                if (usesame == 1) {
                    adid = slotadid.toString();
                }
                else {

                    numinit++;
                    if (numinit > (len - 1))
                        numinit = 0;
                    adid = adida[numinit];

                }

                existingDiv = document.getElementById(slotid);


                childDiv = existingDiv.parentElement;

                var newDiv = document.createElement("div");
                newDiv.setAttribute("id", "rtbani");
                newDiv.setAttribute("width", widthr);
                newDiv.setAttribute("height", heightr);
 newDiv.classList.add("facertb");
                
if (maxvariation == 2 || maxvariation==1) {
                    newDiv.classList.add("facertb");

                    if (i == 0)
                        newDiv.classList.add("backrtb");
                    if (i == 1)
                        newDiv.classList.add("leftrtb");
                    if (i == 2)
                        newDiv.classList.add("toprtb");
                    if (i == 3)
                        newDiv.classList.add("rightrtb");
                    if (i == 4)
                        newDiv.classList.add("bottomrtb");

                }
                else if (maxvariation == 3) {
                    newDiv.classList.add("facertb");
                    if (i == 0)
                        newDiv.classList.add("bottomrtb");
                    if (i == 1)
                        newDiv.classList.add("rightrtb");
                    if (i == 2)
                        newDiv.classList.add("backrtb");
                    if (i == 3)
                        newDiv.classList.add("toprtb");
                    if (i == 4)
                        newDiv.classList.add("leftrtb");
                }
                else {
                    newDiv.classList.add("facertb");
                    if (i == 0)

                        newDiv.classList.add("backrtb");

                    if (i == 1)
                        newDiv.classList.add("leftrtb");
                    if (i == 2)



                        if (i == 3)
                            newDiv.classList.add("toprtb");

                    if (i == 4)
                        newDiv.classList.add("bottomrtb");
                }
                style1 = "height:" + heightr + "px; width:" + widthr + "px;margin:0 auto;text-align:center";
                newDiv.setAttribute("style", style1);
                var newFrame = document.createElement("iframe");
                newFrame.setAttribute("id", "rtbani");
                newFrame.setAttribute("FRAMEBORDER", "0");
                newFrame.setAttribute("SCROLLING", "no");
                newFrame.setAttribute("MARGINHEIGHT", "0");
                newFrame.setAttribute("MARGINWIDTH", "0");
                newFrame.setAttribute("TOPMARGIN", "0");
                newFrame.setAttribute("LEFTMARGIN", "0");
                newFrame.setAttribute("ALLOWTRANSPARENCY", "true");
                newFrame.setAttribute("WIDTH", "0");
                newFrame.setAttribute("HEIGHT", "0");
                newDiv.appendChild(newFrame);

                childDiv.appendChild(newDiv);

                pbjs.renderAd(newFrame.contentWindow.document, adid);
                adid1 = adid.toString();

                responsec[widthr][heightr] = changePriority(responsec[widthr][heightr], adid1);


            }

});

        }
        function removalrtb(slotid) {

            if (slotid.indexOf("andbeyond") >= 0) {
                existingDiv = document.getElementById(slotid);




existingDiv.parentElement.style.overflow = "hidden";
                if (existingDiv.parentElement.classList.contains("cubertb")) {
                    childElements = existingDiv.parentElement.children;

                    len = childElements.length;
                    for (i = 0; i < len; i++) {
                        sibling = childElements[i];
                        if (!sibling.classList.contains("frontrtb")) {

                            sibling.remove();
                            i--;
                            len--;

                        }
else
existingDiv.classList.remove("frontrtb");
                    }

existingDiv.parentElement.classList.remove("cubertb")


                if (existingDiv.classList.contains("facertb")) 
                    existingDiv.classList.remove("facertb");



                    existingDiv.parentElement.removeAttribute("style");


                }

            }
        }

function changePriority(responsec,changev) {
  let ads = responsec;
 rtbtime=Date.now();
 for (let i = 0; i < ads.length; i++) {
 if ((ads[i].adid === changev) || (ads[i].expiry_time<=rtbtime)) {
    ads[i].priority = 0;
  }
}
return ads;
}
function getpriority(num) {
num=num*1000;
 if (num < 1) {
  num = 0;
return num;
   } else if (num > 1000) {
      num = 1000;
  }
 let normalized = num / 1000;
 let converted = Math.floor(normalized * 1000) + 1;
return Math.min(converted, 1000);
}
function shuffleArray1(array) {
   for (let i = array.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}
function shuffleArray(array) {
   array.sort((a, b) => b.priority - a.priority);
 return array;
}

var refresh_andbeyond=30;
var number=100;
var refresh=30;
floorlogic=0;
var iframes=0;
var machine_rules={};
var label_adapter_video={};
var label_adapter_display={"33across":["33across1"],"abmanx":["abmanx1"],"abmoftmedia":["abmoftmedia13"],"criteointl":["cirteointl2","criteointl1"],"criteo":["criteo1","criteo2"],"eplanning":["eplan1"],"getapp":["getapp1"],"grid":["grid1","grid2"],"improvedigital":["improve1"],"project-limelight":["lime1"],"oftmedia":["oft1"],"onetag":["onetag1","onetag11","onetag12","onetag13","onetag14"],"openx":["openx1"],"smaato":["smaato1"],"smartadserver":["smartadservernew","smartadservernew1"],"ucfunnel":["ucfunnel1","ucfunnel2"]};
var config_rtb={};
var adapter_rtb_new={"andbeyond300":[26],"andbeyond320":[15],"andbeyond100":[9],"andbeyond468":[10],"andbeyond160":[10],"andbeyond120":[10],"andbeyond970":[12],"andbeyond970250":[12],"andbeyond728":[22],"andbeyond600":[17],"andbeyond320480":[null]};
var home_country="TW";
var adunit_network=[];
bidder_allowed_native={};
bidder_allowed_video={};
var getQueryString_val_new = function ( field, url ) {
   var href = url ? url : window.location.href;
   var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function bidder_restrict(flag_active,visible,country_rtb1,special_var)
{
zonename='ASI';
try
{
if(timezonename && timezonename.toLowerCase().indexOf('europe')>=0)
zonename='EUR';
if(timezonename && timezonename.toLowerCase().indexOf('america')>=0)
zonename='LAT';
}catch(e){}
try
{
if(Countrytimezone && Countrytimezone.toLowerCase().indexOf('europe')>=0)
zonename='EUR';
if(Countrytimezone && Countrytimezone.toLowerCase().indexOf('america')>=0)
zonename='LAT';
}catch(e){}
labelnew=Array();
var windowwidth = window.innerWidth;
if(windowwidth<=767)
device="MOBILE";
else
device="DESKTOP";
var restrict_bidder1={"DISPLAY":{"33across":{"US":{"ALL":{"label":"33across1","keyname":"all"}}},"abmanx":{"ALL":{"ALL":{"label":"abmanx1","keyname":"visible=1"}}},"abmoftmedia":{"ALL":{"VISIBLE=1":{"label":"abmoftmedia13","keyname":"all"}}},"criteointl":{"ALL":{"ALL":{"label":"cirteointl2","keyname":"all"}},"IN":{"ALL":{"label":"criteointl1","keyname":"block"}}},"criteo":{"IN":{"ALL":{"label":"criteo1","keyname":"all"}},"ALL":{"ALL":{"label":"criteo2","keyname":"block"}}},"eplanning":{"US":{"ALL":{"label":"eplan1","keyname":"all"}}},"getapp":{"ALL":{"ALL":{"label":"getapp1","keyname":"visible=1"}}},"grid":{"IN":{"ALL":{"label":"grid1","keyname":"active=1,visible=1"}},"ALL":{"ALL":{"label":"grid2","keyname":"all"}}},"improvedigital":{"US":{"ALL":{"label":"improve1","keyname":"all"}}},"project-limelight":{"ALL":{"MOBILE":{"label":"lime1","keyname":"all"}}},"oftmedia":{"ALL":{"ALL":{"label":"oft1","keyname":"all"}}},"onetag":{"US":{"ALL":{"label":"onetag1","keyname":"all"}},"EUR":{"ALL":{"label":"onetag11","keyname":"all"}},"LAT":{"ALL":{"label":"onetag12","keyname":"all"}},"ALL":{"ALL":{"label":"onetag13","keyname":"block"}},"HK":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"TH":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"MY":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"IN":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}}},"openx":{"ALL":{"ALL":{"label":"openx1","keyname":"visible=1"}}},"smaato":{"ALL":{"MOBILE":{"label":"smaato1","keyname":"all"}}},"smartadserver":{"ID":{"ALL":{"label":"smartadservernew","keyname":"block"}},"ALL":{"ALL":{"label":"smartadservernew1","keyname":"all"}}},"ucfunnel":{"IN":{"ALL":{"label":"ucfunnel1","keyname":"block"}},"ALL":{"ALL":{"label":"ucfunnel2","keyname":"all"}}}}};
for (var type in restrict_bidder1) {
restrict_bidder=restrict_bidder1[type];
for (var bidder in restrict_bidder) {
temp_ar=restrict_bidder[bidder];
temp_ar_new=temp_ar[country_rtb1];
if(temp_ar_new==undefined)
temp_ar_new=temp_ar[zonename];
if(temp_ar_new==undefined)
temp_ar_new=temp_ar["ALL"];
if(temp_ar_new!=undefined)
{
temp_ar_new1=temp_ar_new[device];
if(temp_ar_new1==undefined)
temp_ar_new1=temp_ar_new["ALL"];
if(temp_ar_new1!=undefined)
{
keyname_new="";
label_temp=temp_ar_new1["label"];
keyname_temp=temp_ar_new1["keyname"];
if(keyname_temp=="all" )
labelnew.push(label_temp);
keyname_temp=keyname_temp.split(",");
try
{
if(flag_active==1)
keyname_new="active=1";
if(flag_active==0)
keyname_new=keyname_new+";active=0";
if(visible==1)
keyname_new=keyname_new+";visible=1";
if(visible==0)
keyname_new=keyname_new+";visible=0";
if(special_var && special_var!=undefined)
keyname_new=keyname_new+";"+special_var;
}
catch(e)
{
}
for(m=0;m<keyname_temp.length;m++)
{
temp_val=keyname_temp[m];
if(keyname_new.indexOf(temp_val)>=0 )
labelnew.push(label_temp);
}
}
}
}
}
return labelnew;
}
function isDivCentered(divId) {
div = document.getElementById(divId);
 if (!div) {
   return false; 
 }
divRect = div.getBoundingClientRect();
windowWidth = window.innerWidth;
distanceFromLeft = divRect.left;
distanceFromRight = windowWidth - divRect.right;
if(window.innerWidth>=768)
{
if(Math.abs((windowWidth/2)-(distanceFromLeft+150))<=220)
return true;
else
return false;
}
else
return true;
}

function callnative(id,context,format,id1,andbparams,idnew12,widthL,heightL){
try{
if(format!=undefined && format=="native")
{
hb_native_title=null;
hb_native_image=null;
 if(andbparams["hb_native_image"]!=undefined)
hb_native_image=encodenativeurl(andbparams["hb_native_image"]);
 if(andbparams["hb_native_title"]!=undefined)
hb_native_title=encodenativeurl(andbparams["hb_native_title"]);
id1.setTargeting("hb_width",widthL);
id1.setTargeting("hb_height",heightL);
if(hb_native_image!=undefined)
id1.setTargeting("hb_native_image",hb_native_image);
if(hb_native_title!=undefined)
id1.setTargeting("hb_native_title",hb_native_title);
}
}
catch(e){
}
}
function encodenativeurl(string) {
var number = "0x";
var length = string.length;
for (var i = 0; i < length; i++)
number += string.charCodeAt(i).toString(16);
return number;
}
 function actionvideo(ref1,videotype)
 {
 try
 {
 newid=null;
 newid1=null;
 blockplayer='none';
 blockunit='block';
 if(videotype==1)
 {
 blockplayer='block';
 blockunit='none';
 }
newid=document.getElementById("andplayer");
if(newid)
className=newid.className;
if(className)
{var words = className.split(/\s+/); 
    for (var i = 0; i < words.length; i++) {
        if (words[i].startsWith("andbeyond")) {
            newid1=words[i];
        }
        }}
if(newid1)
 newid1=document.getElementById(newid1);
 if(newid)
 newid.style.display=blockplayer;
 if(newid1)
 newid1.style.display=blockunit;
 if(videotype==0 && newid)
 {
 if(newid)
 {
classname='.'+newid.id;
elements = document.querySelectorAll(classname);
elements.forEach(element => {
        element.parentNode.removeChild(element);
});
 }
 }
 }
 catch(e)
 {
 console.log("VIDEO"+e.stack);
}
 }
 function loadaniview(idnew12,hb_uuid,videofallback)
 {
 idplay='andplayer';
 idvast="65b44b63f4acced6040db794";
 unitvast='video';
 var enew1 = document.createElement('div');
         enew1.setAttribute('id',idplay);
  enew1.classList.add(idplay); 
  enew1.classList.add(idnew12); 
if(videofallback==2)
 style1='display:block;width: 100%;';
else
 style1='display:none;width: 100%;';
         enew1.setAttribute('style',style1);
  menu=document.getElementById(idnew12);
 menu.parentNode.insertBefore(enew1,menu);
         var script = document.createElement('script');
         script.async = true;
         script.id = 'AV'+idvast;
         script.type = 'text/javascript';
if(hb_uuid)
         script.src = 'https://tg1.aniview.com/api/adserver/spt?AV_TAGID='+idvast+'&AV_PUBLISHERID=659bc91f5e80db7bbe051ffa&AV_CDIM1='+unitvast+'&AV_CUSTOM2='+hb_uuid+'&AV_CUSTOM3='+idnew12;
else
         script.src = 'https://tg1.aniview.com/api/adserver/spt?AV_TAGID='+idvast+'&AV_PUBLISHERID=659bc91f5e80db7bbe051ffa&AV_CUSTOM1=custom&AV_CUSTOM3='+idnew12;
         script.setAttribute('data-player-api', 'callbackFuncNamertb');
         script.setAttribute('data-config-api', 'configOverridertb');
         enew1.appendChild(script);
 window.configOverridertb = function (config) {
 config.content.contents=[{ "id" : "ID1", "url" : "https://g3v2e3j8.ssl.hwcdn.net/Doritos.mp4", "thumbnail":"https://rtbdemand.com/images/logo.png","fallbackUrl" : "https://g3v2e3j8.ssl.hwcdn.net/Doritos.mp4", "clickThroughUrl" : "https://www.indianexpress.com", "type" : "video", "slots" : [{ "type" : "ad", "time" : 0 } ] }, {  "thumbnail":"https://rtbdemand.com/images/logo.png","id" : "ID2", "url" : "https://g3v2e3j8.ssl.hwcdn.net/Doritos.mp4", "fallbackUrl" : "https://g3v2e3j8.ssl.hwcdn.net/Doritos.mp4", "clickThroughUrl" : "https://www.indianexpress.com", "type" : "video", "slots" : [{ "type" : "ad", "time" : 0 } ] } ];
 }
 window.callbackFuncNamertb = function(config, player) {
 player.on("AdLoaded", function(data){
ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,1);
 })
 player.on("AdReady", function(data){
ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,1);
 })
 player.on("AdStopped", function(data){
 })
 player.on("AdSkipped", function(data){
 })
 player.on("AdClosed", function(data){
 })
 player.on("CloseClicked", function(data){
 ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,0);
 })
 player.on("AdImpression", function(data){
ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,1);
 })
 player.on("Inventory", function(data){
 })
 player.on("ContentPlaying", function(data){
ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,1);
 })
 player.on("ContentPaused", function(data){
ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,1);
 })
 player.on("AdError", function(res){
 if(res && res.data && res.data.errorLimit) {
 ref1=config.adConfig.ref1.toString();
 actionvideo(ref1,0);
           }
 });
 }
 }

var sitemainurlandbyeond=window.location.origin+window.location.pathname;
if(sitemainurlandbyeond.indexOf("upmedia")>=0){

  }else{
    var andbeyondhttp = new XMLHttpRequest();
     andbeyondhttp.onreadystatechange = function() {
     if(this.readyState == 4 && this.status == 200) { 
       }
      };
     andbeyondhttp.open("GET", "https://prebid.andbeyond.media/domainping.php?domain="+sitemainurlandbyeond+"&aff=551817");
     andbeyondhttp.responseType = "json";
     andbeyondhttp.send(); 
}

if(sitemainurlandbyeond.indexOf("upmedia")>=0){
  var observ={};
var slot_vis={};
var start_time={};
var total_vis={};
var country_rtb1;
var city_rtb;
var city_ip;
var city_region;
var Countrytimezone;

var timedate1;
var andstatus300=0; 
var andstatus3001=0; 
var prebid_active=1;
var newtestunitcount=1;
var adlooksstatus=0;
var adlooksstatus1=0;
var adloox_fraud=0;
var andbeyondadult=0;
$=window.parent.$;
if($==undefined)
$==window.parent.jQuery;

if($==undefined)
{
 (function () {
         var gads = document.createElement('script');

         gads.type = 'text/javascript';
         gads.async = true;
         var useSSL = 'https:' == document.location.protocol;
         gads.src = (useSSL ? 'https:' : 'http:') +
                 '//code.jquery.com/jquery-3.2.1.min.js';
         var node = document.getElementsByTagName('script')[0];
         node.parentNode.insertBefore(gads, node);


     })();


}

function calcTime(cityddd, offsetdd) {

    // create Date object for current location
   var ddd = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
   var utcdd = ddd.getTime() + (ddd.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
  var nde = new Date(utcdd + (3600000*offsetdd));
   hoursssss=nde.getHours();

    // return time as a string
    //console.log("hoursssss"+hoursssss);
    return hoursssss;

}

var city_rtb='DELHI';
var timezonename='ASIA';
var Countrytimezone='ASIA';
var city_ip='1234445';
var city_region='DL';
var country_rtb1='TW';
var newunitcallback=0;

const loadDatageo = async (url, timeoutThreshold) => {
try
{
  const controller = new AbortController()

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeoutThreshold)
  const response = await fetch(url, {
    signal: controller.signal,
  })
  clearTimeout(timeoutId)
  const data = await response.json()
    if(Object.keys(data).length > 0){
 var andbeyondgeo = data;
  country_rtb1=andbeyondgeo["countryCode"].toString().toUpperCase();
      if(andbeyondgeo["city"]!=null){
      city_rtb=andbeyondgeo["city"].toString().toUpperCase();
    }else{
      city_rtb=andbeyondgeo["countryName"].toString().toUpperCase();
    }
    
     if(andbeyondgeo["regionCode"]!=null){
      city_region=andbeyondgeo["regionCode"].toString().toUpperCase();
    }else{
      city_region=andbeyondgeo["countryName"].toString().toUpperCase();
    }
    if(andbeyondgeo["timeZone"]!=null){
Countrytimezone=andbeyondgeo["timeZone"]["id"].toString().toUpperCase();

    }else{
    Countrytimezone=andbeyondgeo["countryName"].toString().toUpperCase();
    }
     if(andbeyondgeo["timeZone"]!=null){
timezonename=andbeyondgeo["timeZone"]["id"].toString().toUpperCase();

    }else{
    timezonename=andbeyondgeo["countryName"].toString().toUpperCase();
    }
     
      newunitcallback=1;
     
}
  return data;
 } catch (error) {
  console.log("GEO"+error);
}
}

loadDatageo('https://rtbdemand.apiip.net/api/check?accessKey=7ef45bac-167a-4aa8-8c99-bc8a28f80bc5&fields=countryCode,regionCode,regionName,city,timeZone,countryName',2000);



var block_url={};

var and_geo_block={"COUNTRY":[{"country_name":"ALL","Adunit_country":["UPMEDIA_ARTICLE_INREAD","UPMEDIA_ARTICLE_VIDEO"],"Time_country":"NONE","Hour_country":"ALL"}]}; 

var width;
var height;


var size3001status=1;
var size3002status=1;
var size3003status=1;
var size3004status=1;
var size3005status=1;
var size3006status=1;
var size3007status=1;
var size3008status=1;
var size3009status=1;
var size30010status=1;


var size6001status=1;
var size6002status=1;
var size6003status=1;
var size6004status=1;
var size6005status=1;


var size7281status=1;
var size7282status=1;
var size7283status=1;
var size7284status=1;
var size7285status=1;

var size9701status=1;
var size9702status=1;
var size9703status=1;


var size9702501status=1;
var size9702502status=1;


var size1601status=1;
var size1602status=1;


var size1201status=1;
var size1202status=1;


var size3201status=1;
var size3202status=1;
var size3203status=1;
var size3204status=1;
var size3205status=1;


var size1001status=1;
var size1002status=1;
var size1003status=1;
var size1004status=1;
var size1005status=1;


var size4681status=1;
var size4682status=1;
var size4683status=1;
var size4684status=1;






var label_adapter={"openx":["openx1"],"smartadserver":["smartadserver2","smartadserver1"],"smaato":["smaato1"],"project-limelight":["lime1"],"onetag":["onetag1"],"oftmedia":["oft1"],"improvedigital":["improve1"],"getapp":["getapp1"],"eplanning":["eplan1"],"criteointl":["criteointl1","cirteointl2"],"criteo":["criteo2","criteo1"],"abmanx":["abmanx1"],"33across":["33across1"]};
var machine_rules="{}";
function isInteger(num){
return (num^0)=== num;
}

var tier2=0;
var tier3=0;
var globalandbeyond=0;

var factor_internal=0;
var timebased=1;
var timebased_refresh=60;
var timer_refresh=0;
var factor_visible=1;
var factor_tier1=1;
var factor_tier2=2;
var factor_tier1_text='TIER1';
var factor_tier2_text='TIER2_US';

var no_refresh='<!--NO_REFRESH-->';
var detectPartial=true;
var highcpm=0.09;
var highcpm1=highcpm;
var height;
var width;

var windowwandtest = window.innerWidth;
if(windowwandtest<=767){
var refresh=refresh_andbeyond;
var timebased_refresh=timebased_refresh_andbeyond;
var min_view_andbeyond=0;
var min_view=0;
}else{
  var refresh=refresh;
var timebased_refresh=timebased_refresh;
var min_view_andbeyond=min_view_andbeyond;
var min_view=min_view;
}


var strategy=0;

function myTimer() {
timer_refresh=timer_refresh+1;

}
var myVar = setInterval(myTimer, 1000);



String.prototype.replaceAll = function(searchStr, replaceStr) {
    var str = this;

    // escape regexp special characters in search string
    searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
};


function isVisible(elem) {
    if (!(elem instanceof Element)) return true;
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    if(pointContainer!=null && pointContainer!=undefined){

    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
    }return false;
    
}


var randomval1=Math.floor(Math.random() * 10) + 1;
var network1=21751243814;
var network2=21751243814;
var percent1=10;

if(randomval1<=percent1){
 var namemc=network1;
}else{
var namemc=network2;
}


function bidadjust1(cpm)
{
if (cpm < 8) {
cpm1=cpm;

cpm= (cpm).toFixed(2);
return cpm;
} else {
return '8.00';
}
}


var windowwidth2 = window.parent.innerWidth;


var PREBID_TIMEOUT_NEW =5000;
var floor=0;
var ref=refresh;



if(!googletag || !googletag.apiReady || googletag.apiready && !googletag.pubadsReady)
{

var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});

}


var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var activeadunit =[
]

var divandbeyond = document.createElement("div");
divandbeyond.setAttribute("id", "trackerandbeyond");
divandbeyond.style.display = "none";
divandbeyond.innerHTML = "0";
    document.head.appendChild(divandbeyond);
  var andbeyondtotalSeconds=0;
  var andbeyondtotalSeconds1=1;
    var andbeyondtimestop;
    function andbeyonddisps()
    {
      andbeyondtotalSeconds++;
      andbeyondtotalSeconds1=andbeyondtotalSeconds;

    }

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

 var idleStates = false;
        var idleTimers = null;
        addListenerMulti(window,"mousemove mouseover touchmove ontouchstart touchend click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick", function() {
            clearTimeout(idleTimers);
            if (idleStates == false) {

                andbeyondtimestop = setInterval(function(){andbeyonddisps()},1000);
            }
            idleStates = true;
            idleTimers = setTimeout(function () {

                clearInterval(andbeyondtimestop);
                idleStates = false; }, 3000);
        });
















 
 setInterval(function(){
timedate1 = Math.round((new Date()).getTime() / 1000);
},1000)


function blackbox(temp_caps,country_rtb1,city_rtb,city_region,new12)
{

flag2=1;

for (var make in and_geo_block) {
    for (var i = 0; i < and_geo_block[make].length; i++) {
        var country1 = and_geo_block[make][i].country_name;
        var Adunit1 = and_geo_block[make][i].Adunit_country;
        var city1 = and_geo_block[make][i].city_name;
        var adunit_city1 = and_geo_block[make][i].Adunit_city;
         var state1 = and_geo_block[make][i].state_name;
         var adunit_state1 = and_geo_block[make][i].Adunit_state;
         var Time_city1 = and_geo_block[make][i].Time_city;
         var Time_state1 = and_geo_block[make][i].Time_state;
         var Time_country1 = and_geo_block[make][i].Time_country;
         var Hour_state1 = and_geo_block[make][i].Hour_state;
         var Hour_city1 = and_geo_block[make][i].Hour_city;
         var Hour_country1 = and_geo_block[make][i].Hour_country;


         var country_state=country_rtb1+"_"+city_region;



       if(country1!=undefined && Adunit1!=undefined && Time_country1!=undefined){
      for(d=0; d<Adunit1.length; d++){
      var adunit_caps=Adunit1[d].toUpperCase();
      var norefresh1=temp_caps.indexOf(adunit_caps);
      for(var kkk=0; kkk<Time_country1.length; kkk++){
     
                for(var kk2=0; kk2<Hour_country1.length; kk2++){

            

             if(Hour_country1[kk2].timezone!=undefined)
                    timezone=Hour_country1[kk2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour2=new Date().getHours();
                    }
                    else
                    {

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour2=d1.getHours();
                    current_hour2=calcTime('Bombay', '+5.5');

                    }

                     if(current_hour2==0)
                      current_hour2=24;

                   if(current_hour2==1)
                      current_hour2=25;

                   if(current_hour2==2)
                      current_hour2=26;

                   // if(current_hour2==3)
                   //    current_hour2=27;

                   // if(current_hour2==4)
                   //    current_hour2=28;

                   // if(current_hour2==5)
                   //    current_hour2=29;


            if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country_rtb1==country1 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                       
                      }

                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country1== "ALL" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                      
                      }

 if(new12==0){
                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1== "ALL" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country1== "ALL" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                       
                      }

                         if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                     
                      }

}


            if(new12==0){

                   if(Time_country1 != "NONE" && Hour_country1 != "NONE" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                     
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                     
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                     
                      }

                     
                  }


                     if(Time_country1 != "NONE" && Hour_country1 != "NONE" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2 && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1){
                      flag2=0;
                      
                       
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "NONE"  && Hour_country1 != "ALL" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 != "NONE" && Hour_country1 == "NONE" && Time_country1 != "ALL" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" && Time_country1[kkk].from <= timedate1 && Time_country1[kkk].to >= timedate1)
                      {
                      flag2=0;
                        
                      
                      }


                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }



                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country_rtb1==country1)
                      {
                       
                      flag2=0;
                      
                      }

                       if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && norefresh1>=0 && country_rtb1==country1)
                      {
                       
                      flag2=0;
                      
                      }

                        if(Hour_country1 != "NONE" && Time_country1 == "ALL"  && norefresh1>=0 && country_rtb1==country1 && Hour_country1[kk2].fromhour <= current_hour2 && Hour_country1[kk2].tohour >= current_hour2)
                      {
                       
                      flag2=0;
                      
                      }

                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country1== "ALL" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country1== "ALL")
                      {
                       
                      flag2=0;
                      
                      }

                        if(Time_country1 == "ALL" && Hour_country1 == "NONE"  && norefresh1>=0 && country1== "ALL")
                      {
                      flag2=0;
                        
                      
                      }
                        if(Time_country1 == "ALL" && Hour_country1 == "ALL"  && norefresh1>=0 && country1== "ALL")
                      {
                      flag2=0;
                        
                      
                      }

 if(new12==0){
                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country1== "ALL" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && Adunit1[d]=="ALL" && country1== "ALL")
                      {
                       
                      flag2=0;
                     
                      }

                     

                         if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }
                       if(Time_country1 == "NONE" && Hour_country1 == "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }
                       if(Time_country1 == "ALL" && Hour_country1 == "ALL" && Adunit1[d]=="ALL" && country_rtb1==country1 ){
                      flag2=0;
                      
                      
                      }               

}

            if(new12==0){

                   if(Time_country1 == "ALL" && Hour_country1 == "NONE" && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN" ){
                      flag2=0;
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                    
                      }
                        if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && Adunit1[d]=="ALL" && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                    
                      }

                        
                      

                  }

                     if(Time_country1 == "ALL" && Hour_country1 == "NONE" && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN" ){
                      flag2=0;
                      
                     
                      }

                        if(Hour_country1 == "ALL" && Time_country1 == "NONE"  && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                     
                      }
                       if(Hour_country1 == "ALL" && Time_country1 == "ALL"  && norefresh1>=0 && country1=="INTERNATIONAL" && country_rtb1!="IN")
                      {
                       
                      flag2=0;
                     
                      }




      }
      }
      }
  }
      if(city1!=undefined && adunit_city1!=undefined && Time_city1!=undefined){
      for(var f=0; f<adunit_city1.length; f++){
      //console.log("Time_city1"+Time_city1);
      for(var h=0; h<Time_city1.length; h++){
      var adunitcity_caps=adunit_city1[f].toUpperCase();
      var norefresh2=temp_caps.indexOf(adunitcity_caps);
     

 for(var h2=0; h2<Hour_city1.length; h2++){

            // console.log(Hour_state1[k2].fromhour);
            // console.log(Hour_state1[k2].tohour);

      if(Hour_city1[h2].timezone!=undefined)
                    timezone=Hour_city1[h2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour1=new Date().getHours();
                    }
                    else
                    {

                     current_hour1=calcTime('Bombay', '+5.5');

                    }

                    if(current_hour1==0)
                      current_hour1=24;

                   if(current_hour1==1)
                      current_hour1=25;

                   if(current_hour1==2)
                      current_hour1=26;

              
                  if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

      
    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
   
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city_rtb == city1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
        
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city1 == "ALL" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

    }


    if (new12 == 0) {
        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "ALL" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
            
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "ALL" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
           
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_city1 != "NONE" && Hour_city1 != "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
          
        }

        if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
            flag2 = 0;

          
        }

        if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

            flag2 = 0;
           
        }

    }

    if (Time_city1 != "NONE" && Hour_city1 != "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1 && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

        
    }

    if (Hour_city1 != "NONE" && Time_city1 == "NONE" && Hour_city1 != "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1) {

        flag2 = 0;
       
    }

    if (Time_city1 != "NONE" && Hour_city1 == "NONE" && Time_city1 != "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_city1[h].from <= timedate1 && Time_city1[h].to >= timedate1) {
        flag2 = 0;

        
    }


    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city_rtb == city1) {
        flag2 = 0;

      
    }

            if(Hour_city1 != "NONE" && Time_city1 == "ALL"  && norefresh2>=0 && city_rtb==city1 && Hour_city1[h2].fromhour <= current_hour1 && Hour_city1[h2].tohour >= current_hour1)
                      {
                       
                      flag2=0;
                      
                      }


    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city_rtb == city1) {

        flag2 = 0;
        
    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }

    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {

        flag2 = 0;
        
    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }
     if (Time_city1 == "ALL" && Hour_city1 == "ALL" && norefresh2 >= 0 && city1 == "ALL") {
        flag2 = 0;

      
    }

    if (new12 == 0) {
        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL") {
            flag2 = 0;

         
        }

        if (Hour_city1 == "ALL" && Time_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "ALL") {

            flag2 = 0;
          
        }

        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;
        }
         if (Time_city1 == "NONE" && Hour_city1 == "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;
        }

       if (Time_city1 == "ALL" && Hour_city1 == "ALL" && adunit_city1[f] == "ALL" && city_rtb == city1) {
            flag2 = 0;

         
        }
    }

    if (new12 == 0) {

        if (Time_city1 == "ALL" && Hour_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {
            flag2 = 0;

         
        }

        if (Hour_city1 == "ALL" && Time_city1 == "NONE" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
           
        }
         if (Hour_city1 == "ALL" && Time_city1 == "ALL" && adunit_city1[f] == "ALL" && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
           
        }

    }

    if (Time_city1 == "ALL" && Hour_city1 == "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {
        flag2 = 0;

        
    }

    if (Hour_city1 == "ALL" && Time_city1 == "NONE" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }
    if (Hour_city1 == "ALL" && Time_city1 == "ALL" && norefresh2 >= 0 && city1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }





                }






      }
      }
      }
      if(state1!=undefined && adunit_state1!=undefined && Time_state1!=undefined && Hour_state1!=undefined){


      for(c=0; c<adunit_state1.length; c++){

      var adunit_caps1=adunit_state1[c].toUpperCase();

      var norefresh3=temp_caps.indexOf(adunit_caps1);

      for(var kk=0; kk<Time_state1.length; kk++){


           for(var k2=0; k2<Hour_state1.length; k2++){

            // console.log(Hour_state1[k2].fromhour);
            // console.log(Hour_state1[k2].tohour);

            if(Hour_state1[k2].timezone!=undefined)
                    timezone=Hour_state1[k2].timezone;
                    else
                    timezone='LOCAL';
                    if(timezone=='LOCAL')
                    {
                    current_hour=new Date().getHours();
                    }
                    else
                    {

                    current_hour=calcTime('Bombay', '+5.5');

                    }


                        if(current_hour==0)
                      current_hour=24;

                   if(current_hour==1)
                      current_hour=25;

                   if(current_hour==2)
                      current_hour=26;


 if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
        
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && country_state == state1 && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
        
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && state1 == "ALL" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

       
    }


    if (new12 == 0) {
        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "ALL" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
          
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "ALL" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && country_state == state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && country_state == state1 && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_state1 != "NONE" && Hour_state1 != "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

        if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
            flag2 = 0;

        }

        if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

            flag2 = 0;
           
        }

    }

    if (Time_state1 != "NONE" && Hour_state1 != "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }

    if (Hour_state1 != "NONE" && Time_state1 == "NONE" && Hour_state1 != "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour) {

        flag2 = 0;
       
    }

    if (Time_state1 != "NONE" && Hour_state1 == "NONE" && Time_state1 != "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN" && Time_state1[kk].from <= timedate1 && Time_state1[kk].to >= timedate1) {
        flag2 = 0;

    }


    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && country_state == state1) {
        flag2 = 0;

    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && country_state == state1) {

        flag2 = 0;
       
    }
 if (Hour_state1 == "ALL" && Time_state1 == "ALL" && norefresh3 >= 0 && country_state == state1) {

        flag2 = 0;
       
    }

                if(Hour_state1 != "NONE" && Time_city1 == "ALL"  && norefresh3>=0 && country_state==state1 && Hour_state1[k2].fromhour <= current_hour && Hour_state1[k2].tohour >= current_hour)
                      {
                       
                      flag2=0;
                      
                      }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

       
    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {

        flag2 = 0;
     
    }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

    }
    if (Time_state1 == "ALL" && Hour_state1 == "ALL" && norefresh3 >= 0 && state1 == "ALL") {
        flag2 = 0;

    }

    if (new12 == 0) {
        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL") {
            flag2 = 0;

        }

        if (Hour_state1 == "ALL" && Time_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "ALL") {

            flag2 = 0;
           
        }

        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }
         if (Time_state1 == "NONE" && Hour_state1 == "ALL" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }
        if (Time_state1 == "ALL" && Hour_state1 == "ALL" && adunit_state1[c] == "ALL" && country_state == state1) {
            flag2 = 0;

        }

    }

    if (new12 == 0) {

        if (Time_state1 == "ALL" && Hour_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {
            flag2 = 0;

        }

        if (Hour_state1 == "ALL" && Time_state1 == "NONE" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
          
        }
         if (Hour_state1 == "ALL" && Time_state1 == "ALL" && adunit_state1[c] == "ALL" && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

            flag2 = 0;
          
        }

    }

    if (Time_state1 == "ALL" && Hour_state1 == "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {
        flag2 = 0;

    }

    if (Hour_state1 == "ALL" && Time_state1 == "NONE" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }
if (Hour_state1 == "ALL" && Time_state1 == "ALL" && norefresh3 >= 0 && state1 == "INTERNATIONAL" && country_rtb1!= "IN") {

        flag2 = 0;
       
    }



     
      }
  }
      }
      }
      

    }
}

return flag2;
}



   (function () {
        var gads = document.createElement('script');

       gads.type = 'text/javascript';
gads.async = true;
var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
                '//rtbpass-us.andbeyond.media/prebid-regular.js';
       var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();



pbjs.que.push(function() {
     
pbjs.addAdUnits(activeadunit);
  
});

metaar=[{"key":"arts,entertainment", "value":"iab1"}, {"key":"books,literature", "value":"iab1-1"}, {"key":"celebrity,fan,gossip", "value":"iab1-2"}, {"key":"fine,art", "value":"iab1-3"}, {"key":"humor", "value":"iab1-4"}, {"key":"movies", "value":"iab1-5"}, {"key":"music,audio", "value":"iab1-6"}, {"key":"television,video", "value":"iab1-7"}, {"key":"automotive", "value":"iab2"}, {"key":"auto,parts", "value":"iab2-1"}, {"key":"auto,repair", "value":"iab2-2"}, {"key":"buying\/selling,cars", "value":"iab2-3"}, {"key":"car,culture", "value":"iab2-4"}, {"key":"certified,pre-owned", "value":"iab2-5"}, {"key":"convertible", "value":"iab2-6"}, {"key":"coupe", "value":"iab2-7"}, {"key":"crossover", "value":"iab2-8"}, {"key":"diesel", "value":"iab2-9"}, {"key":"electric,vehicle", "value":"iab2-10"}, {"key":"hatchback", "value":"iab2-11"}, {"key":"hybrid", "value":"iab2-12"}, {"key":"luxury", "value":"iab2-13"}, {"key":"minivan", "value":"iab2-14"}, {"key":"motorcycles", "value":"iab2-15"}, {"key":"off-road,vehicles", "value":"iab2-16"}, {"key":"performance,vehicles", "value":"iab2-17"}, {"key":"pickup", "value":"iab2-18"}, {"key":"road-side,assistance", "value":"iab2-19"}, {"key":"sedan", "value":"iab2-20"}, {"key":"trucks,accessories", "value":"iab2-21"}, {"key":"vintage,cars", "value":"iab2-22"}, {"key":"wagon", "value":"iab2-23"}, {"key":"business", "value":"iab3"}, {"key":"advertising", "value":"iab3-1"}, {"key":"agriculture", "value":"iab3-2"}, {"key":"biotech,biochemical", "value":"iab3-3"}, {"key":"business,software", "value":"iab3-4"}, {"key":"construction", "value":"iab3-5"}, {"key":"forestry", "value":"iab3-6"}, {"key":"government", "value":"iab3-7"}, {"key":"green,solutions", "value":"iab3-8"}, {"key":"human,resources", "value":"iab3-9"}, {"key":"logistics", "value":"iab3-10"}, {"key":"marketing", "value":"iab3-11"}, {"key":"metals", "value":"iab3-12"}, {"key":"careers", "value":"iab4"}, {"key":"career,planning", "value":"iab4-1"}, {"key":"college", "value":"iab4-2"}, {"key":"financial,aid", "value":"iab4-3"}, {"key":"job,fairs", "value":"iab4-4"}, {"key":"job,search", "value":"iab4-5"}, {"key":"resume,writing,advice", "value":"iab4-6"}, {"key":"nursing", "value":"iab4-7"}, {"key":"scholarships", "value":"iab4-8"}, {"key":"telecommuting", "value":"iab4-9"}, {"key":"military", "value":"iab4-10"}, {"key":"career,advice", "value":"iab4-11"}, {"key":"education", "value":"iab5"}, {"key":"education", "value":"iab5-1"}, {"key":"adult,education", "value":"iab5-2"}, {"key":"art,history", "value":"iab5-3"}, {"key":"college administration", "value":"iab5-4"}, {"key":"college life", "value":"iab5-5"}, {"key":"distance learning", "value":"iab5-6"}, {"key":"english as second language", "value":"iab5-7"}, {"key":"language,learning", "value":"iab5-8"}, {"key":"college,graduate,school", "value":"iab5-9"}, {"key":"homeschooling", "value":"iab5-10"}, {"key":"homework\/study,tips", "value":"iab5-11"}, {"key":"k-6,education", "value":"iab5-12"}, {"key":"private,school", "value":"iab5-13"}, {"key":"special,education", "value":"iab5-14"}, {"key":"studying,business", "value":"iab5-15"}, {"key":"family,parenting", "value":"iab6"}, {"key":"adoption", "value":"iab6-1"}, {"key":"babies,toddlers", "value":"iab6-2"}, {"key":"daycarepre,pre school", "value":"iab6-3"}, {"key":"family,internet", "value":"iab6-4"}, {"key":"parenting,k-6,kids", "value":"iab6-5"}, {"key":"parenting,teens", "value":"iab6-6"}, {"key":"pregnancy", "value":"iab6-7"}, {"key":"special needs kids", "value":"iab6-8"}, {"key":"eldercare", "value":"iab6-9"}, {"key":"health,fitness", "value":"iab7"}, {"key":"exercise,weight loss,weight", "value":"iab7-1"}, {"key":"add", "value":"iab7-2"}, {"key":"aids,hiv", "value":"iab7-3"}, {"key":"allergies", "value":"iab7-4"}, {"key":"alternative,medicine,holistic", "value":"iab7-5"}, {"key":"arthritis", "value":"iab7-6"}, {"key":"asthma", "value":"iab7-7"}, {"key":"autism", "value":"iab7-8"}, {"key":"bipolar,disorder", "value":"iab7-9"}, {"key":"brain,tumor", "value":"iab7-10"}, {"key":"cancer", "value":"iab7-11"}, {"key":"cholesterol", "value":"iab7-12"}, {"key":"chronic,fatigue,syndrome", "value":"iab7-13"}, {"key":"chronic,pain", "value":"iab7-14"}, {"key":"cold,flu", "value":"iab7-15"}, {"key":"deafness", "value":"iab7-16"}, {"key":"dental care", "value":"iab7-17"}, {"key":"depression", "value":"iab7-18"}, {"key":"dermatology", "value":"iab7-19"}, {"key":"diabetes", "value":"iab7-20"}, {"key":"epilepsy,seizures", "value":"iab7-21"}, {"key":"gerd,acid,reflux", "value":"iab7-22"}, {"key":"headaches,migraines", "value":"iab7-23"}, {"key":"heart,disease,stroke", "value":"iab7-24"}, {"key":"herbs for health", "value":"iab7-25"}, {"key":"holistic,healing", "value":"iab7-26"}, {"key":"ibs", "value":"iab7-27"}, {"key":"incest,abuse,support", "value":"iab7-28"}, {"key":"incontinence", "value":"iab7-29"}, {"key":"infertility", "value":"iab7-30"}, {"key":"men's,health", "value":"iab7-31"}, {"key":"nutrition", "value":"iab7-32"}, {"key":"orthopedics", "value":"iab7-33"}, {"key":"panic,anxiety,disorders", "value":"iab7-34"}, {"key":"pediatrics", "value":"iab7-35"}, {"key":"physical,therapy", "value":"iab7-36"}, {"key":"psychology,psychiatry", "value":"iab7-37"}, {"key":"senior,health", "value":"iab7-38"}, {"key":"sexuality", "value":"iab7-39"}, {"key":"sleep,disorders", "value":"iab7-40"}, {"key":"smoking,cessation", "value":"iab7-41"}, {"key":"substance,abuse", "value":"iab7-42"}, {"key":"thyroid,disease,endocrinology", "value":"iab7-43"}, {"key":"weight,loss", "value":"iab7-44"}, {"key":"women\u00e2\u20ac\u2122s,health", "value":"iab7-45"}, {"key":"abortion", "value":"iab7-ws1"}, {"key":"food,drink", "value":"iab8"}, {"key":"american,cuisine", "value":"iab8-1"}, {"key":"barbecues,grilling", "value":"iab8-2"}, {"key":"cajun,creole", "value":"iab8-3"}, {"key":"chinese,cuisine", "value":"iab8-4"}, {"key":"cocktails,beer", "value":"iab8-5"}, {"key":"coffee,tea", "value":"iab8-6"}, {"key":"cuisine-specific", "value":"iab8-7"}, {"key":"desserts,baking", "value":"iab8-8"}, {"key":"dining,out", "value":"iab8-9"}, {"key":"food,allergies", "value":"iab8-10"}, {"key":"french,cuisine", "value":"iab8-11"}, {"key":"health,low-fat,cooking", "value":"iab8-12"}, {"key":"italian,cuisine", "value":"iab8-13"}, {"key":"japanese,cuisine", "value":"iab8-14"}, {"key":"mexican,cuisine", "value":"iab8-15"}, {"key":"vegan", "value":"iab8-16"}, {"key":"vegetarian", "value":"iab8-17"}, {"key":"wine", "value":"iab8-18"}, {"key":"hobbies,interests", "value":"iab9"}, {"key":"art,technology", "value":"iab9-1"}, {"key":"arts,crafts", "value":"iab9-2"}, {"key":"beadwork", "value":"iab9-3"}, {"key":"bird-watching", "value":"iab9-4"}, {"key":"board,games,puzzles", "value":"iab9-5"}, {"key":"candle,soap,making", "value":"iab9-6"}, {"key":"card,games", "value":"iab9-7"}, {"key":"chess", "value":"iab9-8"}, {"key":"cigars,vaping", "value":"iab9-9"}, {"key":"collecting", "value":"iab9-10"}, {"key":"comic,books,anime", "value":"iab9-11"}, {"key":"drawing,sketching", "value":"iab9-12"}, {"key":"freelance,writing,getting", "value":"iab9-13"}, {"key":"genealogy", "value":"iab9-14"}, {"key":"getting,published", "value":"iab9-15"}, {"key":"guitar,keyboard", "value":"iab9-16"}, {"key":"home,recording", "value":"iab9-17"}, {"key":"investors,inventors", "value":"iab9-18"}, {"key":"jewelry making", "value":"iab9-19"}, {"key":"magic,illusion", "value":"iab9-20"}, {"key":"needlework", "value":"iab9-21"}, {"key":"painting", "value":"iab9-22"}, {"key":"photography", "value":"iab9-23"}, {"key":"radio", "value":"iab9-24"}, {"key":"roleplaying,games", "value":"iab9-25"}, {"key":"sci-fi,fantasy", "value":"iab9-26"}, {"key":"scrapbooking", "value":"iab9-27"}, {"key":"screenwriting", "value":"iab9-28"}, {"key":"stamps,coins", "value":"iab9-29"}, {"key":"video,computer", "value":"iab9-30"}, {"key":"woodworking", "value":"iab9-31"}, {"key":"gambling", "value":"iab9-ws1"}, {"key":"weapons", "value":"iab9-ws2"}, {"key":"home,garden", "value":"iab10"}, {"key":"appliances", "value":"iab10-1"}, {"key":"entertaining", "value":"iab10-2"}, {"key":"environmental,safety", "value":"iab10-3"}, {"key":"gardening", "value":"iab10-4"}, {"key":"home,repair", "value":"iab10-5"}, {"key":"home,theater", "value":"iab10-6"}, {"key":"interior,decorating", "value":"iab10-7"}, {"key":"landscaping", "value":"iab10-8"}, {"key":"remodeling,construction", "value":"iab10-9"}, {"key":"law,government,politics", "value":"iab11"}, {"key":"immigration", "value":"iab11-1"}, {"key":"legal,issues", "value":"iab11-2"}, {"key":"government,resources", "value":"iab11-3"}, {"key":"politics", "value":"iab11-4"}, {"key":"commentary", "value":"iab11-5"}, {"key":"news,weather", "value":"iab12"}, {"key":"personal,finance", "value":"iab13"}, {"key":"beginning,investing", "value":"iab13-1"}, {"key":"credit,debit", "value":"iab13-2"}, {"key":"financial,news", "value":"iab13-3"}, {"key":"financial,planning", "value":"iab13-4"}, {"key":"hedge,fund", "value":"iab13-5"}, {"key":"insurance", "value":"iab13-6"}, {"key":"investing", "value":"iab13-7"}, {"key":"mutual,funds,etfs", "value":"iab13-8"}, {"key":"options", "value":"iab13-9"}, {"key":"retirement,planning", "value":"iab13-10"}, {"key":"stocks", "value":"iab13-11"}, {"key":"tax,planning,accounting", "value":"iab13-12"}, {"key":"society", "value":"iab14"}, {"key":"dating,personals", "value":"iab14-1"}, {"key":"divorce,support", "value":"iab14-2"}, {"key":"lgbtq+", "value":"iab14-3"}, {"key":"marriage", "value":"iab14-4"}, {"key":"senior,living", "value":"iab14-5"}, {"key":"teens", "value":"iab14-6"}, {"key":"weddings", "value":"iab14-7"}, {"key":"ethnic,specific", "value":"iab14-8"}, {"key":"social,networking", "value":"iab14-ws1"}, {"key":"science", "value":"iab15"}, {"key":"astrology", "value":"iab15-1"}, {"key":"biology", "value":"iab15-2"}, {"key":"chemistry", "value":"iab15-3"}, {"key":"geology", "value":"iab15-4"}, {"key":"paranormal,phenomena", "value":"iab15-5"}, {"key":"physics", "value":"iab15-6"}, {"key":"space,astronomy", "value":"iab15-7"}, {"key":"geography", "value":"iab15-8"}, {"key":"botany", "value":"iab15-9"}, {"key":"weather", "value":"iab15-10"}, {"key":"pets", "value":"iab16"}, {"key":"aquariums", "value":"iab16-1"}, {"key":"birds", "value":"iab16-2"}, {"key":"cats", "value":"iab16-3"}, {"key":"dogs", "value":"iab16-4"}, {"key":"large animals", "value":"iab16-5"}, {"key":"reptiles", "value":"iab16-6"}, {"key":"veterinary,medicine", "value":"iab16-7"}, {"key":"sports", "value":"iab17"}, {"key":"auto racing,racing", "value":"iab17-1"}, {"key":"baseball,softball", "value":"iab17-2"}, {"key":"bicycling", "value":"iab17-3"}, {"key":"bodybuilding", "value":"iab17-4"}, {"key":"boxing", "value":"iab17-5"}, {"key":"canoeing,kayaking", "value":"iab17-6"}, {"key":"cheerleading", "value":"iab17-7"}, {"key":"climbing", "value":"iab17-8"}, {"key":"cricket", "value":"iab17-9"}, {"key":"figure,skating", "value":"iab17-10"}, {"key":"fly,fishing", "value":"iab17-11"}, {"key":"american,football", "value":"iab17-12"}, {"key":"freshwater,fishing", "value":"iab17-13"}, {"key":"game,fish", "value":"iab17-14"}, {"key":"golf", "value":"iab17-15"}, {"key":"horse,racing", "value":"iab17-16"}, {"key":"horses", "value":"iab17-17"}, {"key":"hunting,shooting", "value":"iab17-18"}, {"key":"inline,skating", "value":"iab17-19"}, {"key":"martial,arts", "value":"iab17-20"}, {"key":"mountain,biking", "value":"iab17-21"}, {"key":"nascar,racing", "value":"iab17-22"}, {"key":"olympics", "value":"iab17-23"}, {"key":"paintball", "value":"iab17-24"}, {"key":"power,motorcycles", "value":"iab17-25"}, {"key":"basketball", "value":"iab17-26"}, {"key":"ice,hockey", "value":"iab17-27"}, {"key":"rodeo", "value":"iab17-28"}, {"key":"rugby", "value":"iab17-29"}, {"key":"running,jogging", "value":"iab17-30"}, {"key":"sailing,boating", "value":"iab17-31"}, {"key":"saltwater,fishing", "value":"iab17-32"}, {"key":"scuba,diving", "value":"iab17-33"}, {"key":"skateboarding", "value":"iab17-34"}, {"key":"skiing", "value":"iab17-35"}, {"key":"snowboarding", "value":"iab17-36"}, {"key":"surfing,body-boarding", "value":"iab17-37"}, {"key":"swimming", "value":"iab17-38"}, {"key":"table,tennis,ping-pong", "value":"iab17-39"}, {"key":"tennis", "value":"iab17-40"}, {"key":"volleyball", "value":"iab17-41"}, {"key":"waterski,wakeboard", "value":"iab17-43"}, {"key":"world,football,soccer", "value":"iab17-44"}, {"key":"style,fashion", "value":"iab18"}, {"key":"beauty", "value":"iab18-1"}, {"key":"body art", "value":"iab18-2"}, {"key":"fashion", "value":"iab18-3"}, {"key":"jewelry", "value":"iab18-4"}, {"key":"clothing", "value":"iab18-5"}, {"key":"accessories", "value":"iab18-6"}, {"key":"technology,computing", "value":"iab19"}, {"key":"3-d graphics", "value":"iab19-1"}, {"key":"animation", "value":"iab19-2"}, {"key":"antivirus,software", "value":"iab19-3"}, {"key":"c c++", "value":"iab19-4"}, {"key":"cameras,camcorders", "value":"iab19-5"}, {"key":"cell,phones", "value":"iab19-6"}, {"key":"computer,certification", "value":"iab19-7"}, {"key":"computer,networking", "value":"iab19-8"}, {"key":"computer,peripherals", "value":"iab19-9"}, {"key":"computer,reviews", "value":"iab19-10"}, {"key":"data,centers", "value":"iab19-11"}, {"key":"databases", "value":"iab19-12"}, {"key":"desktop,publishing", "value":"iab19-13"}, {"key":"desktop,video", "value":"iab19-14"}, {"key":"email,chat", "value":"iab19-15"}, {"key":"graphics,software", "value":"iab19-16"}, {"key":"home video,dvd", "value":"iab19-17"}, {"key":"internet,technology", "value":"iab19-18"}, {"key":"java", "value":"iab19-19"}, {"key":"javascript", "value":"iab19-20"}, {"key":"mac,support", "value":"iab19-21"}, {"key":"mp3,midi", "value":"iab19-22"}, {"key":"net,conferencing", "value":"iab19-23"}, {"key":"net,beginners", "value":"iab19-24"}, {"key":"network,security", "value":"iab19-25"}, {"key":"palmtops,pdas", "value":"iab19-26"}, {"key":"pc,support", "value":"iab19-27"}, {"key":"portable", "value":"iab19-28"}, {"key":"entertainment,virtual", "value":"iab19-29"}, {"key":"shareware,freeware", "value":"iab19-30"}, {"key":"unix,linux", "value":"iab19-31"}, {"key":"visualbasic", "value":"iab19-32"}, {"key":"web clipart", "value":"iab19-33"}, {"key":"web design,html", "value":"iab19-34"}, {"key":"web search", "value":"iab19-35"}, {"key":"windows", "value":"iab19-36"}, {"key":"hacking,cracking", "value":"iab19-ws1"}, {"key":"vpns,proxies", "value":"iab19-ws2"}, {"key":"language,translation", "value":"iab19-ws3"}, {"key":"file,sharing", "value":"iab19-ws4"}, {"key":"travel", "value":"iab20"}, {"key":"adventure,travel", "value":"iab20-1"}, {"key":"africa", "value":"iab20-2"}, {"key":"air,travel", "value":"iab20-3"}, {"key":"australia,newzealand", "value":"iab20-4"}, {"key":"bed,breakfast", "value":"iab20-5"}, {"key":"budget,travel", "value":"iab20-6"}, {"key":"business,travel", "value":"iab20-7"}, {"key":"by us locale", "value":"iab20-8"}, {"key":"camping", "value":"iab20-9"}, {"key":"canada", "value":"iab20-10"}, {"key":"caribbean", "value":"iab20-11"}, {"key":"cruises", "value":"iab20-12"}, {"key":"eastern europe", "value":"iab20-13"}, {"key":"europe", "value":"iab20-14"}, {"key":"france", "value":"iab20-15"}, {"key":"greece", "value":"iab20-16"}, {"key":"honeymoons,getaways", "value":"iab20-17"}, {"key":"hotels", "value":"iab20-18"}, {"key":"italy", "value":"iab20-19"}, {"key":"japan,china", "value":"iab20-20"}, {"key":"mexico,central america", "value":"iab20-21"}, {"key":"national,parks", "value":"iab20-22"}, {"key":"south,america", "value":"iab20-23"}, {"key":"spas", "value":"iab20-24"}, {"key":"themeparks", "value":"iab20-25"}, {"key":"traveling with kids", "value":"iab20-26"}, {"key":"unitedkingdom", "value":"iab20-27"}, {"key":"realestate", "value":"iab21"}, {"key":"apartments", "value":"iab21-1"}, {"key":"architects", "value":"iab21-2"}, {"key":"buying,selling,homes", "value":"iab21-3"}, {"key":"shopping", "value":"iab22"}, {"key":"contests,freebies", "value":"iab22-1"}, {"key":"couponing", "value":"iab22-2"}, {"key":"comparison", "value":"iab22-3"}, {"key":"engines", "value":"iab22-4"}, {"key":"religion,spirituality", "value":"iab23"}, {"key":"alternative,religions", "value":"iab23-1"}, {"key":"atheism,agnosticism", "value":"iab23-2"}, {"key":"buddhism", "value":"iab23-3"}, {"key":"catholicism", "value":"iab23-4"}, {"key":"christianity", "value":"iab23-5"}, {"key":"hinduism", "value":"iab23-6"}, {"key":"islam", "value":"iab23-7"}, {"key":"judaism", "value":"iab23-8"}, {"key":"latter-day,saints", "value":"iab23-9"}, {"key":"pagan,wiccan", "value":"iab23-10"}, {"key":"uncategorized", "value":"iab24"}, {"key":"non-standard,content", "value":"iab25"}, {"key":"unmoderated,ugc,message", "value":"iab25-1"}, {"key":"extreme,graphic,explicit", "value":"iab25-2"}, {"key":"adult,content", "value":"iab25-3"}, {"key":"profane,content", "value":"iab25-4"}, {"key":"hate,content", "value":"iab25-5"}, {"key":"under,construction", "value":"iab25-6"}, {"key":"incentivized", "value":"iab25-7"}, {"key":"content,server", "value":"iab25-ws1"}, {"key":"streaming,media", "value":"iab25-ws2"}, {"key":"trackers", "value":"iab25-ws3"}, {"key":"cryptomining,cryptojacking", "value":"iab25-ws4"}, {"key":"illegal,content", "value":"iab26"}, {"key":"illegal,content", "value":"iab26-1"}, {"key":"warez", "value":"iab26-2"}, {"key":"spyware,malware", "value":"iab26-3"}, {"key":"copyright,infringement", "value":"iab26-4"}, {"key":"illegal,drugs,paraphernalia", "value":"iab26-ws1"}, {"key":"deceptive,phishing", "value":"iab26-ws2"}];function normalizeKeyword(keyword) {
    return keyword.trim().toLowerCase();
}
 function getMetaKeywords() {
     const metaElement = document.querySelector('meta[name="keywords"]');
     if (metaElement) {
         return new Set(metaElement.getAttribute("content").split(",").map(normalizeKeyword));
     }
     return new Set();
 }
 // Function to normalize text
 function normalizeText(text) {
 return text.trim().toLowerCase().replace(/[\s,\/]+/g, " ");
 }
 
 // Function to extract h1 and h2 headings only
 function getHeadings() {
 const headings = [];
 const headingTags = document.querySelectorAll('h1, h2');
 headingTags.forEach(heading => {
 headings.push(normalizeText(heading.textContent));
 });
 return headings;
 }
 
 // Optimized function to extract visible text selectively
 function getVisibleText() {
 const mainContent = document.querySelector('main') || document.querySelector('article') || document.body;
 const paragraphs = mainContent.querySelectorAll('p');
 let visibleText = '';
 
 // Limit the amount of text processed by considering only the first few paragraphs
 paragraphs.forEach((para, index) => {
 if (index < 5) {  // Process only the first 5 paragraphs to save time
 visibleText += ' ' + para.innerText;
 }
 });
 
 return normalizeText(visibleText);
 }
 
 // Function to extract context from URL and title
 function getUrlAndTitleContext() {
 const urlContext = window.location.pathname.split('/').map(normalizeText).filter(Boolean);
 const titleContext = normalizeText(document.title);
 return [...urlContext, titleContext];
 }
 
 // Basic NLP function to extract key phrases
 function extractKeyPhrases(text) {
 const words = text.split(/\s+/);
 const wordFrequency = {};
 
 // Calculate word frequency
 words.forEach(word => {
 if (word.length > 3) { // Ignore short words
 wordFrequency[word] = (wordFrequency[word] || 0) + 1;
 }
 });
 
 // Sort words by frequency
 const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
 
 // Extract top key phrases (could be refined further)
 const keyPhrases = sortedWords.slice(0, 10); // Taking top 10 key phrases
 return keyPhrases;
 }
 
 // Function to match content with metaar
 function matchContentWithMetaar(contentArray, metaar) {
 const score = {};
 contentArray.forEach(content => {
 metaar.forEach(item => {
 const keywords = item.key.split(/[\s,\/]+/).map(normalizeText);
 keywords.forEach(keyword => {
 if (content.includes(keyword)) {
 score[item.value] = (score[item.value] || 0) + 1;
 if (score[item.value] > 5) score[item.value] = 5;
 }
 });
 });
 });
 return score;
 }
 
 // Function to set targeting
 function setTargetingmeta(score) {
try{ googletag.cmd.push(function () {
 for (const key in score) {
 if (key.includes("iab") && score[key] >= 3) {
 googletag.pubads().setTargeting("iab", key);
 }
 }
 });}catch(e){console.log("EXCEPTION"+e);}
 }
 
 // Main execution
window.onload = function() {
 try{const metaKeywords = getMetaKeywords(); // From previous implementation
 const headings = getHeadings();
 const visibleText = getVisibleText();
 const urlAndTitleContext = getUrlAndTitleContext();
 
 // Apply NLP to visible text to extract key phrases
 const keyPhrases = extractKeyPhrases(visibleText);
 
 const combinedContext = [
 ...metaKeywords,
 ...headings,
 ...urlAndTitleContext,
 ...keyPhrases
 ];
 
 const score = matchContentWithMetaar(combinedContext, metaar);
 setTargetingmeta(score);}catch(e){console.log(e);}
}

setTimeout(function(){
  var gads = document.createElement('script');
      gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//ads.aralego.com/cookiesync';
var node = document.getElementsByTagName('script')[0];
},10000);
pbjs.que.push(function () {
pbjs.setConfig({ enableTIDs: true });
pbjs.setConfig({ aliasSyncEnabled: true });
pbjs.setConfig({ bidderSequence: "fixed" }) ; 
pbjs.setConfig({
        cache: {
            url: "https://prebid.adnxs.com/pbc/v1/cache",
            ignoreBidderCacheKey:true
        }
    });
pbjs.setBidderConfig({"bidders":["equativ","sharethrough","beyondmedia","smartyads","smartyvideo","adpone","adlivevideo","abmxandr","adabm","rtbhouse","teads","teadarticle","onetag","medianet","smaato","rtbhouse","improvedigital","rtbhouse","rtbdemandadk","adagio","colombia","improvedigital","criteointl","audiencenetwork","sovrn","smartadserver","criteo","pubmatic","rubicon","sovrn","abmapp","medianet"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"andbeyond.media","sid":"11633","hp":1}]}}}});
pbjs.setBidderConfig({"bidders":["magnitertb","rubiconrtb","between","tripleartside","triplesectop","triplesecside","openxoutstream","project-limelight","adtellvideo","project-lime-video","spotx","freewheel-ssp","amx","eplanning","smilewanted","adtelligent","adagiortb","districtmDMX","brapp","adkernelAdn","tripleart","openx","gumgum","ix","ixrtb","andbeyond","adkernel","oftmedia","getapp","33across","triplelift","appnexus"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"rtbdemand.com","sid":"22450","hp":1}]}}}});
pbjs.setBidderConfig({"bidders":["Abmanx","bcmopenx","bcmsharethrough"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"datacygnal.io","sid":"153420","hp":1}]}}}});

});


pbjs.que.push(function () {
pbjs.aliasBidder("appnexus", "projectagora", {gvlid: 1032});
pbjs.bidderSettings["projectagora"] = {
 bidCpmAdjustment: function(bidCpm) {
 return bidCpm * 0.75;}
}
    });
pbjs.que.push(function () {
pbjs.setBidderConfig({
"bidders": ["projectagora"],
"config": {
 "schain": {
"validation": "strict",
"config": {
  "ver": "1.0",
  "complete": 1,
  "nodes": [
   {
 "asi": "andbeyond.media",
"sid": "11633",
 "hp": 1
 },
 {
   "asi": "projectagora.com",
 "sid": "108968",
 "hp": 1
}
]
}
}
}
 });
pbjs.setBidderConfig({
 bidders: ['oftmedia'],
config: {
  schain: {
  validation: 'relaxed',
  config: {
  ver:'1.0',
  complete: 1,
  nodes: [
              {
                  'asi':'152media.info',
                  'sid':'152M21',
                  'hp':1
              }
          ]
      }
  }
}
 });
});
pbjs.que.push(function () {
pbjs.setConfig({
 useBidCache: true,
 bidCacheFilterFunction: bid => bid.mediaType !== 'video'
});
});
 pbjs.que.push(function() {
 pbjs.setConfig({
 fledgeForGpt: {
         enabled: true
     }
 });
 pbjs.setBidderConfig({
  bidders: ["criteo"],
  config: {
   fledgeEnabled: true,
 }
});
});
 pbjs.que.push(function() {
pbjs.setConfig({
userSync: {
filterSettings: {
all: {
bidders: "*",
filter: "include"
}
},
syncsPerBidder: 6,
syncDelay: 3000,
auctionDelay: 0
}
});
});
 pbjs.que.push(function() {
pbjs.setConfig({
userSync: {
 userIds: [
{
      name: 'uid2',
params: {
uid2ServerCookie: 'uid2_identity'
   }
},
{
name: 'sharedId',
storage: {
name: '_sharedID',
type: 'cookie',
 expires: 30
 }
 },
{
name: "amxId",
storage: {
type: "html5",
name: "amxId",
expires: 1
}
},
{
name: "33acrossId",
params: {
pid: "0013300001cG13gAAC"
},
storage: {
name: "33acrossId",
type: "html5",
expires: 90,
refreshInSeconds: 8 * 3600
}
},
{
name: "unifiedId",
params: {
url: "//match.adsrvr.org/track/rid?ttd_pid=pubmatic&fmt=json"
},
storage: {
type: "html5",
name: "pbjs-unifiedid",
expires: 60
}
},
{
name: "id5Id",
params: {
partner: 984
},
storage: {
type: "html5",
name: "id5id",
expires: 90,
refreshInSeconds: 8*3600
}
}
],
syncDelay: 5000
}
});
});
pbjs.que.push(function () {

});
pbjs.que.push(function () {
pbjs.aliasBidder("appnexus", "projectagora");
pbjs.aliasBidder("project-lime-video", "project-limelight");
pbjs.aliasBidder("appnexus", "abmxandr");
pbjs.aliasBidder("appnexus", "rtbxandr");
pbjs.aliasBidder("smartyads", "smartyvideo");
pbjs.aliasBidder("adtelligent", "adabm");
pbjs.aliasBidder("appnexus", "districtm");
pbjs.aliasBidder("appnexus", "abmapp");
pbjs.aliasBidder("appnexus", "Abmanx");
pbjs.aliasBidder("appnexus", "getapp");
pbjs.aliasBidder("appnexus", "bcmapp");
pbjs.aliasBidder("appnexus", "brapp");
pbjs.aliasBidder("criteo","criteointl");  
pbjs.aliasBidder("criteo","criteoint");  
pbjs.aliasBidder("triplelift","tripleartside");  
pbjs.aliasBidder("triplelift","triplesectop");  
pbjs.aliasBidder("triplelift","triplesecside");  
pbjs.aliasBidder("triplelift","tripleliftart");  
pbjs.aliasBidder("rubicon","rubiconrtb");  
pbjs.aliasBidder("smilewanted","smilewantedabm");  
pbjs.aliasBidder("projectagora","projectagorart");  
pbjs.aliasBidder("adkernel","rtbdemandadk"); 
pbjs.aliasBidder("teads","teadarticle"); 
pbjs.aliasBidder("adagio", "adagiortb");
pbjs.aliasBidder("adtelligent", "adtellvideo");
pbjs.aliasBidder("adlivetech", "adlivevideo");
pbjs.aliasBidder("project-limelight", "project-lime-video");
pbjs.aliasBidder("smilewanted", "smilevideo");
pbjs.aliasBidder("appnexus", "abmoftmedia");
pbjs.aliasBidder("appnexus", "oftmedia");
pbjs.aliasBidder("amx", "abmamx");
pbjs.aliasBidder("between", "betweenabm");
pbjs.aliasBidder("openx", "bcmopenx");
pbjs.aliasBidder("minutemedia", "bcmmedia");
pbjs.aliasBidder("sharethrough", "bcmsharethrough");
pbjs.bidderSettings =
{
openx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
medianet: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
bcmapp: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
adagio: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
smartadserver: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
rubicon: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.6;}},
amx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
onetag: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
adtelligent: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
adlivetech: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
richaudience: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
grid: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
luponmedia: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
projectagora: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
adliveplus: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
           standard: {
storageAllowed: true,
adserverTargeting: [
{
                            key: "hb_bidder",
       val: function (bidResponse) {
                                return bidResponse.bidderCode;
       }
                        }, {
       key: "hb_adid",
                            val: function (bidResponse) {
widthr=bidResponse.width;
heightr=bidResponse.height;
if(widthr && heightr && bidResponse.adId &&  bidResponse.cpm && bidResponse.cpm>=0.001 && bidResponse.adUnitCode &&  bidResponse.ttl &&  bidResponse.bidderCode && bidResponse.bidderCode!="adpone")
{
if(responsec[widthr] && responsec[widthr][heightr])
{
}
else
{
responsec[widthr]={};
responsec[widthr][heightr]=[];
}
if(responsec[widthr][heightr].length>10)
{
responsec[widthr][heightr] =shuffleArray1(responsec[widthr][heightr]);
responsec[widthr][heightr] = shuffleArray(responsec[widthr][heightr]);
responsec[widthr][heightr].pop();
}
else
{
priority1=getpriority(bidResponse.cpm);
if(bidResponse.adUnitCode.indexOf("andbeyond")<0)
priority1=0;
expiry_time1=Date.now() + (bidResponse.ttl*1000);
responsec[widthr][heightr].push({ priority: priority1, adid: bidResponse.adId,cpm:bidResponse.cpm,bidder:bidResponse.bidderCode,ttl:bidResponse.ttl,expiry_time:expiry_time1 });
}
}
           return bidResponse.adId;
                            }
   },
 {
key: "rtb_pb",
val: function (bidResponse) {
               var cpm = bidResponse.cpm;    
if(bidResponse.bidderCode && bidResponse){
urls=["drqq.toys","myrenta.com","myrenta"];
function containsUrl(ad, urls) {
ad=JSON.stringify(ad);
ad=ad.toLowerCase();
   for (let url of urls) {
      if (ad.includes(url)) {
        return true;
    }
}
return false;
}
if(bidResponse.bidderCode && bidResponse && containsUrl(bidResponse, urls))
return "0.00";}
if( bidResponse.bidderCode && bidResponse.bidderCode=="pxyz" &&   cpm && cpm<=1.74)
return "0.00";

if (bidResponse.cpm < 8) {
return bidResponse.pbHg;
} else 
 return "8.00";
}
},{
key: "hb_pb",
val: function (bidResponse) {
               var cpm = bidResponse.cpm;    
if(bidResponse.bidderCode && bidResponse){
urls=["drqq.toys","myrenta.com","myrenta"];
function containsUrl(ad, urls) {
ad=JSON.stringify(ad);
ad=ad.toLowerCase();
   for (let url of urls) {
      if (ad.includes(url)) {
        return true;
    }
}
return false;
}
if(bidResponse.bidderCode && bidResponse && containsUrl(bidResponse, urls))
return "0.00";}
if( bidResponse.bidderCode && bidResponse.bidderCode=="pxyz" &&   cpm && cpm<=1.74)
return "0.00";

if (bidResponse.cpm < 8) {
return bidResponse.pbHg;
} else 
 return "8.00";
}
},{

                            key: "hb_format",
       val: function (bidResponse) {
mediaType=bidResponse.mediaType;
if(bidResponse.bidderCode=="teads" )
return "banner";
if(bidResponse.bidderCode=="projectagora" || bidResponse.bidderCode=="rtbdemandadk" || bidResponse.bidderCode=="adlivevideo" ||  bidResponse.bidderCode=="luponmedia"  ||  bidResponse.bidderCode=="adpone" || bidResponse.bidderCode=="adliveplus" )
return "amp";
try
        {
                              mediaType=bidResponse.mediaType;
 if(bidResponse.adUnitCode.indexOf('78059622')>=0)
 return 'amp';
        if(mediaType==undefined || mediaType=="banner")
                              mediaType="amp";
        }
                              catch(e)
        {
                              mediaType="amp";
        }
 return mediaType;
       }
                          },{
       key: "hb_size",
                            val: function (bidResponse) {
           return bidResponse.size;
                            }
   }
                    ]
                },
            };
                            });

var debug=getQueryString_val_new('debug');
if(debug!=undefined && debug==1)
{
context1=getQueryString_val_new('context');
if(context1==undefined )
context1='regular';
console.log('CONTEXT'+context1);
var adunitmock=getQueryString_val_new('adunit');
if(adunitmock==undefined )
adunitmock='andbeyond3001';
var adUnitsfirst = [{
        code: adunitmock,
        mediaTypes: {
banner:{
sizes: [[300,250]],
}
},
        bids: [
{
    bidder: 'pubmatic',
                        params: {
   "publisherId":"156276",
                "adSlot":"pubmatic_test"
    }
                    }
        ]
    }];
if(context1=='instream')
{
width1=640;
height1=480;
}
else
{
width1=300;
height1=250;
}
  var adUnitsvideo = [{
        code: adunitmock,
        sizes :[[640,480],[300,250]],
        mediaTypes: {
video: {
 playerSize:[[width1, height1]],
                context: context1
            }
        },
 renderer: {
        url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
        backupOnly: true, // prefer demand renderer
        render: function (bid) {
            adResponse = {
                ad: {
                    video: {
    content: bid.vastXml,
                        player_height: bid.playerHeight,
    player_width: bid.playerWidth
}
}
            }
            bid.renderer.push(() => {
                ANOutstreamVideo.renderAd({
targetId: bid.adUnitCode,
                    adResponse: adResponse
                });
            });
        }
    },
        bids: [
            {
bidder: 'avantisvideo',
params: {
      AV_PUBLISHERID: '55b78633181f4603178b4568',
      AV_CHANNELID: '5d19dfca4b6236688c0a2fc4'
    }
}
        ]
    }];
activeadunit=adUnitsfirst;
adUnitand1=adUnitsfirst;
if(context1=="instream" || context1=="outstream")
adUnits1=adUnitsvideo;
pbjs.que.push(function () {
pbjs.addAdUnits(adUnitsfirst);
if(context1=="instream" || context1=="outstream")
{
adUnits1=adUnitsvideo;
pbjs.addAdUnits(adUnitsvideo);
}
});
}


googletag.cmd.push(function() {
googletag.pubads().addEventListener('slotVisibilityChanged', function(event) {
});
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
slot=event.slot;
 var responseInfo = slot.getResponseInformation();
if(responseInfo && responseInfo.campaignId &&  event.slot.getSlotElementId() &&  (event.slot.getSlotElementId().indexOf('andbeyond')>=0 ||  event.slot.getSlotElementId().indexOf('cubextra') >= 0))
{
cid=responseInfo.campaignId.toString();
slotid=slot.getSlotElementId();
widthr=1;
heightr=1;
if(slotid.indexOf('300')>=0)
{
widthr=300;
heightr=250;
}
if(slotid.indexOf('200')>=0)
{
widthr=200;
heightr=200;
}
if(slotid.indexOf('336')>=0)
{
widthr=336;
heightr=280;
}
if(slotid.indexOf('160')>=0)
{
widthr=160;
heightr=600;
}
if(slotid.indexOf('120')>=0)
{
widthr=120;
heightr=600;
}
if(slotid.indexOf('600')>=0)
{
widthr=300;
heightr=600;
}
if(slotid.indexOf('468')>=0)
{
widthr=468;
heightr=60;
}
if(slotid.indexOf('320480')>=0)
{
widthr=320;
heightr=480;
}
if(slotid.indexOf('320')>=0 && slotid.indexOf('320480')<0)
{
widthr=320;
heightr=50;
}
if(slotid.indexOf('970')>=0 && slotid.indexOf('970250')<0)
{
widthr=970;
heightr=90;
}
if(slotid.indexOf('970250')>=0)
{
widthr=970;
heightr=250;
}
if(slotid.indexOf('728')>=0)
{
widthr=728;
heightr=90;
}
existingDiv=document.getElementById(slotid);
if (slotid.indexOf('andbeyond') >= 0 && existingDiv &&  existingDiv.classList.contains('facertb')) {
   removalrtb(slotid);
}
 slotadid = null;
flag_slot=0;
if(responsec && responsec[widthr] && responsec[widthr][heightr] && responsec[widthr][heightr].length>0)
{
if(responseInfo.campaignId && '2517171502,2517372628,2603903204,2761557483,3005196161,3006755219,2516839106,2516841758,2517371437,2517372469,2517372625,2604715422,2604715437,2760518825,2760519512,2766742075,2767247931,3005196215,3005289535,3006080286,3006752372,3006818101,2604715563,3006755267,2517638787,2517372472,2602629805,3246934727,3248687988,2603909519,3265215797,2450583835'.indexOf(cid)>=0)
{
flag_slot=1;
slotadid=slot.getTargeting('hb_adid');
if(responsec[widthr] && responsec[widthr][heightr] && slotadid)
{adid1=slotadid.toString();
responsec[widthr][heightr]=changePriority(responsec[widthr][heightr],adid1);
}
}
if(randNumberand==1 && (event.campaignId=='2718082302' || event.campaignId=='2906230027' ||  event.campaignId=='3544557777') &&  event.slot.getSlotElementId() && (event.slot.getSlotElementId().indexOf('andbeyond')>=0 || event.slot.getSlotElementId().indexOf('cubextra') >= 0))
{
responsec[widthr][heightr] =shuffleArray1(responsec[widthr][heightr]);
responsec[widthr][heightr] = shuffleArray(responsec[widthr][heightr]);
var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'rtbdemiframe');
newDiv.setAttribute('width', widthr);
newDiv.setAttribute('height', heightr);
style1="height:"+heightr+"px; width:"+widthr+"px;margin:0 auto;text-align:center";
newDiv.setAttribute('style',style1);
var newFrame = document.createElement('iframe');
newFrame.setAttribute('id', 'rtbdemiframe');
newFrame.setAttribute('FRAMEBORDER', '0');
newFrame.setAttribute('SCROLLING', 'no');
newFrame.setAttribute('MARGINHEIGHT', '0');
newFrame.setAttribute('MARGINWIDTH', '0');
newFrame.setAttribute('TOPMARGIN', '0');
newFrame.setAttribute('LEFTMARGIN', '0');
newFrame.setAttribute('ALLOWTRANSPARENCY', 'true');
newFrame.setAttribute('WIDTH', '0');
newFrame.setAttribute('HEIGHT', '0');
newDiv.appendChild(newFrame);
document.getElementById(slotid).innerHTML='';
document.getElementById(slotid).appendChild(newDiv);
adid=responsec[widthr][heightr][0]['adid'];
slotadid=adid;
if(adid){
pbjs.renderAd(newFrame.contentWindow.document,adid);
adid1=adid.toString();
if(responsec[widthr][heightr][0]['priority']>0)
{
flag_slot=1;
var url='https://prebid.andbeyond.media/impben1.php?cid=extra&aff=551817&publisher_id='+responsec[widthr][heightr][0]['bidder']+'&price='+responsec[widthr][heightr][0]['cpm']+'&type=refresh&priority='+responsec[widthr][heightr][0]['priority']+'&ttl='+responsec[widthr][heightr][0]['ttl'];
pixel = document.createElement("img");
pixel.src = url;
pixel.style.display = "none";
}
changePriority(responsec[widthr][heightr],adid1);}
}
}
 if (home_country && country_rtb1 && country_rtb1!='TW' && widthr==300 && heightr==250 && document.getElementsByClassName('cubertb').length <=1 )
           animation = 1;
                            else
           animation = 0;
 if(videoid && videoid==slotid)
 animation=0;
if(flag_slot==0)
slotadid=null;
existingDiv=document.getElementById(slotid);
 try{if (slot.getTargeting('refreshtype') == 'hijack'||  slot.getTargeting('refreshtype') == 'unfilledfirstlook' )
           animation = 0;}catch(e){}
if (animation==1 && randNumbercube==1 &&  event.slot.getSlotElementId().indexOf('intercode') < 0 && event.slot.getSlotElementId().indexOf('cubextra') < 0 && isVisible(existingDiv) && (googlevalue==1 || (googlevalue==0 && slotadid!=null)))
 anilogic(slotid, widthr, heightr, slotadid, usesame, maxvariation,sidesanim,googlevalue);
} 
}); 
}); 


var globalinterval3=setInterval(function(){

  if(newunitcallback==1){
    clearInterval(globalinterval3);
   
    if(country_rtb1!=undefined && country_rtb1==home_country){
 var randomval1=Math.floor(Math.random() * 100) + 1;
if(randomval1<=5){
}
}
if(country_rtb1!=undefined && country_rtb1==home_country){
 var randomval1=Math.floor(Math.random() * 100) + 1;
if(randomval1<=5){
window.grumi = {     
  cfg: {
advs: {
"5224976569": true,
                    "4930543899": true,
                    "4670799807": true,
                    "4666413989": true,
                    "5026714521":true,
                    "4860300908": true,
                }, 
            },   
                                           key: "37f9789d-147c-416e-beed-ee36939965ee"
                             };
       (function () {
        var gads = document.createElement("script");
       gads.type = "text/javascript";
gads.async = true;
var useSSL = "https:" == document.location.protocol;
        gads.src = (useSSL ? "https:" : "http:") +
                "//rumcdn.geoedge.be/37f9789d-147c-416e-beed-ee36939965ee/grumi-ip.js";
       var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(gads, node);
    })();
 }
}
randnum = Math.floor(Math.random() * 5) + 1;
pbjs.que.push(function () {
flag_active=0;
visible=0;
special_var=null;
labelnew=bidder_restrict(flag_active,visible,country_rtb1,special_var);
pbjs.setConfig({
  sizeConfig: [{
   mediaQuery: '(min-width: 10px)',
relevantMediaTypes: ['banner'],     
labels: labelnew
}
]
});
country=country_rtb1;
state=city_region;
var CMP_TIMEOUT = 8000;
var consentManagement = {
      gdpr: {
         cmpApi: 'iab',
  timeout: CMP_TIMEOUT,
defaultGdprScope: false
},
usp: {
cmpApi: 'iab',
timeout: 100
}
}
if (typeof __tcfapi !== 'function' || (timezonename!=undefined && timezonename.indexOf('EUROPE')<0) ) {
 delete consentManagement.gdpr;
}
if (typeof __uspapi !== 'function' || (country!=undefined && country!='US') ||  (state!=undefined && state!='CA')) {
 delete consentManagement.usp;
}
if(JSON.stringify(consentManagement)!='{}')
{
 pbjs.que.push(function() {
pbjs.setConfig({consentManagement});
});
}

});
 pbjs.que.push(function() {
});

  }
},100);






























function refreshBid1rtb(id,test) {
 googletag.cmd.push(function() {
try
{
  var labelnew=Array();
  flag_active=1;
  visible=1;
  if(country_rtb1==undefined)
  country_rtb1='IN';
  
 labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);
id1=eval(id);
id1.setTargeting("prebidtrue", "0");
id1.setTargeting("refresh1", "0");
eval("widthid" + id + " = width");
eval("heightid" + id + " = height");
try{if(adunit3==undefined)
adunit3=id;
}
catch(e)
{
adunit3=id;
}
     try     
     {       
     temp_caps=this1.innerHTML;      
     }       
     catch(e)        
     {       
     temp_caps=id;   
     }       
     flagvideo=0;    

 pbjs.que.push(function() {
      pbjs.requestBids({
         labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {
               try
     {
     width1=eval('widthid'+id);
     height1=eval('heightid'+id);
  width=width1;
  height=height1;
     }
     catch(e)
     {       
     
       
     }       

        andstatus3001=1;
        id1=eval(id);
       if(id1!=undefined)
            {

              setTimeout(function () {
            if(adlooksstatus1==0){
                id1=eval(id);
             pbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=pbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
        {
             

           }else{
             googletag.pubads().refresh([id1]);
           }
             
            }
             },1500);
            var cb = adloox_pubint_timeout(function() {
              id1=eval(id);
              adlooksstatus1=1;
             pbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=pbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
           {
             

           }else{
             googletag.pubads().refresh([id1]);
           }

             // googletag.pubads().refresh([id1]);
            }, 700); // 700 milliseconds maximum delay
            adloox_pubint.cmd.push(function() {
            adloox_pubint.gpt(googletag, cb);
            });

            }

       }
      });
    });

 setTimeout(function () {

if(andstatus3001==0)
{

     id1=eval(id);
     googletag.pubads().refresh([id1]);

}
}, 5000);
}
catch(e)
{


}
});
 }

 
      
     
          
          
       
       
     
     
 
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        
     
     
     
     

      
     
     
     
     
     
     

          let options = {
                root: null,
                rootMargin: "-50px -50px",
                threshold: 0.05
            };
         let observer = new IntersectionObserver((entries, ob) => {
         entries.forEach(entry => {
        target_id=entry.target.id;
        if (entry.isIntersecting) {
        starttime = entry.time;
        start_time[target_id]=starttime;
        entry.target.classList.add("active");
        } else {
       entry.target.classList.remove("active");
      if (start_time[target_id]!=undefined && start_time[target_id] != 0) {
      endtime = entry.time;
      if(total_vis[target_id]==undefined)
      total_vis[target_id]=0;
      total_vis[target_id] = total_vis[target_id] + endtime - start_time[target_id];
      totalvisible1=Math.round(total_vis[target_id]/1000);
      slot_vis[target_id]=totalvisible1;

                        }
                    }
                });
            }, options);


console.log("Country1"+country_rtb1);
var url1=window.location.origin + window.location.pathname;
var country=country_rtb1;

   (function () {
 var gads = document.createElement('script');

       gads.type = 'text/javascript';
gads.async = true;
var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
                '//p.adlooxtracking.com/gpt/a.js';
       var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();


window.adloox_pubint = window.adloox_pubint || { cmd: [] };
adloox_pubint.cmd.push(function() {
adloox_pubint.init({
clientid: 532,
platformid: 248,
tagid: 1193

});
});
window.googletag = window.googletag || { cmd: [] };


url1=window.location.href;
ignore={};
 googletag.cmd.push(function() {


    ///////// BEGIN DIY INJECT JS //////////
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      function a2qs(a) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        function fixedEncodeURIComponent(str) {
          return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
          });
        }
       
 
        const args = [];
        let n = a.length;
        while (n-->0)
          if (!(a[n][1] === undefined || a[n][1] === null || a[n][1] === false))
            args.unshift(fixedEncodeURIComponent(a[n][0]) + (a[n][1] !== true ? ('=' + fixedEncodeURIComponent(a[n][1])) : ''));
        
        return args.join('&');
      }


      if (event.isEmpty) return;

      var slot = event.slot;
      var id = slot.getSlotElementId();

if (googletag.pubads().getTargeting("adl_ok").length==0)return;


 if((googletag.pubads().getTargeting("adl_ivt").length>0 && googletag.pubads().getTargeting("adl_ivt")=='1') || (googletag.pubads().getTargeting("adl_ua_old").length>0 && googletag.pubads().getTargeting("adl_ua_old")=='1') || googletag.pubads().getTargeting("adl_ua_invalid").length>0 && googletag.pubads().getTargeting("adl_ua_invalid")=='1'){
adloox_fraud=1;
}else{
  adloox_fraud=0;
}

if(id=='andbeyond3001' && (ignore[id]==undefined || !ignore[id])) 
{
ignore[id]=true;
}
else
return;

      var el = document.getElementById(id);
      if (!el) {
        console.log('should not happen, missing id!', id);
        return;
      }


      var js = 'https://j.adlooxtracking.com/ads/js/tfav_adl_' + 532 + '.js';  // clientid
      var qs = [
        [ 'tagid', 1193 ],              // tagid
        [ 'platform', 248 ],              // platformid
        [ 'targetelt', id ],
        [ 'fwtype', 4 ],
        [ 'id1', slot.getSlotElementId() ],
        [ 'id2', slot.getAdUnitPath() ],
        [ 'id3', event.advertiserId ],
        [ 'id4', event.campaignId ],
        [ 'id5', event.creativeId ],
        [ 'id6', event.lineItemId ],
        [ 'id7', event.size.join('x') ],
        [ 'id8', url1 ],      // <<<< SET BY YOU EARLIER!
        [ 'id9', country_rtb1 ],      // <<<< SET BY YOU EARLIER!
        [ 'id11', '$ADLOOX_WEBSITE' ]
      ];
  
      var s = document.createElement('script');
      s.src = js + '#' + a2qs(qs);
      el.parentNode.insertBefore(s, el.nextSibling);
    });
    ///////// END DIY INJECT JS //////////
  });



var adloox_pubint_timeout = function(fn, to) {
var cb = (function(that) {
return function() {
if (!cb.t) return;
window.clearTimeout(cb.t);
delete cb.t;
fn.apply(that);
};
})(this);
cb.t = window.setTimeout(cb, to);
return cb;

};






setTimeout(function(){
  var locurl2=window.location.href;
locurl2 = locurl2.replace(/(^\w+:|^)\/\//, '');
 // console.log("locurl2"+locurl2);
if(block_url && block_url.length>0)
{
for(i=0;i<block_url.length;i++)
{
var url22=block_url[i]['url'];

if(locurl2.indexOf(url22)>=0)
{
   // console.log("locuradult1");
try{
if(googletag!=undefined &&  googletag.pubads()!=undefined){
 googletag.pubads().setTargeting("adult","1");
   // console.log("locuradult2");
   andbeyondadult=1;
}
}catch(e){
console.log('EXCEPTION'+e);
}
}
}

}

},1000);
var block_url={};


function refreshBidblock(id,test) {
 googletag.cmd.push(function() {
id1=eval(id);
googletag.pubads().refresh([id1]);
});
}
 




function encodenativeurl(string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}


function refreshBid2(id,this1,type,test,factor,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit) {
 googletag.cmd.push(function() {
try{

adunit3=id;
var adunit55=id;

if(adunit3!=undefined){
adunit3=adunit3.replaceAll('\/', '');
adunit3=adunit3.replaceAll('\_', '');
adunit3=adunit3.replaceAll('\-', '');
adunit3=adunit3.replaceAll('\.', '');
}














adunit2=adunitnamecheck(id);

var html=this1.innerHTML;
var demand_timeout;
var demand_payout;
var ad;
var publisher_id;
var cid;
var crid;
var id3;
var supply_timeout;

var countrefresh=0;
var norefresh=-1;
var idnew=id;
       var windowwidth = window.innerWidth;
var visible=true;
if(windowwidth<700 || flag6==1)
visible = isVisible(this1);
else 
visible = isVisible(this1);

flag=1;
if(visible==true)
{
flag=1;
}

var data;

id=id.replaceAll('\/', '');
id=id.replaceAll('\_', '');
id=id.replaceAll('\-', '');
id=id.replaceAll('\.', '');
try
{
data=eval('count'+id);
}
catch(e)
{
data=0;
}
var count=1;
if(data==undefined)
count=1;
else
count=parseInt(data)+1;

eval("count" + id + " = count");
tempval=eval("count"+id);

countrefresh=count;
strategy2=strategy;
if(visible==false)
{
success=count/factor_visible;

if(Number.isInteger(success))
{
flag=1;
strategy2=0;
}
else
{
strategy2=0;
flag=0;
}
}

if(visible==true && factor>1)
{
success=count/factor;
if(Number.isInteger(success))
{
flag=1;
}
else
flag=0;
}


if(norefresh>0)
flag=0;





flag2=1;
if(type==0)
{

try
{
flag2=eval('status'+id+'new');

}
catch(e)
{
flag2=1;
}
}


if((adunit3.indexOf('andbeyond')>=0 || html.indexOf('rtbdemiframe')>0 ) && flag==1 && flag2==1 && count<=1000)
{
if(slot_vis[adunit3]>=min_view_andbeyond)
{
flag2=1;

}
else
{
flag2=2;

}
}

if(adunit3.indexOf('andbeyond')<0 && flag==1 && flag2==1 && count<=1000)
{
if(slot_vis[adunit3]>=min_view)
{
flag2=1;

}
else
{
flag2=2;

}
}


flag4=0;

if(andbeyondnewarray.unfilledadunitkey==1 || andbeyondnewarray.hijackadunitkey==1){
  flag2=1;
  flag=1;
  residual=0;
}else{
  residual=residual2;
}
if((count<=1000 && flag==1) && ((flag2==2) || (adloox_fraud==1) || (eval(conditionblock)) || (andbeyondadult==1) || (type==1 && flag_active==0 && visible==false && count>=10) || (visible==false && country_rtb1=="TW")))
{
flag4=1;

try
{
time_refreshunitnew=eval("time_refreshunitnew"+adunit3);
}
catch(e)
{
time_refreshunitnew=0;
}


diffnew=timer_refresh-time_refreshunitnew;
eval("time_refreshunitnew" + adunit3  + " = timer_refresh");

if(flag2!=2)
{

 time_refreshunit=timer_refresh;


eval("active" + adunit3  + " = nextactive");
eval("passive" + adunit3  + " = nextpassive");
eval("time_refreshunit" + adunit3  + " = time_refreshunit");
}
else
{


if(diffnew<30)
{

flag4=0;
}
}



if(flag4==1 && residual==1)
{

if(flag==1)
{
var randomvaldata=Math.floor(Math.random() * 5) + 1;
if((width==970 && height==250)){
id='andbeyond'+width+height+randomvaldata;
}
else if((width==300 && height==100) || (width==300 && height==600)){
id='andbeyond'+height+randomvaldata;
}else{
id='andbeyond'+width+randomvaldata;
}
}

var labelnew=Array();
labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);

eval("widthid" + id + " = width");
eval("heightid" + id + " = height");
try{if(adunit3==undefined)
adunit3=id;
}
catch(e)
{
adunit3=id;
}
     try     
     {       
     temp_caps=this1.innerHTML;      
     }       
     catch(e)        
     {       
     temp_caps=id;   
     }       
     flagvideo=0;    

 pbjs.que.push(function(){
  pbjs.requestBids({
       labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {
     try
     {
     width1=eval('widthid'+id);
     height1=eval('heightid'+id);
  width=width1;
  height=height1;
     }
     catch(e)
     {       
     
       
     }       

var params = pbjs.getAdserverTargetingForAdUnitCode(id);
if(params && params['hb_adid']){
cpm_final=params['hb_pb'];
}
else{
cpm_final=0;
}

if(cpm_final>0.05 && params['hb_format']=='amp')
{
slot_vis[adunit3]=0;
 time_refreshunit=timer_refresh;
nextnumber++;

eval("active" + adunit3  + " = nextactive");
eval("passive" + adunit3  + " = nextpassive");
eval("time_refreshunit" + adunit3  + " = time_refreshunit");
eval("nextnumber" + adunit3 + " = nextnumber");

var rtbdemrandom=Math.floor(Math.random() * 10000) + 1;
var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'rtbdemiframe'+rtbdemrandom+'');
newDiv.setAttribute("width", width);
newDiv.setAttribute("height", height);
style1="height:"+height+"px; width:"+width+"px;margin:0 auto;text-align:center";
newDiv.setAttribute("style",style1);
var newFrame = document.createElement("iframe");
newFrame.setAttribute("id", "rtbdemiframe"+rtbdemrandom+"");
newFrame.setAttribute("FRAMEBORDER", "0");
newFrame.setAttribute("SCROLLING", "no");
newFrame.setAttribute("MARGINHEIGHT", "0");
newFrame.setAttribute("MARGINWIDTH", "0");
newFrame.setAttribute("TOPMARGIN", "0");
newFrame.setAttribute("LEFTMARGIN", "0");
newFrame.setAttribute("ALLOWTRANSPARENCY", "true");
newFrame.setAttribute("WIDTH", "0");
newFrame.setAttribute("HEIGHT", "0");
newDiv.appendChild(newFrame);
jQuery(this1,parent.document).html(newDiv);
var url='https://prebid.andbeyond.media/impben1.php?aff=551817&publisher_id='+params['hb_bidder']+'&price='+params['hb_pb']+'&type=refresh';
var pixel='<img src="'+url+'" style="display:none"></img>';
pbjs.renderAd(newFrame.contentWindow.document,params['hb_adid']);
jQuery(this1,parent.document).append(pixel);

}


}
});

});
}
}else{

if(type==0)
{
if(count<=1000 && flag==1 && flag2==1)
{


var data;
var counter=1;

try
{
if(width==970 && height==250){
  data=eval('status'+width+height+'new');
  counter=parseInt(data)+1;
}
else{
if((width==300 && height==600) || (width==300 && height==100))
 data=eval('status'+height+'new');
else 
  data=eval('status'+width+'new');
counter=parseInt(data)+1;
}
}catch(e)
{
data=1;
counter=1;
}
if(width==970 && height==250)
eval("status" + width + height+ "new" + " = counter");
else
{
if((width==300 && height==600) || (width==300 && height==100))
eval("status" + height + "new" + " = counter");
else
eval("status" + width + "new" + " = counter");
}


eval("status" + id + "new" + " = 1");


try
{

if(width==970 && height==250){
  stat=eval('size'+width+height+counter+'status');
  }else{
    stat=eval('size'+width+counter+'status');
  }

if(stat==0)
flag2=0;
}
catch(e)
{
flag2=0;

}

if(height=="600" && width=="300"){
  id2='andbeyond'+height+counter;
}else if(height=="250" && width=="970"){
  id2='andbeyond'+width+height+counter;
}
else{
  id2='andbeyond'+width+counter;
}
if(height=="200" && width=="970")
  id2='andbeyond'+width+height+counter;
if(height=="100" && width=="300")
  id2='andbeyond'+height+counter;


eval("andbeyonddiv" + id + " = id2");
eval("andbeyondwidth" + id + " = width");
eval("andbeyondheight" + id + " = height");

test=test.replaceAll(idnew, id2);
id=id2;
eval("count" + id + " = countrefresh");
}
}





if(count<=1000 && flag==1 && flag2==1)
{
slot_vis[id]=0;
 time_refreshunit=timer_refresh;
nextnumber++;


eval("active" + id  + " = nextactive");
eval("passive" + id  + " = nextpassive");
eval("time_refreshunit" + id  + " = time_refreshunit");
eval("nextnumber" + id + " = nextnumber");


try
{
data=eval('counterefresh'+id);
}
catch(e)
{
data=0;
}

var count=1;
if(data==undefined)
count=1;
else
count=parseInt(data)+1;
eval("counterefresh" + id + " =count");


if(html.indexOf('rtbdemiframe')>0)
{
type=0;

}
if(time_interval==undefined)
time_interval=3000;

startdate=new Date();

try
{
startdate=eval('timerefreshand');
}
catch(e)
{

startdate=0;

}
var enddate   = new Date();
if(startdate==0)
mseconds=5000;
else
mseconds = (enddate.getTime() - startdate.getTime()) ;

if(mseconds<time_interval)
{
var dateObj = enddate.getTime();
dateObj += time_interval-mseconds;
endate = new Date(dateObj);
crontime=time_interval-mseconds;
}
else
{
crontime=0;
}

eval("timerefreshand = enddate");
status_bad=0;
id1=null;

try
{
id1=eval(id);
if(id1==undefined)
status_bad=1;

}
catch(e)
{
status_bad=1;

}



if(status_bad==1)
{
googletag.cmd.push(function () {

aff="551817";

len=id.length;
if(len==14){
pos1=id.substr(len-2);
}
else{
  pos1=id.substr(len-1);
}

namemc_back=namemc;
text=null;


if(id.indexOf('100')>0)
{
width1=300;
height1=100;
width2=100;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[300, 100]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('300')>0)
{
width1=300;
height1=250;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[300, 250]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('336')>0)
{
width1=336;
height1=280;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[336,280],[300, 250]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('600')>0)
{
width1=300;
height1=600;
width2=600;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[300,600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('468')>0)
{
width1=468;
height1=60;
width2=468;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[468,60]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('728')>0)
{
width1=728;
height1=90;
width2=728;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[728, 90]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}


if(id.indexOf('970') >0)
{
width1=970;
height1=90;
width2=970;

text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[970, 90],[728,90]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('640')>0)
{
width1=640;
height1=480;
width2=640;

text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[640,480]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}


if(id.indexOf('970')>0 && id.indexOf('250')>0)
{
width1=970;
height1=250;
width2=970250;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[970,250]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('970')>0 && id.indexOf('200')>0)
{
width1=970;
height1=200;
width2=970200;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[970,200]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(id.indexOf('160')>0)
{
width1=160;
height1=600;
width2=160;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[160, 600],[120, 600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('120')>0)
{
width1=120;
height1=600;
width2=120;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[120, 600]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}
if(id.indexOf('320')>0)
{
width1=320;
height1=50;
width2=width1;
text='googletag.defineSlot("/'+namemc_back+',303462569/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[320, 50]], "'+id+'").addService(googletag.pubads())';
var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
}

if(adunit_network.length>0){
name_mc=namemc_back;
namemc_new=name_mc;
for (var i = 0; i < adunit_network.length; i++) {
if(adunit_network[i].adunit==positiondiv)
namemc_new=adunit_network[i].network;
}
if(text!=undefined)
text=text.replaceAll(""+name_mc+"",namemc_new);
}


if(text!=undefined)
{
try
{

id1=eval(text);
eval("andbeyond" + width2 + pos1 + " = id1");
}
catch(e)
{
console.log("CREATION EXCEPTION"+e+'FOR ID'+id);
}
}
});
}

if(type==0 || type==1)
{

eval("strategy2" + id + " =strategy2");
eval("strategy2width" + id + " =width");
eval("strategy2height" + id + " =height");
eval("strategy2type" + id + " =type");
eval("strategy2counter" + id + " =counter");

if(type==0 && strategy2==0){
  this1.style.width = width+"px";
  this1.style.height = height+"px";
  this1.style.margin = "0 auto";
  this1.style.overflow = "hidden";
  if(andbeyondnewarray.unfilledadunitkey==1 || andbeyondnewarray.hijackadunitkey==1){
  this1.style.display = "inline-block";
  this1.parentNode.style.display = "inline-block";
  }
  if(adunit55.indexOf("aswift_")>=0){

  }else{
  this1.innerHTML="";
}
}
}

if(html.indexOf('rtbdemiframe')>0 && strategy2==0){
this1.innerHTML="";
}

var toiurl1=window.location.origin + window.location.pathname;
if((type==0 || newidflag==1) && strategy2==0){
  if(adunit55.indexOf("aswift_")>=0){
    this1.outerHTML=test;

  }else{
 this1.innerHTML=test;
  }
 }

if(html.indexOf('rtbdemiframe')>0 && strategy2==0){
 this1.innerHTML=test;
}

try
{
  settargetkeys(id1,andbeyondnewarray,flag_active,visible,count,adunit2,type);

}
catch(e)
{
console.log('EXCEPTION'+e);
}
var labelnew=Array();
labelnew=bidder_restrict(flag_active,visible,country_rtb1,null);

if(country_rtb1!="IN"){
if(id!=undefined)
{

}
 }
 eval("widthid" + id + " = width");
eval("heightid" + id + " = height");
try{if(adunit3==undefined)
adunit3=id;
}
catch(e)
{
adunit3=id;
}
     try     
     {       
     temp_caps=this1.innerHTML;      
     }       
     catch(e)        
     {       
     temp_caps=id;   
     }       
     flagvideo=0;    

 pbjs.que.push(function() {
if(id!=undefined)
{
     pbjs.requestBids({
       labels:labelnew,
        timeout: PREBID_TIMEOUT_NEW,
        adUnitCodes: [id],
        bidsBackHandler: function() {
     try
     {
     width1=eval('widthid'+id);
     height1=eval('heightid'+id);
  width=width1;
  height=height1;
     }
     catch(e)
     {       
     
       
     }       

          andstatus300=1;
          id1=eval(id);
          idnew12=id.toString();
          var andbparams=pbjs.getAdserverTargetingForAdUnitCode(idnew12);
            id1=eval(id);
           
         
if(id1!=undefined)
            {

              setTimeout(function () {
            if(adlooksstatus==0){
                id1=eval(id);
             pbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=pbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
        {
             

           }else{
             googletag.pubads().refresh([id1]);
           }
             
            }
             },1500);
            var cb = adloox_pubint_timeout(function() {
              id1=eval(id);
              adlooksstatus=1;
             pbjs.setTargetingForGPTAsync([id]);
             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=pbjs.getAdserverTargetingForAdUnitCode(idnew12);
if(andbparams!=undefined)
format=andbparams["hb_format"];
else
format="banner";
videounit=0;
contextvideounit='other';

             if(videounit==1 && (contextvideounit=='instream' || contextvideounit=='oustream' && format!=undefined && format=='video')  || (format!=undefined && format=='video' && (context=='instream' || context=='outstream')))
           {
             

           }else{
             googletag.pubads().refresh([id1]);
           }

             // googletag.pubads().refresh([id1]);
            }, 700); // 700 milliseconds maximum delay
            adloox_pubint.cmd.push(function() {
            adloox_pubint.gpt(googletag, cb);
            });

            }


            }

      });
      }
    });

 setTimeout(function () {

if(andstatus300==0)
{
  id1=eval(id);
console.log('REFRESHING AGAIN AS NO PREBID RETURNED');
googletag.pubads().refresh([id1]);
                 
}
}, 5000);
}
}
}
catch(e)
{

console.log('EXCEPTION'+e);

}
});
}


function findInFramesRecnew(docandbeyond, hitandbeyond) {
  try {
      var docand = (typeof docandbeyond === 'string') ? document.querySelector(docandbeyond) : docandbeyond;
if(docand && docand.outerHTML && docand.outerHTML.toLowerCase().indexOf("no_refresh")>=0)return 1;
      var iframesand = docand.querySelectorAll('iframe');
      for (var iframeloop = 0; iframeloop < iframesand.length; iframeloop++) {
        if (iframesand[iframeloop].contentDocument!=null && iframesand[iframeloop].contentDocument!=undefined) {
          var andbeyondfullhtml = iframesand[iframeloop].contentDocument.body.innerHTML;
          if (andbeyondfullhtml.indexOf(no_refresh) >= 0) {
              hitandbeyond = 1;
              return hitandbeyond;
          }
          if (iframesand[iframeloop].contentDocument) {
              hitandbeyond = findInFramesRec(iframesand[iframeloop].contentDocument, hitandbeyond);
          }
          if (hitandbeyond) {
              return hitandbeyond;
          }
      }
    }
  } catch (e) {
  }
  return hitandbeyond;
}



 var windowwidth = window.innerWidth;

var global_refresh=0;
var tier2=0;

var newid=0;

var flag2=1;

refreshval=refresh;
    


number5=0;
var refresh_time1=0;
var refresh_time=0;
var refresh_time2=0;

setInterval(function(){

  googletag.cmd.push(function() {
  


  var val1=andbeyondtotalSeconds1;
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var current_date = new Date();
  var weekday_value = current_date.getDay();
  //var timehours=new Date().getHours();

success=timer_refresh/timebased_refresh;


try{
if(Number.isInteger(success))
{
timeflag=1;
 highcpm=0.1;
}
else
{

timeflag=0;
}

}catch(e){
console.log('EXCEPTION'+e);
}

     
 var sizeflag=0;
      

  idnew2='';
   knew=0;




var childDivs = document.querySelectorAll('*[id^="andbeyond"],*[id^="div_"],*[id^="div-"],*[id^="aswift_"]');
for( j=0; j< childDivs.length; j++ ) {
  var childDiv = childDivs[j];
newid=0;
newidflag=0;
var norefresh=0;
flag2=1;
var vs2=null;

try
{
if(childDiv!=undefined && childDiv!=null)
  vs2=childDiv.getAttribute('id');
else
 vs2=null;
}
catch(e)
{
}


var visible22=isVisible(childDiv);
if(visible22==undefined){
  visible22=false; 
}

vs3=vs2;
vs3=vs3.replaceAll('\/', '');
vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');


if(vs3!=undefined)
{


if(observ[vs3]==undefined)
{
observ[vs3]=1;
slot_vis[vs3]=0;

}
}



if(visible22==true)
slot_vis[vs3]=slot_vis[vs3]+1;


try{
if(vs2!=undefined && vs2!=null){
var vsinnerhtml=document.getElementById(vs2).innerHTML;
if(vsinnerhtml.indexOf('<iframe')<0){
slot_vis[vs3]=100;
}

}
}catch(e){
  
}


nextactive=refresh+val1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=0;

try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextnumber=eval("nextnumber"+vs3);

nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
}
catch(e)
{
nextactive=refresh+val1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;
pos=1;
}
eval("passive" + vs3 + " = nextpassive");
eval("active" + vs3 + " = nextactive");
eval("time_refreshunit" + vs3 + " = time_refreshunit");
eval("nextnumber" + vs3 + " = nextnumber");
newflag=0;
diff=timer_refresh-time_refreshunit;
flagnewone=0;
if(vs2.indexOf('andbeyond')>=0 || (vs2.indexOf('andbeyond')<0 && timer_refresh>30))
{
if(vs2.indexOf('andbeyond')<0 && visible22==true && timer_refresh>30 && diff>=30){
flagnewone=1;
}
else{
if(vs2.indexOf('andbeyond')>=0 && visible22==true && diff>30){
flagnewone=2;
}
else{
flagnewone=0;
}
}
var temp=childDiv.innerHTML;
var temp_caps=temp.toUpperCase();
m1html=temp;
if(val1==nextactive)
{
if(vs2.indexOf('andbeyond')>=0)
nextactive=nextactive+refresh_andbeyond;
else
nextactive=nextactive+refresh;
if(diff>=30)
{
factor_visible=factor_visible;
newflag=1;
flag_active=1;
}
}
if((timebased==1 && (nextpassive==timer_refresh) && nextnumber<number))
{
if(vs2.indexOf('andbeyond')>=0)
nextpassive=nextpassive+timebased_refresh_andbeyond;
else
nextpassive=nextpassive+timebased_refresh;

if(diff>=30)
{
factor_visible=factor_visible;
flag_active=0;
newflag=1;
}
}


if(flagnewone==1 || flagnewone==2)
{
flag_active=2;
newflag=1;
}
eval("passive" + vs3 + " = nextpassive");
eval("active" + vs3 + " = nextactive");
eval("time_refreshunit" + vs3 + " = time_refreshunit");
eval("nextnumber" + vs3 + " = nextnumber");
if(newflag==1 && diff>=30)
{
    // console.log("diff"+diff+"time_refreshunit"+time_refreshunit+"flagnewone"+flagnewone);

if((diff>=30 && nextnumber<=5) || (flag_active==1))
{
flag6=0;

highcpm=highcpm1;
if(googletag!=undefined &&  googletag.pubads()!=undefined)
 googletag.pubads().setTargeting("refresh","0");
}
else
{



if(googletag!=undefined &&  googletag.pubads()!=undefined)
 googletag.pubads().setTargeting("refresh","1");
flag6=1;
highcpm=0.1;

} 
      

if(vs2.indexOf('andbeyond')==0 || vs2.indexOf('div-')==0 || vs2.indexOf('div_')==0 || vs2.indexOf('aswift_')==0)
{

try
{


if(country_rtb1==undefined)
   country_rtb1="IN";

if(vs2.indexOf('andbeyond')<0)
flag2=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
else
flag2=1;


var hitandbeyond = findInFramesRecnew(document.getElementById(vs2), 0);
if (hitandbeyond === 1)
  flag2 = 0;


}
catch(e)
{
}



factortier1=m1html.indexOf(factor_tier1_text);
factortier2=m1html.indexOf(factor_tier2_text);
factortier3=m1html.indexOf("TIER3");

if(factortier2>0)
tier2=1;

if(factortier3>0)
tier3=1;



size600=temp.indexOf('height="600"');
size300=temp.indexOf('width="300"');
size250=temp.indexOf('height="250"');
size250se=temp.indexOf('width="250"');
size728=temp.indexOf('width="728"');
size160=temp.indexOf('width="160"');
size970=temp.indexOf('width="970"');
size90=temp.indexOf('height="90"');
size320=temp.indexOf('width="320"');
size50=temp.indexOf('height="50"');
size336=temp.indexOf('width="336"');
size280=temp.indexOf('height="280"');
size200=temp.indexOf('height="200"');
size1050=temp.indexOf('width="1050"');
size159=temp.indexOf('height="159"');
size360=temp.indexOf('width="360"');
size100=temp.indexOf('height="100"');
size480=temp.indexOf('height="480"');
size100=temp.indexOf('height="100"');
size480=temp.indexOf('height="480"');
size10501=temp.indexOf('height="1050"');
size980=temp.indexOf('width="980"');
size120=temp.indexOf('width="120"');
size1003=temp.indexOf('width="1003"');
size80=temp.indexOf('height="80"');
size70=temp.indexOf('height="70"');
size468=temp.indexOf('width="468"');
size60=temp.indexOf('height="60"');
size327=temp.indexOf('width="327"');
size223=temp.indexOf('height="223"');

flag=0;

  var windowwidthqwq = window.innerWidth;
            

if(vs2.indexOf('andbeyond')==0){
  flag2=1;
}

if(size468>0 && size60>0)
{
flag=1;
width=468;
height=60;
} 

if(size300>0 && size250>0)
{
flag=1;
width=300;
height=250;
}
if(size250>0 && size250se>0)
{
flag=1;
width=300;
height=250;
}
if(size336>0 && size280>0)
{
flag=1;
width=300;
height=250;
}

if(size327>0 && size223>0)
{
flag=1;
width=300;
height=250;
}

if(size600>0 && size300>0)
{
flag=1;
width=300;
height=600;
}
if(size10501>0 && size300>0)
{
flag=1;
width=300;
height=600;
}


 if(size160>0 && size600>0)
 {
 flag=1;
 width=160;
 height=600;
 }
  if(size120>0 && size600>0)
 {
 flag=1;
 width=120;
 height=600;
 }

if(size728>0 && size90>0)
{
flag=1;
width=728;
height=90;
}
if(size970>0 && size250>0)
{
flag=1;
width=970;
height=250;
}

if(size970>0 && size200>0)
{
flag=1;
width=970;
height=90;
}

if(size970>0 && size90>0)
{
flag=1;
width=970;
height=90;
}
if(size980>0 && size200>0)
{
flag=1;
width=728;
height=90;
}
if(size1003>0 && size80>0)
{
flag=1;
width=970;
height=90;
}
if(size1003>0 && size70>0)
{
flag=1;
width=970;
height=90;
}

if(size300>0 && size50>0)
{
flag=1;
width=320;
height=50;
}

if(size320>0 && size50>0)
{
flag=1;
width=320;
height=50;
}
if(size320>0 && size100>0)
{
flag=1;
width=300;
height=100;
}
if(size300>0 && size100>0)
{
flag=1;
width=300;
height=100;
}

var windowwidthinner = window.innerWidth;
if(flag==0)
{
try{
if(vs2.indexOf('aswift_')>=0){
var divwidth=$("#"+vs2).children("iframe").attr("width");
var divheight=$("#"+vs2).children("iframe").attr("height");
}else{
  var divwidth=$("#"+vs2).children("div").children("iframe").attr("width");
var divheight=$("#"+vs2).children("div").children("iframe").attr("height");
}
if(flag==0){
  // news
sizehp11=temp.indexOf('300px');
sizehp336=temp.indexOf('336px');
sizehp12=temp.indexOf('250px');
sizehp13=temp.indexOf('600px');
sizehp18=temp.indexOf('970px');
sizehp14=temp.indexOf('90px');
sizehp15=temp.indexOf('728px');
sizehp16=temp.indexOf('320px');
sizehp17=temp.indexOf('50px');
sizehp19=temp.indexOf('160px');
sizehp20=temp.indexOf('0px');
sizehp7=temp.indexOf('google_ads_iframe');


if(sizehp11>0 && sizehp12>0 && sizehp7>0)
{
flag=1;
width=300;
height=250;
}

if(sizehp336>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=300;
height=250;
}

if(sizehp11>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=300;
height=250;
}


if(sizehp15>0 && sizehp14>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}
if(sizehp15>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}
if(sizehp18>0 && sizehp14>0 && sizehp7>0)
{
flag=1;
width=970;
height=90;
}
if(sizehp18>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=970;
height=90;
}
if(sizehp11>0 && sizehp13>0 && sizehp7>0)
{
flag=1;
width=300;
height=600;
}
if(sizehp19>0 && sizehp13>0 && sizehp7>0)
{
flag=1;
width=160;
height=600;
}

if(sizehp16>0 && sizehp17>0 && sizehp7>0)
{
flag=1;
width=320;
height=50;
}

}

 if(windowwidthinner<=767){
if((divwidth>=300 && divwidth<=470) && (divheight>=250 && divheight<=470))
{
flag=1;
width=300;
height=250;
}

if((divwidth>=300 && divwidth<=470) && (divheight>=500 && divheight<=700))
{
flag=1;
width=300;
height=600;
}

if((divwidth>=320 && divwidth<=470) && (divheight>=50 && divheight<=90))
{
flag=1;
width=320;
height=50;
}

if((divwidth>=320 && divwidth<=470) && (divheight>=100 && divheight<=180))
{
flag=1;
width=300;
height=100;
}
}
}
catch(e)
{

console.log('EXCEPTIONsize'+e);

}
}

m=vs2.indexOf('andbeyond');
m1=vs2.indexOf('div-');
m2=vs2.indexOf('div_');
m3=vs2.indexOf('aswift_');


if(flag2==1)
{
if(flag==1 && newid!=undefined && newid!=0)
{
if(flag6==1)
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(newid,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit);


}
else
{
if( m==0 || ((m1==0 || m2==0 || m3==0) && flag==1 && temp.indexOf('id="andbeyond')<0))
{

  
if(m==0)
{   

if(flag6==1)
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';
else
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';

 refreshBid2(vs2,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit);
}
else
{

if(flag6==1)
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(vs2,childDiv,0,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit);

}

}

} 

}

andblocktest=0;

if(flag2==0 && flag==1)
{

if(vs3.indexOf('andbeyond')<0 &&  temp.indexOf('andbeyond')<0)
{
  try
     {
    andblocktest=eval('dividandblocktest'+vs3);
     }
catch(e2)
{
eval("dividandblocktest" + vs3 + " = 1");
andblocktest=1;
 
loadblockaff(adunitnamecheck(vs2),"551817_block");
}

}
}



}

}


}


}

});

}, 1000)
 


function gethijack(device,adunit,country,visible,session,size)
{
hijack=0;
h2=0;
json={};
 for (var i = 0; i < json.length; i++) {
flag=0;
test=json[i];
d1=test['device'];
a1=test['adunit'];
c1=test['country'];
v1=test['visible'];
s1=test['session'];
h1=test['hijack'];
si1=test['size'];
if((si1=='ALL' || si1.indexOf(size)>=0 ) && (d1=='ALL' || d1==device) &&  (a1=='ALL' || adunit.indexOf(a1)>=0 ) &&  (c1=='ALL' || c1==country) && (v1=='ALL' || v1==0 || v1==visible) && (s1=='ALL' || s1==session) )
flag=1;
if(h1>h2 && flag==1)
h2=h1;
}
return h2;
}
function firstlookadunitsize(vs2){
try{
width=1;
height=1;
flag=0;
 temp=document.getElementById(vs2).outerHTML;
if(temp && temp!=undefined && temp.indexOf("andbeyond")<0 && (temp.indexOf('width="1"')<0 && temp.indexOf('height="1"')<0)){
 size300=temp.indexOf('width="300"');
 size250=temp.indexOf('height="250"');
 size600=temp.indexOf('height="600"');
 size728=temp.indexOf('width="728"');
 size160=temp.indexOf('width="160"');
size120=temp.indexOf('height="120"');
size970=temp.indexOf('width="970"');
size90=temp.indexOf('height="90"');
size320=temp.indexOf('width="320"');
size50=temp.indexOf('height="50"');
size336=temp.indexOf('width="336"');
size280=temp.indexOf('height="280"');
size100=temp.indexOf('height="100"');
flag=0;
var windowwidthqwq = window.innerWidth;
var windowwidth = window.innerWidth;
var testadunitleader=0;
if(windowwidth<=767){
if(vs2.indexOf("leaderboard")>=0){
testadunitleader=1;
}
}
if((size300>0 && size250>0) || (size336>0 && size280>0))
{
flag=1;
width=300;
height=250;
}
if(size300>0 && size600>0)
{
flag=1;
width=300;
height=600;
}
if((size970>0 && size250>0))
{
flag=1;
width=970;
height=250;
}
if(size970>0 && size90>0)
{
flag=1;
width=970;
height=90;
}
if(size160>0 && size600>0)
{
flag=1;
width=160;
height=600;
}
if(size728>0 && size90>0)
{
flag=1;
width=728;
height=90;
}
if((size320>0 && size50>0))
{
flag=1;
width=320;
height=50;
}
if(size320>0 && size100>0)
{
flag=1;
width=300;
height=100;
}
if(size300>0 && size100>0)
{
flag=1;
width=300;
 height=100;
}
if(flag==0){
 sizehp11=temp.indexOf('300px');
 sizehp12=temp.indexOf('250px');
 sizehp13=temp.indexOf('600px');
 sizehp18=temp.indexOf('970px');
 sizehp14=temp.indexOf('90px');
sizehp15=temp.indexOf('728px');
sizehp16=temp.indexOf('320px');
sizehp17=temp.indexOf('50px');
sizehp19=temp.indexOf('160px');
sizehp22=temp.indexOf('120px');
 sizehp21=temp.indexOf('336px');
 sizehp1200=temp.indexOf('1200px');
sizehp20=temp.indexOf('0px');
sizehp7=temp.indexOf('google_ads_iframe');
if((sizehp11>0 && sizehp20>0 && sizehp7>0) || (sizehp21>0 && sizehp20>0 && sizehp7>0))
{
flag=1;
width=300;
height=250;
}
if(sizehp11>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=300;
 height=250;
}
if(sizehp15>0 && sizehp14>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}
if(sizehp15>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=728;
height=90;
}
if((sizehp18>0 && sizehp14>0 && sizehp7>0) || (sizehp1200>0 && sizehp20>0 && sizehp7>0))
{
flag=1;
width=970;
height=90;
}
if(sizehp18>0 && sizehp20>0 && sizehp7>0)
 {
 flag=1;
 width=970;
height=90;
}
if(sizehp11>0 && sizehp13>0 && sizehp7>0)
 {
flag=1;
width=300;
 height=600;
}
if(sizehp19>0 && sizehp13>0 && sizehp7>0)
{
flag=1;
width=160;
height=600;
}if(sizehp19>0 && sizehp20>0 && sizehp7>0)
{
flag=1;
width=160;
height=600;
 }
if(sizehp20>0 && sizehp7>0 && temp.indexOf("1120px")>0)
{
flag=1;
width=970;
height=90;
 }
if(sizehp16>0 && sizehp17>0 && sizehp7>0)
{
flag=1;
width=320;
 height=50;
 }
if(sizehp16>0 && sizehp20>0 && sizehp7>0)
{
 flag=1;
 width=320;
 height=50;
}
 }
 var windowwidthinner = window.innerWidth;
if(flag==0 && temp.indexOf("<iframe")>=0 && windowwidthinner<=900)
{
 try{
if(vs2.indexOf('aswift_')>=0){
if(vs2.indexOf('_host')>=0){
 var divwidth=document.getElementById(vs2).querySelector("iframe").getAttribute("width");
 var divheight=document.getElementById(vs2).querySelector("iframe").getAttribute("height");
}
 }else{
 var divwidth=document.getElementById(vs2).querySelector("div").querySelector("iframe").getAttribute("width");
  var divheight=document.getElementById(vs2).querySelector("div").querySelector("iframe").getAttribute("height");
}
if(windowwidthinner<=900){
if((divwidth>=300 && divwidth<=470) && (divheight>=250 && divheight<=470))
{
flag=1;
width=300;
height=250;
}
if((divwidth>=300 && divwidth<=470) && (divheight>=500 && divheight<=700))
{
flag=1;
width=300;
height=600;
}
if((divwidth>=320 && divwidth<=470) && (divheight>=50 && divheight<=90))
{
flag=1;
width=320;
 height=50;
}
if((divwidth>=320 && divwidth<=470) && (divheight>=100 && divheight<=180))
{
flag=1;
width=300;
height=100;
 }
 }
 }
 catch(e)
 {
 }
 }
}
 return [width, height, flag];
 }
 catch(e)
 {
 console.log('EXCEPTION'+e+'vs2'+vs2);
 }
}
var andbeyondunfillhijack = setInterval(function() {
 if (window.googletag && googletag.pubadsReady && googletag.apiReady) {
    clearInterval(andbeyondunfillhijack);
  googletag.pubads().addEventListener("slotRenderEnded",
    function(event) {
  try {
      var slot = event.slot;
     var hijackadunit = Math.floor(Math.random() * 100) + 1;
var vs2 = null;
 var vs2 = slot.getSlotElementId();
var adunithijack = vs2;
if (adunithijack != undefined) {
if(adunithijack!=null){
adunithijack=slot.getAdUnitPath();
adunithijack = adunithijack.split("/");
adunithijack = adunithijack[adunithijack.length - 1];
}
}
var visiblehijack = isVisible(document.getElementById(vs2));
 if (visiblehijack == undefined) {
 visiblehijack = false;
 }
if (visiblehijack == true) {
   visiblehijack = 1;
} else {
  visiblehijack = 0;
 }
var childDiv = document.getElementById(vs2);
if(childDiv){
if(document.getElementById(vs2)!=null){
var temp = document.getElementById(vs2).innerHTML;
var temp_caps=temp.toUpperCase();
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
   var anddevice = "MOBILE";
else
   var anddevice = "DESKTOP";
var sessionand = 0;
size="ALL";
 var widthheightabm=firstlookadunitsize(vs2);
var adunitwidthheight=widthheightabm[0]+"X"+widthheightabm[1];
var gethijackandbeyond = gethijack(anddevice, adunithijack, country_rtb1, visiblehijack, sessionand,adunitwidthheight);
var hijackreport1=1;
  andbeyondnewarray['unfilledadunitkey']=0;
   andbeyondnewarray['hijackadunitkey']=0;
 if (gethijackandbeyond != 0 && hijackadunit <= gethijackandbeyond && hijackabm==1) {
   andbeyondnewarray['hijackadunitkey']=1;
hijackreport1++;
}
if (event.isEmpty == true && unfilledabm==1 && hijackreport1==1) {
  andbeyondnewarray['unfilledadunitkey']=1;
}
if(getQueryString_val_new("hijack")==1)
{
hijackadunit=gethijackandbeyond;
hijackabm=1;
console.log("vs2"+vs2)
}
if (vs2.indexOf("andbeyond")<0 && ((event.isEmpty == true && unfilledabm==1) || (gethijackandbeyond != 0 && hijackadunit <= gethijackandbeyond && hijackabm==1))) {
   firstlookrefreshbid2(vs2, visiblehijack, temp, childDiv, temp_caps, andbeyondnewarray);
    }
 }
 }
 }
 catch(e)
 {
 console.log('EXCEPTIONsize'+e+'vs2'+vs2);
 }
})
setTimeout(function(){
var childDivs = document.querySelectorAll('*[id^="gpt-"],*[id^="div-"],*[id^="ats-"]');
for (j = 0; j < childDivs.length; j++) {
   var childDiv = childDivs[j];
  var vs2 = null;
  try {
if (childDiv != undefined && childDiv != null)
   vs2 = childDiv.getAttribute('id');
else
   vs2 = null;
} catch (e) {}
if(childDiv && vs2!=null && vs2!=undefined){
var adunithijack = vs2;
if (adunithijack != undefined) {
  try {
    adunithijack = eval("adunithijack" + vs2);
} catch (e) {
  var ele = "#" + vs2 + " div";
  try {
   if (document.querySelectorAll(ele)[0]) {
      var a = document.querySelectorAll(ele)[0];
     iframe1 = 1;
   iframeid = a.getAttribute('id');
   adunithijack = iframeid;
 }
} catch (e) {
}
 }
if(adunithijack!=null){
if(adunithijack.indexOf("google_ads_iframe_")>=0){
adunithijack = adunithijack.replaceAll("google_ads_iframe_", "");
adunithijack = adunithijack.replaceAll("_0", "");
adunithijack = adunithijack.replaceAll(",", "");
adunithijack = adunithijack.replaceAll("__container", "");
pos = adunithijack.lastIndexOf("/");
if (pos > 0)
   adunithijack = adunithijack.substring(pos + 1);
len = adunithijack.length;
pos123 = adunithijack.substring(len - 2, len - 1);
if (pos123 == "_") {
adunithijack = adunithijack.substring(0, len - 2);
 }
 }
 }
 }
 var visiblehijack = isVisible(childDiv);
 if (visiblehijack == undefined) {
   visiblehijack = false;
}
 if (visiblehijack == true) {
 visiblehijack = 1;
 } else {
   visiblehijack = 0;
}
var temp = childDiv.innerHTML;
var temp_caps = temp.toUpperCase();
var sizeunfilliframeoogle = temp.indexOf("<iframe");
var sizeiframeoogle = temp.indexOf("google_ads");
 var hijackadunit = Math.floor(Math.random() * 100) + 1;
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
   var anddevice = "MOBILE";
else
   var anddevice = "DESKTOP";
 var sessionand = 0;
 var widthheightabm=firstlookadunitsize(vs2);
var adunitwidthheight=widthheightabm[0]+"X"+widthheightabm[1];
var gethijackandbeyond = gethijack(anddevice, adunithijack, country_rtb1, visiblehijack, sessionand,adunitwidthheight);
var hijackreport1=1;
  andbeyondnewarray['unfilledadunitkey']=0;
   andbeyondnewarray['hijackadunitkey']=0;
if (gethijackandbeyond != 0 && hijackadunit <= gethijackandbeyond && hijackabm==1) {
  andbeyondnewarray["hijackadunitkey"]=1;
hijackreport1++;
}
if (sizeunfilliframeoogle < 0 && sizeiframeoogle>0 && unfilledabm==1 && hijackreport1==1) {
 andbeyondnewarray["unfilledadunitkey"]=1;
}
if(getQueryString_val_new("hijack")==1)
{
hijackadunit=gethijackandbeyond;
hijackabm=1;
console.log("vs2"+vs2)
  andbeyondnewarray["hijackadunitkey"]=1;
}
 if ((vs2.indexOf("andbeyond")<0) && ((sizeunfilliframeoogle < 0 && sizeiframeoogle>0 && unfilledabm==1) || (gethijackandbeyond != 0 && hijackadunit <= gethijackandbeyond && hijackabm==1))) {
   firstlookrefreshbid2(vs2, visiblehijack, temp, childDiv,temp_caps, andbeyondnewarray);
}
 }
 }
}, 2000);
 }
}, 100);
function firstlookrefreshbid2(vs2,visiblehijack,temp,childDiv,temp_caps,andbeyondnewarray){
  try
  {
   var flag2=1;
   var flag6=1;
  var sizeflag=0;
var flag_active=2;
if(andbeyondnewarray.unfilledadunitkey==1){
flag_active=-1;
 }
if(andbeyondnewarray.hijackadunitkey==1){
  flag_active=-2;
 }
var idnew2='';
var knew=0;
var newid=0;
var newidflag=0;
var norefresh=0;
var flag2=1;
if(vs2)
{
try
{
if(country_rtb1==undefined)
country_rtb1='IN';
if(vs2.indexOf('andbeyond')<0)
flag2=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
else
flag2=1;
var temp = childDiv.innerHTML;
m1html=temp;
var ele='#'+vs2+' iframe';
try
{
if(ele.length>0)
{
var a=document.querySelectorAll(ele)[0];
iframe1=1;
  iframeid=a.getAttribute('id');
safeframe=a.getAttribute('data-is-safeframe');
if(iframeid!=undefined && safeframe==undefined)
{
iframe1=1;
var iframe = document.getElementById(iframeid);
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var m1html = innerDoc.getElementsByTagName('html')[0].innerHTML;
var norefresh=m1html.indexOf(no_refresh);
 if(norefresh>0)
{
flag2=0;
}
}
}
}
catch(e){
}
var norefresh=m1html.indexOf(no_refresh);
 if(norefresh>0)
{
flag2=0;
}
}
catch(e)
{
}
if(vs2 && vs2.indexOf("andbeyond")<0)
{
var widthheightabm=firstlookadunitsize(vs2);
width=widthheightabm[0];
height=widthheightabm[1];
flag=widthheightabm[2];
 var position_flag=0;
if(getQueryString_val_new("hijack")==1)
{
console.log("vs2"+vs2+"flag"+flag+"flag2"+flag2);
}
nextactive=refresh;
nextpassive=timebased_refresh;;
 if(flag==1 && flag2==1)
{
 if(flag==1 && newid!=undefined && newid!=0){
test='<div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div>';
            refreshBid2(newid,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,0,0,andbeyondnewarray);
  }else{
test='<div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div>';
    refreshBid2(vs2,childDiv,0,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,0,0,andbeyondnewarray);
 }
 }
 }
 }
 }
 catch(e)
 {
 console.log('EXCEPTION'+e);
 }
}





}}loadGtag("551817_pv");