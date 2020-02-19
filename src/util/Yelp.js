const apiKey = 'MQkZc1-MWlzyFU3i566PLsiqJ2RZz6bKtsDmmjzrZlkE-n04pwRjNuzoUUOv3QTqtWjpjDIAErpNzxoRNzP3W_zaZX1c7RJHpER-nz1qmrb7pRv-UYiOTlYcwwBKXnYx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
                    console.log(business);
                    return {
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
                    }
                })
            };
        });
    }
};
export default Yelp;