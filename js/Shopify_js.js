$(document).ready(function(){

// Used CORS to get a link to the API
var url= "https://cors-anywhere.herokuapp.com/https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6"
var revenue= 0;
var html= "";

// Get JSON to get access to JSON
  $.getJSON(url, function(data){
    for(i=0; i<data.orders.length; i++){
      revenue += Number(data.orders[i].total_price);
    }
// Rounding and making HTML
    revenue = revenue.toFixed(2);
    html= "<div> Total order revenue: $" + revenue +"</div>";
    $(".revenue").html(html);
  })
})
