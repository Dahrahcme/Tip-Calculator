// Defining and assigning required variables

const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const willingGuest = document.querySelector("#yes");
const quality = document.querySelector("#quality");
const tipAmount = document.querySelector("#display");

// the function that will be used to calculate the tip is defined

calculate = () => {
    // If the guest(s) are wiling to share the tip bill, this line of code will run

    if (willingGuest.value === 1) {
        const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2)
        amount.value = "";
        guests.value = "";
        quality.value = "";

        // This is to keep the code from displaying technical jargon to the client

        if (tip === "NaN") {
            tipAmount.textContent ='Tip ₦0 each'
        }
        else{
            tipAmount.textContent ='Tip ₦' + tip + 'each'
        }
    }
    // This line of code will run if the guest(s) is not willing tos hare the bill
    else {
        tip = ((amount.value * quality.value)).toFixed(2)
        amount.value = "";
        guests.value = "";
        quality.value = "";
        
        // This is to keep the code from displaying technical jargon to the client

        if (tip === "NaN") {
            tipAmount.textContent = 'Tip ₦0'
        }
        else{
            tipAmount.textContent = 'Tip ₦' + tip 
        }
    }
}


// The naira symbol was copied from https://www.cyberdefinitions.com/symbols/currency-symbols/naira-sign.html












