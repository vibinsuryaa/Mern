import React from "react";

export default function Card() {
  // Dummy card data for 20 items, each with individual URLs, descriptions, prices, and IDs
  const cardData = [
    {
      id: 1,
      title: "PIZZA",
      imageUrl: "https://source.unsplash.com/random/300x200/?pizza",
      description: "Crafted crust perfection, topped with flavor fireworks: our pizzas redefine deliciousness!",
      price: "₹150",
    },
    {
        id: 2,
        title: "FRESH JUICE",
        imageUrl: "https://source.unsplash.com/random/300x200/?juice",
        description: "Pure vitality in every sip, our fresh juices: nature's refreshment at its finest!                                                .",
        price: "₹30",
      },
      {
        id: 3,
        title: "COOKIES",
        imageUrl: "https://source.unsplash.com/random/300x200/?cookies",
        description: "Crunchy, delightful moments in every bite, our cookies are baked to sweet perfection",
        price: "₹30",
      },
      {
        id: 4,
        title: "ICE CREAM",
        imageUrl: "https://source.unsplash.com/random/300x200/?icecream",
        description: "Indulge in creamy dreams: our ice cream scoops are blissful, chilly delights",
        price: "₹50",
      },
      {
        id: 5,
        title: "CAKE",
        imageUrl: "https://source.unsplash.com/random/300x200/?cake",
        description: "Slice into joy with every layer; our cakes are sweet celebrations in every bite!",
        price: "₹80",
      },
      {
        id: 6,
        title: "FRY",
        imageUrl: "https://source.unsplash.com/random/300x200/?hotdog",
        description: "Juicy, savory, and utterly satisfying; our hotdogs redefine classic comfort bites!",
        price: "₹75",
      },
      {
        id: 7,
        title: "MILKSHAKE",
        imageUrl: "https://source.unsplash.com/random/300x200/?milkshake",
        description: "Sip into pure bliss: our milkshakes blend creamy delight with every flavorful sip",
        price: "₹110",
      },
      {
        id: 8,
        title: "SANDWICH",
        imageUrl: "https://source.unsplash.com/random/300x200/?sandwich",
        description: "Layers of savory perfection, our sandwiches redefine delicious bites",
        price: "₹60",
      },
      {
        id: 9,
        title: "OREO",
        imageUrl: "https://source.unsplash.com/random/300x200/?oreo",
        description: "Chocolatey, creamy, and simply divine: Oreo, the ultimate sweet temptation",
        price: "₹95",
      },
      {
        id: 10,
        title: "CROISSANT",
        imageUrl: "https://source.unsplash.com/random/300x200/?Croissant",
        description: "Croissants: the delightful flakiness that brings joy with every buttery layer!",
        price: "₹240",
      },
      {
        id: 11,
        title: "BURGER",
        imageUrl: "https://source.unsplash.com/random/300x200/?burger",
        description: "Flame-kissed excellence, our grill delights in every savory bite!",
        price: "₹280",
      },
      {
        id: 12,
        title: "HOMEMADE CHOCOLATE",
        imageUrl: "https://source.unsplash.com/random/300x200/?chocolate",
        description: "Decadent, divine, and utterly indulgent: our chocolates are sweet symphonies of delight",
        price: "₹110",
      },
      {
        id: 13,
        title: "TEA",
        imageUrl: "https://source.unsplash.com/random/300x200/?teapot",
        description: "Each cup tells a tale of warmth and comfort; our teas, a blend of serenity and flavor",
        price: "₹20",
      },
      {
        id: 14,
        title: "COFFEE",
        imageUrl: "https://source.unsplash.com/random/300x200/?coffee",
        description: "Awaken your senses with each sip; our coffee, a rich and flavorful escape.",
        price: "₹30",
      },
      {
        id: 15,
        title: "SOUP",
        imageUrl: "https://source.unsplash.com/random/300x200/?soup",
        description: "Comfort in every spoonful; our soups, a heartwarming embrace of flavors.",
        price: "₹80",
      },
      {
        id: 16,
        title: "FRENCHFRIES",
        imageUrl: "https://source.unsplash.com/random/300x200/?frenchfries",
        description: "Crunchy golden perfection in every fry; our French fries redefine delicious simplicity!",
        price: "₹70",
      },
      {
        id: 17,
        title: "PASTA",
        imageUrl: "https://source.unsplash.com/random/300x200/?pasta",
        description: "Savor the harmony of flavors; our meals, a culinary symphony for every palate.",
        price: "₹160",
      },
      {
        id: 18,
        title: "PUDDING",
        imageUrl: "https://source.unsplash.com/random/300x200/?pudding",
        description: "Indulgent sweetness in every spoonful; our puddings, a delectable delight for dessert lovers.",
        price: "₹190",
      },
      {
        id: 19,
        title: "DONET",
        imageUrl: "https://source.unsplash.com/random/300x200/?donet",
        description: "Ring-shaped bliss in every bite; our donuts, a sweet treat for any moment",
        price: "₹110",
      },
    // ... (continue with data for other products) ...
    {
      id: 20,
      title: "BEER",
      imageUrl: "https://source.unsplash.com/random/300x200/?alcohol",
      description: "Cheers to flavor, hops, and good times; our beer,a brew-tiful experience in every sip",
      price: "₹280",
    },
  ];

  // Generate additional dummy card data to fill the remaining space in the row
  const remainingCards = [];
  const remainingEmptyCardCount = 0 - (cardData.length % 4);
  for (let i = 0; i < remainingEmptyCardCount; i++) {
    remainingCards.push({
      id: `empty-₹{i + 21}`, // Starting ID from 21 for new cards
      title: "Empty Product",
      imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
      description: "Placeholder description",
      price: "$0",
    });
  }

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart here
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {[...cardData, ...remainingCards].map((card) => (
          <div key={card.id} className="col">
            <div className="card p-3" style={{ width: "20rem" }}>
              {card.imageUrl && (
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  alt={card.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <p className="card-text">Price: {card.price}</p>
                {card.id && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(card.id)}
                  >
                    Add to Cart
                  </button>
                )}
                <div className="container-fluid mt-2">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <select className="form-select m-2" style={{ height: "100%" }}>
                        {Array.from(Array(6), (e, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-select m-2" style={{ height: "100%" }}>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                      </select>
                    </div>
                    <div className="col-12 text-center">
                      <div className="fs-5">Total Price</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
