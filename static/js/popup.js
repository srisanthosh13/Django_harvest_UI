





function Select_AE()
{
    let select_adv_exp = document.getElementById('select_adv_exp').value;
    console.log(select_adv_exp)
    
    
    switch(select_adv_exp)
    {
        case 'Advance':
            AdvanceUp();
            break
        case 'Expences':
            ExpencesUp();
            break
    }
}
// document.getElementById('adv_box').disabled = true;
// document.getElementById('select_reason').disabled = true;
// document.getElementById('from_box').disabled = true;
// document.getElementById('to_box').disabled = true;
// document.getElementById('exp_box').disabled = true;

 
function AdvanceUp(){
    console.log("Sucesss")
    document.getElementById('adv_box').disabled = false;
    document.getElementById('select_reason').disabled = true;
    document.getElementById('from_box').disabled = true;
    document.getElementById('to_box').disabled = true;
    document.getElementById('exp_box').disabled = true;
    // document.getElementById('select_reason').style.backgroundColor = "white";
}
function ExpencesUp(){
    console.log(ExpencesUp.value)
    if(ExpencesUp.value == 'Hotel')
    {
        document.getElementById('from_box').disabled = true;
        document.getElementById('to_box').disabled = true; 
    }
    else
    {
        document.getElementById('adv_box').disabled = true;
        document.getElementById('select_reason').disabled = false;
        document.getElementById('from_box').disabled = false;
        document.getElementById('to_box').disabled = false;
        document.getElementById('exp_box').disabled = false;

    }
    

    
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


// var logoutLink = document.getElementById('log');
// logoutLink.addEventListener('click', function(event) 
// {
//     event.preventDefault();
//     const confirmLogout = confirm('Are you sure you want to logout?');
    
//     if (confirmLogout)
//     {
//         window.location.href = logoutLink.href;
//     } else 
//     {
//         console.log('Logout cancelled.');
//     }
// });
// function logout() {
//     const confirmLogout = confirm('Are you sure you want to logout?');
//     var logoutLink = document.getElementById('log');

//     if (confirmLogout) {
//         window.location.href = logoutLink.href;
//     } else {
//         console.log('Logout cancelled.');
//         event.preventDefault(); // Prevent the default action of the confirmation dialog
//     }
// }

