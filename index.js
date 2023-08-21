let total = 0;
const applyButton = document.getElementById('applyButton');
const purchaseButton = document.getElementById('purchaseButton');

applyButton.setAttribute('disabled', '');
purchaseButton.setAttribute('disabled', '');
applyButton.classList.add('cursor-not-allowed');
purchaseButton.classList.add('cursor-not-allowed');

const couponInput = document.getElementById('coupon');

function handleClickBtn(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[3].childNodes[3].innerText;
    // console.log(itemName);

    const count = selectedItemContainer.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-3');
    p.classList.add('text-lg');
    p.classList.add('font-medium');
    p.classList.add('text-[#111]');

    p.innerHTML = `${count+1}. ${itemName}`;

    selectedItemContainer.appendChild(p);


    const price = target.parentNode.childNodes[3].childNodes[5].innerText.split(' ')[0];

    total = parseFloat(total) + parseFloat(price);
    totalTwoDecimal = total.toFixed(2);

    // console.log(totalTwoDecimal);

    document.getElementById('total').innerText = totalTwoDecimal;
    
    if(total >= 200){
        applyButton.removeAttribute('disabled');
        applyButton.classList.add('cursor-pointer');
        applyButton.classList.remove('cursor-not-allowed');
        applyButton.style.backgroundColor = '#E527B2';
        applyButton.style.color = 'white';
        applyButton.addEventListener('click', handleClickApplyBtn);
    }else{
        applyButton.setAttribute('disabled', '');
        applyButton.classList.remove('cursor-pointer');
        applyButton.removeEventListener('click', handleClickApplyBtn);
    }
        
        
    if(total > 0){
        purchaseButton.removeAttribute('disabled');
        purchaseButton.classList.add('cursor-pointer');
        purchaseButton.classList.remove('cursor-not-allowed');
    }else{
            purchaseButton.setAttribute('disable', '');
            purchaseButton.classList.remove('cursor-pointer');
    }
}


function handleClickApplyBtn(){
    const couponCode = couponInput.value.trim();
    

    if(couponCode === 'SELL200'){
        const discountPrice = total * 0.2;
        const discountTotal = total - discountPrice;

        document.getElementById('discountPrice').innerText = discountPrice.toFixed(2);

        document.getElementById('discountTotal').innerText = discountTotal.toFixed(2);
    }

    // console.log(couponCode);
}

function closeModal(){
    const modal = document.getElementById('congoModal');
    window.location.reload();
}