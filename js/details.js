var textInURL = window.location.search; // '?id=312ty34g1jhg31jyg'
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id'); // '312ty34g1jhg31jyg'

var client = contentful.createClient({
    space: 'mpy1yjxfbgwb',
    accessToken: 'a8YAcV-XWgqT13A98cynKKjUqaHX4fHs70ic6E_WrfU',
});

var productDetails = document.getElementById('product-details');


client.getEntry(id).then(function (entry) {
    
    var productCover = document.createElement('img');
    productCover.src = entry.fields.cover.fields.file.url;
    productDetails.appendChild(productCover);

    var detailsTextContainer = document.createElement('div');
    productDetails.appendChild(detailsTextContainer);

    var productName = document.createElement('h2');
    productName.innerHTML = entry.fields.name;
    detailsTextContainer.appendChild(productName);

    var detailsButtonsLine = document.createElement('div');
    detailsTextContainer.appendChild(detailsButtonsLine);

    var productPrice = document.createElement('h3');
    productPrice.innerHTML = 'USD$'+entry.fields.price;
    detailsButtonsLine.appendChild(productPrice);

    var detailsSize = document.createElement('button');
    // detailsCart.type = 'button';
    detailsSize.innerHTML= entry.fields.size;
    detailsButtonsLine.appendChild(detailsSize);

    var detailsCart = document.createElement('button');
    detailsCart.type = 'button';
    detailsCart.innerHTML = 'Add To Cart';
    detailsButtonsLine.appendChild(detailsCart);

    var descHeading = document.createElement('h4');
    descHeading.innerHTML = 'Description';
    detailsButtonsLine.appendChild(descHeading);

    // var productCover = document.createElement('img');
    // productCover.src = entry.fields.productCover.fields.file.url;
    // detailsDiv.appendChild(productCover);
    // detailsDiv.appendChild(productTextContainer);

    // var productText = document.createElement('div');
    // productText.classList.add ('details-text');
    // productTextContainer.appendChild(productText);

    // var productName = document.createElement('h2');
    // productName.innerHTML = entry.fields.productName;
    // productText.appendChild(productName);
    
    // var productPrice = document.createElement('p');
    // productPrice.innerHTML = 'CAD$'+entry.fields.productPrice;
    // productText.appendChild(productPrice);

    // var productColor = document.createElement('p');
    // productColor.innerHTML = entry.fields.productColor;
    // productText.appendChild(productColor);

    // var productSize = document.createElement('p');
    // productSize.innerHTML = 'Size:'+ entry.fields.productSize + 'in';
    // productText.appendChild(productSize);
    
    // var buttonsDiv = document.createElement('div');
    // buttonsDiv.classList.add ('desc-buttons');
    // buttonsDiv.className += ' desc-buttons';
    // productTextContainer.appendChild(buttonsDiv);

    // var cartButton = document.createElement("button");
    // cartButton.innerHTML = "Add to cart";
    // buttonsDiv.appendChild(cartButton);

    // var wishlistButton = document.createElement("button");
    // wishlistButton.innerHTML = "Add to wishlist";
    // buttonsDiv.appendChild(wishlistButton);
    
    // var descDiv = document.createElement('div');
    // descDiv.classList.add ('desc-div');
    // detailsDiv.appendChild(descDiv);
});