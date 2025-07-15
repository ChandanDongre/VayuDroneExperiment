let currentPage = 'loading';

function navigateTo(pageId) {
    const currentPageEl = document.getElementById(currentPage);
    if (currentPageEl) {
        currentPageEl.classList.add('hidden');
    }

    const newPageEl = document.getElementById(pageId);
    if (newPageEl) {
        newPageEl.classList.remove('hidden');
        currentPage = pageId;
    }
}
if (pageId === 'welcome') {
  const loadingScreen = document.getElementById('loading');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden'); // 👈 hides loading screen completely
  }
}

document.addEventListener('DOMContentLoaded', function () {
    navigateTo('welcome');
});
