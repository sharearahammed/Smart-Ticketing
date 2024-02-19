let total = 0;
let clickCount = 0;

const buttons = document.querySelectorAll('.button');
// console.log(buttons);


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    // console.log(button);

    button.addEventListener('click', show);


    function show() {
        clickCount++
        if (clickCount < 5) {
            console.log('clicked');

            const btn = button.innerText;
            setBackgroundColorById(btn);

            const totalSeat = getElementByIdtoNumber('totalSeat');
            let Total = totalSeat - 1;
            // console.log(Total);
            document.getElementById('totalSeat').innerText = Total;

            const seat = getElementByIdtoNumber('seat');
            seatCount = seat + 1;
            document.getElementById('seat').innerText = seatCount;
            // console.log(seatCount);

            const list = document.getElementById('list');

            const div = document.createElement('div');
            div.classList.add('flex', 'flex-row', 'justify-between');
            const a = document.createElement('p');
            const b = document.createElement('p');
            const c = document.createElement('p');


            a.innerText = button.innerText;
            b.innerText = 'Economoy';
            c.innerText = '550';

            div.appendChild(a);
            div.appendChild(b);
            div.appendChild(c);

            list.appendChild(div);

            const perTicketCostText = c.innerText;
            const perTicketCost = parseInt(perTicketCostText);
            // console.log(perTicketCost);

            total += perTicketCost;
            // console.log(total);
            document.getElementById('totalPrice').innerText = total;

            const grandTotalPriceElement = document.getElementById('grandTotalPrice');
            const grandTotalPriceText = grandTotalPriceElement.innerText;
            grandTotalPriceElement.innerText = total;
            // console.log(grandTotalPriceText);
            button.removeEventListener('click', show);
        }
        else {
            clickCount = 4
            alert('Maximum number of seats per person have been booked!')
        }

    }

}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {

    const inputField = document.getElementById('input-field').value;
    const cuponCode = inputField.split(' ').join('').toUpperCase();
    if (total >= 550) {
        if (cuponCode === 'NEW15') {
            const discountElement = document.getElementById('grandTotalPrice');
            const discount = total * 0.15;

            const totalwithDiscount = total - discount;
            discountElement.innerText = totalwithDiscount;

            const cupponField = document.getElementById('cupponField');
            cupponField.style.display = "none";

        }
        else if (cuponCode === 'COUPLE20' && total >= 1100) {
            const discountElement = document.getElementById('grandTotalPrice');
            const discount = total * 0.20;

            const totalwithDiscount = total - discount;
            discountElement.innerText = totalwithDiscount;

            const cupponField = document.getElementById('cupponField');
            cupponField.style.display = "none";
        }
        else {
            alert("Invalid CouponCode");
        }
    }

    else (
        alert('Please Select One Seat!')
    )
})

function next() {
    
    const passengerName = document.getElementById('passengerName').value;
    const phoneNumberElement = document.getElementById('phoneNumber').value;
    const phoneNumber = parseInt(phoneNumberElement);
    // console.log(phoneNumber);

    const emailAddress = document.getElementById('emailAddress').value;
    if (typeof phoneNumber === 'number' && !isNaN(phoneNumber) ) {
        hideElementById('header');
        hideElementById('main');
        showElementById('sucessMessage');
        console.log(phoneNumber)
    }
    else{
        alert('Phone number must be a number!')
    }
    document.getElementById('phoneNumber').value = '';
}

function cotinue() {

    hideElementById('sucessMessage');
    showElementById('header');
    showElementById('main');

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const btn = button.innerText;
        removeBackgroundColorById(btn);
    }
    const grandTotalPriceElement = document.getElementById('grandTotalPrice');
    grandTotalPriceElement.innerText = '0';
    document.getElementById('totalPrice').innerText = '0';
    document.getElementById('totalSeat').innerText = '40';
    document.getElementById('seat').innerText = '0';
    document.getElementById('list').innerText = '';


}

