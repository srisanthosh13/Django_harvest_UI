document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });


    function confirm_logout(event) {
        if (!confirm('Are you sure you want to Logout?')) {
            event.preventDefault(); // Prevent navigation if the user cancels
        }
    }



function closePopup() {
    const popupElement = document.querySelector('#popup');
    if (popupElement) {
        popupElement.style.width = '0%'; // Hide the popup
    }
}

function Popup_side(name, price, brand, image, stock, url) {
    // Set the popup content
    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-image').src = image;

    // // Show the popup
    const popupElement = document.getElementById('popup');
    popupElement.style.display = 'block';
    popupElement.style.width = '50%';

    // Set the URL for the product
    const popupUrlElement = document.getElementById('popup-url');
    popupUrlElement.href = url;
}
