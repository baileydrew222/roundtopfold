(function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('rtf-cookie-consent')) {
    banner.style.display = 'none';
    document.body.classList.remove('cookie-open');
    return;
  }

  banner.style.display = 'flex';
  document.body.classList.add('cookie-open');

  function closeBanner(value) {
    localStorage.setItem('rtf-cookie-consent', value);
    banner.style.display = 'none';
    document.body.classList.remove('cookie-open');
  }

  document.getElementById('cookie-accept')?.addEventListener('click', function () {
    closeBanner('accepted');
  });
  document.getElementById('cookie-decline')?.addEventListener('click', function () {
    closeBanner('declined');
  });
})();
