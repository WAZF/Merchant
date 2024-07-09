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

    const formData = new FormData();
    formData.append('purchaseId', "0e22649f-3217-4374-816b-99011f459cc1");
    formData.append('ucic', "thisisuserid");
    formData.append('emailId', "someone@gmail.com");
    formData.append('mobileNo', "7878787878");

    // Make the fetch call with a JSON body
    fetch('https://marketplace.digiledge.in:444/marketplace-simulationserver/marketplace/MPINPayment', {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data) // Convert the data to a JSON string
        body: formData
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
        purchaseToken: "eyJhbGciOiJIUzI1NiJ9.eyJwdXJjaGFzZUlkIjoiOTM1MTlhMjMtNzc4MC00M2M2LWE2N2MtMTVlYmRmOGM4NjFiIiwib3JkZXJJZCI6IjFiMjhjYWM5LThjMWQtNGUzMi1hYzAyLThmZDI5NzYwNjg3YSIsInVzZXJJZCI6InRoaXNpc3VzZXJpZCIsImVtYWlsIjoiSnVuZV9BdWVyQHlhaG9vLmNvbSIsInBob25lTm8iOiI5ODctMzQ5LTU3MTIiLCJhbW91bnQiOiIyMjAuMCIsInR4bmlkIjoiODJiZjJkNTItMjhhZi00OTI5LWFjYzQtOWJiYjlhODdlZjc2IiwidGltZXN0YW1wIjoiMjAyNC0wNy0wOSAxMToxNTowNi43NTciLCJwYXltZW50TW9kZSI6Ik1QSU4iLCJkYXRhIjoiZXlKaGJXOTFiblFpT2lJeU1qQXVNQ0lzSW05eVpHVnlTV1FpT2lJeFlqSTRZMkZqT1MwNFl6RmtMVFJsTXpJdFlXTXdNaTA0Wm1ReU9UYzJNRFk0TjJFaUxDSndZWGx0Wlc1MFRXOWtaU0k2SWsxUVNVNGlMQ0p3ZFhKamFHRnpaVWxrSWpvaU9UTTFNVGxoTWpNdE56YzRNQzAwTTJNMkxXRTJOMk10TVRWbFltUm1PR000TmpGaUlpd2lkWE5sY2tsa0lqb2lkR2hwYzJsemRYTmxjbWxrSWl3aVpXMWhhV3dpT2lKS2RXNWxYMEYxWlhKQWVXRm9iMjh1WTI5dElpd2ljR2h2Ym1WT2J5STZJams0Tnkwek5Ea3ROVGN4TWlJc0luUjRibWxrSWpvaU9ESmlaakprTlRJdE1qaGhaaTAwT1RJNUxXRmpZelF0T1dKaVlqbGhPRGRsWmpjMklpd2lkR2x0WlhOMFlXMXdJam9pTWpBeU5DMHdOeTB3T1NBeE1Ub3hOVG93Tmk0M05UY2lmUT09Iiwic2lnbmF0dXJlIjoiNmpKaWtTYzA4c08vcGFKQzlkMFltWUowbEVMMGs3b3BjWXB2RlVxenpHZ2JHRkxoQnhtRERFLzV2SWZOelkreWNVVGprZmI3ZDBmampXWnZWOWx0OWlyVkE1TW1QS0dmTXZMRXM3TXpHeEFZZXk3OGpDTDk0NjlDT2JZaVI3cmhuNHBjMDV5MmJEUmpScGd3VnQ0MkQyWUg5c1JpeXlEampiSDJqdG5kd0ZlVGVtUW5mdUp2QmtMYytWb3RiRGowUHlFVERNb0kyVCtscXhvajI1RHQraHdHVy9pcXVnMms0QmFHL0FvLzdsQXdxakZNOFZGN0VKSDNLK1FOSzg4eUQ0eDNXYVdHQWRHVlQvSWcrUTFyL0E3TGR3aDFxdFFkcTljNXQxNmpFZzFLcVQ1NitJenZ5bnZ2RkZFbVVSNHR0ODYycUEwZ3FuMlpyVUtsQzFvbjVBPT0iLCJpYXQiOjE3MjA1MjM3MDYsImlzcyI6IkRpZ2lsZWRnZSIsInN1YiI6Ik5ldyBQYXltZW50IEF1dGggVG9rZW4gaXMgUmVxdWVzdGVkIiwianRpIjoiZGNmNDk2OWQtNDBlMy00YWRkLThkYTItYjFkMTU4M2EwYWQ2IiwiZXhwIjoxNzIwNTI3MzA2fQ.1bcx1P3rMWVscDpAo51u5Ti5YtlOuNlKfxJuDY51Vqs",   
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
