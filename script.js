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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6IjdmODIxNDU4LTAzNmEtNDQyOC05YWVhLWNhMmUzMTgyOTdhYyIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiSm92YW55Lk1vb3JlMzhAZ21haWwuY29tIiwicGhvbmVObyI6IjU4Ni04ODUtMDkyNyIsImFtb3VudCI6Ijg3MS4wIiwidHhuaWQiOiJmODBkNzE1MC1kNzFjLTRmNDctODIwZC0zMjBiZTU1YmYyNjkiLCJ0aW1lc3RhbXAiOiIyMDI0LTA3LTA5IDA2OjExOjA1Ljk0OSIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUk0TnpFdU1DSXNJbTl5WkdWeVNXUWlPaUkzWmpneU1UUTFPQzB3TXpaaExUUTBNamd0T1dGbFlTMWpZVEpsTXpFNE1qazNZV01pTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpLYjNaaGJua3VUVzl2Y21Vek9FQm5iV0ZwYkM1amIyMGlMQ0p3YUc5dVpVNXZJam9pTlRnMkxUZzROUzB3T1RJM0lpd2lkSGh1YVdRaU9pSm1PREJrTnpFMU1DMWtOekZqTFRSbU5EY3RPREl3WkMwek1qQmlaVFUxWW1ZeU5qa2lMQ0owYVcxbGMzUmhiWEFpT2lJeU1ESTBMVEEzTFRBNUlEQTJPakV4T2pBMUxqazBPU0o5Iiwic2lnbmF0dXJlIjoiU2VKd1A3MHlzTFpCeklvZmNFdndOMytZZENaTFNNWjJOTUFNMTlFVVpmNTBZR0pwSXQrdVBGeFpYRWh3bU1OY3VIYnZCVS9Kanc4cVY3QVJtTXpHVTlMR09KSzVCck9KVWZFaUpFbHNZWncxTGxGMysxNHJzZ2o4UXRzOHpaZjU4VlBSV0dVZmtQL3MrdkpOK1MrOWh6Y3VQYlRSdXQ3RDNKU045WVRNS212dUJCVzFlSm9TemJBM05yMkpPTjREeGNwRC9GckYxZThwRUM2djlSRVhZOUJlUWN6U1BWcTAzVXpsbHVTZmdvUkJTN1pvYzFRZGNBbTVZUFlOREIrT3I2bXN0Wjc3eVg2L3NQZSsvSDZaN0NOcEVlY2tTTXdIRDBKczJIbzBEcTlkNWVFd0tudWc4K2lxMGlNSlY5U3NTNVZQY1VJVTg3TFdTcEdPSitlcit3PT0iLCJpYXQiOjE3MjA1MDU0NjYsImlzcyI6IkRpZ2lsZWRnZSIsInN1YiI6Ik5ldyBQYXltZW50IEF1dGggVG9rZW4gaXMgUmVxdWVzdGVkIiwianRpIjoiNGVjZmM1MGYtOTBhNi00ZGJhLWIxODEtMWE1NGM0MjRjNTZlIiwiZXhwIjoxNzIwNTA5MDY2fQ.7vpuLn198PxcAEkv1uLV5Lr6esE3EIfNCyR414v8GN4",   
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
