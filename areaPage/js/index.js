
// ____________________SideBar___________________
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
// ________________SideBar__________________

// ________________Loading_________________
async function loading(){
  $(".loadingScreen").fadeOut(1000,()=>{
    $(".loadingScreen").css("visibility","hidden")
    $("body").css("overflow","visible")
  })
}
// ________________Loading_________________

AreaPage();
async function AreaPage() {
  await searchByarea()
  await display();
  await loading();
}
var mealsArray = [];
async function searchByarea() {
  // alert(ss)
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
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
      <i class="fa-solid fa-house-laptop fa-4x  d-flex justify-content-center"></i>
      <h2 class="fs-3 text-center">${mealsArray[0].meals[index].strArea}</h2>
      </div>
      </div>`    
      
    }
    document.getElementById("MainPage").innerHTML=cartona
  }  
}

// _________________________________________________________

var mealsArray2 = [];
async function run(index){
  // alert(32)
  await addMeals(mealsArray[0].meals[index].strArea);
  await display2()
}
async function addMeals(ss) {
  // alert(ss)
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ss}`);
  let res = await x.json();
  // console.log(55,res)
  mealsArray2.push(res);
  return res;
}

async function display2(){
  
  if(mealsArray2!=null)
  {
    // alert(mealsArray[0].meals.length)
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
  window.open(`../mealdetails/index.html?id=${id}`,"_self");
}
function searchPage(){ 
  // alert(2)
  window.open("../searchPage/index.html","_self");
}
function categoriesPage(){ 
  // alert(3)
  window.open("../categoriesPage/index.html","_self");
}
function areaPage(id){ 
  window.open("../areaPage/index.html","_self");
}
function ingredientsPage(id){ 
  window.open("../ingredientsPage/index.html","_self");
}
function contactusPage(id){ 
  window.open("../contactusPage/index.html","_self");
}






new WOW().init();



