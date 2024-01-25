import "./styles.css";
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Create Nav
for (link in menuLinks){
   let newLink = topMenuEl.appendChild(document.createElement("a"))
   newLink.href = link.href
   newLink.innerText = link.text
}

let mainEl = document.getElementsByTagName("main")
mainEl.style.backgroundColor = "var(--sub-menu-bg)"
mainEl.appendChild(document.createElement("h1").textContent="DOM Manipulation")
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around")