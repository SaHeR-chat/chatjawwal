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

  // الكود الرئيسي
  var _0xabc = function(){
    $('<img src="/sico/1749004282145.jpg" style="width:100%; height:110px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">').insertBefore('.nav-tabs');

    $(document).ready(function(){
      $('button.btn.fr.btn-warning.fa.fa-paint-brush').text('لون');
    });

    $('<center><div><div width="99.5%" style="background-image:url;color: #485B99;border-radius: 5px; border-bottom: 2px solid #ffffff;border-top: 2px solid #ffffff;padding-bottom: 2px!important;"><font style="background-color: #fff;border-radius: 15px;font-family: \'Aref Ruqaa\', serif; padding: 2px 10px;margin: 7px 10px;" color="#003300">شات جوال فلسطين يرحب بكم</font></div></div></center>').insertBefore('#d2');

    $(document).ready(function(){
      $('head').append('<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap" rel="stylesheet">');
      $('body, div[style*="display: inline-block;direction: rtl;"], button, #u1, #u2, #u3, #pass1, #pass2').css('font-family','Aref Ruqaa, sans-serif');
      $('i, .fa, [class*="fa-"]').css('font-family','FontAwesome, sans-serif');
    });

    // ستايلات إضافية
    $('<style>#wall .fitimg.u-pic.borderg{height:52px!important;border:1px solid;border-radius:100px;box-shadow:inset 0 0 4px rgb(0,0,0);}#chats .fitimg.u-pic{height:52px!important;border:1px solid;border-radius:100px;box-shadow:inset 0 0 4px rgb(0,0,0);}#chats img.ustat{width:11px!important;height:11px!important;border-radius:50px;border:1px solid #000;box-shadow:0 0 3px rgb(0,0,0),inset 0 0 4px rgb(0,0,0);}#chats .d-flex.fl{background-color:#d4cfd2!important;}#chats .mini.u-msg.dots{color:#000!important;}#chats{background-color:#d4cfd2!important;}</style>').appendTo("head");

    $('.u-msg').css({'max-height':'none','height':'auto'});

    // تأثير كتابة
    $(document).ready(function(){
      $('<div id="typingEffect" class="fr borderg minix" style="color:gray;font-size:16px!important;font-family:\'Ruqaa\', sans-serif;height:26px;padding:2px;background-color:white;text-align:right;width:auto;padding-right:10px;display:inline-block;"></div>').insertBefore('div[title="المتواجدين الآن"]');
      var text=' 1000';
      var index=0;
      function typeWriter(){
        if(index<text.length){
          $('#typingEffect').append(text.charAt(index));
          index++;
          setTimeout(typeWriter,100);
        } else {
          $('#typingEffect').html('<a style="color:gray;font-weight:bold;">'+text+'</a>');
          setTimeout(function(){
            $('#typingEffect').fadeOut(500).fadeIn(500,function(){
              index=0;
              $('#typingEffect').html('');
              typeWriter();
            });
          },2000);
        }
      }
      typeWriter();
    });

    // تغيير خطوط
    $("<style>").prop("type","text/css").html("@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg { font-family: 'Amiri', serif !important; font-weight:bold;font-size:15px!important; }").appendTo("head");

    $(document).ready(function(){
      let fonts=[{name:"الخط الافتراضي",url:""},{name:"خط أميري",url:"@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg{font-family:'Amiri',serif!important;font-weight:bold;font-size:15px!important;}"}];
      let currentFontIndex=0;
      let fontStyle=$("<style>").prop("type","text/css").appendTo("head");
      const toggleFontButton=$('<label></label>')
        .html('<span class="fl fa fa-font"></span> تغيير الخط إلى: '+fonts[1].name)
        .addClass('label tc border btn label-info fl')
        .css({'background-color':'lightblue','color':'black','margin':'1px 4px','padding':'6px','width':'98%'})
        .click(function(){
          currentFontIndex=(currentFontIndex+1)%fonts.length;
          fontStyle.html(fonts[currentFontIndex].url);
          let nextFontName=fonts[(currentFontIndex+1)%fonts.length].name;
          $(this).html('<span class="fl fa fa-font"></span> '+(currentFontIndex===0?"إعادة الخط الافتراضي":"تغيير الخط إلى: "+nextFontName));
        });
      $('#newoption .not_geri').append(toggleFontButton);
    });

    // ماركيه
    $('<marquee direction="right" width="100%" class="sharit" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="4" style="text-align:center;height:28px;color:#10384f;font-family:\'Aref Ruqaa\', serif;border-radius:30px;margin-top:5px;">اكتشف متعة التواصل في بيئة آمنة وموثوقة</marquee>').insertBefore('.bg.mini.fl');

    // إشعار منبثق
    function showNotification(message) {
      $('#notification').remove();
      const notification = $(`<div id="notification" style="position:fixed;top:20px;left:50%;transform:translateX(-50%);background-color:#fc1717cc;color:#fff;padding:10px 20px;border-radius:5px;font-family:'jazeera-light',sans-serif;z-index:9999;display:none;box-shadow:0 0 10px #fc1717;">${message}</div>`);
      $('body').append(notification);
      notification.fadeIn(300);
      setTimeout(()=>{notification.fadeOut(300,()=>{notification.remove();});},3000);
    }

    // أزرار إضافية
    $(`<center><div id="sultan13">
      <a class="btn minix btn-primary" style="width:85px;" href="rules.html" target="_blank">القوانين</a>
      <a class="btn minix btn-primary" style="width:85px;" href="application.html" target="_blank">تطبيق جوال</a>
      <a class="btn minix btn-primary" style="width:85px;" href="esh.html" target="_blank">اشتراكات</a>
      <a class="btn minix btn-primary" style="width:85px;" href="contact.html" target="_blank">شكاوي</a>
    </div></center>`).insertBefore('.nav.nav-tabs');

    // منع كليك يمين على الصور
    $(document).on("contextmenu", "img", function(){ return false; });

    // زر تغيير العرض (موبايل/كمبيوتر)
    $(document).ready(function () {
      let desktop=false;
      const toggle=$('<label></label>')
        .html('<span class="fl fa fa-desktop"></span> عرض سطح المكتب')
        .addClass('label tc border btn label-info fl')
        .css({'background-color':'ghostwhite','color':'black','margin':'1px 4px','padding':'6px','width':'98%'})
        .click(function () {
          if (desktop) {
            $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
            $(this).html('<span class="fl fa fa-desktop"></span> عرض سطح المكتب');
            showNotification('تم العودة إلى الوضع الطبيعي');
            desktop=false;
          } else {
            $('meta[name="viewport"]').attr('content','width=1024');
            $(this).html('<span class="fl fa fa-mobile"></span> عرض الهاتف');
            showNotification('تم تحويل العرض إلى وضع الكمبيوتر');
            desktop=true;
          }
        });
      $('#newoption .not_geri').append(toggle);
    });

    // تخصيص صور المستخدمين
    $(document).ready(function(){
      $('.fitimg.u-pic.borderg').css({'min-width':'60px','width':'60px','height':'54px','background-color':'transparent','background-image':'url("/site/msgpic.png")','border':'none'}).on('click',function(){
        if(typeof upro!=="undefined") upro('');
      });
    });
  };

  _0xabc();

  // رسالة التوقيع
  console.log(decode(owner) + " 🔒 تم تشفير وحماية السكربت بالكامل");
})();
