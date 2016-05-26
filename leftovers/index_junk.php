<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width" />
<title>Marvel Result Sheet</title>
<style>
body { background-color: #010101; color: #aff; font: 14px Verdana, Geneva, sans-serif; }
h1 { font-size: 2em; }
hr { background-color: #888; border: none; height: 1px; margin: 15px 0; }

#container {

}
</style>
</head>

<body>
<a href="version_1.0.php">Version 1.0</a>
<div id="container">
    <ul id="power_ranks"></ul>
    <input id="display" type="text" disabled placeholder="Roll Value">
    <div class="buttons">
        <a href="#" class="btn num">1</a>
        <a href="#" class="btn num">2</a>
        <a href="#" class="btn num">3</a>
        <a href="#" class="btn num">4</a>
        <a href="#" class="btn num">5</a>
        <a href="#" class="btn num">6</a>
        <a href="#" class="btn num">7</a>
        <a href="#" class="btn num">8</a>
        <a href="#" class="btn num">9</a>
        <a href="#" class="btn num">0</a>
        <a href="#" class="btn" id="clear">c</a>
        <a href="#" class="btn" id="backspace">&laquo;</a>
    </div><!-- End .buttons -->
</div><!-- End #container -->
<script src="jquery.2.1.1.min.js"></script>
<script>
/*
    Power ranks go in off-canvas menu or float to the left when width is big enough
    Listen for .btn click
        if hasClass(num)
            if(#ten)
            else get index
        else do something based on given id (clear or backspace)
    Check num vs rank and change body class accordingly
    Colors transition
        body 
            background-color
            box-shadow (inset)
        #container
            border/outline-color

    #container background is maybe black opacity gradient?
    Add meta tag for viewport
 */
var p_ranks = {
    '0': {
        'name': 'Shift 0',
        'abrv': '0'
    },
    '2': {
        'name': 'Feeble',
        'abrv': 'Fe'
    },
    '4': {
        'name': 'Poor',
        'abrv': 'Pr'
    },
    '6': {
        'name': 'Typical',
        'abrv': 'Ty'
    },
    '10': {
        'name': 'Good',
        'abrv': 'Gd'
    },
    '20': {
        'name': 'Excellent',
        'abrv': 'Ex'
    },
    '30': {
        'name': 'Remarkable',
        'abrv': 'Rm'
    },
    '40': {
        'name': 'Incredible',
        'abrv': 'In'
    },
    '50': {
        'name': 'Amazing',
        'abrv': 'Am'
    },
    '75': {
        'name': 'Monstrous',
        'abrv': 'Mn'
    },
    '100': {
        'name': 'Unearthly',
        'abrv': 'Un'
    },
    '150': {
        'name': 'Shift X',
        'abrv': 'X'
    },
    '200': {
        'name': 'Shift Y',
        'abrv': 'Y'
    },
    '500': {
        'name': 'Shift Z',
        'abrv': 'Z'
    },
    '1000': {
        'name': 'Class 1000',
        'abrv': '1000'
    },
    '3000': {
        'name': 'Class 3000',
        'abrv': '3000'
    },
    '5000': {
        'name': 'Class 5000',
        'abrv': '5000'
    },
    'B': {
        'name': 'Beyond',
        'abrv': 'B'
    }
};

$(document).ready(function() {
    var x, mrk,
        list = {
            'arr': [],
            'str': ''
        },
        body = $('body'),
        btns = $('.btn'),
        disp = $('#display'),
        PRs  = $('#power_ranks');

    // Make rank list
    for(x in p_ranks) {
        mrk = '<li id="'+p_ranks[x].abrv+'">'+p_ranks[x].name+'</li>';
        list.arr.push(mrk);
        list.str += mrk;
    }
    PRs.html(list.str);

    // Listen for number change
    $(btns).click(function() {
        var newVal,
            clkd = this,
            $clkd = $(clkd),
            val = $clkd.text(),
            dVal = disp.val();

        if($clkd.hasClass('num')) { // is number
            if(dVal === '') { // no entered value
                disp.val(val);
            } else if(dVal.length === 2) {
                disp.val('100');
            } else if(dVal.length < 3) { // append number
                newVal = dVal + val;
                disp.val(newVal);
            }
        }
        if(clkd.id === 'clear') {
            disp.val('');
        } else if(clkd.id === 'backspace') {
            if(dVal.length === 1) {
                disp.val('');
            } else {
                newVal = dVal.substr(0, (dVal.length-1));
                disp.val(newVal);
            }
        }
    });
// -------------------- :::
    // Calculate the result of a roll
    $('#result_calc button').click(check_calc); // #result_calc button
    $('#roll').keyup(check_calc);

    function check_calc() { console.log('keyup');
        var roll = parseInt($('#roll').val());
        var rank = $('#rank').val();
        if(!isNaN(roll)) {
            if(roll <= 0 || roll > 100) {
                // $('#result').css('background','url(/images/graphics/cheater.gif)');
            } else {
            
                // Define Color Functions
                function white(mid){
                    // $('#result').css('background','white').text(mid);
                    $('#roll').removeAttr('class').addClass('white');
                }
                function green(mid){
                    // $('#result').css('background','green').text(mid);
                    $('#roll').removeAttr('class').addClass('green');
                }
                function yellow(mid){
                    // $('#result').css('background','yellow').text(mid);
                    $('#roll').removeAttr('class').addClass('yellow');
                }
                function red(mid){
                    // $('#result').css('background','red').text(mid);
                    $('#roll').removeAttr('class').addClass('red');
                }
                
                // If Block
                if(rank == '2'){ // Feeble
                    
                    if(roll >= 1 && roll <= 60)
                        white(rank);
                    else if(roll >= 61 && roll <= 90)
                        green(rank);
                    else if(roll >= 91 && roll <= 99)
                        yellow(rank);
                    else if(roll == 100)
                        red(rank);
                        
                } else if(rank == '4'){ // Poor
                    
                    if(roll >= 1 && roll <= 55)
                        white(rank);
                    else if(roll >= 56 && roll <= 85)
                        green(rank);
                    else if(roll >= 86 && roll <= 99)
                        yellow(rank);
                    else if(roll == 100)
                        red(rank);
                        
                } else if(rank == '6'){ // Typical
                    
                    if(roll >= 1 && roll <= 50)
                        white(rank);
                    else if(roll >= 51 && roll <= 80)
                        green(rank);
                    else if(roll >= 81 && roll <= 97)
                        yellow(rank);
                    else if(roll >= 98 && roll <= 100)
                        red(rank);
                        
                } else if(rank == '10'){ // Good
                    
                    if(roll >= 1 && roll <= 45)
                        white(rank);
                    else if(roll >= 46 && roll <= 75)
                        green(rank);
                    else if(roll >= 76 && roll <= 97)
                        yellow(rank);
                    else if(roll >= 98 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '20'){ // Excellent
                    
                    if(roll >= 1 && roll <= 40)
                        white(rank);
                    else if(roll >= 41 && roll <= 70)
                        green(rank);
                    else if(roll >= 71 && roll <= 94)
                        yellow(rank);
                    else if(roll >= 95 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '30'){ // Remarkable
                    
                    if(roll >= 1 && roll <= 35)
                        white(rank);
                    else if(roll >= 36 && roll <= 65)
                        green(rank);
                    else if(roll >= 66 && roll <= 94)
                        yellow(rank);
                    else if(roll >= 95 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '40'){ // Incredible
                    
                    if(roll >= 1 && roll <= 30)
                        white(rank);
                    else if(roll >= 31 && roll <= 60)
                        green(rank);
                    else if(roll >= 61 && roll <= 90)
                        yellow(rank);
                    else if(roll >= 91 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '50'){ // Amazing
                    
                    if(roll >= 1 && roll <= 25)
                        white(rank);
                    else if(roll >= 26 && roll <= 55)
                        green(rank);
                    else if(roll >= 56 && roll <= 90)
                        yellow(rank);
                    else if(roll >= 91 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '75'){ // Monstrous
                    
                    if(roll >= 1 && roll <= 20)
                        white(rank);
                    else if(roll >= 25 && roll <= 50)
                        green(rank);
                    else if(roll >= 51 && roll <= 85)
                        yellow(rank);
                    else if(roll >= 86 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '100'){ // Unearthly
                    
                    if(roll >= 1 && roll <= 15)
                        white(rank);
                    else if(roll >= 16 && roll <= 45)
                        green(rank);
                    else if(roll >= 46 && roll <= 85)
                        yellow(rank);
                    else if(roll >= 86 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '150'){ // Shift X
                    
                    if(roll >= 1 && roll <= 10)
                        white(rank);
                    else if(roll >= 11 && roll <= 40)
                        green(rank);
                    else if(roll >= 41 && roll <= 80)
                        yellow(rank);
                    else if(roll >= 81 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '200'){ // Shift Y
                    
                    if(roll >= 1 && roll <= 6)
                        white(rank);
                    else if(roll >= 7 && roll <= 40)
                        green(rank);
                    else if(roll >= 41 && roll <= 80)
                        yellow(rank);
                    else if(roll >= 81 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '500'){ // Shift Z
                    
                    if(roll >= 1 && roll <= 3)
                        white(rank);
                    else if(roll >= 4 && roll <= 35)
                        green(rank);
                    else if(roll >= 36 && roll <= 75)
                        yellow(rank);
                    else if(roll >= 76 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '1000'){ // Class 1000
                    
                    if(roll == 1)
                        white(rank);
                    else if(roll >= 2 && roll <= 35)
                        green(rank);
                    else if(roll >= 36 && roll <= 75)
                        yellow(rank);
                    else if(roll >= 76 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '3000'){ // Class 3000
                    
                    if(roll == 1)
                        white(rank);
                    else if(roll >= 2 && roll <= 30)
                        green(rank);
                    else if(roll >= 31 && roll <= 70)
                        yellow(rank);
                    else if(roll >= 71 && roll <= 100)
                        red(rank);
                    
                } else if(rank == '5000'){ // Class 5000
                    
                    if(roll == 1)
                        white(rank);
                    else if(roll >= 2 && roll <= 25)
                        green(rank);
                    else if(roll >= 26 && roll <= 65)
                        yellow(rank);
                    else if(roll >= 66 && roll <= 100)
                        red(rank);
                    
                }
            } // cheater check
        } // NaN check
    }
});
</script>
</body>
</html>