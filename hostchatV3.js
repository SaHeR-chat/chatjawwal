// إنشاء البانر الديناميكي
const $customBanner = $(`
  <div class="custom-banner">
    <div class="header-wrapper">
      <img src="https://www.hostchat.net/sico/1755776349121.jpg" alt="شعار" class="header-image">
      <div class="header-text-wrapper">
        <div class="header-text">
          شات <span class="gold-text">هوست للجوال</span>
        </div>
        <div class="sub-text">
          مسابقات &nbsp; فعاليات &nbsp; دردشة صوتية
        </div>
      </div>
    </div>
    <div class="info-text">
      <span>🎉 مرحباً بكم في شات هوست للجوال!</span>
      <div class="shine"></div>
    </div>
  </div>
`);

$customBanner.insertBefore('.nav-tabs'); // إدراج البانر قبل العناصر الأخرى

// إضافة CSS محسّن
const styles = `
.custom-banner {
  position: relative;
  text-align:center;
  margin-bottom:15px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: bannerSlideDown 1s ease-out;
  perspective: 800px;
}

.header-wrapper {
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  padding:15px;
  background: linear-gradient(135deg,#001f3f,#005f9f,#00aaff);
  border-radius:20px;
  box-shadow: 0 0 50px #00d4ff inset, 0 0 35px #00aaff;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.header-wrapper:hover {
  transform: rotateY(10deg) rotateX(5deg);
}

.header-image {
  width:120px;
  height:120px;
  object-fit:contain;
  border-radius:50%;
  box-shadow: 0 0 25px #00aaff, 0 0 50px #00d4ff inset;
  transition:0.5s;
}
.header-image:hover { transform: scale(1.2) rotateY(15deg); }

.header-text {
  font-size:44px;
  font-weight:900;
  color:#e0f7ff;
  text-shadow:
    0 0 15px #a0eaff,
    0 0 25px #00d4ff,
    0 0 35px #0077cc;
  transform-style: preserve-3d;
}

.gold-text {
  position:relative;
  display:inline-block;
  color:#ffcc00;
  animation: glowPulse 2.5s ease-in-out infinite;
}
.gold-text::before {
  content:'';
  position:absolute;
  top:0; left:-75%;
  width:50%; height:100%;
  background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
  transform:skewX(-25deg);
  animation: shineMove 3s linear infinite;
  pointer-events:none;
  z-index:2;
}

.sub-text {
  font-size:18px;
  font-weight:700;
  color:#ff4d4d;
  text-shadow: 0 0 8px #ff6666, 0 0 12px #ff9999;
}

.info-text {
  margin-top:15px;
  background: linear-gradient(135deg,#004080,#001f3f);
  border-radius:15px;
  padding:10px 25px;
  box-shadow: 0 0 40px #00d4ff inset, 0 0 25px #00aaff;
  font-size:22px;
  font-weight:900;
  color:#00d4ff;
  position:relative;
  display:inline-block;
  overflow:hidden;
}

.info-text span {
  position:relative;
  z-index:2;
  animation:glowPulse 2.5s ease-in-out infinite;
}

.info-text .shine {
  position:absolute;
  top:0; left:-75%;
  width:50%; height:100%;
  background:linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
  transform:skewX(-25deg);
  animation:shineMove 3s linear infinite;
  pointer-events:none;
  z-index:1;
}

@keyframes glowPulse {
  0%,100%{text-shadow:0 0 15px #00d4ff,0 0 35px #0080ff,0 0 45px #00eaff;}
  50%{text-shadow:0 0 25px #ffffff,0 0 45px #00eaff,0 0 60px #00aaff; transform:scale(1.05);}
}
@keyframes shineMove {0%{left:-75%;}100%{left:125%;}}
@keyframes bannerSlideDown {0%{opacity:0; transform: translateY(-50px);}100%{opacity:1; transform: translateY(0);}}
`;
$('<style>').text(styles).appendTo('head');
