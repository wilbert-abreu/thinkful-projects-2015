$(function(){

	//creates alert when submitting
//	$("#search-term").submit(function(){
//		alert("Hi Wilbert");
//	}); 


	$("#search-term").submit(function(){
		// || = short circuiting, if null use default value 
		var query = $("#query").val() || "star wars";
		//$.getJSON('http://www.omdbapi.com/?s=' + query + '&r=json',
		$.getJSON('http://www.omdbapi.com/', { s: query, r: "json" }, 
		function(data){
	myData = data.Search;
	$.each(myData, function(index,value){
	  console.log(value.Title);
	});
  });
		//stops text from clearing when submitting form
		return false;
	}); 

});



// function should parse the data and send the titles to the console.log().
function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  $.each(results, function(index,value){
    console.log(value.Title);
  });
}
//display the data on the page
 function showResults(results){
    var html = "";
    $.each(results, function(index,value){
      html += '<p>' + value.Title + '</p>';
      console.log(value.Title);
    });
    $('#search-results').html(html);
  }

//To be able to access other data you need to make a submit event handler that grabs the value of the form, then calls the $.getJSON, and puts the search term in the URL. 
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}
