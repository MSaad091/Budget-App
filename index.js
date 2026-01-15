let userinput = document.querySelector('input');
let userNumber = document.getElementById('num');
let ul = document.querySelector('ul');
let totalDisplay = document.getElementById('totalDisplay');
// let totalAmount = 0
let arr = [];
// function updateTotalDisplay(){
//     totalDisplay.textContent = "Total:"+ totalAmount
// }





// arr.nu

function addValue() {
    let userInfo = userinput.value.trim();
    let UserAmount = userNumber.value.trim();
 
   function updateTotal(){
    let total = arr.reduce((sum,item) => sum + Number(item.userNumber),0)
    totalDisplay.textContent = "Total : " + total
}
// function removeTotal() {
//     let removetotal = arr.reduce((sum,item) => sum - Number(item.userNumber),0)
//     totalDisplay.textContent = "RemoveTOtal : " - removetotal
// }


    if (!userInfo || !UserAmount) return;

    arr.push({ userinput: userInfo, userNumber: UserAmount });
    updateTotal()
    // removeTotal()
    let art = arr.map((item) => Number(item.userNumber));  // convert to number if needed
console.log(art);

    let index = arr.length - 1;

    userinput.value = '';
    userNumber.value = '';
    console.log(arr);

    // Create elements
    let h2 = document.createElement('h2');
    let li = document.createElement('li');
    const deletebtn = document.createElement('button');
    const updatebtn = document.createElement('button');
    const savebtn = document.createElement('button');

    // Editable inputs (initially hidden)
    const nameInput = document.createElement('input');
    const amountInput = document.createElement('input');
    nameInput.style.display = 'none';
    amountInput.style.display = 'none';

    // Set initial values
    h2.textContent = userInfo;
    li.textContent = UserAmount;
    deletebtn.textContent = "Delete";
    updatebtn.textContent = "Update";
    savebtn.textContent = "Save";
    savebtn.style.display = "none";

    // DELETE handler
    deletebtn.onclick = function () {
        ul.removeChild(wrapper);
        arr.splice(index, 1);
        updateTotal()
        // removeTotal()
        console.log('Deleted. Current array:', arr);
    };

    // UPDATE handler
    updatebtn.onclick = function () {
        nameInput.value = h2.textContent;
        amountInput.value = li.textContent;

        h2.style.display = 'none';
        li.style.display = 'none';
        nameInput.style.display = 'inline-block';
        amountInput.style.display = 'inline-block';
        savebtn.style.display = 'inline-block';
        updatebtn.style.display = 'none';
        // removeTotal()
    };

    // SAVE handler
    savebtn.onclick = function () {
        let newName = nameInput.value.trim();
        let newNum = amountInput.value.trim();

        if (!newName || !newNum) return;

        h2.textContent = newName;
        li.textContent = newNum;

        arr[index].userinput = newName;
        arr[index].userNumber = newNum;

        nameInput.style.display = 'none';
        amountInput.style.display = 'none';
        h2.style.display = 'block';
        li.style.display = 'block';
        savebtn.style.display = 'none';
        updatebtn.style.display = 'inline-block';

        console.log('Updated Array:', arr);
    };

    // Wrap everything together
    let wrapper = document.createElement('div');
    wrapper.appendChild(h2);
    wrapper.appendChild(nameInput);
    wrapper.appendChild(li);
    wrapper.appendChild(amountInput);
    wrapper.appendChild(updatebtn);
    wrapper.appendChild(savebtn);
    wrapper.appendChild(deletebtn);

    ul.appendChild(wrapper);
}
