
riot.tag2('app', '<header></header> <div class="wrap-content"> <content></content> <modal-content></modal-content> </div>', 'app,[data-is="app"]{display:block;width:100%;height:100vh} app .wrap-content,[data-is="app"] .wrap-content{position:relative;display:block;width:100%;height:100%;overflow-x:hidden} app .wrap-content content,[data-is="app"] .wrap-content content{display:block;position:absolute;z-index:1;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;left:0;background:#fff;transition:all .4s;opacity:0} app .wrap-content .not-opacity,[data-is="app"] .wrap-content .not-opacity{opacity:1} app .wrap-content modal-content,[data-is="app"] .wrap-content modal-content{display:block;position:absolute;z-index:2;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;background:#fff;transition:all .4s;opacity:0;left:100%} app .wrap-content .show,[data-is="app"] .wrap-content .show{opacity:1;left:0}', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      }
    };
});

riot.tag2('item-article-card', '<a class="wrap-item" href="{opts.content.href}" target="brank"> <div class="wrap-img f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts py8 pl8"> <p class="title mb4">{opts.content.title}</p> <p class="date">{opts.content.date}</p> </div></a>', 'item-article-card,[data-is="item-article-card"]{display:block;width:48%;background:#ffffff} item-article-card .wrap-item,[data-is="item-article-card"] .wrap-item{width:100%} item-article-card .wrap-item .wrap-img,[data-is="item-article-card"] .wrap-item .wrap-img{overflow:hidden} item-article-card .wrap-item .wrap-texts .date,[data-is="item-article-card"] .wrap-item .wrap-texts .date{font-weight:lighter;color:#999999}@media only screen and (max-width : 600px){ item-article-card,[data-is="item-article-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-authority-card', '<div class="wrap-item px18 py12"> <div class="wrap-name pb12 f fm"> <div class="wrap-img mr16 f fh"><img riot-src="{opts.content.src}"></div> <p>{opts.content.name}</p> </div> <div class="wrap-text pt12"> <p>{opts.content.text}</p> </div> </div>', 'item-authority-card,[data-is="item-authority-card"]{display:block;width:48%;background:#ffffff;border-radius:3px}@media only screen and (max-width : 600px){ item-authority-card,[data-is="item-authority-card"]{width:100%}} item-authority-card .wrap-item .wrap-name,[data-is="item-authority-card"] .wrap-item .wrap-name{border-bottom:solid .8px rgba(155,155,155,0.4)} item-authority-card .wrap-item .wrap-name .wrap-img,[data-is="item-authority-card"] .wrap-item .wrap-name .wrap-img{width:48px} item-authority-card .wrap-item .wrap-name .wrap-img img,[data-is="item-authority-card"] .wrap-item .wrap-name .wrap-img img{width:100%} item-authority-card .wrap-item .wrap-text p,[data-is="item-authority-card"] .wrap-item .wrap-text p{font-weight:lighter;line-height:1.4}', 'class="mb24"', function(opts) {
});

riot.tag2('item-cta-button', '<a class="px18 py12" href="{href}" target="brank">{label}</a>', 'item-cta-button,[data-is="item-cta-button"]{display:block} item-cta-button a,[data-is="item-cta-button"] a{cursor:pointer;border-radius:3px;letter-spacing:1px;color:#ffffff;background:#FF6666}', '', function(opts) {
    this.label = this.opts.content.label
    this.href = this.opts.content.href
});

riot.tag2('item-h2', '<div class="wrap-item"> <h2 class="mb30">{opts.content}</h2> </div>', 'item-h2,[data-is="item-h2"]{width:100%} item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{color:#2a2a2a;text-align:center;font-size:26px;font-weight:500}', '', function(opts) {
});

