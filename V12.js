(function(){
  var allowedDomain = 'chatjawwal.com';
  if (window.location.hostname.indexOf(allowedDomain) === -1) {
    console.warn('هذا السكربت محمي ولا يعمل إلا على موقع الملك');
    return;
  }

  var owner = ['\u0634\u0627\u062a','\u062c\u0648\u0627\u0644','\u0641\u0644\u0633\u0637\u064a\u0646'];
  function decode(arr){ return arr.join(''); }

  if (typeof window.jQuery === 'undefined'){
    console.error('jQuery مطلوب قبل تشغيل السكربت');
    return;
  }

  $(function(){
    if (!$('link[href*="Aref+Ruqaa"]').length) {
      $('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap">').appendTo('head');
    }
    if (!$('link[href*="Amiri"]').length) {
      $('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap">').appendTo('head');
    }

    $('<img src="/sico/1749004282145.jpg" style="width:100%; height:110px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">').insertBefore('.nav-tabs');

    $('<center><div><div style="background-color:#485B99;border-radius:5px;border-bottom:2px solid #ffffff;border-top:2px solid #ffffff;padding:6px 8px;margin:8px 0;"><span style="background-color:#fff;border-radius:15px;font-family:\'Aref Ruqaa\', serif; padding:2px 10px;color:#003300;">شات جوال فلسطين يرحب بكم</span></div></div></center>').insertBefore('#d2');

    $('body, div[style*="display: inline-block;direction: rtl;"], button, #u1, #u2, #u3, #pass1, #pass2').css('font-family','Aref Ruqaa, sans-serif');
    $('i, .fa, [class*="fa-"]').css('font-family','FontAwesome, sans-serif');

    var mainCss = "#wall .fitimg.u-pic.borderg{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0);margin-top:2px;margin-right:2px;}" +
      "#chats .fitimg.u-pic{height:52px!important;border:1px solid;border-radius:100px;margin-left:-10px;}" +
      "#chats img.ustat{width:11px!important;height:11px!important;min-height:0!important;margin-right:0;z-index:999999;border-radius:50px;margin-left:1px;margin-top:1px;border:1px solid #000;box-shadow:0 0 3px rgb(0,0,0),inset 0 0 4px rgb(0,0,0);}" +
      "#chats .d-flex.fl{background-color:#d4cfd2!important;background-size:cover;}" +
      "#chats .mini.u-msg.dots{color:#000!important;}" +
      "#chats{background-color:#d4cfd2!important;background-size:cover;}" +
      ".fl.ustat{border-radius:15px 0 !important;width:6px !important;margin:4px;}" +
      "@keyframes moveMessage{0%{transform:translateX(0px);}50%{transform:translateX(10px);}100%{transform:translateX(0px);}}" +
      "div.hand.corner{ text-align:center;border:1px solid #000;left:15px;width:90%;border-radius:10px;background:linear-gradient(90deg,#fff 0,#fff 10%,#fff 51%,#fff 89%,#fff 100%)!important; animation: moveMessage 3s ease-in-out infinite;}" +
      "ul.nav.nav-tabs.fl li a { text-align:center;padding:0px 0!important;border:0;color:#2E576E;border-radius:25px;background:#fff;}" +
      "ul.nav.nav-tabs.fl li { width:33.3%; margin-left:0;border-radius:50px;margin-bottom:5px!important;}" +
      "div#l2 input#pass1, div#l2 input#u2, div#l3 input#pass2, div#l3 input#u3 { padding:0;border-radius:25px;border:1px solid #dedede;height:27px!important;width:49%!important;float:right;margin:2px 3px 2px 0;text-align:center;}" +
      "div#l2 button, div#l1 button, div#l3 button { border-radius:24px!important;height:27px;padding:0 5px;width:98%;margin-left:4px;box-shadow:inset 0 0 0 rgb(255,255,255);margin-top:4px !important;}" +
      ".nav-tabs{background-color:#bfbfbfa6!important;border-radius:24px!important;margin-top:2px!important;float:right;padding:3px 1px;border-top:3px solid;border-color:#2E576E;height:30px!important;}" +
      "#u1{padding:0;margin-left:-6px;border-radius:25px!important;border:1px solid #dedede;height:27px!important;width:100%!important;margin-top:1px!important;}" +
      "#tlogins .fa.fa-eye{position:relative;margin:-30px 17px 2px 0px!important;color:#fff!important;}" +
      "#upro .light.fl.pro.break{background-color:#000 !important;background-image:linear-gradient(225deg,#e5e8f7 0%,#fff 29%,#fafafc 67%,#e5e8f7 100%);}" +
      "#sultan { color: #f00 !important; }" +
      "#room #mic { background-image: url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png); background-size:cover; border-radius:0px 6px 6px 6px !important; }" +
      "#users .nosel.ninr.fl.uzr.label.bg, #room .btn-primary, #d0 .label-primary { border-radius:0px 8px 0px 8px !important; border:1px solid #000; background-image:url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png); background-size:cover;color:#fff; }" +
      "#upro .modal-header.label-primary, #d0, .broadcasters, #rooms .label-primary, #users .nosel.ninr.fl.uzr.label.bg { border-radius:0px 8px 0px 8px !important; border:1px solid #000; background-image: url(https://www.chatjawwal.com/sico/1757937803636.gif); color:#fff; }" +
      "#users img.co{ border-radius:0px 8px 0px 8px !important; transform:rotate(20deg); margin-top:2px !important; }" +
      "#dpnl{ background-image:url(https://www.chatjawwal.com/sico/1757937554441.gif); background-size:100% !important; }" +
      "#mic .mic { text-align:center; width:56px; height:47px !important; background-color:#ffffff; border:2px solid #afbfc2 !important; border-radius:30% 1% !important; margin:1px !important; background-position:center !important; background-repeat:no-repeat !important; background-size:cover; }";

    if (!$('#chatjawwal-styles').length) {
      $('<style id="chatjawwal-styles">' + mainCss + '</style>').appendTo('head');
    }

    $('.u-msg').each(function(){ $(this).css({'max-height':'none','height':'auto'}); });

    if (!$('div[title="المتواجدين الآن"]').length) {
      $('<div style="display:none;" title="المتواجدين الآن"></div>').appendTo('body');
    }

    var typingContainer = $('<div class="fr borderg minix" style="color:gray;font-size:16px!important;font-family:\'Ruqaa\',sans-serif;height:26px;padding:2px;background-color:white;text-align:right;width:auto;padding-right:10px;display:inline-block;"><span id="typingEffect"></span></div>').insertBefore('div[title="المتواجدين الآن"]');

    var typingText = ' 1000';
    function startTyping(){
      var index = 0;
      var blinkInterval = null;
      function step(){
        if (index < typingText.length){
          $('#typingEffect').append(typingText.charAt(index));
          index++;
          setTimeout(step, 100);
          return;
        }
        $('#typingEffect').html('<a title="" href="#" style="color:gray; font-weight:bold;">'+typingText+'</a>');
        setTimeout(function(){
          blinkInterval = setInterval(function(){ $('#typingEffect').fadeOut(400).fadeIn(400); }, 800);
          setTimeout(function(){ clearInterval(blinkInterval); $('#typingEffect').html(''); startTyping(); }, 4000);
        }, 2000);
      }
      step();
    }
    startTyping();

    $('span.flex-grow-1.dots').css('font-family','\'Aref Ruqaa\', serif');

    $('button.btn.fr.btn-warning.fa-paint-brush').each(function(){
      $(this).text('لون');
      $(this).html('<span style="font-family:\'Aref Ruqaa\', serif;">'+$(this).text()+'</span>');
    });

    $('a[data-toggle="tab"]').each(function(){ var text = $(this).text(); $(this).html('<span style="font-family:\'Aref Ruqaa\', serif;">'+text+'</span>'); });

    $("<style>").prop("type","text/css").html("@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg { font-family: 'Amiri', serif !important; font-weight: bold !important; font-size: 15px !important; }").appendTo("head");

    var fonts = [
      {name: "الخط الافتراضي", css: ""},
      {name: "خط أميري", css: "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Amiri', serif !important; font-weight: bold !important; font-size: 15px !important; }"},
      {name: "خط الجزيرة", css: "@import url('https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Mirza', serif !important; font-weight: bold !important; font-size: 15px !important; }"},
      {name: "خط تجوال", css: "@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Tajawal', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
      {name: "خط آيفون", css: ".mini.u-msg, .u-msg.break { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
      {name: "خط الكوفي", css: "@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Reem Kufi', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
      {name: "خط اللطيف", css: "@import url('https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Lateef', cursive !important; font-weight: bold !important; font-size: 15px !important; }"}
    ];

    var currentFontIndex = 0;
    var fontStyleTag = $("<style id='chat-font-style'>").appendTo("head");
    var toggleFontButton = $('<label></label>').text('تغيير الخط إلى: ' + fonts[1].name).addClass('label tc border btn label-info fl').css({'background-color':'lightblue','color':'black','margin':'1px 4px','padding':'6px','width':'98%'}).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ').click(function(){
      currentFontIndex = (currentFontIndex + 1) % fonts.length;
      fontStyleTag.html(fonts[currentFontIndex].css || '');
      var nextFontName = fonts[(currentFontIndex + 1) % fonts.length].name;
      $(this).text(currentFontIndex === 0 ? "إعادة الخط الافتراضي" : 'تغيير الخط إلى: ' + nextFontName).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ');
    });

    if ($('#newoption .not_geri').length) {
      $('#newoption .not_geri').append(toggleFontButton);
    } else {
      $('body').append(toggleFontButton);
    }

    $('<marquee direction="right" width="100%" class="sharit" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="4" style="text-align: center;height: 23px;color: #10384f;font-family: \"Aref Ruqaa\", jazeera, FontAwesome;margin-right: -1px;margin-top: 5px;border-radius: 30px;width: 100%;padding: 1px;height:28px;">اكتشف متعة التواصل في بيئة آمنة وموثوقة. موقعنا يوفر لك الخصوصية الكاملة، مما يتيح لك التفاعل بصدق وراحة</marquee>').insertBefore('.bg.mini.fl');

    var sultanMenu = $('<center>\n    <div id="sultan13">\n        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px; border-radius: 0px 0px 0px 15px!important; height: 22px;" target="_blank" href="rules.html">القَـؤانينَ</a>\n        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px; height: 22px;" target="_blank" href="application.html">تطـبيق : جوال</a>\n        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px;" target="_blank" href="esh.html">اشـتراكات</a>\n        <a class="ahmed21 btn minix btn-primary" style="border-radius: 0px 0px 15px 0px!important; width: 85px; padding: 1px; height: 22px;" target="_blank" href="contact.html">الـَ شكـاإويء</a>\n    </div>\n</center>');
    sultanMenu.insertBefore('.nav.nav-tabs');

    $(".umod").remove();

    var tbox = document.getElementById('tbox');
    if (tbox) tbox.placeholder = " مـآ يلـفظ من قـول الا لـديه رقـيب عتيـد ";

    $("#uhtml .flex-grow-1").css("overflow","hidden");

    $('<div style=" color: #FC1717;text-align: center;margin-bottom: 10px; font-family:\'jazeera-light\', Fontawesome"> إعلانات للضروره فقط </div>').insertBefore('span.fl.fa.fa-send');

    if (!$('#chatjawwal-extra').length) {
      $('<style id="chatjawwal-extra">.bgf{background-color:currentColor;backdrop-filter:none!important;}</style>').appendTo('head');
    }

    $('.fl.ustat').css('width','3px');

    $('.fa.fa-user-plus').html('تسجيل ');

    $("[data-target='#wall']").attr('title',' فضلاً وليس امراً عدم ألكلام في ألحائط');

    $('#u1,#u2,#u3').attr('maxlength',7);

    $(document).on('cut copy paste', '#asjs, textarea#tbox', function(e){ e.preventDefault(); });

    if (typeof upro === 'function'){
      $('.fitimg.u-pic.borderg').css({'min-width':'60px','width':'60px','height':'54px','background-color':'transparent','background-image':'url("/site/msgpic.png")','text-shadow':'rgba(255, 255, 255, 0.6) 0px 0px 6px, rgba(0, 0, 255, 0.6) 0px 0px 8px','border':'none'}).on('click', function(){ upro(''); });
    } else {
      $('.fitimg.u-pic.borderg').css({'min-width':'60px','width':'60px','height':'54px','background-color':'transparent','background-image':'url("/site/msgpic.png")','text-shadow':'rgba(255, 255, 255, 0.6) 0px 0px 6px, rgba(0, 0, 255, 0.6) 0px 0px 8px','border':'none'});
    }

    $(document).on('contextmenu','img', function(){ return false; });

    $('<style id="chat-chats-bg">#chats{background-color:#d4cfd2 !important;}</style>').appendTo('head');

    $('<style id="chat-layout">ul.nav.nav-tabs.fl li a{ text-align:center;} </style>').appendTo('head');

    if ($('meta[name="viewport"]').length === 0){ $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">'); }

    var desktopMode = false;
    var desktopButton = $('<label></label>').text('عرض سطح المكتب').addClass('label tc border btn label-info fl').css({'background-color':'ghostwhite','color':'black','margin':'1px 4px','padding':'6px','width':'98%'}).prepend('<span class="fl fa fa-desktop" style="font-family: FontAwesome, sans-serif;"></span> ').click(function(){
      if (desktopMode){
        $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
        $(this).text('عرض سطح المكتب').prepend('<span class="fl fa fa-desktop" style="font-family: FontAwesome, sans-serif;"></span> ');
        desktopMode = false;
        showNotification('تم العودة إلى الوضع الطبيعي');
      } else {
        $('meta[name="viewport"]').attr('content','width=1024');
        $(this).text('عرض الهاتف').prepend('<span class="fl fa fa-mobile" style="font-family: FontAwesome, sans-serif;"></span> ');
        desktopMode = true;
        showNotification('تم تحويل العرض إلى وضع الكمبيوتر');
      }
    });

    if ($('#newoption .not_geri').length){ $('#newoption .not_geri').append(desktopButton); } else { $('body').append(desktopButton); }

    function showNotification(message){ $('#notification').remove(); var notification = $('<div id="notification" style="position:fixed;top:20px;left:50%;transform:translateX(-50%);background-color:#fc1717cc;color:white;padding:10px 20px;border-radius:5px;font-family:\'jazeera-light\', Fontawesome, sans-serif;z-index:9999;display:none;box-shadow:0 0 10px #fc1717;">'+message+'</div>'); $('body').append(notification); notification.fadeIn(300); setTimeout(function(){ notification.fadeOut(300,function(){ notification.remove(); }); },3000); }

    console.log(decode(owner) + " \uD83D\uDD12 تم تشفير وحماية السكربت بالكامل");
  });
})();
