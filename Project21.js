<!-- JavaScript solution to Euler project #21 which asks to find the sum of all
so called amicable numbers up to 10000. If s(n) denotes the sum of all divisors 
of n that are less than n itself n is amicable if s(s(n)) = n and n does not equal
s(n). 

The solution comes in form of a website where the user inputs the upper limit for 
which he or she wants to calculate the sum of all amicable numbers. The answer comes out as 31626. 
The form has integer validation. 
© Jimmy Kungsman 2017
-->

<! DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8"/>
	<title>Euler project #21</title>
	<style>
		body{
			background-color: #E6EFF2;
			font-family: "Arial";
		}
		#ansDiv{
			padding: 5%;
			font-style: italic;
		}
	</style>
</head>

<body >
	<h2 id="jsPlay">Euler Project 21 using JavaScript</h2>
	<h3>Calculate sum of amicable numbers up to</h3> 
		<textarea type="textarea" id="upperLimit"/> </textarea> </br>
		<input type="button" onclick = "calc();" value="Calculate!"/> 
	</br>
	<div id="ansDiv"></div>
	
<!--Here is the actual solution to the problem...-->	
	<script language="javascript" type="text/javascript">
		function calc(){
			var ansNode = document.getElementById("ansDiv");
			var upLimit = document.getElementById("upperLimit").value;
			var regex=/[0-9]+$/;
			
			var result = sumAmicable(upLimit); //sum amicable numbers below upper limit
			
    		if (upLimit.match(regex)){ //validation
				var ans = "The sum of all amicable numbers less than "
					+ upLimit + " is " + result + ".</br>";
				ansNode.style.color = "black";
				document.getElementById("ansDiv").innerHTML = ans;
			}
			else{
				var ans = "Please type a positive integer!"; //error message
				ansNode.style.color = "red";
				ansNode.innerHTML = ans;
			}
		}
		
		function sumAmicable(m){
			var sum = 0;
			var upper = Number(m);
			var i = 1;
			
			while(i <= upper){ //check for amicable numbers
				if((i == sumOfDivisors(sumOfDivisors(i))) && (i < sumOfDivisors(i))){
						sum += i + sumOfDivisors(i);
				}
				i++;
			}
			return sum;
		}
		
		function sumOfDivisors(k){
			var sumDiv = 0;
			
			for(i = 1; i<= k/2; i++){
				if((k % i) == 0){
					sumDiv += i;
				}	
			}
			return sumDiv;
		}		
	</script>
	
	<noscript>
		<h3>Turn on JavaScript!</h3>
	</noscript>

</body>
</html>
