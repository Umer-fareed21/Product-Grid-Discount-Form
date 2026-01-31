var products = [
    {
        name: "Wireless Mouse",
        price: 1500,
        img: "./home-images/mouse.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Keyboard",
        price: 4500,
        img: "./home-images/keyboard.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Mouse Pad",
        price: 800,
        img: "./home-images/mousepad.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Moniter",
        price: 12000,
        img: "./home-images/moniter.jpg",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Wireless Mouse",
        price: 1500,
        img: "./home-images/mouse.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Keyboard",
        price: 4500,
        img: "./home-images/keyboard.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Mouse Pad",
        price: 800,
        img: "./home-images/mousepad.jfif",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    },
    {
        name: "Moniter",
        price: 12000,
        img: "./home-images/moniter.jpg",
        details: "endis provident assumenda vitae, quo debitis voluptas nam quam reiciendis impedit!"
    }
];

let productGrid = document.getElementById("products");

var html = "";


for (let i = 0; i < products.length; i++) {
    html += `
        <div class="product">
          <img src="${products[i].img}" class="product-img">
          <h3 class="product-title">${products[i].name}</h3>
          <p class="product-desc">${products[i].details}</p>
          <strong class="product-price">Rs ${products[i].price}</strong>
          <br><br>
          <button class="add-btn">Add to Cart</button>
        </div>
        
        `;
}

productGrid.innerHTML = html;

let coupon = [
    {
        cop1: 112233
    },
    {
        cop1: 445566
    },
    {
        cop1: 778899
    }
]

function claculateHandler() {

    let amount = document.getElementById("formGroupExampleInput").value;
    let coupon = document.getElementById("formGroupExampleInput2").value;
    let result = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        result.innerHTML = "<span style='color:red'>please enter valid amount</span>";
        return;
    }

    let discount = 0;

    if (coupon == 112233) {
        discount = 20;
    }
    else if (coupon == 445566) {
        discount = 40;
    }
    else if (coupon == 778899) {
        discount = 60;
    }
    else {
        result.innerHTML = "<span style='color:red'>invalid coupon code</span>";
        return;
    }

    let discountAmount = (amount * discount) / 100;
    let finalAmount = amount - discountAmount;

    result.innerHTML = `
        <span style="color:#ffffff">
            discount: ${discount}% <br>
            discount amount: ${discountAmount} <br>
            final amount: ${finalAmount}
        </span>
    `;
}