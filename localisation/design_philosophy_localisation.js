const design_philosophy_words = {
    "design_philosophy_title": {
        "german":  "Designphilosophie",
        "english": "Design Philosophy"
    },
    "design_philosophy_subtitle": {
        "german":  "Ein gutes Design ist genau so wichtig wie gute Produkte",
        "english": "A good design is as important as good products"
    },
    "design_philosophy_content": {
        "german":  "Wir wollen qualitativ hochwertige Produkte erstellen, aber dafür muss nicht nur die UX gut sein, sondern auch die UI. Einen großen Beitrag spielt dabei die Einheitlichkeit. Deswegen haben wir Ludum Design erschaffen. Es ist eine Kombination aus Schriftart, Farbe und Ausmaßen die wir in fast allen Produkten benutzen. Es kann auch auf viele andere Farbschemen adaptiert werden, was es perfekt für Apps wie Jabsy macht, die haufenweise Personalisierung erlauben. Ludum Design wurde von Apples und Vercels Designs und Ludum Icons, das Icon Pack für Ludum Design, von Font Awesome und Feather Icons inspiriert",
        "english": "We want to make good quality products, but for that, you not only need a good UX, but also a good UI. A big part in designing something is consistency, which is the exact reason we made Ludum Design. It is a combination of font, color and size choice for almost all of our products. It can also be adapted to many other color schemes, which makes it perfect for apps like Jabsy that offer vast amounts of customizability. Ludum Design was inspired by Apple and Vercel's design languages and Ludum Icons, Ludum Design's icon pack, is inspired by Font Awesome and Feather Icons."
    }
}

function update() {
    const design_philosophy_title = document.getElementsByClassName("lcl_design_philosophy_title");
    for (let i = 0; i < design_philosophy_title.length; i++) design_philosophy_title[i].innerText = design_philosophy_words["design_philosophy_title"][language];

    const design_philosophy_subtitle = document.getElementsByClassName("lcl_design_philosophy_subtitle");
    for (let i = 0; i < design_philosophy_subtitle.length; i++) design_philosophy_subtitle[i].innerText = design_philosophy_words["design_philosophy_subtitle"][language];

    const design_philosophy_content = document.getElementsByClassName("lcl_design_philosophy_content");
    for (let i = 0; i < design_philosophy_content.length; i++) design_philosophy_content[i].innerText = design_philosophy_words["design_philosophy_content"][language];
}

update();
