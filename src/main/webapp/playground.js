function buttonPressed() {
    // yet another comment
    var text = document.getElementById("firstInput").value.replace(/\s/g, "");
    var reversed = "";

    for(var index in text.split("")){
        reversed += String.fromCharCode(text.charCodeAt(index)+1);
    }
    reversed = reversed.split("").reverse().join("");
    document.getElementById("firstOutput").value = reversed;
}
