var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

function resetFormat(){
  let keys={
    col: "color",
    fs: "fontSize",
    ff: "fontFamily",
    fw: "fontWeight",
    fill: "fill",
  }
  for(let val in keys){
    opp(`*[${val}]`).forEach(elem=>{
      elem.style[keys[val]]=elem.getAttribute(val);
      elem.removeAttribute(val);
    })
  }

  opp(`*[ico]`).forEach(elem=>{
    elem.innerHTML=elems[elem.getAttribute('ico')];
    elem.removeAttribute('ico');
  })

  opp(".lineMargin").forEach(val=>{
    val.style.margin=val.getAttribute("m") || 0;
    val.style.height=val.getAttribute("h") || 0;
    val.style.width=val.getAttribute("w") || 0;
    val.style.background=val.getAttribute("bg") || 0;
  })
}

function changeText(elem,text){
  var oldTxt=elem.innerText;

  oldTxt=btoa(oldTxt.substring(oldTxt.length*(1-15/27)) || '1'.padStart(oldTxt.length/2));
  elem.innerHTML=`<span style="font-size: .8em">${oldTxt}</span>`;

  var loopRunTime=(text.length>oldTxt.length)?text.length:oldTxt.length,
  runned=0;

  setInterval(()=>{
    if(runned<=loopRunTime){
      elem.innerHTML=text.substring(0,runned)+`<span style="font-size: .8em">${oldTxt.substring(runned)}</span>`;
      runned++;
    }        
  },50)
}