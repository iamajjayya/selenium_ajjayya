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
gtag('event', '9760155_block', {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'block', 
 'event_label':adunitname, 
            'value': 1, 
 'non_interaction': true
        }); 
}
function loadblock()
{
gtag('event', '9760155_block', {
 'send_to': 'G-M7E3P87KRC',
                'event_category': 'block', 
 'event_label': '9760155_block', 
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

try{if(aff_var==undefined)aff_var=Array();}catch(e){aff_var=Array()}aff_var.push(9760155);if(aff_var.length==1){var time_interval=500;
var status=1;

var temp;
var vs3;
var test;
var height;
var width;
var videolabel=Array();
var geoedge=1;
var geopercent=100;
var geoedge=1;
var min_view_andbeyond=0;
var min_view=8;
var timebased_refresh_andbeyond=60;
var hijackabm=0;
var unfilledabm=0;
var andbeyondnewarray={};
var residual=0;
var residual2=residual;
var responsec={};
var isConnected=true;
var unfilladunitdata = {};
var hijackdone = {};
observehijack={};
obsrefreshdone={};
country_rtb1="JP";conditionblocklogic={};conditionblock='if(conditionblocklogic[id]){if(conditionblocklogic[id]["WW"])country_new="WW";else country_new=country_rtb1;if(!conditionblocklogic[id][country_new])false; else eval(conditionblocklogic[id][country_new]);  }else{if(conditionblocklogic["ALL"] && conditionblocklogic["ALL"]["WW"]){country_new="WW";}else {country_new=country_rtb1;};if(!conditionblocklogic["ALL"] || !conditionblocklogic["ALL"][country_new])false; else eval(conditionblocklogic["ALL"][country_new]);}';
var urlandbeyond=window.location.origin + window.location.pathname;
block_segment_url='//rtbcdn.andbeyond.media/block_segment_multi_9760155.js';
conditionseg=false;
andbeyondurl=window.location.href;
videoid = null;
randNumber = 0;
randNumbervid =1;
randNumberinter =1;
randNumbercube =0;
function showDivIfHidden(div) {
computedStyle = window.getComputedStyle(div);
  if (computedStyle.display === 'none') {
     div.style.removeProperty('display');
  }
}
function findMatchingDimensions(test_input) {
data_desk = [{ width: 300, height: 250 }, { width: 300, height: 600 }];
data_mobile = [{ width: 300, height: 250 }, { width: 300, height: 600 }];

if ( window.innerWidth <= 767)
{
  anddevice = 'MOBILE';
data_device=data_mobile;
}
else
{
  anddevice = 'DESKTOP'
 data_device=data_desk;
}

    for (let i = 0; i < data_device.length; i++) {
        for (let j = 0; j < test_input.length; j++) {
            if (typeof test_input[j] === 'object' && test_input[j].width === data_device[i].width && test_input[j].height === data_device[i].height) {
                return { width: test_input[j].width, height: test_input[j].height };
            }
        }
    }


 for (let j = 0; j < test_input.length; j++) {
        if (typeof test_input[j] === 'object' && test_input[j]!='fluid' && test_input[j].width &&  test_input[j].width !== 1 && (anddevice=='DESKTOP' || (anddevice=='MOBILE' && test_input[j].width !== 728 && test_input[j].width !== 970  ))) {
            return { width: test_input[j].width, height: test_input[j].height };
        }
    }
    return null;
}

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
function firstlookrefreshbid2(vs2,childDiv,andbeyondnewarray,flag_active,temp_caps){
  try
  {
  if(vs2) hijackdone[vs2]=1;
   var flag2=1;
   var flag6=1;
var vs3=vs2;
vs3=vs3.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
nextnumber=eval("nextnumber"+vs3);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;
}
eval("passive" + vs3+ " = nextpassive");
eval("active" + vs3+ " = nextactive");
eval("time_refreshunit" + vs3+ " = time_refreshunit");
eval("nextnumber" + vs3+ " = nextnumber");
  var sizeflag=0;
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
flag2=0;
var tempnew = childDiv.innerHTML;
m1html=tempnew;
var ele='#'+vs2+' iframe';
if(document.getElementById(vs2))
{
var hitandbeyond = findInFramesRecnew(document.getElementById(vs2), 0);
if (hitandbeyond === 1)
  flag2 = 0;
}
}
catch(e)
{
}
if(vs2 && vs2.indexOf("andbeyond")<0)
{
var widthheightabm=firstlookadunitsize(vs2,1);
var widthm=widthheightabm[0];
var heightm=widthheightabm[1];
var flag=widthheightabm[2];
 var position_flag=0;
if(getQueryString_val_new("hijack")==1)
{
console.log("vs2"+vs2+"flag"+flag+"flag2"+flag2);
}
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2+"flag"+flag+"flag2"+flag2);
}
vs3=vs2;
vs3=vs3.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
try{
nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
}
eval("passive" + vs3 + " = nextpassive");
eval("active" + vs3 + " = nextactive");
 if(flag==1 && flag2==1)
{
slot_vis[vs3]=100;
 if(flag==1 && newid!=undefined && newid!=0){
eval("time_refreshunit" + vs3  + " = timer_refresh");
test='<div class="andbeyond_adunit hijorunfill"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
            refreshBid2(newid,childDiv,1,test,1,widthm,heightm,newidflag,flag6,flag_active,nextactive,0,0,0,andbeyondnewarray);
  }else{
eval("time_refreshunit" + vs3  + " = timer_refresh");
test='<div class="andbeyond_adunit hijorunfill"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
    refreshBid2(vs2,childDiv,0,test,1,widthm,heightm,newidflag,flag6,flag_active,nextactive,nextpassive,0,0,andbeyondnewarray);
 }
 }
 }
 }
 }
 catch(e)
 {
 console.log('UNFILL EXCEPTION'+e.stack);
 }
}
function handleIntersectionrefresh(entries, observer) {
  entries.forEach(entry => {
 if (entry.isIntersecting) {

var vs2 = null;
 var vs2 = entry.target.id;
 if(vs2){
 var adunithijack = vs2;
temphijack='';
var tempnew = entry.target.innerHTML;
tempnew=vs2+tempnew;
temphijack=tempnew;

temp_caps=tempnew.toUpperCase();
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
   var anddevice = 'MOBILE';
else
   var anddevice = 'DESKTOP';
var sessionand = 0;
size='ALL';
var hijackreport1=1;
var andbeyondnewarray={};
  andbeyondnewarray['unfilledadunitkey']=0;
   andbeyondnewarray['hijackadunitkey']=0;
   andbeyondnewarray['view']=0;
var vs3=vs2;


vs3=vs3.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
nextnumber=eval("nextnumber"+vs3);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;


}

eval("passive" + vs3+ " = nextpassive");
eval("active" + vs3+ " = nextactive");
eval("time_refreshunit" + vs3+ " = time_refreshunit");
eval("nextnumber" + vs3+ " = nextnumber");

diffnew=timer_refresh-time_refreshunit;

var widthheightabm=firstlookadunitsize(vs2,0);
var widthr=widthheightabm[0];
var heightr=widthheightabm[1];
var flagin=widthheightabm[2];

flag2in=1;
if(vs2.indexOf('andbeyond')<0){
flag2in=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
hiti = findInFramesRecnew(entry.target, 0);
if(hiti==1)flag2in=0;
}
if(vs2 && vs2.indexOf('andbeyond')<0 && tempnew.indexOf('andbeyond')>0)flag2in=0;
if(flag2in==1 && flagin==1 && diffnew>=25)
{

rect = entry.target.getBoundingClientRect();
elementArea = rect.width * rect.height;
if(vs2 && vs2.indexOf("andbeyond")<0) observer.unobserve(entry.target);
 visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
 visibleArea = visibleWidth * visibleHeight;
 viewabilityPercentage = (visibleArea / elementArea) * 100;
andbeyondnewarray['view']=0;
if(viewabilityPercentage >=40 && viewabilityPercentage <=50)
andbeyondnewarray['view']=40;
if(viewabilityPercentage >=50 && viewabilityPercentage <=60)
andbeyondnewarray['view']=50;
if(viewabilityPercentage >=60 && viewabilityPercentage <=70)
andbeyondnewarray['view']=60;
if(viewabilityPercentage >=70 && viewabilityPercentage <=80)
andbeyondnewarray['view']=70;
if(viewabilityPercentage >=80 && viewabilityPercentage <=90)
andbeyondnewarray['view']=80;
if(viewabilityPercentage >=90 && viewabilityPercentage <=90)
andbeyondnewarray['view']=90;
if(viewabilityPercentage >=100)
andbeyondnewarray['view']=100;
if(vs2.indexOf('andbeyond')>=0)
 test='<scr' + 'ipt> google' + 'tag.cmd.' + 'push(func' + 'tion() {google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';
else
 test='<div class="andbeyond_adunit interrefresh" style="height:'+heightr+'px; width:'+widthr+'px;overflow:hidden;margin:0 auto;"><div id="' + vs2 + '" class="andbeyondgt" ><scr' + 'ipt>google' + 'tag.cmd.' + 'push(func' + 'tion() {google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
if(vs2.indexOf('andbeyond')>=0)
typein=1;
else
typein=0;
refreshBid2(vs2,entry.target,typein,test,1,widthr,heightr,0,0,4,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray);
}
}


}
 });
}



