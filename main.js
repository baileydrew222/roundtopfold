// Round Top Fold - Cookie Consent
(function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Check if user has already made a choice
  if (localStorage.getItem('rtf-cookie-consent')) {
    banner.style.display = 'none';
    return;
  }

  banner.style.display = 'flex';

  document.getElementById('cookie-accept')?.addEventListener('click', function () {
    localStorage.setItem('rtf-cookie-consent', 'accepted');
    banner.style.display = 'none';
  });

  document.getElementById('cookie-decline')?.addEventListener('click', function () {
    localStorage.setItem('rtf-cookie-consent', 'declined');
    banner.style.display = 'none';
  });
})();