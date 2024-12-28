function select()
{
    var selected = document.getElementById("advance").value;
            switch(selected)
            {
                case 'Advance':
                    Advance();
                    break
                case 'Expences':
                    Expences();
                    break
            }
    
}

function Advance()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var amount_box = document.getElementById('amount');
    var file = document.getElementById('file');

    if(advance_box.style.display = 'none')
    {
        document.getElementById('file').disabled=true;
        document.getElementById('amount').disabled=true;
        document.getElementById('advance_box').disabled = false;
        document.getElementById('from').disabled = true;
        document.getElementById('to').disabled = true;
        document.getElementById('exp').disabled = true;
        advance_box.style.display = 'block';
        add_btn2.style.display = 'block';
        expences_box.style.display = 'none';
        from.style.display = 'none';
        to.style.display = 'none';
        amount_box.style.display = 'none';
        file.style.display = 'none';
        
    }
    else{
        advance_box.style.display = 'none';
    }   
}
function Expences()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');

    if(expences_box.style.display = 'none')
    {
        document.getElementById('file').disabled=false;
        document.getElementById('advance_box').disabled = true;
        document.getElementById('amount').disabled=false;
        document.getElementById('from').disabled=false;
        document.getElementById('to').disabled=false;
        document.getElementById('exp').disabled = false;
       
        expences_box.style.display = 'block';
        advance_box.style.display = 'none';
        add_btn2.style.display = 'none';
        from.style.display = 'none';
        to.style.display = 'none';
        amount_box.style.display="none";
        file.style.display = 'none';
    }
    else{
        expences_box.style.display = 'none';
    }
}

// let amount_box = document.getElementById('amount');
// let hotel_opz = document.getElementById('hotel')
// let file = document.getElementById('file');

function Select_Expences()
{
    var select_exp = document.getElementById("exp").value;
    switch(select_exp)
            {
                case 'Hotel':
                    Hotel();
                    break
                case 'Lodge':
                    Lodge();
                    break
                case 'Bus':
                    Bus();
                    break
                case 'Train':
                    Train();
                    break
                case 'Auto':
                    Auto();
                    break
                case 'Material':
                    Material();
                    break
                case 'Xerox':
                    Xerox();
                    break
                case 'Scan':
                    Scan();
                    break
                case 'Print':
                    Print();
                    break
                case 'Others':
                    Others();
                    break
                
            }
}


function Hotel()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

function Lodge()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

