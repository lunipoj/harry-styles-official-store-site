var client = contentful.createClient({
    space: 'mpy1yjxfbgwb',
    accessToken: 'a8YAcV-XWgqT13A98cynKKjUqaHX4fHs70ic6E_WrfU',
});

var bestSellers = document.getElementById('best-sellers');
var newArrivals = document.getElementById ('new-arrivals');

client.getEntries ({content_type: 'hsWebsite'}).then(function (entries) {
    
    entries.items.forEach(function (entry) {
        
        var carouselBest = document.createElement ('div');
        bestSellers.appendChild(carouselBest);

        var bestSeller = document.createElement('div');
        bestSeller.classList.add('best-seller');
        carouselBest.appendChild(bestSeller);

        var imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        bestSeller.appendChild(imgContainer);

        var detailsLink = document.createElement('a');
        detailsLink.href = 'details.html?id='+entry.sys.id;
        imgContainer.appendChild(detailsLink);
        
        var bestImg = document.createElement('img');
        bestImg.src = entry.fields.cover.fields.file.url;
        detailsLink.appendChild(bestImg);

        var bestName = document.createElement('h4');
        bestName.innerHTML = entry.fields.name;
        bestSeller.appendChild(bestName);

        var bestPrice = document.createElement('h5');
        bestPrice.innerHTML = 'USD$'+entry.fields.price;
        bestSeller.appendChild(bestPrice);

        var bestButtons = document.createElement('div');
        bestButtons.classList.add('best-buttons')
        bestSeller.appendChild(bestButtons);
        
        var bAddToCart = document.createElement('button');
        bAddToCart.type = "button";
        bAddToCart.innerHTML = 'Add To Cart';
        bAddToCart.classList.add('orange-button');
        bestButtons.appendChild(bAddToCart);

        var bWishlist = document.createElement('button');
        bWishlist.type = 'button';
        bWishlist.innerHTML = 'Add To Wishlist';
        bWishlist.classList.add('white-button');
        bestButtons.appendChild(bWishlist);

    });
});

client.getEntries ({content_type: 'hsNew'}).then(function (entries) {
    
    entries.items.forEach(function (entry) {
        
        var carouselNew = document.createElement ('div');
        newArrivals.appendChild(carouselNew);

        var newArrival = document.createElement('div');
        newArrival.classList.add('best-seller');
        carouselNew.appendChild(newArrival);
        
        var imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        newArrival.appendChild(imgContainer);

        var detailsLink = document.createElement('a');
        detailsLink.href = 'details.html?id='+entry.sys.id;
        imgContainer.appendChild(detailsLink);

        var newImg = document.createElement('img');
        newImg.src = entry.fields.cover.fields.file.url;
        detailsLink.appendChild(newImg);

        var newName = document.createElement ("h4");
        newName.innerHTML = entry.fields.name;
        newArrival.appendChild(newName);

        var newPrice = document.createElement('h5');
        newPrice.innerHTML = 'USD$'+entry.fields.price;
        newArrival.appendChild(newPrice);

        var newButtons = document.createElement('div');
        newButtons.classList.add('best-buttons');
        newArrival.appendChild(newButtons);
        
        var nAddToCart = document.createElement('button');
        nAddToCart.type = 'button';
        nAddToCart.innerHTML = 'Add To Cart';
        nAddToCart.classList.add('orange-button');
        newButtons.appendChild(nAddToCart);

        var nAddToWishlist = document.createElement('button');
        nAddToWishlist.type='button';
        nAddToWishlist.innerHTML='Add to Wishlist';
        nAddToWishlist.classList.add('white-button');
        newButtons.appendChild(nAddToWishlist); 
 
    });
});


$(document).ready(function(){
    $('.menu-icon').click (function(){
        $('nav').toggleClass ('nav-expanded');
        return false;
    })
})