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

document.addEventListener('DOMContentLoaded', function () {
    navigateTo('welcome');
});
