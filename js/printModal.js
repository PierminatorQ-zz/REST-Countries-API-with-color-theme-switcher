function printModal(country){
  const imagen = '<img src="'+country.flag+'" alt="" class="img-fluid">'
  
  let currencies =[]
  let languages = []
  let borders=[]


  
  country.currencies.forEach(function(currency){
    currencies.push(currency.name) 
  })



  country.languages.forEach(function(language){
    languages.push(language.name)
  })
      
  
  country.borders.forEach(function(border){
    countries.filter(element =>{
      if (element.alpha3Code == border){
      borders.push(element.name)
      }
    })

  })

  


  $('#nombreModal').html(country.name)
  $('#borderModal').append(borders.join(", "))
  $('#modalTitle').html(country.name)
  $('#imageModal').append(imagen)
  $('#nativeModal').html(country.nativeName)
  $('#populationModal').html(country.population)
  $('#regionModal').html(country.region)
  $('#subregionModal').html(country.subregion)
  $('#capitalModal').html(country.capital)
  $('#domainModal').html(country.topLevelDomain)
  $('#currenciesModal').html(currencies.join(", "))
  $('#languageModal').html(languages.join(", "))
}