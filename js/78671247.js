window.onload = function(){
    f000(),
    f001(),
    f010(),
    f011()
}

function f000(){
    let circle = document.createElement("div");
    circle.className = "circle";
    document.body.appendChild(circle);
}

function f001(){
    document.title = document.querySelector(".top").innerHTML;
}

function f010(){
    let footer = document.createElement("footer");
    footer.innerHTML = "ibragimov";
    footer.className = "footerDiv";
    document.body.appendChild(footer);
}

function f011(){
    let back = document.createElement("button");
    back.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"/></svg>';
    back.className = "back";
    back.addEventListener("click", function(){
        window.history.back();
    })
    document.body.appendChild(back);
}