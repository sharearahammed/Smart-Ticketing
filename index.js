let total = 0;

const buttons = document.querySelectorAll('.button');
// console.log(buttons);


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    // console.log(button);

    button.addEventListener('click',show);

    function show() {
        console.log('clicked');
    
        const btn = button.innerText;
        setBackgroundColorById(btn);
    
        const totalSeat = getElementByIdtoNumber('totalSeat');
        let Total = totalSeat - 1;
        console.log(Total);
        document.getElementById('totalSeat').innerText = Total;
    
        const seat = getElementByIdtoNumber('seat');
        seatCount = seat + 1;
        document.getElementById('seat').innerText = seatCount;
        console.log(seatCount);
    
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
        console.log(perTicketCost);
    
        total += perTicketCost;
        console.log(total);
        document.getElementById('totalPrice').innerText = total;
    
        const grandTotalPriceElement = document.getElementById('grandTotalPrice');
        const grandTotalPriceText = grandTotalPriceElement.innerText;
        grandTotalPriceElement.innerText = total;
        console.log(grandTotalPriceText);


        button.removeEventListener('click',show);
    }

}


















const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {

    const inputField = document.getElementById('input-field').value;
    if (total >= 550) {
        if (inputField === 'New 15') {
            const discountElement = document.getElementById('grandTotalPrice');
            const discount = total * 0.15;

            const totalwithDiscount = total - discount;
            discountElement.innerText = totalwithDiscount;
        }
        else if (inputField === 'Couple 20' && total >= 1100) {
            const discountElement = document.getElementById('grandTotalPrice');
            const discount = total * 0.20;

            const totalwithDiscount = total - discount;
            discountElement.innerText = totalwithDiscount;
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
    // hide everything show only the playground
    hideElementById('header');
    hideElementById('main');
    showElementById('sucessMessage');
}

function cotinue() {
    // hide everything show only the playground
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

