var categoryInclueded=[];
var recoApps=[],recoAppData=[];
var recoHtml="";

for(let val in category){
	if(category[val].includes(spApp[0])){
		categoryInclueded.push(val.replace('_'," "));
		for(let appN of category[val]){
			if(!recoApps.includes(appN) && appN!=spApp[0]){
				recoApps.push(appN);
			}
		}
	}
}

if(recoApps.length){
log(categoryInclueded);
log(recoApps);

for(let val of referApps){
	if(recoApps.includes(val[0])){
		recoHtml+=`
<div class="recAppBox flex c" onclick="location.assign('app/index.html?a=${val[0]}')">
  <div class="recImg flex">
    <img src="${val[2]}250" alt="${val[0]} logo">
  </div>
  <div class="recName texCen">${val[0]}</div>
</div>
`;
	}
}


var categoryTxt=categoryInclueded.toString();
if(categoryInclueded.length>1){
	var lastCom=categoryTxt.lastIndexOf(",");
	categoryTxt=categoryTxt.substring(0,lastCom).replace(",",", ")+" & "+categoryTxt.substring(lastCom+1);
	log(categoryTxt)
}

op(".content").insertAdjacentHTML("beforeend",`
<div class="texCen" style="text-transform: capitalize">
  <h3 ff="Offside">Highly Recommended</h3>
  <h1>${categoryTxt}</h1>
  <h2>to Earn</h2>
  <div class="lineMargin" m="30px"></div>

</div>

<div class="recAppDad">
  <div class="recAppPan flex">
    <div class="recApp2Pan flex">
    ${recoHtml}
    </div>
  </div>
</div>
`)
}