var allLi=document.querySelectorAll(".list-group-item");






for(var i=0;i<allLi.length;i++){

    allLi[i].addEventListener("click",function(){
       var start= document.querySelector(".active")
        this.classList.add("active");
        start.classList.remove("active");
    })
    
}