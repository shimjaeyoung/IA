const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTU4MDBmNTkxYjJmZTRhZjc1NjM5ZTIwZmZiYTA4MSIsInN1YiI6IjY1MmYyOTAwY2FlZjJkMDEzOWRmYTljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfBXprlaA0nxAd8VBcyRfLg53NKWvtoBKbWuoJx7H_Y'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));