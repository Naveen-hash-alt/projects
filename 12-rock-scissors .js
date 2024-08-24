      let score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        Ties:0
      } ;

      
     

      updatescoreElement();

      /* if (!score) {
      score = {
        wins:0,
        losses:0,
        Ties:0
      };

      }*/

      let isAutoPlaying = false;
      let interValidId;

      //const autoPlay = () => {

      //}; we can use this arrow funtion also
     function autoPlay() {
        const autoplayButton = document.querySelector('.js-auto-play-button');
        if (!isAutoPlaying) {

         interValidId = setInterval( () =>{
            const playermove = pickcomputermove();
            playgame(playermove);
          }, 1000);
          autoplayButton.innerHTML ='Stop Play'
          isAutoPlaying=true;
        }else {
          clearInterval (interValidId);
          autoplayButton.innerHTML= 'Auto Play'
          isAutoPlaying = false;
        }
      }
     

      document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playgame(`Rock`);
      });

      document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playgame(`Paper`);
      });

      
      document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playgame(`Paper`);
      });

      document.querySelector('.js-auto-play-button').addEventListener('click', () => {
        autoPlay();
      });

      document.querySelector('.js-restore-button').addEventListener('click', () => {
        restoreScore();
        showResetconfirmation();
      });


      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          playgame('Rock');
        }else if (event.key === 'p') {
          playgame('Paper');
        } else if (event.key === 's') {
          playgame('Scissors');
        }else if (event.key === 'a') {
          autoPlay();
        }else if(event.key === 'Backspace') {
          showResetconfirmation();
        }
        
      });

      function restoreScore() {
        score.wins =0;
        score.losses =0 ;
        score.Ties =0;
        localStorage.removeItem('score');
        updatescoreElement();
      }

      function showResetconfirmation() {
        document.querySelector('.js-reset-confirmation').innerHTML=`
        <div class="background-color">
        <p class="para">Are you sure want to reset the score?</p>
        <button class="yes-button js-reset-confirm-yes">Yes</button> <button class="no-button js-reset-confirm-no">No</button> </div>
        `;

        document.querySelector('.js-reset-confirm-yes')
        .addEventListener('click', () => {
          hideResetConfirmation();
        });

        document.querySelector('.js-reset-confirm-no')
        .addEventListener('click', () => {
          hideResetConfirmation();
        });
      }

      function hideResetConfirmation() {
        document.querySelector('.js-reset-confirmation').innerHTML='';
      }
      

     

      function playgame(playermove){
      const computermove= pickcomputermove();
      console.log(computermove);

      let result='';

      if (playermove === `scissors`) {
      if(computermove === `Rock`) {
      result=`You lose.`;
      }else if(computermove === `Paper`){
      result=`You win.`;
      }else if(computermove === `Scissors`){
      result=`Tie.`;
      }
      } 

      else if(playermove === `Paper`) {

      if(computermove === `Rock`) {
      result=`You win.`;
      }else if(computermove === `Paper`){
      result=`Tie.`;
      }else if(computermove === `Scissors`){
      result=`You lose.`;
      }


      }  

      else if(playermove === `Rock`){

      if(computermove === `Rock`) {
          result=`Tie.`;
      }else if(computermove === `Paper`){
        result=`You lose.`;
      }else if(computermove === `Scissors`){
        result=`You win.`;
      }


      }

      if (result === `You win.`) {
      score.wins += 1;
      }
      else if (result === `You lose.`) {
      score.losses += 1;
      }
      else if (result === `Tie.`) {
      score.Ties += 1;
      }

      updatescoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playermove}-emoji.png" class="move-icon">
      <img src="images/${computermove}-emoji.png" class="move-icon">
      Computer`;



      localStorage.setItem('score', JSON.stringify(score));


      }

      function updatescoreElement () {
      document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.Ties}`;

      }




      function pickcomputermove() {

      const randomnumber=Math.random();
      let computermove='';


      if(randomnumber >=0 && randomnumber < 1/3){
      computermove= `Rock` ;
      }else if(randomnumber >=1/3 && randomnumber <2/3) {
      computermove= `Paper` ;
      }else if(randomnumber >=2/3 && randomnumber <1) {
      computermove= `Scissors` ;
      }

      return computermove;
      }