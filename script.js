// ===== BUSINESS SETTINGS =====
const businessName = "Vicky Cloth House";
const googleReviewLink = "INSERT_HIS_ACTUAL_GOOGLE_REVIEW_LINK_HERE"; 

// YOUR GOOGLE WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzNYgfNflIqN-_a04-axqM4u5VTj5waCDr3ES-z0FugoCC9jYN42qj496L6qcndrryflQ/exec"; 

// ===== REVIEW TEMPLATES (HUMAN & CASUAL TONE) =====
const templates = {
  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Honestly, shopping at [BIZ] was the best decision.",
      "If you want the latest clothing designs, [BIZ] is the spot.",
      "Had such a great time shopping at [BIZ].",
      "Can't say enough good things about [BIZ]'s collection.",
      "Just bought some amazing outfits from [BIZ] and I love them.",
      "Such a great variety of clothes at [BIZ].", 
      "I was looking for quality fabric, and [BIZ] delivered perfectly.", 
      "Seriously the best clothing store in the area.", 
      "A friend recommended [BIZ] to me and I'm glad I visited.", 
      "[BIZ] is my new favorite place for shopping."
    ],
    middle: [
      "The fabric quality is outstanding and prices are very reasonable.",
      "They have a huge variety of suits and dress materials.",
      "The staff is super polite and helps you match the perfect outfits.",
      "You don't have to bargain much because the rates are already genuine.",
      "The shop is well-maintained and they always show the latest trends.",
      "Whether it's party wear or casual, they have everything under one roof.", 
      "I bought clothes for a family function and everyone loved the designs.", 
      "They don't rush you; you get full time to select your favorite pieces.", 
      "The colors and prints are exactly what I was looking for.", 
      "Customer service is top-notch compared to other shops in the market."
    ],
    ending: [
      "Definitely go for it guys!",
      "100% recommend checking them out.",
      "Best shop in town, hands down.",
      "You won't regret shopping here.",
      "Loved every minute of my visit.",
      "Totally worth the money.", 
      "Big thanks to the shop owner and staff!", 
      "Do yourself a favor and visit this store.", 
      "10/10 shopping experience.", 
      "I'll definitely be coming back for more clothes."
    ]
  },

  // ---------- HINDI ----------
  hi: {
    intro: [
      "सच बताऊँ तो [BIZ] से शॉपिंग करना एकदम सही फैसला था।",
      "कपड़ों की शॉपिंग करनी है तो भाई [BIZ] से बेस्ट कुछ नहीं।",
      "[BIZ] का कलेक्शन देखने में बहुत मज़ा आया।",
      "मैंने [BIZ] से सूट लिए और फैब्रिक एकदम झकास है।",
      "[BIZ] के डिज़ाइन्स बहुत ही शानदार हैं।",
      "मुझे अच्छे कपड़ों की तलाश थी, जो [BIZ] पर आकर खत्म हुई।", 
      "यहाँ कपड़ों की वैरायटी एकदम मस्त है।", 
      "[BIZ] के बारे में दोस्त ने बताया था, थैंक्स टू हिम।", 
      "इनके पास हमेशा नया और ट्रेंडी स्टॉक होता है।", 
      "सीरियसली, [BIZ] इस एरिया की सबसे बेस्ट कपड़ों की दुकान है।"
    ],
    middle: [
      "स्टाफ एकदम अच्छे से बात करता है और कपड़े सिलेक्ट करने में पूरी मदद करता है।",
      "क्वालिटी में कोई कॉम्प्रोमाइज नहीं है और रेट भी एकदम जायज हैं।",
      "पार्टी वियर से लेकर डेली यूज़ तक के कपड़े यहाँ मिल जाते हैं।",
      "इनके यहाँ कलर्स और प्रिंट्स के इतने ऑप्शन हैं कि मन खुश हो जाता है।",
      "यहाँ कस्टमर को पूरा टाइम दिया जाता है, कोई जल्दबाजी नहीं।",
      "दुकानदार का स्वभाव बहुत हेल्पफुल है और सर्विस भी फास्ट है।", 
      "मैंने शादी के लिए कपड़े लिए थे और सबको बहुत पसंद आए।", 
      "मार्केट में बाकी दुकानों से इनके रेट काफी सही लगे मुझे।", 
      "कपड़ों की फिनिशिंग और फैब्रिक दोनों नंबर वन हैं।", 
      "यहाँ आकर बारगेनिंग की कोई टेंशन नहीं, फिक्स और बेस्ट प्राइस है।"
    ],
    ending: [
      "आँख बंद करके यहाँ से शॉपिंग कर लो भाई।",
      "मेरी तरफ से 100% रिकमेंडेड है।",
      "पैसे बिलकुल वेस्ट नहीं होंगे, पक्की बात है।",
      "एकदम शानदार एक्सपीरियंस रहा।",
      "जरूर ट्राई करो यार, पछताओगे नहीं।",
      "पैसे की पूरी वसूली। बेहतरीन कपड़े!", 
      "पूरी टीम को बहुत-बहुत थैंक्स!", 
      "यहाँ से शॉपिंग करना एकदम वर्थ इट है।", 
      "10/10 रेटिंग मेरी तरफ से।", 
      "मैं तो अब हमेशा यहीं से कपड़े लूँगा।"
    ]
  },

  // ---------- PUNJABI ----------
  pa: {
    intro: [
      "ਸੱਚ ਦੱਸਾਂ ਤਾਂ [BIZ] ਤੋਂ ਸ਼ਾਪਿੰਗ ਕਰਨਾ ਬਹੁਤ ਵਧੀਆ ਰਿਹਾ।",
      "ਵਧੀਆ ਕੱਪੜਿਆਂ ਲਈ [BIZ] ਸਭ ਤੋਂ ਬੈਸਟ ਦੁਕਾਨ ਹੈ।",
      "[BIZ] ਦਾ ਕਲੈਕਸ਼ਨ ਬਹੁਤ ਸ਼ਾਨਦਾਰ ਹੈ।",
      "ਮੈਂ [BIZ] ਤੋਂ ਸੂਟ ਲਏ ਅਤੇ ਕੁਆਲਿਟੀ ਬਹੁਤ ਵਧੀਆ ਨਿਕਲੀ।",
      "ਨਵੇਂ ਡਿਜ਼ਾਈਨ ਲੈਣੇ ਹਨ ਤਾਂ [BIZ] ਜ਼ਰੂਰ ਜਾਓ।",
      "[BIZ] ਤੇ ਆ ਕੇ ਕੱਪੜੇ ਲੈਣ ਦਾ ਨਜ਼ਾਰਾ ਆ ਗਿਆ।", 
      "ਮੈਨੂੰ ਵਧੀਆ ਫੈਬਰਿਕ ਚਾਹੀਦਾ ਸੀ, ਤੇ [BIZ] ਨੇ ਕਮਾਲ ਕਰ ਦਿੱਤੀ।", 
      "ਇਸ ਇਲਾਕੇ ਦੀ ਸਭ ਤੋਂ ਵਧੀਆ ਕੱਪੜਿਆਂ ਦੀ ਦੁਕਾਨ ਹੈ।", 
      "ਮੇਰੇ ਦੋਸਤ ਨੇ [BIZ] ਬਾਰੇ ਦੱਸਿਆ ਸੀ, ਉਸਦਾ ਬਹੁਤ ਧੰਨਵਾਦ।", 
      "ਮੇਰੀ ਤਾਂ ਹੁਣ ਕੱਪੜਿਆਂ ਲਈ ਫੇਵਰੇਟ ਦੁਕਾਨ [BIZ] ਹੀ ਹੈ।"
    ],
    middle: [
      "ਇੱਥੇ ਸਟਾਫ ਬਹੁਤ ਵਧੀਆ ਤਰੀਕੇ ਨਾਲ ਗੱਲ ਕਰਦਾ ਹੈ ਅਤੇ ਕੱਪੜੇ ਪਸੰਦ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
      "ਕੱਪੜੇ ਦੀ ਕੁਆਲਿਟੀ ਵਿੱਚ ਕੋਈ ਸਮਝੌਤਾ ਨਹੀਂ ਅਤੇ ਰੇਟ ਵੀ ਬਿਲਕੁਲ ਜਾਇਜ਼ ਹਨ।",
      "ਵਿਆਹਾਂ ਦੇ ਕੱਪੜਿਆਂ ਤੋਂ ਲੈ ਕੇ ਰੋਜ਼ਾਨਾ ਪਾਉਣ ਵਾਲੇ ਕੱਪੜੇ, ਸਭ ਕੁਝ ਇੱਥੇ ਮਿਲ ਜਾਂਦਾ ਹੈ।",
      "ਇਨ੍ਹਾਂ ਕੋਲ ਰੰਗਾਂ ਅਤੇ ਡਿਜ਼ਾਈਨਾਂ ਦੀ ਬਹੁਤ ਵੱਡੀ ਵਰਾਇਟੀ ਹੈ।",
      "ਗਾਹਕ ਨੂੰ ਪੂਰਾ ਸਮਾਂ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਕੋਈ ਕਾਹਲੀ ਨਹੀਂ ਕਰਦੇ।",
      "ਦੁਕਾਨਦਾਰ ਦਾ ਸੁਭਾਅ ਬਹੁਤ ਵਧੀਆ ਹੈ।", 
      "ਮੈਂ ਆਪਣੇ ਪਰਿਵਾਰ ਲਈ ਕੱਪੜੇ ਲਏ ਸੀ ਤੇ ਸਾਰਿਆਂ ਨੂੰ ਬਹੁਤ ਪਸੰਦ ਆਏ।", 
      "ਬਾਕੀ ਦੁਕਾਨਾਂ ਦੇ ਮੁਕਾਬਲੇ ਇੱਥੇ ਰੇਟ ਕਾਫੀ ਸਹੀ ਲੱਗੇ ਮੈਨੂੰ।", 
      "ਕੱਪੜਿਆਂ ਦੀ ਫਿਨਿਸ਼ਿੰਗ ਬਹੁਤ ਕਮਾਲ ਦੀ ਹੈ।", 
      "ਇੱਥੇ ਆ ਕੇ ਬਾਰਗੇਨਿੰਗ ਦੀ ਕੋਈ ਲੋੜ ਨਹੀਂ, ਫਿਕਸ ਅਤੇ ਵਧੀਆ ਰੇਟ ਹਨ।"
    ],
    ending: [
      "ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਇੱਥੋਂ ਸ਼ਾਪਿੰਗ ਕਰ ਲਓ ਬਾਈ।",
      "ਮੇਰੇ ਵੱਲੋਂ 100% ਰਿਕਮੈਂਡਡ ਹੈ।",
      "ਪੈਸੇ ਬਿਲਕੁਲ ਵੇਸਟ ਨਹੀਂ ਹੋਣਗੇ, ਪੱਕੀ ਗੱਲ ਹੈ।",
      "ਬਹੁਤ ਵਧੀਆ ਐਕਸਪੀਰੀਅੰਸ ਰਿਹਾ।",
      "ਇੱਕ ਵਾਰ ਜ਼ਰੂਰ ਜਾ ਕੇ ਦੇਖੋ, ਪਛਤਾਓਗੇ ਨਹੀਂ।",
      "ਪੈਸੇ ਪੂਰੇ ਵਸੂਲ ਹੋ ਗਏ।", 
      "ਪੂਰੀ ਟੀਮ ਦਾ ਬਹੁਤ-ਬਹੁਤ ਧੰਨਵਾਦ!", 
      "ਇੱਥੋਂ ਸ਼ਾਪਿੰਗ ਕਰਨਾ ਬਿਲਕੁਲ ਸਹੀ ਫੈਸਲਾ ਸੀ।", 
      "ਮੇਰੇ ਵੱਲੋਂ 10/10 ਰੇਟਿੰਗ।", 
      "ਮੈਂ ਤਾਂ ਅੱਗੇ ਤੋਂ ਵੀ ਇੱਥੋਂ ਹੀ ਕੱਪੜੇ ਲਵਾਂਗਾ।"
    ]
  }
};

