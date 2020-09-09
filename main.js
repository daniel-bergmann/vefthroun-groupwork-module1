function openRecycle(evt, doIt) {
    //Declare all variables
    var i, tabcontent, tablinks;

     // Open Why on default with id="defaultOpen"
     document.getElementById("defaultOpen").click();

    //Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the current tab, and add active class to the button that opened the tab
    document.getElementById(doIt).style.display = "block";
    evt.currentTarget.className += " active";
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        //the event occurred
        document.getElementById("defaultOpen").click();
      })