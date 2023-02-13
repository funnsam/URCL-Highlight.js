document.addEventListener("DOMContentLoaded", (_) => {
    let input       = document.getElementById("input");
    let hl_box      = document.getElementById("hl_box");

    input.oninput  = (_) => { highlight() };
    input.onscroll = (_) => {
        hl_box.scrollTo(input.scrollLeft, input.scrollTop);
    }
    highlight();
    
    function highlight() {
        hl_box.innerHTML = hljs.highlight(input.value, {language: "urcl"}).value;
    }
})
