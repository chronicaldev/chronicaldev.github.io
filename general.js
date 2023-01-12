const dropdownToggle = document.querySelector('#dropdown-toggle');
const dropdown = document.querySelector('#dropdown');
const nav = document.querySelector('nav');
const logo = document.querySelector('#logo');
const settings_lang_german = document.querySelectorAll('.flag-icon-deu');
const settings_lang_english = document.querySelectorAll('.flag-icon-gbr');

dropdownToggle.addEventListener('click', () => {
    let isOn = dropdownToggle.classList.contains('on');
    isOn ? dropdownToggle.classList.remove('on') : dropdownToggle.classList.add('on');
    isOn ? dropdown.classList.remove('on') : dropdown.classList.add('on');
    nav.style = !isOn ? 'background: transparent; backdrop-filter: none;' : ''
});

logo.addEventListener('click', () => {
    window.location.href = '/' + getCookie('lang') ?? navigator.language;
})

settings_lang_german.forEach(el => el.addEventListener('click', () => {
    window.location.href = window.location.href.replace('/en', '/de');
    setCookie('lang', 'de', 9999);
}));

settings_lang_english.forEach(el => el.addEventListener('click', () => {
    window.location.href = window.location.href.replace('/de', '/en');
    setCookie('lang', 'en', 9999);
}));

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
  }