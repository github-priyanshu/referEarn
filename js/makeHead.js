document.body.insertAdjacentHTML('afterbegin',`
  <style>
    /*head ui css*/
    .head {
      width: 100%;
      padding: 10px 20px 0;
      background: #222;
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
    }
    .head .fr.up .search > div.ico{
      border-radius: 0 99px 99px 0;
      width: 40px;
      padding: 10px;
    }
  </style>
  <div class="head flex c">
    <div class="fr up w100p flex">
      <div class="logo">
        <h1 ff="Offside">Our Logo</h1>
      </div>
      <div class="search flex">
        <input type="text" placeholder="Search...!!!" id='search'>
        <div class="lineMargin" w='1px' h='30px' bg='#aaa'></div>
        <div fill="#555" ico="search" class="ico flex"></div>
      </div>
    </div>
    <div class="fr down flex ">
      <div class="ini">/...</div><strong ff="Barriecito">This is my moto line</strong>
    </div>
  </div>
`);