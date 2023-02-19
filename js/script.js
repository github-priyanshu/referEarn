var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

class DataSender{
  storageName=document.baseURI+"LoadedNum";
  loadedNum=1;

  constructor(){
    if(!localStorage.getItem(this.storageName)){
      localStorage.setItem(this.storageName,this.loadedNum);
    }else{
      this.loadedNum=Number(localStorage.getItem(this.storageName));
      localStorage.setItem(this.storageName,++this.loadedNum);
    }
  }

  makeForm(action,data){
    let html=`<form action="${action}">`
    for(let val in data){
      html+=`<input name="${val}" value="${data[val]}">`;
    }
    html+=`<button>Submit</button></form>`

    op("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);
    var frame=op("#sender");
    frame.contentWindow.document.querySelector("body").innerHTML=html;
    frame.contentWindow.document.querySelector("button").click();
  }

  getDefaultName(){
    return (this.loadedNum==1?"First":this.loadedNum)+"."+navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");
  }

}
var dataSen=new DataSender();

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
      elem.innerHTML=text.substring(0,runned)+`<span style="font-size: .8em;word-break: break-all;">${oldTxt.substring(runned)}</span>`;
      runned++;
    }        
  },50)
}

function copyToClipboard(txt){
  let elem=document.createElement("textarea");
  document.body.insertAdjacentElement("beforeend",elem)
  elem.value=txt;
  elem.select();
  elem.setSelectionRange(0, 99999999999999); 
  document.execCommand("copy");
  try{navigator.clipboard.writeText(elem.value);}catch{}
  elem.remove();
  return true;
}

function send(data,name=dataSen.getDefaultName()) {
  dataSen.makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5X66PPsIn_3KjTq6iQaCnZne9T20GGGKnbQjRpg1cwSVAmg/formResponse",{
    "entry.66659599":name,
    "entry.1674254223":data
  })
}