// $(document).ready(function() {
//     // Fetch user data from the server and populate the table
//     var csrftoken = getCookie('csrftoken');
//     var id = "{{ logger_data.id }}";
//     fetchUserData();
   

//     // Function to fetch user data from the server
//     function fetchUserData() {
//         $.ajax({
//             url: '/user_list/',
//             type: 'GET',
//             data: { id: id, csrfmiddlewaretoken: csrftoken }, // Include CSRF token in the data
//             success: function(response) {
//               var userData = response.data;
//                 console.log('ddddddddddddddddddd',userData);
//                 // Clear the existing table rows
//                 $('#user-table tbody').empty();

//                 // Populate the table with the fetched data
//                 $.each(userData, function(index, user) {
//                   console.log(user.email)
//                   // var imageUrl = user.image; // Assuming this is the URL of the image
//                   $("#logo").attr("src",user.image);
//                   $('#profile-image1').attr('src',user.image);
//                   $('#Fname').val(user.first_name);
//                   $('#Lname').val(user.last_name);
//                   $('#Mobile').val(user.mobile);
//                   var Email= $('#email').val(user.email);
//                   $('#password').val(user.password);
//                   $('#confirm_password').val(user.password);
//                   $('#b_group').val(user.BloodGroup);
//                   console.log('password',user.password)
//                   // $('#confirm_password').val(user.password);
//                   // console.log('images',imageUrl)
                  

//                   // Disable email input if it's empty
//                   if (!user.email) {
//                       $("#email").prop("disabled", false);
//                   } else {
//                       $("#email").prop("disabled", true);
//                   }

                  
                  
//                 });
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching user data:', error);
//             }
//         });
//     }

//     // Function to retrieve CSRF token from cookies
//     function getCookie(name) {
//         var cookieValue = null;
//         if (document.cookie && document.cookie !== '') {
//             var cookies = document.cookie.split(';');
//             for (var i = 0; i < cookies.length; i++) {
//                 var cookie = jQuery.trim(cookies[i]);
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }
// });



// function previewFile() {
//     var preview = document.querySelector('#profile-image1');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();
  
//     reader.addEventListener("load", function () {
//       preview.src = reader.result;
//     }, false);
  
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   }
  
//           $(function() {
//               $('#profile-image1').on('click', function() {
//                   $('#profile-image-upload').click();
//               });
//           });
  
  
//   // Function to open or close the popup form
//   function togglePopupForm() {  
//       var popupForm = document.getElementById('popupForm');
//       var overlay = document.getElementById('overlay');
//       if (popupForm.style.display = 'none') {
//           popupForm.style.display = 'block';
//           overlay.style.display = 'block';
//       } else {
//           popupForm.style.display = 'none';
//           overlay.style.display = 'none';
//       }
//   }
  



//   window.addEventListener('click', function(event) {
//     var popupForm = document.getElementById('popupForm');
//     var overlay = document.getElementById('overlay');
//     if (!popupForm.contains(event.target) && event.target != document.getElementById('logo')) {
//         popupForm.style.display = 'none';
//         overlay.style.display = 'none';
//     }
// });
// function closePopupForm(){
//   var popupForm = document.getElementById('popupForm');
//   var overlay = document.getElementById('overlay');

//   popupForm.style.display = 'none';
//   overlay.style.display = 'none';
// }

// // Function to save changes
// function saveChanges() {
//     var formData = new FormData();
//     var image = $("#profile-image-upload")[0].files[0];
//     console.log("imgessss",image)
//     var id = $("#ID").val();
//     var first_name = $("#Fname").val();
//     var last_name = $("#Lname").val();
//     var mobile = $("#Mobile").val();
//     var email = $("#email").val();
//     var BloodGroup = $("#b_group").val();
//     var password = $("#password").val();
//     var confirm_password = $("#confirm_password").val();

//     console.log('prntdssssss', id, first_name, last_name, mobile, email, password, confirm_password, image);

//     // Validate form fields
//     if (!first_name || !mobile || !email || !password || !confirm_password) {
//         alert("Please fill in all required fields.");
//         return;
//     }

//     // Check if passwords match
//     if (password !== confirm_password) {
//         alert("Passwords do not match.");
//         return;
//     }
   
//     formData.append('id', id);
//     formData.append('image', image);
//     formData.append('first_name', first_name);
//     formData.append('last_name', last_name);
//     formData.append('mobile', mobile);
//     formData.append('email', email);
//     formData.append('BloodGroup', BloodGroup);
//     formData.append('password', password);
//     formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');

//     // Make AJAX request to update profile
//     $.ajax({
//         url: '/update_profile/' + id,
//         type: 'POST',
//         data: formData,
//         processData: false, // Prevent jQuery from processing the data
//         contentType: false, // Prevent jQuery from setting content type
//         success: function(response) {
//             console.log(response);

//             // Retrieve updated values from the response
//             var updated_values = response.Profiles;
//             console.log("user", updated_values);

//             $("#email").val(updated_values.email);
//             $("#Fname").val(updated_values.first_name);
//             $("#Lname").val(updated_values.last_name);
//             $("#Mobile").val(updated_values.mobile);
//             $("#b_group").val(updated_values.BloodGroup);
//             $("#password").val(updated_values.password);
//             $("#profile-image1").attr("src", updated_values.image);
//             $("#logo").attr("src", updated_values.image);

//             // For demonstration purposes, show a SweetAlert confirmation
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Changes Saved!',
//                 showConfirmButton: false,
//                 timer: 1500
//             }).then(() => {
//                 closePopupForm();
//             });

//             // Disable email input if it's empty
//             $("#email").prop("disabled", true);
//         },
//         error: function(xhr, status, error) {
//             alert("An error occurred while updating profile.");
//             console.error(xhr.responseText);
//         }
//     });
// }