var expandedHeader=true;

document.body.insertAdjacentHTML('afterbegin',`
  <style>
    /*head ui css*/
    .head {
      width: 100%;
      padding: 10px 20px 0;
      background: #001;
      color: #fff;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 1px 7px #0004;
      border: 3px solid #fff;
      border-top: none;
    }
    .head .fr{
      margin: 10px 0;
    }
    .head .fr.up{
      justify-content: space-between;
    }
    .head .fr.up .search{
      background: #fff;
      border-radius: 99px;
    }
    .head .fr.up .search > *{
      height: 40px;
      outline: none;
      border: none;
      background: #fff;
      border-radius: 99px 0 0 99px;
    }
    .head .fr.up .search > input{
      padding: 10px;
      width: 100px;
    }
    .head .fr.up .search > div.ico{
      border-radius: 0 99px 99px 0;
      width: 40px;
      padding: 10px;
    }
  </style>
  <div class="head flex c" id="head">
    <div class="fr up w100p flex">
      <div class="logo">
        <h1 ff="Offside">MoneY NOW</h1>
      </div>
      <div class="search flex">
        <input type="text" placeholder="Search...!!!" id='search' >
        <div class="lineMargin" w='1px' h='30px' bg='#aaa'></div>
        <div fill="#555" ico="search" class="ico flex"></div>
      </div>
    </div>
    <div class="fr down flex c">
      ${getExpandedHeader()}
      <div class="flex"><div class="ini">/...</div><strong ff="'Syne Mono', monospace" id="moto">This is my moto line</strong></div>
    </div>
  </div>
`);
var moto=op("#moto");

var motoLine=["Earn Early & Start Today","Money Now :  Refer Now - Earn Now","Only Valid Apps Are HEre.",]

var moton=0;
function changeMoto(){
  changeText(moto,motoLine[moton])
  moton=++moton%motoLine.length;
}
changeMoto();
setInterval(changeMoto,5000);


function getExpandedHeader(){
  var banHtml="",
  banWidth=op('body').offsetWidth-50;
  banWidth=banWidth>600?600:banWidth;
  var banHeight=banWidth*60/140;
  log(banWidth,banHeight)

  for(let val in category){
    log(val);
    banHtml+=`
        <div class="banner flex">
          <img src="img/banner/${val}.png" alt="${val} banner">
        </div>`
  };

  return `
<style>
.bannerBx::-moz-scrollbar {
    width: 0;
    height: 0;
}
.bannerBx{
  width: ${banWidth}px;
  aspect-ratio: 140/60;
  border-radius: 10px;
  overflow-x: auto;
  justify-content: flex-start;
  scrollbar-width: none;

}
.bannerBx .banner img{
  height: ${banHeight- 20}px;
  aspect-ratio: 140/70;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 10px;
}

.bannerParent::after,
.bannerParent::before{
  content: '';
  position: absolute;
  width: 3px;
  height: 100%;
  z-index: 1;
  background: #fff;
  left: 0;
  top: 0;
  background: linear-gradient(90deg,#222,#0000);
  background: #0099ff;
  border-radius: 4px;
  box-shadow: 0 0 30px #09f,0 0 30px #09f,0 0 30px #09f;
}

.bannerParent::after{
  left: calc(100%);
/*  background: linear-gradient(-90deg,#222,#0000); */
}
</style>

<div class="bannerParent" style="width: max-content; height:max-content; margin-bottom: 20px;">
  <div class="bannerBx flex">
    ${banHtml}
  </div>
</div>`
}