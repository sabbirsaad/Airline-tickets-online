function handleTicketChange(ticket,isIncrease) {
                
    const classCount = getInputValue(ticket);
    let newCount = classCount;
    if (isIncrease == true) {
        newCount = classCount + 1;
    }

    if (isIncrease == false && classCount > 0) {
        newCount = classCount - 1;
    }

    document.getElementById(ticket + '-count').value = newCount;
    calculateTotal();

}


// Calculate-Total-Price 
function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyClassCount = getInputValue('economy');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById("receipt-sub-total").innerText=subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById("receipt-tax").innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
    document.getElementById("receipt-total").innerText = total;
}


// Convert-string-into-number
function getInputValue(ticket) {
    const classInput = document.getElementById(ticket + '-count');
    const classCount = parseInt(classInput.value);
    return classCount;
}


//Confirmation-message
document.getElementById("book-now").addEventListener("click",function(){
    const flyingFrom=document.getElementById("flying-from").value;
    const flyingTo=document.getElementById("flying-to").value;
    const departureDate=document.getElementById("departure-date").value;
    const returnDate=document.getElementById("return-date").value;
    const firstClass =document.getElementById("first-class-count").value;
    const economyClass=document.getElementById("economy-count").value;
    
if(!flyingFrom || !flyingTo || !departureDate || !returnDate || firstClass<1 && economyClass<1){
    document.getElementById("warning").innerText='Please fill up all the requirements !';
}
else{
    
    document.getElementById("ticket-booking").style.display="none";
    document.getElementById("confirmation").style.display="block";
    document.getElementById("receipt-flying-from").innerText=flyingFrom;
    document.getElementById("receipt-flying-to").innerText=flyingTo;
    document.getElementById("receipt-departure").innerText=departureDate;
    document.getElementById("receipt-return").innerText=returnDate;
    document.getElementById("receipt-first-count").innerText=firstClass;
    document.getElementById("receipt-economy-count").innerText=economyClass;
    calculateTotal();

}
})
