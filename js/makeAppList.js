if(catPage){
	var validApps=category[catPage];
	var catApp=[];
	for(let val of referApps){
		if(validApps.includes(val[0])){
			catApp.push(val);
		}
	}
	showApp(catApp);
}else{
	showApp(referApps);
}
function showApp(list,random=false){
	var html="";
	var i=0;

	for(let i=0; i<list.length; i++){
		var val=list[i];
		html+=`
		<div class="appBox">
		<div class="appInfo flex" onclick="window.open('${val[2]}')">
		  <div class="appLogo flex">
		    <img src="${val[1]}" alt="${val[0]}_logo">
		  </div>
		  <div class="mainData c">
		    <h2 class="name">${val[0]}</h2>
		    <div class="offer" col="#333">
		      ${val[4]}
		    </div>
		    <div class="docs" style="text-align: right;" fs=".8em">
		      ${val[3]?val[3] +" | ": ''}[${val[5].length?val[5]:'No Docs Required'}]
		    </div>
		  </div>
		</div>

		<div class="appDetail flex c">
		  <div class="desc" style="">
		        ${val[7]}
		  </div>
		  <button class="noBtn flex w100p" onclick="window.open('${val[2]}')">See More <span class="flex ico" ico="down"></span></button>
		</div>

		</div>`;

	}
	op(".appPan").insertAdjacentHTML('afterbegin',html);
}
