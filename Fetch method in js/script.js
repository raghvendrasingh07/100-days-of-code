fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((results) => results.json())
  .then((data) =>
    data.categories.map((meal) => {
      var div = document.createElement("div");
      div.classList.add("imgBox");
      div.innerHTML = `<img src=${meal.strCategoryThumb}> <h3>${meal.strCategory}</h3>`;
      document.getElementById("section").append(div);
    })
  )
  .catch((err) => console.log(err));
