
// _________________SideBar___________________
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

// _________________SideBar___________________

let mealsArray= [];
let redandantData=[];

// ________________Loading_________________

async function loading(){
  $(".loadingScreen").fadeOut(1000,()=>{
    $(".loadingScreen").css("visibility","hidden")
    $("body").css("overflow","visible")
  })  
}  
// ________________Loading_________________
async function runall(){
  for (let index = 0; index < 30; index++)
  {
    await addMeals();
  }  
  await display();
  await loading();
}  
runall();

async function addMeals(){
  let x= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  let res = await x.json();
  if(redandantData.includes(res.meals[0].strMeal)==false)
  {
    // console.log(mealsArray.includes(res.meals[0].strMeal))
    // console.log(res.meals[0].strMeal)
    mealsArray.push(res.meals[0]);
    redandantData.push(res.meals[0].strMeal)
  }    
  return  res
}      


function display(){
  
  if(mealsArray!=null)
  {
    for (let index = 0; index < Math.min(mealsArray.length,25); index++) {
      
      document.getElementById("MainPage").innerHTML+=`<div class="col-md-3">
      <div class="mainLayer"">
      <a class="text-white text-decoration-none" href="mealdetails/index.html?id=${mealsArray[index].idMeal}">
      <img class="w-100" src="${mealsArray[index].strMealThumb}" alt="" srcset="">
      <div class="subLayer p-2 d-flex align-items-center  w-100 h-100">
      <h2 class="fs-3">${mealsArray[index].strMeal}</h2>
      </div>
      </div>
      </a>
      </div>`    
      
    }    
  }      
}    





// function openDetails(id){ 
//   window.open(`../mealdetails/index.html?id=${id}`,"_self");
// }
// function searchPage(){ 
//   // alert(2)
//   window.open("../searchPage/index.html","_self");
// }
// function categoriesPage(){ 
//   // alert(3)
//   window.open("../categoriesPage/index.html","_self");
// }
// function areaPage(id){ 
//   window.open("../areaPage/index.html","_self");
// }
// function ingredientsPage(id){ 
//   window.open("../ingredientsPage/index.html","_self");
// }
// function contactusPage(id){ 
//   window.open("../contactusPage/index.html","_self");
// }






new WOW().init();







