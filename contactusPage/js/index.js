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



