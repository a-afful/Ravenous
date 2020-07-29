const apiKey = 'vc2oty4gFxUdNvY9PkEbWy9zcaHO-hJKBfxz9l7B2QDN3RZUHKD193Pm73EwWHZavnOD4Kore-5bV3iN8Q_9JGBz0EZfUo6wItSW8GTPzwL5wsejcdG18CduwUe9XnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }));
          }
        });
      }
    };

export default Yelp;