const nav_words = {
    "home_page": {
        "german":  "Start",
        "english": "Home"
    },
    "products_page": {
        "german":  "Produkte",
        "english": "Products"
    },
    "ideology_page": {
        "german":  "Ideologie",
        "english": "Ideology"
    },
    "design_philosophy_page": {
        "german":  "Designphilosophie",
        "english": "Design Philosophy"
    },
    "about_page": {
        "german":  "Über uns",
        "english": "About"
    },
    "settings_title": {
        "german": "Optionen",
        "english": "Settings"
    }
}

function update_general() {
    const home_page = document.getElementsByClassName("lcl_home_page");
    for (let i = 0; i < home_page.length; i++) home_page[i].innerText = nav_words["home_page"][language];

    const products_page = document.getElementsByClassName("lcl_products_page");
    for (let i = 0; i < products_page.length; i++) products_page[i].innerText = nav_words["products_page"][language];

    const ideology_page = document.getElementsByClassName("lcl_ideology_page");
    for (let i = 0; i < ideology_page.length; i++) ideology_page[i].innerText = nav_words["ideology_page"][language];

    const design_philosophy_page = document.getElementsByClassName("lcl_design_philosophy_page");
    for (let i = 0; i < design_philosophy_page.length; i++) design_philosophy_page[i].innerText = nav_words["design_philosophy_page"][language];

    const about_page = document.getElementsByClassName("lcl_about_page");
    for (let i = 0; i < about_page.length; i++) about_page[i].innerText = nav_words["about_page"][language];

    const settings_title = document.getElementsByClassName("lcl_settings_title");
    for (let i = 0; i < settings_title.length; i++) settings_title[i].innerText = nav_words["settings_title"][language];
}

update_general();