riot.tag2('item-how-card', '<div class="wrap-item"> <div class="wrap-img mb20 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts"> <p class="title mb12">{opts.content.title}</p> <p class="sentence">{opts.content.text}</p> </div> </div>', 'item-how-card,[data-is="item-how-card"]{display:block;width:30%} item-how-card .wrap-item,[data-is="item-how-card"] .wrap-item{width:100%;height:100%} item-how-card .wrap-item .wrap-img img,[data-is="item-how-card"] .wrap-item .wrap-img img{width:40%;border-radius:50%} item-how-card .wrap-item .wrap-texts,[data-is="item-how-card"] .wrap-item .wrap-texts{width:90%;margin:0 auto} item-how-card .wrap-item .wrap-texts .title,[data-is="item-how-card"] .wrap-item .wrap-texts .title{text-align:center;font-size:14px;color:#2a2a2a} item-how-card .wrap-item .wrap-texts .sentence,[data-is="item-how-card"] .wrap-item .wrap-texts .sentence{text-align:center;font-size:14px;color:#999999;font-weight:lighter;line-height:1.4;width:80%;margin:0 auto}@media only screen and (max-width : 600px){ item-how-card,[data-is="item-how-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-menu-icon-sp', '<div class="wrap-icon f fh flex-wrap"> <div class="a bar"></div> <div class="b bar"></div> <div class="c bar"></div> </div>', 'item-menu-icon-sp,[data-is="item-menu-icon-sp"]{display:block;position:relative;width:48px;height:48px;z-index:301} item-menu-icon-sp .wrap-icon,[data-is="item-menu-icon-sp"] .wrap-icon{width:100%;height:100%} item-menu-icon-sp .wrap-icon .bar,[data-is="item-menu-icon-sp"] .wrap-icon .bar{display:block;width:80%;height:2px;border-radius:3px;background:#2a2a2a;transition-property:all;transition-duration:400ms;transition-delay:0s;transition-timing-function:ease} item-menu-icon-sp .wrap-icon .a,[data-is="item-menu-icon-sp"] .wrap-icon .a{transform:translate(0, 6px) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .b,[data-is="item-menu-icon-sp"] .wrap-icon .b{transform:translate(0, 0) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .c,[data-is="item-menu-icon-sp"] .wrap-icon .c{transform:translate(0, -6px) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .a-active,[data-is="item-menu-icon-sp"] .wrap-icon .a-active{transform:translate(0, 16px) rotateZ(45deg)} item-menu-icon-sp .wrap-icon .b-active,[data-is="item-menu-icon-sp"] .wrap-icon .b-active{transform:translate(-40px, 0) rotateZ(0deg);opacity:0} item-menu-icon-sp .wrap-icon .c-active,[data-is="item-menu-icon-sp"] .wrap-icon .c-active{transform:translate(0, -16px) rotateZ(-45deg)}', 'class="s-show"', function(opts) {
    this.on('mount', function(){
      $('.wrap-icon, .overlay-sp, atom-menu-li-sp').click(function() {
        $('.a').toggleClass('a-active');
        $('.b').toggleClass('b-active');
        $('.c').toggleClass('c-active');

        $('menu-sp').toggleClass('active');
        $('.overlay-sp').fadeToggle(400);

      });
    });
});

riot.tag2('item-what-card', '<div class="wrap-item py30"> <div class="wrap-img mb20 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts"> <h2 class="title mb12">{opts.content.title}</h2> <p class="sentence">{opts.content.text}</p> </div> </div>', 'item-what-card,[data-is="item-what-card"]{display:block;width:32%;background:#ffffff} item-what-card .wrap-item,[data-is="item-what-card"] .wrap-item{width:100%;height:100%} item-what-card .wrap-item .wrap-img img,[data-is="item-what-card"] .wrap-item .wrap-img img{width:60%} item-what-card .wrap-item .wrap-texts,[data-is="item-what-card"] .wrap-item .wrap-texts{width:90%;margin:0 auto} item-what-card .wrap-item .wrap-texts .title,[data-is="item-what-card"] .wrap-item .wrap-texts .title{text-align:center;font-size:16px;color:#2a2a2a} item-what-card .wrap-item .wrap-texts .sentence,[data-is="item-what-card"] .wrap-item .wrap-texts .sentence{font-size:16px;color:#2a2a2a;font-weight:lighter;line-height:1.6}@media only screen and (max-width : 600px){ item-what-card,[data-is="item-what-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-why-points-point', '<div class="wrap-item f flex-around"> <div class="wrap-img mr12 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-text f fh"> <div> <p class="title mb12">{opts.content.title}</p> <p class="text">{opts.content.text}</p> </div> </div> </div>', 'item-why-points-point,[data-is="item-why-points-point"]{display:block;width:100%;border-radius:3px;background:#ffffff} item-why-points-point .wrap-item .wrap-img,[data-is="item-why-points-point"] .wrap-item .wrap-img{width:300px} item-why-points-point .wrap-item .wrap-img img,[data-is="item-why-points-point"] .wrap-item .wrap-img img{width:80%} item-why-points-point .wrap-item .wrap-text .title,[data-is="item-why-points-point"] .wrap-item .wrap-text .title{font-weight:bold} item-why-points-point .wrap-item .wrap-text .text,[data-is="item-why-points-point"] .wrap-item .wrap-text .text{line-height:1.4}', 'class="px20 py32 mb12"', function(opts) {
});

