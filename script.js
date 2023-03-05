const iconArray = [
   "url(images/chat.png)", 
   "url(./images/call.png)",
   "url(../images/profile.png)",
   "url(../images/burger_x.png)",
   "url(../images/search.png)",
   ];

let bodyStyle = document.querySelector(".body")
bodyStyle.style ="background-color:grey" //покрасили задний фон для фана

//создали списк дочерныих элементов section чтобы управлять центрированием
let section = document.querySelector(".section");
let sectionyChildren = section.children;

//центрирование от количесвто детей боди по количесту элеентов//

if (sectionyChildren.length<2) {
   section.classList.remove("one")    
} else {section.classList.add("one")}

// console.log(sectionyChildren.length)
// console.log(sectionyChildren)



// функция создания каточки 

let cardCreator = function (url) {

let coverCard = document.createElement("div");
coverCard.classList.add("text_card");

let imageCard = document.createElement("div");
imageCard.classList.add("text_card__image");
imageCard.style=`background: ${url}`;

section.prepend(coverCard);
coverCard.prepend(imageCard);



}

// cardCreator(iconArray[0])

// создадим карточки по списку 

for (let i=0; i<iconArray.length; i++) {



   cardCreator(iconArray[i])



}



// let currentCard = section.querySelector(".text_card__image");

// currentCard.style=`background: ${iconArray[0]}`

// console.log(currentCard)

// currentCard.style="background: url(/images/call.png)"


