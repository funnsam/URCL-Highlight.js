document.addEventListener("DOMContentLoaded", (_) => {
    let input       = document.getElementById("input");
    let hl_box      = document.getElementById("hl_box");

    input.onchange  = (_) => { highlight() };
    highlight();
    
    function highlight() {
        hl_box.innerHTML = hljs.highlight(input.value, {language: "urcl"}).value;
    }
})
