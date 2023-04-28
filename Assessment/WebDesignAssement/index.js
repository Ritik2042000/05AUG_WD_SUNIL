function Check() {
    console.log('clicked');
    event.preventDefault();
    let FormRequiredInpField = document.getElementById("form").querySelectorAll("[required]")
    for (let index = 0; index < FormRequiredInpField.length; index++) {
        var y = document.createElement("span")
        var g = document.createTextNode("Fill The Detalis");
        y.appendChild(g);
        if (FormRequiredInpField[index].value == "") {
            if (FormRequiredInpField[index].nextElementSibling.nodeName == "SPAN") {
                FormRequiredInpField[index].nextElementSibling.remove()
            }
            FormRequiredInpField[index].after(y);
        } else {
            if (FormRequiredInpField[index].nextElementSibling.nodeName == 'SPAN') {
                FormRequiredInpField[index].nextElementSibling.remove()
            }
        }
    }
}