function Material(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

function Scan(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

function Xerox(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}


function Print(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

function Others(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(amount_box.style.display = 'none')
    {
        amount_box.style.display = 'block';
        from.style.display = 'none';
        to.style.display = 'none';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        amount_box.style.display = 'none';
    }
}

let from = document.getElementById('from');
let to = document.getElementById('to');
let bus_train_auto = document.querySelectorAll('#bus ,#train, #auto')

function Bus()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(from.style.display = 'none')
    {
        from.style.display = 'block';
        amount_box.style.display = 'block';
        to.style.display = 'block';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        from.style.display = 'none';
        to.style.display = 'none';
    }
}

function Train()
{
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(from.style.display = 'none')
    {
        from.style.display = 'block';
        amount_box.style.display = 'block';
        to.style.display = 'block';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        from.style.display = 'none';
        to.style.display = 'none';
    }
}

function Auto(){
    var advance_box = document.getElementById('advance_box');
    var add_btn2 = document.getElementById('Add');
    var expences_box = document.getElementById('exp');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var file = document.getElementById('file');
    var amount_box = document.getElementById('amount');
    if(from.style.display = 'none')
    {
        from.style.display = 'block';
        amount_box.style.display = 'block';
        to.style.display = 'block';
        file.style.display = 'block';
        add_btn2.style.display = 'block';
    }
    else{
        from.style.display = 'none';
        to.style.display = 'none';
    }
}

var navElement = document.getElementById("mySidenav");
var contents = document.getElementById("details");

// function toggleNav() {
    
//     // console.log(contents.style.width)
//     if (navElement.style.width == "14.5%")
//     {
//         navElement.style.width = "0";
//         contents.style.flexBasis = "100%";
//         contents.style.left = "0";
//         contents.style.width = "100%";
//         contents.style.transition = "0.5s";
//     }
//     else
//     {
//         navElement.style.width = "14.5%";
//         contents.style.flexBasis = "85%";
//         contents.style.left = "14.5%";
//         contents.style.width = "85%";
//         contents.style.transition = "0.5s";

//     }
// //    if (views.style.width == "20%")
// //    {
// //         contents.style.flexBasis = ""
// //    }
// }
var views = document.getElementById("views");
var contents = document.getElementById("details");
// function toggleView(){
    
//     if (views.style.width == "20%")
//     {
//         views.style.width = "0%";
//         contents.style.flexBasis = "85%";
//         contents.style.transition = "0.5s";

//     }
//     else{
//         views.style.width = "20%";
//         contents.style.flexBasis = "65%";
//         contents.style.transition = "0.5s";

//     }

// }

function toggleNav() 
{
    var navElement = document.getElementById('mySidenav');
    var contents = document.getElementById('details');
    if (navElement.style.width == "0%") 
    {
        navElement.style.width = "14.5%";
        contents.style.flexBasis = "85%";
        contents.style.left = "14.5%";
        contents.style.width = "85%";
        contents.style.transition = "0.5s";
    } 
    else 
    {
        navElement.style.width = "0%";
        contents.style.flexBasis = "100%";
        contents.style.left = "0%";
        contents.style.width = "100%";
        contents.style.transition = "0.5s";
    }
    // if ( views.style.width == "")
}

function toggleView() 
{
    var contents = document.getElementById('details');
    var tableExp1 = document.getElementById('table1');
    var tableExp2 = document.getElementById('table2');
    var views = document.getElementById('views');
    var submitState = document.getElementById('submit_state');
    var note = document.getElementById('NOTE');
    if (views.style.width == "30%")
     {
        
    } 
    else 
    {
        views.style.width = "34%";  
        // views.style.transition = '0.s';    
        // contents.style.flexBasis = "50%";
        tableExp1.style.width = "60%";
        tableExp2.style.width = "60%";
        // contents.style.transition = "0.5s";
        // tableExp1.style.transition = "0.5s ";
        // tableExp2.style.transition = "0.5s ";
        submitState.style.width = '50%';
        submitState.style.right = '20%';
        // submitState.style.transition = "0.5s ";
        note.style.fontSize = '15px';
        // note.style.transition = "0.5s ";
    }
    
}

function CloseView()
{
    var contents = document.getElementById('details');
    var views = document.getElementById('views');
    var tableExp1 = document.getElementById('table1');
    var tableExp2 = document.getElementById('table2');
    var submitState = document.getElementById('submit_state');
    var NOTE = document.getElementById('NOTE');

    views.style.width = "0";
    // contents.style.flexBasis = "85%";
    tableExp1.style.width = "100%";
    tableExp2.style.width = "100%";
    submitState.style.width = '100%';
    submitState.style.right = '0%';
    NOTE.style.fontSize = '15px';
}

// this is view only records
function toggleViews() 
{
    var contents = document.getElementById('details');
    var tableExp2 = document.getElementById('table2');
    var views = document.getElementById('views');
    var stateDetail = document.getElementById('state_detail');
    var submitState = document.getElementById('submit_state');
    if (views.style.width == "30%")
     {
        // views.style.width = "0%";
        // contents.style.flexBasis = "85%";
        // contents.style.transition = "0.5s";
    } 
    else 
    {
        views.style.width = "34%";      
        // contents.style.flexBasis = "50%";
        tableExp2.style.width = "60%";
        // contents.style.transition = "0.5s";
        // tableExp2.style.transition = "0.5s ";
        stateDetail.style.left= "-10%";
        submitState.style.width = '50%';
        submitState.style.right = '0%';
        // stateDetail.style.transition= "0.5s";
     
    }
    // if( navElement.style.width == "0%")
    // {
    //     contents.style.flexBasis = "80%";
    // }
}

function CloseViews()
{
    var views = document.getElementById('views');
    var tableExp2 = document.getElementById('table2');
    var stateDetail = document.getElementById('state_detail');
    var submitState = document.getElementById('submit_state');


    views.style.width = "0";
    // contents.style.flexBasis = "85%";
    tableExp2.style.width = "100%";
    stateDetail.style.left= "30%";
    submitState.style.width = '100%';
    submitState.style.right = '0%';

}