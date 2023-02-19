var bannerWidth,bannerImageWidth,banBox,catPage;

try{
  expandedHeader;
}catch(err){
  eval("var expandedHeader=true");
}

document.body.insertAdjacentHTML('afterbegin',`
  <style>
    /*head ui css*/
    .head {
      width: 100%;
      padding: 10px 20px 0;
      background: #001;
      color: #fff;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 1px 45px #0009;
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
        <a href="/" style="text-decoration: none; color: #fff;">
          <h1 ff="Offside">MoneY NOW</h1>
        </a>
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
  if(expandedHeader){
    var banHtml="",
    bannerWidth=op('body').offsetWidth-50;
    bannerWidth=bannerWidth>600?600:bannerWidth;
    var banHeight=bannerWidth*60/140;
    bannerImageWidth=(banHeight-20)*2;

    for(let val in category){
      banHtml+=`
          <div class="banner flex">
            <a href="category/${val}.html"><img src="img/banner/${val}.png" alt="${val} banner"></a>
          </div>`
    };

    return `
  <style>
  .bannerBx::-moz-scrollbar {
      width: 0;
      height: 0;
  }
  .bannerBx{
    width: ${bannerWidth}px;
    aspect-ratio: 140/60;
    border-radius: 10px;
    overflow-x: auto;
    justify-content: flex-start;
    scrollbar-width: none;
  }
  
  .bannerBx ::-webkit-scrollbar{
    width: 0;
    height: 0;
  }.bannerBx ::-moz-scrollbar{
    width: 0;
    height: 0;
  }
  .bannerBx .banner img{
    height: ${banHeight- 20}px;
    aspect-ratio: 2/1;
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
  }else{
    return '';
  }
}

function scrollBanner() {
  var url=document.URL.split('/');
  catPage=url[url.length-1];
  catPage=catPage?catPage:url[url.length-2];
  catPage=catPage.replace(".html",'');
  if(catPage!='index' && catPage && !document.baseURI.includes(catPage)){
    banBox=op(".bannerBx");
    bannerWidth=banBox.offsetWidth;
    var tarElem=op(`.banner img[alt^='${catPage}']`).offsetParent.offsetParent;
    var scrx=tarElem.offsetLeft-(banBox.offsetWidth - tarElem.offsetWidth)/2;

    banBox.scrollTo(scrx,0);
  }else{
    catPage=null;
  }
}
if(expandedHeader){
  scrollBanner();
}