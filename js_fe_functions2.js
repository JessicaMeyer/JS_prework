// ex 2.1.html // same as js_fe_functions from front end course. 

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var slap = function() {
  	alert('SLAP');
  };
  slap();
</script>

</body>
</html>

// ex 2.2.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var kick = function(name) {
  	alert(name + ' reproaches your behavior.');
  };
  kick('Billy');
</script>

</body>
</html>

// ex 2-3.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var doubleIt = function(x){
  	alert(x + ' times two is ' + x*2);
  };
  doubleIt(8);
</script>

</body>
</html>

// ex2-4.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var greet = function(name){
  	alert("Welcome, " + name);
  };
  greet('Bob');
</script>

</body>
</html>

// ex 3-1.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var yell = function(what){
  	alert(what.toUpperCase());
  };
  yell('hola');
</script>

</body>
</html>

// ex 3-2.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var divideBy = function(x, y){
  	return x/y;
  };

  var result = divideBy(50,2);
  console.log('Result should be 25:', result);

  result = divideBy(40, 10);
  console.log('Result should be 4:', result);

  result = divideBy(99, 3);
  console.log('Result should be 33:', result);
</script>

</body>
</html>

// ex 3-3.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var welcome = function(name1, name2){
  	if(name2){
  		return 'Welcome, ' + name1 + ' and ' + name2 + '!';
  	}
  	else {
  		return 'Welcome, ' + name1 + '!';
  	}
  }

  var result = welcome('Alice', 'Bob');
  console.log('Result should be "Welcome, Alice and Bob!"', result);

  var result = welcome('Alice');
  console.log('Result should be "Welcome, Alice!"', result);
</script>

</body>
</html>

// guess the number 

<html>
<head>
  <title>Guess the Number!</title>
</head>
<body>

<script type="text/javascript">
  var secretNumber = parseInt(Math.random() * 100, 10) + 1;
  console.log(secretNumber);
  // console.log("Global scope defined secret number: " + secretNumber);
  var landmine = parseInt(Math.random() * 100, 10) + 1;
  var boom = 0;
  var answer = prompt("Enter a number between 1 and 100");
  
  var result = function(){
  	// console.log("Inner scope defined secret number: " + secretNumber);
  	if(answer > secretNumber){
  		// alert('Pick lower');
  		if(answer > landmine){
  			boom = answer - landmine;
  			alert('Pick lower');
  			alert("You are " + boom + " spots from the landmine");
  			answer = prompt("Enter a number lower than " + answer);
  			result();
	  	}
	  	else if(answer < landmine){
	  		alert('Pick lower');
	  		boom = landmine - answer;
	  		alert("You are " + boom + " spots from the landmine");
	  		answer = prompt("Enter a number lower than " + answer);
	  		result();
	  	}
	  	else if(answer == landmine){
	  		alert("You hit the landmine, GAME OVER!");
	  	}
  		result();
	 }
  	else if(answer < secretNumber){
  		// alert('Pick higher');
  		if(answer > landmine){
  			alert('Pick higher');
  			boom = answer - landmine;
  			alert("You are " + boom + " spots from the landmine");
  			answer = prompt("Enter a number higher than " + answer);
  			result();
	  	}
	  	else if(answer < landmine){
	  		alert('Pick higher');
	  		boom = landmine - answer;
	  		alert("You are " + boom + " spots from the landmine");
	  		answer = prompt("Enter a number higher than " + answer);
	  		result();
	  	}
	  	else if(answer == landmine){
	  		alert("You hit the landmine, GAME OVER!");
	  	}
  		// result();
  	}
  	// else if(answer > landmine){
  	// 	boom = answer - landmine;
  	// 	alert(boom);
  	// }
  	// else if(answer < landmine){
  	// 	boom = landmine - answer;
  	// 	alert(boom);
  	// }
  	// else if(answer == landmine){
  	// 	alert("You hit the landmine, GAME OVER!");
  	// }
  	else {
  		alert("Congratulations!  You win!");
  	}
  };	
 result();
</script>

</body>
</html>

// js basic

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  // alert('hi');
  var name = prompt("What is your name?");
  alert("Welcome back, " + name);
</script>

</body>
</html>

// lockbox.html

<html>

<head>
  <title>Javascript Functions</title>
  <style type="text/css">
    .spacer {
      height: 2500px;
    }
    #box {
      display: none;
    }
    #box button {
      height: 35px;
      width: 80px;
      background-color: #7ee1fc;
      border: 2px solid black;
      border-radius: 5px;
      font-family: Helvetica;
      font-weight: bold;
      text-align: center;
      line-height: 19px;
    }
  </style>
</head>

<body>
  <label id="counter">Clicks: 0</label>
  <div class="spacer">
    Scroll down (all the way down)
  </div>

  <p>
    You see a box.
    <a id="open-link" href="#">Open the box</a>
  </p>

  <p id="box">
    Surprise!
    <button>Close Box</button>
  </p>

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function(){
      var num_clicks = 0;
      $(this).on('click', function(e){
        num_clicks++;
        $('#counter').text("Clicks: " + num_clicks);
        $(this).trigger('new-click-count', num_clicks);
      });

      $(this).on('new-click-count', function(e, num_clicks){
        if(num_clicks%5===0){
          alert("New High Score: " + num_clicks + "!");
        };
      })
      $('#open-link').on('click', function (e) {
        e.preventDefault();
        $("#box").show();
        // alert("lol it's locked.");
      });

      $("button").on('click', function(e){
        $('#box').hide();
      });


    });
  </script>

</body>
</html>

// review ex 2 

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  // alert('hi');
  var number = prompt("Please enter a number, any number will do?");
  if(number % 7 == 0){
  	alert("Well well, it's your lucky day!  You win teh internetz!");
  }
  else if(number % 2 == 0){
  	alert("Even steven!");
  }
  else {
  	alert("meh");
  }
  
</script>

</body>
</html>

// ex 3-1.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name as well?");
  alert("It's nice to meet you " + firstName + " " + lastName + ".");
</script>

</body>
</html>

// ex 3-2.html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var string = prompt("How are you feeling?");
  alert(string.toUpperCase());
</script>

</body>
</html>

// ex 3.3 html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var firstName = prompt("What is your first name?");
  var lastName = prompt("What is your last name?");
  alert("Hi " + firstName + " " + lastName.toUpperCase() + ".");
</script>

</body>
</html>

// ex 4 html
<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  var age = prompt("What is your age?");
  if(age > 0 && age < 21){
  	alert("You can't come in!");
  }
  else if(age >= 21 && age <= 100){
  	alert("Welcome!");
  }
  else
  {
  	alert("You take me for a joke?!?!  This ain't a game!");
  }
</script>

</body>
</html>

// js basic html

<html>
<head>
  <title>Javascript Bare</title>
</head>
<body>

<script type="text/javascript">
  // alert('hi');
  var name = prompt("What is your name?");
  alert("Welcome back, " + name);
</script>

</body>
</html>



