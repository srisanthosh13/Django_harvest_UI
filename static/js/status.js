function updateStatus(user_id, row_id, document_num, status,fromdate ,todate) {

  console.log('ddddddddddddddddddddddddddddddddddddddddd',user_id,row_id, document ,status, fromdate , todate)
//   var fromDate = parseDate(fromdate);
//   var toDate = parseDate(todate);

//   console.log('ddddddddddddddddddddddddddddddddddddddddd',user_id,row_id,document_num,status, fromDate , toDate)

   
      // Obtain CSRF token from the cookie
  var csrftoken = getCookie('csrftoken');
  // Send an AJAX request to update the status
  $.ajax({
      url: '/update_sts/' + user_id + '/' + row_id + '/' + document_num +'/manager/',
      type: 'POST',
      headers: {
          'X-CSRFToken': csrftoken,
      },
      data: {
          'status': status,'fromDate':fromdate, 'toDate':todate
      },
      success: function(response) {
          // Handle the response from the server
          if(response.message == 'Processing' || response.message == 'Approved')
          {
              console.log(response.message);
              Swal.fire({
              icon: 'success',
              // title: 'Success',
              text: response.message,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true
              });
          }
          else if (response.message == 'Rejected')
          {
              console.log(response.message);
              Swal.fire({
              icon: 'error',
              // title: 'Rejected',
              text: response.message,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true
              });
          }
          else{
              console.log(response.message);
              Swal.fire({
              icon: 'warning',
              // title: 'Rejected',
              text: response.message,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true
              });
          }
      // Update the background color of the select element based on the selected option
        // Your code here
        var select = document.getElementById('sts_'+row_id);
        var selectedIndex = select.selectedIndex;
        var selectedOption = select.options[selectedIndex];
        var row = select.closest('td select');
  
        if (selectedOption.value == '0') {
            row.style.backgroundColor = 'rgb(252, 252, 142)';
        } else if (selectedOption.value == '1') {
            row.style.backgroundColor = 'rgb(97, 232, 253)';
        } else if (selectedOption.value == '2') {
            row.style.backgroundColor = 'rgb(120, 253, 120)';
        } else if (selectedOption.value == '3') {
            row.style.backgroundColor = 'rgb(253, 101, 101)';
        }
     

      
      },
      error: function(xhr, status, error) {
          // Handle errors
          console.error(error);
      }
      
  });
}
// // Function to parse date in format yyyy-mm-dd and convert it to dd-mm-yyyy
// function parseDate(dateString) {
//     var date = new Date(dateString);
//     var formattedDate = date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     });
//     return formattedDate;
//   }

// Function to get CSRF token from cookie
function getCookie(name) {
var cookieValue = null;
if (document.cookie && document.cookie !== '') {
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
    }
}
}
return cookieValue;
}



// var stepPending = document.querySelector('#step_pending');

// if(stepPending)
//           {
//             stepPending.style.backgroundColor = '#e6eb6d';
//             stepPending.style.borderRadius = '20px';
//             stepPending.style.padding = '10px';
//           }
//           else
//           {
//             console.log("error")
//           }
// var step2 = document.querySelector('#step_Progressing');
// console.log(step2)
// var step3 = document.querySelector('#step_Rejecting');
// console.log(step3)
// var step4 = document.querySelector('#step_approving');
// console.log(step4)
// console.log(stepPending); 

// if (step2) 
// {
//   step2.style.backgroundColor = '#4be5e5';
//   step2.style.borderRadius = '20px';
//   step2.style.padding = '10px';
//         } else {
//             console.log("Element with ID 'step2' not found.");
//         }
// if (step3) 
// {
//   step3.style.backgroundColor = '#cd4932';
//   step3.style.borderRadius = '20px';
//   step3.style.padding = '10px';
//         } else {
//             console.log("Element with ID 'step2' not found.");
//         }
// if (step4) 
// {
//   step4.style.backgroundColor = '#49c169';
//   step4.style.borderRadius = '20px';
//   step4.style.padding = '10px';
//         } else {
//             console.log("Element with ID 'step2' not found.");
//         }




// // console.log(step1); 
// if (stepPending) 
// {
//   step1.style.backgroundColor = '#e6eb6d';
//   step1.style.borderRadius = '20px';
//   step1.style.padding = '10px';
//       } else {
//           console.log("Element with ID 'step2' not found.");
//       }
// if (step2) 
// {
// step2.style.backgroundColor = '#4be5e5';
// step2.style.borderRadius = '20px';
// step2.style.padding = '10px';
//       } else {
//           console.log("Element with ID 'step2' not found.");
//       }
// if (step3) 
// {
// step3.style.backgroundColor = '#cd4932';
// step3.style.borderRadius = '20px';
// step3.style.padding = '10px';
//       } else {
//           console.log("Element with ID 'step2' not found.");
//       }
// if (step4) 
// {
// step4.style.backgroundColor = '#49c169';
// step4.style.borderRadius = '20px';
// step4.style.padding = '10px';
//       } else {
//           console.log("Element with ID 'step2' not found.");
//       }