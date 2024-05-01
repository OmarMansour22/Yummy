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
// ____________________SideBar___________________

// ________________Loading_________________
async function loading(){
  $(".loadingScreen").fadeOut(1000,()=>{
    $(".loadingScreen").css("visibility","hidden")
    $("body").css("overflow","visible")
  })
}
loading();
// ________________Loading_________________

















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



