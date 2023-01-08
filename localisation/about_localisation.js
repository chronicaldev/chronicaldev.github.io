const about_words = {
    "about_title": {
        "german":  "Über uns",
        "english": "About Us"
    },
    "about_subtitle": {
        "german":  "Wer wir sind",
        "english": "Who we are"
    },
    "about_content": {
        "german":  "Chronical ist eine Gruppe Leuten die gerne programmieren. Wir wollen Software machen, die so gut wie möglich ist und Alternativen zu bekannten Closed-Source Apps erstellen. So kann jeder sichergehen, dass wir ihre Daten nicht verkaufen und dass alles sicher ist. Unser Logo wurde von unserem Standort in den Deutschen Alpen inspiriert.",
        "english": "Chronical is a group of people that love to code. We aim to make our Software the best it can be and make alternatives to popular closed-source apps. That way, everyone can make sure we don't sell your data and that everything is secure. We are located in the german alps, which is where our logo originates from."
    }
    ,
    "about_contact_title": {
        "german":  "Kontakt",
        "english": "Contact"
    },
    "about_contact_content": {
        "german":  "E-Mail: chronicalde@gmail.com ",
        "english": "Email: chronicalde@gmail.com "
    }
}
function update() {
    const about_title = document.getElementsByClassName("lcl_about_title");
    for (let i = 0; i < about_title.length; i++) about_title[i].innerText = about_words["about_title"][language];

    const about_subtitle = document.getElementsByClassName("lcl_about_subtitle");
    for (let i = 0; i < about_subtitle.length; i++) about_subtitle[i].innerText = about_words["about_subtitle"][language];

    const about_content = document.getElementsByClassName("lcl_about_content");
    for (let i = 0; i < about_content.length; i++) about_content[i].innerText = about_words["about_content"][language];

    const about_contact_title = document.getElementsByClassName("lcl_about_contact_title");
    for (let i = 0; i < about_contact_title.length; i++) about_contact_title[i].innerText = about_words["about_contact_title"][language];

    const about_contact_content = document.getElementsByClassName("lcl_about_contact_content");
    for (let i = 0; i < about_contact_content.length; i++) about_contact_content[i].innerText = about_words["about_contact_content"][language];
}

update();
