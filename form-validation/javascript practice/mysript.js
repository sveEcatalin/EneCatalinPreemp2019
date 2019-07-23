let firstNameBoole=false;
let lnBoole=false;
let mailBoole=false;

let phoneBoole=false;

document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    if (/^[a-zA-Z]+$/.test(value)) {

        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");

        firstNameBoole=true;

    } else {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");

        firstNameBoole=false;
    }

    checkIfDisabled();
});

document.getElementById("lastName").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    if (/^[a-zA-Z]+$/.test(value)) {

        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");

        lnBoole=true;

    } else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");

        lnBoole=false;
    }

    checkIfDisabled();

});
document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {

        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");

        mailBoole=true;

    } else {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");


        mailBoole=false;
    }

    checkIfDisabled();

});

document.getElementById("phone").addEventListener("blur", function(event) {
    var value = document.getElementById("phone").value;
    if (/^[0-9]*$/.test(value) && value.length>7) {

        document.getElementById("phone").setAttribute("style", "border: 1px solid #777777;");

        phoneBoole=true;

    } else {
        document.getElementById("phone").setAttribute("style", "border: 1px solid red;");

        phoneBoole=false;
    }

    checkIfDisabled();

});

function checkIfDisabled(){
    if(  lnBoole===true && firstNameBoole ===true && mailBoole===true && phoneBoole===true){
        document.getElementById('checkout').disabled = false;
    
    }else{

        document.getElementById('checkout').disabled = true;
        

    }
}




let addButton = document.querySelectorAll(".add");
let removeButton= document.querySelectorAll(".remove");
let quantityText = document.querySelectorAll(".quantity");
let priceText=document.querySelectorAll(".price");
let RowTotalPrice=document.querySelectorAll(".row-price");
let removeItemButton = document.querySelectorAll(".remove-item");
let productsTableElements = document.querySelectorAll(".product");

let totalTableItemPrice=document.querySelectorAll(".total-price");
console.log(totalTableItemPrice);

let addRowTotal = (currentQ,currentPrice,index) => {
    let totalPrice;
    let oldTablePrice=parseInt(totalTableItemPrice[0].innerHTML);
    let price =parseInt(priceText[index].innerHTML);

    console.log("old table price "+ oldTablePrice);
    console.log("the item price is "+price );

    totalPrice = parseInt(priceText[index].innerHTML) * parseInt(currentQ);
    RowTotalPrice[index].innerHTML = totalPrice+"$";

    totalTableItemPrice[0].innerHTML=oldTablePrice+price+"$";
}

let removeRowTotal =(currentQ,index)=>{
    let totalPrice;
    let oldTablePrice=parseInt(totalTableItemPrice[0].innerHTML);
    let price =parseInt(priceText[index].innerHTML);

    console.log("old table price "+ oldTablePrice);
    console.log("the item price is "+price );

    totalPrice = parseInt(priceText[index].innerHTML) * parseInt(currentQ);
    RowTotalPrice[index].innerHTML = totalPrice;

    totalTableItemPrice[0].innerHTML=oldTablePrice-price+"$";
}


let addQuantity = (currentQ,index) => {
    currentQ++;
    quantityText[index].innerHTML=currentQ;

    price=parseInt(priceText[index].innerHTML);
    console.log("ADD QUANTITY PRICE IS "+price);

    addRowTotal(currentQ,price,index);
    
}

let removeQuantity = (currentQ,index) => {
    if(quantityText[index].innerHTML>0){
        currentQ--;
        quantityText[index].innerHTML=currentQ;
    
        price=parseInt(priceText[index].innerHTML);
        console.log("ADD QUANTITY PRICE IS "+price);
    
        removeRowTotal(currentQ,index);
    }


}



for (n=0, length = removeItemButton.length; n < length; n++) {
    removeItemButton[n].id= "remove" + (n + 1); 
}
addButton.forEach((btn,i)=>{
    btn.addEventListener("click",function(event){
        addQuantity(parseInt(quantityText[i].innerHTML),i);
    });

})


console.log("asafafsa",productsTableElements);
function deleteRow(myElement,index) {
    console.log("ROW TABLE PRICE OF INDEX IS "+RowTotalPrice[index].innerHTML);

    let oldTablePrice=parseInt(totalTableItemPrice[0].innerHTML);

    totalTableItemPrice[0].innerHTML=oldTablePrice-parseInt(RowTotalPrice[index].innerHTML)+"$";
    myElement.parentNode.removeChild(myElement);
     
  }

 


console.log("adsasa",removeItemButton);
for(i=0;i<removeItemButton.length;i++){
    removeItemButton[i].addEventListener("click",deleteRow.bind(null,productsTableElements[i],i));
}




removeButton.forEach((btn,i)=>{
    btn.addEventListener("click",function(event){
        removeQuantity(parseInt(quantityText[i].innerHTML),i);

    });

})

// if( "a"==="a" ){
//     document.getElementById('checkout').disabled = false;
// }

document.getElementById("test-id").addEventListener("submit", function(event){
    event.preventDefault();


  });



