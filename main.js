function colorRandomizer(){
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    GetColorName(color);
    document.body.style.backgroundColor = color;
    genNew.addEventListener("click", setBg);
setBg();
}

function GetColorName(color) {
    const change = document.getElementById("colorName");
    change.innerHTML = color
    change.style.color = color

}