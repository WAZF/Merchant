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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6ImI0MWU1Y2ZmLWZlYjktNDBkYi05ZDM1LTc5ZTMxM2QwZWU0NiIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiVHlyZXNlLkhhbWlsbDM4QGhvdG1haWwuY29tIiwicGhvbmVObyI6IjQwOS00MjYtNjc1MiIsImFtb3VudCI6IjU0NS4wIiwidHhuaWQiOiIxODViNDg3OC1hZjlmLTQwZjAtYTRiOS01NzNhMTU1NWIyYjYiLCJ0aW1lc3RhbXAiOiIyMDI0LTA3LTA5IDExOjA2OjQzLjQxOCIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUkxTkRVdU1DSXNJbTl5WkdWeVNXUWlPaUppTkRGbE5XTm1aaTFtWldJNUxUUXdaR0l0T1dRek5TMDNPV1V6TVROa01HVmxORFlpTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpVZVhKbGMyVXVTR0Z0YVd4c016aEFhRzkwYldGcGJDNWpiMjBpTENKd2FHOXVaVTV2SWpvaU5EQTVMVFF5TmkwMk56VXlJaXdpZEhodWFXUWlPaUl4T0RWaU5EZzNPQzFoWmpsbUxUUXdaakF0WVRSaU9TMDFOek5oTVRVMU5XSXlZallpTENKMGFXMWxjM1JoYlhBaU9pSXlNREkwTFRBM0xUQTVJREV4T2pBMk9qUXpMalF4T0NKOSIsInNpZ25hdHVyZSI6Ik1aWkd1ZnlPbzN1TFNpT2JTdDU2VXRLenRqSnJzcEM5WkpxeVZ3UEs1cjhaaW1veVJTc2FwYmRDbk42L3RSWUppdDFrNEdjUUpxQURydnBKcDhudUtkb0J0SmJ4OVZKWXAwTXFFZGN2UGs5YzYwYllqVWQzRndDSGhqQlh3Vm95bnRLdmRyY002c2Q5NmQxZlFRck03UzJUc1U1L2FoZ1p6OVNVNlVlcUhIbWo1Q2JNM2hGRlJ1ZDJXMHh1RGhUWnFnNlNiZTdibmxiODVmZFZtY2FJeS9GZS9GNHlwc29lemJZV3ZjOTYvL2hhUjNXMVVUNlFTTHdZNlNGRXhQcTJnSWtYdWhvUEtzMXV2eDBKb1IzNEtJYlo2M2NWV2ozNFlTZE9IZ3Ficit0TFpaQXVvWVhYcUFESUIyY0tRTEFnWnIwUHk4VnJJcjEyV2J0SnJWS0FqUT09IiwiaWF0IjoxNzIwNTIzMjIzLCJpc3MiOiJEaWdpbGVkZ2UiLCJzdWIiOiJOZXcgUGF5bWVudCBBdXRoIFRva2VuIGlzIFJlcXVlc3RlZCIsImp0aSI6ImM5ZTBlNGMzLWZmM2UtNDMwZC1iNjY5LTBlZDRkYTY2OTZhZiIsImV4cCI6MTcyMDUyNjgyM30.gFU6hGOoS6L0064PLJXpj6rX1TAdtoS4WmiKN4Oxkm8",   
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