riot.tag2('module-about', '<div class="wrap-module py50"> <h2 class="lead mb24">About</h2> <div class="module-content"> <p class="mb14">Truffle AIは「このお店で働きたいな」という気持ちを確実に面接実施までつなげます。</p> <div class="wrap-concept-movie"> <iframe src="https://player.vimeo.com/video/344598381" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> </div><span class="caption">Truffle AIを使うと...</span> </div> </div>', 'module-about,[data-is="module-about"]{display:block;width:100%;background:#f5f5f5} module-about .wrap-module,[data-is="module-about"] .wrap-module{width:90%;max-width:980px;margin:0 auto} module-about .wrap-module h2,[data-is="module-about"] .wrap-module h2{text-align:center;font-size:32px} module-about .wrap-module .module-content p,[data-is="module-about"] .wrap-module .module-content p{font-size:18px;text-align:center} module-about .wrap-module .module-content .wrap-concept-movie,[data-is="module-about"] .wrap-module .module-content .wrap-concept-movie{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden} module-about .wrap-module .module-content .wrap-concept-movie iframe,[data-is="module-about"] .wrap-module .module-content .wrap-concept-movie iframe{border:none;position:absolute;top:0;left:0;width:100%;height:100%} module-about .wrap-module .module-content .caption,[data-is="module-about"] .wrap-module .module-content .caption{display:block;text-align:center}', '', function(opts) {
});

riot.tag2('module-article', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-article-card each="{item in opts.content.cards}" content="{item}"></item-article-card> </div> </div>', 'module-article,[data-is="module-article"]{display:block;width:100%;background:#f5f5f5} module-article .wrap-module,[data-is="module-article"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-article .wrap-module .wrap-card,[data-is="module-article"] .wrap-module .wrap-card{width:80%;margin:0 auto}', 'class="py40"', function(opts) {
    this.on('mount', function(){
      var cardNum = $('item-article-card').length;
      if(cardNum > 2){
        for(var i=0; i<cardNum; i++){
          $('item-article-card')[i].classList.add('mb32');
        }
      }
    });
});

riot.tag2('module-authority', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-authority-card each="{item in opts.content.cards}" content="{item}"></item-authority-card> </div> </div>', 'module-authority,[data-is="module-authority"]{display:block;width:100%;background:#e0e0e0} module-authority .wrap-module,[data-is="module-authority"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-authority .wrap-module .wrap-card,[data-is="module-authority"] .wrap-module .wrap-card{width:80%;margin:0 auto}@media only screen and (max-width : 600px){ module-authority .wrap-module .wrap-card,[data-is="module-authority"] .wrap-module .wrap-card{width:90%}}', 'class="py40"', function(opts) {
});

