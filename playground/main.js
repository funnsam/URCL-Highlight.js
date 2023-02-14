import { get_urcl } from "../src/urcl.js";

document.addEventListener("DOMContentLoaded", (_) => {
    hljs.registerLanguage("urcl", get_urcl);

    let input       = document.getElementById("input");
    let hl_box      = document.getElementById("hl_box");

    input.oninput  = (_) => { highlight() };
    input.onkeydown = (e) => {
        if (e.key == 'Tab') {
            e.preventDefault();
            let a = input.selectionStart+1;
            input.value = input.value.substring(0, input.selectionStart) + "\t" + input.value.substring(input.selectionEnd);
            input.setSelectionRange(a, a);
            highlight();
        };
    };
    input.onscroll = (_) => {
        hl_box.scrollTo(input.scrollLeft, input.scrollTop);
    };
    highlight();
    
    function highlight() {
        hl_box.innerHTML = hljs.highlight(input.value, {language: "urcl"}).value;
    }
})
