// Global Variables 
// Moment
let date = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let hour = moment().format('h:mm:ss a');
// Date and Hour
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");
let sevenPm = $("#19pm");
let hour = moment().hours();
let userInput;
let hourSpan;

// Functions 
let interval = setInterval(function() {
    var momentNow = moment();
    $('#time-display').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#time-display').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function background () {
    $(".form-control").each(function () {
        let timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
            if (hour > timeTest) {
                $(this).addClass("past");
            } else if (hour < timeTest) {
                $(this).addClass("future");
            } else {
                $(this).addClass("present");
            }
    });
}

$(document).ready(function(){
    initPage();
    background();

$(".saveBtn").on("click", function(){
            userInput = $(this).siblings(".form-control").val().trim();
            hourSpan = $(this).siblings(".input-group-prepend").text().trim();
            localStorage.setItem(hourSpan, JSON.stringify(userInput));
        
})

$("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
}) 
});

// Initialization 
function initPage() {
    let init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);
  
    let init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);
    
    let init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(init11);
    
    let init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(init12);
    
    let init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(init1);
    
    let init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(init2);
    
    let init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(init3);
   
    let init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init4);
    
    let init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(init5);
    
    let init6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(init6);
    
    let init7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(init7);
  } 