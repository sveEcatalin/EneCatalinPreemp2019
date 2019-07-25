// function outerFunction(){
//     let testVar = "outer";
//     console.log("calling from outer  "+testVar);
//     function innerFunction(){
//         testVar="inner";
//         console.log("calling from inner "+ testVar);
//     }
//     innerFunction();
//     console.log("calling again from outer "+testVar);
// }

// outerFunction();

// function sumWithClosures(a){

//     return function clojureSum(b){
//         return function (c){
//             console.log(a+b+c);
//         }
//     }
// }

// sum1=sumWithClosures(1);
// console.log(sum1);
// sum2=sum1(2);
// console.log(sum2);
// sum3=sum2(3);
// console.log(sum3);

// sumWithClosures(1)(2)(3);

//array obiecte, name si age, calc media de varsta medie

// let nameAgeArr=[
//     {
//         name:"Andrew",
//         age:25
//     },

//     {
//         name:"Mihai",
//         age:20
//     },
//     {
//         name:"Constantin",
//         age:20
//     },
//     {
//         name:"Tom",
//         age:20
//     }
// ]



// function calculateAvg(ageObj){
//     let sum=0;
//     let avg=0;
//     // for(let i=0; i<nameAgeArr.length;i++){

//     //     sum+=nameAgeArr[i].age;
//     // }


//     ageObj.forEach(element => {
//         sum+=element.age;
//     });

//     return avg=sum/nameAgeArr.length;

// }


// console.log(calculateAvg(nameAgeArr));


// let myData={
//     name:"Tommy",

//     getName:function(name){
//         console.log(this);
//         console.log("this dot name"+ this.name);
//         return this.name;
//     }
// }

// myData.getName;
// console.log(myData.getName);


// let nameAgeArr =
//     [
//         {
//             name: "Andrew",
//             age: 25,
//             funName: function (name) {
//                 return this.name;
//             }
//         },

//         {
//             name: "Mihai",
//             age: 20,
//             funName: function (name) {
//                 return this.name;
//             }
//         },
//         {
//             name: "Constantin",
//             age: 20,
//             funName: function (name) {
//                 return this.name;
//             }
//         },
//         {
//             name: "Tom",
//             age: 20,
//             funName: function (name) {
//                 return this.name;
//             }
//         }
//     ]


// nameAgeArr.forEach(element => {
//     console.log(element.funName());
// });


let calculator = {

    numOne: 0,
    numTwo: 0,

    read: function () {
         this.numOne = prompt("Enter the first number");
        if (this.numOne != null) {
            console.log(this.numOne);
        }
        this.numTwo = prompt("Enter the second number");
        if (this.numTwo != null) {
            console.log(this.numTwo);
        }
    },

    sum: function () {
        alert("THE SUM IS: "+ parseInt(parseInt(this.numOne)+parseInt(this.numTwo)));
    },

    mul:function(){
        alert("THE PRODUCT IS: "+ parseInt(this.numOne)*parseInt(this.numTwo));

    }
}


calculator.read();
calculator.sum();
calculator.mul();