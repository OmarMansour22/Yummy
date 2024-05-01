// ______________SideBar___________________
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
// ______________SideBar___________________

// ______________Loading___________________
async function loading(){
  $(".loadingScreen").fadeOut(1000,()=>{
    $(".loadingScreen").css("visibility","hidden")
    $("body").css("overflow","visible")
  })
}
loading();
// ______________Loading___________________

// ____________SearchByName_________________
var mealName=document.getElementById("searchByName");
mealName.addEventListener("keyup",async function(){
  // alert(mealName.value)
  await searchByName(mealName.value)
  await display();
})
var mealsArray=[];
async function searchByName(ss){
  // alert(ss)
  let x= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ss}`);
  let res = await x.json();
  console.log(res)
  mealsArray.push(res);
  return  res;
}  

async function display(){
  
  if(mealsArray!=null)
  {
    // alert(mealsArray[0].meals.length)
    let cartona='';
    for (let index = 0; index < Math.min(mealsArray[mealsArray.length-1].meals.length,20); index++) {
      cartona+=`<div class="col-md-3">
      <div class="mainLayer" onclick="openDetails(${mealsArray[mealsArray.length-1].meals[index].idMeal})">
      <img class="w-100" src="${mealsArray[mealsArray.length-1].meals[index].strMealThumb}" alt="" srcset="">
      <div class="subLayer p-2 d-flex align-items-center  w-100 h-100">
      <h2 class="fs-3 text-black">${mealsArray[mealsArray.length-1].meals[index].strMeal}</h2>
      </div>
      </div>
      </div>`    
    }
    document.getElementById("MainPage").innerHTML=cartona
  }  
}
// ____________SearchByName_________________





// ____________SearchByFL_________________

var mealName2=document.getElementById("searchByFL");
mealName2.addEventListener("keyup",async function(){
  // alert(mealName.value)
  await searchByFL(mealName2.value)
  await display2();
})
var mealsArray2=[];
async function searchByFL(ss){
  // alert(ss)
  let x= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${ss}`);
  let res = await x.json();
  console.log(res)
  mealsArray2.push(res);
  return  res;
}  

async function display2(){
  
  if(mealsArray2!=null)
  {
    // alert(mealsArray[0].meals.length)
    let cartona='';
    for (let index = 0; index < Math.min(mealsArray2[mealsArray2.length-1].meals.length,20); index++) {
      cartona+=`<div class="col-md-3">
      <div class="mainLayer" onclick="openDetails(${mealsArray2[mealsArray2.length-1].meals[index].idMeal})">
      <img class="w-100" src="${mealsArray2[mealsArray2.length-1].meals[index].strMealThumb}" alt="" srcset="">
      <div class="subLayer p-2 d-flex align-items-center  w-100 h-100">
      <h2 class="fs-3 text-black">${mealsArray2[mealsArray2.length-1].meals[index].strMeal}</h2>
      </div>
      </div>
      </div>`    
      
    }
    document.getElementById("MainPage").innerHTML=cartona
  }  
}
// ____________SearchByName_________________





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



