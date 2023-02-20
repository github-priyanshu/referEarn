var spApp=decodeURI(location.search.replace("?",'').split('=')[1]);

send(spApp);
if(!spApp){location.replace("/");}

for(let val in referApps){
	if(referApps[val][0]==spApp){
		spApp=referApps[val];
		break;
	}
}
var appType=spApp[1],

mainBtn={
	txt:appType=="playstore"?"Install":"Go",
	bg:appType=="playstore"?"#00a173":"#001",
	col:appType=="playstore"?"#fff":"#fff",
},
spOffer=spApp[5].split(" + "),

spAppHtml=`
<div class="appParent flex c w100p">
	<div class="fr f1 flex c">

		<div class="spAppImg flex">
			<img src="${spApp[2]}300" alt="${spApp[0]} Logo">
		</div>
		<div class="spAppData flex c">
			<h2 class="spAppName">${spApp[0]}</h2>	
			<button class="mainBtn noBtn" style="--bg: ${mainBtn.bg}; --col: ${mainBtn.col};" onclick="window.open('${spApp[3]}');send('Final...${spApp[0]}');">
				${mainBtn.txt}
			</button>
		</div>

	</div>

	<div class="fr f2 flex c">
		<h2 ff="Offside">Our Inspection</h2>
	  <div class="lineMargin" m="5px"></div>
	  <style>
			#codeCopyBtn{
				display: block;
				margin-right: 5px;
			}
			#codeCopyBtn svg{
				fill: #444;
				width: 15px;
			}
	  </style>
		<table>
			<tbody>
				<tr><th>Referral Code:</th>	<td class="flex" style="justify-content: flex-start;" onclick="copyToClipboard('${spApp[4]? spApp[4] : spApp[3] }'); alert('Copied..!!')">${spApp[4]?`<span ico="share" class='ico' id="codeCopyBtn"></span>`+ spApp[4]:"Link Only"}</td></tr>
				<tr><th>On Download :</th>	<td>${spOffer[0]}</td></tr>
				<tr><th>On Share :</th>	<td>${spOffer[1]}</td></tr>
				<tr><th>Documents :</th>	<td>${spApp[6].length? spApp[6]:"No Docx. Req."}</td></tr>
			</tbody>
		</table>
	</div>
	<style>
		.fr.f3{
			max-height: 80vh;
			overflow: hidden;
		}
		.fr.f3 .btnPan{
			position: absolute;
			bottom: 0px;
			width: 100%;
			margin: 0;
			background: #f1f1ff;
			left: 0;
			border-radius:0 0 10px 10px;
			border-top: 1px solid #ddd;
		}
		.fr.f3 .btnPan::after{
			width: 100%;
			height: 50px;
			background: linear-gradient(#0000,#f1f1ff);
			content:'';
			position: absolute;
			top: -50px;
		}
	</style>
	<div class="fr f3" id="detailBox">
		<h1>Detail</h1>
		${spApp[8]}
		<div class="btnPan flex">
			<button class="noBtn flex w100p" onclick="op('#detailBox').style.overflow='auto';this.parentElement.remove();">See More <span class="ico" fill="#777" ico="down"></span></button>
		</div>
	</div>

</div>

`;
document.title=spApp[0]+" - Money NoW with Offer ("+spApp[5]+')';

document.body.insertAdjacentHTML("beforeend",spAppHtml);