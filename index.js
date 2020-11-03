const cards = document.querySelectorAll('.memory-card');
const btn = document.querySelector('.btn');
const scoreDispaly = document.getElementById('score');
const msg = document.querySelector('.modal');
btn.addEventListener('click',()=>{
    location.reload();
});


for(let card of cards){
    card.addEventListener('click',flipCard);
}
let lockBoard=false;
let hasFlipedCard=false;
let firstCard;
let secondCard;
let score=0;

function flipCard(e){
    if(lockBoard) return;
   if(this === firstCard) return;
    this.classList.add('flip');
   if(!hasFlipedCard){
       hasFlipedCard=true;
       firstCard=this;
      
    //    console.log(hasFlipedCard,firstCard);
    return;
   }
   hasFlipedCard=false;
   secondCard=this;
   checkMatch();
   
//    console.log('correctly exticuted');
}

function checkMatch(){
    let isMatch=firstCard.dataset.name===secondCard.dataset.name;
    isMatch ? disableCard():unflipedCard();
        
        
 
}

function disableCard(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    score=score+1;
    console.log(score);
    scoreDispaly.innerHTML= 'Score:'+score;
    if(score===6){
        btn.style.display='block';
        msg.style.top='2%';
        setTimeout(()=>{msg.style.top='-10vh'},1600);
    }
    
    resetBoard();
}

function unflipedCard(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
         resetBoard();
       },1500)
}

function resetBoard(){
    [hasFlipedCard,lockBoard]= [false,false];
    [firstCard,secondCard]=[null,null];

}

(function suffelCard(){
 cards.forEach((card)=>{
  let randomCard =Math.floor(Math.random()*12);
  card.style.order=randomCard;
 });
})();