<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Melhem</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <!-- Header -->
<div class="header">
<a href="index.html"><h1>Melhem<span>.</span></h1></a>
    <div class="hamburger" onclick="toggleMenu()">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="nav-links">
        
        <a href="aboutus.html">About</a>
        <a href="product.html">Products</a>
        <a href="cart.html">cart</a>
        <a href="contact.html">Contact</a>
    </div>
</div>

    

<form action="customer.php" method="POST">

    <input type="text" name="name" value="Test User" required>
    <input type="email" name="email" value="test@example.com" required>
    <textarea name="message" required>Test message</textarea>
    <button type="submit">Send Message</button>
</form>

    <div class="footer">
        <!-- Logo and Description -->
        <div>
            <h2>melhem</h2>
            <p>be the best versin of yourself</p>
    
            <div class="social-icons">
                <a href="#">&#xf09a;</a> <!-- Facebook Icon -->
                <a href="#">&#xf16d;</a> <!-- Instagram Icon -->
                <a href="#">&#xf099;</a> <!-- Twitter Icon -->
                <a href="#">&#xf0e1;</a> <!-- LinkedIn Icon -->
                <a href="Melhem.png"></a> <!-- YouTube Icon -->
            </div>
        </div>
    
        <!-- Links -->
        <div class="links">
            <h2>Links</h2>
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Return</a>
            <a href="#">Terms</a>
        </div>
    
        <!-- Contact -->
        <div class="contact">
            <h2>Contact</h2>
            <p>123 456 7891</p>
            <p>youremail@gmail.com</p>
            <p>Phoenix, Arizona 947</p>
            <p>Dogwood Road</p>
        </div>
    
       
</body>
</html>
