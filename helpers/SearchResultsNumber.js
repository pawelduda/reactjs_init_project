import axios from 'axios'

export default class SearchResultsNumber {
  // constructor () {
  //   this.getSearchResultsNumber = debounce(500, this.getSearchResultsNumber)
  // }

  getSearchResultsNumber (searchQuery) {
    axios
      .get(this.ajaxUrl(searchQuery))
      .then((response) => {
        console.log(response.data.searchInformation.formattedTotalResults)
      })
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyA7w4pR_1tc8DG3S3qzFplJEp9CAyjF1MY&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }
}

var test = new SearchResultsNumber;
console.log(test.getSearchResultsNumber())
