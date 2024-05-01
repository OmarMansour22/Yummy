
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
      <div class="mainLayer" onclick="openDetails(${mealsArray[index].idMeal})">
      <img class="w-100" src="${mealsArray[index].strMealThumb}" alt="" srcset="">
      <div class="subLayer p-2 d-flex align-items-center  w-100 h-100">
      <h2 class="fs-3">${mealsArray[index].strMeal}</h2>
      </div>
      </div>
      </div>`    
      
    }    
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







