function printModal(country){
  const imagen = '<img src="'+country.flag+'" alt="" class="img-fluid">'
  let currencies =[]
  let languages = []
  country.currencies.forEach(function(currency){
    currencies.push(currency.name) 
  })

  country.languages.forEach(function(language){
    languages.push(language.name)
  })

  console.log(countries)
  //country.borders.forEach(function(border){


    //$('#borderModal').append('<span class="border-class">'+border+', </span>')
 // })



  $('#nombreModal').html(country.name)
  //$('#countryModal').html(''+country.name+'')
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