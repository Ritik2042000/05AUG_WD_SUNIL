

// function countbill() {
//     let billAmount = document.getElementById('billamount').value;
//     let discount = document.getElementById('discount');
//     // let servicesQuality = document.getElementById('servicesQuality').value;
    
//     console.log(discount);
//     let numPeople = document.getElementById('totalPeople').value;
    
//     //validation if input haven't any value
//     if (billAmount === "" || discount == 0) {
//         window.alert('Please Fill The All Detalis');
//         return;
//     }
//     if (numPeople === "" || numPeople <= 1) {
//         numPeople = 1;
//         document.getElementById('each').style.display = 'none';
//     } else {
//         document.getElementById('each').style.display = 'block';
//     }
    
//     discount.addEventListener('input', function() {
//         const inputValue = parseInt(discount.value);
        
//         if (inputValue > 99) {
//             discount.value = 99;
//             alert('please enter value from 0 to 99');
//         }
//     });
    
//     //calulation
//     let discountvalue = (discount.value)
//     let total = (billAmount*discountvalue)/100;
//     let total2 = billAmount-total;
//     total = Math.round(total2 ) / numPeople;
//     total2 = total.toFixed(2);
    
//     //Display the tip 
//     document.getElementById("totaltip").style.display = "block";
//     document.getElementById("tip").innerHTML = total2;

// }

// document.getElementById("totaltip"). style.display = "none";
// document.getElementById("each"). style.display = "none";

// document.getElementById("calculate").onclick = function () { countbill(); };

// ----------------------------------------------------------------
// document.getElementById("totaltip").style.display = "none";
// document.getElementById("each").style.display = "none";

// const billAmountInput = document.getElementById('billamount');
// const discountInput = document.getElementById('discount');
// const numPeopleInput = document.getElementById('totalPeople');

// discountInput.addEventListener('input', function() {
//     const inputValue = parseInt(discountInput.value);
    
//     if (inputValue > 99) {
//         discountInput.value = 99;
//         alert('Please enter a value from 0 to 99');
//     }
// });

// document.getElementById("calculate").onclick = function() {
//     const billAmount = parseFloat(billAmountInput.value);
//     const discountValue = parseInt(discountInput.value);
//     const numPeople = parseInt(numPeopleInput.value);
    
//     if (billAmount === 0 || isNaN(discountValue)) {
//         window.alert('Please fill in all details');
//         return;
//     }
    
//     if (numPeople < 1) {
//         numPeopleInput.value = 1;
//         document.getElementById('each').style.display = 'none';
//     } else {
//         document.getElementById('each').style.display = 'block';
//     }
    
//     let totalTip = (billAmount * discountValue) / 100;
//     totalTip = Math.round(totalTip * 100) / 100;
//     totalTip /= numPeople;
    
//     document.getElementById("totaltip").style.display = "block";
//     document.getElementById("tip").innerHTML = totalTip.toFixed(2);
// };


    // <-------------------->

    document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

const billAmountInput = document.getElementById('billamount');
const discountInput = document.getElementById('discount');
const numPeopleInput = document.getElementById('totalPeople');
const calculateButton = document.getElementById("calculate");
const eachElement = document.getElementById('each');
const totalTipElement = document.getElementById("totaltip");
const tipDisplayElement = document.getElementById("tip");

let discountValue = 0;

discountInput.addEventListener('input', function() {
    const inputValue = parseInt(discountInput.value);
    
    if (inputValue > 99) {
        discountInput.value = 99;
        alert('Please enter a value from 0 to 99');
    }
    
    discountValue = parseInt(discountInput.value);
});

calculateButton.onclick = function() {
    const billAmount = parseFloat(billAmountInput.value);
    const numPeople = parseInt(numPeopleInput.value);
    
    if (billAmount === 0 || isNaN(discountValue)) {
        window.alert('Please fill in all details');
        return;
    }
    
    if (numPeople < 1) {
        numPeopleInput.value = 1;
        eachElement.style.display = 'none';
    } else {
        eachElement.style.display = 'block';
    }
    
    let totalTip = (billAmount * discountValue) / 100;
    totalTip = Math.round(totalTip * 100) / 100;
    totalTip /= numPeople;
    
    totalTipElement.style.display = "block";
    tipDisplayElement.innerHTML = totalTip.toFixed(2);
};

    
