// __________________SideBar__________________
var clickCount=0;
$(".sidebar").animate({"left":-$(".sidebarData").outerWidth()},500)
$("#sideIcon").click(()=>{
  if(clickCount%2)
  {
    $(".sidebar").animate({"left":-$(".sidebarData").outerWidth()},500)
    $("#sideIcon").removeClass("fa-x")
    $(".sidebarData li").toggleClass(`wow animate__animated animate__bounceInUp`,500)
    clickCount++;
  }
  else{
    $(".sidebar").animate({"left":0},500)
    $("#sideIcon").addClass("fa-x")
    $(".sidebarData li").toggleClass(`wow animate__animated animate__bounceInUp`,500)

      clickCount++;
  }
});
// __________________SideBar__________________


const urlParams = new URLSearchParams(window.location.search);
const idMeal = urlParams.get('id');

// ________________Loading_________________
async function loading() {
  $(".loadingScreen").fadeOut(1000, () => {
    $(".loadingScreen").css("visibility", "hidden")
    $("body").css("overflow", "visible")
  })
}
// ________________Loading_________________

var mealData;
var counter = 1;
var measures = [];

async function runAll() {
  await addDetails();
  await displayDetails();
  await loading();
}  
runAll();
async function addDetails() {
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  let res = await x.json();
  mealData = res;
  var arr = Array.from(mealData.meals)
  Object.entries(arr[0]).map(entry => {
    let key = entry[0]; arr[0]
    let value = entry[1];
    if (key.includes("Measure") && value.length > 2) measures.push(value)
  });    
  console.log(mealData)


  return res;
}  

async function displayDetails() {
  document.getElementById("Row").innerHTML += ` <div class="col-md-4">
  <div class="contain">
    <img src="${mealData.meals[0].strMealThumb}">
    <h2>${mealData.meals[0].strMeal}</h2>
  </div>  
</div>  
<div class="col-md-8">
  <h2>Instructions</h2>
  <p>${mealData.meals[0].strInstructions}</p>
  <h3>Area : ${mealData.meals[0].strArea}</h3>
  <h3>Category : ${mealData.meals[0].strCategory} </h3>
  <h3>Recipes :</h3>
  <div id="Recipes" class="recipes my-4 d-flex flex-wrap">
  </div>
  <h3>Tags :</h3>
  <div class="tags my-4">
    <a href="${mealData.meals[0].strSource}" target="blank" class="bg-success text-decoration-none text-white border border-0 rounded-1 p-2 m-2">Source</a>
    <a href="${mealData.meals[0].strYoutube}" target="blank" class="bg-danger text-decoration-none text-white border border-0 rounded-1 p-2 m-2">Youtube </a>
  </div>  
</div>`  
  for (let index = 0; index < measures.length; index++) {
    document.getElementById("Recipes").innerHTML += `
  <p class="bg-info-subtle text-black border rounded-1 p-1 m-2">${measures[index]} </p>  
  `

  }


}  

// _____________________________________________________________












function openDetails(id) {
  window.location.href = `../mealdetails/index.html?id=${id}`;
}
function searchPage() {
  // alert(2)
  window.location.href = `../searchPage/index.html`;
}
function categoriesPage() {
  // alert(3)
  window.location.href = `../categoriesPage/index.html`;
}
function areaPage(id) {
  window.location.href = `../areaPage/index.html`;
}
function ingredientsPage(id) {
  window.location.href = `../ingredientsPage/index.html`;
}
function contactusPage(id) {
  window.location.href = `../contactusPage/index.html`;
}




new WOW().init();



