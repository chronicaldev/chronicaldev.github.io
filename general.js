const dropdownToggle = document.querySelector('#dropdown-toggle');
const dropdown = document.querySelector('#dropdown');
const nav = document.querySelector('nav');
const logo = document.querySelector('#logo');
const settings = document.querySelector('.settings');
const settings_close = document.querySelector('.settings .cross');
const settings_button = document.querySelector('.settings-button');
const settings_lang_german = document.querySelector('.settings .flag-icon-deu');
const settings_lang_english = document.querySelector('.settings .flag-icon-gbr');

let language = navigator.language.startsWith('de') ? "german" : "english";

dropdownToggle.addEventListener('click', () => {
    let isOn = dropdownToggle.classList.contains('on');
    isOn ? dropdownToggle.classList.remove('on') : dropdownToggle.classList.add('on');
    isOn ? dropdown.classList.remove('on') : dropdown.classList.add('on');
    nav.style = !isOn ? 'background: transparent; backdrop-filter: none;' : ''
});

logo.addEventListener('click', () => {
    window.location.href = '/';
})

settings_close.addEventListener('click', () => {
    if (settings.classList.contains('on')) settings.classList.remove('on');
});

settings_button.addEventListener('click', () => {
    if (!settings.classList.contains('on')) settings.classList.add('on');
});

settings_lang_german.addEventListener('click', () => {
    language = "german";
    update();
    update_general();
});

settings_lang_english.addEventListener('click', () => {
    language = "english";
    update();
    update_general();
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 767 && settings.classList.contains('on')) settings.classList.remove('on');
})
