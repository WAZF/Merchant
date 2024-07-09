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
        mode: 'no-cors',
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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiMGUyMjY0OWYtMzIxNy00Mzc0LTgxNmItOTkwMTFmNDU5Y2MxIiwib3JkZXJJZCI6IjE5Y2RjMTllLTFhZTQtNDg2Yi1iZWI0LTExMTgwOWQ5NDExNSIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiTWFrYXlsYS5SYXlub3JAZ21haWwuY29tIiwicGhvbmVObyI6IjcxNC0zNDktMjI5NCIsImFtb3VudCI6IjM1My4wIiwidHhuaWQiOiJjMzc5NjYzZC1mNzQ0LTQ1YzItYTk0Ny1kNGRjYTJjNjVjNzYiLCJ0aW1lc3RhbXAiOiIyMDI0LTA3LTA5IDEwOjQ3OjMxLjY1NCIsInBheW1lbnRNb2RlIjoiTVBJTiIsImRhdGEiOiJleUpoYlc5MWJuUWlPaUl6TlRNdU1DSXNJbTl5WkdWeVNXUWlPaUl4T1dOa1l6RTVaUzB4WVdVMExUUTRObUl0WW1WaU5DMHhNVEU0TURsa09UUXhNVFVpTENKd1lYbHRaVzUwVFc5a1pTSTZJazFRU1U0aUxDSndkWEpqYUdGelpVbGtJam9pTUdVeU1qWTBPV1l0TXpJeE55MDBNemMwTFRneE5tSXRPVGt3TVRGbU5EVTVZMk14SWl3aWRYTmxja2xrSWpvaWRHaHBjMmx6ZFhObGNtbGtJaXdpWlcxaGFXd2lPaUpOWVd0aGVXeGhMbEpoZVc1dmNrQm5iV0ZwYkM1amIyMGlMQ0p3YUc5dVpVNXZJam9pTnpFMExUTTBPUzB5TWprMElpd2lkSGh1YVdRaU9pSmpNemM1TmpZelpDMW1OelEwTFRRMVl6SXRZVGswTnkxa05HUmpZVEpqTmpWak56WWlMQ0owYVcxbGMzUmhiWEFpT2lJeU1ESTBMVEEzTFRBNUlERXdPalEzT2pNeExqWTFOQ0o5Iiwic2lnbmF0dXJlIjoiQUxQVGVvU055b2FSQWVKTTc4SktKaFFWbmg0c3NHenY5Y05UbjNHKzJBcVJoU3ovVUd1RmZPQjBqOXhYOTdhVXdUd0pFaGVNRHZmNFJNcnVtZUdpeTRKbGJKYlN2dGVDZ3ozZkRteTRBK0JEdWxrY0pDTnRXUk1nMzF5NVJrUjVsR2dhY1lmcUpZQ1diRlRhMkhQT2cvSXdYY0NYVCs4MXc0TkJDVmlPMkZRVWNLVlVEUUtKY2RkU2hMQ2ZUb1lvaFRickdpbkt3RTMzYWI4cUtaWHhwV1lueHVibTNEKzhtT3pwSm1LU2FTMTB5a1R6cG90MXNTUHpkTVJPK3RhMnhpazFIVEZhWk9vTFRmNldrMkZLU21LVGN3MmhiNVF4ZHQ5RWNkTWZpMmhGSkxlTkxjbHdoellBa3NVY0RuOEpXcFdWbGtvaWdLY0ZBNnVTcjdLQmNRPT0iLCJpYXQiOjE3MjA1MjIwNTIsImlzcyI6IkRpZ2lsZWRnZSIsInN1YiI6Ik5ldyBQYXltZW50IEF1dGggVG9rZW4gaXMgUmVxdWVzdGVkIiwianRpIjoiMWZmMGQwMjAtNTA5OC00YzYwLWFlYTYtYjVlYzliYTViNzAxIiwiZXhwIjoxNzIwNTI1NjUyfQ.DPAQg2buoxuManekPgDfmWTG6GS6Cr753q0vEBVtzNU",   
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
