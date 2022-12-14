// import Salads from '../assets/images/Card/salad.jpg'
// import FastFood from '../assets/images/Card/fastfood.jpg'
// import HotFood from '../assets/images/Card/hotfood.jpg'
// import Chiinese from '../assets/images/Card/Chinese.jpg'
// import SeaFood from '../assets/images/Card/Seafood.jpg'
// import Burger from '../assets/images/Card/burger.jpg'
// import Mexican from '../assets/images/Card/Mexican.jpg'

export const filterData = [
    { name: "MiniPalais", image: require("../assets/images/Card/fastfood.jpg"), id: "0" },
    { name: "EcoStay", image: require("../assets/images/Card/burger.jpg"), id: "1" },
    { name: "Shoebox", image: require("../assets/images/Card/hotfood.jpg"), id: "2" },
    { name: "CityViews", image: require("../assets/images/Card/Chinese.jpg"), id: "3" },
    { name: "Sunny Place", image: require("../assets/images/Card/Mexican.jpg"), id: "4" },
    { name: "Partners", image: require("../assets/images/Card/Seafood.jpg"), id: "5" },
    { name: "LightHouse", image: require("../assets/images/Card/salad.jpg"), id: "6" },
];

export const restaurantsData = [
    {
        restaurantName: "The Green", forAway: "21.2", businessAddress: "22 beesie Street,Cap Town",
        image: require("../assets/images/FoodCard/home1.jpg"), averageReview: 4.9, numberOfReview: 272,
        coordinates: { let: -26.25646786, lng: 28.25654587 }, discount: 10, deliveryTime: 20, collectTime: 5,
        foodType: "Burger , Warps ,Milkshakes ..",
        productData: [
            { name: "Hand Cut Chips", price: 30, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "Big Mac", price: 50, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "chicken Buger", price: 70, image: require("../assets/images/Card/burger.jpg") },
        ], id: "0"
    },
    {
        restaurantName: "Pleasure Place", forAway: "12.7", businessAddress: "22 beesie Street,Cap Town",
        image: require("../assets/images/FoodCard/home2.jpg"), averageReview: 4.9, numberOfReview: 308,
        coordinates: { let: -26.25646786, lng: 28.25654587 }, discount: 15, deliveryTime: 30, collectTime: 10,
        foodType: "Chicken , Chicken Wings ....",
        productData: [
            { name: "Hand Cut Chips", price: 30, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "Big Mac", price: 50, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "chicken Buger", price: 70, image: require("../assets/images/Card/burger.jpg") },
        ], id: "1"
    },
    {
        restaurantName: "Pinewood Village", forAway: "5", businessAddress: "22 beesie Street,Cap Town",
        image: require("../assets/images/FoodCard/home3.jpg"), averageReview: 4.9, numberOfReview: 400,
        coordinates: { let: -26.25646786, lng: 28.25654587 }, discount: 20, deliveryTime: 30, collectTime: 12,
        foodType: "Flames grilled beet Burgers",
        productData: [
            { name: "Hand Cut Chips", price: 30, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "Big Mac", price: 50, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "chicken Buger", price: 70, image: require("../assets/images/Card/burger.jpg") },
        ], id: "2"
    },
    {
        restaurantName: "LightHouse", forAway: "7", businessAddress: "22 beesie Street,Cap Town",
        image: require("../assets/images/FoodCard/home.jpg"), averageReview: 4.9, numberOfReview: 1272,
        coordinates: { let: -26.25646786, lng: 28.25654587 }, discount: null, deliveryTime: 40, collectTime: 20,
        foodType: "Chenken Pizza ,cream Pizza ...",
        productData: [
            { name: "Hand Cut Chips", price: 30, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "Big Mac", price: 50, image: require("../assets/images/Card/fastfood.jpg") },
            { name: "chicken Buger", price: 70, image: require("../assets/images/Card/burger.jpg") },
        ], id: "3"
    },

]