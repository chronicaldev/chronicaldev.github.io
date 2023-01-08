const index_words = {
    "index_title": {
        "german":  "Open Source für alle",
        "english": "Open Source for everyone"
    },
    "index_subtitle": {
        "german":  "Wir verbessern die Welt mit kostenloser Software die funktioniert.",
        "english": "Making the world a better place with free software that works."
    },
    "index_btn_ideology": {
        "german":  "Unsere Ideologie",
        "english": "Our Ideology"
    },
    "index_btn_products": {
        "german":  "Unsere Produkte",
        "english": "Our Products"
    }
}

function update() {
    const index_title = document.getElementsByClassName("lcl_index_title");
    for (let i = 0; i < index_title.length; i++) index_title[i].innerText = index_words["index_title"][language];

    const index_subtitle = document.getElementsByClassName("lcl_index_subtitle");
    for (let i = 0; i < index_subtitle.length; i++) index_subtitle[i].innerText = index_words["index_subtitle"][language];

    const index_btn_ideology = document.getElementsByClassName("lcl_index_btn_ideology");
    for (let i = 0; i < index_btn_ideology.length; i++) index_btn_ideology[i].innerText = index_words["index_btn_ideology"][language];

    const index_btn_products = document.getElementsByClassName("lcl_index_btn_products");
    for (let i = 0; i < index_btn_products.length; i++) index_btn_products[i].innerText = index_words["index_btn_products"][language];
}

update();
