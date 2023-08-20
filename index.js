let total = 0;

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

    console.log(totalTwoDecimal);

    document.getElementById('total').innerText = totalTwoDecimal;

}