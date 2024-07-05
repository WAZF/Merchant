var token = ""
document.getElementById('buyNow').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Get the form data
    const purchaseId = "0e22649f-3217-4374-816b-99011f459cc1";
    const userId = "1234567";
    const emailid = "someone@gmail.com";
    const mobileNumber = "7878787878";

    // Define the data to be sent in the request body
    const data = {
        purchaseId: purchaseId,
        ucic: userId,
        emailId: emailid,
        mobileNo: mobileNumber
    };
    console.log('Data',data);

    // Make the fetch call with a JSON body
    fetch('https://marketplace.digiledge.in/marketplace-simulationserver/marketplace/MPINPayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convert the data to a JSON string
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Navigate to the target page after the API call is successful
        // window.location.href = 'index.html';
        token = responseData.token;
        window.alert(`Success: ${responseData.statusMessage}\nToken: ${responseData.token}`);
    })
    .catch((error) => {
        console.log('Error:', error);
        // Optionally, handle the error (e.g., display an error message)
        window.alert(`Error: ${error.message}`);
    });
});

function invokeMPINFromWebPage() {
    console.log("inside invokeMPIN function")
    var orderDetails = {
        accountNumber: "1234567890", 
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6ImQyNjlhMGQyLWFkMmUtNDE4NC04YjZmLTE5MTlkNDliMzQyZCIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiVmVybmFfR29sZG5lcjlAZ21haWwuY29tIiwicGhvbmVObyI6IjY3NC01MTAtNTMyNSIsImFtb3VudCI6IjE3Ni4wIiwidHhuaWQiOiJmMDlmMGZkOC04NGEyLTQyZjgtOTZlMS1kZTAxOTY2OGQ4ODQiLCJ0aW1lc3RhbXAiOiIyMDI0LTA3LTA1IDExOjIzOjEwLjU2OSIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUl4TnpZdU1DSXNJbTl5WkdWeVNXUWlPaUprTWpZNVlUQmtNaTFoWkRKbExUUXhPRFF0T0dJMlppMHhPVEU1WkRRNVlqTTBNbVFpTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpXWlhKdVlWOUhiMnhrYm1WeU9VQm5iV0ZwYkM1amIyMGlMQ0p3YUc5dVpVNXZJam9pTmpjMExUVXhNQzAxTXpJMUlpd2lkSGh1YVdRaU9pSm1NRGxtTUdaa09DMDROR0V5TFRReVpqZ3RPVFpsTVMxa1pUQXhPVFkyT0dRNE9EUWlMQ0owYVcxbGMzUmhiWEFpT2lJeU1ESTBMVEEzTFRBMUlERXhPakl6T2pFd0xqVTJPU0o5Iiwic2lnbmF0dXJlIjoicUdDc2VuQzVTVVBSSGs2UmNCZnI5VTArdHlVUkoveVJjbElSK0JqT2pvR1N5ZitLcnBqTEo4YitKMHJwUzg3UTJadlcvVW4xbW4vYjBKOGJaNU1RQ2xiOSszakNrVmJEZko4TUdJWXJxVmJqNEh3UElwR25OME1IbGRBVldPWHRxdlJFRUVFK00vbEUyQ3ZPWjdSTlQvYkkzTmtwQkhJb2E2ZDRCaVg0Q3dWUCtYR2tEOG9Za0FoTjloVW9HWkdJdjlwSEUzcGZHcWxVYlBHR3JsWXIrODJlN3NkdzQyaWpBQWdLaU1ROFNTcUwvK1p1Ykw5RGpyM0ZzWno2VkZPdEp3dWFKSDZGemE2OEFQTHZoZmVjOGVkOGJvcVRFYlEwVHlwN3pyUFc1NzVRZURtbElYUlVwQytkcVlSTVFwck0xUUpYa2VrYU9UT2ZyOE50TjJMUkxBPT0iLCJpYXQiOjE3MjAxNzg1OTUsImlzcyI6IkRpZ2lsZWRnZSIsInN1YiI6Ik5ldyBQYXltZW50IEF1dGggVG9rZW4gaXMgUmVxdWVzdGVkIiwianRpIjoiMDc0YjllMTItOTA3NS00ZjlkLTk1OGUtZTE5ZDZhYWE5MWEzIiwiZXhwIjoxNzIwMTgyMTk1fQ.jwOD4fGn8Mt2fGd5mYvOBYciI3_-KBvhqLNuKmv0NuM",   
        amount: 100,                 
        timestamp: new Date().toISOString() 
    };
    var messageBody = JSON.stringify(orderDetails);
    console.log('messageBody',messageBody)
    if (window?.android) {
        Android.invokeMPIN(messageBody);
    }
    else{
    window.webkit.messageHandlers.invokeMPIN.postMessage(messageBody);
    }
}
