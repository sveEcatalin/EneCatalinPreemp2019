let firstNameBoole=false;
let lnBoole=false;
let mailBoole=false;

let phoneBoole=false;

document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    if (/^[a-zA-Z]+$/.test(value)) {

        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Hi');
        firstNameBoole=true;

    } else {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Bye');
        firstNameBoole=false;
    }
});

document.getElementById("lastName").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    if (/^[a-zA-Z]+$/.test(value)) {

        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Hi2');
        lnBoole=true;

    } else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        console.log(/^[a-zA-Z]+$/.test(value));
        console.log('Bye2');
        lnBoole=false;
    }
});
document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {

        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
        console.log('Hi3');

        mailBoole=true;

    } else {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
        console.log('Bye3');

        mailBoole=false;
    }
});

document.getElementById("phone").addEventListener("blur", function(event) {
    var value = document.getElementById("phone").value;
    if (/^[0-9]*$/.test(value) && value.length>7) {

        document.getElementById("phone").setAttribute("style", "border: 1px solid #777777;");
        console.log(/^[0-9]*$/.test(value));
        console.log('Hi4');
        console.log(value);
        phoneBoole=true;

    } else {
        document.getElementById("phone").setAttribute("style", "border: 1px solid red;");
        console.log(/^[0-9]*$/.test(value));
        console.log('Bye4');
        phoneBoole=false;
    }
});




// document.getElementsByClassName("add").addEventListener("click", function(event) {
//     console.log("HIIII");
// });



let addButton = document.querySelectorAll(".add");
let removeButton= document.querySelectorAll(".remove");
let quantityText = document.querySelectorAll(".quantity");
let priceText=document.querySelectorAll(".price");
let RowTotalPrice=document.querySelectorAll(".row-price");
let removeItemButton=document.querySelectorAll(".remove-item");
let productsTableElements = document.querySelectorAll(".products");


console.log(removeItemButton[4].parentNode.parentNode.rowIndex);

let addRowTotal = (currentQ,currentPrice,index) => {
    let totalPrice;
    totalPrice= parseInt(priceText[index].innerHTML)*parseInt(currentQ);
    console.log("The current Quantity is "+currentQ[index]);
    console.log("The current Price is "+currentPrice[index]);
    console.log("THE TOTAL PRICE IS: " +totalPrice);
    RowTotalPrice[index].innerHTML=totalPrice;
}


let addQuantity = (currentQ,index) => {
    currentQ++;
    quantityText[index].innerHTML=currentQ;
    price=parseInt(priceText[index].innerHTML);
    console.log("ADD QUANTITY PRICE IS "+price);

    addRowTotal(currentQ,price,index);
    
}

let removeQuantity = (currentQ,index) => {
    currentQ--;
    quantityText[index].innerHTML=currentQ;

    price=parseInt(priceText[index].innerHTML);
    console.log("ADD QUANTITY PRICE IS "+price);

    addRowTotal(currentQ,price,index);

}


function deleteRow(index) {
    // console.log(removeItemButton[4].parentNode.parentNode.rowIndex);

    productsTableElements[0].deleteRow(index);

  }

  deleteRow();
 
  removeItemButton.forEach((btn,i)=>{
    btn.addEventListener("click",function(event){
        deleteRow(parseInt(i));
        console.log(i);
        // console.log(quantityText[i].innerHTML);
    });

})

addButton.forEach((btn,i)=>{
    btn.addEventListener("click",function(event){
        addQuantity(parseInt(quantityText[i].innerHTML),i);
        console.log(i);
        // console.log(quantityText[i].innerHTML);
    });

})

removeButton.forEach((btn,i)=>{
    btn.addEventListener("click",function(event){
        removeQuantity(parseInt(quantityText[i].innerHTML),i);
        console.log(i);
        // console.log(quantityText[i].innerHTML);
    });

})


document.getElementById("test-id").addEventListener("submit", function(event){
    console.log("Hlo")
    event.preventDefault();

    if(  lnBoole===true && firstNameBoole ===true && mailBoole===true && phoneBoole===true){
        console.log("this should work")
    }else{
        console.log("something went wrong");
    }
  });



