//_________________________SideBar_________________________
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
//_________________________SideBar__________________________

// ________________Loading_________________

async function loading(){
  $(".loadingScreen").fadeOut(1000,()=>{
    $(".loadingScreen").css("visibility","hidden")
    $("body").css("overflow","visible")
  })
}
// ________________Loading_________________


ingredientPage();
async function ingredientPage() {
  await searchByingredients()
  await display();
  await loading();
}
var mealsArray = [];
async function searchByingredients() {
  // alert(ss)
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let res = await x.json();
  console.log(res)
  mealsArray.push(res);
  return res;
}
async function display(){
  
  if(mealsArray!=null)
  {
    // alert(mealsArray[0].meals.length)
    let cartona='';
    for (let index = 0; index < Math.min(mealsArray[0].meals.length,20); index++) {
      cartona+=`<div class="col-md-3">
      <div class="" onclick="run(${index})">
      <i class="fa-solid fa-drumstick-bite fa-4x d-flex justify-content-center"></i>
      <h2 class="fs-3 text-center text-center">${mealsArray[0].meals[index].strIngredient}</h2>
      <p class="text-center">${mealsArray[0].meals[index].strDescription.substr(0,100)+"..."}</p>
      </div>
      </div>`    
      
    }
    document.getElementById("MainPage").innerHTML=cartona
  }  
}

// _______________________________________________________

var mealsArray2 = [];

async function run(index){
  // alert(32)
  await addMeals(mealsArray[0].meals[index].strIngredient);
  await display2()
}
async function addMeals(ss) {
  // alert(ss)
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ss}`);
  let res = await x.json();
  console.log(res)
  mealsArray2.push(res);
  return res;
}

async function display2(){
  
  if(mealsArray2!=null)
  {
    // alert(mealsArray2[0].meals.length)
    let cartona='';
    for (let index = 0; index < Math.min(mealsArray2[0].meals.length,20); index++) {
      cartona+=`<div class="col-md-3">
      <div class="mainLayer" onclick="openDetails(${mealsArray2[0].meals[index].idMeal})">
      <img class="w-100" src="${mealsArray2[0].meals[index].strMealThumb}" alt="" srcset="">
      <div class="subLayer p-2 d-flex align-items-center  w-100 h-100">
      <h2 class="fs-3 text-black">${mealsArray2[0].meals[index].strMeal}</h2>
      </div>
      </div>
      </div>`    
      
    }
    document.getElementById("MainPage").innerHTML=cartona
  }  
}











function openDetails(id){ 
  window.location.href = `../mealdetails/index.html?id=${id}`;
}
function searchPage(){ 
  // alert(2)
  window.location.href = `../searchPage/index.html`;
}
function categoriesPage(){ 
  // alert(3)
  window.location.href = `../categoriesPage/index.html`;
}
function areaPage(id){ 
  window.location.href = `../areaPage/index.html`;
}
function ingredientsPage(id){ 
  window.location.href = `../ingredientsPage/index.html`;
}
function contactusPage(id){ 
  window.location.href = `../contactusPage/index.html`;
}





new WOW().init();



