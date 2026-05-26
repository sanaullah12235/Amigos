export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Pizza Deals
  { id: "pd1", name: "Deal 1: Small Pizza + Drink", price: 1450, category: "Pizza Deals", description: "Any Small Pizza + 1 Regular Drink", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=500&auto=format&fit=crop" },
  { id: "pd2", name: "Deal 2: Medium Pizza + 2 Drinks", price: 1850, category: "Pizza Deals", description: "Any Medium Pizza + 2 Regular Drinks", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=500&auto=format&fit=crop" },
  { id: "pd3", name: "Deal 3: 2 Medium Pizzas + 1L Drink", price: 2400, category: "Pizza Deals", description: "2 Medium Pizzas + 1 Litre Drink", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop" },
  { id: "pd4", name: "Deal 4: 2 Large Pizzas + 1.5L Drink", price: 2700, category: "Pizza Deals", description: "Any 2 Large Pizzas + 1.5 Litre Drink", image: "https://images.unsplash.com/photo-1574129624864-7724244a0dc3?q=80&w=500&auto=format&fit=crop" },
  { id: "pd5", name: "Deal 5: Large + Medium + 1.5L Drink", price: 3050, category: "Pizza Deals", description: "Any Large Pizza + Any Medium Pizza + 1.5 Litre Drink", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=500&auto=format&fit=crop" },
  { id: "pd6", name: "Deal 6: 3 Large Pizzas + 1.5L Drink", price: 3800, category: "Pizza Deals", description: "Any 3 Large Pizzas + 1.5 Litre Drink", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop" },
  { id: "pd7", name: "Deal 7: 2 XL Pizzas + 1.5L Drink", price: 4450, category: "Pizza Deals", description: "Any 2 Extra Large Pizzas + 1.5 Litre Drink", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500&auto=format&fit=crop" },
  { id: "pd8", name: "Deal 8: 3 XL Pizzas + 2L Drink", price: 4950, category: "Pizza Deals", description: "Any 3 Extra Large Pizzas + 2 Litre Drink", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop" },

  // Regular Pizzas
  { id: "p1", name: "Chicken Tikka Pizza", price: 1000, category: "Pizzas", description: "Chicken Cheese, Capsicum, Black Olive", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop" },
  { id: "p2", name: "Chicken Fajita Pizza", price: 1000, category: "Pizzas", description: "Fajita Chicken Cheese, Capsicum, Tomato, Jalapeno, Black Olive", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=500&auto=format&fit=crop" },
  { id: "p3", name: "B.B.Q Chicken Pizza", price: 1000, category: "Pizzas", description: "B.B.Q Chicken Cheese, Onion, Tomato, Capsicum, Mushroom & Black Olive", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop" },
  { id: "p4", name: "Mexican Chicken Pizza", price: 1000, category: "Pizzas", description: "Mexican Chicken, Jalapeno, Tomato, Capsicum, Olive, and Oregano", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=500&auto=format&fit=crop" },
  { id: "p5", name: "Hot & Spicy Pizza", price: 1000, category: "Pizzas", description: "Hot & Spicy Chicken, Green Pepper, Jalapeno, Tomato, Black Olive & Spicy Sauce", image: "https://images.unsplash.com/photo-1574129624864-7724244a0dc3?q=80&w=500&auto=format&fit=crop" },
  { id: "p6", name: "Chicken Supreme Pizza", price: 1000, category: "Pizzas", description: "Supreme Chicken Cheese, Pepperoni, and Olive", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=500&auto=format&fit=crop" },
  { id: "p7", name: "Vegetable Pizza", price: 1000, category: "Pizzas", description: "Loss Chicken & All Veggies and Cheese", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=500&auto=format&fit=crop" },

  // Amigos Special Pizzas
  { id: "sp1", name: "Donner Pizza", price: 1400, category: "Special Pizzas", description: "Mexican Chicken, Mayonnaise, Tomatoes, Capsicum, Cheese, Black Olives, Oregano & Black Olives, Sweet Corn", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500&auto=format&fit=crop" },
  { id: "sp2", name: "Malai Donner Pizza", price: 1400, category: "Special Pizzas", description: "Malai Chicken, Red Jalapeno, Black Olives, Special Sauce, Sweet Corn & Mushroom", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500&auto=format&fit=crop" },
  { id: "sp3", name: "Crown Crust Pizza", price: 1400, category: "Special Pizzas", description: "Crust Filled With Special Sauce, Chicken, Cheese, Onion, Capsicum, Tomato, & Black Olives", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop" },
  { id: "sp4", name: "Malai Pizza", price: 1400, category: "Special Pizzas", description: "Malai Chicken, Mozzarella Cheese, Jalapeno, Olives, Sweet Corn, Mushrooms & Malai Sauce", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=500&auto=format&fit=crop" },

  // Burgers
  { id: "b1", name: "Crunchy Zinger Burger", price: 430, category: "Burgers", description: "Our signature crispy zinger burger.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop" },
  { id: "b2", name: "Thunder Fillet Burger", price: 480, category: "Burgers", description: "Spicy and juicy chicken fillet.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop" },
  { id: "b3", name: "Mighty Burger", price: 650, category: "Burgers", description: "Double patty with extra cheese and sauces.", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop" },
  { id: "b4", name: "Chicken Patty Burger", price: 230, category: "Burgers", description: "Classic chicken patty burger.", image: "https://images.unsplash.com/photo-1625813506062-0a91f744e418?q=80&w=500&auto=format&fit=crop" },
  { id: "b5", name: "Jalapeno Burger", price: 280, category: "Burgers", description: "For the spice lovers.", image: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f6?q=80&w=500&auto=format&fit=crop" },
  { id: "b6", name: "Special Burger", price: 480, category: "Burgers", description: "Chef's special burger.", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=500&auto=format&fit=crop" },

  // Burger Deals
  { id: "bd1", name: "Burger Deal 1", price: 750, category: "Burger Deals", description: "Crunchy Zinger Burger + Regular Fries + Regular Drink", image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?q=80&w=500&auto=format&fit=crop" },
  { id: "bd2", name: "Burger Deal 2", price: 1180, category: "Burger Deals", description: "Crunchy Zinger Burger + Thunder Burger + Regular Fries + 500 ml Drink", image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=500&auto=format&fit=crop" },
  { id: "bd3", name: "Burger Deal 3", price: 1900, category: "Burger Deals", description: "4 Crunchy Zinger Burgers + 2 Regular Fries + 1.5 Ltr Drink", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop" },
  { id: "bd4", name: "Burger Deal 4", price: 2290, category: "Burger Deals", description: "4 Crunchy Zinger Burgers + 4 Regular Fries + 4 Regular Drinks", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop" },

  // Chicken Deals
  { id: "cd1", name: "2 Pcs Chicken", price: 530, category: "Chicken Deals", description: "Two pieces of our crispy fried chicken.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500&auto=format&fit=crop" },
  { id: "cd2", name: "4 Pcs Chicken", price: 1100, category: "Chicken Deals", description: "Four pieces of our crispy fried chicken.", image: "https://images.unsplash.com/photo-1569058242253-92a9c73f49bc?q=80&w=500&auto=format&fit=crop" },
  { id: "cd3", name: "8 Pcs Chicken", price: 1950, category: "Chicken Deals", description: "Eight pieces of our crispy fried chicken.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500&auto=format&fit=crop" },
  { id: "cd4", name: "Chicken Deal 1", price: 790, category: "Chicken Deals", description: "2 Pcs Chicken + 1 Regular Salad + 1 Reg Drink", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500&auto=format&fit=crop" },
  { id: "cd5", name: "Chicken Deal 2", price: 1350, category: "Chicken Deals", description: "4 Pcs Chicken + 1 Regular Salad + 2 Reg Drinks", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500&auto=format&fit=crop" },
  { id: "cd6", name: "Chicken Deal 3", price: 2150, category: "Chicken Deals", description: "6 Pcs Chicken + 2 Regular Fries + 1 Ltr Drink", image: "https://images.unsplash.com/photo-1569058242253-92a9c73f49bc?q=80&w=500&auto=format&fit=crop" },

  // Wraps & Rolls
  { id: "w1", name: "Zinger Tortilla Roll", price: 420, category: "Wraps", description: "Zinger chicken in a soft tortilla.", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500&auto=format&fit=crop" },
  { id: "w2", name: "Chicken Paratha Roll", price: 320, category: "Wraps", description: "Classic paratha roll with chicken.", image: "https://images.unsplash.com/photo-1601303584126-269c822483df?q=80&w=500&auto=format&fit=crop" },
  { id: "w3", name: "Chicken Seekh Kabab Roll", price: 450, category: "Wraps", description: "Seekh kabab wrapped in paratha.", image: "https://images.unsplash.com/photo-1513185158878-8d8c196b3f68?q=80&w=500&auto=format&fit=crop" },
  { id: "w4", name: "Chicken Jalapeno Paratha", price: 380, category: "Wraps", description: "Spicy jalapeno chicken paratha.", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500&auto=format&fit=crop" },
  { id: "wd1", name: "Wrap Deal 1", price: 580, category: "Wraps", description: "1 Chicken Wrap + 1 Regular Fries + 1 Regular Drink", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500&auto=format&fit=crop" },
  { id: "wd2", name: "Wrap Deal 2", price: 1150, category: "Wraps", description: "2 Chicken Wraps + 2 Regular Fries + 500 ml Drink", image: "https://images.unsplash.com/photo-1601303584126-269c822483df?q=80&w=500&auto=format&fit=crop" },

  // Sides & Wings
  { id: "s1", name: "5-Peri Peri Wings", price: 390, category: "Starters", description: "Spicy peri peri wings.", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop" },
  { id: "s2", name: "5-B.B.Q Wings", price: 360, category: "Starters", description: "Sweet and smoky BBQ wings.", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=500&auto=format&fit=crop" },
  { id: "s3", name: "5-Crispy Wings", price: 360, category: "Starters", description: "Golden crispy wings.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=500&auto=format&fit=crop" },
  { id: "s4", name: "5-Oven Baked Wings", price: 340, category: "Starters", description: "Healthier oven baked wings.", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop" },
  { id: "s5", name: "5-Hot Shot", price: 300, category: "Starters", description: "Spicy chicken bites.", image: "https://images.unsplash.com/photo-1626082896492-766af4eb6501?q=80&w=500&auto=format&fit=crop" },
  { id: "s6", name: "10-Nuggets", price: 550, category: "Starters", description: "Crispy chicken nuggets.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500&auto=format&fit=crop" },
  { id: "s7", name: "Chicken Cheese Stick", price: 750, category: "Starters", description: "Cheesy chicken sticks.", image: "https://images.unsplash.com/photo-1541544741938-0af808891cc5?q=80&w=500&auto=format&fit=crop" },

  // Fries
  { id: "f1", name: "French Fries Small", price: 250, category: "Fries", description: "Classic golden fries.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop" },
  { id: "f2", name: "French Fries Large", price: 350, category: "Fries", description: "Classic golden fries.", image: "https://images.unsplash.com/photo-1630384066252-19e1ad95b4f6?q=80&w=500&auto=format&fit=crop" },
  { id: "f3", name: "Loaded Fries", price: 650, category: "Fries", description: "Fries with cheese, chicken, and sauces.", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=500&auto=format&fit=crop" },
  { id: "f4", name: "Mayo Fries", price: 550, category: "Fries", description: "Fries topped with creamy mayo.", image: "https://images.unsplash.com/photo-1576101917194-633e403d19a4?q=80&w=500&auto=format&fit=crop" },

  // Salads
  { id: "sl1", name: "Russian Salad", price: 350, category: "Salads", description: "Classic creamy Russian salad.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop" },
  { id: "sl2", name: "Amigos Special Salad", price: 400, category: "Salads", description: "Our chef's special fresh salad.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop" },

  // Drinks
  { id: "d1", name: "Regular Drink", price: 110, category: "Drinks", description: "Refreshing soft drink.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop" },
  { id: "d2", name: "500ml Drink", price: 150, category: "Drinks", description: "Refreshing soft drink.", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=500&auto=format&fit=crop" },
  { id: "d3", name: "1 Ltr Drink", price: 190, category: "Drinks", description: "Refreshing soft drink.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop" },
  { id: "d4", name: "1.5 Ltr Drink", price: 250, category: "Drinks", description: "Refreshing soft drink.", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=500&auto=format&fit=crop" },
  { id: "d5", name: "Mineral Water Small", price: 80, category: "Drinks", description: "Pure mineral water.", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=500&auto=format&fit=crop" },
  { id: "d6", name: "Mineral Water Large", price: 150, category: "Drinks", description: "Pure mineral water.", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=500&auto=format&fit=crop" },

  // Dips
  { id: "dip1", name: "Mexican Dip", price: 80, category: "Dips", description: "Spicy Mexican sauce.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop" },
  { id: "dip2", name: "Bar-B-Q Dip", price: 80, category: "Dips", description: "Smoky BBQ sauce.", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=500&auto=format&fit=crop" },
  { id: "dip3", name: "Mayo Dip", price: 80, category: "Dips", description: "Creamy mayonnaise.", image: "https://images.unsplash.com/photo-1576101917194-633e403d19a4?q=80&w=500&auto=format&fit=crop" },
  { id: "dip4", name: "Peri Peri Sauce Dip", price: 80, category: "Dips", description: "Extra hot peri peri sauce.", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop" },
];

export const categories = [
  "All",
  "Pizza Deals",
  "Pizzas",
  "Special Pizzas",
  "Burger Deals",
  "Burgers",
  "Chicken Deals",
  "Wraps",
  "Starters",
  "Fries",
  "Salads",
  "Drinks",
  "Dips",
];
