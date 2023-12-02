// Code 1: Selecting a specific option in the dropdown
var dropdown = document.getElementById("post_select");
var desiredOptionValue = "486bf614-b0db-ec11-a7b4-001dd80234f6";

for (var i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === desiredOptionValue) {
        dropdown.selectedIndex = i;
        dropdown.dispatchEvent(new Event("change"));
        break;
    }
}

// Code 2: Executing after a 10-second delay
setTimeout(function () {
    // Counter to track the number of times the "Next" button has been clicked
    var clickCounter = 0;
    // Function to check for green days and click the "Next" button up to two times
    function checkAndClickNext() {
        // Check if the maximum number of clicks (10 times) has been reached
        if (clickCounter < 4) {
            // Get a reference to the calendar container
            var calendarContainer = document.getElementById("ui-datepicker-div");

            // Check if the calendar container exists
            if (calendarContainer) {
                // Find all elements with the class "greenday" within the calendar container
                var greenDays = calendarContainer.querySelectorAll(".greenday");

                // Check if there are any elements with the class "greenday"
                if (greenDays.length > 0) {
                    console.log("There are green days in the calendar.");
                    let audio = new Audio('https://samplelib.com/lib/preview/mp3/sample-9s.mp3');
                    audio.play();
                    clickCounter = 100; // preventing the calendarContainer to get closed
                    clearInterval(intervalId); // Ending Loop
                    
                } else {
                    //console.log("There are no green days in the calendar.");

                    // Get a reference to the "Next" button
                    var nextButton = document.querySelector(".ui-datepicker-next");

                    // Check if the "Next" button exists
                    if (nextButton) {
                        // Simulate a click on the "Next" button
                        nextButton.click();
                        //console.log("Clicked on the Next button to move to the next month.");

                        // Increment the click counter
                        clickCounter++;

                        // Check if it's the last click, then hide the datepicker
                        if (clickCounter === 4) {
                            $('#datepicker').datepicker('hide');
                            //console.log("Hiding the datepicker.");

                            // Check if no green days are found after the last click
                            if (greenDays.length === 0) {
                                // Select the first option in the dropdown
                                dropdown.selectedIndex = 0;
                                dropdown.dispatchEvent(new Event("change"));
                                //console.log("Selected the first option in the dropdown.");
                            }
                        }
                        
                    } else {
                        console.log("Next button not found.");
                    }
                }
            } else {
                console.log("Calendar container not found.");
            }
        } else {
            //console.log("Maximum number of clicks reached.");
            clearInterval(intervalId); // Stop the interval when maximum clicks are reached
        }
    }

    // Show the datepicker after the 10 seconds gap
    $('#datepicker').datepicker('show');

    // Call the function for the first time
    checkAndClickNext();

    // Set an interval to call the function every 1.5 second
    var intervalId = setInterval(checkAndClickNext, 1500);
}, 8000); // 8 seconds delay
