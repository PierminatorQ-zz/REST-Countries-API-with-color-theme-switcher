function printCountries(data){
  
  data.forEach(function(country){
    $('.flags').append(
        '<div class="col-sm-3 card-country mb-4">'+
           '<div class="card h-100">'+
              '<a href="#" data-country="'+country.name+'" data-toggle="modal" data-target="#countryModal" class="image-link"><img src="'+country.flag+'" class="card-img-top" alt="'+country.name+'"></a>'+
              '<div class="card-body">'+
                '<h5 class="card-title">'+country.name+'</h5>'+
                '<p class="card-text"> <strong>Region: </strong>'+country.region+'</p>'+
               '<p class="card-text"> <strong>Capital: </strong>'+country.capital+'</p>'+
               '<p class="card-text"> <strong>Population: </strong>'+country.population+'</p>'+
              '</div>'+
            '</div>'+

        '</div>'
    
    )
  })
}