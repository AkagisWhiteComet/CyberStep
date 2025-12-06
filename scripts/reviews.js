document.addEventListener('DOMContentLoaded', () => {
  const reviews = document.querySelectorAll('.review');
  let currentIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.classList.toggle('review-active', i === index);
    });
    currentIndex = index;
  }

  reviews.forEach((review, index) => {
    const prevBtn = review.querySelector('.prev');
    const nextBtn = review.querySelector('.next');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        let prevIndex = (index - 1 + reviews.length) % reviews.length;
        showReview(prevIndex);
      });

      nextBtn.addEventListener('click', () => {
        let nextIndex = (index + 1) % reviews.length;
        showReview(nextIndex);
      });
    }
  });

  showReview(currentIndex);
});