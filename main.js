let m = document.querySelector("#m");
let t = document.querySelector("#t");
let w = document.querySelector("#w");
let th = document.querySelector("#th");
let f = document.querySelector("#f");
let s = document.querySelector("#s");
let su = document.querySelector("#su");

let said = document.querySelector(".said");
let khalif = document.querySelector(".khalif");
let joseph = document.querySelector(".joseph");
let david = document.querySelector(".david");

m.addEventListener('click', () => {
    m.style.background = 'orangered'
    m.style.color = 'white'
    t.style.background = 'white'
    t.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'white'
    su.style.color = 'black'
    said.style.background = 'orangered'
    said.style.color = 'white'
    khalif.style.background = 'white'
    khalif.style.color = 'black'
    david.style.background = 'white'
    david.style.color = 'black'
    joseph.style.background = 'white'
    joseph.style.color = 'black'
})

t.addEventListener('click', () => {
    t.style.background = 'orangered'
    t.style.color = 'white'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'white'
    su.style.color = 'black'
    said.style.background = 'white'
    said.style.color = 'black'
    khalif.style.background = 'white'
    khalif.style.color = 'black'
    david.style.background = 'white'
    david.style.color = 'black'
    joseph.style.background = 'orangered'
    joseph.style.color = 'white'
})

w.addEventListener('click', () => {
    t.style.background = 'white'
    t.style.color = 'black'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.color = 'white'
    w.style.background = 'orangered'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'white'
    su.style.color = 'black'
    said.style.background = 'white'
    said.style.color = 'black'
    khalif.style.background = 'white'
    khalif.style.color = 'black'
    david.style.background = 'orangered'
    david.style.color = 'white'
    joseph.style.background = 'white'
    joseph.style.color = 'black'
})

th.addEventListener('click', () => {
    t.style.background = 'white'
    t.style.color = 'black'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'orangered'
    th.style.color = 'white'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'white'
    su.style.color = 'black'
    said.style.background = 'orangered'
    said.style.color = 'white'
    khalif.style.background = 'white'
    khalif.style.color = 'black'
    david.style.background = 'white'
    david.style.color = 'black'
    joseph.style.background = 'white'
    joseph.style.color = 'black'
})


f.addEventListener('click', () => {
    t.style.background = 'white'
    t.style.color = 'black'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'orangered'
    f.style.color = 'white'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'white'
    su.style.color = 'black'
    said.style.background = 'white'
    said.style.color = 'black'
    khalif.style.background = 'orangered'
    khalif.style.color = 'white'
    david.style.background = 'white'
    david.style.color = 'black'
    joseph.style.background = 'white'
    joseph.style.color = 'black'
})

s.addEventListener('click', () => {
    t.style.background = 'white'
    t.style.color = 'black'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'orangered'
    s.style.color = 'white'
    su.style.background = 'white'
    su.style.color = 'black'
})

su.addEventListener('click', () => {
    t.style.background = 'white'
    t.style.color = 'black'
    m.style.background = 'white'
    m.style.color = 'black'
    w.style.background = 'white'
    w.style.color = 'black'
    th.style.background = 'white'
    th.style.color = 'black'
    f.style.background = 'white'
    f.style.color = 'black'
    s.style.background = 'white'
    s.style.color = 'black'
    su.style.background = 'orangered'
    su.style.color = 'white'
})

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();

    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}