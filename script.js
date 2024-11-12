document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const toggleSign = button.querySelector('.faq-toggle');

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            toggleSign.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            toggleSign.textContent = '-';
        }
    });
});
    
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or create empty cart

// Function to add products or courses to the cart
function buyProduct(productName, price) {
    const product = {
        name: productName,
        price: price
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
   
}

// Function to load and display the cart items
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    let total = 0;

    if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = ''; // Clear the previous items

        cartItems.forEach((item) => {
            cartItemsDiv.innerHTML += `<p>${item.name}: $${item.price}</p>`;
            total += item.price;
        });

        document.getElementById('total-price').innerText = `$${total}`;
        document.getElementById('total-amount').value = total; // Set total amount for payment
    }
}

// Load cart on page load if cart exists
window.onload = function () {
    if (document.getElementById('cart-items')) {
        loadCart();
    }
};
// Load cart total on the shipping and payment pages
function loadCartTotal() {
    const storedCart = localStorage.getItem('cart');
    let total = 0;

    if (storedCart) {
        const cart = JSON.parse(storedCart);
        cart.forEach(item => {
            total += item.price;
        });

        // Display the total price
        document.getElementById('total-price').innerText = `$${total}`;
    }
}

// Call the loadCartTotal when the page loads
window.onload = loadCartTotal;

// 2Checkout Payment Integration
document.getElementById('payment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect card and shipping details
    const cardDetails = {
        sellerId: 'your_seller_id', // Your 2Checkout seller ID
        publishableKey: 'your_publishable_key', // Your 2Checkout publishable key
        ccNo: document.getElementById('ccNo').value,
        expMonth: document.getElementById('expMonth').value,
        expYear: document.getElementById('expYear').value,
        cvv: document.getElementById('cvv').value
    };

    const shippingDetails = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value,
        phone: document.getElementById('phone').value,
        totalAmount: document.getElementById('total-price').innerText.replace('$', '')
    };

    // Use 2Checkout to tokenize card details
    TCO.loadPubKey('sandbox', function() {
        TCO.requestToken(function(data) {
            // Success - Use the token to process payment on your backend
            console.log('Token created:', data.response.token.token);

            // Send token and shipping details to the backend for processing the payment
            fetch('backend/process-payment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: data.response.token.token,
                    shippingDetails: shippingDetails
                }),
            }).then(response => response.json())
            .then(result => {
                // Handle the response from your server
                if (result.success) {
                    window.location.href = 'success.html'; // Redirect to success page
                } else {
                    alert('Payment failed: ' + result.message);
                }
            });

        }, function(error) {
            console.error('Error creating token:', error);
            alert('Payment failed: ' + error.errorMsg);
        });
    });
});
document.getElementById("continueToPayment").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for now

    const cardholderName = document.getElementById("cardholder-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const cvv = document.getElementById("cvv").value;
    const expiryMonth = document.getElementById("expiry-month").value;
    const expiryYear = document.getElementById("expiry-year").value;

    if (cardholderName && cardNumber && cvv && expiryMonth && expiryYear) {
        // Proceed to the next payment step or submit the form
        alert("Card information saved. Proceeding to payment.");
        // Here, redirect to the processing page or the next step in the payment process
        window.location.href = "/processing-page";
    } else {
        alert("Please fill out all fields.");
    }
});

        let activeIndex = 0;

function displayImage(index) {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    // Update main image
    mainImage.src = thumbnails[index].src;

    // Update active thumbnail styling
    thumbnails[activeIndex].classList.remove("active");
    thumbnails[index].classList.add("active");

    // Update active index
    activeIndex = index;
}
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const toggleSign = button.querySelector('.faq-toggle');

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            toggleSign.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            toggleSign.textContent = '-';
        }
    });
});
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(tabId).style.display = 'block';

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}