riot.tag2('module-hiro', '<div class="wrap-module f flex-around"> <div class="wrap-explain f fm"> <div class="explain"> <div class="texts mb50"> <p each="{item in texts}">{item}</p> </div> <item-cta-button content="{cta}"></item-cta-button> </div> </div> <div class="wrap-img f fm s-hide"><img src="./img/contents/iPhone.png"></div> </div> <div class="bg"></div>', 'module-hiro,[data-is="module-hiro"]{position:relative;display:block;width:100%;height:80vh} module-hiro .wrap-module,[data-is="module-hiro"] .wrap-module{position:relative;width:100%;height:100%;left:0;top:0;z-index:10;margin:0 auto;width:90%} module-hiro .wrap-module .wrap-explain,[data-is="module-hiro"] .wrap-module .wrap-explain{height:100%;padding-top:48px} module-hiro .wrap-module .wrap-explain .explain .texts p,[data-is="module-hiro"] .wrap-module .wrap-explain .explain .texts p{font-size:32px;color:#FFF} module-hiro .wrap-module .wrap-img,[data-is="module-hiro"] .wrap-module .wrap-img{padding-top:48px;width:300px;height:100%} module-hiro .bg,[data-is="module-hiro"] .bg{position:absolute;display:block;width:100%;height:100%;left:0;top:0;filter:brightness(.8);background-image:url(img/contents/hiro.jpg);background-position:center center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:#ffffff}@media only screen and (max-width : 600px){ module-hiro .wrap-module,[data-is="module-hiro"] .wrap-module{display:block} module-hiro .wrap-module .wrap-explain,[data-is="module-hiro"] .wrap-module .wrap-explain{height:100%;padding-top:48px} module-hiro .wrap-module .wrap-explain .explain .texts p,[data-is="module-hiro"] .wrap-module .wrap-explain .explain .texts p{font-size:22px}}', '', function(opts) {
    this.texts = [
      "面接時間に待ちぼうけ。",
      "そんな経験はありませんか？"
    ]

    this.cta = {
      label: "今すぐはじめる",
      href: "https://app.truffle.ai/"
    }
});

