(function(){
  // فحص الدومين - عدل هنا إلى دومين موقعك فقط
  var allowedDomain = 'chatjawwal.com';
  if(window.location.hostname.indexOf(allowedDomain) === -1){
    console.warn('هذا السكربت محمي ولا يعمل إلا على موقع الملك');
    return;
  }

  // نص توقيع "الملك" مموه
  var owner = ['\u0634\u0627\u062a','\u062c\u0648\u0627\u0644','\u0641\u0644\u0633\u0637\u064a\u0646']; // شات جوال فلسطين

  // فك التشفير الأساسي للنصوص
  function decode(arr){
    return arr.join('');
  }

  // الكود المشفر والمضغوط (تم تصغيره مع بعض التمويه)
  var _0xabc = function(){
    $('<img src="/sico/1749004282145.jpg" style="width:100%; height:110px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">').insertBefore('.nav-tabs');
    $(document).ready(function(){
      $('button.btn.fr.btn-warning.fa.fa-paint-brush').text('لون');
    });
    $('<center><div><div width="99.5%" style="background-image:url;color: #485B99;border-radius: 5px 5px 5px 5px;border-bottom: 2px solid #ffffff;border-top: 2px solid #ffffff;padding-bottom: 2px!important;"><font style="background-color: #fff;border-radius: 15px 15px 15px 15px;font-family: \'Aref Ruqaa\', serif; padding: 2px 10px 2px 10px;margin: 7px 10px 7px 10px;" color="#003300">شات جوال فلسطين يرحب بكم</font></div></div></center>').insertBefore('#d2');
    $(document).ready(function(){
      $('head').append('<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap" rel="stylesheet">');
      $('body, div[style*="display: inline-block;direction: rtl;"], button, #u1, #u2, #u3, #pass1, #pass2').css('font-family','Aref Ruqaa, sans-serif');
      $('i, .fa, [class*="fa-"]').css('font-family','FontAwesome, sans-serif');
    });
    $('<link rel="stylesheet" type="text/css" href=""><link rel="stylesheet" href=""><style>#wall .fitimg.u-pic.borderg{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #707070;margin-top:2px;margin-right:2px;}#chats .fitimg.u-pic{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #707070;margin-left:-10px;}#chats img.ustat{width:11px!important;height:11px!important;min-height:0%!important;margin-right:0;z-index:999999;border-radius:50px;margin-left:1px;margin-top:1px;border:1px solid #000;box-shadow:0 0 3px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #000;}#chats .d-flex.fl{background-color:#d4cfd2!important;background-image:url(https);background-size:cover;}#chats .mini.u-msg.dots{color:#000!important;}#chats{background-color:#d4cfd2!important;background-image:url(https);background-size:cover;}</style>').insertBefore("body");
    $('.u-msg').each(function(){
      $(this).css({'max-height':'none','height':'auto'});
    });
    $(document).ready(function(){
      $('<div class="fr borderg minix" style="color:gray; font-size: 16px!important; font-family:\'Ruqaa\', sans-serif; height: 26px; padding: 2px; background-color: white; text-align: right; width: auto; padding-right: 10px; display: inline-block;"></div>').insertBefore('div[title="المتواجدين الآن"]');
      var text=' 1000';
      var index=0;
      function typeWriter(){
        if(index<text.length){
          $('#typingEffect').html($('#typingEffect').html()+text.charAt(index));
          index++;
          setTimeout(typeWriter,100);
        } else {
          $('#typingEffect').html('<a title="" href="" style="color:gray; font-weight:bold;">'+text+'</a>');
          setTimeout(function(){
            blinkEffect();
            setTimeout(function(){
              index=0;
              $('#typingEffect').html('');
              typeWriter();
            },4000);
          },2000);
        }
      }
      function blinkEffect(){
        $('#typingEffect').fadeOut(500).fadeIn(500,blinkEffect);
      }
      typeWriter();
    });
    $(document).ready(function(){$('span.flex-grow-1.dots').css('font-family',"'Aref Ruqaa', serif");});
    $(document).ready(function(){
      $('button.btn.fr.btn-warning.fa-paint-brush').html(function(_,html){
        return '<span style="font-family: \'Aref Ruqaa\', serif;">'+$(this).text()+'</span>';
      });
    });
    $(document).ready(function(){
      $('button.btn.fr.btn-warning.fa-paint-brush').html(function(_,html){
        return '<span style="font-family: \'Aref Ruqaa\', serif;">'+$(this).text()+'</span>';
      });
      $('a[data-toggle="tab"]').each(function(){
        var text=$(this).text();
        $(this).html('<span style="font-family: \'Aref Ruqaa\', serif;">'+text+'</span>');
      });
    });
    $(document).ready(function(){$('span.u-topic').css('font-family',"'Aref Ruqaa', serif");});
    $("<style>").prop("type","text/css").html("@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg { font-family: 'Amiri', serif !important; font-weight: bold !important; font-size: 15px !important; }").appendTo("head");
    $(document).ready(function(){
      let fonts=[{name:"الخط الافتراضي",url:""},{name:"خط أميري",url:"@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Amiri', serif !important; font-weight: bold !important; font-size: 15px !important; }"},{name:"خط الجزيرة",url:"@import url('https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Mirza', serif !important; font-weight: bold !important; font-size: 15px !important; }"},{name:"خط تجوال",url:"@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Tajawal', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},{name:"خط آيفون",url:".mini.u-msg, .u-msg.break { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},{name:"خط الكوفي",url:"@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Reem Kufi', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},{name:"خط اللطيف",url:"@import url('https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Lateef', cursive !important; font-weight: bold !important; font-size: 15px !important; }"}];let currentFontIndex=0;let fontStyle=$("<style>").prop("type","text/css").appendTo("head");const toggleFontButton=$('<label></label>').text(`تغيير الخط إلى: ${fonts[1].name}`).addClass('label tc border btn label-info fl').css({'background-color':'lightblue','color':'black','margin':'1px 4px','padding':'6px','width':'98%'}).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ').click(function(){currentFontIndex=(currentFontIndex+1)%fonts.length;fontStyle.html(fonts[currentFontIndex].url);let nextFontName=fonts[(currentFontIndex+1)%fonts.length].name;$(this).text(currentFontIndex===0?"إعادة الخط الافتراضي":`تغيير الخط إلى: ${nextFontName}`).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ');});$('#newoption .not_geri').append(toggleFontButton);});

    $('<marquee direction="right" width="100%" class="sharit" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="4" style="text-align: center;height: 23px;color: #10384f;font-family: \'Aref Ruqaa\', jazeera, FontAwesome;margin-right: -1px;margin-top: 5px;border-radius: 30px;width: 100%;padding: 1px;height:28px;">اكتشف متعة التواصل في بيئة آمنة وموثوقة. موقعنا يوفر لك الخصوصية الكاملة، مما يتيح لك التفاعل بصدق وراحة</marquee></div>').insertBefore('.bg.mini.fl');
    $
    
$(`<style>
  .fl.ustat {
    border-radius: 15px 0 !important;
    width: 6px !important;
    margin: 4px;
  }

  @keyframes moveMessage {
    0%   { transform: translateX(0px); }
    50%  { transform: translateX(10px); }
    100% { transform: translateX(0px); }
  }

  div.hand.corner {
    text-align: center;
    border: 1px solid #000;
    left: 15px;
    width: 90%;
    border-radius: 10px;
    
    background: linear-gradient(90deg,#fff 0,#fff 10%,#fff 51%,#fff 89%,#fff 100%) !important;
    animation: moveMessage 3s ease-in-out infinite;
  }
</style>`).insertBefore('body');

    
    $
    // دالة عرض تنبيه أنيق
function showNotification(message) {
  $('#notification').remove(); // إزالة تنبيه سابق لو موجود
  const notification = $(`
    <div id="notification" style="
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fc1717cc;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-family: 'jazeera-light', Fontawesome, sans-serif;
      z-index: 9999;
      display: none;
      box-shadow: 0 0 10px #fc1717;
    ">${message}</div>
  `);
  $('body').append(notification);
  notification.fadeIn(300);
  setTimeout(() => {
    notification.fadeOut(300, () => {
      notification.remove();
    });
  }, 3000);
}

$(`<center>
    <div id="sultan13">
        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px; border-radius: 0px 0px 0px 15px!important; height: 22px;" target="_blank" href="rules.html">القَـؤانينَ</a>
        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px; height: 22px;" target="_blank" href="application.html">تطـبيق : جوال</a>
        <a class="ahmed21 btn minix btn-primary" style="width: 85px; padding: 1px;" target="_blank" href="esh.html">اشـتراكات</a>
        <a class="ahmed21 btn minix btn-primary" style="border-radius: 0px 0px 15px 0px!important; width: 85px; padding: 1px; height: 22px;" target="_blank" href="contact.html">الـَ شكـاإويء</a>
    </div>
</center>`).insertBefore('.nav.nav-tabs');

$(".umod").remove();
document.getElementById("tbox").placeholder = " مـآ يلـفظ من قـول الا لـديه رقـيب عتيـد ";

$("div#l3 button.btn.btn-primary").on("click", function() {
    showNotification("عند تسجيلك للعضوية فانك توافق على قوانين جوال فلسطين 2 واي اختلال في القوانين سيتم حظرك وحذف العضوية");
});

$("div#l2 button.btn.btn-primary").on("click", function() {
    showNotification("اهلا وسهلا بكم في عائلتنا عائلة شات جوال فلسطين");
});

$("#uhtml .flex-grow-1").css("overflow","hidden");

$(`<div style=" color: #FC1717;text-align: center;margin-bottom: 10px; font-family:'jazeera-light', Fontawesome"> إعلانات للضروره فقط </div>`).insertBefore('span.fl.fa.fa-send');  

document.querySelector("style").innerHTML += ".bgf{background-color:currentColor;backdrop-filter:none!important;}";

$("[data-target='#wall']").attr('title',' فضلاً وليس امراً عدم ألكلام في ألحائط');

$("#u1,#u2,#u3").attr("maxlength",7);

$('#asjs, textarea#tbox').on("cut copy paste", function(e) {
    e.preventDefault();
});

$(document).ready(function () {
  let _0x477576 = false;
  const _0x28ed2e = $('<label></label>')
    .text('عرض سطح المكتب')
    .addClass('label tc border btn label-info fl')
    .css({
      'background-color': 'ghostwhite',
      color: 'black',
      margin: '1px 4px',
      padding: '6px',
      width: '98%',
    })
    .prepend('<span class="fl fa fa-desktop" style="font-family: FontAwesome, sans-serif;"></span> ')
    .click(function () {
      if (_0x477576) {
        $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1.0');
        $(this).text('عرض سطح المكتب').prepend('<span class="fl fa fa-desktop" style="font-family: FontAwesome, sans-serif;"></span> ');
        _0x477576 = false;
        showNotification('تم العودة إلى الوضع الطبيعي');
      } else {
        $('meta[name="viewport"]').attr('content', 'width=1024');
        $(this).text('عرض الهاتف').prepend('<span class="fl fa fa-mobile" style="font-family: FontAwesome, sans-serif;"></span> ');
        _0x477576 = true;
        showNotification('تم تحويل العرض إلى وضع الكمبيوتر');
      }
    });
  $('#newoption .not_geri').append(_0x28ed2e);
});



$("<style>\n    ul.nav.nav-tabs.fl li a {\n        text-align: center;\n        padding: 0px 0!important;\n        border: 0 solid #4c4b4b;\n        color:#2E576E;\n        border-radius: 25px;\n        background: #fff;\n    }\n    \n    ul.nav.nav-tabs.fl li {\n        width: 33.3%;\n        margin-left: 0;\n        border-radius: 50px;\n        margin-bottom: 5px!important;\n    }\n    \n    div#l2 input#pass1, div#l2 input#u2, div#l3 input#pass2, div#l3 input#u3 {\n        padding: 0px 0px!important;\n        border-radius: 25px!important;\n        border: 1px solid #e1e0e0;\n        text-align: center;\n        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);\n        border: 1px solid white;\n        height: 27px!important;\n        border: 1px solid #dedede!important;\n        text-align: center;\n        width: 49%!important;\n        padding: 0!important;\n        float: right;\n        margin: 2px 3px 2px 0;\n    }\n    \n    div#l2 button {\n        border-radius: 24px!important;\n        height: 27px;\n        padding: 0px 5px;\n        width: 98%;\n        margin-left: 4px;\n        box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);\n        border-color: #FFFFFF!important;\n        margin-top: 4px !important;\n    }\n    \n    .nav-tabs {\n        background-color: #bfbfbfa6!important;\n        border-radius: 24px!important;\n        margin-top: 2px!important;\n        float: right;\n        padding: 3px 1px;\n        border-top: 3px solid;\n        border-color: #2E576E;\n        height: 30px!important;\n    }\n    \n    #u1 {\n        padding: 0px 0px!important;\n        margin-left: -6px;\n        border-radius: 25px!important;\n        border: 1px solid #e1e0e0;\n        text-align: center;\n        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);\n        border: 1px solid white;\n        height: 27px!important;\n        width: 100%!important;\n        margin-top: 1px!important;\n    }\n    \n    div#l1 input#u1, div#l3 button,div#l1 button {\n        border-radius: 24px!important;\n        height: 27px;\n        padding: 0px 5px;\n        width: 98%;\n        margin-left: 4px;\n        box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);\n        border-color: #FFFFFF!important;\n        margin-top: 4px !important;\n    }\n    \n    #tlogins .fa.fa-eye {\n        position: relative;\n        margin: -30px 17px 2px 0px!important;\n        color: #fff!important;\n    }\n    </style>").insertBefore("body");

$("body").append("\n    <style>\n        #upro .light.fl.pro.break {\n            background-color: #000 !important;\n            background-image: linear-gradient(225deg, #e5e8f7 0%, #fff 29%, #fafafc 67%, #e5e8f7 100%);\n        }\n    </style>\n");

$("body").append("\n    <style>\n        #sultan { color: #f00 !important; }\n\n        #room .btn-primary,\n        #d0 .label-primary,\n        #settings .label-primary,\n        #settings .btn-primary,\n        .corner.border.label.label-primary,\n        .modal-header.label-primary,\n        .head.d-flex.nosel.bg.fl,\n        .rsave.btn.btn-primary.fr,\n        .fa.fa-send.sndpm.fl.btn.btn-primary,\n        .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,\n        .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,\n        .bdel.corner.btn.minix.btn-primary.fa.fa-times,\n        .fa.fa-send.sndbc.fl.btn.btn-primary,\n        .btn.btn-primary.u-nickc.fr.fa.fa-save,\n        .label.fl.label-primary,\n        button.rsave.btn.btn-primary.fl,\n        #users .nosel.ninr.fl.uzr.label.bg {\n            border-radius: 0px 8px 0px 8px !important;\n            border: 1px solid #000;\n            background-image: url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png);\n            background-size: cover;\n            color: #fff;\n        }\n\n        #room #mic {\n            background-image: url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png);\n            background-size: cover;\n            border-radius: 0px 6px 6px 6px !important;\n        }\n    </style>\n");

$(".nonot").remove();

// إضافة ستايلات مخصصة للشات
$("body").append(`
<style>
/* زر المايك */
#mic .mic {
    text-align: center;
    width: 56px;
    height: 47px !important;
    background-color: #ffffff;
    border: 2px solid #afbfc2 !important;
    border-radius: 30% 1% !important;
    margin: 1px !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover;
}

/* صور المستخدمين في الدردشة */
#chats .fitimg.u-pic {
    height: 52px !important;
    border: 1px solid;
    border-radius: 100px;
    box-shadow: 0 0 0px rgb(0,0,0), inset 0 0 4px rgb(0,0,0);
    margin-left: -10px;
}

/* أيقونات حالة المستخدم */
#chats img.ustat {
    width: 11px !important;
    height: 11px !important;
    border-radius: 50px;
    border: 1px solid #000;
    box-shadow: 0 0 3px rgb(0,0,0), inset 0 0 4px rgb(0,0,0);
    margin-left: 1px;
    margin-top: 1px;
}

/* رؤوس النوافذ، الغرف، والمذيعين */
#upro .modal-header.label-primary,
#d0,
.broadcasters,
#rooms .label-primary,
#users .nosel.ninr.fl.uzr.label.bg {
    border-radius: 0px 8px 0px 8px !important;
    border: 1px solid #000;
    background-image: url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png);
    color: #fff;
}

/* صور خاصة بالمستخدم */
#users img.co {
    border-radius: 0px 8px 0px 8px !important;
    transform: rotate(20deg);
    margin-top: 2px !important;
}

/* خلفية لوحة الدردشة */
#dpnl {
    background-image: url(https://imgg.io/images/2025/06/30/1a067c9f2359e9a7de24064e41dadf6c.png);
    background-size: 100% !important;
}
</style>
`);

  $('body').append(modalHTML);

  function closeModal() {
    $('#welcomeModal').fadeOut(300, function() {
      $(this).remove();
    });
    localStorage.setItem('welcomeShown', 'true');
  }

  $('#closeWelcomeBtn').on('click', closeModal);

  // إغلاق تلقائي بعد 6 ثواني
  setTimeout(closeModal, 6000);
}

$(document).ready(function() {
  showWelcomeModal();
});


    $(document).ready(function(){
      $('.fitimg.u-pic.borderg').css({'min-width':'60px','width':'60px','height':'54px','background-color':'transparent','background-image':'url("/site/msgpic.png")','text-shadow':'rgba(255, 255, 255, 0.6) 0px 0px 6px, rgba(0, 0, 255, 0.6) 0px 0px 8px','border':'none'}).on('click',function(){upro('');});
    });
  };
  _0xabc();
  // إظهار رسالة التوقيع مموهة في وحدة التحكم
  console.log(decode(owner) + " \uD83D\uDD12 تم تشفير وحماية السكربت بالكامل");
})();
