document.body.insertAdjacentHTML("beforeend",`
  <style>   
/*  FOOT STYLING */
.foot{
  position: fixed;
  left: 0;
  bottom: -200px;
  width: 100%;
  padding: 20px 10px;
  background: #000;
  color: #fff;
  z-index: 1;
  border-radius: 10px 10px 0 0 ;
  border: 3px solid #fff;
  border-bottom: none;
  text-align: center;
  transition: all .5s;
}
.foot.active{
  bottom: -0px;
}
.foot .lineBx{
  background: #ff0;
  color: #000;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}
  </style>
  <div class="foot flex c w100p">
    <div class="lineBx flex w100p">
      <div class="line texCen" fs="1.1em">This is my motivation line</div>
    </div>

    <div class="tipBx">
      <p><h3 fs=".8em" style="display: inline-block;">/..Tips - </h3> Can uSE YouR <u>Parent Documents</u> <b>All apps are verified</b></p>
    </div>
  </div>
`);

var lastScr=0,foot=op('.foot');
checkFoot=true;

window.addEventListener('scroll',()=>{
	if(checkFoot){
		checkFoot=false;
		setTimeout(()=>{
			checkFoot=true;
		},10);
		var noScr=window.scrollY;
		foot.classList[(lastScr<noScr)?'add':"remove"]("active");
		lastScr=noScr;
	}
});


var motiLine=[
`पैसा कमाना हुआ आसान
डाउनलोड करिए और रेफर करके कमाइए|`,
`10 दोस्तों को शेयर करो और पाओ
₹10 x 10 = ₹100`
],
motiBox=op(".lineBx .line"),
motin=0;

changeMotiText();
setInterval(changeMotiText,5000);
function changeMotiText() {
  motiBox.innerText=motiLine[motin];
  motin=++motin%motiLine.length;
}