riot.tag2('module-how', '<div class="wrap-module f flex-between flex-wrap"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-how-card each="{item in opts.content.cards}" content="{item}"></item-how-card> </div> </div>', 'module-how,[data-is="module-how"]{display:block;width:100%;background:#f5f5f5} module-how .wrap-module,[data-is="module-how"] .wrap-module{margin:0 auto;width:90%;max-width:1048px}', 'class="py40"', function(opts) {
    this.on('mount', function(){
      var cardNum = $('item-how-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-how-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-price-table', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-table"> <table> <thead> <th each="{th in opts.content.table.thead}">{th}</th> </thead> <tbody> <tr each="{trs in opts.content.table.trs}"> <td each="{td in trs}"> <p if="{td.text}">{td.text}</p> <div class="img f fh"><img if="{td.check}" src="./img/icon/check.svg"></div> </td> </tr> </tbody> </table> </div> </div>', 'module-price-table,[data-is="module-price-table"]{display:block;width:100%;background:#e0e0e0} module-price-table .wrap-module,[data-is="module-price-table"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-price-table .wrap-module .wrap-table,[data-is="module-price-table"] .wrap-module .wrap-table{margin:0 auto} module-price-table .wrap-module .wrap-table table,[data-is="module-price-table"] .wrap-module .wrap-table table{width:100%;background:#ffffff;border-radius:3px;overflow:hidden} module-price-table .wrap-module .wrap-table table tr td,[data-is="module-price-table"] .wrap-module .wrap-table table tr td{text-align:center;font-weight:lighter} module-price-table .wrap-module .wrap-table table,[data-is="module-price-table"] .wrap-module .wrap-table table,module-price-table .wrap-module .wrap-table th,[data-is="module-price-table"] .wrap-module .wrap-table th,module-price-table .wrap-module .wrap-table td,[data-is="module-price-table"] .wrap-module .wrap-table td{border-collapse:collapse;border:.5px solid rgba(0,0,0,0.1);line-height:1.5;padding:6px}', 'class="py40"', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('module-price', '<div class="wrap-module py40"> <h2 class="mb24">Price</h2> <div class="wrap-price py10"> <div class="mb20" each="{item in content}"> <h3 class="mb8">{item.title}</h3> <p>{item.text}</p> </div> </div> <div class="mt40 f fc"> <item-cta-button content="{cta}"></item-cta-button> </div> </div>', 'module-price,[data-is="module-price"]{display:block;width:100%;background:#ffffff} module-price .wrap-module,[data-is="module-price"] .wrap-module{width:90%;max-width:880px;margin:0 auto} module-price .wrap-module h2,[data-is="module-price"] .wrap-module h2{text-align:center;font-size:32px}', '', function(opts) {
    this.content = [
      {
        title: '初期費用ゼロ円',
        text: '利用開始にかかる費用はございません。無理なく低コストで導入できます。',
      },
      {
        title: '成果報酬制',
        text: '面接日程が確定した時にのみ、1件5000円が課金されるので無理のない採用活動ができます。',
      }
    ]

    this.cta = {
      label: "Truffleをはじめる",
      href: "https://app.truffle.ai/"
    }

    this.on('mount', function(){
      var cardNum = $('item-what-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-what-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-problem', '<div class="wrap-module py40"> <h2 class="lead mb24">Truffleの特徴</h2> <div class="wrap-problem-item f flex-between mb30" each="{item in contents}"> <img class="mr40" riot-src="{item.src}"> <div class="wrap-explain f fm"> <div> <h3 class="mb12">{item.title}</h3> <p>{item.explain}</p> </div> </div> </div> <div class="mt40 f fc"> <item-cta-button content="{cta}"></item-cta-button> </div> </div>', 'module-problem,[data-is="module-problem"]{display:block;width:100%;background:#ffffff} module-problem .wrap-module,[data-is="module-problem"] .wrap-module{width:90%;max-width:880px;margin:0 auto} module-problem .wrap-module h2,[data-is="module-problem"] .wrap-module h2{text-align:center;font-size:32px} module-problem .wrap-module .wrap-problem-item img,[data-is="module-problem"] .wrap-module .wrap-problem-item img{width:240px;border-radius:50%} module-problem .wrap-module .wrap-problem-item .wrap-img,[data-is="module-problem"] .wrap-module .wrap-problem-item .wrap-img{overflow:hidden} module-problem .wrap-module .wrap-problem-item .wrap-img img,[data-is="module-problem"] .wrap-module .wrap-problem-item .wrap-img img{width:240px;border-radius:50%} module-problem .wrap-module .wrap-problem-item .wrap-explain h3,[data-is="module-problem"] .wrap-module .wrap-problem-item .wrap-explain h3{font-size:22px}@media only screen and (max-width : 600px){ module-problem .wrap-problem-item,[data-is="module-problem"] .wrap-problem-item{display:block;margin-bottom:48px} module-problem .wrap-problem-item .wrap-img,[data-is="module-problem"] .wrap-problem-item .wrap-img{width:100%;margin-right:0 !important;margin-bottom:24px} module-problem .wrap-problem-item .wrap-img img,[data-is="module-problem"] .wrap-problem-item .wrap-img img{width:160px !important} module-problem .wrap-problem-item img,[data-is="module-problem"] .wrap-problem-item img{left:50%;margin-left:-120px;position:relative;margin-bottom:24px} module-problem .wrap-problem-item .wrap-explain h3,[data-is="module-problem"] .wrap-problem-item .wrap-explain h3{text-align:center}}', '', function(opts) {
    this.contents = [
      {
        index: "Feature 1",
        title: "お店に親しみのある候補者を採用",
        explain: 'お店にAIの応募窓口を設置できるので、すでにあなたの店舗が好きな"お店のファン"から応募者を獲得できます。',
        src: "./img/contents/features/1.jpg"
      },
      {
        index: "Feature 2",
        title: "面接の実施率アップ",
        explain: "候補者が興味を持った瞬間に面接日時が決まり、その後もリマインドなどにより、応募者を面接当日までサポートするため、より確実に面接を実施することが可能です。",
        src: "./img/contents/features/2.jpg"
      },
      {
        index: "Feature 3",
        title: "アルバイト募集のためのコストを削減",
        explain: "Truffle AIは導入の際の初期費用もかからず、料金も成果報酬なので安価に長期の募集をかけることができます。",
        src: "./img/contents/features/3.jpg"
      }
    ]

    this.cta = {
      label: "Truffleを使ってみる",
      href: "https://app.truffle.ai/"
    }
});

riot.tag2('module-user-flow', '<div class="wrap-module py40"> <div class="wrap-module-content f flex-between"> <div class="wrap-user-flow-item mb20" each="{item in content}"> <h3 class="mb12">{item.title}</h3><img riot-src="{item.src}"> </div> </div> <div class="f fc mt10 pb10"> <item-cta-button content="{cta}"></item-cta-button> </div> </div>', 'module-user-flow,[data-is="module-user-flow"]{display:block;width:100%;background:#f5f5f5} module-user-flow .wrap-module,[data-is="module-user-flow"] .wrap-module{width:90%;max-width:980px;margin:0 auto} module-user-flow .wrap-module h2,[data-is="module-user-flow"] .wrap-module h2{text-align:center;font-size:32px} module-user-flow .wrap-module .wrap-user-flow-item,[data-is="module-user-flow"] .wrap-module .wrap-user-flow-item{width:32%} module-user-flow .wrap-module .wrap-user-flow-item h3,[data-is="module-user-flow"] .wrap-module .wrap-user-flow-item h3{text-align:center}@media only screen and (max-width : 600px){ module-user-flow .wrap-module-content,[data-is="module-user-flow"] .wrap-module-content{display:block} module-user-flow .wrap-module-content .wrap-user-flow-item,[data-is="module-user-flow"] .wrap-module-content .wrap-user-flow-item{width:90%;margin:0 auto}}', '', function(opts) {
    this.content = [
      {
        title: '1. 求職者がQR/URLを読み込む',
        src: './img/contents/user-flow/1.png',
      },
      {
        title: '2. AIが面接日時の設定を完了',
        src: './img/contents/user-flow/2.png',
      },
      {
        title: '3. 面接設定完了の連絡を待つだけ',
        src: './img/contents/user-flow/3.png',
      }
    ]

    this.cta = {
      label: "利用開始",
      href: "https://app.truffle.ai/"
    }

    this.on('mount', function(){
      var cardNum = $('item-what-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-what-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-what', '<div class="wrap-module py40"> <h2 class="mb24">Truffleの機能</h2> <div class="wrap-card f flex-between flex-wrap"> <item-what-card each="{item in content}" content="{item}"></item-what-card> </div> </div>', 'module-what,[data-is="module-what"]{display:block;width:100%;background:#f5f5f5} module-what .wrap-module,[data-is="module-what"] .wrap-module{width:90%;max-width:880px;margin:0 auto} module-what .wrap-module h2,[data-is="module-what"] .wrap-module h2{text-align:center;font-size:32px}', '', function(opts) {
    this.content = [
      {
        src: './img/contents/functions/notification.jpg',
        title: '1. 店舗内の応募者を検知',
        text: '応募に興味を持ったお客様が店内のQRコードを読みこむと、メールでお知らせ。応募前であっても、候補者とさりげなくコミュニケーションが取れます。',
      },
      {
        src: './img/contents/functions/clock.jpg',
        title: '2. 面接日時の調整',
        text: '候補者が応募に興味を持った瞬間に応募を受け付け、面接日程を確定するので候補者を逃しません。',
      },
      {
        src: './img/contents/functions/mail.jpg',
        title: '3. 面接のリマインド',
        text: '面接日程が確定後も、こまめなリマインダーで応募者を面接まで誘導。より面接の実施率が向上します。',
      }
    ]

    this.cta = {
      label: "利用開始",
      href: "https://app.truffle.ai/"
    }

    this.on('mount', function(){
      var cardNum = $('item-what-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-what-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-why-points', '<div class="wrap-module"> <p class="lead mb24">{content.lead_text}</p> <item-why-points-point each="{item in content.contents}" content="{item}"></item-why-points-point> </div>', 'module-why-points,[data-is="module-why-points"]{display:block;width:100%;background:#f5f5f5} module-why-points .wrap-module,[data-is="module-why-points"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-why-points .wrap-module .lead,[data-is="module-why-points"] .wrap-module .lead{text-align:center;font-size:32px}', 'class="py40"', function(opts) {
this.content = Contents.why_points;
});

riot.tag2('module-why', '<div class="wrap-module py40"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-img mb24 py50 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-text f fc"> <div> <p class="mb8" each="{item in opts.content.explanation}">{item}</p> </div> </div> </div>', 'module-why,[data-is="module-why"]{display:block;width:100%;background:#ffffff} module-why .wrap-module,[data-is="module-why"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-why .wrap-module .wrap-img img,[data-is="module-why"] .wrap-module .wrap-img img{object-fit:cover;max-width:300px} module-why .wrap-module .wrap-text div,[data-is="module-why"] .wrap-module .wrap-text div{display:inline-block;max-width:640px} module-why .wrap-module .wrap-text div p,[data-is="module-why"] .wrap-module .wrap-text div p{color:#2a2a2a;font-weight:lighter;line-height:1.4}', '', function(opts) {
});

riot.tag2('page-about', '<div class="warp-page"> <h2>About</h2> </div>', 'page-about .warp-page,[data-is="page-about"] .warp-page{display:block;width:100%;height:100%;background:#FF00FF}', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('page-chat', '<div class="wrap-page pt48"> <iframe riot-src="{src}"></iframe> </div>', 'page-chat .wrap-page,[data-is="page-chat"] .wrap-page{display:block;width:100%;height:100%} page-chat .wrap-page iframe,[data-is="page-chat"] .wrap-page iframe{width:100%;height:100%;border:none}', '', function(opts) {
    var self = this;

    this.on('mount', function(){
      $('modal-content').addClass('show');
      $('modal-content').scrollTop(0);

      riot.enableFadeIn = false;

      $(document).on("custom:close", function() {
        $('modal-content').removeClass('show');
        self.unmount(true);
      });
    });

    this.src = ChatcenterHrefForContact;
});

riot.tag2('page-test', '<div class="wrap-page"></div> <h2>test</h2>', 'page-test .wrap-page,[data-is="page-test"] .wrap-page{display:block;width:100%;height:100%;background:#00FFFF}', '', function(opts) {
    var self = this;

    this.on('mount', function(){
      $('modal-content').addClass('show');
      $('modal-content').scrollTop(0);

      riot.enableFadeIn = false;

      $(document).on("custom:close", function() {
        $('modal-content').removeClass('show');
        self.unmount(true);
      });
    });
});

riot.tag2('page-top', '<div class="wrap-page"> <module-hiro></module-hiro> <module-about></module-about> <module-user-flow></module-user-flow> <module-problem></module-problem> <module-what></module-what> <module-price></module-price> <footer></footer> </div> <float-action-button></float-action-button>', 'page-top .wrap-page,[data-is="page-top"] .wrap-page{display:block;width:100%;height:100%;background:#FFFFFF}', '', function(opts) {
    var self = this;

    this.contents = Contents;
    console.log(this.contents)
    this.on('mount', function(){

    });
});

riot.tag2('temp', '', '', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('float-action-button', '<a class="f fh" href="#chat"><img src="./img/icon/chat.svg"></a>', 'float-action-button,[data-is="float-action-button"]{position:fixed;z-index:10;display:block;width:58px;height:58px;right:12px;bottom:12px;border-radius:50%;background:#ffcc33;filter:drop-shadow(1px 1px 1px rgba(100,100,100,0.6))} float-action-button a,[data-is="float-action-button"] a{width:100%;height:100%} float-action-button a img,[data-is="float-action-button"] a img{width:34px;height:34px}', '', function(opts) {
});

riot.tag2('footer', '<div class="wrap-menu pt40 pb10 f flex-around flex-wrap"> <div class="mr12 mb12 f fc" each="{item in menu}"><a href="{item.href}" target="brank">{item.label}</a></div> </div> <div class="wrap-copy f fh"> <p class="copy">© 2011-2019 AppSocially Inc.</p> </div>', 'footer,[data-is="footer"]{display:block;width:100%;background:#ffcc33} footer .wrap-menu,[data-is="footer"] .wrap-menu{width:90%;margin:0 auto;max-width:680px} footer .wrap-menu div,[data-is="footer"] .wrap-menu div{width:20%} footer .wrap-menu div a,[data-is="footer"] .wrap-menu div a{display:inline-block;color:#2a2a2a;font-weight:lighter} footer .wrap-copy,[data-is="footer"] .wrap-copy{width:100%;height:80px} footer .wrap-copy .copy,[data-is="footer"] .wrap-copy .copy{text-align:center;color:#2a2a2a;font-weight:lighter;font-size:14px;letter-spacing:1.2px}', '', function(opts) {
    this.menu = FooterMenuContent;

    this.copy = CopyRight;
});

riot.tag2('header', '<div class="wrap-header f flex-between"><a class="wrap-logo f fm" href="./"> <p>Truffle AI</p> </a> <div class="wrap-menu-pc s-hide f flex-between fm"><a class="{item.func} item ml16" each="{item in contents}" href="{item.href}" target="{item.target}">{item.label}</a></div> <div class="wrap-icon-sp s-show"> <div class="overlay-sp"></div> <item-menu-icon-sp></item-menu-icon-sp> <menu-sp></menu-sp> </div> </div>', 'header,[data-is="header"]{position:fixed;z-index:100;display:block;width:100%;height:48px;top:0;background:#ffcc33} header .wrap-header,[data-is="header"] .wrap-header{width:90%;height:100%;max-width:880px;margin:0 auto} header .wrap-header .wrap-logo,[data-is="header"] .wrap-header .wrap-logo{cursor:pointer} header .wrap-header .wrap-logo p,[data-is="header"] .wrap-header .wrap-logo p{color:#2a2a2a;font-size:24px;font-weight:bold;letter-spacing:.6px} header .wrap-header .wrap-menu-pc .item,[data-is="header"] .wrap-header .wrap-menu-pc .item{letter-spacing:1.4px;color:#2a2a2a;font-weight:normal;cursor:pointer} header .wrap-header .overlay-sp,[data-is="header"] .wrap-header .overlay-sp{display:none;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.4);cursor:pointer;z-index:90}', '', function(opts) {
    this.contents = MenuContent;

    this.logoSrc = MenuLogo;

    this.on('mount', function(){

      $('.to-top').click(function() {
        if(window.location.href.match('chat')!=null){
          $(document).trigger("custom:close");
          window.location.href='./'
        }else{
          $("content").animate({scrollTop:0}, 800, 'easeOutCubic');
        }
      });

      $('.to-contact').click(function() {
        window.location.href = '#/chat';
      });

    });
});

riot.tag2('menu-sp', '<div class="wrap-menu-sp"> <div class="menu mt50"><a class="{item.func} item mb16 px24" each="{item in contents}" href="{item.href}" target="{item.target}" onclick="{closeSpMenu}">{item.label}</a></div> </div>', 'menu-sp,[data-is="menu-sp"]{position:fixed;z-index:91;display:block;width:200px;height:100%;right:-200px;top:0;background:#ffcc33;transition-property:all;transition-duration:400ms;transition-delay:0s;transition-timing-function:ease} menu-sp.active,[data-is="menu-sp"].active{right:0 !important} menu-sp .wrap-menu-sp .menu a,[data-is="menu-sp"] .wrap-menu-sp .menu a{display:block;color:#2a2a2a;letter-spacing:1.4px;font-weight:normal}', '', function(opts) {
    this.contents = MenuContent;

    this.closeSpMenu = function(e) {
      $('.a').toggleClass('a-active');
      $('.b').toggleClass('b-active');
      $('.c').toggleClass('c-active');

      $('menu-sp').toggleClass('active');
      $('.overlay-sp').fadeToggle(400);
    }

    this.on('mount', function(){

    });
});