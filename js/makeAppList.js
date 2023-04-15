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
	var html=``;
	var i=0;

	for(let i=0; i<list.length; i++){
		var val=list[i];
		html+=`
		<div class="appBox">
		<div class="appInfo flex" onclick="location.assign('app/index.html?a=${val[0]}')">
		  <div class="appLogo flex">
		    <img src="${val[2]}150" alt="${val[0]}_logo">
		  </div>
		  <div class="mainData c">
		    <h2 class="name">${val[0]}</h2>
		    <div class="offer" col="#333">
		      ${val[5]}
		    </div>
		    <div class="docs" style="text-align: right;" fs=".8em">
		      ${val[4]?val[4] +" | ": ''}[${val[6].length?val[6]:'No Docs Required'}]
		    </div>
		  </div>
		</div>
		<!---<div class="lineMargin" w="100%" h="1px" bg="#ddd"></div>
		<div class="appDetail flex c">
		  <div class="desc" style="">
		        {val[8]}
		  </div>
		  <div class="btnPan flex w100p">
			  <button class="noBtn flex w100p" style="background: #fff;" onclick="location.assign('app/index.html?a=${val[0]}')">Detail</button>
			  <button class="noBtn flex w100p" style="background: #00a173; color: #fff;" onclick="window.open('${val[3]}');send('fina/...${val[0]}')">Install</button>
		  </div>--->
		</div>

		</div>`;

	}
	op(".appPan").insertAdjacentHTML('afterbegin',html);
}
