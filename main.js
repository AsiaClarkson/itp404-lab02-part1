let url = "https://thejsguy.com/teaching/2018/api/restaurants.json";
let restaurants = document.querySelector('#food-temp').innerHTML;

let renderRestaurants = Handlebars.compile(restaurants);

let promise = $.ajax({
  type: 'GET',
  url: url
});

$('restaurants-today').html("Loading...");
promise.then(function (response) {

    console.log('YOU DID IT', response);

    let renderedRestaurants = renderRestaurants({
      restaurant: response.data
    });

    console.log(renderedRestaurants);
    $('#restaurants-today').html(renderedRestaurants);
  },
  function (error) {
    console.log('error', error);
  });