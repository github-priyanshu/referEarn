var query=location.search.replace("?",""),
headTxtChange=op("#headTxtChange"),
headTxt=["Special Earning","Refer & Earn","Sleeping Earning"],
headTxtN=0,
downPan=op(".down"),
type='general',
an=0;

query=query.split("&");
for(let val of query){
	val=decodeURI(val).split("=");
	log(val);
	window[val[0]]=val[1];
}
try{
	if(a.includes(',')){
		a=a.split(',');
	}
}catch(err){}

var adTypeInfo={
	general:[makeTxt,makeApp,makeCat],
	spapp:[makeApp],
	hidden:[hidden],
}

var execn=0;
function executor(){
	adTypeInfo[type][execn]();
	execn= ++execn%adTypeInfo[type].length;
	resetFormat();
}

executor();

setInterval(executor,20000);

function makeTxt(){
	var txt=["Children Are Earning; You Also Can!","You can earn also while sleeping. Click Now!","More than 50 friends? Earn Online!","Work from home no eligibility. Click Now!"];
	downPan.innerHTML=`<div onclick="window.open('/')" class="flex" style="height: 100%; padding: 5px">/... <h2 id="bnrTxt">${txt[0]}</h2></div>`,
	tn=0,
	bnrTxt=op("#bnrTxt");
	if(bnrTxt){
		function chmakeTxtTxt() {
			changeText(bnrTxt,txt[tn]);
		  tn=++tn%txt.length;
			setTimeout(chmakeTxtTxt,5000);
		}
		chmakeTxtTxt();
	}
}
function makeCat(){
	var x=Math.floor(Math.random()*categoryLength),n=0;
	log(x);
	for(let val in category){
		if(n++ == x){
			downPan.innerHTML=`<img onclick="window.open('category/${val}.html')" src="img/banner/${val}.png" class="w100p" style="height: 100%; object-fit: cover;">`;
		}
	}
}

function makeApp(){
	let val;
	try{
		if(typeof a == 'object'){
			val=getAppDetailByName(a[an]);
			an=++an%a.length;
		}else{
			val=getAppDetailByName(a);
		}
	}catch(er){
		val=getAppDetailByName(category.shopping[Math.floor(Math.random()*category.shopping.length)]);
	}

	downPan.innerHTML=`
	<div class="appBox">
	<div class="appInfo flex" onclick="window.open('app/index.html?a=${val[0]}')">
	  <div class="appLogo flex">
	    <img src="${val[2]}200" alt="${val[0]}_logo">
	  </div>
	  <div class="mainData c">
	    <h3 class="name">${val[0]}</h3>
	    <div class="offer" col="#333">
	      ${val[5]}
	    </div>
	    <div class="docs" style="text-align: right;" fs=".8em">
	      ${val[4]?val[4] +" | ": ''}[${val[6].length?val[6]:'No Docs Required'}]
	    </div>
	  </div>
	</div>
`;
	resetFormat();
}

function hidden(){
	document.body.insertAdjacentHTML('beforeend',`
		<div class="hide flex c" style="font-family: Poppins; position: absolute;transition: all 1s; top: 0; width: 100%; height: 100%; background: #fff;" onclick="this.style.opacity=0; this.style.pointerEvents='none';">
			<p>Tap To See..!!</p>
			<div class="lineMargin" m="2px"></div>
			<h2>A Hidden Offer</h2>
			<div class="lineMargin" m="2px"></div>
			<p>& & &</p>
			<div class="lineMargin" m="2px"></div>
			<p>Earn While Sleeping</p>
		</div>
	`);
	makeApp();
}

setInterval(headTxtFun,3000);
headTxtFun();
function headTxtFun(){
	changeText(headTxtChange,headTxt[headTxtN]);
  headTxtN=++headTxtN%headTxt.length;
}

function nextAppOffer(){
	if(typeof a!="object"){
		a=null;
	}
	makeApp();
}
onSwipe(downPan,"nextAppOffer")
function onSwipe(elem,fun,direction=false){
	elem.addEventListener("touchmove",e=>{e.preventDefault()})
	elem.addEventListener('touchmove',check,{passive: false});
	var cordAry=[],final=[],
	obj={
		'-1':["right","down"],
		'1':["left","up"],
	};

	function check(e){
		e.cancelable=true;
		e.preventDefault();
		elem.removeEventListener('touchmove',check);
		var cord=e.touches[0];

		cordAry.push([cord.clientX,cord.clientY]);
		if(cordAry.length>=2){
			var sub=[cordAry[0][0]-cordAry[1][0],cordAry[0][1]-cordAry[1][1]];
			sub.map((val,n)=>{
				sub[n]=(val>=0)?1:-1;
			});
			final=[obj[sub[0]][0],obj[sub[1]][1] ];

			if(direction){
				if(final.includes(direction)){eval(fun+`("${final}")`);}
			}else{
				eval(fun+`("${final}")`);
			}
		}else{
			setTimeout(()=>{
				elem.addEventListener('touchmove',check,{passive: false});
			},10);
		}

		elem.ontouchend=()=>{
			onSwipe(elem,fun,direction);
		}
	}
}