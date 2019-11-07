document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.querySelector(".images");
  console.log(imageContainer);

  const fetchDog = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(data => data.json())
      .then(dog => {
        // console.log(dog.message);
        renderDogs(dog.message);
      });
  };

  const dogGallery = () => {
    // console.log(dogImages);
    for (var i = 1; i < 10; i++) {
      fetchDog();
    }
  };

  const renderDogs = dog => {
    let breedArray = dog.split("/");
    let breedString = breedArray[breedArray.length - 2];
    let breed = breedString
      .split("-")
      .join(" ")
      .toUpperCase();
    // console.log(dog);
    // console.log(breed);

    imageContainer.innerHTML += `
            <div class="row image">
                <h2>
                    <a href="${dog}">${breed}</a>
                </h2>
                <div>
                    <img
                        src="${dog}"
                        alt="${breed}"
                        class="img-thumbnail"
                    />
                </div>
            </div>
        `;
  };

  dogGallery();
});
