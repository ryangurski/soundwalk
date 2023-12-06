$(document).ready(function () {
    var $animationElements = $('.left-arm, .right-arm, .left-leg, .right-leg, .shoe-left, .shoe-right, .shadow, .head, .hood, .hoodie-body, .hair, .treadmill, .animate-grain, night-sky');
    var $playButton = $('.play-button');
    var $skipButton = $('.skip-button');
    var wallElement = $('.wall');
    var nightSkyElement = $('.night-sky');
    var starsElement = $('.stars');
    var bubbleElement = $('.bubble');
    var circleElements = $('.circle1, .circle2, .circle3, .circle4, .circle5, .circle6, .circle7, .circle8, .circle9, .circle10');

    var scenes = [];
    var currentSceneIndex = 0;
    var isAnimationStarted = false;
    var inPauseState = false;
    var animationTimer;
    var glitchTimer;
    var countdownElement = $('.countdown');
    var totalSeconds = 30;
    var sceneBPMs = [40, 60, 80, 100];

    for (var i = 0; i < 5; i++) {
        createScene();
    }
    scenes[0].wallVisible = true;
    scenes[0].nightSkyVisible = true;
    scenes[0].starsVisible = true;
    scenes[0].bubbleVisible = true;
    scenes[0].circleVisible = true;

    function createScene() {
        var scene = {};
        $animationElements.each(function () {
            scene[$(this).attr('class')] = $(this).attr('style');
        });
        scenes.push(scene);
    }

    function applyScene(scene) {
        $animationElements.each(function () {
            var className = $(this).attr('class');
            $(this).attr('style', scene[className]);
        });

        if (currentSceneIndex === 1 || currentSceneIndex === 2) {
            wallElement.hide();
            nightSkyElement.show();
            starsElement.show();
            bubbleElement.show();
            circleElements.show();
        } else if (currentSceneIndex === 0) {
            wallElement.show();
            nightSkyElement.show();
            starsElement.show();
            bubbleElement.show();
            circleElements.show();
        }
    }

    function updateAnimation() {
        var currentBpm = sceneBPMs[currentSceneIndex];
        updateAnimationSpeed(currentBpm, $animationElements);
    }

    function updateAnimationSpeed(bpm, elements) {
        var beatDuration = 60 / bpm;
        elements.css('animation-duration', beatDuration + 's');
        console.log('Updated animation speed to ' + bpm + ' BPM');
    }

    function updateCountdown() {
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
    
        var formattedTime = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
        countdownElement.text(formattedTime);
    
        if (totalSeconds === 0) {
            clearInterval(timer);
        } else {
            totalSeconds--;
        }
    }

    function playGlitch() {
        $('.stickman').css({
            'animation': '',
            'transform': '',
            'left': '',
            'opacity': '0.5'
        });
    
        $animationElements.css({
            'animation': '',
            'transform': '',
            'left': '',
        });
 
        $('.stickman').animate({
            opacity: 1
        }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
                if (Math.random() < 0.05) {
                    $(this).css({
                        'left': (Math.random() - 0.5) * 9 + 'px', 
                        'opacity': Math.random()
                    });
                }
            },
            complete: function () {
            }
        });
    }

    function endGlitch() {
        $('.stickman').css({
            'opacity': '0.5'
        });
    
        $('.stickman').animate({
            opacity: 1
        }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
                if (Math.random() < 0.05) {
                    $(this).css({
                        'left': (Math.random() - 0.5) * 9 + 'px', 
                        'opacity': Math.random()
                    });
                }
            },
            complete: function () {
            }
        });
    }

    function startAnimation() {

        if (currentSceneIndex === 0) {
            wallElement.css({ opacity: 0 }).delay(1000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 1 }, 3000);
    
            nightSkyElement.css({ opacity: 0 }).delay(4000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.9}, 3000);
    
            starsElement.css({ opacity: 0 }).delay(4000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.5}, 6000);
    
            bubbleElement.css({ opacity: 0 }).delay(20000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.45 }, 3000);
    
            circleElements.css({ opacity: 0 }).delay(23000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.7 }, 2000);
        } else if (currentSceneIndex === 1 || currentSceneIndex === 2 || currentSceneIndex === 3) {
            wallElement.hide();

            nightSkyElement.css({ opacity: 0 }).delay(3000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.9 }, 3000);

            starsElement.css({ opacity: 0 }).delay(3000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.5 }, 3000);

            bubbleElement.css({ opacity: 0 }).delay(3000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.45 }, 3000);

            circleElements.css({ opacity: 0 }).delay(3000).queue(function (next) {
                $(this).css('display', 'block');
                $(this).dequeue();
            }).animate({ opacity: 0.7 }, 3000);

        } else {
            wallElement.hide();
            nightSkyElement.hide();
            starsElement.hide();
            bubbleElement.hide();
            circleElements.hide();
        }

        let totalDuration = 0;

        if (currentSceneIndex === 0) {
            setTimeout(function () {
                $('.circle1').animate({
                    left: '30%',
                    top: '35%',
                }, 1000);
            }, 2000);
            setTimeout(function () {
                $('.circle2').animate({
                    left: '36%',
                    top: '45%',
                }, 1000);
            }, 4000);
            setTimeout(function () {
                $('.circle8').animate({
                    left: '59%',
                    top: '35%',
                }, 1000);
            }, 6000);
        } else if (currentSceneIndex === 1) {
            setTimeout(function () {
                $('.circle5').animate({
                    left: '62%',
                    top: '50%',
                }, 2000);
            }, 4000);
            setTimeout(function () {
                $('.circle6').animate({
                    left: '30%',
                    top: '55%',
                }, 2000);
            }, 8000);
            setTimeout(function () {
                $('.circle3').animate({
                    left: '35%',
                    top: '65%',
                }, 2000);
            }, 15000);
            setTimeout(function () {
                $('.circle4').animate({
                    left: '30%',
                    top: '50%',
                }, 2000);
            }, 20000);
            setTimeout(function () {
                $('.circle9').animate({
                    left: '62%',
                    top: '60%',
                }, 2000);
            }, 25000);
        } else if (currentSceneIndex === 2) {
            setTimeout(function () {
                $('.circle8').animate({
                    left: '59%',
                    top: '35%',
                }, 2000);
            }, 2000);
            setTimeout(function () {
                $('.circle10').animate({
                    left: '69%',
                    top: '65%',
                }, 2000);
            }, 40000);
            setTimeout(function () {
                $('.circle7').animate({
                    left: '65%',
                    top: '50%',
                }, 2000);
            }, 10000);
            setTimeout(function () {
                $('.circle1').animate({
                    left: '30%',
                    top: '35%',
                }, 2000);
            }, 13000);
            setTimeout(function () {
                $('.circle9').animate({
                    left: '62%',
                    top: '33%'
                }, 2000);
            }, 17000);
            setTimeout(function () {
                $('.circle4').animate({
                    left: '39%',
                    top: '57%',
                }, 2000);
            }, 20000);
            setTimeout(function () {
                $('.circle2').animate({
                    left: '36%',
                    top: '67%',
                }, 2000);
            }, 24000);
        } else if (currentSceneIndex === 3) {
            setTimeout(function () {
                $('.circle8').animate({
                    left: '59%',
                    top: '35%',
                }, 2000);
            }, 6000);
            setTimeout(function () {
                $('.circle10').animate({
                    left: '69%',
                    top: '60%',
                }, 2000);
            }, 8000);
            setTimeout(function () {
                $('.circle7').animate({
                    left: '65%',
                    top: '50%',
                }, 2000);
            }, 10000);
            setTimeout(function () {
                $('.circle1').animate({
                    left: '30%',
                    top: '35%',
                }, 2000);
            }, 12000);
            setTimeout(function () {
                $('.circle4').animate({
                    left: '32%',
                    top: '57%',
                }, 2000);
            }, 14000);
            setTimeout(function () {
                $('.circle2').animate({
                    left: '36%',
                    top: '45%',
                }, 2000);
            }, 16000);
            setTimeout(function () {
                $('.circle9').animate({
                    left: '62%',
                    top: '55%'
                }, 2000);
            }, 18000);
            setTimeout(function () {
                $('.circle3').animate({
                    left: '35%',
                    top: '30%',
                }, 2000);
            }, 20000);
            setTimeout(function () {
                $('.circle5').animate({
                    left: '62%',
                    top: '35%',
                }, 2000);
            }, 22000);
            setTimeout(function () {
                $('.circle6').animate({
                    left: '30%',
                    top: '50%',
                }, 2000);
            }, 24000);
        }


    setTimeout(function () {
        $('.circle1, .circle2, .circle3, .circle4, .circle5, .circle6, .circle7, .circle8, .circle9, .circle10').css({ left: '', top: '' });
    }, totalDuration);

        $('.answer1, .answer2, .answer3, .answer4').hide();
        $('.instructions').hide().addClass('start-instructions-animation');
        $('.question').hide().addClass('start-typing-animation');
        
        totalSeconds = 29;

        playGlitch();
        updateAnimation();
        clearTimeout(glitchTimer);
        clearTimeout(countdownTimer);
        $('.countdown').css('display', 'block');
    
        glitchTimer = setTimeout(function () {
            endGlitch();
            clearGlitchEffects();
        }, 27000);
    
        animationTimer = setTimeout(function () {
            pauseAnimation();
        }, 30000);

        timer = setInterval(function () {
            updateCountdown();
        }, 1000);
    
        isAnimationStarted = true;
        $playButton.prop('disabled', true);
        $skipButton.prop('disabled', false);
    
        updateButtonColors();
    }

    function startTypingAnimationWithDelay() {
        setTimeout(function () {
            $('.question').show().addClass('start-typing-animation');
        }, 1000);
    }

    function startTypingAnimationWithDelayEnd() {
        setTimeout(function () {
            $('.question2').show().addClass('start-typing-animation');
        }, 1000);
    }

    function setRandomNumber(selector, min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        $(selector).text(randomNumber);
    }

    function setRandomNumbersWithDelay() {
        setTimeout(function () {
            var randomNumberConfig = [
                [
                    { selector: '.answer1', min: 3, max: 3 },
                    { selector: '.answer2', min: 6, max: 7 },
                    { selector: '.answer3', min: 4, max: 5 },
                    { selector: '.answer4', min: 8, max: 9 }
                ],
                [
                    { selector: '.answer1', min: 2, max: 3 },
                    { selector: '.answer2', min: 6, max: 7 },
                    { selector: '.answer3', min: 5, max: 5 },
                    { selector: '.answer4', min: 8, max: 9 }
                ],
                [
                    { selector: '.answer1', min: 2, max: 3 },
                    { selector: '.answer2', min: 6, max: 6 },
                    { selector: '.answer3', min: 5, max: 5 },
                    { selector: '.answer4', min: 8, max: 9 }
                ],
                [
                    { selector: '.answer1', min: 15, max: 20 },
                    { selector: '.answer2', min: 20, max: 21 },
                    { selector: '.answer3', min: 22, max: 22 },
                    { selector: '.answer4', min: 24, max: 24 }
                ]
            ];
    
            var currentConfigIndex = inPauseState ? currentSceneIndex - 1 : currentSceneIndex;

            var currentConfig = randomNumberConfig[currentConfigIndex];
    
            currentConfig.forEach(function (number, index) {
                setTimeout(function () {
                    $(number.selector).show();
                    setRandomNumber(number.selector, number.min, number.max);
                }, index * 1000);
            });
        }, 7000);
    }

    var timer;
    function pauseAnimation() {
        clearInterval(timer);
        clearTimeout(glitchTimer);
        clearTimeout(animationTimer);

        inPauseState = true; 

        setRandomNumbersWithDelay();

        if (currentSceneIndex === 3) {
            startTypingAnimationWithDelayEnd();
            $('.question').hide(); 
        } else {
            startTypingAnimationWithDelay(); 
        }
        
        updateAnimationSpeed(20, slowDownElements);
        wallElement.hide(); 
        nightSkyElement.stop(true, true).hide(); 
        starsElement.stop(true, true).hide(); 
        bubbleElement.stop(true, true).hide(); 
        circleElements.stop(true, true).hide();

        $('.instructions').addClass('start-instructions-animation');
        
        $('.treadmill, .animate-grain').css({
            'animation-play-state': 'paused',
            'transition': 'all 3s ease-out'
        });

        $animationElements.filter('.left-leg, .right-leg, .left-arm, .right-arm, .shoe-left, .shoe-right').css({
            'animation': 'pauseAndMoveLeft 3s forwards cubic-bezier(0.215, 0.61, 0.355, 1)',
            'left': '0'
        });

        inPauseState = true;
        isAnimationStarted = false;
        $skipButton.prop('disabled', true);
        $playButton.prop('disabled', true);
        $playButton.off('click');

        $('.answer1, .answer2, .answer3, .answer4').one('click', function () {
            var clickedNumber = parseInt($(this).text());
            var correctAnswers = [3, 5, 6, 24];
            var isCorrect = (clickedNumber === correctAnswers[currentSceneIndex - 1]);

        
            handleNumberClick(isCorrect, $(this));
        });
        
        updateButtonColors();

        currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
        
        totalSeconds = 0;
        updateCountdown();
    }

    function handleNumberClick(isCorrect, $element) {
        if (isCorrect) {
            handleCorrectClick($element);
            document.getElementById('right-answer').play();
            enablePlayButton();
        } else {
            handleIncorrectClick($element);
            document.getElementById('wrong-answer').play();
        }
    }
    
    function handleCorrectClick($element) {
        $element.css('color', 'green');
    }
    
    function handleIncorrectClick($element) {
        $element.css('color', 'red');
    }
    
    function enablePlayButton() {
        $playButton.prop('disabled', false)
            .removeClass('disabled-state')
            .addClass('enabled-state')
            .off('click')  
            .on('click', function () {
                handlePlayButtonClick();
            });
    }

    function handlePlayButtonClick() {
        if (!isAnimationStarted) { 
            applyScene(scenes[currentSceneIndex]);

            switch (currentSceneIndex) {
                case 0:
                    document.getElementById('scene1').play();
                    break;
                case 1:
                    document.getElementById('scene2').play();
                    break;
                case 2:
                    document.getElementById('scene3').play();
                    break;
                case 3:
                    document.getElementById('scene4').play();
    
                default:
                    break;
            }
            updateCountdown();

            $('.answer1, .answer2, .answer3, .answer4').css('color', '');

            startAnimation();
            $playButton.removeClass('enabled-state').addClass('disabled-state');
            $skipButton.removeClass('disabled-state').addClass('enabled-state');
        }
        if (inPauseState && currentSceneIndex === 4) {
            var $selectedAnswer = $('.answer4');
            var selectedNumber = parseInt($selectedAnswer.text());
            var correctAnswer = 24;

            if (selectedNumber === correctAnswer) {
                location.reload();
                return;
            }
        }
    } 

    function handleSkipButtonClick() {
        if (isAnimationStarted) {
            clearTimeout(animationTimer);
            clearTimeout(glitchTimer);
            endGlitch();

            setTimeout(function () {
                pauseAnimation();
                isAnimationStarted = false;
                $skipButton.prop('disabled', true);
            }, 3000);
    
            document.getElementById('glitch-skip').play();
            document.getElementById('scene1').pause();
            document.getElementById('scene2').pause();
            document.getElementById('scene3').pause();
        }
    }
            
    function updateButtonColors() {
        if (isAnimationStarted && !inPauseState) {

            $playButton.prop('disabled', true).removeClass('enabled-state').addClass('disabled-state');
            $skipButton.prop('disabled', false).removeClass('disabled-state').addClass('enabled-state');
        } else if (inPauseState && !isAnimationStarted) {
        
            $playButton.prop('disabled', true).removeClass('enabled-state').addClass('disabled-state');
            $skipButton.prop('disabled', true).removeClass('enabled-state').addClass('disabled-state');
        } else {
        
            $playButton.prop('disabled', false).removeClass('disabled-state').addClass('enabled-state');
            $skipButton.prop('disabled', true).removeClass('enabled-state').addClass('disabled-state');
        }
    }

    // Initial setup
    isAnimationStarted = false;
    inPauseState = false;
    $playButton.prop('disabled', false);
    $skipButton.prop('disabled', true);
    updateButtonColors();

    setTimeout(function () {
        $('.instructions').addClass('start-instructions-animation');
    }, 2000);

    var countdownTimer = setTimeout(function () {
        $('.countdown').css('display', 'block');
    }, 8000);

    var styleSheet = document.styleSheets[0];
    styleSheet.insertRule('@keyframes pauseAndMoveLeft { 0% { transform: translateX(var(--initial-translate-x)); } 100% { transform: translateX(0); animation-play-state: paused; transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); animation-duration: 2s; } }', styleSheet.cssRules.length);

    var slowDownElements = $('.head, .hood, .hoodie-body, .hair');
    updateAnimationSpeed(20, slowDownElements);

    $('.left-leg, .right-leg, .left-arm, .right-arm, .shoe-left, .shoe-right').css({
        'animation': 'none',
        'transform': 'translateX(0)',
        'left': '0'
    });

    $('.treadmill, .animate-grain').css({ 'animation-play-state': 'paused' });

    // Click event for the play button
    $playButton.on('click', handlePlayButtonClick);

    $skipButton.on('click', handleSkipButtonClick);
});