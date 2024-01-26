// A package that gives you a random restaurant in seattle to eat at along with random activities

var restaurants = [
    "Patagon",
    "Fogon Concina",
    "Zaika",
    "Ascend",
    "Boca",
    "Goldfinch",
    "Maximillian",
    "L'Experience"
];

var activities = [
    "Paint night",
    "Pottery",
    "Movies",
    "Code",
    "Airbnb weekend",
    "Dancing",
    "Badminton",
    "Tennis",
    "Plan - Goals/ Talk/ Future",
    "Netlfix and cuddle"
];

const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];

const randomActivity = activities[Math.floor(Math.random() * activities.length)];

function randomEvening () {
    return randomActivity + " and eat at " + randomRestaurant;
}

export default randomEvening;