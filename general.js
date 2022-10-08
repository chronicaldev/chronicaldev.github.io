const dropdownToggle = document.querySelector('#dropdown-toggle');
const dropdown = document.querySelector('#dropdown');
const nav = document.querySelector('nav');
const logo = document.querySelector('#logo');

dropdownToggle.addEventListener('click', () => {
    let isOn = dropdownToggle.classList.contains('on');
    isOn ? dropdownToggle.classList.remove('on') : dropdownToggle.classList.add('on');
    isOn ? dropdown.classList.remove('on') : dropdown.classList.add('on');
    nav.style = !isOn ? 'background: transparent; backdrop-filter: none;' : ''
});

logo.addEventListener('click', () => {
    window.location.href = '/';
})