function openDefault(){
            document.getElementById("defaultOpen").click();
        }
        
        function openRanking(evt, timeframe) {
            // Declare all variables
            var i, listOfRanking, tablinks;

            // Get all elements with class="tabcontent" and hide them
            listOfRanking = document.getElementsByClassName("listOfRanking");
            for (i = 0; i < listOfRanking.length; i++) {
                listOfRanking[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the link that opened the tab
            document.getElementById(timeframe).style.display = "block";
            evt.currentTarget.className += " active";
        }

// Get the modal
 var modal = document.getElementById('myModal');
 
// Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
// Get the <span> element that closes the modal
 var span = document.getElementsByClassName("closeButton closeModal")[0];
 
// When the user clicks the button, open the modal 
 btn.onclick = function() {
 	modal.style.display = "block";
 }
 
// When the user clicks on <span> (x), close the modal
 span.onclick = function() {
 	modal.style.display = "none";
 }
 
// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
 	if (event.target == modal) {
 		modal.style.display = "none";
 	}
 }

//function openModal(id) {
//	var modal = document.getElementById(id);
//	modal.style.display = "block";
//}
//function closeModal(id);{
//	document.getElementById(id).style.display = "none";
//}
//function myFunction(myMessage) {
//    alert(myMessage);
//}