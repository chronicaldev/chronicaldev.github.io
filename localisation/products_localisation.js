const products_words = {
    "flash_shell_motto": {
        "german":  "Einmal lernen, überall benutzen",
        "english": "Learn once, use everywhere"
    },
    "flash_shell_note": {
        "german":  "Flash Shell ist momentan nicht auf macOS verfügbar",
        "english": "Note: Flash is currently not available on macOS"
    },
    "jabsy_motto": {
        "german":  "Privates chatten neu erfunden",
        "english": "Private chatting, redefined"
    }
}

function update() {
    const flash_shell_motto = document.getElementsByClassName("lcl_flash_shell_motto");
    for (let i = 0; i < flash_shell_motto.length; i++) flash_shell_motto[i].innerText = products_words["flash_shell_motto"][language];

    const flash_shell_note = document.getElementsByClassName("lcl_flash_shell_note");
    for (let i = 0; i < flash_shell_note.length; i++) flash_shell_note[i].innerText = products_words["flash_shell_note"][language];

    const jabsy_motto = document.getElementsByClassName("lcl_jabsy_motto");
    for (let i = 0; i < jabsy_motto.length; i++) jabsy_motto[i].innerText = products_words["jabsy_motto"][language];
}

update();
