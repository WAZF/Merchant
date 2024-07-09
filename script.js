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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6IjM4ZDc4MWJkLTM2NTEtNDFkNy05MWI2LTEyM2MwNzM5MGUxMSIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiTWVhZ2hhbi5XZXN0QGdtYWlsLmNvbSIsInBob25lTm8iOiI1NTUtNjYzLTUxMjEiLCJhbW91bnQiOiIxMTMuMCIsInR4bmlkIjoiN2QxMzkzZDEtYTViZS00MGI5LTkyYmYtMDI2NTU2ZGI3Y2Q1IiwidGltZXN0YW1wIjoiMjAyNC0wNy0wOSAxMDo0NDoxMC41MiIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUl4TVRNdU1DSXNJbTl5WkdWeVNXUWlPaUl6T0dRM09ERmlaQzB6TmpVeExUUXhaRGN0T1RGaU5pMHhNak5qTURjek9UQmxNVEVpTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpOWldGbmFHRnVMbGRsYzNSQVoyMWhhV3d1WTI5dElpd2ljR2h2Ym1WT2J5STZJalUxTlMwMk5qTXROVEV5TVNJc0luUjRibWxrSWpvaU4yUXhNemt6WkRFdFlUVmlaUzAwTUdJNUxUa3lZbVl0TURJMk5UVTJaR0kzWTJRMUlpd2lkR2x0WlhOMFlXMXdJam9pTWpBeU5DMHdOeTB3T1NBeE1EbzBORG94TUM0MU1pSjkiLCJzaWduYXR1cmUiOiJ1UW05eW8rTkpSNnNGM3ltc0p1M3lzSXZyMjd1NUZDYkhLM1AzWGx1ZUFna3lzWU5oY2lqTDlVSExhcEczQXUrWnFrWnBvaktYZmxha2FPRHMrczFMUlFIK2V3dlVGM0dnbTdTY2VqMGpTWGJ1Nk14TVd5dmg0ZGxUd0lqSysreWFNazJVZEwrTGJTNjd2U0lxcUVGTzE3QkwyT3VLaEpuaHVsMWxpODM1S0JCclVrbHNINk5ZQ3FWd3ZpeEFSZTFOeG5lYmx1bDk2MTQ4QkdWNGpzZVhVellqSVo0WXhJNHloYU16S1BGL1NEbHZmN0hwbVRKV0JoZDVPV0swZG96WHZzeVErSE0wWVRjQ05oL3JkMi9BaEY4RWJ2Y3ZuOHFwcnlnbFdOcHVWTjFLS2h2VEpuTEt1YXpLdGM4R3VSd1hWYlpsaHhZVFBicXVMSkVydGx0MlE9PSIsImlhdCI6MTcyMDUyMTg1MSwiaXNzIjoiRGlnaWxlZGdlIiwic3ViIjoiTmV3IFBheW1lbnQgQXV0aCBUb2tlbiBpcyBSZXF1ZXN0ZWQiLCJqdGkiOiI2OTM2NTZjOC1mYzE5LTRmMjctYjhmNC05Nzc3Zjk1MjA1NmQiLCJleHAiOjE3MjA1MjU0NTF9.QXcX68JKrrBpuTfynAiJrpCIgfy5LiZN8PBcvVGY80s",   
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
