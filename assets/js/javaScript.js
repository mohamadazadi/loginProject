var clickBtn = document.getElementById("guideBtn")
var showContent = document.getElementById("guideContent")

function clickGuide(){
    if(showContent.classList.contains("show")){
      return  showContent.classList.remove("show")
    }
    if(!showContent.classList.contains("show")){
      return  showContent.classList.add("show")
    }
}
function closeAlert(event){
    let know = event.target.parentNode;

    return know.style= " display : none";
    // if(know.classList.contains("hide")){
    //     return  know.classList.remove("hide")
    //   }
    //   if(!know.classList.contains("hide")){
    //     return  know.classList.add("hide")
    //   }
}
