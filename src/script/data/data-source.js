class DataSource {
  static searchUniv(keyword) {
    return fetch(`http://universities.hipolabs.com/search?name=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;