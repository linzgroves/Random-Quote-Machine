//Array of quotes
function GetValue() {
var quotes = [
  ['"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind." - Dr. Seuss'],
  ['"Whenever you find yourself on the side of the majority, it is time to pause and reflect." - Mark Twain'],
  ['"Do what you can, with what you have, where you are." - Theodore Roosevelt'],
  ['"Be yourself; everyone else is already taken." - Oscar Wilde'],
  ['"To find yourself, think for yourself." - Socrates'],
  ['"The computing scientist’s main challenge is not to get confused by the complexities of his own making." - E. W. Dijkstra'],
  ['"One of my most productive days was throwing away 1000 lines of code." - Ken Thompson'],
  ['"Deleted code is debugged code." - Jeff Sickel'],
  ['"A program that produces incorrect results twice as fast is infinitely slower." - John Osterhout'],
  ['"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates'],
];

var random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("message").innerHTML=random;
}  
