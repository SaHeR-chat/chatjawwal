(function(){
  // ======= إعدادات عامة =======
  const owner = "شات جوال فلسطين";
  const allowedDomain = 'chatjawwal.com';

  if(window.location.hostname.indexOf(allowedDomain) === -1){
    console.warn('هذا السكربت محمي ولا يعمل إلا على موقع الملك');
    return;
  }

  // ======= إضافة الصور والبنرات =======
  $('<img src="/sico/1749004282145.jpg" style="width:100%; height:110px; margin-top:0; border-radius:0 10px 0 10px; box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 5px #0020ab; border: 1px solid #fff;">')
    .insertBefore('.nav-tabs');

  $('<center><div style="background-color:#485B99; border-radius:5px; padding:2px;"><font style="background-color:#fff; border-radius:15px; font-family:\'Aref Ruqaa\', serif; padding:2px 10px;" color="#003300">شات جوال فلسطين يرحب بكم</font></div></center>')
    .insertBefore('#d2');

  // ======= إضافة الخطوط =======
  $('head').append('<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap" rel="stylesheet">');
  $('body, div[style*="display: inline-block;direction: rtl;"], button, #u1, #u2, #u3, #pass1, #pass2').css('font-family','Aref Ruqaa, sans-serif');
  $('i, .fa, [class*="fa-"]').css('font-family','FontAwesome, sans-serif');

  // ======= منع النسخ واللصق =======
  $('#asjs, textarea#tbox').on("cut copy paste", function(e) { e.preventDefault(); });

  // ======= إضافة الأزرار العلوية =======
  $('<center>\
    <div id="sultan13">\
      <a class="ahmed21 btn minix btn-primary" style="width:85px;" href="rules.html" target="_blank">القوانين</a>\
      <a class="ahmed21 btn minix btn-primary" style="width:85px;" href="application.html" target="_blank">تطبيق : جوال</a>\
      <a class="ahmed21 btn minix btn-primary" style="width:85px;" href="esh.html" target="_blank">اشتراكات</a>\
      <a class="ahmed21 btn minix btn-primary" style="width:85px;" href="contact.html" target="_blank">الشكوى</a>\
    </div>\
  </center>').insertBefore('.nav.nav-tabs');

  // ======= حماية الصور =======
  $(document).on("contextmenu", "img", function () { return false; });

  // ======= مؤثر الرسائل =======
  $(`<style>
    @keyframes moveMessage {
      0% { transform: translateX(0px); }
      50% { transform: translateX(10px); }
      100% { transform: translateX(0px); }
    }
    div.hand.corner {
      text-align: center;
      border: 1px solid #000;
      width: 90%;
      border-radius: 10px;
      background: linear-gradient(90deg,#fff 0,#fff 100%);
      animation: moveMessage 3s ease-in-out infinite;
    }
  </style>`).appendTo('head');

  // ======= إشعار أنيق =======
  function showNotification(message){
    $('#notification').remove();
    const notification = $(`<div id="notification" style="
      position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
      background-color: #fc1717cc; color: white; padding: 10px 20px;
      border-radius: 5px; font-family: 'jazeera-light', sans-serif; z-index: 9999; display:none;
      box-shadow: 0 0 10px #fc1717;">${message}</div>`);
    $('body').append(notification);
    notification.fadeIn(300);
    setTimeout(()=>{ notification.fadeOut(300,()=>notification.remove()); },3000);
  }

  // ======= تعديل واجهة الدردشة =======
  $('#uhtml .flex-grow-1').css("overflow","hidden");
  $(".umod").remove();
  document.getElementById("tbox").placeholder = "مـآ يلـفظ من قـول الا لـديه رقـيب عتيـد";

  // ======= تنسيقات رئيسية للشات =======
  $("body").append(`
  <style>
    #chats .fitimg.u-pic { height: 52px!important; border-radius: 100px; border:1px solid; }
    #chats img.ustat { width: 11px!important; height: 11px!important; border-radius:50px; border:1px solid #000; }
    #upro .modal-header.label-primary,
    #d0,
    .broadcasters,
    #rooms .label-primary,
    #users .nosel.ninr.fl.uzr.label.bg {
      border-radius:0px 8px 0px 8px!important; border:1px solid #000; background-color:#2E576E; color:#fff;
    }
    #users img.co { border-radius:0px 8px 0px 8px; transform:rotate(20deg); margin-top:2px; }
    #dpnl { background-size:100% !important; }
  </style>
  `);

  console.log(owner + " ✅ السكربت جاهز بدون تشفير ومرتب بالكامل");
})();
