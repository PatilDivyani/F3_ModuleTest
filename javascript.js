
async function getMenu () {
   // let endpoint = `https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;

    try{
        let response = await fetch('file.json');
        const results = await response.json()
        await displayMenu(results);       
    }
    catch(error){
        console.log("Error: ", error);
    }
}
let count = 0;
let containMenu = document.getElementById("container");

function displayMenu(menuList) {
   // alert("Choose food")

    menuList.forEach((menu)=>{
        let menuCard = document.createElement("div");
        menuCard.className = "menuCard";

        let span = document.createElement("span");
        span.className = "id";
        span.innerText = `${menu.id}`;
        menuCard.appendChild(span);

        let img = document.createElement("img");
        img.src = `${menu.imgSrc}`;
        menuCard.appendChild(img);

        let div = document.createElement("div");
        div.className = "food-price";

        let h3 = document.createElement("h3");
        h3.className = "foodName";
        h3.innerText = `${menu.name}`;
        div.appendChild(h3);

        let p = document.createElement("p");
        p.className = "price";
        p.innerText = `${menu.price}`;
        div.appendChild(p);

        menuCard.appendChild(div);

        containMenu.append(menuCard);
        //on cicking
        menuCard.addEventListener("click", ()=>{
           if (count<3) {
            orderObject.push(menu);
            count++;
           }
        })
    })
}

var orderObject = [];

async function takeOrder() {  
    return new Promise((resolve)=>{
        setTimeout(()=>{
             //choose any 3 burgers randomly and 
        //add them in the object.
        if(orderObject.length=='')
       { const burgersToAdd = ["Cheeseburger", "Simpleburger", "Vegburger"];
        orderObject = {
          burgersToAdd: burgersToAdd.sort(() => Math.random() - 0.5).slice(0, 3),
        };}

            resolve(orderObject);
        },2500);
    }) 
}
// let orderInfo = [];
 function orderPrep() {
   // alert("Order Status: Bill Payment ")
    return new Promise((resolve) => {
        setTimeout(() => {
          let orderInfo = {
            order_status: true,
            paid: false
          };
          resolve(orderInfo);  
        },1500);
    })   
}

 function payOrder() {
   //alert("Order Status: Payment Successful")
    return new Promise((resolve) => {
        setTimeout(() => {
          const orderInfo = {
            order_status: true,
            paid: true
          };
          resolve(orderInfo);
        },1000);
    })
}

function thankyouFnc() {
        alert("Thankyou for eating with us today!")
}

async function executeAllPromises() {
    try {
        await getMenu();
        alert("Order Food")
      const order = await takeOrder();
      console.log("Take Order:", order);

      const orderStatus = await orderPrep();
      console.log("Order Status:", orderStatus);

      const paymentStatus = await payOrder();
      console.log("Payment Status:", paymentStatus);

      thankyouFnc();

    } catch (error) {
      console.log("Error: ", error);
    }
  }

  //Run the script
  window.onload =  executeAllPromises();

// window.onload = function() {
//     getMenu();
//   };

//   .then(()=>takeOrder())
//   .then(order => {
//     console.log('Order:', order);
//     return orderPrep();
//   })
//   .then(orderInfo => {
//     console.log('Order Info:', orderInfo);
//     return payOrder();
//   })
//   .then(orderInfo => {
//     console.log('Order Info:', orderInfo);
//     thankyouFnc();
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });



 
