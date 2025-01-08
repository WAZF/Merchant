var token = ""
var Pid = "0e22649f-3217-4374-816b-99011f459cc1"
document.getElementById('buyNow').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Get the form data
    const purchaseId = Pid;
    const userId = "thisisuserid";
    const emailid = "someone@gmail.com";
    const mobileNumber = "7878787878";

    // Define the data to be sent in the request body
    const data = {
        purchaseId: Pid,
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
    fetch('https://marketplace.digiledge.in/marketplace-simulationserver/marketplace/MPINPayment', {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convert the data to a JSON string
        // body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Navigate to the target page after the API call is successful
        // window.location.href = 'index.html';
        token = data.token;
        console.log('token',token);
        // window.alert(`Success: ${data.statusMessage}\nToken: ${data.token}`);
        document.getElementById('successMessage').innerText = `Success: ${data.statusMessage}\nToken: ${data.token}\nData: ${JSON.stringify(data, null, 2)}`;
    })
    .catch((error) => {
        console.log('Error:', error);
        // Optionally, handle the error (e.g., display an error message)
        // window.alert(`Error: ${error.message}`);
        document.getElementById('responseMessage').innerText = `Error: ${error.message}\n${JSON.stringify(error, null, 2)}`;
    });
});

function invokeMPINFromWebPage() {
    console.log("inside invokeMPIN function")
    var orderDetails = {
        accountNumber: "1234567890", 
        purchaseToken: token,   
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

function getPID(){
    console.log("inside get purchase ID")
    var msg = {
    };
    var messageBody = JSON.stringify(msg);
    console.log('messageBody',messageBody)
    if (window?.android){
        Android.pid(messageBody);
    }
    else{
        window.webkit.messageHandlers.pid.postMessage(messageBody);
    }
}

function getStatus(){
    console.log("inside get status")
    var msg = {
    };
    var messageBody = JSON.stringify(msg);
    console.log('messageBody',messageBody)
    if (window?.android){
        Android.pid(messageBody);
    }
    else{
        window.webkit.messageHandlers.pid.postMessage(messageBody);
    }
}

function getMPINStatus(MPINstaus){
    console.log("Received MPIN status from native app:", MPINstaus);
    document.getElementById('pidresponse').innerText = `received MPIN status  = ${MPINstaus}`;
}

function getPurchaseId(purchaseId) {
    console.log("Received Purchase ID from native app:", purchaseId);
    // Do something with the purchase ID, like displaying it on the webpage
    Pid = purchaseId;
    document.getElementById('pidresponse').innerText = `received PID = ${purchaseId}`;
}


function getAgent(){
    console.log("Inside getAgent Fn");
    var msg = navigator.userAgent;
    console.log(`useragent: ${msg}`);
    document.getElementById('userAgentRes').innerText = `User Agent: ${msg}`;
}
