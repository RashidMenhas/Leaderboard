const postData = (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGDAYMQE8WM991NHNKPEX0KS/scores/', {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

module.exports = postData;