// var APIKEY="x4SF0x8HubPxUGMuy9WlIRf0y9ZsZAIs"
// var giphy_api_end_point_url = "http://api.giphy.com/v1/gifs/search?q=";
// var giphy_limit = 10;
var topics = ["tigger", "pluto", "minnie", "jasmine", "remy", "mr incredible"];
//function to make buttons and add to page
function populateButtons(arrayToUse,areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
        var d = $("<button>");
        d.attr("data-type", arrayToUse[i]);
        d.addClass('giphybutton');
        d.text(arrayToUse[i]);
        $(areaToAddTo).append(d);
    }

}
function assign_keyword_button_handler() {
    // $(".giphybutton").each(function() {
    //     var giphy_kw = this.attr("data-type"); //or maybe just this.text?
    //     var final_giphy_request_url = giphy_api_end_point_url + giphy_kw + "api_key=" + giphy_api_key + "&limit=" + giphy_limit;
    //     var a
    // }   
    
        
    // });
    $("div#giphy_search_buttons > button").on("click", function() {
        var search_keyword = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          search_keyword + "&api_key=lIRf0y9ZsZAIs&limit=10";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
  
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
  
              var rating = results[i].rating;
  
              var p = $("<p>").text("Rating: " + rating);
  
              var disneyImage = $("<img>");
              disneyImage.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.prepend(p);
              gifDiv.prepend(disneyImage);
  
              $("div#giphy_results").prepend(gifDiv);
            }
          });
        });
    }        

$(document).ready(function() {

    populateButtons(topics, "div#giphy_search_buttons");
    $("button#add_to_topic").click(function() {
        var keyword_to_add = $("input#giphy_keyword").val();
        topics.push(keyword_to_add);
        populateButtons(topics, "div#giphy_search_buttons");
        
    });
});

// var new_button = $("<button>");
// new_button.attr("data-type", keyword_to_add);
// new_button.text(keyword_to_add);
// $("div#giphy_search_buttons").append(new_button);
//function to handle when user clicks the add keyword button



    

    