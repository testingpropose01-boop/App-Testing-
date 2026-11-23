/* ==========================================================
   SAHARO – Central image config (Cloudflare R2)
   Bucket: saharo-website
   Naya image add karna ho to sirf yahan ek key jodo.
   HTML mein URL kabhi hardcode nahi hota: data-img="branding.logo"
   ========================================================== */

const R2_BASE_URL = "https://assets.saharogrowth.com";

const R2_IMAGES = {
  // branding/ – logo aur brand assets (home banners abhi yahin uploaded hain)
  branding: {
    logo: "branding/saharo-website-logo.png",
    homeBanner01: "branding/home-banner-01.png",
    homeBanner02: "branding/home-banner-02.png",
    homeBanner03: "branding/home-banner-03.png",
    footerLogo: "branding/saharo-footer-logo.png", // dark footer ke liye light/cream logo
  },

  // popular-services/ – "Our Popular Services" cards (agle step mein)
  popularServices: {
    studyTracking: "popular-services/study-tracking.png",
    careerGrowth: "popular-services/career-growth.png",
    lifeSkills: "popular-services/life-skills.png",
    counselling: "popular-services/counselling.jpg",
    community: "popular-services/community.png",
    saharoClubs: "popular-services/saharo-clubs.png",
  },

  // club-services/ – "SAHARO Clubs" cards (agle step mein)
  clubServices: {
    cafe: "club-services/cafe.png",
    communityZone: "club-services/community-zone.png",
    openMicEvents: "club-services/open-mic-events.png",
    wisdomLibrary: "club-services/wisdom-library.png",
    counsellingSessions: "club-services/counselling-sessions.png",
  },
};

/* Youth Feedback: text + photo ka R2 object key is JSON mein hota hai (naya feedback = JSON mein ek entry) */
const R2_FEEDBACK = "user-feedback/feedback.json";

/* img('branding.logo') -> https://assets.saharogrowth.com/branding/saharo-website-logo.png */
function img(path) {
  const key = path.split(".").reduce((o, k) => (o ? o[k] : undefined), R2_IMAGES);
  if (!key) {
    console.warn("R2_IMAGES mein key nahi mili:", path);
    return "";
  }
  return R2_BASE_URL + "/" + key;
}

/* SAHARO Clubs: har city ka folder ek hi pattern par: saharo-clubs/<city>/<city>-hero-1.png ... <city>-events.json
   Nayi city = CLUB_CITIES mein naam + nav dropdown mein link + R2 mein folder. */
const R2_CLUBS = "saharo-clubs";
const CLUB_CITIES = ["jaipur", "delhi", "prayagraj", "sikar", "kota"];

/* clubAsset('jaipur', 'hero-1.png') -> https://assets.saharogrowth.com/saharo-clubs/jaipur/jaipur-hero-1.png */
function clubAsset(city, file) {
  return R2_BASE_URL + "/" + R2_CLUBS + "/" + city + "/" + city + "-" + file;
}
