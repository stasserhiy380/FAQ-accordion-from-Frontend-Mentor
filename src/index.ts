let buttons = document.querySelectorAll("button");
buttons.forEach((x)=>{
    x.addEventListener("click",(e:MouseEvent)=>{
        let parent = <HTMLDivElement>x.parentElement;
        let paragraph = <HTMLParagraphElement>parent.nextElementSibling;
        paragraph.classList.toggle("hidden");
        let img = <HTMLImageElement>x.firstElementChild;
       // alert(img.src);
        if (img.getAttribute("src") == "/assets/images/icon-plus.svg"){
            img.setAttribute("src","/assets/images/icon-minus.svg");
        }
        else{
            img.setAttribute("src","/assets/images/icon-plus.svg");
        }
       // alert(paragraph.innerHTML);
    })
});