const t = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked!");
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    t.style.color = `rgb(${r}, ${g}, ${b})`
}

function handleMouseEnter(){
    t.style.color = "#1abc9c"
    t.innerText = "Mouse is here!";
}

function handelMouseLeave(){
    t.style.color = "#3498db"
    t.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    t.style.color = "#9b59b6"
    t.innerText = "You just resized!";
}

function handleWindowRightClick(){
    t.style.color = "#f39c12"
    t.innerText = "That was a right click!";
}

t.addEventListener("click", handleTitleClick);
t.addEventListener("mouseenter", handleMouseEnter);
t.addEventListener("mouseleave", handelMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleWindowRightClick);
/*
아래 두 개는 정확히 기능이 똑같음
document.querySelector('#hello')
document.getElementById("hello");

그런데도 querySelector를 쓰는 이유?
querySelector는 하위 element까지 검색 가능
document.querySelector('#hello form')
*/

/*
아래 두 개는 기능이 같음.
t.addEventListener("click", handleTitleClick);
t.onclick = handleTitleClick;

addEventListner의 장점은 removeEventListner를 통해 event listner를 제거할 수 있음


document.body / title / head는 불러올 수 있지만,
document.div 이런거는 없음..
*/