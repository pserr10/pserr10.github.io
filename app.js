//TODO:

//SET SCORE SYSTEM USING DETECTCOLISION FUNCTION
//SET SCORE SYSTEM WITH SOUND

//SET UTILS.JS

//MAKE GAME RESPONSIBLE IN PHONES


/*<--------------GLOBAL VARIABLES --------------------->*/
const game = document.querySelector('[fp-game]');
const block = document.querySelector('[fp-block]');
const hole = document.querySelector('[fp-hole]');
const character = document.querySelector('[fp-character]');
const score = document.querySelector('[fp-score]');
const gameover = document.querySelector('[fp-gameover]');
const gameoverScore = document.querySelector('[fp-gameover-score]');
const button = document.querySelector('[fp-button]');
const opacityScreen = document.querySelector('[fp-opacity-screen]');
let gameOverScreen = document.querySelectorAll('.over-button-screen');


let jumping = false;
let scoreCounter = 0;
let isGameOver = false;
let collision = Boolean
let gravityForce = 3;
const accForce = 0.001;

/*<-------------------PLAY GAME SECTION ----------------------->*/
movePipes = () => {
    if (isGameOver == false) {
        const seconds = 3; //SET seconds to 0 to stop animation
        const movePipeCss = `movePipe ${seconds}s infinite linear`
        block.style.animation = movePipeCss;
        hole.style.animation = movePipeCss;
    };
};

getRandomHole = () => {
    if (isGameOver == false) {
        hole.addEventListener('animationiteration', () => {
            const minValue = 6;
            const maxValue = 361;

            let getRandomY = getRandom(minValue, maxValue);
            hole.style.top = `${getRandomY}px`;

            //incrementing score for each animation
            //if animation is finished score counts, if game-over animation wont finish

            scoreCounter++
            score.innerText = `${scoreCounter.toString()}`;

        });
    }
};


jump = () => {
    if (isGameOver == false) {
        jumping = true;
        
         (new Audio('/sounds/fly.wav')).play();

        character.classList.remove('rotate-down');
        character.classList.add('rotate-up');

        let jumpCount = 0;
        let jumpInterval = setInterval(function () {
           
            let characterTop = getCssProperty(character, "top");

            if ((characterTop > 6) && (jumpCount < 15)) {
                character.style.top = (characterTop - 4.5) + "px";
            }

            if (jumpCount > 20) {
                clearInterval(jumpInterval);
                jumping = 0;
                jumpCount = 0;
            }

            jumpCount++;
        }, 10);
    }
}

gravity = () => {
 setInterval(() => {
        if (isGameOver == false) {
            if (jumping == false) {
             
                character.classList.remove('rotate-up');
                character.classList.add('rotate-down');
            
                let actualPosition = getCssProperty(character, "top");
                character.style.top = (actualPosition + gravityForce) + 'px';
            }
        }
    }, 10);
}

/*<--------- GAME OVER SECTION---------->*/
gameOver = () => {
    setInterval(() => {
        detectCollision();
        if (collision == true) {
            isGameOver = true;
            gameoverScore.innerHTML = `Score: ${scoreCounter}`;
            handleGameOver();
        }
    }, 10);
}



detectCollision = () => {
    const holeHight = 193;
    const characterWidth = 40;
    const characterHight = 30;

    let characterTop = getCssProperty(character, 'top');
    let characterRight = getCssProperty(character, 'left') + characterWidth;
    let characterBottom = characterTop + characterHight;

    let holeTop = getCssProperty(hole, 'top');
    let holeBottom = holeTop + holeHight;

    let blockLeft = getCssProperty(block, 'left');

    if ((characterTop >= 648) || ((blockLeft <= characterRight) && (blockLeft >= 120) //change to 50 if bug
        && ((characterTop <= holeTop) || (characterBottom >= holeBottom)))) {
        collision = true;
        (new Audio('/sounds/gameover.wav')).play();
    }
}


handleGameOver = () => {
    
    getGameOverScreen();
    stopPipes()
    setCharacterInitialPosition();
    

}

getGameOverScreen = () => {
    if (isGameOver == true) {
        gameOverScreen.forEach((element) => {
            element.style.display = '';
        });

        score.style.display = 'none';
    }
}

stopPipes = () => {
    if (isGameOver == true) {
        const stopPipeCss = `0`;
        block.style.animation = stopPipeCss;
        hole.style.animation = stopPipeCss;
    }
}

setCharacterInitialPosition = () => {
    if (isGameOver == true) {
        character.style.top = `300px`;
        character.classList.remove('rotate-up');
        character.classList.remove('rotate-down');
    }
}


playAgain = () => {
    if (isGameOver == true) {
       location.reload();  
    }
}







/* ----------> UTILITIES SECTION <---------------*/
getRandom = (min, max) => {
    return ((Math.random() * (max - min) + min))
}

getCssProperty = (obj, value) => {
    return parseInt(window.getComputedStyle(obj).getPropertyValue(value));
}


/* RUN THE GAME */
function rungame() { 
    movePipes();
    getRandomHole();
    gravity()
    gameOver();      
}

rungame()







