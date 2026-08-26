const inputEl = document.getElementById('userInput');
const buttonEl = document.getElementById('actionBtn');

buttonEl.addEventListener('click', () => {
  if (inputEl.value.trim() !== '') {
    buttonEl.textContent = inputEl.value;
  }
});

const imageEl = document.getElementById('mainImage');
const changeImgBtn = document.getElementById('changeImgBtn');

changeImgBtn.addEventListener('click', () => {
  imageEl.src = 'new-image.jpg';
});

const linkEl = document.getElementById('siteLink');
const bannerEl = document.getElementById('bannerImage');

linkEl.href = 'https://courses-all.goiteens.com/';
bannerEl.setAttribute('alt', 'Опис банера: акційні пропозиції');

const listEl = document.getElementById('itemList');
const firstItem = listEl.firstElementChild;
firstItem.textContent = 'Новий текст першого елемента';