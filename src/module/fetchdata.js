const fetchdata = async () => {
  const getdata = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGDAYMQE8WM991NHNKPEX0KS/scores/');
  const jsondata = await getdata.json();
  return jsondata.result;
};
module.exports = fetchdata;