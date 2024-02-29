

//assignment -5-

let num_1 = 5;
let num_2 = 6;

number = num_1 + num_2;

console.log( "5 + 6 = ", number);

number = number - 1;

console.log("11 - 1 =", number);

number = number * 2;

console.log("10 * 2 =", number);

number = number ** 2;

console.log( "20 ** 2 =" , number);

number = number % 9;

console.log( "200 % 9 = " , number);

let new_number = number + num_1 + num_2;

console.log( "4 + 5 + 6 = " , new_number);

let number_last = new_number + number + num_1 + num_2;

console.log("15 + 4 + 5 + 6 = " , number_last);

let result_heading = document.createElement("h1");

let text_result_heading = document.createTextNode(

  "calculate in one expression"

  );

  result_heading.appendChild(text_result_heading);

  let last_content = document.getElementById("div3");

  last_content.appendChild(result_heading);

let result_$ = document.createElement("p");

let text_result = document.createTextNode(

  "sum of 15 + 4 + 6 + 5 is = " + number_last

  );

  result_$.appendChild(text_result);

  let last = document.getElementById("div3");

  last.appendChild(result_$);

  document.getElementById("div3").style.textAlign = "center";

  document.getElementById("div3").style.fontSize = "25px";

  document.getElementById("div3").style.fontWeight = "500";

  document.getElementById("div3").style.marginTop = "70px";

  document.getElementById("div3").style.color = "blue";

  document.getElementById("div3").style.fontFamily = "monospace";

let $number;

document.write(" <h3 class = ' numberoperator '> value after declaration is : " + $number + " </h3> ");

$number = 10 ;

initial_value = $number ;

document.write(" <h3 class = ' numberoperator '> initial value is : " + initial_value + "</h3>");

initial_value++;

value_increament = initial_value

document.write(" <h3 class = ' numberoperator '> value after increment is : " + value_increament + "</h3>");

value_increament = value_increament + 18;

add_num = value_increament;


document.write(" <h3 class = ' numberoperator '> value after adding 18  : " + add_num + "</h3>");

add_num--;

decrease_num = add_num

document.write(" <h3 class = ' numberoperator '> value after decrement is : " + decrease_num + "</h3>");

decrease_num = decrease_num % 3 ;

modulus_num = decrease_num; 

document.write(" <h3 class = ' numberoperator '> value after modulus by 3 a reminder is : " + modulus_num + "</h3>");





let Counter = localStorage.getItem (" Counter ");

if (Counter === null){
  Counter = 0;
}
else {
  Counter = parseInt (Counter);
}
Counter++;

localStorage.setItem (" Counter ", Counter);

alert (" you have visited " + Counter + " times.")

let movie_ticket;

ticket_price = 800;

buying_ticket = 5;

total_price = ticket_price * buying_ticket;

console.log(total_price);

let result_of_movie_ticket_1 = document.createElement("h1");

let result_text_1 = document.createTextNode(
  "calculate the cost of 5 movie tickets "
);

result_of_movie_ticket_1.appendChild(result_text_1);

let end_text_1 = document.getElementById("div5");

end_text_1.appendChild(result_of_movie_ticket_1);

let result_of_movie_ticket = document.createElement("h2");

let result_text = document.createTextNode(
  "the cost of buying 5 ticket is " + total_price
);

result_of_movie_ticket.appendChild(result_text);

let end_text = document.getElementById("div5");

end_text.appendChild(result_of_movie_ticket);

document.getElementById("div5").style.textAlign = "center";

document.getElementById("div5").style.marginTop = "50px";

document.getElementById("div5").style.marginBottom = "50px";

document.getElementById("div5").style.color = "green";

document.getElementById("div5").style.textTransform = "capitalize";

document.getElementById("div5").style.fontFamily = "monospace";



document.write("<h1 class = ' tablehead '> table of 7 </h1>")

num = 7;
i = 1;
for (i = 1; i <= 10; i) {

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 1 = " + table_ + " </h2>");
 

  var table_ = num * i++;
 
  document.write(" <h2 class = ' tablecontent ' > 7 * 2 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 3 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 4 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 5 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 6 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 7 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 8 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 9 = " + table_ + " </h2>");

  var table_ = num * i++;

  document.write(" <h2 class = ' tablecontent ' > 7 * 10 = " + table_ + " </h2>");
}





