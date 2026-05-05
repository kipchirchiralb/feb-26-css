fetch(
  "https://api.bosotournaments.com/api/public/standings?sport=volleyball&category=men&stage=ward&ward=all&sub_county=all",
)
  .then((res) => res.json())
  .then((data) => {
    /// this where tou use the data
    console.log(data.wards);
    // groud data by wards
    // 
  });
