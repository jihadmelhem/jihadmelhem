<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boxing Gloves - Melhem</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <header>
        <h1>Melhem </h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="store.html">Shop</a>
            <a href="course.html">Course</a>
            <a href="contact.html">Contact</a>
            <a href="cart.html">Cart</a>
        </nav>
    </header>
    <?php include 'partials/header.html'; ?>

    <section class="product-info">
        <h2>Boxing Gloves</h2>
        <img src="assets/boxing-gloves.jpg" alt="Boxing Gloves">
        <p>Price: $50</p>
        <button onclick="buyProduct('Boxing Gloves', 50)">Buy Now</button>
    </section>

    <!-- Include Footer -->
    <?php include 'partials/footer.html'; ?>
</body>
</html>
