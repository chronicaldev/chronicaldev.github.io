const ideology_words = {
    "ideology_title": {
        "german":  "Unsere Ideologie",
        "english": "Our Ideology"
    },
    "ideology_subtitle": {
        "german":  "Kostenlos und Privat",
        "english": "Free as in Freedom"
    },
    "ideology_content": {
        "german":  "Wir vcon CHRONICAL, was im moment nur ich bin, glauben, dass Software kostenlos, transparent und funktionell zugleich sein sollte. Deswegen wollen wir die Zukunft von Software so gut wie möglich gestalten. Auch wenn das bedeutet, dass wir nicht so viel verdienen wie Andere (Was im Moment nichts ist) wollen wir einen Schritt weiter gehen um die Benutzererfahrung zu verbessern. Wir versuchen auch, so wenig Daten wie möglich von unseren Benutzern zu sammeln, aber ihnen auch zu erlauben, zu entscheiden, was wir wissen dürfen. Wir arbeiten mit verschiedensten Technologien wie Tauri und ASP.NET, um sicher zu gehen, dass eine Balance zwischen Sicherheit, Performance und Entwicklererfahrung besteht. So hat jeder Spaß: der Endnutzer und der Entwickler! Super, nicht wahr?",
        "english": "We at CHRONICAL, that is currently just me, think, that software should be free, transparent and well-made at the same time. That is why we aim to make the future of software the best it can be. This also means that we might not make as much money as others (meaning nothing at the moment), but we also want to go that extra kilometer for a better User experience. In addition to that, we try to collect as few data as possible from our Users while also letting them see what we do and decide for themselves what we are allowed to collect. We work with multiple technologies, such as Tauri and ASP.NET to ensure a balance between safety, performance and developer experience. That way everyone has fun: The end user and the developer! Isn't that great?"
    }
}

function update() {
    const ideology_title = document.getElementsByClassName("lcl_ideology_title");
    for (let i = 0; i < ideology_title.length; i++) ideology_title[i].innerText = ideology_words["ideology_title"][language];

    const ideology_subtitle = document.getElementsByClassName("lcl_ideology_subtitle");
    for (let i = 0; i < ideology_subtitle.length; i++) ideology_subtitle[i].innerText = ideology_words["ideology_subtitle"][language];

    const ideology_content = document.getElementsByClassName("lcl_ideology_content");
    for (let i = 0; i < ideology_content.length; i++) ideology_content[i].innerText = ideology_words["ideology_content"][language];
}

update();