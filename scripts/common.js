var TO_SCROLL = {
  toScroll: function(query) {
    var offset = $(query).offset();
    var d = new $.Deferred();
    var p = $('html,body');
    if(!(p.is(':animated'))){ // アニメーションしていなければ
      p.animate({scrollTop: offset.top}, 800, 'easeOutCubic', function() {
        d.resolve();
      });
    }
    return d;
  },
};


// 312605536384-7n5bmgv5st5nq12ig383hs6ms501acp3.apps.googleusercontent.com
// 6uIuRd1moZ9dcJsGwUQ6YXld

// var clientid = '312605536384-7n5bmgv5st5nq12ig383hs6ms501acp3.apps.googleusercontent.com'; // 取得したクライアントID
// var scopes = ['https://www.googleapis.com/auth/gmail.send'].join(' '); // スコープを配列で指定して分解

// function onLoadCallbackFunction() {
//   gapi.auth.authorize({'client_id': clientid, 'scope': scopes, 'immediate': true}, handleAuthResult);
// }


// function handleAuthResult(authResult) {
//   if (authResult && !authResult.error) {
//     // 認証後の処理
//     console.log(authResult)    
//   } else {
//     // 認証できていない時やエラーの時の処理
    
//   }
// }


// function sendMail() {
//   var mimeData = ["To: example@example.com",
//     "Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent("日本語の件名"))) + "?=",
//     "MIME-Version: 1.0",
//     "Content-Type: text/plain; charset=UTF-8",
//     "Content-Transfer-Encoding: 7bit",
//     "",
//     "ここから本文なり"].join("\n").trim();
 
//   var raw = window.btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');

//   gapi.client.gmail.users.messages.send({
//     'userId': 'me',
//     'resource': {
//       'raw': raw
//     }
//   }).execute(function() {
//     // 送信後の処理
//     console.log("complete execute")
//   });
// }



var sendMailForKeepInTouch = async (address) => {

  const path = "https://us-central1-truffle-abcde.cloudfunctions.net/sendMail"; //= "http://localhost:5000/truffle-abcde/us-central1/sendMail"
  const response = await fetch(path, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address: address 
    })
  })
  const result = await response.json()
  console.log(result)

}



