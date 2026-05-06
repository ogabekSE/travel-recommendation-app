const data = {
  beach: [
    { name: "Bondi Beach", img: "assets/beach1.jpg" },
    { name: "Waikiki Beach", img: "assets/beach2.jpg" },
  ],
  temple: [
    { name: "Angkor Wat", img: "assets/temple1.jpg" },
    { name: "Temple of Heaven", img: "assets/temple2.jpg" },
  ],
  country: [
    { name: "Japan", img: "assets/country1.jpg" },
    { name: "Brazil", img: "assets/country2.jpg" },
  ],
};

function showRecommendations(type) {
  const section = document.getElementById("results-section");
  section.innerHTML = "";
  if (data[type]) {
    let html = `<h2>${type.charAt(0).toUpperCase() + type.slice(1)} Recommendations</h2><div class="recommendation">`;
    data[type].forEach((item) => {
      html += `<div>
                        <img src="${item.img}" alt="${item.name}">
                        <figcaption>${item.name}</figcaption>
                      </div>`;
    });
    html += "</div>";
    section.innerHTML = html;
  } else {
    section.innerHTML = "<p>No recommendations found for your search.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-btn").addEventListener("click", () => {
    const val = document.getElementById("search-input").value.toLowerCase();
    if (val.includes("beach")) showRecommendations("beach");
    else if (val.includes("temple")) showRecommendations("temple");
    else if (val.includes("country")) showRecommendations("country");
    else
      document.getElementById("results-section").innerHTML =
        "No recommendations found for your search.";
  });

  document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("search-input").value = "";
    document.getElementById("results-section").innerHTML = "";
  });
});
