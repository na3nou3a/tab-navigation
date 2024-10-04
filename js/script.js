const tabs = document.querySelectorAll('.tab');
const copyrightEl = document.querySelector('#year');
// ============EVENTS==============
tabs.forEach((tab) => {
  tab.addEventListener('click', handleTabClickEvent);
});

// ============FUNCTIONS==============
function handleTabClickEvent(e) {
  const tab = e.currentTarget;
  if (tab.classList.contains('active')) return;
  const activeTab = document.querySelector('.tab.active');
  const dataTab = tab.dataset.tab;
  const pages = document.querySelectorAll('.page');
  const activePage = document.querySelector('.active-page');
  activeTab.classList.remove('active');
  tab.classList.add('active');
  // pages
  let nextPage;
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const dataPage = page.dataset.page;
    if (dataTab === dataPage) {
      nextPage = page;
      break;
    }
  }
  activePage.classList.remove('active-page');
  nextPage.classList.add('active-page');
}

// start
copyrightEl.textContent = new Date().getFullYear();
