/**
 * Render UI Product Or Combo for Menu page
 */
let loadProduct = (data, ...typeUI) => {
    $('.menu-list-tab .row').empty();
    var pers;
    data.forEach((item, _) => {
        let price = typeUI.length == 0 ? item.price : item.totalPrice;
        $('.product-image > :first-child').on("click", () => {
            typeUI.length == 0 ? detailProductClick(item.id) : detailComboClick(item.id)
        });
        pers = `
        <div class="col-lg-3 col-md-6">
            <div class="single-product">
                <div class="product-image">
                    <a>
                        <img src="assets/img/shop/image1.jpg" alt="image">
                    </a>
                    <a href="cart.html" class="add-to-cart-btn">Add To Cart
                        <i class="flaticon-shopping-cart"></i>
                    </a>
                </div>
                <div class="product-content">
                    <h3><a>${item.name}</a></h3>
                    <div class="price">
                        <span class="new">$${price}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        $('.menu-list-tab .row').append(pers);
    });
}
/**
 * Render UI Product by Id for Detail Page
 */
let loadProductById = (data) => {
    $('.price').empty();
    $('.price').append(`
        <h3>${data.name}</h3>
            <span class="new-price">$${data.price}</span>
        <p>${data.description}</p>`)
}
/**
 * Render UI New Product for main page
 */
let loadNewProduct = (data) => {
    $('.pizza-shop-area .row').empty();

    var pers;
    data.forEach((item, index) => {
        pers =
            `
        <div class="col-lg-3 col-md-6">
            <div class="pizza-shop-item">
                <div class="image">
                    <img src="assets/img/pizza-shop/4.png" alt="image">
                    <div class="pizza-btn">
                        <a href="shop.html" class="default-btn">Order Online
                            <i class="flaticon-play-button"></i>
                            <span></span>
                        </a>
                    </div>
                </div>
                <div class="content">
                    <h3>${item.name}</h3>
                    <p>Learning do amet contur dicivt suia non nuameius velit</p>
                    <span>$${item.price}</span>
                </div>
            </div>
        </div>
        `;
        $('.pizza-shop-area .row').append(pers);
    });
}
/**
 * Render UI Combo for Main page
 */
let loadCombo = (data) => {
    $('.burger-shop-slider').empty();
    var pers = '';

    data.forEach((item, _) => {
        pers +=
            '<div class="burger-shop-item">' +
            '<div class="image">' +
            '<img src="assets/img/burger-shop/4.png" alt="image">' +
            '<div class="burger-btn">' +
            '<a href="shop.html" class="default-btn">Order Online' +
            '<i class="flaticon-play-button"></i>' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="content">' +
            '<h3>' + item.name + '</h3>' +
            '<p>' + item.description + '</p>' +
            '<span>$' + item.totalPrice + '</span>' +
            '</div>' +
            '</div>';
    });
    $('.burger-shop-slider').append(pers);
    comboEffect();
}
/**
 * Render UI Category for Menu page
 */
let loadCategory = (data) => {
    var pers = '';
    data.forEach((item, index) => {
        pers +=
            '<li>' +
            '<a onclick="getProductByCategory(' + (index + 1) + ')">' +
            '<i class="' + item.image + '"></i>' +
            '<span>' + item.name + '</span>' +
            '</a>' +
            '</li>';
    });
    // combo load
    pers +=
        '<li>' +
        '<a onclick=getComboMenuPage()>' +
        '<i class="flaticon-hamburger"></i>' +
        '<span>' + "Combo" + '</span>' +
        '</a>' +
        '</li>';

    $("#category-list ul").append(pers);
    categoryEffect();
}