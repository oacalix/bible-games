/*
 * Google Analytics 4 loader, shared by every page in this hub.
 * To turn tracking on: replace the placeholder below with your real
 * Measurement ID from https://analytics.google.com/ (looks like "G-XXXXXXXXXX"),
 * then commit. Nothing is loaded or sent until a real ID is set here.
 */
window.GA_MEASUREMENT_ID = 'G-PEHE4YYNK3';

(function () {
  var id = window.GA_MEASUREMENT_ID;
  if (!id || id === 'G-XXXXXXXXXX') return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
})();
