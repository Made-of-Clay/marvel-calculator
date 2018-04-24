<?php $container_margin = (preg_match('/Mobile/i',$_SERVER['HTTP_USER_AGENT'])) ? '25px 0 0' : '25px auto'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width" />
<title>Marvel Result Sheet</title>
<style type="text/css">
body { background-color: #010101; color: #aff; font: 14px Verdana, Geneva, sans-serif; }
h1 { font-size: 18px; }
hr { background-color: #888; border: none; height: 1px; margin: 15px 0; }

#container { border: 1px solid #444; box-shadow: 0 0 4px #ddf; margin: <?php echo $container_margin; ?>; padding: 5px; text-align: center; width: 400px; 
    background: #727a7f; /* Old browsers */
    background: -moz-linear-gradient(top, #727a7f 0%, #22282b 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#727a7f), color-stop(100%,#22282b)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #727a7f 0%,#22282b 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #727a7f 0%,#22282b 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #727a7f 0%,#22282b 100%); /* IE10+ */
    background: linear-gradient(top, #727a7f 0%,#22282b 100%); /* W3C */
    /* W3C Standard */
    animation-name: shadow_pulse; animation-duration: 1.5s; animation-timing-function: ease; animation-iteration-count: infinite; animation-direction: alternate; animation-play-state: running;
    /* Mozilla */
    -moz-animation-name: shadow_pulse; -moz-animation-duration: 1.5s; -moz-animation-timing-function: ease; -moz-animation-iteration-count: infinite; -moz-animation-direction: alternate; -moz-animation-play-state: running;
    /* Webkit */
    -webkit-animation-name: shadow_pulse; -webkit-animation-duration: 1.5s; -webkit-animation-timing-function: ease; -webkit-animation-iteration-count: infinite; -webkit-animation-direction: alternate; -webkit-animation-play-state: running;
}
@-webkit-keyframes shadow_pulse { 0% { box-shadow: 0 0 5px #ddf; } 100% { box-shadow: 0 0 15px #ddf; } }
@keyframes shadow_pulse { 0% { box-shadow: 0 0 5px #ddf; } 100% { box-shadow: 0 0 15px #ddf; } }
@-moz-keyframes shadow_pulse { 0% { box-shadow: 0 0 5px #ddf; } 100% { box-shadow: 0 0 15px #ddf; } }

#result { display: none;
    border: 1px solid #ddf; color: #111; cursor: pointer; font-weight: bold; height: 50px; margin: 0 auto; width: 100px; }
#roll {
    border: 5px solid #fff;
    box-shadow: 0 0 10px black inset;
    outline: 0;
    padding: 10px;
    text-align: center;
    width: 4em; }
#roll.white { border-color: #fff; }
#roll.green { border-color: #0f0; }
#roll.yellow { border-color: #ff0; }
#roll.red { border-color: #f00; }

table { width: 100%; }
td { text-align: left; width: 30%; }
label { display: inline-block; padding: 5px; }

#health_calc span, #health_calc header { display: inline-block; float: left; width: 5em; }
#r_health { border-bottom: 1px solid #dff; height: 20px; padding-top: 3px; }

.clear { clear: both; }
</style>
</head>

<body>
<div id="container">
    <div id="result_calc">
    <h1>Result Calculator</h1>
    <input type="text" id="roll" maxlength="3" placeholder="Roll" /><br />
    <!--<select id="rank">
      <option value="2">Feeble</option>
      <option value="4">Poor</option>
      <option value="6">Typical</option>
      <option value="10">Good</option>
      <option value="20">Excellent</option>
      <option value="30">Remarkable</option>
      <option value="40">Incredible</option>
      <option value="50">Amazing</option>
      <option value="75">Monstrous</option>
      <option value="100">Unearthly</option>
      <option value="150">Shift X</option>
      <option value="200">Shift Y</option>
      <option value="500">Shift Z</option>
      <option value="1000">Class 1000</option>
      <option value="3000">Class 3000</option>
      <option value="5000">Class 5000</option>
    </select><br />-->
    
    <input type="hidden" id="rank" value="" />
    <table>
        <tr>
            <td>
                <label><input type="radio" name="ranks" value="2" />Feeble</label><br />
                <label><input type="radio" name="ranks" value="4" />Poor</label><br />
                <label><input type="radio" name="ranks" value="6" />Typical</label><br />
                <label><input type="radio" name="ranks" value="10" />Good</label><br />
                <label><input type="radio" name="ranks" value="20" />Excellent</label><br />
            </td>
            <td>
                <label><input type="radio" name="ranks" value="30">Remarkable</label><br />
                <label><input type="radio" name="ranks" value="40">Incredible</label><br />
                <label><input type="radio" name="ranks" value="50">Amazing</label><br />
                <label><input type="radio" name="ranks" value="75">Monstrous</label><br />
                <label><input type="radio" name="ranks" value="100">Unearthly</label><br />
            </td>
            <td>
                <label><input type="radio" name="ranks" value="150">Shift X</label><br />
                <label><input type="radio" name="ranks" value="200">Shift Y</label><br />
                <label><input type="radio" name="ranks" value="500">Shift Z</label><br />
                <label><input type="radio" name="ranks" value="1000">Class 1000</label><br />
                <label><input type="radio" name="ranks" value="3000">Class 3000</label><br />
                <label><input type="radio" name="ranks" value="5000">Class 5000</label><br />
            </td>
        </tr>
    </table>
    
    <button>Calculate</button><br /><br />
    <div id="result"></div>
  </div> <!-- End #result_calc -->
  
  <hr />
  
  <div id="health_calc">
    <h1>Health Calculator</h1>
    <div id="health_calc">
      <header>Health: </header>
      <header>Damage - </header>
      <header>Resist = </header>
      <header>Health</header>
      <br class="clear" />
      <span><input type="text" id="total_health" maxlength="4" size="4" /></span>
      <span><input type="text" id="damage" maxlength="4" size="4" /></span>
      <span><input type="text" id="resist" maxlength="4" size="4" /></span>
      <span id="r_health"></span>
    </div> <!-- End #health_calc -->
    <br />
    <button>Calculate</button>
  </div> <!-- End #health_calc -->
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    $('input[type=radio]').click(function(){
        var rank = $(this).val();
        $('#rank').val(rank);
        check_calc();
    });
    
    // Calculate the result of a roll
    $('#result_calc button').click(check_calc); // #result_calc button
    $('#roll').keyup(check_calc);

    function check_calc() { console.log('keyup');
        var roll = parseInt($('#roll').val());
        var rank = $('#rank').val();
        if(!isNaN(roll)) {
            if(roll <= 0 || roll > 100)
                $('#result').css('background','url(/images/graphics/cheater.gif)');
            else {
            
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
    
    // Calculate health
    $('#health_calc button').click(function(){
        // get input values
        var total_health = parseInt($('#total_health').val());
        var damage = parseInt($('#damage').val());
        var resist = parseInt($('#resist').val());
        if(isNaN(resist))
            resist = 0;
        
        if(isNaN(total_health) || isNaN(damage) || isNaN(resist)){
            alert('All values must be integers (that means numbers for the shortbus kids)');
        } else {
            var dmg_taken = damage - resist;
            if(dmg_taken < 0)
                dmg_taken = 0;
            var r_health = total_health - dmg_taken;
            $('#r_health').text(r_health);
        }
    });
    
    $('#r_health').click(function(){
        var amt = $('#r_health').text();
        $('#total_health').val(amt);
        $('#damage, #resist').val('');
        $('#r_health').text('');
    });
});
</script>
</body>
</html>