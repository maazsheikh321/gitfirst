document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        var parentDropdown = this.parentElement;
        var dropdownMenu = parentDropdown.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
      
      });
    });

    var dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var url = this.getAttribute('href');
        window.location.href = url;
      });
    });

    window.addEventListener('click', function() {
      var dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(function(menu) {
        if (menu.classList.contains('show')) {
          menu.classList.remove('show');
        }
      });
    });
  });
  
  //popover
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



  //go back on form page
  function goBack() {
    window.history.back();
  }
  
  //submit form page
  function validateForm() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let quantity = document.getElementById("quantity").value;
    let deliveryDate = document.getElementById("deliveryDate").value;
  
    if (name === "" || address === "" || contactNumber === "" || quantity === "" || deliveryDate === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    let contactNumberPattern = /^\d{11}$/;
    if (!contactNumber.match(contactNumberPattern)) {
      alert("Please enter a valid 11-digit contact number");
      return false;
    }
  
  
    return true;
  
  }

  
  //Zoom IMAge for home page...............................................................................................................................................................

  function openEnlargedImage1() {
      let enlargedImageURL = "Images/Best 1.jpg";
      window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
  }
  function openEnlargedImage2() {
    let enlargedImageURL = "Images/Best 2.jpg";
    window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage3() {
  let enlargedImageURL = "Images/Best 3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage4() {
  let enlargedImageURL = "Images/Best 4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage5() {
  let enlargedImageURL = "Images/Best 5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage6() {
  let enlargedImageURL = "Images/BEst 6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage7() {
  let enlargedImageURL = "Images/best 7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage8() {
  let enlargedImageURL = "Images/best 8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage9() {
  let enlargedImageURL = "Images/best 9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage10() {
  let enlargedImageURL = "Images/best 10.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage11() {
  let enlargedImageURL = "Images/best 11.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage12() {
  let enlargedImageURL = "Images/best 12.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage13() {
  let enlargedImageURL = "Images/best 133.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage14() {
  let enlargedImageURL = "Images/best 14.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage15() {
  let enlargedImageURL = "Images/best 15.jpg ";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}


  //Zoom IMAge for Anniversary...............................................................................................................................................................

function openEnlargedImageA1() {
  let enlargedImageURL = " ../Images/Anniversary1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA2() {
  let enlargedImageURL = " ../Images/Anniversary2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA3() {
  let enlargedImageURL = " ../Images/Anniversary3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA4() {
  let enlargedImageURL = " ../Images/Anniversary4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA5() {
  let enlargedImageURL = " ../Images/Anniversary5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA6() {
  let enlargedImageURL = " ../Images/Anniversary6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA7() {
  let enlargedImageURL = " ../Images/Anniversary7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA8() {
  let enlargedImageURL = " ../Images/Anniversary8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImageA9() {
  let enlargedImageURL = " ../Images/Anniversary9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

 //Zoom IMAge for Engagement...............................................................................................................................................................

 function openEnlargedImage1E() {
  let enlargedImageURL = " ../Images/engagement1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2E() {
  let enlargedImageURL = " ../Images/engagement2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage3E() {
  let enlargedImageURL = " ../Images/engagement3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage4E() {
  let enlargedImageURL = " ../Images/engagement4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage5E() {
  let enlargedImageURL = " ../Images/engagement5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage6E() {
  let enlargedImageURL = " ../Images/engagement6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage7E() {
  let enlargedImageURL = " ../Images/engagement7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage8E() {
  let enlargedImageURL = " ../Images/engagement8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage9E() {
  let enlargedImageURL = " ../Images/engagement9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//Zoom IMAge for Marriage...............................................................................................................................................................

  function openEnlargedImage1W() {
      let enlargedImageURL = "../Images/Wedding1.jpg";
      window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
  }
  function openEnlargedImage2W() {
    let enlargedImageURL = "../Images/Wedding2.jpg";
    window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3W() {
  let enlargedImageURL = "../Images/Wedding3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4W() {
  let enlargedImageURL = "../Images/Wedding4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5W() {
  let enlargedImageURL = "../Images/Wedding5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6W() {
  let enlargedImageURL = "../Images/Wedding6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7W() {
  let enlargedImageURL = "../Images/Wedding7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8W() {
  let enlargedImageURL = "../Images/Wedding8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9W() {
  let enlargedImageURL = "../Images/Wedding9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}openEnlargedImage9BB()

//Zoom IMAge for Birthday...............................................................................................................................................................

function openEnlargedImage1B(){
  let enlargedImageURL = "../Images/Birthday1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2BB() {
  let enlargedImageURL = "../Images/Birthday2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3BB() {
  let enlargedImageURL = "../Images/Birthday3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4BB() {
  let enlargedImageURL = "../Images/Birthday4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5BB() {
  let enlargedImageURL = "../Images/Birthday5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6BB() {
  let enlargedImageURL = "../Images/Birthday6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7BB() {
  let enlargedImageURL = "../Images/Birthday7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8BB() {
  let enlargedImageURL = "../Images/Birthday8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9BB() {
  let enlargedImageURL = "../Images/Birthday9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//Zoom IMAge for Garudation...............................................................................................................................................................

function openEnlargedImage1G(){
  let enlargedImageURL = "../Images/Graduation 1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2G(){
  let enlargedImageURL = "../Images/Graduation 2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3G(){
  let enlargedImageURL = "../Images/Graduation 3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4G(){
  let enlargedImageURL = "../Images/Graduation 4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5G(){
  let enlargedImageURL = "../Images/Graduation 5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6G(){
  let enlargedImageURL = "../Images/Graduation 6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7G(){
  let enlargedImageURL = "../Images/Graduation 7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8G(){
  let enlargedImageURL = "../Images/Graduation 8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9G(){
  let enlargedImageURL = "../Images/Graduation 9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//Zoom IMAge for RAINBOW...............................................................................................................................................................

function openEnlargedImage1RAIN(){
  let enlargedImageURL = "../Images/RAIN 1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2RAIN(){
  let enlargedImageURL = "../Images/RAIN 2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3RAIN(){
  let enlargedImageURL = "../Images/RAIN 3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4RAIN(){
  let enlargedImageURL = "../Images/RAIN 4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5RAIN(){
  let enlargedImageURL = "../Images/RAIN 5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6RAIN(){
  let enlargedImageURL = "../Images/RAIN 6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7RAIN(){
  let enlargedImageURL = "../Images/RAIN 7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8RAIN(){
  let enlargedImageURL = "../Images/RAIN 8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9RAIN(){
  let enlargedImageURL = "../Images/RAIN 9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}


//Zoom IMAge for CARROT...............................................................................................................................................................

function openEnlargedImage1CAR(){
  let enlargedImageURL = "../Images/CARROT1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2CAR(){
  let enlargedImageURL = "../Images/CARROT2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3CAR(){
  let enlargedImageURL = "../Images/CARROT3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4CAR(){
  let enlargedImageURL = "../Images/CARROT4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5CAR(){
  let enlargedImageURL = "../Images/CARROT5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6CAR(){
  let enlargedImageURL = "../Images/CARROT6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7CAR(){
  let enlargedImageURL = "../Images/CARROT7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8CAR(){
  let enlargedImageURL = "../Images/CARROT8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9CAR(){
  let enlargedImageURL = "../Images/CARROT9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//Zoom IMAge for VANILLA...............................................................................................................................................................

function openEnlargedImage9VAN(){
  let enlargedImageURL = "../Images/VAN9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8VAN(){
  let enlargedImageURL = "../Images/VAN8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7VAN(){
  let enlargedImageURL = "../Images/VAN7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6VAN(){
  let enlargedImageURL = "../Images/VAN6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5VAN(){
  let enlargedImageURL = "../Images/VAN5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage4VAN(){
  let enlargedImageURL = "../Images/VAN4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3VAN(){
  let enlargedImageURL = "../Images/VAN3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2VAN(){
  let enlargedImageURL = "../Images/VAN2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage1VAN(){
  let enlargedImageURL = "../Images/VAN1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//Zoom IMAge for CHOCOLATE...............................................................................................................................................................

function openEnlargedImage1CC(){
  let enlargedImageURL = "../Images/Choco1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2CC(){
  let enlargedImageURL = "../Images/Choco2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage3CC(){
  let enlargedImageURL = "../Images/Choco3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage4CC(){
  let enlargedImageURL = "../Images/Choco4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage5CC(){
  let enlargedImageURL = "../Images/Choco5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage6CC(){
  let enlargedImageURL = "../Images/Choco6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage7CC(){
  let enlargedImageURL = "../Images/Choco7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage8CC(){
  let enlargedImageURL = "../Images/Choco8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage9CC(){
  let enlargedImageURL = "../Images/Choco9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}



//Zoom IMAge for STRAWBERRY...............................................................................................................................................................

function openEnlargedImage1S(){
  let enlargedImageURL = "../Images/Straw 1.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage2S(){
  let enlargedImageURL = "../Images/Straw 2.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}
function openEnlargedImage3S(){
  let enlargedImageURL = "../Images/Straw 3.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage4S(){
  let enlargedImageURL = "../Images/Straw 4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage5S(){
  let enlargedImageURL = "../Images/Straw 5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage6S(){
  let enlargedImageURL = "../Images/Straw 6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage7S(){
  let enlargedImageURL = "../Images/Straw 7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage8S(){
  let enlargedImageURL = "../Images/Straw 8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}function openEnlargedImage9S(){
  let enlargedImageURL = "../Images/Straw 9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

//cake pg 1
function openEnlargedImage10pg1() {
  let enlargedImageURL = "../Images/best 10.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage11pg1() {
  let enlargedImageURL = "../Images/best 11.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage12pg1() {
  let enlargedImageURL = "../Images/best 12.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage13pg1() {
  let enlargedImageURL = "../Images/best 133.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage14pg1() {
  let enlargedImageURL = "../Images/best 14.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage15pg1() {
  let enlargedImageURL = "../Images/best 15.jpg ";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage4pg2() {
  let enlargedImageURL = "../Images/Best 4.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage5pg2() {
  let enlargedImageURL = "../Images/Best 5.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage6pg2() {
  let enlargedImageURL = "../Images/BEst 6.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage7pg2() {
  let enlargedImageURL = "../Images/best 7.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage8pg2() {
  let enlargedImageURL = "../Images/best 8.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}

function openEnlargedImage9pg2() {
  let enlargedImageURL = "../Images/best 9.jpg";
  window.open(enlargedImageURL, "_blank", "width=800,height=600"); 
}