document.getElementById("student-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredID = parseInt(document.getElementsByName("username")[0].value);

  // Make an AJAX request to load the JSON data
  fetch("DataBase1.json")
      .then(response => response.json())
      .then(data => {
          const student = data.find(studentData => parseInt(studentData["Student ID number"]) === enteredID);

          if (student) {
              // Check if it's the right time to register here and set the message accordingly
              const registrationTimeIsRight = true; // Change this condition based on your logic
              if (registrationTimeIsRight) {
                  window.location.href = "https://www.facebook.com/"; // Replace with your desired URL
              } else {
                  document.getElementById("message").textContent = "Sorry, registration time has not come yet.";
              }
          } else {
              document.getElementById("message").textContent = "Wrong ID. Please check it again.";
          }
      })
      .catch(error => console.error("Error loading data: " + error));
});