// ===== APP STATE =====
let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];
let usedReviewsFromServer = []; 

// ===== HELPERS =====
function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function createReview(lang) {
  const t = templates[lang];
  const intro = randomItem(t.intro).replace("[BIZ]", businessName);
  return `${intro} ${randomItem(t.middle)} ${randomItem(t.ending)}`;
}

// ===== INIT APP & CONNECT TO DB (BULLETPROOF VERSION) =====
async function initApp() {
  const reviewsBox = document.getElementById("reviews");
  if (reviewsBox) reviewsBox.innerHTML = "<p style='text-align:center; color: gray;'>Loading fresh reviews...</p>";
  document.getElementById("loadMoreBtn").style.display = "none";
  
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();
    
    // SAFETY CHECK: Make absolutely sure the database gave us an Array list. 
    // If it gave us an error message instead, force it to be an empty list so the app doesn't crash.
    usedReviewsFromServer = Array.isArray(data) ? data : [];
    
  } catch (error) {
    console.error("Database connection failed. Loading offline mode.", error);
    usedReviewsFromServer = [];
  }
  
  // Force the app to start and load the reviews no matter what happened above
  setLanguage('en'); 
}

// ===== BUILD SAFE REVIEWS & FAILSAFE =====
function buildPool() {
  generatedReviews = [];
  const used = new Set();
  let safetyCounter = 0; 

  while (used.size < 30 && safetyCounter < 3000) {
    safetyCounter++;
    const newReview = createReview(currentLang);
    if (!usedReviewsFromServer.includes(newReview) && !used.has(newReview)) {
      used.add(newReview);
    }
  }

  generatedReviews = [...used];
  shownCount = 0;

  // The Failsafe: If all 1000 combinations are used in this language
  if (generatedReviews.length === 0) {
    document.getElementById("reviews").innerHTML = `
      <div style="text-align:center; padding: 30px 10px;">
        <h3 style="margin-bottom:10px;">🎉 Thank You!</h3>
        <p style="color:gray;">We have received an overwhelming amount of support. All available unique reviews in this language have been posted.</p>
      </div>`;
    document.getElementById("loadMoreBtn").style.display = "none";
    return false; // Tells the app to stop loading
  }
  return true; 
}

// ===== LOAD MORE =====
function loadMore() {
  const box = document.getElementById("reviews");

  for (let i = 0; i < batchSize; i++) {
    if (shownCount >= generatedReviews.length) {
      document.getElementById("loadMoreBtn").style.display = "none";
      return;
    }

    const review = generatedReviews[shownCount];
    shownCount++;

    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.textContent = review;

    const btn = document.createElement("button");
    btn.textContent = "Post Review";
    btn.className = "post-btn";
    btn.onclick = () => postReview(review);

    card.appendChild(text);
    card.appendChild(btn);
    box.appendChild(card);
  }
}

// ===== LANGUAGE SWITCH =====
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("reviews").innerHTML = "";
  document.getElementById("loadMoreBtn").style.display = "block";
  
  const poolBuilt = buildPool();
  if (poolBuilt) { loadMore(); }
}

// ===== COPY + OPEN GOOGLE + SAVE TO DB =====
function postReview(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.open(googleReviewLink, "_blank");
    alert("Review copied 👍 Paste it on Google and press POST.");

    fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ review: text })
    });

    usedReviewsFromServer.push(text);
  });
}

// ===== START THE ENGINE =====
initApp();