function handleIntersection(entries, observer) {
  entries.forEach(entry => {
 if (entry.isIntersecting) {

  observer.unobserve(entry.target);
var vs2 = null;
 var vs2 = entry.target.id;
 if(vs2){
 var adunithijack = vs2;
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2);
}
temphijack="";
var tempnew = entry.target.innerHTML;
tempnew=vs2+tempnew;
temphijack=tempnew;
var temp_caps=tempnew.toUpperCase();
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
   var anddevice = "MOBILE";
else
   var anddevice = "DESKTOP";
var sessionand = 0;
size="ALL";
var hijackreport1=1;
var andbeyondnewarray={};
  andbeyondnewarray['unfilledadunitkey']=1;
   andbeyondnewarray['hijackadunitkey']=0;
   andbeyondnewarray['view']=0;
rect = entry.target.getBoundingClientRect();
elementArea = rect.width * rect.height;
 visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
 visibleArea = visibleWidth * visibleHeight;
 viewabilityPercentage = (visibleArea / elementArea) * 100;
andbeyondnewarray['view']=0;
if(viewabilityPercentage >=40 && viewabilityPercentage <=50)
andbeyondnewarray['view']=40;
if(viewabilityPercentage >=50 && viewabilityPercentage <=60)
andbeyondnewarray['view']=50;
if(viewabilityPercentage >=60 && viewabilityPercentage <=70)
andbeyondnewarray['view']=60;
if(viewabilityPercentage >=70 && viewabilityPercentage <=80)
andbeyondnewarray['view']=70;
if(viewabilityPercentage >=80 && viewabilityPercentage <=90)
andbeyondnewarray['view']=80;
if(viewabilityPercentage >=90 && viewabilityPercentage <=90)
andbeyondnewarray['view']=90;
if(viewabilityPercentage >=100)
andbeyondnewarray['view']=100;
if ( unfilledabm==1 && hijackreport1==1) {
  andbeyondnewarray['unfilledadunitkey']=1;
}
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2+"unfilledabm"+unfilledabm+"hijackdone[vs2]"+hijackdone[vs2]+"temphijack"+temphijack);
}
if (hijackdone[vs2]==undefined && temphijack.indexOf("andbeyond")<0 && (( unfilledabm==1) )) {
   firstlookrefreshbid2(vs2,entry.target,andbeyondnewarray,-1,temp_caps);
    }
  }

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
  docandbeyond.querySelector('div').classList.add('NO_REFRESH');
              hitandbeyond = 1;
              return hitandbeyond;
          }
          if (iframesand[iframeloop].contentDocument) {
              hitandbeyond = findInFramesRecnew(iframesand[iframeloop].contentDocument, hitandbeyond);
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

function getextrasize(tempnew,vs2){
var widthN=1;var heightN=1;var flag=0;
var size300=tempnew.indexOf('width="300"');
var size250=tempnew.indexOf('height="250"');
var size336=tempnew.indexOf('width="336"');
var size280=tempnew.indexOf('height="280"');
var size600=tempnew.indexOf('height="600"');
var size728=tempnew.indexOf('width="728"');
var size970=tempnew.indexOf('width="970"');
var size160=tempnew.indexOf('width="160"');
var size90=tempnew.indexOf('height="90"');
var size320=tempnew.indexOf('width="320"');
var size50=tempnew.indexOf('height="50"');
var size100=tempnew.indexOf('height="100"');
var size120=tempnew.indexOf('width="120"');
var size480=tempnew.indexOf('height="480"');
var size60=tempnew.indexOf('height="60"');
var size468=tempnew.indexOf('width="468"');
var size1280=tempnew.indexOf('width="1280"');
var sizegoogleads=tempnew.indexOf('google_ads_iframe');

if(size300>0 && size250>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=300;
heightN=250;
}

if(size336>0 && size280>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=300;
heightN=250;
}

if(size300>0 && size600>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=300;
heightN=600;
}

if(size728>0 && size90>0 && window.innerWidth>768 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=728;
heightN=90;
}
if(size970>0 && size90>0 && window.innerWidth>768 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=970;
heightN=90;
}

if(((size970>0 && size250>0) || (size1280>0 && size250>0) || (tempnew.indexOf('width="1140"')>0 && size280>0)) && window.innerWidth>768 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=970;
heightN=250;
}

if(size160>0 && size600>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=160;
heightN=600;
}

if(size120>0 && size600>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=120;
heightN=600;
}


if(size468>0 && (size60>0 || size90>0) && window.innerWidth>768 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=468;
heightN=60;
}

if(size320>0 && size480>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=320;
heightN=480;
}

if(size320>0 && size50>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=320;
heightN=50;
}

if(size300>0 && size100>0 && (sizegoogleads>=0 || tempnew.indexOf('aswift')>=0))
{
flag=1;
widthN=300;
heightN=100;
}


if(flag==0 && tempnew.indexOf('<iframe')>0 && window.innerWidth<=900)
{
try{
    var divwidth=document.getElementById(vs2).querySelector('iframe').getAttribute('width');
    var divheight=document.getElementById(vs2).querySelector('iframe').getAttribute('height');

if((divwidth>=300 && divwidth<=470) && (divheight>=220 && divheight<=470))
{
flag=1;
widthN=300;
heightN=250;
}

if((divwidth>=300 && divwidth<=470) && (divheight>=500 && divheight<=800))
{
flag=1;
widthN=300;
heightN=600;
}

if((divwidth>=310 && divwidth<=470) && (divheight>=40 && divheight<=98))
{
flag=1;
widthN=320;
heightN=50;
}

if((divwidth>=300 && divwidth<=470) && (divheight>=99 && divheight<=180))
{
flag=1;
widthN=300;
heightN=100;
}
}
catch(e)
{
console.log('Exception'+e);
}
}
if (tempnew.indexOf("oop")>=0 || tempnew.indexOf("1x1")>=0 || tempnew.indexOf("Interstitial")>=0 || tempnew.indexOf("interstitial")>=0) {
flag=0;
}
return [widthN,heightN,flag];}
function findClosestSize(desiredWidth, desiredHeight) {
 var sizes = [[300,100],[970,200],[300,600],[970,250],[120,600],[160,600],[468,60],[320,480],[640,480],[300, 250], [728,90],[320, 50], [970, 90]];
    let closestSize = [1,1];
closestDistance=10000;
for (let i = 0; i < sizes.length; i++) {
         widthsize = sizes[i][0];
         heightsize = sizes[i][1];
        if (widthsize <= desiredWidth && heightsize <= desiredHeight) {
        distance = Math.abs(widthsize - desiredWidth) + Math.abs(heightsize - desiredHeight);
if (distance < closestDistance) {
                closestSize = sizes[i];
                closestDistance = distance;
}
}
}
    return closestSize;
}
function firstlookadunitsize(vs2,hijack_flag){
    try{
 if(vs2){
var widthS=1;
var heightS=1;
var flag=0;
unfilled=false;
var tempnew;
if(flag==0 && hijack_flag==0)
{
 tempnew=document.getElementById(vs2).outerHTML;
data=getextrasize(tempnew,vs2);
widthS=data[0];heightS=data[1];flag=data[2];
}
tempnew=unfilladunitdata[vs2];
if(tempnew!=undefined && (flag==0 ||  hijack_flag==1))
{
widthS=tempnew['sizewidth'];
heightS=tempnew['sizeheight'];
unfilled=tempnew['unfill'];
flag=1;

}

temparsize=findClosestSize(widthS, heightS);widthS=temparsize[0];heightS=temparsize[1];
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
  anddevice = 'MOBILE';
else
   anddevice = 'DESKTOP';
if(anddevice=='MOBILE' && (width==970 || width==728))
{
widthS=1;
heightS=1;
flag=0;
}
if(width==1)flag=0;
 return [widthS, heightS, flag,unfilled];
 }
 }
 catch(e)
 {
 console.log('EXCEPTION'+e.stack+'vs2'+vs2);
return [1,1,0,0];


 }
}

const unfilledobserver = new IntersectionObserver(handleIntersection);
const refreshobserver = new IntersectionObserver(handleIntersectionrefresh);

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


@keyframes rotate {

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



@keyframes rotate-hover {
    0%, 100% { transform: rotateX(0deg); }
}


@keyframes rotate {

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
@keyframes rotate {
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
box-sizing: border-box; /* Include border in dimensions */
overflow: hidden;
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




@keyframes rotate {
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
                childDiv.style.animation = "rotate 10s infinite linear";
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
 textnew="/21751243814,90608236/9760155-ANIMATION-"+pos1;
var text="googletag.defineSlot(textnew, sizenew,idextra).addService(googletag.pubads());";   
            console.log("TEXTAGAIN" + text);



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


                console.log("CREATION EXCEPTION" + e.stack + "FOR ID");
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
console.log("IDEXTRA"+idextra);
idextra1=eval(idextra);
console.log("IDEXTRA"+idextra1);
if(idextra1!=undefined)
{
 idextra1.setTargeting("extra", "9760155");
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

                rtbpbjs.renderAd(newFrame.contentWindow.document, adid);
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
var label_adapter_display={"33across":["33across1"],"abmanx":["abmanx1"],"abmoftmedia":["abmoftmedia13"],"criteointl":["cirteointl2","criteointl1"],"criteo":["criteo1","criteo2"],"eplanning":["eplan1"],"getapp":["getapp1"],"improvedigital":["improve1"],"project-limelight":["lime1"],"oftmedia":["oft1"],"onetag":["onetag1","onetag14","onetag15"],"openx":["openx1"],"richaudience":["richaudience3"],"smaato":["smaato1"],"smartadserver":["smartadserver1","smartadserver2"]};
var config_rtb={};
var adapter_rtb_new={"andbeyond320":[14],"andbeyond100":[9],"andbeyond468":[4],"andbeyond160":[5],"andbeyond120":[5],"andbeyond970":[4],"andbeyond970250":[4],"andbeyond728":[24],"andbeyond600":[9],"andbeyond300":[24]};
var home_country="JP";
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
var restrict_bidder1={"DISPLAY":{"33across":{"US":{"ALL":{"label":"33across1","keyname":"all"}}},"abmanx":{"ALL":{"ALL":{"label":"abmanx1","keyname":"visible=1"}}},"abmoftmedia":{"ALL":{"VISIBLE=1":{"label":"abmoftmedia13","keyname":"all"}}},"criteointl":{"ALL":{"ALL":{"label":"cirteointl2","keyname":"all"}},"IN":{"ALL":{"label":"criteointl1","keyname":"block"}}},"criteo":{"IN":{"ALL":{"label":"criteo1","keyname":"all"}},"ALL":{"ALL":{"label":"criteo2","keyname":"block"}}},"eplanning":{"US":{"ALL":{"label":"eplan1","keyname":"all"}}},"getapp":{"ALL":{"ALL":{"label":"getapp1","keyname":"all"}}},"improvedigital":{"US":{"ALL":{"label":"improve1","keyname":"all"}}},"project-limelight":{"ALL":{"MOBILE":{"label":"lime1","keyname":"all"}}},"oftmedia":{"ALL":{"ALL":{"label":"oft1","keyname":"all"}}},"onetag":{"US":{"ALL":{"label":"onetag1","keyname":"all"}},"HK":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"TH":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"MY":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"IN":{"VISIBLE=1":{"label":"onetag14","keyname":"all"}},"ALL":{"ALL":{"label":"onetag15","keyname":"all"}}},"openx":{"ALL":{"ALL":{"label":"openx1","keyname":"visible=1"}}},"richaudience":{"ALL":{"ALL":{"label":"richaudience3","keyname":"richaudience3"}}},"smaato":{"ALL":{"MOBILE":{"label":"smaato1","keyname":"all"}}},"smartadserver":{"IN":{"ALL":{"label":"smartadserver1","keyname":"visible=1"}},"ALL":{"ALL":{"label":"smartadserver2","keyname":"all"}}}}};
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

function callnative(id,context,format,id1,andbparams,idnew12,width,height){
try{
if(format!=undefined && format=="native")
{
hb_native_title=null;
hb_native_image=null;
 if(andbparams["hb_native_image"]!=undefined)
hb_native_image=encodenativeurl(andbparams["hb_native_image"]);
 if(andbparams["hb_native_title"]!=undefined)
hb_native_title=encodenativeurl(andbparams["hb_native_title"]);
id1.setTargeting("hb_width",width);
id1.setTargeting("hb_height",height);
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

var andbeyondurl=window.location.origin + window.location.pathname;

if(andbeyondurl!="https://www.oricon.co.jp/gravure/" && andbeyondurl!="https://www.oricon.co.jp/gravure"){

var getQueryString_val = function ( field, url ) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var string = reg.exec(href);
  return string ? string[1] : null;
};



var andbeyondtest=getQueryString_val('andbeyondtest');
var richaudiencetest=getQueryString_val("richaudiencetest");
var luponmediatest=getQueryString_val("luponmediatest");
andbeyondreward=getQueryString_val('andbeyondreward');








var lineitemidcode = {};

function creativeid1(andbeyondlineitemID, andbeyondcreativediv, andbeyondslotname, andbeyondcreativeId, andbeyondadvertiserId, andbeyondcampaignId) {
  // Check if andbeyondlineitemID is not null and andbeyondcreativediv does not contain "andbeyond"
  // if (andbeyondlineitemID != null) {

      if (lineitemidcode.hasOwnProperty(andbeyondcreativediv)) {
          delete lineitemidcode[andbeyondcreativediv];
      }

      var andbeyondtemp = {
          'abplineItemId': andbeyondlineitemID,
          'abpcreativeDIV': andbeyondcreativediv,
          'abpslotname': andbeyondslotname,
          'abpcreativeID': andbeyondcreativeId,
          'abpadvertiserId': andbeyondadvertiserId,
          'abpcampaignId': andbeyondcampaignId
      };
      
      // Add the new entry to lineitemidcode
      lineitemidcode[andbeyondcreativediv] = andbeyondtemp;
  // }
}
var adslot88=setInterval(function(){

var andbeyondcreativead=Array();
if(window.googletag && googletag.pubadsReady && googletag.apiReady)
  {
clearInterval(adslot88);
 googletag.cmd.push(function() {
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
var adslot1 = event.slot;
var andbeyondslotname=adslot1.getAdUnitPath().toString();
var andbeyondcreativediv=adslot1.getSlotElementId();
var andbeyondlineitemID=event.lineItemId;
var andbeyondcreativeId=event.creativeId;
var andbeyondadvertiserId=event.advertiserId;
var andbeyondcampaignId=event.campaignId;
creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId);

});


var slots = googletag.pubads().getSlots();
for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
var responseInfo = slot.getResponseInformation();
if(responseInfo!=null){
var andbeyondlineitemID=responseInfo.sourceAgnosticLineItemId;
var andbeyondcreativeId=responseInfo.sourceAgnosticCreativeId;
var andbeyondadvertiserId=responseInfo.advertiserId;
var andbeyondcampaignId=responseInfo.campaignId;
var andbeyondcreativediv=slot.getSlotElementId();
var andbeyondslotname=slot.getAdUnitPath();
creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId);
}

}
});  

}
},10);

 

var lineitemidtest=["2872027338","3547793466","3596815130","3597466744","3626365878","3632522768","3635041151","3643243614","3643249398","3654955901","3656081678","3658010838","3661499882","3670703039","3670715174","3671555734","3707642293","3711896131","3720158767","3728969689"];
var valuse1=1;
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
var newunitcallback=1;
var city_rtb='DELHI';
var timezonename='ASIA';
var Countrytimezone='ASIA';
var city_ip='1234445';
var city_region='DL';
var country_rtb1='JP';

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

}
}

loadDatageo('https://rtbdemand.apiip.net/api/check?accessKey=7ef45bac-167a-4aa8-8c99-bc8a28f80bc5&fields=countryCode,regionCode,regionName,city,timeZone,countryName',2000);





var block_url={};

var and_geo_block={"COUNTRY":[{"country_name":"ALL","Adunit_country":["ON-PC-CATEGORY-BIGBANNER-FMNG","ON-PC-CATEGORY-GATELEFT-FMNG","ON-PC-CATEGORY-GATERIGHT-FMNG","ON-PC-CATEGORY-INREADCONTENT1-FMNG","ON-PC-CATEGORY-OVERLAY-FMNG","ON-PC-CATEGORY-RECTANGLE1-FMNG","ON-PC-CATEGORY-RECTANGLE2-FMNG","ON-PC-CATEGORY-RECTANGLE3-FMNG","ON-PC-CATEGORY-RECTANGLE4-FMNG","ON-PC-CATEGORY-RECTANGLE5-FMNG","ON-PC-CATEGORY-RECTANGLE6-FMNG","ON-PC-CATEGORY-RECTANGLE7-FMNG","ON-PC-CATEGORY-VIDEOAD-FMNG","ON-PC-NEWS-BIGBANNER-FMNG","ON-PC-NEWS-GATELEFT-FMNG","ON-PC-NEWS-GATERIGHT-FMNG","ON-PC-NEWS-INREADCONTENT1-FMNG","ON-PC-NEWS-INRECTANGLE1-FMNG","ON-PC-NEWS-INRECTANGLE2-FMNG","ON-PC-NEWS-INTERSTITIAL-FMNG","ON-PC-NEWS-OVERLAY-FMNG","ON-PC-NEWS-RECTANGLE1-FMNG","ON-PC-NEWS-RECTANGLE2-FMNG","ON-PC-NEWS-RECTANGLE3-FMNG","ON-PC-NEWS-RECTANGLE4-FMNG","ON-PC-NEWS-RECTANGLE5-FMNG","ON-PC-NEWS-RECTANGLE6-FMNG","ON-PC-NEWS-RECTANGLE7-FMNG","ON-PC-NEWS-RECTANGLEVARIABLE-FMNG","ON-PC-NEWS-VIDEOAD-FMNG","ON-PC-OTHER-BIGBANNER-FMNG","ON-PC-OTHER-GATELEFT-FMNG","ON-PC-OTHER-GATERIGHT-FMNG","ON-PC-OTHER-INREADCONTENT1-FMNG","ON-PC-OTHER-OVERLAY-FMNG","ON-PC-OTHER-RECTANGLE1-FMNG","ON-PC-OTHER-RECTANGLE2-FMNG","ON-PC-OTHER-RECTANGLE3-FMNG","ON-PC-OTHER-RECTANGLE4-FMNG","ON-PC-OTHER-RECTANGLE5-FMNG","ON-PC-OTHER-RECTANGLE6-FMNG","ON-PC-OTHER-RECTANGLE7-FMNG","ON-PC-OTHER-VIDEOAD-FMNG","ON-PC-PHOTOGALLERY-BIGBANNER-FMNG","ON-PC-PHOTOGALLERY-GATELEFT-FMNG","ON-PC-PHOTOGALLERY-GATERIGHT-FMNG","ON-PC-PHOTOGALLERY-INREADCONTENT1-FMNG","ON-PC-PHOTOGALLERY-INTERSTITIAL-FMNG","ON-PC-PHOTOGALLERY-OVERLAY-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE1-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE2-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE3-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE4-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE5-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE6-FMNG","ON-PC-PHOTOGALLERY-RECTANGLE7-FMNG","ON-PC-PHOTOGALLERY-REWARDE-FMNG","ON-PC-PHOTOGALLERY-VIDEOAD-FMNG","ON-PC-PROF-BIGBANNER-FMNG","ON-PC-PROF-GATELEFT-FMNG","ON-PC-PROF-GATERIGHT-FMNG","ON-PC-PROF-INREADCONTENT1-FMNG","ON-PC-PROF-OVERLAY-FMNG","ON-PC-PROF-RECTANGLE1-FMNG","ON-PC-PROF-RECTANGLE2-FMNG","ON-PC-PROF-RECTANGLE3-FMNG","ON-PC-PROF-RECTANGLE4-FMNG","ON-PC-PROF-RECTANGLE5-FMNG","ON-PC-PROF-RECTANGLE6-FMNG","ON-PC-PROF-RECTANGLE7-FMNG","ON-PC-PROF-VIDEOAD-FMNG","ON-PC-RANK-BIGBANNER-FMNG","ON-PC-RANK-GATELEFT-FMNG","ON-PC-RANK-GATERIGHT-FMNG","ON-PC-RANK-INREADCONTENT1-FMNG","ON-PC-RANK-OVERLAY-FMNG","ON-PC-RANK-RANKINGIN-FMNG","ON-PC-RANK-RECTANGLE1-FMNG","ON-PC-RANK-RECTANGLE2-FMNG","ON-PC-RANK-RECTANGLE3-FMNG","ON-PC-RANK-RECTANGLE4-FMNG","ON-PC-RANK-RECTANGLE5-FMNG","ON-PC-RANK-RECTANGLE6-FMNG","ON-PC-RANK-RECTANGLE7-FMNG","ON-PC-SPECIAL-BIGBANNER-FMNG","ON-PC-SPECIAL-GATELEFT-FMNG","ON-PC-SPECIAL-GATERIGHT-FMNG","ON-PC-SPECIAL-INREADCONTENT1-FMNG","ON-PC-SPECIAL-INTERSTITIAL-FMNG","ON-PC-SPECIAL-OVERLAY-FMNG","ON-PC-SPECIAL-RECTANGLE1-FMNG","ON-PC-SPECIAL-RECTANGLE2-FMNG","ON-PC-SPECIAL-RECTANGLE3-FMNG","ON-PC-SPECIAL-RECTANGLE4-FMNG","ON-PC-SPECIAL-RECTANGLE5-FMNG","ON-PC-SPECIAL-RECTANGLE6-FMNG","ON-PC-SPECIAL-RECTANGLE7-FMNG","ON-PC-SPECIAL-VIDEOAD-FMNG","ON-PC-TEST-BIGBANNER-FMNG","ON-PC-TEST-GATELEFT-FMNG","ON-PC-TEST-GATERIGHT-FMNG","ON-PC-TEST-INREADCONTENT1-FMNG","ON-PC-TEST-INTERSTITIAL-FMNG","ON-PC-TEST-OVERLAY-FMNG","ON-PC-TEST-RECTANGLE1-FMNG","ON-PC-TEST-RECTANGLE2-FMNG","ON-PC-TEST-RECTANGLE3-FMNG","ON-PC-TEST-RECTANGLE4-FMNG","ON-PC-TEST-RECTANGLE5-FMNG","ON-PC-TEST-RECTANGLE6-FMNG","ON-PC-TEST-RECTANGLE7-FMNG","ON-PC-TEST-REWARDE-FMNG","ON-PC-TEST-VIDEOAD-FMNG","ON-PC-TICKET-BIGBANNER-FMNG","ON-PC-TICKET-GATELEFT-FMNG","ON-PC-TICKET-GATERIGHT-FMNG","ON-PC-TICKET-INREADCONTENT1-FMNG","ON-PC-TICKET-OVERLAY-FMNG","ON-PC-TICKET-RECTANGLE1-FMNG","ON-PC-TICKET-RECTANGLE2-FMNG","ON-PC-TICKET-RECTANGLE3-FMNG","ON-PC-TICKET-RECTANGLE4-FMNG","ON-PC-TICKET-RECTANGLE5-FMNG","ON-PC-TICKET-RECTANGLE6-FMNG","ON-PC-TICKET-RECTANGLE7-FMNG","ON-SP-AMP-INREADCONTENT-FMNG","ON-SP-AMP-INRECTANGLE1-FMNG","ON-SP-AMP-INRECTANGLE2-FMNG","ON-SP-AMP-RECTANGLE1-FMNG","ON-SP-CATEGORY-BIGBANNER-FMNG","ON-SP-CATEGORY-OVERLAY-FMNG","ON-SP-CATEGORY-RECTANGLE1-FMNG","ON-SP-CATEGORY-RECTANGLE2-FMNG","ON-SP-CATEGORY-VIDEOAD-FMNG","ON-SP-NEWS-BIGBANNER-FMNG","ON-SP-NEWS-INFEED_MAIN1-FMNG","ON-SP-NEWS-INFEED_MAIN2-FMNG","ON-SP-NEWS-INFEED_MAIN4-FMNG","ON-SP-NEWS-INREADCONTENT-FMNG","ON-SP-NEWS-INREADCONTENT2-FMNG","ON-SP-NEWS-INRECTANGLE1-FMNG","ON-SP-NEWS-INRECTANGLE2-FMNG","ON-SP-NEWS-INTERSTITIAL-FMNG","ON-SP-NEWS-MULTIPLEX-FMNG","ON-SP-NEWS-OVERLAY-FMNG","ON-SP-NEWS-RECTANGLE1-FMNG","ON-SP-NEWS-RECTANGLE2-FMNG","ON-SP-NEWS-VIDEOAD-FMNG","ON-SP-OTHER-BIGBANNER-FMNG","ON-SP-OTHER-OVERLAY-FMNG","ON-SP-OTHER-RECTANGLE1-FMNG","ON-SP-OTHER-RECTANGLE2-FMNG","ON-SP-OTHER-VIDEOAD-FMNG","ON-SP-PHOTOGALLERY-BIGBANNER-FMNG","ON-SP-PHOTOGALLERY-GALLERYIN1-FMNG","ON-SP-PHOTOGALLERY-GALLERYIN2-FMNG","ON-SP-PHOTOGALLERY-GALLERYIN3-FMNG","ON-SP-PHOTOGALLERY-INFEED-3_1-FMNG","ON-SP-PHOTOGALLERY-INFEED-3_2-FMNG","ON-SP-PHOTOGALLERY-INFEED-5_1-FMNG","ON-SP-PHOTOGALLERY-INFEED-5_2-FMNG","ON-SP-PHOTOGALLERY-INFEED-5_3-FMNG","ON-SP-PHOTOGALLERY-INFEED-5_4-FMNG","ON-SP-PHOTOGALLERY-INFEED1-FMNG","ON-SP-PHOTOGALLERY-INTERSTITIAL-FMNG","ON-SP-PHOTOGALLERY-LARGEPHOTORECTANGLE-FMNG","ON-SP-PHOTOGALLERY-MULTIPLEX-FMNG","ON-SP-PHOTOGALLERY-OVERLAY-FMNG","ON-SP-PHOTOGALLERY-RECTANGLE1-FMNG","ON-SP-PHOTOGALLERY-RECTANGLE2-FMNG","ON-SP-PHOTOGALLERY-REWARDE-FMNG","ON-SP-PHOTOGALLERY-VIDEOAD-FMNG","ON-SP-PROF-BIGBANNER-FMNG","ON-SP-PROF-INTERSTITIAL-FMNG","ON-SP-PROF-OVERLAY-FMNG","ON-SP-PROF-RECTANGLE1-FMNG","ON-SP-PROF-RECTANGLE2-FMNG","ON-SP-PROF-VIDEOAD-FMNG","ON-SP-RANK-BIGBANNER-FMNG","ON-SP-RANK-OVERLAY-FMNG","ON-SP-RANK-RANKINGIN-FMNG","ON-SP-RANK-RECTANGLE1-FMNG","ON-SP-RANK-RECTANGLE2-FMNG","ON-SP-SPECIAL-BIGBANNER-FMNG","ON-SP-SPECIAL-INTERSTITIAL-FMNG","ON-SP-SPECIAL-MULTIPLEX-FMNG","ON-SP-SPECIAL-OVERLAY-FMNG","ON-SP-SPECIAL-RECTANGLE1-FMNG","ON-SP-SPECIAL-RECTANGLE2-FMNG","ON-SP-SPECIAL-RECTANGLESP1-FMNG","ON-SP-SPECIAL-RECTANGLESP2-FMNG","ON-SP-SPECIAL-RECTANGLESP3-FMNG","ON-SP-SPECIAL-RECTANGLESP4-FMNG","ON-SP-SPECIAL-RECTANGLESP5-FMNG","ON-SP-SPECIAL-RECTANGLESP6-FMNG","ON-SP-SPECIAL-VIDEOAD-FMNG","ON-SP-TEST-INTERSTITIAL-FMNG","ON-SP-TEST-REWARDE-FMNG","ON-SP-TEST-VIDEOAD-FMNG","ON-SP-TOP-BIGBANNER-FMNG","ON-SP-TOP-OVERLAY-FMNG","ON-SP-TOP-RECTANGLE1-FMNG","ON-SP-TOP-RECTANGLE2-FMNG","\/9116787,90608236\/1574273","ON-SP-TEST-BIGBANNER","ON-SP-TEST-INREADCONTENT","ON-SP-TEST-MULTIPLEX","ON-SP-TEST-OVERLAY","ON-SP-TEST-RECTANGLE1","ON-SP-TEST-RECTANGLE2","ON-SP-TEST-VIDEOAD","ON-PC-TEST-BIGBANNER","ON-PC-TEST-GATERIGHT","ON-PC-TEST-INREADCONTENT?","ON-PC-TEST-OVERLAY","ON-PC-TEST-RECTANGLE4","ON-PC-TEST-RECTANGLE5","ON-PC-TEST-RECTANGLE1","ON-PC-TEST-RECTANGLE2","ON-PC-TEST-RECTANGLE3","ON-PC-TICKET-BIGBANNER","ON-PC-NEWS-GATERIGHT","ON-PC-NEWS-GATELEFT","ON-PC-SPECIAL-GATELEFT","ON-PC-SPECIAL-GATERIGHT","ON-PC-TOP-GATELEFT","ON-PC-TOP-GATERIGHT","ON-PC-TEST-INREADCONTENT","ON-SP-CATEGORY-VIDEOAD","ON-SP-OTHER-VIDEOAD","ON-SP-NEWS-VIDEOAD","ON-SP-SPECIAL-VIDEOAD","ON-SP-PROF-VIDEOAD","ON-PC-NEWS-VIDEOAD","ON-PC-PROF-VIDEOAD","ON-PC-TOP-OVERLAY"],"Time_country":"NONE","Hour_country":"ALL"}]}; 

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
var size30011status=1;
var size30012status=1;
var size30013status=1;
var size30014status=1;
var size30015status=1;
var size30016status=1;
var size30017status=1;
var size30018status=1;
var size30019status=1;
var size30020status=1;
var size30021status=1;
var size30022status=1;
var size30023status=1;
var size30024status=1;




var size6001status=1;
var size6002status=1;
var size6003status=1;
var size6004status=1;
var size6005status=1;

var size1601status=1;
var size1602status=1;
var size1603status=1;
var size1604status=1;

var size1201status=1;
var size1202status=1;
var size1203status=1;
var size1204status=1;

var size7281status=1;
var size7282status=1;
var size7283status=1;
var size7284status=1;
var size7285status=1;


var size4681status=1;
var size4682status=1;
var size4683status=1;
var size4684status=1;
var size4685status=1;

var size9701status=1;
var size9702status=1;
var size9703status=1;
var size9704status=1;
var size9705status=1;


var size9702501status=1;
var size9702502status=1;
var size9702503status=1;
var size9702504status=1;
var size9702505status=1;


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


  

  
  


var label_adapter={"openx":["openx1"],"smartadserver":["smartadserver2","smartadserver1"],"onetag":["onetag1"],"richaudience":["richaudience3"],"smaato":["smaato1"],"project-limelight":["lime1"],"oftmedia":["oft1"],"improvedigital":["improve1"],"getapp":["getapp1"],"eplanning":["eplan1"],"criteointl":["criteointl1","cirteointl2"],"criteo":["criteo2","criteo1"],"abmanx":["abmanx1"],"33across":["33across1"]};
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


var PREBID_TIMEOUT_NEW =3000;
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


var rtbpbjs = rtbpbjs || {};
rtbpbjs.que = rtbpbjs.que || [];

var activeadunit =[
{
code: "andbeyond3202",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3202",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3203",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3203",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3204",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3204",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3205",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3205",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3206",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3206",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3207",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3207",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3208",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3208",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3209",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3209",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32010",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32010",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32011",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32011",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32012",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32012",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32013",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32013",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32014",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32014",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond32015",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond32015",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1001",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "MTUybWVkaWEuY29t"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1001",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1002",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1003",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1003",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1004",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1004",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1005",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1005",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1006",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1006",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1007",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1007",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1008",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1008",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1009",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1009",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond10010",
mediaTypes:{
banner:{
sizes: [[300,100],[300,50],[320,50]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 89417,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond10010",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589610",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "658377174"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "pG5ZqsDOqe",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419512
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond4681",
mediaTypes:{
banner:{
sizes: [[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87087,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond4681",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_468x60_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "howonwuNa1",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419513
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond4682",
mediaTypes:{
banner:{
sizes: [[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87087,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond4682",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_468x60_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "howonwuNa1",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419513
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond4683",
mediaTypes:{
banner:{
sizes: [[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87087,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond4683",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_468x60_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "howonwuNa1",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419513
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond4684",
mediaTypes:{
banner:{
sizes: [[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87087,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond4684",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_468x60_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "howonwuNa1",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419513
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond4685",
mediaTypes:{
banner:{
sizes: [[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87087,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond4685",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_468x60_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "howonwuNa1",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419513
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1601",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1601",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1602",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1602",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1603",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1603",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1604",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1604",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1605",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1605",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1606",
mediaTypes:{
banner:{
sizes: [[160,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85850,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1606",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "776593065"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_160x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "kKU7TyG9W5",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419509
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1201",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1201",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1202",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1202",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1203",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1203",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1204",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1204",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1205",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1205",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond1206",
mediaTypes:{
banner:{
sizes: [[120,600]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87089,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond1206",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589608",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "228651457"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_120x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "n4YTtA7oZn",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419510
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9701",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87086,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9701",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "946272231"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "q4sArovYQl",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419507
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87086,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "946272231"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "q4sArovYQl",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419507
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9703",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87086,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9703",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "946272231"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "q4sArovYQl",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419507
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9704",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87086,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9704",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "946272231"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "q4sArovYQl",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419507
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9705",
mediaTypes:{
banner:{
sizes: [[970,90],[728,90],[980,90],[640,100],[600,100],[468,60]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 87086,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9705",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "946272231"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "q4sArovYQl",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419507
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702501",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85849,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702501",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "186881114"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EHbl0DSH9k",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702502",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85849,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702502",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589600",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "186881114"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EHbl0DSH9k",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419506
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702503",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85849,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702503",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589600",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "186881114"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EHbl0DSH9k",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419506
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702504",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85849,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702504",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589600",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "186881114"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EHbl0DSH9k",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419506
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond9702505",
mediaTypes:{
banner:{
sizes: [[970,250]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85849,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond9702505",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589600",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "186881114"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_970x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EHbl0DSH9k",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419506
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7281",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7281",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7282",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7282",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7283",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7283",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7284",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7284",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7285",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7285",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7286",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7286",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7287",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7287",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7288",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7288",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond7289",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond7289",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72810",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72810",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72811",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72811",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72812",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72812",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72813",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72813",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72814",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72814",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72815",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72815",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72816",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72816",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72817",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72817",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72818",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72818",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72819",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72819",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72820",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72820",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72821",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72821",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72822",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72822",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72823",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72823",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72824",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72824",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond72825",
mediaTypes:{
banner:{
sizes: [[728,90]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85848,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond72825",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589598",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "766494650"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_728x90_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "bKBCM4tSoS",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419505
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6001",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6001",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6002",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6002",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6003",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6003",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6004",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6004",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6005",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6005",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6006",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6006",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6007",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6007",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6008",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6008",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond6009",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond6009",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond60010",
mediaTypes:{
banner:{
sizes: [[300,600],[300,250],[160,600],[120,600],[300,450]],
}
},
bids: [
{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
},{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85851,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond60010",
environment: "desktop",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589604",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "837607528"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x600_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "7E8dvCvSda",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419508
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3001",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3001",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "intercode",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3001",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448279
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3002",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3002",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448280
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3003",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3003",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448280
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3004",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "928173"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3004",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448280
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3005",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3005",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448280
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3006",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3006",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3699090",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 448280
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3007",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3007",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3008",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3008",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3009",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3009",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30010",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30010",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30011",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30011",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30012",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30012",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30013",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30013",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30014",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30014",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30015",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30015",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30016",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30016",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30017",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30017",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30018",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30018",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30019",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30019",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30020",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30020",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30021",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30021",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30022",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30022",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30023",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30023",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30024",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30024",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond30025",
mediaTypes:{
banner:{
sizes: [[300,250],[200,200],[250,250],[200,200]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85846,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond30025",
environment: "responsive",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567920",
zoneId: "3589596",
floor: "0.01"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "848394575"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_300x250_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "EyqhDaWoJE",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419504
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
},{
code: "andbeyond3201",
mediaTypes:{
banner:{
sizes: [[320,50],[300,50]],
}
},
bids: [
{
bidder: "smartadserver",
labelAny:["smartadserver1","smartadserver2"],
params: {
networkId:3555,
siteId: 680177,
pageId: 2027595,
formatId: 85847,
domain: "https://prg8.smartadserver.com",
bidfloor:  0.01
}
},{
bidder: "onetag",
labelAny:["onetag1","onetag14","onetag15"],
params: {
pubId: "7181130204ef46c"
}
},{
bidder: "abmoftmedia",
labelAny:["abmoftmedia13"],
params: {
placementId: "34236271"
}
},{
bidder: "adabm",
params: {
aid: "910041"
}
},{
bidder: "openx",
labelAny:["openx1"],
params: {
unit: "561350897",
delDomain: "rtbdemand-d.openx.net",
customFloor: 0.01
}
},{
bidder: "adagio",
params: {
organizationId: "1056",
site: "oricon-co-jp",
placement: "atf",
adUnitElementId: "andbeyond3201",
environment: "mobile",
useAdUnitCodeAsPlacement:true,
useAdUnitCodeAsAdUnitElementId:true
}
},{
bidder: "adliveplus",
params: {
placementId: "2618058081",
loader: new Promise((r,e)=>{if(window.lucead_loaded){r();return};window.lucead_loaded=!0;const s=document.createElement('script'); s.src='https://s.lucead.com/prebid/1444684727.js';s.onload=()=>r(window.lucead_prebid);s.onerror=e;document.head.appendChild(s)}),
region: "ap"
}
},{
bidder: "luponmedia",
params: {
siteId: 15816,
keyId: "uid_oriconcojp_adb"
}
},{
bidder: "rubicon",
params: {
accountId: "17054",
siteId: "567922",
zoneId: "3589612",
floor: "0.01",
position: "atf"
}
},{
bidder: "medianet",
params: {
cid: "8CUO7Q43N",
crid: "656665226"
}
},{
bidder: "pubmatic",
params: {
publisherId: "156181",
adSlot: "Oricon.co.jp_320x50_HB_9760155",
kadfloor: "0.01"
}
},{
bidder: "richaudience",
labelAny:["richaudience3"],
params: {
pid: "5k79rMcgLz",
supplyType: "site"
}
},{
bidder: "grid",
params: {
uid: 419511
}
},{
bidder: "abmamx",
params: {
tagId: "YW5kYmV5b25kbWVkaWEtcm9uLmNvbQ"
}
}
],ortb2Imp: { ext: { ae: 1 }, },
}
];

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

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour1=d1.getHours();
                     current_hour1=calcTime('Bombay', '+5.5');

                    }

                    if(current_hour1==0)
                      current_hour1=24;

                   if(current_hour1==1)
                      current_hour1=25;

                   if(current_hour1==2)
                      current_hour1=26;

                   // if(current_hour1==3)
                   //    current_hour1=27;

                   // if(current_hour1==4)
                   //    current_hour1=28;

                   // if(current_hour1==5)
                   //    current_hour1=29;


              
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

                    // d2="new Date().toLocaleString('en-US', { timeZone: '"+timezone+"' })";
                    // d3=eval(d2);

                    // d1=new Date(d3);
                    // current_hour=d1.getHours();
                    current_hour=calcTime('Bombay', '+5.5');

                    }


                        if(current_hour==0)
                      current_hour=24;

                   if(current_hour==1)
                      current_hour=25;

                   if(current_hour==2)
                      current_hour=26;

                   // if(current_hour==3)
                   //    current_hour=27;

                   // if(current_hour==4)
                   //    current_hour=28;

                   // if(current_hour==5)
                   //    current_hour=29;


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
                '//rtbpass-us.andbeyond.media/prebid-custom.js';
       var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();
rtbpbjs.que.push(function() {
     
rtbpbjs.addAdUnits(activeadunit);
  
});


setTimeout(function(){
  var gads = document.createElement('script');
      gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//ads.aralego.com/cookiesync';
var node = document.getElementsByTagName('script')[0];
},10000);
rtbpbjs.que.push(function () {
rtbpbjs.setConfig({ enableTIDs: true });
rtbpbjs.setConfig({ aliasSyncEnabled: true });
rtbpbjs.setConfig({ bidderSequence: "fixed" }) ; 
rtbpbjs.setConfig({
        cache: {
            url: "https://prebid.adnxs.com/pbc/v1/cache",
            ignoreBidderCacheKey:true
        }
    });
rtbpbjs.setBidderConfig({"bidders":["equativ","betweenabm","sharethrough","beyondmedia","smartyads","smartyvideo","adpone","adlivevideo","abmxandr","adabm","rtbhouse","teads","teadarticle","onetag","medianet","smaato","rtbhouse","improvedigital","rtbhouse","rtbdemandadk","adagio","colombia","improvedigital","criteointl","audiencenetwork","sovrn","smartadserver","criteo","pubmatic","rubicon","sovrn","abmapp","medianet"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"andbeyond.media","sid":"141084","hp":1}]}}}});
rtbpbjs.setBidderConfig({"bidders":["magnitertb","rubiconrtb","between","tripleartside","triplesectop","triplesecside","openxoutstream","project-limelight","adtellvideo","project-lime-video","spotx","freewheel-ssp","amx","eplanning","smilewanted","adtelligent","adagiortb","districtmDMX","brapp","adkernelAdn","tripleart","openx","gumgum","ix","ixrtb","andbeyond","adkernel","oftmedia","getapp","33across","triplelift","appnexus"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"rtbdemand.com","sid":"141149","hp":1}]}}}});
rtbpbjs.setBidderConfig({"bidders":["Abmanx","bcmopenx","bcmsharethrough"],"config":{"schain":{"validation":"relaxed","config":{"ver":"1.0","complete":1,"nodes":null}}}});

});


rtbpbjs.que.push(function () {
rtbpbjs.aliasBidder("appnexus", "projectagora", {gvlid: 1032});
rtbpbjs.bidderSettings["projectagora"] = {
 bidCpmAdjustment: function(bidCpm) {
 return bidCpm * 0.75;}
}
    });
rtbpbjs.que.push(function () {
rtbpbjs.setBidderConfig({
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
"sid": "141084",
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
rtbpbjs.setBidderConfig({
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
rtbpbjs.que.push(function () {
rtbpbjs.setConfig({
 useBidCache: true,
 bidCacheFilterFunction: bid => bid.mediaType !== 'video'
});
});
rtbpbjs.que.push(function() {
  rtbpbjs.setConfig({
    paapi: {
      enabled: true,
      gpt: {
          autoconfig: false
        },
      defaultForSlots: 1,
      bidders: [],
}
 });
});
 rtbpbjs.que.push(function() {
rtbpbjs.setConfig({
userSync: {
        aliasSyncEnabled: false,
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
 rtbpbjs.que.push(function() {
rtbpbjs.setConfig({
userSync: {
        aliasSyncEnabled: false,
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
name: "rtbpbjs-unifiedid",
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
rtbpbjs.que.push(function () {

});
rtbpbjs.que.push(function () {
rtbpbjs.aliasBidder("appnexus", "projectagora");
rtbpbjs.aliasBidder("project-lime-video", "project-limelight");
rtbpbjs.aliasBidder("appnexus", "abmxandr");
rtbpbjs.aliasBidder("appnexus", "rtbxandr");
rtbpbjs.aliasBidder("smartyads", "smartyvideo");
rtbpbjs.aliasBidder("adtelligent", "adabm");
rtbpbjs.aliasBidder("appnexus", "districtm");
rtbpbjs.aliasBidder("appnexus", "abmapp");
rtbpbjs.aliasBidder("appnexus", "Abmanx");
rtbpbjs.aliasBidder("appnexus", "getapp");
rtbpbjs.aliasBidder("appnexus", "bcmapp");
rtbpbjs.aliasBidder("appnexus", "brapp");
rtbpbjs.aliasBidder("criteo","criteointl");  
rtbpbjs.aliasBidder("criteo","criteoint");  
rtbpbjs.aliasBidder("triplelift","tripleartside");  
rtbpbjs.aliasBidder("triplelift","triplesectop");  
rtbpbjs.aliasBidder("triplelift","triplesecside");  
rtbpbjs.aliasBidder("triplelift","tripleliftart");  
rtbpbjs.aliasBidder("rubicon","rubiconrtb");  
rtbpbjs.aliasBidder("smilewanted","smilewantedabm");  
rtbpbjs.aliasBidder("projectagora","projectagorart");  
rtbpbjs.aliasBidder("adkernel","rtbdemandadk"); 
rtbpbjs.aliasBidder("teads","teadarticle"); 
rtbpbjs.aliasBidder("adagio", "adagiortb");
rtbpbjs.aliasBidder("adtelligent", "adtellvideo");
rtbpbjs.aliasBidder("adlivetech", "adlivevideo");
rtbpbjs.aliasBidder("project-limelight", "project-lime-video");
rtbpbjs.aliasBidder("smilewanted", "smilevideo");
rtbpbjs.aliasBidder("appnexus", "abmoftmedia");
rtbpbjs.aliasBidder("appnexus", "oftmedia");
rtbpbjs.aliasBidder("amx", "abmamx");
rtbpbjs.aliasBidder("between", "betweenabm");
rtbpbjs.aliasBidder("openx", "bcmopenx");
rtbpbjs.aliasBidder("minutemedia", "bcmmedia");
rtbpbjs.aliasBidder("sharethrough", "bcmsharethrough");
rtbpbjs.bidderSettings =
{
openx: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
adagio: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
adliveplus: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
luponmedia: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
rubicon: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.6;}},
medianet: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
smartadserver: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
pubmatic: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
smilewanted: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
onetag: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.85;}},
richaudience: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.8;}},
grid: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.9;}},
abmoftmedia: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.7;}},
projectagora: {bidCpmAdjustment: function(bidCpm, bid) {return bidCpm * 0.75;}},
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
urls=["a-cashing.com","adcpa.site","ambiance.alianasterasere.site","anpankozou.com","arroket.com","atoatooffline.com","avesslationaly.com","b-h.jp","b.mainichi-yudetamahada.work","baitlounge.co.uk","beauty-smilegirl.com","berrykozou.com","bigstore-jp.com","boardgamebuff.com","campaign-web.jp\/cashing","capaceptans.com","cashing-support.net","cleverdaypuzzles.com","cracetcham.com","dailybee.com","dessert.alianasterasere.site","didizan.com","dokidokimanga.jp","download.inboxace.com\/index.jhtml","dragontriplet.site","eipertor.com","emenderty.com","exitems-fb-second.com","faminoces.com","faxterilios.com","femininplurielles.ch","ffhc-ca-jp.fujifilm.com","finedining.alianasterasere.site","firvfirv.com","footcare.tv-news.tokyo","freeeedom.net","gannmo.tokyo","ihowton.com","ja49o2rkdyb80y.azureedge.net","jp.vipbigmall-us.com","jpvip-buy.com","jpvip-sale.com","kakaku.com","kawaii-komachi.net","keieikagakupub.com","kirakiraeye.info","kmoolu.com","kueez.com","lacicificane.com","liooyale.com","lockiser.com","lp.adclr.jp","manezo.com","marcelolino.com.br","menu.alianasterasere.site","mimiyoriya.com","momoniku.click","monimonichicken.com","music-book.jp","music.dmkt-sp.jp","music.dwango.jp","naritrannument.com","natalie.mu","naturalcafe.tokyo","nikonikomanga.jp","niwenglaj.site","nosh.jp","olive-z.site","oteirenavi.com","papy.co.jp","paw.tokyo","pc.dwango.jp","pluminclastot.com","puzzlevaults.com","ramaiimma.com","recochoku.jp","rekmensa.com","reubbilityx.com","revanizes.com","roairoee.com","sb-bbluv-myself.service-info.jp","sb-ttime.myown-page.com","sb-white-kirei.discover-news.tokyo","sb.secret-lemon.com","shinewater.jp","sinndoujyutu.tokyo","sitiallured.com","somall-jp.com","sortsofrolex.com","sosaito.com","sp.handycomic.jp","spotifypremium.jp","stonoudiveg.com","takehirotomiyasu.click","ti.purin-beauty.xyz","ti.spicy-fire.xyz","ti.yasasii-beauty.xyz","top.bonobojapan.jp","topmanga.jp","trateser.com","trogeepsi.com","viphtshop-jp.com","viplinemall-jp.com","waquwaqu.jp","waterstand.jp","weepeggler.com","whiteninglabo.xyz","alice-project.biz","bang.co.jp","billboard-japan.com","cardloan-soudan.net","cardloan-times.com","cashing-field.com","directsales.jp","discas.net","eloan.co.jp","flexnet.co.jp","hokende.com","netoff.co.jp\/index.jsp","prideandhistory.jp","prrr.jp\/shop\/html","tailorsan.it","winzipsystemtools.com","xn--u9jj6mma4dzcyg1obbb6302kt3ybp8q4p7h.jp","yeagleh.com ","instantcasino.com","instantcasino","casino","sin3-ib.adnxs.com","bitcasino.io","bitcasino","pudqypenguin.com","pudqypenguin"];
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
urls=["a-cashing.com","adcpa.site","ambiance.alianasterasere.site","anpankozou.com","arroket.com","atoatooffline.com","avesslationaly.com","b-h.jp","b.mainichi-yudetamahada.work","baitlounge.co.uk","beauty-smilegirl.com","berrykozou.com","bigstore-jp.com","boardgamebuff.com","campaign-web.jp\/cashing","capaceptans.com","cashing-support.net","cleverdaypuzzles.com","cracetcham.com","dailybee.com","dessert.alianasterasere.site","didizan.com","dokidokimanga.jp","download.inboxace.com\/index.jhtml","dragontriplet.site","eipertor.com","emenderty.com","exitems-fb-second.com","faminoces.com","faxterilios.com","femininplurielles.ch","ffhc-ca-jp.fujifilm.com","finedining.alianasterasere.site","firvfirv.com","footcare.tv-news.tokyo","freeeedom.net","gannmo.tokyo","ihowton.com","ja49o2rkdyb80y.azureedge.net","jp.vipbigmall-us.com","jpvip-buy.com","jpvip-sale.com","kakaku.com","kawaii-komachi.net","keieikagakupub.com","kirakiraeye.info","kmoolu.com","kueez.com","lacicificane.com","liooyale.com","lockiser.com","lp.adclr.jp","manezo.com","marcelolino.com.br","menu.alianasterasere.site","mimiyoriya.com","momoniku.click","monimonichicken.com","music-book.jp","music.dmkt-sp.jp","music.dwango.jp","naritrannument.com","natalie.mu","naturalcafe.tokyo","nikonikomanga.jp","niwenglaj.site","nosh.jp","olive-z.site","oteirenavi.com","papy.co.jp","paw.tokyo","pc.dwango.jp","pluminclastot.com","puzzlevaults.com","ramaiimma.com","recochoku.jp","rekmensa.com","reubbilityx.com","revanizes.com","roairoee.com","sb-bbluv-myself.service-info.jp","sb-ttime.myown-page.com","sb-white-kirei.discover-news.tokyo","sb.secret-lemon.com","shinewater.jp","sinndoujyutu.tokyo","sitiallured.com","somall-jp.com","sortsofrolex.com","sosaito.com","sp.handycomic.jp","spotifypremium.jp","stonoudiveg.com","takehirotomiyasu.click","ti.purin-beauty.xyz","ti.spicy-fire.xyz","ti.yasasii-beauty.xyz","top.bonobojapan.jp","topmanga.jp","trateser.com","trogeepsi.com","viphtshop-jp.com","viplinemall-jp.com","waquwaqu.jp","waterstand.jp","weepeggler.com","whiteninglabo.xyz","alice-project.biz","bang.co.jp","billboard-japan.com","cardloan-soudan.net","cardloan-times.com","cashing-field.com","directsales.jp","discas.net","eloan.co.jp","flexnet.co.jp","hokende.com","netoff.co.jp\/index.jsp","prideandhistory.jp","prrr.jp\/shop\/html","tailorsan.it","winzipsystemtools.com","xn--u9jj6mma4dzcyg1obbb6302kt3ybp8q4p7h.jp","yeagleh.com ","instantcasino.com","instantcasino","casino","sin3-ib.adnxs.com","bitcasino.io","bitcasino","pudqypenguin.com","pudqypenguin"];
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
rtbpbjs.que.push(function () {
rtbpbjs.addAdUnits(adUnitsfirst);
if(context1=="instream" || context1=="outstream")
{
adUnits1=adUnitsvideo;
rtbpbjs.addAdUnits(adUnitsvideo);
}
});
}


googletag.cmd.push(function() {
googletag.pubads().addEventListener('slotVisibilityChanged', function(event) {
try{
slot=event.slot;
var andbeyondnewarray={};
  andbeyondnewarray['unfilledadunitkey']=0;
   andbeyondnewarray['hijackadunitkey']=0;
   andbeyondnewarray['view']=0;
if(event.inViewPercentage>=40 && event.inViewPercentage<=50)
andbeyondnewarray['view']=40;
if(event.inViewPercentage>=50 && event.inViewPercentage<=60)
andbeyondnewarray['view']=50;
if(event.inViewPercentage>=60 && event.inViewPercentage<=70)
andbeyondnewarray['view']=60;
if(event.inViewPercentage>=70 && event.inViewPercentage<=80)
andbeyondnewarray['view']=70;
if(event.inViewPercentage>=80 && event.inViewPercentage<=90)
andbeyondnewarray['view']=80;
if(event.inViewPercentage>=90 && event.inViewPercentage<=90)
andbeyondnewarray['view']=90;
if(event.inViewPercentage>=100)
andbeyondnewarray['view']=100;
slotid=slot.getSlotElementId();
slotid1=slotid;
if( event.inViewPercentage>50 &&  slotid &&  slotid.indexOf('cubextra') < 0 &&  slotid.indexOf('intercode') < 0)
{
existingDiv=document.getElementById(slotid);
slotid=slotid.replaceAll('\/', '');
 slotid=slotid.replaceAll('\_', '');
slotid=slotid.replaceAll('\-', '');
slotid=slotid.replaceAll('\.', '');
slotid=slotid.replaceAll('\(', '');
slotid=slotid.replaceAll('\)', '');
slotid=slotid.replaceAll('\,', '');
slotid=slotid.replaceAll('\=', '');
slotid=slotid.replaceAll('\~', '');
try{
time_refreshunit=eval("time_refreshunit"+slotid);
nextactive=eval("active" + slotid);
nextpassive=eval("passive" + slotid);
nextnumber=eval("nextnumber"+slotid);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;


}
eval("passive" + slotid + " = nextpassive");
eval("active" + slotid + " = nextactive");
eval("time_refreshunit" + slotid + " = time_refreshunit");
eval("nextnumber" + slotid + " = nextnumber");

diffnew=timer_refresh-time_refreshunit;
widthheightabm=firstlookadunitsize(slotid1,0);
widthr=widthheightabm[0];
heightr=widthheightabm[1];
flagin=widthheightabm[2];
if(existingDiv && existingDiv.innerHTML)
temp=existingDiv.innerHTML+slotid;
else
temp='';
temp_caps=temp.toUpperCase();
flag2in=1;
if(slotid1.indexOf('andbeyond')<0){
flag2in=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
hiti = findInFramesRecnew(existingDiv, 0);
if(hiti==1)flag2in=0;
}
if(flag2in==1 && flagin==1 && diffnew>=25)
{
if(slotid1.indexOf('andbeyond')>=0)
 test='<scr' + 'ipt> google' + 'tag.cmd.' + 'push(func' + 'tion() {google' + 'tag.displ' + 'ay(\'' + slotid1 + '\'); });</scr' + 'ipt>';
else
 test='<div class="andbeyond_adunit slotrefresh" style="height:'+heightr+'px; width:'+widthr+'px;overflow:hidden;margin:0 auto;"><div id="' + slotid1 + '"><scr' + 'ipt>google' + 'tag.cmd.' + 'push(func' + 'tion() {google' + 'tag.displ' + 'ay(\'' + slotid1 + '\'); });</scr' + 'ipt></div></div>';
if(slotid1.indexOf('andbeyond')>=0)
typein=1;
else
typein=0;
refreshBid2(slotid1,existingDiv,typein,test,1,widthr,heightr,0,0,3,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray);
}


}
}catch(e){console.log(e.stack);}
});
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
slot=event.slot;
 var responseInfo = slot.getResponseInformation();
if(responseInfo && responseInfo.campaignId && event.slot.getSlotElementId() &&  (event.slot.getSlotElementId().indexOf('andbeyond')>=0 ||  event.slot.getSlotElementId().indexOf('cubextra') >= 0))
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
if(randNumber==1 && (event.campaignId=='2718082302' || event.campaignId=='3544557777' || event.campaignId=='2906230027') &&  event.slot.getSlotElementId() && (event.slot.getSlotElementId().indexOf('andbeyond')>=0 || event.slot.getSlotElementId().indexOf('cubextra') >= 0))
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
rtbpbjs.renderAd(newFrame.contentWindow.document,adid);
adid1=adid.toString();
if(responsec[widthr][heightr][0]['priority']>0)
{
flag_slot=1;
var url='https://prebid.andbeyond.media/impben1.php?cid=extra&aff=9760155&publisher_id='+responsec[widthr][heightr][0]['bidder']+'&price='+responsec[widthr][heightr][0]['cpm']+'&type=refresh&priority='+responsec[widthr][heightr][0]['priority']+'&ttl='+responsec[widthr][heightr][0]['ttl'];
pixel = document.createElement("img");
pixel.src = url;
pixel.style.display = "none";
}
changePriority(responsec[widthr][heightr],adid1);}
}
}
 if (home_country && country_rtb1 && country_rtb1!='JP' && widthr==300 && heightr==250 && document.getElementsByClassName('cubertb').length <= 1 )
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
if (animation==1 && randNumbercube==1 && event.slot.getSlotElementId().indexOf('intercode')<0 &&  event.slot.getSlotElementId().indexOf('cubextra') < 0 && isVisible(existingDiv) && (googlevalue==1 || (googlevalue==0 && slotadid!=null)))
 anilogic(slotid, widthr, heightr, slotadid, usesame, maxvariation,sidesanim,googlevalue);
} 
}); 
}); 


var globalinterval3=setInterval(function(){

  if(newunitcallback==1){
    clearInterval(globalinterval3);
   
    if(country_rtb1!=undefined && country_rtb1==home_country){
 var randomval1=Math.floor(Math.random() * 100) + 1;
if(randomval1<=100){
}
}
if(country_rtb1!=undefined && country_rtb1==home_country){
 var randomval1=Math.floor(Math.random() * 100) + 1;
if(randomval1<=100){
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
                                           key: "7b690522-60ba-412b-bd03-51fb5e53626b"
                             };
       (function () {
        var gads = document.createElement("script");
       gads.type = "text/javascript";
gads.async = true;
var useSSL = "https:" == document.location.protocol;
        gads.src = (useSSL ? "https:" : "http:") +
                "//rumcdn.geoedge.be/7b690522-60ba-412b-bd03-51fb5e53626b/grumi-ip.js";
       var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(gads, node);
    })();
 }
}
randnum = Math.floor(Math.random() * 5) + 1;
rtbpbjs.que.push(function () {
flag_active=0;
visible=0;
special_var=null;
labelnew=bidder_restrict(flag_active,visible,country_rtb1,special_var);
rtbpbjs.setConfig({
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
 rtbpbjs.que.push(function() {
rtbpbjs.setConfig({consentManagement});
});
}

});
 rtbpbjs.que.push(function() {
});

  }
},100);

function refreshBid1rtb(id,width5,height5) {
 googletag.cmd.push(function() {
try
{
  var labelnew=Array();
  var specialvar="";

  flag_active=1;
  visible=1;
  if(country_rtb1==undefined)
  country_rtb1='IN';

  if(richaudiencetest==1){
    var specialvar="richaudience3";
    }

    if(luponmediatest==1){
      var specialvar="luponmedia3";
      }
  
 labelnew=bidder_restrict(flag_active,visible,country_rtb1,specialvar);
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

 rtbpbjs.que.push(function() {
      rtbpbjs.requestBids({
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
                width=width5;
                height=height5;
             
                id1=eval(id);
             rtbpbjs.setTargetingForGPTAsync([id]);

             context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
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
            
            // if((googletag.pubads().getTargeting("adl_ivt").length>0 || googletag.pubads().getTargeting("adl_ip").length>0 || googletag.pubads().getTargeting("adl_freqcap").length>0 || googletag.pubads().getTargeting("adl_ua_spider").length>0 || googletag.pubads().getTargeting("adl_ua_old").length>0 || googletag.pubads().getTargeting("adl_ua_invalid").length>0))
            //  {
            //    // adloox_fraud=1;
            //   return; 
            //  }
            
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
            
            // console.log("INSIDE"+id);
            
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


function encodenativeurl(string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}
var onscreenandbeyond=1;
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
      onscreenandbeyond=0;
  } else {
     onscreenandbeyond=1;
  }
});

function refreshBid2(id,this1,type,test,factor,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray) {
 googletag.cmd.push(function() {
try{

adunit3=id;
adunit5=id;
adunit6=id;
var lineitemblocking=1;
if(adunit3!=undefined){
adunit3=adunit3.replaceAll('\/', '');
adunit3=adunit3.replaceAll('\_', '');
adunit3=adunit3.replaceAll('\-', '');
adunit3=adunit3.replaceAll('\.', '');
}
  adunit2=id;
  if(adunit2!=undefined){
try
{
adunit2=eval("adunit2" + id);

}
catch(e)
{

var ele='#'+id+' iframe';
try
{

  if(document.querySelectorAll(ele).length>0)
  {
  var aaaa=document.querySelector(ele);
  iframe1=1;
  iframeid=aaaa.getAttribute("id");
adunit2=iframeid;

}

}
catch(e)
{

}
}

if(adunit2!=null && adunit2!=undefined){
adunit2=adunit2.replaceAll('google_ads_iframe_', '');
adunit2=adunit2.replaceAll('_0', '');
pos=adunit2.lastIndexOf("/");

if(pos>0)
adunit2 = adunit2.substring(pos+1);

len=adunit2.length;

pos123=adunit2.substring(len-2,len-1);

if(pos123=='_')
{
adunit2=adunit2.substring(0,len-2);
}

adunit2 = adunit2.substring(0,40);
}
  }

lineitemblock=document.getElementById(adunit5).getAttribute("id");

if(lineitemidcode[lineitemblock]!=undefined)
  {
  linetemp=lineitemidcode[lineitemblock];
  abplineitem=linetemp['abpcampaignId'];
  for (var ii = 0; ii < lineitemidtest.length; ii++) {
  if(lineitemidtest[ii]==abplineitem && lineitemblocking==1){
    lineitemblocking=0;
    
  }
  }
  }


  var airfinderlineitem=["6949618447","6946894686"];
var airfindenable=1;
    if(lineitemidcode[lineitemblock]!=undefined)
    {
    linetemp=lineitemidcode[lineitemblock];
    abplineitem=linetemp['abplineItemId'];
    for (var mm = 0; mm < lineitemidtest.length; mm++) {
    if(airfinderlineitem[mm]==abplineitem && airfindenable==1){
      airfindenable=0;
      
    }
    }
    }

andblocktests=0;

if(lineitemblocking==0)
{

if(adunit3.indexOf('andbeyond')<0)
{
  try
     {
    andblocktests=eval('dividandblocktests'+adunit3);
     }
catch(e2)
{
eval("dividandblocktests" + adunit3 + " = 1");
andblocktests=1;
if((/full/).test(andbeyondurl)){
  loadblockaff(adunitnamecheck(vs2),"9076735_block");
  }else{
    loadblockaff(adunitnamecheck(vs2),"9760155_block");
  }
}
}
}

var html=this1.outerHTML;
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


var tempnewmain=unfilladunitdata[adunit5];
if(tempnewmain!=undefined && tempnewmain!=null){
var unfillednew=tempnewmain['unfill'];
if(unfillednew==true){
flag=1;
flag2=1;
}
}



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


try
{
if(id.indexOf('andbeyond')>=0)
{
vs2new=id.replace('andbeyond','andplayer');

if(document.getElementById(vs2new) && document.getElementById(vs2new).style.width!='1px')
flag=0;
}
}
catch(e)
{

}





if((adunit3.indexOf('andbeyond')>=0 || html.indexOf('rtbdemiframe')>0) && flag==1 && flag2==1 && count<=1000)
  {
    if(id=="andbeyond1005" || id=="andbeyond3205" || id=="andbeyond9705" || id=="andbeyond7285"){
    
      if(slot_vis[adunit3]>=45)
        {
        flag2=1;
        
        }
        else
        {
        flag2=2;
        
        }
        }else if((id=="andbeyond3001" || id=="andbeyond3002" || id=="andbeyond3005" || id=="andbeyond3006" || id=="andbeyond3009") && airfindenable==0){
         // console.log("slot_vis"+slot_vis[adunit3]);
        if(slot_vis[adunit3]>=5)
        {
        flag2=1;
        
        }
        else
        {
        flag2=2;
        
        }

        }else{
  
          if(slot_vis[adunit3]>=min_view_andbeyond)
            {
            flag2=1;
            
            }
            else
            {
            flag2=2;
            
            }
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

if(adunit3.indexOf('andbeyond')<0 && flag==1 && flag2==1 && count<=1000)
  {
    // if(html.indexOf("ON-SP-News-Overlay")>0 || html.indexOf("ON-SP-Rank-Overlay")>0 || html.indexOf("ON-SP-Top-Overlay")>0 || html.indexOf("ON-SP-Category-Overlay")>0 || html.indexOf("ON-SP-Other-Overlay")>0 || html.indexOf("ON-SP-Prof-Overlay")>0 || html.indexOf("ON-SP-Special-Overlay")>0 || html.indexOf("ON-SP-Special-Anime_Game-Overlay")>0 || html.indexOf("ON-SP-News-Anime_Game-Overlay")>0 || html.indexOf("ON-SP-PhotoGallery-Overlay")>0 || html.indexOf("ON-SP-Bodymake-Overlay")>0){
      if(html.indexOf("overlay")>0 || adunit6.indexOf("im-")>=0 || html.indexOf("Overlay")>0){

    if(slot_vis[adunit3]>=45)
    {
    flag2=1;
    
    }
    else
    {
    flag2=2;
    
    }
      }else{
  if(slot_vis[adunit3]>=min_view)
  {
  flag2=1;
  
  }
  else
  {
  flag2=2;
  }
  }
  }

flag4=0;

if(flag_active==-1 || flag_active==-2){
  flag2=1;
  flag=1;
  residual=0;
}else{
  residual=residual2;
}



if(id.indexOf("gpt_")>=0 || html.indexOf("gpt_")>=0){
  flag2=0;
}

if(onscreenandbeyond==0){
  flag2=0;
}

if(getQueryString_val('abmunfilltest')==1){

}else{
if(html.indexOf('<iframe')<0){
flag=0;
flag2=0;
}
}

if((count<=1000 && flag==1 && lineitemblocking==1 && residual==1) && ((adloox_fraud==1) || (eval(conditionblock)) || (andbeyondadult==1)))
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
  
  if(diffnew<20)
  {
  flag4=0;
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

var specialvar="";
var labelnew=Array();

if(richaudiencetest==1){
  var specialvar="richaudience3";
  }

  if(luponmediatest==1){
    var specialvar="luponmedia3";
    }

labelnew=bidder_restrict(flag_active,visible,country_rtb1,specialvar);

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

 rtbpbjs.que.push(function(){
  rtbpbjs.requestBids({
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

var params = rtbpbjs.getAdserverTargetingForAdUnitCode(id);
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
this1.innerHTML = "";
this1.appendChild(newDiv);
if((/full/).test(andbeyondurl)){
  aff=9076735;
    }else{
      aff="9760155";
    }
var url='https://prebid.andbeyond.media/impben1.php?aff='+aff+'&publisher_id='+params['hb_bidder']+'&price='+params['hb_pb']+'&type=refresh';
var pixel='<img src="'+url+'" style="display:none"></img>';
this1.insertAdjacentHTML("beforeend", pixel);
rtbpbjs.renderAd(newFrame.contentWindow.document, params['hb_adid']);

}


}
});

});
}
}else{

if(type==0)
{
if(count<=1000 && flag==1 && flag2==1 && lineitemblocking==1)
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


var condition_flag=0;
  
  if((html.indexOf("overlay")>0) || adunit6.indexOf("im-")>=0 || html.indexOf("Overlay")>0 || adunit6.indexOf("overlay")>=0){

  var windowwidth1 = window.innerWidth;

 if(windowwidth1<=767){

 if((width==300 && height==100) || (width==320 && height==100)){
  condition_flag=1;
 id="andbeyond1005";
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="andbeyond1005"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'andbeyond1005\'); });</scr' + 'ipt></div></div>';
}else{
  condition_flag=1;
  id="andbeyond3205";
  test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="andbeyond3205"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'andbeyond3205\'); });</scr' + 'ipt></div></div>';
}
}
if(windowwidth1>=768){

  if((width==970 && height==90)){
    condition_flag=1;
   id="andbeyond9705";
   test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="andbeyond9705"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'andbeyond9705\'); });</scr' + 'ipt></div></div>';
  }else{
    condition_flag=1;
    id="andbeyond7285";
    test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="andbeyond7285"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'andbeyond7285\'); });</scr' + 'ipt></div></div>';
  }

}


type=0;
}

if(count<=1000 && flag==1 && flag2==1 && lineitemblocking==1)
{
slot_vis[adunit3]=0;
 time_refreshunit=timer_refresh;
nextnumber++;


eval("active" + adunit3  + " = nextactive");
eval("passive" + adunit3  + " = nextpassive");
eval("time_refreshunit" + adunit3  + " = time_refreshunit");
eval("nextnumber" + adunit3 + " = nextnumber");


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

var namemc_back=namemc;
if(condition_flag==1){
  status_bad=1;
  }
  
if(status_bad==1)
{
googletag.cmd.push(function () {

  if((/full/).test(andbeyondurl)){
      aff=9076735;
        }else{
          aff="9760155";
        }

len=id.length;
if(len==14){
pos1=id.substr(len-2);
}
else{
  pos1=id.substr(len-1);
}

text=null;


if(id.indexOf('100')>0)
  {
  width1=300;
  height1=100;
  width2=100;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300, 100]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  
  if(id.indexOf('300')>0)
  {
  width1=300;
  height1=250;
  width2=width1;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300, 250],[250, 250],[200, 200]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  
  if(id.indexOf('336')>0)
  {
  width1=336;
  height1=280;
  width2=width1;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[336,280],[300, 250]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  if(id.indexOf('600')>0)
  {
  width1=300;
  height1=600;
  width2=600;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[300,600]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  if(id.indexOf('468')>0)
  {
  width1=468;
  height1=60;
  width2=468;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[468,60]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  if(id.indexOf('728')>0)
  {
  width1=728;
  height1=90;
  width2=728;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[728, 90]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  
  if(id.indexOf('970') >0)
  {
  width1=970;
  height1=90;
  width2=970;
  
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[970, 90],[728,90]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  if(id.indexOf('640')>0)
  {
  width1=640;
  height1=480;
  width2=640;
  
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[640,480]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  
  if(id.indexOf('970')>0 && id.indexOf('250')>0)
  {
  width1=970;
  height1=250;
  width2=970250;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", [[970,250]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  if(id.indexOf('970')>0 && id.indexOf('200')>0)
  {
  width1=970;
  height1=200;
  width2=970200;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[970,200]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  
  if(id.indexOf('160')>0)
  {
  width1=160;
  height1=600;
  width2=160;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[160, 600],[120, 600]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  if(id.indexOf('120')>0)
  {
  width1=120;
  height1=600;
  width2=120;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[120, 600]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  if(id.indexOf('320')>0 && id.indexOf('100')<0)
  {
  width1=320;
  height1=50;
  width2=width1;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[320, 50]], "'+id+'").addService(googletag.pubads())';
  var positiondiv=aff+'-'+width1+'-'+height1+'-'+pos1;
  }
  if(id.indexOf('320')>0 && id.indexOf('100')>0)
  {
  width1=320;
  height1=100;
  width2=320100;
  text='googletag.defineSlot("/'+namemc_back+',90608236/'+aff+'-'+width1+'-'+height1+'-'+pos1+'", ["fluid",[320, 100]], "'+id+'").addService(googletag.pubads())';
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

var googleadsnewID=this1.getAttribute("id");
  if(type==0){
     
     if(adunit5.indexOf("andbeyond")>=0){
      this1.innerHTML="";
     }else{
    if(googleadsnewID.indexOf("google_ads")>=0 || googleadsnewID.indexOf("gnpbad_")>=0 || googleadsnewID.indexOf("im-")>=0){
      this1.parentNode.style.removeProperty('display');
      // this1.innerHTML="";
    }else{
      this1.style.removeProperty('display');
       this1.innerHTML="";
    }
  }
   }
   
   if(html.indexOf('rtbdemiframe')>0){
   this1.innerHTML="";
   }
   
   if((type==0 || newidflag==1) && html.indexOf('rtbdemiframe')<0){
    if(adunit5.indexOf("andbeyond")>=0){
      this1.innerHTML=test;
     }else{
    if(googleadsnewID.indexOf("google_ads")>=0 || googleadsnewID.indexOf("gnpbad_")>=0 || googleadsnewID.indexOf("im-")>=0){
      if(html.indexOf("browsi")>0){
        this1.parentNode.outerHTML=test;

      }else{
      this1.outerHTML=test;
    }
      // if(adunit5.indexOf("andbeyond")<0){
      //   this1.removeAttribute('id');
        // this1.parentNode.removeAttribute('id');
      //  }
      
  }else{
     this1.innerHTML=test;
  }
}
    }
   
   if(html.indexOf('rtbdemiframe')>0){
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
var specialvar="";

if(richaudiencetest==1){
  var specialvar="richaudience3";
  }

  if(luponmediatest==1){
    var specialvar="luponmedia3";
    }

labelnew=bidder_restrict(flag_active,visible,country_rtb1,specialvar);

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

 rtbpbjs.que.push(function() {
if(id!=undefined)
{
     rtbpbjs.requestBids({
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
          var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
            id1=eval(id);
           
         
if(id1!=undefined)
  {

    setTimeout(function () {
  if(adlooksstatus1==0){
      id1=eval(id);
   rtbpbjs.setTargetingForGPTAsync([id]);
   context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
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
   rtbpbjs.setTargetingForGPTAsync([id]);
   context="instream";


videocode=null;
var hb_pb=0;
var hb_bidder;
var hb_adid;
var hb_format;
var format;
idnew12=id.toString();
var andbparams=rtbpbjs.getAdserverTargetingForAdUnitCode(idnew12);
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
console.log(e.stack);
console.log('EXCEPTION'+e);
 id1=eval(id);
googletag.pubads().refresh([id1]);

}
});
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



var childDivs = document.querySelectorAll('*[id^="andbeyond"],[id^="google_ads_iframe_"][id*="container"],[id^="aswift_"][id*="_host"],[id^="gnpbad_"],[id^="im-"]');
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

if(vs2 && vs2.indexOf("21751243814")<0 && (vs2.indexOf("container")>=0 || vs2.indexOf("andbeyond")>=0 || vs2.indexOf("aswift_")>=0 || vs2.indexOf("gnpbad_")>=0 || vs2.indexOf("im-")>=0 || vs2.indexOf("ads-SP300x259_")>=0))
  {
try {
  if(vs2.indexOf("andbeyond")<0){
  if (vs2.indexOf("google_ads_iframe_") >= 0) {
    vs2 = document.getElementById(vs2).parentNode.getAttribute("id");
  }else if(vs2.indexOf("gnpbad_") >= 0){
    vs2 = document.getElementById(vs2).parentNode.parentNode.getAttribute("id");

  }else{

  }
}
} catch (e) {
  console.log("vs2" + e.stack);
}


if(childDiv && vs2!=undefined && vs2!=null){
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
var vsinnerhtml=document.getElementById(vs2).outerHTML;
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
var diffvalue1=refresh;
  if(vs2.indexOf('andbeyond')>=0){
    diffvalue1=refresh_andbeyond;
  }else{
    diffvalue1=refresh;
  }

flagnewone=0;
if(vs2.indexOf('andbeyond')>=0 || (vs2.indexOf('andbeyond')<0 && timer_refresh>diffvalue1))
{
if(vs2.indexOf('andbeyond')<0 && visible22==true && timer_refresh>diffvalue1 && diff>=diffvalue1){
flagnewone=1;
}
else{
if(vs2.indexOf('andbeyond')>=0 && visible22==true && diff>diffvalue1){
flagnewone=2;
}
else{
flagnewone=0;
}
}
var temp=childDiv.outerHTML+vs2;
var temp_caps=temp.toUpperCase();
m1html=temp;
if(val1==nextactive)
{
if(vs2.indexOf('andbeyond')>=0)
nextactive=nextactive+refresh_andbeyond;
else
nextactive=nextactive+refresh;
if(diff>=diffvalue1)
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

if(diff>=diffvalue1)
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
if(newflag==1 && diff>=diffvalue1)
{
    // console.log("diff"+diff+"time_refreshunit"+time_refreshunit+"flagnewone"+flagnewone);

if((diff>=diffvalue1 && nextnumber<=5) || (flag_active==1))
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

  try
  {
  
  if(country_rtb1==undefined)
     country_rtb1="JP";
  
  if(vs2.indexOf('andbeyond')<0)
    flag2=blackbox(temp_caps,country_rtb1,city_rtb,city_region,0);
    else
    flag2=1;
    
    var hitandbeyond = findInFramesRecnew(document.getElementById(vs2), 0);
    if (hitandbeyond === 1) {
      flag2 = 0;
    }
    
    } catch (e) {
    }
    
    var flag=0;
    if(vs2.indexOf('andbeyond')>=0){
      flag2=1;
      flag=1;
    }
    
    if(temp.indexOf('NO_REFRESH')>=0){
      flag2=0;
    }
    
    
    if(flag==0 && vs2.indexOf("andbeyond")<0){
        var adunitsizes=firstlookadunitsize(vs2,0);
      //   console.log("new"+vs2+"adunitsizes[0]"+adunitsizes[0]+"adunitsizes[1]"+adunitsizes[0]);
        width=adunitsizes[0];
        height=adunitsizes[1];
        flag=adunitsizes[2];
        }
        if(vs2.indexOf("im-")>=0 && flag==0){
          if(temp.indexOf('320px')>=0 && (temp.indexOf('100px')>=0 || temp.indexOf('130px')>=0) && temp.indexOf('<iframe')>=0)
            {
            flag=1;
            width=300;
            height=100;
            }
          }

        if(vs2.indexOf("gpt_")>=0){
          flag2=0;
        }
andbeyondnewarray['unfilledadunitkey']=0;
andbeyondnewarray['hijackadunitkey']=0;
if(flag2==1)
{
if(flag==1 && newid!=undefined && newid!=0)
{
if(flag6==1)
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + newid + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + newid + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(newid,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray);


}
else
{
if(vs2.indexOf('andbeyond')==0 || (flag==1 && temp.indexOf('id="andbeyond')<0))
{

  
if(vs2.indexOf('andbeyond')==0)
{   

if(flag6==1)
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';
else
 test='<scr' + 'ipt> googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt>';

 refreshBid2(vs2,childDiv,1,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray);
}
else
{

if(flag6==1)
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","1");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
else
 test='<div class="andbeyond_adunit" style="height:'+height+'px; width:'+width+'px;overflow:hidden;margin:0 auto;"><div id="' + vs2 + '"><scr' + 'ipt>googletag.pubads().setTargeting("refresh","0");google' + 'tag.cmd.' + 'push(func' + 'tion() { google' + 'tag.displ' + 'ay(\'' + vs2 + '\'); });</scr' + 'ipt></div></div>';
 
refreshBid2(vs2,childDiv,0,test,1,width,height,newidflag,flag6,flag_active,nextactive,nextpassive,nextnumber,time_refreshunit,andbeyondnewarray);

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
if((/full/).test(andbeyondurl)){
  loadblockaff(adunitnamecheck(vs2),"9076735_block");
  }else{
    loadblockaff(adunitnamecheck(vs2),"9760155_block");
  }

}

}
}

}

}


}


}

}
}, 1000);
 
     googletag.cmd.push(function () { 
len=0;
timercheck=0;

    var slots = googletag.pubads().getSlots();

length=slots.length;
if(length<=len)
length=0;
timercheck++;
if(timercheck==1)

len=slots.length;
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
anddevice = 'MOBILE';
else
anddevice = 'DESKTOP';
for (var i = 0; i < length ; i++) {
var slot = slots[i];
         var responseInfo = slot.getResponseInformation();
       var unfilldivid = slot.getSlotElementId();
 var sizes=slot.getSizes();
var  width=1;
var  height=1;
result = findMatchingDimensions(sizes);
if (result) {
width=result.width;
height=result.height;
}
if (unfilldivid.includes("oop") || unfilldivid.includes("1x1") || unfilldivid.includes("overlay") || unfilldivid.includes("cover") || unfilldivid.includes("interstitial") || unfilldivid.includes("Interstitial")) {
width = 1;
height = 1;
}
if(width==300 && height==50){
width = 300;
height = 100;}
       var andbeyondunfill=unfilldivid;
       var andbeyondslotname=slot.getAdUnitPath();
       andbeyondtempunfill={};
        andbeyondunfill=andbeyondunfill.replaceAll('\/', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\_', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\-', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\.', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\(', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\)', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\,', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\=', '');
        andbeyondunfill=andbeyondunfill.replaceAll('\~', '');
 if (andbeyondtempunfill.hasOwnProperty(andbeyondunfill)) {
 delete andbeyondtempunfill[andbeyondunfill];
 }
        andbeyondtempunfill['divid']=andbeyondunfill;
       unfilladunitdata['slotrender']=0;
andbeyondtempunfill['unfill']=false;
         andbeyondtempunfill['sizewidth']=width;
         andbeyondtempunfill['sizeheight']=height
         andbeyondtempunfill['sizewidth']=width;
         andbeyondtempunfill['sizeheight']=height;
         andbeyondtempunfill['andbeyondslotname']=andbeyondslotname;
if(unfilladunitdata[unfilldivid]==undefined)
    {
        unfilladunitdata[unfilldivid]=andbeyondtempunfill;
    }
    }

var tempnew;var slots = googletag.pubads().getSlots();
length=slots.length;
for (var i = 0; i < length ; i++) {
var slot = slots[i];
vs2=slot.getSlotElementId(); 
if(vs2){
childDiv=document.getElementById(vs2);}
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2+"unfilledabm"+unfilledabm+"hijackdone[vs2]"+hijackdone[vs2]);
}
if(vs2 &&  childDiv!=null &&  obsrefreshdone[vs2]==undefined && vs2.indexOf("cubextra")<0 && vs2.indexOf("intercode")<0){
var tempnew;
if(vs2){tempnew = vs2+childDiv.innerHTML;}else{  tempnew=childDiv.innerHTML;}
temphijack=tempnew;
var temp_caps = tempnew.toUpperCase();
var adunithijack = vs2;
if (adunithijack != undefined) {
if(adunithijack!=null){
adunithijack=slot.getAdUnitPath();
adunithijack = adunithijack.split('/');
adunithijack = adunithijack[adunithijack.length - 1];
 }
 }
var sizeunfilliframeoogle = tempnew.indexOf("<iframe");
var sizeunfilliframeoogle1 = tempnew.indexOf("google_ads");
 var widthheightabm=firstlookadunitsize(vs2,1);
var adunitwidthheight=widthheightabm[0]+"X"+widthheightabm[1];
if(vs2){
obsrefreshdone[vs2]=adunithijack;
refreshobserver.observe(childDiv);
vs3=vs2;
vs3=vs3.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
if(slot_vis[vs3]==undefined)slot_vis[vs3]=0;
if( vs2 && sizeunfilliframeoogle1>0 && (widthheightabm[3]==true || sizeunfilliframeoogle < 0)){
slot_vis[vs3]=100;
showDivIfHidden(childDiv);
}
try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
nextnumber=eval("nextnumber"+vs3);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;
}
eval("passive" + vs3+ " = nextpassive");
eval("active" + vs3+ " = nextactive");
eval("time_refreshunit" + vs3+ " = time_refreshunit");
eval("nextnumber" + vs3+ " = nextnumber");
}
 }
 }


});
 googletag.cmd.push(function () { 
  googletag.pubads().addEventListener("slotRenderEnded",
    function(event) {
  var adslot1 = event.slot;
        var unfilldivid=adslot1.getSlotElementId();
        var andbeyondunfill=unfilldivid;
       var andbeyondslotname=adslot1.getAdUnitPath();
setsize=0;
size=event.size;
var windowwidth = window.innerWidth;
if (windowwidth <= 767)
anddevice = 'MOBILE';
else
anddevice = 'DESKTOP';
if (event.size && event.size.length > 0) {
       size = event.size[0];
      if (size === 'fluid' || size == 1) {
      } else {
setsize=1;
width = event.size[0];
         height = event.size[1];
}
}
        if(andbeyondunfill!=null){
 if(setsize==0){
var sizes = adslot1.getSizes();
var width=1;var height=1;
result = findMatchingDimensions(sizes);
if (result) {
width=result.width;
height=result.height;
}
}
if (unfilldivid.includes("oop") || unfilldivid.includes("1x1") || unfilldivid.includes("overlay") || unfilldivid.includes("cover") || unfilldivid.includes("interstitial") || unfilldivid.includes("Interstitial")) {
width = 1;
height = 1;
}
if(width==300 && height==50){
width = 300;
height = 100;}
      
        andbeyondtempunfill={};
        
       
            andbeyondunfill=andbeyondunfill.replaceAll('\/', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\_', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\-', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\.', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\(', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\)', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\,', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\=', '');
            andbeyondunfill=andbeyondunfill.replaceAll('\~', '');
 if (andbeyondtempunfill.hasOwnProperty(andbeyondunfill)) {
 delete andbeyondtempunfill[andbeyondunfill];
 }
            
       if(event.isEmpty == true){
        andbeyondtempunfill['divid']=andbeyondunfill;
        andbeyondtempunfill['unfill']=true;
         andbeyondtempunfill['sizewidth']=width;
         andbeyondtempunfill['sizeheight']=height
       andbeyondtempunfill['andbeyondslotname']=andbeyondslotname;
       unfilladunitdata[unfilldivid]=andbeyondtempunfill;
 if(setsize==1) unfilladunitdata['slotrender']=1;else unfilladunitdata['slotrender']=0;
       }
     else{
         andbeyondtempunfill['divid']=andbeyondunfill;
         andbeyondtempunfill['unfill']=false;
         andbeyondtempunfill['sizewidth']=width;
         andbeyondtempunfill['sizeheight']=height;
       andbeyondtempunfill['andbeyondslotname']=andbeyondslotname;
        unfilladunitdata[unfilldivid]=andbeyondtempunfill;
 if(setsize==1) unfilladunitdata['slotrender']=1;else unfilladunitdata['slotrender']=0;
        }
     }
  try {
      var slot = event.slot;
var vs2 = null;
 var vs2 = slot.getSlotElementId();
 var adunithijack = vs2;
 if (adunithijack != undefined) {
adunithijack=slot.getAdUnitPath();
adunithijack = adunithijack.split('/');
adunithijack = adunithijack[adunithijack.length - 1];
if(adunithijack!=null){
}
}
var childDiv = document.getElementById(vs2);
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2+"unfilledabm"+unfilledabm+"event.isEmpty"+event.isEmpty+"observehijack[vs2]"+observehijack[vs2]);
}
temphijack="";
if(vs2)
{
vs3=vs2.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
eval("time_refreshunit" + vs3 + " = timer_refresh");
if( event.isEmpty==true)
slot_vis[vs3]=100;
else
slot_vis[vs3]=0;
}
if(  vs2 && childDiv!=null &&  vs2.indexOf("intercode")<0 &&  vs2.indexOf("cubextra")<0 &&   obsrefreshdone[vs2]==undefined){
if(getQueryString_val_new("unfilldebug")==1)
{
console.log("vs2"+vs2+"obsrefreshdone[vs2]"+obsrefreshdone[vs2]);
}
obsrefreshdone[vs2]=adunithijack;
refreshobserver.observe(childDiv);
vs3=vs2;
vs3=vs3.replaceAll('\/', '');
 vs3=vs3.replaceAll('\_', '');
vs3=vs3.replaceAll('\-', '');
vs3=vs3.replaceAll('\.', '');
vs3=vs3.replaceAll('\(', '');
vs3=vs3.replaceAll('\)', '');
vs3=vs3.replaceAll('\,', '');
vs3=vs3.replaceAll('\=', '');
vs3=vs3.replaceAll('\~', '');
if(slot_vis[vs3]==undefined)slot_vis[vs3]=0;
    if( event.isEmpty==true){
slot_vis[vs3]=100;
showDivIfHidden(childDiv);
}
try{
time_refreshunit=eval("time_refreshunit"+vs3);
nextactive=eval("active" + vs3);
nextpassive=eval("passive" + vs3);
nextnumber=eval("nextnumber"+vs3);
}
catch(e)
{
nextactive=refresh+andbeyondtotalSeconds1;
nextpassive=timer_refresh+timebased_refresh;
time_refreshunit=timer_refresh;
nextnumber=0;
}
eval("passive" + vs3+ " = nextpassive");
eval("active" + vs3+ " = nextactive");
eval("time_refreshunit" + vs3+ " = time_refreshunit");
eval("nextnumber" + vs3+ " = nextnumber");
 }
 }
 catch(e)
 {
 console.log('EXCEPTIONsize'+e.stack);
 }

     });
     });



    if(andbeyondreward==1){
   // html start
    
var initandbeyond1=1;
(function() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initandbeyond();
  } else {
    document.addEventListener('DOMContentLoaded', initandbeyond);
  }

setTimeout(function(){
  if(initandbeyond1==1){
  initandbeyond();
}
},5000);
function initandbeyond(){
  initandbeyond1=0;
  // console.log("document");
var urlmain3=window.location.origin + window.location.pathname;
var timer_int1=1;
var alertFrequency1 = timer_int1 * 5 * 1000;
  // html start
  var modeltag="<div class=modal id=modal><div class=modalDialog><div id=modalDialog><div id=closebtn1>X</div><img alt=image src=https://rtbpass-us.andbeyond.media/logo-oricon-abm.png><div class=modalMessage><p id='newone1'> \xe7\xb6\x9a\xe3\x81\x91\xe3\x81\xa6\xe3\x82\xb3\xe3\x83\xb3\xe3\x83\x86\xe3\x83\xb3\xe3\x83\x84\xe3\x82\x92\xe8\xaa\xad\xe3\x82\x80</p><p id='newone2'>\xe7\x9f\xad\xe3\x81\x84\xe5\x8b\x95\xe7\x94\xbb\xe5\xba\x83\xe5\x91\x8a\xe3\x82\x92\xe8\xa6\x96\xe8\x81\xb4\xe3\x81\x99\xe3\x82\x8b\xe3\x81\x93\xe3\x81\xa8\xe3\x81\xa7\xe3\x82\xb3\xe3\x83\xb3\xe3\x83\x86\xe3\x83\xb3\xe3\x83\x84\xe3\x81\xae\xe7\xb6\x9a\xe3\x81\x8d\xe3\x82\x92\xe8\xa6\x8b\xe3\x82\x8b\xe3\x81\x93\xe3\x81\xa8\xe3\x81\x8c\xe3\x81\xa7\xe3\x81\x8d\xe3\x81\xbe\xe3\x81\x99\xe3\x80\x82</p></div><div class=style_btn><div class=text_container><h5 id='newone3'>\xe5\x8b\x95\xe7\x94\xbb\xe5\xba\x83\xe5\x91\x8a\xe3\x82\x92\xe8\xa6\x8b\xe3\x82\x8b</h5></div><div class=play_button><span class=rewardButtons><input alt='Watch Ad' height=40px id=watchAdButton src=https://rtbpass-us.andbeyond.media/play-reward.png type=image value=Yes width=40px></span></div></div></div></div></div>";
  document.querySelectorAll("body")[0].insertAdjacentHTML("afterbegin", modeltag);
var rewardedSlot;
function start(url)
{
      googletag.cmd.push(() => {
        rewardedSlot = googletag.defineOutOfPageSlot(
          "/21751243814,90608236/oricon_all_REWARD",     
          // "/22639388115/rewarded_web_example",
         
          googletag.enums.OutOfPageFormat.REWARDED,
        );
       
        // Slot returns null if the page or device does not support rewarded ads.
  //      alert("rewardedSlot"+JSON.stringify(rewardedSlot));
        if (rewardedSlot) {
      rewardedSlot.addService(googletag.pubads());

googletag.pubads().enableSingleRequest();
            googletag.enableServices();

googletag.pubads().refresh([rewardedSlot]);

timeer33=0;

googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  if ((event.slot.getSlotElementId().indexOf('REWARD')>=0  || event.slot.getSlotElementId().indexOf('reward')>=0)  && event.isEmpty) 
{
window.location.href=url; 
     timeer33=0;
}

if ((event.slot.getSlotElementId().indexOf('REWARD')>=0  || event.slot.getSlotElementId().indexOf('reward')>=0)  && event.isEmpty==false) 
  {
setTimeout(function(){
  if(timeer33==0){
    window.location.href=url; 
  }
},4000);

  }

  
});
          googletag.pubads().addEventListener("rewardedSlotReady", (event) => {

timeer33=1;
            document.getElementById("modalDialog").onclick = () => {
                event.makeRewardedVisible();

              displayModal();
            };
console.log("rewardedSlotReady");
            displayModal("reward", "Watch an ad to get access to this article?");
          });

          googletag.cmd.push(function() {
            googletag.pubads().addEventListener("slotRenderEnded",
              function(event) {
           var currentTime = Date.now();
          
                var slot = event.slot;
                var advs2 = slot.getSlotElementId();

                // console.log("advs2"+advs2+"event.isEmpty"+event.isEmpty);
                if(advs2=="gpt_unit_/21751243814,90608236/oricon_all_REWARD_0" && event.isEmpty==true){
                  if(timeer33==0){
                    window.location.href=url; 
                  }  


                }
                
              })
            });

 document.getElementById("closebtn1").onclick = function() {  
        dismissRewardedAd();
};         

googletag.pubads().addEventListener("rewardedSlotClosed", dismissRewardedAd);

          googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
            dismissRewardedAd();
            const reward = event.payload;
            if (reward) {
              var currentTime = Date.now();
              lastAlertTimeandr = currentTime
              localStorage.setItem('lastAlertTimeandr', lastAlertTimeandr);

              dismissRewardedAd();
              window.location.href=url;
          
            }
          });

          googletag.enableServices();
          googletag.display(rewardedSlot);
        }
      });
}
      function dismissRewardedAd() {
        displayModal();
        // var currentTime = Date.now();
        // lastAlertTimeandr = currentTime
        // localStorage.setItem('lastAlertTimeandr', lastAlertTimeandr);
        if (rewardedSlot) {
        googletag.destroySlots([rewardedSlot]);
        }
      }


const byteArrays = [
  new Uint8Array([
      0xe7, 0xb6, 0x9a, 0xe3, 0x81, 0x91, 0xe3, 0x81, 0xa6, 
      0xe3, 0x82, 0xb3, 0xe3, 0x83, 0xb3, 0xe3, 0x83, 0x86, 
      0xe3, 0x83, 0xb3, 0xe3, 0x83, 0x84, 0xe3, 0x82, 0x92, 
      0xe8, 0xaa, 0xad, 0xe3, 0x82, 0x80
  ]), // "ç¶šã‘ã¦ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚’èª­ã‚€"
  new Uint8Array([
      0xe7, 0x9f, 0xad, 0xe3, 0x81, 0x84, 0xe5, 0x8b, 0x95, 0xe7, 
      0x94, 0xbb, 0xe5, 0xba, 0x83, 0xe5, 0x91, 0x8a, 0xe3, 
      0x82, 0x92, 0xe8, 0xa6, 0x96, 0xe8, 0x81, 0x8e, 0xe3, 
      0x81, 0x99, 0xe3, 0x82, 0x8b, 0xe3, 0x81, 0xa7, 0xe3, 
      0x81, 0x93, 0xe3, 0x81, 0xa8, 0xe3, 0x81, 0xa7, 0xe3, 
      0x82, 0xb3, 0xe3, 0x83, 0xb3, 0xe3, 0x83, 0x86, 0xe3, 
      0x83, 0xb3, 0xe3, 0x83, 0x84, 0xe3, 0x81, 0xae, 0xe7, 
      0xb6, 0x9a, 0xe3, 0x81, 0x8d, 0xe3, 0x82, 0x92, 0xe8, 
      0xa6, 0x8b, 0xe3, 0x82, 0x8b, 0xe3, 0x81, 0xad, 0xe3, 
      0x81, 0x97, 0xe3, 0x81, 0x99, 0xe3, 0x82, 0x8b, 0xe4, 
      0xba, 0x8b, 0xe3, 0x81, 0x8c, 0xe3, 0x81, 0xa7, 0xe3, 
      0x81, 0x8d, 0xe3, 0x81, 0xbe, 0xe3, 0x81, 0x99, 0xef, 
      0xbc, 0x8e
  ]), // "çŸ­ã„å‹•ç”»åºƒå‘Šã‚’è¦–è´ã™ã‚‹ã“ã¨ã§ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã®ç¶šãã‚’è¦‹ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚"
  new Uint8Array([
      0xe5, 0x8b, 0x95, 0xe7, 0x94, 0xbb, 0xe5, 0xba, 0x83, 
      0xe5, 0x91, 0x8a, 0xe3, 0x82, 0x92, 0xe8, 0xa6, 0x8b, 
      0xe3, 0x82, 0x8b
  ]) // "å‹•ç”»åºƒå‘Šã‚’è¦‹ã‚‹"
];

function updateContent1(elementId, byteArrayIndex) {
  const byteArray = byteArrays[byteArrayIndex];
  const decoder = new TextDecoder('utf-8');
  const decodedString = decoder.decode(byteArray);
  const element = document.getElementById(elementId);
  if (element) {
      element.textContent = decodedString;
  } else {
      console.error(`Element with ID "${elementId}" not found.`);
  }
}



      function displayModal(type = "", message = "",url ="") {
        const modal = document.getElementById("modal");
        modal.removeAttribute("data-type");

        if (type) {

          updateContent1("newone1", 0); // Updates with "ç¶šã‘ã¦ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚’èª­ã‚€"
          updateContent1("newone2", 1); // Updates with "çŸ­ã„å‹•ç”»åºƒå‘Šã‚’è¦–è´ã™ã‚‹ã“ã¨ã§ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã®ç¶šãã‚’è¦‹ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚"
          updateContent1("newone3", 2); // Updates with "å‹•ç”»åºƒå‘Šã‚’è¦‹ã‚‹"
          
          modal.setAttribute("data-type", type);
        }
      }

            var styles = `
            .modal {
          display: none;
          position: fixed;
          z-index: 2147483648;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
      }
      
      .modal[data-type] {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      
      /* Modal Dialog */
      .modalDialog {
          margin: auto;
          padding: 25px;
          background-color: white;
          text-align: center;
          position: relative;
          border-radius: 10px;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
          /* overflow: auto; */
      }
          #modalDialog{
          cursor:pointer;}
      
      .modalDialog img {
          max-width: 65%;
          padding-top:12px;
          padding-bottom: 0px;
          height: auto;
      }
      .modalMessage p:first-of-type {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 12px;
        color: #f73d89;
    }
      
      /* Custom Button Style */
      .style_btn {
      display: flex
;
    justify-content: space-between;
    /* padding: 0px; */
    border: 2px solid rgb(236 51 119);
    border-radius: 10px;
    text-align: left;
    margin-top: 9px;
    }
      
      .style_btn .text_container {
          padding: 0px 20px;
          line-height: 1;
          margin-top: 15px;
      }
      
      .style_btn .text_container h5 {
        font-size: 18px;
        font-weight: bold;
        color: rgb(88, 88, 88);
        margin: 10px 0 25px;
    }
      
      /* Grant and Reward Buttons */
      .grantButtons,
      .rewardButtons {
          display: none;
      }
      
      .modal[data-type="grant"] .grantButtons, .modal[data-type="reward"] .rewardButtons {
        display: block;
        margin-top: 17px;
        margin-right: 20px;
    }

      /* No Reward Button Positioning */
      #noRewardButton {
          position: absolute;
          top: 10px; /* Adjust as needed */
          right: 10px; /* Adjust as needed */
      }
      
      /* Modal Message */
      .modalMessage {
         max-width: 90%;
    padding: 32px 0px 27px;
    text-align: center;
    margin: auto;
    line-height: 22px;
    font-size: 16px;
      }
      .modal .modalDialog #closebtn1 {
              position: absolute;
  top: 5px;
  right: 5px;
  font-size: 14px;
  color: #8e8e8e;
  background-color: #d2d2d2;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 7px 11px;
  font-weight: 600;
          }
      
      /* Media Queries for Responsive Sizes */
      @media (min-width: 768px) {
          /* For tablets and desktops */
          .modalDialog {
              width: 400px;
              height: 320px;
          }
      }
      
      @media (max-width: 767px) {
          /* For mobile devices */
  
      
          .modalDialog img {
              width: 250px;
              height: auto;
          }
          /* Modal Message */
      .modalMessage {
          max-width: 90%; /* Adjust as needed */
          padding: 22px;
          text-align: center;
          margin: auto;
      }
      
          .style_btn {
              display: flex;
              justify-content: space-between;
              padding: 15px;
              border: 2px solid rgb(215, 4, 4);
              border-radius: 10px;
              text-align: left;
              margin: 10px;
          }
 
        .style_btn{
          padding:0px 15px;
        }
        .modalDialog {
          width: 85%;
          height: auto;
          padding: 10px 0 25px;
      }
      .modalMessage{
        padding: 23px 22px 20px;
      }
      .style_btn {
        padding: 0px 0px;
        margin: 0 auto;
        width: 85%;
    }
    .modalDialog img {
      width: 70%;
    
  }
    .modal .modalDialog #closebtn1{
      padding: 7px 10px;
    }
         
      }
`;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)




function checkVisitCount() {
  // Get the current date
  var currentDate = new Date().toLocaleDateString();

  // Retrieve visit count from localStorage
  var visitCount = localStorage.getItem('visitCount');
  var lastVisitDate = localStorage.getItem('lastVisitDate');

  // If there's no stored date or the stored date is not the current date, reset the count
  if (!lastVisitDate || lastVisitDate !== currentDate) {
      visitCount = 0;
  }

  // Increment the visit count
  // visitCount = parseInt(visitCount) + 1;

  // Update the localStorage with the new values
  localStorage.setItem('visitCount', visitCount);
  localStorage.setItem('lastVisitDate', currentDate);

}


threshold=0;
visitcount=localStorage.getItem('visitCount');
if(visitcount==undefined)
visitcount=0;
console.log('visitcount'+visitcount);

  checkVisitCount();

   lastAlertTimeandr = localStorage.getItem('lastAlertTimeandr');
currentTime = Date.now();
if (!lastAlertTimeandr || currentTime - parseInt(lastAlertTimeandr) > alertFrequency1) {

if(visitcount>=threshold)
{


  var articleLinksand = document.querySelectorAll('a');

articleLinksand.forEach(function(elementandbeyond) {
      elementandbeyond.addEventListener('click', function (eventnew) {
if(elementandbeyond.href)
{
eventnew.preventDefault();
start(elementandbeyond.href);
} 
         // For example, you can log a message to the console
  });

});
}
}
}
        
})();

}



    if(document.querySelector('.btn-more-right-blue')){
      // console.log("click0");
      
  document.querySelector(".btn-more-right-blue").addEventListener("click", function(){
    console.log("click1");

    loadclickaff("click_close","9760155")

  });
}
if(document.querySelector('.btn-more-right-blue')){
  // console.log("click0");
  
document.querySelector(".btn-more-right-blue").addEventListener("click", function(){

     var andbeyondclosereward = new XMLHttpRequest();
            andbeyondclosereward.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
            }
            };
            andbeyondclosereward.open("GET", "https://prebid.andbeyond.media/impstats.php?aff=9760155&type=readmore");
            andbeyondclosereward.responseType = "json";
            andbeyondclosereward.send();
});
}



if((/full/).test(andbeyondurl)){
  loadGtag("9076735_pv");
  }else{
    loadGtag("9760155_pv");
  }
  
} 
}    