var textInURL = window.location.search; // '?id=312ty34g1jhg31jyg'
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id'); // '312ty34g1jhg31jyg'

var client = contentful.createClient({
    space: 'mpy1yjxfbgwb',
    accessToken: 'a8YAcV-XWgqT13A98cynKKjUqaHX4fHs70ic6E_WrfU',
});

var productDetails = document.getElementById('product-details');
var boughtTogether = document.getElementById('bought-together');


client.getEntry(id).then(function (entry) {
    
    var productCover = document.createElement('img');
    productCover.classList.add('product-cover');
    productCover.src = entry.fields.cover.fields.file.url;
    productDetails.appendChild(productCover);

    var detailsTextContainer = document.createElement('div');
    detailsTextContainer.classList.add('details-text')
    productDetails.appendChild(detailsTextContainer);

    var productName = document.createElement('h2');
    productName.innerHTML = entry.fields.name;
    detailsTextContainer.appendChild(productName);

    var detailsRetail = document.createElement('div');
    detailsRetail.classList.add('review-container');
    detailsTextContainer.appendChild(detailsRetail);

    var ratingImg = document.createElement('img');
    ratingImg.src= './assets/rating-icon.svg';
    detailsRetail.appendChild(ratingImg);

    var productReviews = document.createElement('p');
    productReviews.innerHTML = '4 (1,565 Reviews)';
    detailsRetail.appendChild(productReviews);

    var saveNotice = document.createElement('a');
    saveNotice.innerHTML= '"Buy More, Save More"'
    detailsRetail.appendChild(saveNotice);
    
    var saveIcon = document.createElement('img');
    saveIcon.src = './assets/save-icon.svg';
    detailsRetail.appendChild(saveIcon);

    var detailsButtonsLine = document.createElement('div');
    detailsButtonsLine.classList.add('details-buttons');
    detailsTextContainer.appendChild(detailsButtonsLine);

    var productPrice = document.createElement('h3');
    productPrice.innerHTML = 'USD$'+entry.fields.price;
    detailsButtonsLine.appendChild(productPrice);

    var detailsSize = document.createElement('button');
    // detailsCart.type = 'button';
    detailsSize.innerHTML= entry.fields.size;
    detailsSize.classList.add('white-button');
    detailsButtonsLine.appendChild(detailsSize);

    var detailsCart = document.createElement('button');
    detailsCart.type = 'button';
    detailsCart.innerHTML = 'Add To Cart';
    detailsCart.classList.add('orange-button');
    detailsButtonsLine.appendChild(detailsCart);

    var descHeading = document.createElement('h4');
    descHeading.innerHTML = 'Description';
    detailsTextContainer.appendChild(descHeading);

    var detailsDesc = document.createElement('p');
    detailsDesc.innerHTML = entry.fields.desc;
    detailsDesc.classList.add('desc-details')
    detailsTextContainer.appendChild(detailsDesc);

    var references
    if (entry.fields.boughtTogether){
        references = entry.fields.boughtTogether
    } else if (entry.fields.frequentlyBoughtWith){
        references = entry.fields.frequentlyBoughtWith
    }

    references.forEach(function (resource) {
        var similarResource = document.createElement('div');
        similarResource.classList.add('best-seller');
        boughtTogether.appendChild(similarResource);

        var imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        similarResource.appendChild(imgContainer);

        var similarImg = document.createElement('img');
        similarImg.src = resource.fields.cover.fields.file.url;
        imgContainer.appendChild(similarImg);

        var similarName = document.createElement('h4');
        similarName.innerHTML = resource.fields.name;
        similarResource.appendChild(similarName);

        var similarPrice = document.createElement('h5');
        similarPrice.innerHTML = 'USD$'+resource.fields.price;
        similarResource.appendChild(similarPrice);

        var similarButtons = document.createElement('div');
        similarButtons.classList.add('best-buttons');
        similarResource.appendChild(similarButtons);

        var similarCart = document.createElement('button');
        similarCart.type ='button';
        similarCart.innerHTML = 'Add to Cart';
        similarCart.classList.add('orange-button');
        similarButtons.appendChild(similarCart);

        var similarWish = document.createElement('button');
        similarWish.type = 'button';
        similarWish.innerHTML = 'Add to Wishlist';
        similarWish.classList.add('white-button');
        similarButtons.appendChild(similarWish);
    });
    
});