const burgerW = document.querySelector(".burgerW");
burgerW.addEventListener("click", () =>{
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
});
