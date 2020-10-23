function findCountries(wordToSearch, countries){
  return countries.filter(place => {
    const regex = new RegExp(wordToSearch, 'gi');
        return place.name.match(regex) ||
            place.capital.match(regex);
  })
}