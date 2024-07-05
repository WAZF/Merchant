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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6IjU0NjY5ZDdmLTFiOTYtNDkzNC05OGFjLTlmMDJkZGJiNTllMCIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiRGF2aWRfTWFya3M3NEB5YWhvby5jb20iLCJwaG9uZU5vIjoiNTc0LTMyNC01OTkxIiwiYW1vdW50IjoiODEyLjAiLCJ0eG5pZCI6ImIyMGQzZDZmLTBkM2YtNDlmYS04Y2VhLWYwYTZkOWJmZjE1YiIsInRpbWVzdGFtcCI6IjIwMjQtMDctMDUgMDQ6NTA6MTkuMzY4IiwicGF5bWVudE1vZGUiOiJNUElOIiwiZGF0YSI6ImV5SmhiVzkxYm5RaU9pSTRNVEl1TUNJc0ltOXlaR1Z5U1dRaU9pSTFORFkyT1dRM1ppMHhZamsyTFRRNU16UXRPVGhoWXkwNVpqQXlaR1JpWWpVNVpUQWlMQ0p3WVhsdFpXNTBUVzlrWlNJNklrMVFTVTRpTENKd2RYSmphR0Z6WlVsa0lqb2lNR1V5TWpZME9XWXRNekl4TnkwME16YzBMVGd4Tm1JdE9Ua3dNVEZtTkRVNVkyTXhJaXdpZFhObGNrbGtJam9pZEdocGMybHpkWE5sY21sa0lpd2laVzFoYVd3aU9pSkVZWFpwWkY5TllYSnJjemMwUUhsaGFHOXZMbU52YlNJc0luQm9iMjVsVG04aU9pSTFOelF0TXpJMExUVTVPVEVpTENKMGVHNXBaQ0k2SW1JeU1HUXpaRFptTFRCa00yWXRORGxtWVMwNFkyVmhMV1l3WVRaa09XSm1aakUxWWlJc0luUnBiV1Z6ZEdGdGNDSTZJakl3TWpRdE1EY3RNRFVnTURRNk5UQTZNVGt1TXpZNEluMD0iLCJzaWduYXR1cmUiOiJFa3Z3WVlSY3VQUnc1ZUJmT1dtWEJUYnlwRi9hVTgvVE5MdHByTkl2dXg0SWNEN1JCOVhtdlJFNnEzc1FDWHVCTVdaMFBndi81MGY0RFcrbnhpK1NZMmxiVnFyTFRBUHh3dldaalFJL2VBbzNiZUttaTV3cEtiTDQvckRZNDU0OVYra1h4K0s2QnNzTWVLQnlUakdYdTVONHZVQ1Zhd0JaQmdkenY0SmF5UFlrdlFCdXhvZ2RCTkd3NXlrZlljSFhCeXZKUnVtczdiN1FPMlFBcG4zOWRTVm16a3hBTXNRSzYwS09YekJJOE0zeDdCSnVWbUxCOTZWTUNNVmhhSThicXFQOWdzbU9YdHRmRzFYWnpzOTVrWUlMZ29tV3hNekVVSm5ZdWlrUjdyakxLekZ6aFBIbWFjek9tMUtMS0ZIYVp6VGhyRjJiU0xxczY5Zmp2emFSc2c9PSIsImlhdCI6MTcyMDE1NTAyMCwiaXNzIjoiRGlnaWxlZGdlIiwic3ViIjoiTmV3IFBheW1lbnQgQXV0aCBUb2tlbiBpcyBSZXF1ZXN0ZWQiLCJqdGkiOiIyYTk2MzQyZC00NDM2LTQxZjYtOTJkMy02MWQ1M2FhNzRhMWQiLCJleHAiOjE3MjAxNTg2MjB9.DZfpmTeo-OfOJ-362vBSk8ExmhXsHAO9IG3Ao-L1j2c",   
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
