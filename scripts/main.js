let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if ( mySrc === "images/chrome.png") {
        myImage.setAttribute("src","images/feishu.png");
    } else {
        myImage.setAttribute("src","images/chrome.png");
    }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedNmae = localStorage.getItem("name");
    myHeading.textContent = "chrome 介绍 "+storedNmae;
}

myButton.onclick = function() {
    setUserName();
}
function setUserName() {
    let myName = prompt("请输入用户名");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name",myName);
    myHeading.textContent = "chrome 介绍 "+myName;
}

