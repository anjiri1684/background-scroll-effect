const backgroundImageElement = document.getElementById("bg-img")
window.addEventListener("scroll", () =>{
  updateImage()
});

function updateImage(){
  backgroundImageElement.style.opacity = 1 - window.scrollY / 900

  backgroundImageElement.style.backgroundSize = 160 - window.scrollY /12 + "%";
}