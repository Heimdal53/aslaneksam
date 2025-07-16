// --- Açılış Yazısı Animasyonu ---
const introText = document.getElementById("introText");
const introMessages = [
  "Bugün sıradan bir gün değil...",
  "Çünkü Yasin doğdu.",
  "Ve hayat, biraz daha güzel oldu."
];

let msgIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (msgIndex >= introMessages.length) return;
  const currentMsg = introMessages[msgIndex];

  if (charIndex < currentMsg.length) {
    introText.textContent += currentMsg.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      introText.textContent = "";
      msgIndex++;
      charIndex = 0;
      typeWriter();
    }, 1500);
  }
}

// Başlat
typeWriter();

// --- 7 saniye sonra Intro Kaybolur ve Slayt başlar ---
setTimeout(() => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("slideshow").classList.remove("hidden");
  startSlideshow();
}, 7000);

// --- Slayt Gösterisi ---

const photos = [
  { src: "img1.jpg", caption: "Çaycı eksa" },
  { src: "img2.jpg", caption: "İlk defa yata binen yasin" },
  { src: "img3.jpg", caption: "Gülüşüyle içimizi ısıtan adam " },
  { src: "img4.jpg", caption: "Hep yanımızda olan dost" },
  { src: "img5.jpg", caption: "Nice güzel yaşlara kral 👑" }
];

let currentSlide = 0;
const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");

function startSlideshow() {
  function showSlide() {
    // Fade-out
    slideImage.classList.remove("active");
    caption.classList.remove("active");

    setTimeout(() => {
      slideImage.src = photos[currentSlide].src;
      caption.textContent = photos[currentSlide].caption;
      slideImage.classList.add("active");
      caption.classList.add("active");

      currentSlide = (currentSlide + 1) % photos.length;
    }, 600);
  }

  showSlide();
  setInterval(showSlide, 4500);

  // Slaytlar bittikten sonra eğlenceli bölüme geç
  setTimeout(() => {
    document.getElementById("slideshow").classList.add("hidden");
    document.getElementById("funSection").classList.remove("hidden");
  }, photos.length * 4500 + 1000);
}

// --- Yasin Sözleri ---

const quotes = [
  
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {
  const rndIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[rndIndex];
});

// --- Müzik Kontrolü ---

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

window.addEventListener('load', () => {
  bgMusic.volume = 0.2;
  bgMusic.play().then(() => {
    isPlaying = true;
    musicBtn.textContent = "🔈 Ses Kapat";
  }).catch(() => {
    // Otomatik izin verilmezse, sessiz başlat
    bgMusic.muted = true;
    bgMusic.play();
    isPlaying = true;
    musicBtn.textContent = "🔈 Ses Aç";
  });
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    musicBtn.textContent = "🔈 Ses Kapat";
  } else if (bgMusic.volume > 0) {
    bgMusic.muted = true;
    musicBtn.textContent = "🔈 Ses Aç";
  }
});