//today karachi weather : caulate celcius or fahrenheit ;

  
document.write(" <h2 class = 'weatherheading' > calculate weather celcius to fahrenheit or fahrenheit to celcius " + "</h2> " )


let celsius = 28 ;
let fahrenheit = 83 ;



calculate_fahrenheit = ( celsius  * 9 / 5 )  +  32 ;



document.write( " <h4 class = 'calculate'> " +  celsius + "\xB0C is "  + calculate_fahrenheit   + "\xB0F </h4> ")

calculate_celcius = ( fahrenheit - 32 ) * 5 / 9 ;



document.write( " <h4 class = 'calculate' > " +  fahrenheit + "\xB0F is "  + calculate_celcius + "\xB0C "  + "</h4>")


 
let shopping_cart;

document.write("<h2 class = ' cartheading '> shopping cart </h2> ");

price_item_1 = 200;

document.write("<h3 class = ' cart-items '> cost of item 1 is " + price_item_1 + " </h3>");

price_item_2 = 400;

document.write("<h3 class = ' cart-items '> cost of item 2 is " + price_item_2 + " </h3>");

order_quantity_1 = 3;

document.write(
  "<h3 class = ' cart-items '> order quantity of item 1 is " + order_quantity_1 + " </h3>"
);
order_quantity_2 = 6;
document.write(
  "<h3 class = ' cart-items '> order quantity of item 2 is " + order_quantity_2 + " </h3>"
);
shipping_charges = 100;
document.write("<h3 class = ' cart-items '> shipping charges " + shipping_charges + " </h3>");

total_cost_of_1 = price_item_1 * order_quantity_1;

total_cost_of_order =

  price_item_2 * order_quantity_2 + shipping_charges + total_cost_of_1;

document.write(

  "<h3  class = ' cart-items '> total cost of your order is " + total_cost_of_order + " </h3>"

);

document.write("<h1 class = 'heading'> student data </h1>")

let total_marks = 980;

document.write("<h3 class = contentall > total marks = " + total_marks + "</h3>");
let obtained_marks = 760;
document.write("<h3 class = contentall > marks obtained = " + obtained_marks + "</h3>");


percentage =  (obtained_marks / total_marks) * 100;

document.write("<h3 class = contentall > percentage = " + percentage + "</h3>" )
;




let doller_in_rs = 140;
let riyal_in_rs = 50;

document.write("<h1 class = 'heading'>currency in PKR </h1>" );

let total_currency = (10 * 140) + (25 * 50) ;

document.write("<h3 class = contentall > total currency in PKR is " + total_currency + "</h3>" );



$number_ = 28;

let one_single_exp = ($number_ + 5 ) * 10 / 2 ;

console.log("calculate in single expression =" , one_single_exp);



current_year = 2024;
birth_year = 2001;

document.write("<h1 class = 'heading'> age calculator </h1>");

document.write(" <h3 class = contentall > current year " + current_year+" </h3> ");

document.write(" <h3 class = contentall > birth year "  + birth_year+" </h3> " );

let calculate_age = current_year - birth_year;

document.write(" <h3 class = contentall > your age is " + calculate_age +" </h3> " );

document.write(" <h1 class = 'heading'> the geometrizer </h1>");

let radius = 50;

document.write(" <h3 class = contentall > radius = " + radius + "</h3>");

let pi = 3.142;

let calculate_circumstance = 2 * radius * pi;

document.write(" <h3 class = contentall > the circumstance is = " + calculate_circumstance + "</h3>");


let calculate_area = pi * radius * radius;

document.write(" <h3 class = contentall > the area is = " + calculate_area + "</h3>");

document.write(" <h1 class = 'heading'> life time supply calculator  </h1> ")


let favourite_snack = "chocolato";

document.write(" <h3 class = contentall > favourite snacks : "  + favourite_snack + " </h3> ");

let current_age = 23;

document.write(" <h3 class = contentall > current age : "  + current_age + " </h3> ");


let maximum_age = 60;

document.write(" <h3 class = contentall > estimate maximum age : "  + maximum_age + " </h3> ")

let eating_per_day = 2;

document.write(" <h3 class = contentall > amount of snacks per day : "  + eating_per_day + " </h3> ")

let need_total_per_day = ( 60 - 23 ) *  2 ;


document.write( " <h3 class = contentall> you will need " + need_total_per_day + " untill the ripe old age of 60. </h3> " )