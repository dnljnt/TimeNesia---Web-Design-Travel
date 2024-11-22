const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleId = urlParams.get("articleId");

const articles = {
  1: {
    headline: "Top 5 Must-Visit Destinations in Bali",
    date: "15 October 2024",
    author: "Indah Lestari",
    image: "../img/balitour.png",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com",
    content: `
            <p class="article-content">Bali, known as the "Island of the Gods," offers an array of breathtaking landscapes, cultural experiences, and exciting adventures. Whether you're a nature lover, beach enthusiast, or someone seeking spiritual rejuvenation, Bali has something for everyone. Here's a list of the top 5 must-visit destinations that capture the essence of Bali:</p>
            <hr>
            <ol>
                <li>Uluwatu Temple</li>
                <p class="article-content">Perched on a cliff overlooking the Indian Ocean, Uluwatu Temple is one of Bali's most iconic sea temples. Not only is it a stunning location for sunset views, but it also hosts the famous Kecak Fire Dance performance in the evening. Visitors can enjoy both the spiritual significance and the dramatic ocean backdrop.</p>
                <li>Ubud Rice Terraces</li>
                <p class="article-content">The lush, green rice terraces of Ubud are a must-see for those looking to connect with Bali’s natural beauty. Take a walk through Tegallalang Rice Terraces, a UNESCO-listed site, and immerse yourself in the tranquility of the surrounding nature.</p>
                <li>Seminyak Beach</li>
                <p class="article-content">For beach lovers, Seminyak Beach offers soft golden sands, upscale beach clubs, and stunning sunsets. Known for its chic vibe, Seminyak is perfect for lounging by the sea, enjoying a cocktail, or indulging in some of Bali’s finest dining and shopping experiences.</p>
                <li>Nusa Penida</li>
                <p class="article-content">Just a short boat ride away from the mainland, Nusa Penida is a haven for adventurers. Famous for its dramatic cliffs, crystal-clear waters, and scenic views, the island is home to Kelingking Beach, Angel’s Billabong, and the natural infinity pool of Broken Beach.</p>
                <li>Tanah Lot Temple</li>
                <p class="article-content">Another one of Bali’s famous sea temples, Tanah Lot is a stunning structure located on a rock formation by the sea. The temple is particularly popular at sunset when the golden light casts a magical glow over the site.</p>
            </ol>
            <hr>
            <p class="article-content">Bali offers a variety of experiences, from spiritual temples to scenic beaches. Whether you're exploring Ubud or relaxing at Seminyak, you’ll have an unforgettable adventure.</p>
        `,
  },
  2: {
    headline: " Top 5 Beaches in Indonesia",
    date: "16 October 2024",
    author: "Kadek Arta",
    image: "../img/lombok-beach.png",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com",
    content: `
    <p class="article-content">
    Indonesia is home to some of the world’s most stunning beaches, offering crystal-clear waters, white sand, and breathtaking scenery. Whether you’re seeking relaxation or adventure, these beaches provide the perfect escape.
    </p>
    <hr>
    <ol>
      <li>Kuta Beach, Bali</li>
      <p>Kuta Beach is one of Bali's most famous and bustling beaches, known for its vibrant energy, surfing opportunities, and mesmerizing sunsets. It’s a favorite spot for tourists who want to enjoy the lively atmosphere and indulge in beachside cafes.</p>
      <li>Pink Beach, Komodo Island</li>
      <p>One of the few pink beaches in the world, this unique destination is located on Komodo Island. The sand gets its pink hue from the mix of white sand and red coral fragments. Snorkeling and diving in the clear waters reveal an underwater paradise teeming with marine life.</p>
      <li>Tanjung Aan Beach, Lombok</li>
      <p>Tanjung Aan Beach, with its soft white sand and turquoise waters, is perfect for swimming and sunbathing. The beach remains relatively quiet, offering a peaceful atmosphere for those looking to escape the crowds.</p>
      <li>Derawan Beach, East Kalimantan</li>
      <p>Derawan Beach is known for its vibrant marine life, with opportunities to spot turtles, manta rays, and colorful coral reefs. It's a dream destination for divers and snorkelers looking to explore Indonesia’s underwater wonders.</p>
      <li>Gili Trawangan, Gili Islands</li>
      <p>Gili Trawangan offers clear waters, a laid-back island vibe, and incredible coral reefs. It's popular among backpackers and divers and is ideal for those who want to relax by day and enjoy lively nightlife in the evening.</p>
    </ol>
    <hr>
    <p class="article-content">Indonesia’s beaches offer diverse experiences, from tranquil pink sands to thrilling surf spots. Whatever your beach style, you’re sure to find something unforgettable here.</p>
    `,
  },
  3: {
    headline: "Best Time to Visit Indonesia",
    date: "1 November 2024",
    author: "Indah Lestari",
    image: "../img/time.jpg",
    source: "Freepik",
    sourceUrl: "https://freepik.com",
    content: `
    <p class='article-content'>Indonesia's climate varies throughout the year, and understanding the best times to visit can help you make the most of your trip.
    <b>Dry Season (April to October)</b>
    The dry season is considered the best time to visit Indonesia, particularly from April to October. During this period, the weather is warm, dry, and perfect for outdoor activities like hiking, beach trips, and island hopping. Bali, Lombok, and the Gili Islands are especially popular during this time.
    <b>Wet Season (November to March)</b>
    The wet season runs from November to March, with heavy rainfall and increased humidity. While travel is still possible, activities such as hiking may be limited. However, this is an excellent time for surfing, as the waves are stronger. It's also the off-peak season, so you can expect fewer tourists and lower accommodation prices.
    </p>
    <hr/>
    <p class='article-content'>
    Best Time for Specific Activities
    </p>
    <ol>
    <li>Surfing</li>
    <p>April to October is ideal, with the best swells found in Bali and Lombok.</p>
    <li>Diving</li>
    <p>May to September offers the best visibility for divers, especially in places like Komodo and Raja Ampat.</p>
    <li>Cultural Festivals</li>
    <p>Bali vibrant cultural festivals take place year-round, but July and August offer the best opportunities to witness traditional ceremonies.</p>
    </ol>
    <hr>
    <p class="article-content">Whether you're chasing waves, exploring temples, or diving into Indonesia’s underwater world, the dry season from April to October is the best time to visit. However, the wet season also holds its charm for off-peak travelers.</p>
    `,
  },
  4: {
    headline: "Best Hiking and Trekking Routes in Indonesia",
    date: "18 October 2024",
    author: "Lily Chen",
    image: "../img/bromo2.jpg",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com",
    content: `
            <p class="article-content">Indonesia's natural landscapes offer some of the best hiking and trekking routes in Southeast Asia. From volcanic peaks to lush jungles, here are the top hiking trails to explore:</p>
            <hr>
            <ol>
                <li>Mount Rinjani, Lombok</li>
                <p class="article-content">A challenging yet rewarding trek, Mount Rinjani offers hikers the opportunity to witness stunning views of the crater lake and the surrounding island.</p>
                <li>Kawah Ijen, East Java</li>
                <p class="article-content">Famous for its blue flames and sulfur mine, Kawah Ijen is an extraordinary trek that offers a once-in-a-lifetime experience of Indonesia’s volcanic beauty.</p>
                <li>Bromo Tengger Semeru National Park, East Java</li>
                <p class="article-content">This national park is home to Mount Bromo and Mount Semeru, two of the most famous hiking spots in Indonesia. The sunrise views are truly magical!</p>
                <li>Mount Agung, Bali</li>
                <p class="article-content">The highest point in Bali, Mount Agung offers a spiritual journey for hikers. The trek to the summit is tough but the reward is a panoramic view over the island.</p>
                <li>Wae Rebo, Flores</li>
                <p class="article-content">For a more cultural experience, Wae Rebo is a trek that takes you to a remote traditional village, offering insight into Indonesia’s rich cultural heritage.</p>
            </ol>
            <hr>
            <p class="article-content">Whether you’re an experienced trekker or a beginner, Indonesia offers a variety of trails with stunning views and unforgettable experiences.</p>
        `,
  },
  5: {
    headline: "Exploring Indonesia's Cultural Heritage",
    date: "19 October 2024",
    author: "Budi Pratama",
    image: "../img/gateofheaven.png",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com",
    content: `
            <p class="article-content">Indonesia is a country rich in cultural heritage, with over 300 ethnic groups and diverse traditions. From ancient temples to local festivals, here's a guide to exploring Indonesia's cultural gems:</p>
            <hr>
            <ol>
                <li>Borobudur Temple, Central Java</li>
                <p class="article-content">The world's largest Buddhist temple, Borobudur is a UNESCO World Heritage Site and a stunning example of Indonesia’s ancient architecture and spirituality.</p>
                <li>Prambanan Temple, Yogyakarta</li>
                <p class="article-content">Another UNESCO site, Prambanan is the largest Hindu temple complex in Indonesia. It’s a must-visit for anyone interested in the country's Hindu past.</p>
                <li>Bali Arts Festival</li>
                <p class="article-content">Every year, Bali celebrates its cultural heritage with the Bali Arts Festival. This month-long event showcases traditional dance, music, and art from across the island.</p>
                <li>Tana Toraja, South Sulawesi</li>
                <p class="article-content">Known for its unique funeral rites and traditional homes, Tana Toraja offers a fascinating glimpse into Indonesia's local customs and beliefs.</p>
                <li>Batik Workshops, Yogyakarta</li>
                <p class="article-content">Experience the traditional art of Batik making in Yogyakarta. These workshops give you the chance to learn about this ancient craft and create your own Batik piece.</p>
            </ol>
            <hr>
            <p class="article-content">Indonesia's cultural diversity is one of its greatest treasures. Whether you’re visiting temples or participating in local festivals, you’ll discover a rich and vibrant heritage.</p>
        `,
  },
  6: {
    headline: "Top 5 Best Foods in Indonesia",
    date: "20 October 2024",
    author: "Lily Chen",
    image: "../img/rawon.jpg",
    source: "Freepik",
    sourceUrl: "https://freepik.com",
    content: `
            <p class="article-content">Indonesia is a paradise for food lovers, offering a diverse array of flavors, spices, and cooking techniques influenced by its rich cultural heritage. From the bustling street food stalls to luxurious dining experiences, the culinary scene in Indonesia is vibrant and full of surprises. Here are the top 5 must-try dishes that will tantalize your taste buds and give you a true taste of Indonesia:</p>
            <hr>
            <ol>
                <li>Nasi Goreng</li>
                <p class="article-content">Indonesian fried rice, known as Nasi Goreng, is a beloved staple that you can find in almost every corner of the country. It's typically made with leftover rice, vegetables, eggs, and your choice of protein like chicken or shrimp. The dish is often seasoned with sweet soy sauce and served with crispy fried shallots, a fried egg on top, and sambal (chili sauce) for a spicy kick. Every region has its unique twist on this classic dish, making it a must-try for any visitor!</p>
                <li>Rendang</li>
                <p class="article-content">Originating from the Minangkabau ethnic group in West Sumatra, Rendang is a slow-cooked beef dish that is rich, tender, and packed with flavor. It's made with a blend of coconut milk and a variety of spices, including lemongrass, galangal, and turmeric, which create a delightful aroma and taste. This dish is often served at special occasions and ceremonies, and its deep flavor profile will leave you craving more!</p>
                <li>Sate</li>
                <p class="article-content">Sate (or Satay) is Indonesia's answer to skewered meat, marinated and grilled to perfection. Each region offers its unique version of Sate, with different types of meat like chicken, beef, or goat, often served with a delicious peanut sauce or soy sauce. Enjoy it with rice cakes (lontong) or plain rice for a complete meal. Watching street vendors prepare Sate over an open flame is an experience in itself!</p>
                <li>Gado-Gado</li>
                <p class="article-content">For a refreshing and healthy option, Gado-Gado is a popular salad made with a mix of steamed vegetables, boiled eggs, tofu, and tempeh, all smothered in a rich peanut sauce. This dish is not only delicious but also showcases the harmony of flavors and textures found in Indonesian cuisine. It's perfect for a light lunch or a side dish to complement your main meal.</p>
                <li>Bakso</li>
                <p class="article-content">Bakso is a savory meatball soup that has gained immense popularity across Indonesia. Made from finely ground beef (or chicken) mixed with tapioca flour, these meatballs are typically served in a rich beef broth, along with noodles, tofu, and vegetables. Bakso is often enjoyed as a hearty street food snack, and you'll find vendors selling it from carts, calling out to passersby. Don't forget to add some chili sauce for an extra zing!</p>
            </ol>
            <hr>
            <p class="article-content">Indonesian cuisine is a delightful journey through flavors and aromas that reflect the country’s rich culture and traditions. Whether you’re dining at a local warung or a fancy restaurant, these five dishes are sure to impress and satisfy your cravings. So, pack your bags and get ready to embark on a culinary adventure through Indonesia!</p>
        `,
  },
  7: {
    headline: "Travel Light, Pack Smart",
    date: "5 October 2024",
    author: "Ayu Kartika",
    image: "../img/travel.jpg",
    source: "Freepik",
    sourceUrl:
      "https://www.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_11512869.htm#fromView=search&page=1&position=39&uuid=7d7ca4ad-8fb5-4812-b40a-4883a2c440b8",
    content: `
    <p class="article-content">
    Indonesia is a tropical country with warm weather all year round, so packing light is a must. However, depending on where you go (from beaches to volcanoes), your packing list will vary. Here’s what you need to know:
    </p>
    <hr>
    <ol>
      <li>Clothing</li>
      <p class="article-content"> Lightweight, breathable fabrics like cotton and linen are your best bet. T-shirts, shorts, and light dresses work well for the hot, humid climate. However, if you're planning to visit temples or more conservative areas, be sure to pack something that covers your shoulders and knees. In places like Bali, a sarong is often required at temples, but they can also be easily rented.</p>
      <li>Footwear</li>
      <p class="article-content">Comfortable shoes are a must, especially if you’re planning to hike or explore rice terraces. Opt for something breathable but supportive, such as hiking sandals or sneakers. For beach days, flip-flops are handy and easy to carry. In many cases, taking off shoes when entering homes or places of worship is a sign of respect, so consider footwear that's easy to remove.</p>
      <li>Gear for Specific Activities</li>
      <p class="article-content">If you're into water sports like snorkeling, bringing your own mask and snorkel can ensure a more hygienic experience. For hiking and trekking, especially if you're climbing volcanoes like Mount Bromo or Mount Rinjani, pack moisture-wicking clothing and a warm jacket for higher elevations, where it can get surprisingly cold.</p>
      <li>Essentials</li>
      <p class="article-content">A high SPF sunscreen, sunglasses, and a hat are essentials to protect yourself from the tropical sun. A reusable water bottle is also a good idea to stay hydrated. Indonesia has plenty of eco-conscious initiatives, so avoid single-use plastic when possible.</p>
      <li>Daypack</li>
      <p class="article-content">A small, sturdy daypack will help you carry your essentials during day trips or hikes. Make sure it's waterproof or bring a rain cover, especially during the rainy season (November to March).</p>
    </ol>
    `,
  },
  8: {
    headline: "Learn Basic Bahasa",
    date: "5 October 2024",
    author: "Budi Pratama",
    image: "../img/learn.jpg",
    source: "Freepik",
    sourceUrl:
      "https://www.freepik.com/free-vector/hand-drawn-glossary-illustration_40478715.htm#fromView=search&page=1&position=2&uuid=d2151e02-cc40-4390-bd7d-67b55d521920",
    content: `
    <p class="article-content">While English is widely spoken in tourist areas, especially in Bali and Jakarta, learning a few phrases in Bahasa Indonesia can greatly enrich your travel experience. Locals will appreciate the effort, and it can help you in less touristy areas.</p>
    <hr>
    <h3>Basic Phrases:</h3>
    <ol>
      <li>Selamat pagi (Good morning)</li>
      <li>Apa kabar? (How are you?)</li>
      <li>Tolong (Please)</li>
      <li>Berapa harganya? (How much is it?)</li>
      <li>Di mana? (Where is it?)</li>
      <li>Santai (Chills)</li>
    </ol>
    <hr>
    <p class="article-content">Indonesians are generally very welcoming and will often help you if they see you trying to speak the language. You don’t have to be fluent, but basic phrases can go a long way in making your trip smoother and more enjoyable.</p>
    `,
  },
  9: {
    headline: "Transportation Tips",
    date: "4 October 2024",
    author: "Ayu Kartika",
    image: "../img/taxi.jpg",
    source: "Freepik",
    sourceUrl:
      "https://www.freepik.com/free-vector/taxi-app-concept_7451365.htm#fromView=search&page=1&position=0&uuid=35da8d70-db75-4c2f-81a8-804bd56513e0",
    content: `
    <p class="article-content">Getting around Indonesia can range from easy and convenient in major cities to more challenging in remote areas. To ensure smooth travel between destinations, here’s what you should know:</p>
    <hr>
    <ol>
      <li>Domestic Flights</li>
      <p class="article-content">Indonesia is made up of over 17,000 islands, so air travel is often the most efficient way to cover long distances. Airlines like Garuda Indonesia, Lion Air, and AirAsia offer frequent domestic flights between major cities and tourist destinations like Bali, Jakarta, Yogyakarta, and Lombok. Book flights in advance to secure the best rates, and note that delays are common, so plan accordingly.</p>
      <li>Use Gojek and Grab</li>
      <p class="article-content">In urban areas like Jakarta, Bali, and Yogyakarta, apps like Gojek and Grab are lifesavers. They offer motorcycle taxis, car services, and even food deliveries. The prices are fixed by the app, so you won’t need to haggle with drivers. Just make sure to have mobile data to order rides and check your location.</p>
      <li>Renting a Scooter</li>
      <p class="article-content">Renting a scooter is a popular way to get around, especially in Bali, Lombok, and other island regions. It’s affordable and offers freedom, but safety is key. Always wear a helmet, and make sure you have an international driver’s license, as it’s required by law (although it’s often loosely enforced). Be mindful of traffic, as roads can be hectic.</p>
      <li>Public Transport</li>
      <p class="article-content">Indonesia’s public transportation system is improving but can still be unreliable outside major cities. In Jakarta, the MRT and TransJakarta buses are affordable and efficient for getting around. In other areas, you might rely on local buses (called "angkot") or bemos, but these can be crowded and slow.</p>
      <li>Ferries and Boats</li>
      <p class="article-content">For island hopping, ferries are a common mode of transportation. For shorter trips, like between Bali and Nusa Penida, fast boats are a convenient option. For longer distances, you can take larger ferries, though these tend to be slow and not as comfortable. Always check safety ratings, as boat accidents have occurred in the past.</p>
    </ol>
    `,
  },
};

const articleHeadline = document.getElementById("article-headline");
const articleDate = document.getElementById("article-date");
const articleAuthor = document.getElementById("article-author");
const articleImg = document.getElementById("article-img");
const articleContent = document.getElementById("article-content");
const breadcrumbActive = document.querySelector(".breadcrumb-active");
const sourceImg = document.getElementById("source-img");

if (articles[articleId]) {
  articleHeadline.textContent = articles[articleId].headline;
  articleDate.textContent = articles[articleId].date;
  articleAuthor.textContent = articles[articleId].author;
  articleImg.src = articles[articleId].image;
  articleContent.innerHTML = articles[articleId].content;
  breadcrumbActive.innerHTML = articles[articleId].headline;
  sourceImg.textContent = articles[articleId].source;
  document.title = articles[articleId].headline + " | Blog";
  articles[articleId].sourceUrl
    ? sourceImg.setAttribute("href", articles[articleId].sourceUrl)
    : sourceImg.setAttribute("href", "Opps Something wrong");
} else {
  articleHeadline.textContent = "Artikel tidak ditemukan";
  articleImg.style.display = "none";
  sourceImg.style.display = "none";
}
