var productsContent = `<div class="products">
<div class="top-section">
    <h1>Products:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<section class="product">
    <div class="product-one">
        <h1>Food</h1>
        <h2>Order Here</h2>
    </div>
    <div class="product-two">
        <h1>Hotels</h1>
        <h2>Search Here</h2>
    </div>
    <div class="product-three">
        <h1>Flights</h1>
        <h2>Book Here</h2>
    </div>
</section>
</div>`;
var homeContent = `<div id="home">
<div class="title">
<h1>Home</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
</div>
<section class="photos">
    <div class="photo-one">
        <h1>Japan</h1>
        <h2>Cherry Blossoms</h2>
    </div>
    <div class="photo-two">
        <h1>Japan</h1>
        <h2>Temples</h2>
    </div>
    <div class="photo-three">
        <h1>Japan</h1>
        <h2>Kyoto</h2>
    </div>
</section>
</div>`;
var aboutContent = ` <div class="about">
<div class="top-section">
    <h1>About:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="bottom-section">
    <h3>Client Quotes:</h3>
    <div class="client">
    <div class="client-image client-one"></div>
    <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="client-name">
        - Kanye
    </div>
    </div>
</div>
<div class="client">
    <div class="client-image client-two"></div>
    <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="client-name">
            - Jessica Jones
    </div>
    </div>
</div>
<div class="client">
    <div class="client-image client-three"></div>
    <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="client-name">
            - Larissa Mayberry
    </div>
    </div>
</div>
</div>  
</div>`;
var contactContent = `<div class="contact" id="contact">
<h1>Contact Us:</h1>
<div class="map map-one"></div>
<form action="/action_page.php">
    <input type="text" id="fname" name="firstname" placeholder="Your name...">
    <input type="text" id="lname" name="lastname" placeholder="Email Address...">
    <input type="text" id="lname" name="lastname" placeholder="Country...">
    <textarea id="subject" name="subject" placeholder="Message..." style="height:170px"></textarea>
    <button class="promo-button">Send Message</button>
</div> `
function init(userName) {
    let currentHeroImage = "home";
    $("nav a").click(function(e) {
        let btnId = this.id;
        let contentId = btnId + "Content";
        $(".hero").removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`)
        currentHeroImage = btnId;
        ;
        $("#app").html(eval(contentId));
        MODEL.getPageContent(btnId);
});
}


$(document).ready(function() {
    init();
});