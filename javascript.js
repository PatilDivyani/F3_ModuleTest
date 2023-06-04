
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
        menuCard.innerHTML = `
            <span class="id">${menu.id}</span>
            <img src="${menu.imgSrc}" alt="img">
            <div class="food-price">
            <h3 class="foodName">${menu.name}</h3>
            <p class="price">${menu.price}</p>
            </div>
            `;
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
//[{"id": 1,"name": "Cheeseburger","price": 5.99,
    //     order_status: true,
    //     paid: false}]

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
let orderInfo = [];
 function orderPrep() {
   // alert("Order Status: Bill Payment ")
    return new Promise((resolve) => {
        setTimeout(() => {
           orderInfo = {
            order_status: true,
            paid: false
          };
          resolve(orderInfo);
          
        },1500);
    })
    //return {order_status:true; paid:false}
}

 function payOrder() {
   //alert("Order Status: Payment Successful")
    return new Promise((resolve) => {
        setTimeout(() => {
        //   const orderInfo = {
        //     order_status: true,
        //     paid: true
        //   };
        orderInfo.paid = true;
          resolve(orderInfo);
        },1000);
    })
    //return {order_status:true; paid:true}

}

function thankyouFnc() {
    //- Once {paid:true} is received
        alert("Thankyou for eating with us today!")
}

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

