let reviews = [
    { text: "Odličan proizvod!", rating: 5, user: "Korisnik1" },
    { text: "Proizvod je u redu.", rating: 3, user: "Korisnik2" },
    { text: "Loš proizvod.", rating: 1, user: "Korisnik3" }
  ];


  function displayReviews() {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = "";

    reviews.forEach((review, index) => {
      const stars = "&starf;".repeat(review.rating);
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");
      reviewCard.innerHTML = `
        <p>${review.text}</p>
        <p class="stars">${stars}</p>
        <p><strong>${review.user}</strong></p>
        <hr>
      `;
      reviewsList.appendChild(reviewCard);
    });
  }

 
  function addReview() {
    const reviewText = document.getElementById("review-text").value;
    const reviewRating = document.getElementById("review-rating").value;
    const reviewUser = document.getElementById("review-user").value;

    const newReview = { text: reviewText, rating: parseInt(reviewRating), user: reviewUser };
    reviews.push(newReview);

 
    displayReviews();
  }

  
  function sortReviews() {
    const sortOption = document.getElementById("sort-reviews").value;
    if (sortOption === "asc") {
      reviews.sort((a, b) => a.rating - b.rating);
    } else {
      reviews.sort((a, b) => b.rating - a.rating);
    }

    displayReviews();
  }
  displayReviews();