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

  // === الكود الرئيسي والمضغوط ===
  var _0xabc = function(){

    // === بانر الصورة العلوية ===
    $('<img src="/sico/1749004282145.jpg" style="width:100%; height:110px; margin-top:0px; border-radius:0px 10px 0px 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">').insertBefore('.nav-tabs');

    // === أزرار اللون ===
    $(document).ready(function(){
      $('button.btn.fr.btn-warning.fa.fa-paint-brush').text('لون');
    });

    // === رسالة ترحيبية ===
    $('<center><div><div width="99.5%" style="background-image:url;color: #485B99;border-radius: 5px 5px 5px 5px;border-bottom: 2px solid #ffffff;border-top: 2px solid #ffffff;padding-bottom: 2px!important;"><font style="background-color: #fff;border-radius: 15px 15px 15px 15px;font-family: \'Aref Ruqaa\', serif; padding: 2px 10px 2px 10px;margin: 7px 10px 7px 10px;" color="#003300">شات جوال فلسطين يرحب بكم</font></div></div></center>').insertBefore('#d2');

    // === إضافة الخطوط ===
    $(document).ready(function(){
      $('head').append('<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap" rel="stylesheet">');
      $('body, div[style*="display: inline-block;direction: rtl;"], button, #u1, #u2, #u3, #pass1, #pass2').css('font-family','Aref Ruqaa, sans-serif');
      $('i, .fa, [class*="fa-"]').css('font-family','FontAwesome, sans-serif');
    });

    // === الصور والرسائل ===
    $('<link rel="stylesheet" type="text/css" href=""><link rel="stylesheet" href=""><style>#wall .fitimg.u-pic.borderg{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #707070;margin-top:2px;margin-right:2px;}#chats .fitimg.u-pic{height:52px!important;border:1px solid;border-radius:100px;box-shadow:0 0 0px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #707070;margin-left:-10px;}#chats img.ustat{width:11px!important;height:11px!important;min-height:0%!important;margin-right:0;z-index:999999;border-radius:50px;margin-left:1px;margin-top:1px;border:1px solid #000;box-shadow:0 0 3px rgb(0,0,0),inset 0 0 4px rgb(0,0,0),0 0 0 0px #000;}#chats .d-flex.fl{background-color:#d4cfd2!important;background-image:url(https);background-size:cover;}#chats .mini.u-msg.dots{color:#000!important;}#chats{background-color:#d4cfd2!important;background-image:url(https);background-size:cover;}</style>').insertBefore("body");

    $('.u-msg').each(function(){
      $(this).css({'max-height':'none','height':'auto'});
    });

    // === شريط تغيير الخطوط ===
    $(document).ready(function(){
      let fonts=[
        {name:"الخط الافتراضي",url:""},
        {name:"خط أميري",url:"@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Amiri', serif !important; font-weight: bold !important; font-size: 15px !important; }"},
        {name:"خط الجزيرة",url:"@import url('https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Mirza', serif !important; font-weight: bold !important; font-size: 15px !important; }"},
        {name:"خط تجوال",url:"@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Tajawal', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
        {name:"خط آيفون",url:".mini.u-msg, .u-msg.break { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
        {name:"خط الكوفي",url:"@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Reem Kufi', sans-serif !important; font-weight: bold !important; font-size: 15px !important; }"},
        {name:"خط اللطيف",url:"@import url('https://fonts.googleapis.com/css2?family=Lateef:wght@400;700&display=swap'); .mini.u-msg, .u-msg.break { font-family: 'Lateef', cursive !important; font-weight: bold !important; font-size: 15px !important; }"}
      ];
      let currentFontIndex=0;
      let fontStyle=$("<style>").prop("type","text/css").appendTo("head");
      const toggleFontButton=$('<label></label>').text(`تغيير الخط إلى: ${fonts[1].name}`).addClass('label tc border btn label-info fl').css({'background-color':'lightblue','color':'black','margin':'1px 4px','padding':'6px','width':'98%'}).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ').click(function(){
        currentFontIndex=(currentFontIndex+1)%fonts.length;
        fontStyle.html(fonts[currentFontIndex].url);
        let nextFontName=fonts[(currentFontIndex+1)%fonts.length].name;
        $(this).text(currentFontIndex===0?"إعادة الخط الافتراضي":`تغيير الخط إلى: ${nextFontName}`).prepend('<span class="fl fa fa-font" style="font-family: FontAwesome, sans-serif;"></span> ');
      });
      $('#newoption .not_geri').append(toggleFontButton);
    });

    // === رسالة ترحيبية متحركة ===
    $('<marquee direction="right" width="100%" class="sharit" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="4" style="text-align: center;height: 23px;color: #10384f;font-family: \'Aref Ruqaa\', jazeera, FontAwesome;margin-right: -1px;margin-top: 5px;border-radius: 30px;width: 100%;padding: 1px;height:28px;">اكتشف متعة التواصل في بيئة آمنة وموثوقة. موقعنا يوفر لك الخصوصية الكاملة، مما يتيح لك التفاعل بصدق وراحة</marquee>').insertBefore('.bg.mini.fl');

    // === رؤوس النوافذ، الغرف، والمذيعين ===
    $("body").append(`
      <style>
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
      </style>
    `);

    // === إزالة العناصر المزعجة وضبط النصوص ===
    $(".umod").remove();
    document.getElementById("tbox").placeholder = " مـآ يلـفظ من قـول الا لـديه رقـيب عتيـد ";
    $("#uhtml .flex-grow-1").css("overflow","hidden");
    $('.nonot').remove();

  };

  _0xabc();

  // إظهار رسالة التوقيع مموهة في وحدة التحكم
  console.log(decode(owner) + " 🔒 تم تشفير وحماية السكربت بالكامل");

})();
