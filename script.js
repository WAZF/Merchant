var token = ""
document.getElementById('buyNow').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Get the form data
    const purchaseId = "0e22649f-3217-4374-816b-99011f459cc1";
    const userId = "thisisuserid";
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
        mode: 'no-cors',
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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6IjI1NzUxY2ZjLTI2OWItNDI5Yi1iNzc1LTllNDQxOTBlYmNlMyIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiTWlrZTIxQGhvdG1haWwuY29tIiwicGhvbmVObyI6IjUzNS03NjUtODU4MiIsImFtb3VudCI6Ijc1Ni4wIiwidHhuaWQiOiJmMTIxNWMwNi1jZTI5LTQ1ODktODY2Yy01Y2VhZWNlMGEzYTMiLCJ0aW1lc3RhbXAiOiIyMDI0LTA3LTA5IDEwOjU5OjQ4LjU0MSIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUkzTlRZdU1DSXNJbTl5WkdWeVNXUWlPaUl5TlRjMU1XTm1ZeTB5TmpsaUxUUXlPV0l0WWpjM05TMDVaVFEwTVRrd1pXSmpaVE1pTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpOYVd0bE1qRkFhRzkwYldGcGJDNWpiMjBpTENKd2FHOXVaVTV2SWpvaU5UTTFMVGMyTlMwNE5UZ3lJaXdpZEhodWFXUWlPaUptTVRJeE5XTXdOaTFqWlRJNUxUUTFPRGt0T0RZMll5MDFZMlZoWldObE1HRXpZVE1pTENKMGFXMWxjM1JoYlhBaU9pSXlNREkwTFRBM0xUQTVJREV3T2pVNU9qUTRMalUwTVNKOSIsInNpZ25hdHVyZSI6ImRWSCtrblpFbEUzY3J1aWlpTEtHVkJjaWhIOGJNSUpYN296TWxNcFVBUFNBazlseEJmNDRmMGR4TS8wZ1FPWFBEbTQ3UjNXOVVWN3J5L0IwQ3Rta3BGTEFVZk9kSE9ieFdOQ3hMcTdRbDBJZjRYUmN5M2NkRUhMMlowMS9uKzBNeUt5WG5MLzR2STlqZ2hnUGRkVjhVNnpZaVhNY3hMa3plU2Y4YnkyVzJsQ1UxazUwbFhLdHZ3enJPdUUrZFpzVkdNa3lSMGpjYU5RS253Z1dFeDI0eklwV1FtT3NKczZhbWVWeWwwVlI3aXpBaWJZOUY5ek5HUDRSaWJLeVNXZWlSTzROWFF3RmkvUFJ5RUN1ajVBQVduYWZmdEpTdFJIVWtGNnN6MnRUck5XR1JMSFpSa3d2dyt0d0NoVDhOVXVHYWlQMCt6R0kzQnMwS1lKYUowMmZCQT09IiwiaWF0IjoxNzIwNTIyNzg4LCJpc3MiOiJEaWdpbGVkZ2UiLCJzdWIiOiJOZXcgUGF5bWVudCBBdXRoIFRva2VuIGlzIFJlcXVlc3RlZCIsImp0aSI6ImNjYjBkZDI1LTZjMDgtNGI0ZC04NGE1LTI4ZWEzMTk4NDA0NyIsImV4cCI6MTcyMDUyNjM4OH0.qIViY-gAedtQA1CeMrBiTbTanLBWGcSsOPHmY2MGb-k",   
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
