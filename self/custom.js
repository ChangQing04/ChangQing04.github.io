
(function () {
  function init() {
    const header = document.getElementById('page-header');
    const webBg = document.getElementById('web_bg');
    if (!header) return;

    // 顶部图已透明，仅保留模糊逻辑
    const blurValue = 8;
    const startPercent = 0.5;
    const maxScroll = window.innerHeight;

    function onScroll() {
      const y = window.scrollY;
      let blur = 0;
      if (y > maxScroll * startPercent) {
        blur = blurValue;
      }
      header.style.setProperty('--header-blur', `${blur}px`);
      header.style.setProperty('--header-blur-webkit', `${blur}px`);
      if (webBg) {
        webBg.style.setProperty('--bg-blur', `${blur}px`);
        webBg.style.setProperty('--bg-blur-webkit', `${blur}px`);
      }
    }

    document.addEventListener('scroll', onScroll);
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

