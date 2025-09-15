(function () {
  var allowedDomain = "chatjawwal.com";
  if (window.location.hostname.indexOf(allowedDomain) === -1) {
    console.warn("هذا السكربت محمي ولا يعمل إلا على موقع الملك");
    return;
  }

  $(document).ready(function () {
    $('<style>\
      @import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");\
      @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap");\
      @import url("https://fonts.googleapis.com/css2?family=Rakkas&display=swap");\
      .borderg { border: 1px solid #e8e8e8; }\
      .fitimg { border-radius: 5px; }\
      .fr.borderg.minix { background: #fff; color: #000; font-family: "Cairo", sans-serif; }\
      .ae.fa.label.label-primary { background-color: #ff9800; }\
      .uzr.fl.corner.borderg { border: 1px solid #ddd; border-radius: 5px; }\
      </style>'
    ).appendTo("head");

    $('<marquee class="headmenu" style="width:100%;height:28px;background:#fff;color:#000;font-family:\'Cairo\',sans-serif;" direction="right" scrollamount="3" onmouseover="this.stop()" onmouseout="this.start()">\
      أهلاً وسهلاً بكم في موقع شات جوال فلسطين للجوال والكمبيوتر ♥\
      </marquee>'
    ).insertBefore(".bg.mini.fl");

    $('<div class="fr borderg minix" style="color:gray;font-size:16px!important;font-family:\'Rakkas\',sans-serif;height:26px;padding:2px;background-color:white;text-align:right;width:auto;padding-right:10px;display:inline-block;">\
      شات جوال فلسطين\
      </div>'
    ).insertBefore('div[title="المتواجدين الآن"]');

    $("button.btn.fr.btn-warning.fa-paint-brush").html(
      "🎨 <span style=\"font-family:'Cairo',sans-serif;\">تغيير اللون</span>"
    );

    $('<div style="text-align:center;padding:4px;font-size:14px;color:#444;font-family:\'Cairo\',sans-serif;">\
      جميع الحقوق محفوظة لموقع شات جوال فلسطين\
      </div>'
    ).insertAfter("#d2");

    if (typeof upro === "function") {
      $(".fitimg.u-pic.borderg").on("click", function () {
        upro("");
      });
    }
  });
})();
