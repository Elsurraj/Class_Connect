//js for handbugger Menu
 const year = new Date().getFullYear();
 document.getElementById('currentYear').textContent = year;
    function menutoggle() {
    var menu = document.getElementById("menuItems");
    menu.classList.toggle("active");
}

function toggleContent(id){
    const div = document.getElementById(id);
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none'
}



 // JS for small product image switching
    const ProductImg = document.getElementById("ProductImg");
    const SmallImg = document.getElementsByClassName("small-img");

    for (let i = 0; i < SmallImg.length; i++) {
      SmallImg[i].onclick = function () {
        ProductImg.src = SmallImg[i].src;
      };
    }

    // Set current year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();


//initializing aos
