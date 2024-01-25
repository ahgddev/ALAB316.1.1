let mainEl = document.getElementsByTagName("main")
mainEl[0].style.backgroundColor = "var(--main-bg)"
mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"
mainEl[0].classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around")


// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Create Nav
for (link of menuLinks){
   let newLink = topMenuEl.appendChild(document.createElement("a"))
   newLink.href = link.href
   newLink.innerText = link.text
   console.log(link.href, link.text)
}
