$(document).ready(function () {
  url_all= "https://restcountries.eu/rest/v2/all"
  getCountries(url_all)


const search = $('.search')
const suggestions = $('.suggestions');

search.on('input', function(e){
    suggestions.html('')
    $('.flags').html('')
    displayMatches(e, suggestions);


});

search.focusout('input', function(){
  suggestions.html('')
});



$('#filter-region').on('input', function(){
  
  selected = $('#filter-region').val()
  $('.flags').html('')
  selectRegion(selected)
  


});


$('#flagis').click(function(event){ 
  
    let data = event.target.alt
    showCountry(data)
    
})



});


const countries =[]
function getCountries(url){

            fetch(url)
                      .then(function(response){
                        
                        return response.json()
                      })
                      .then(function(data){
                        countries.push(...data);
                        printCountries(data);
                      })
                      
}


function displayMatches(e,suggestions){
  const matchedArray = findCountries(e.target.value, countries);
  //console.log(matchedArray)
  if (matchedArray.length === 0){
    suggestions.append('No existe ningun registro,prueba una vez mas')
  } else {
    printCountries(matchedArray)
    
  }
 

}

function selectRegion(region){
  if(region=="no-region"){
    printCountries(countries)
  } else {
    const matchRegion = countries.filter(element => element.region === region )
    printCountries(matchRegion);
    
  }
  
}


function showCountry(country){
  
  const countrySpecific = countries.filter(info => info.name === country )
  
  const pais= countrySpecific[0]
  printModal(pais)
  //console.log(countrySpecific[0])
  
  
}


function reload(){
  location.reload(); 
}