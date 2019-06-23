var createPolitician = function(name, partyColor)
{
    
    var politician = {}; 
    politician.name = name; 
    politician.partyColor = partyColor;
    politician.electionResults = null;
    politician.totalVotes = 0;
    
    return politician;
    
  
};
 

var sawyer = createPolitician("Sawyer Brown", [132, 17, 11]);
 
var shiloh = createPolitician("Shiloh McGee", [245, 141, 136]);


console.log("Sawyer's color is: " + sawyer.partyColor);
console.log("Shiloh's color is: " + shiloh.partyColor);


sawyer.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

shiloh.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];                      


sawyer.electionResults[9] = 1;
shiloh.electionResults[9] = 28;
 
sawyer.electionResults[4] = 17;
shiloh.electionResults[4] = 38;

sawyer.electionResults[43] = 11;
shiloh.electionResults[43] = 27;



console.log(sawyer.electionResults);
console.log(shiloh.electionResults);



sawyer.countTotalVotes = function()
{

    this.totalVotes = 0;
 
    for (var i = 0; i < this.electionResults.length; i++)
    {
    
    this.totalVotes = this.totalVotes + this.electionResults[i];
    }   
  
};


shiloh.countTotalVotes = function()
{

    this.totalVotes = 0;
 
    for (var i = 0; i < this.electionResults.length; i++)
    {
    
    this.totalVotes = this.totalVotes + this.electionResults[i];
    }   
  
};

var setStateResults = function(state){
  
  
  theStates[state].winner = null;
 
    if (sawyer.electionResults[state] > shiloh.electionResults[state]) {
        
        theStates[state].winner = sawyer; //set winner to the candidate object, not the candidate's name this time
 
    } else if (shiloh.electionResults[state] < sawyer.electionResults[state]) {
 
        theStates[state].winner = sawyer;
 
    }
  
    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
    } else {
    theStates[state].rgbColor = [11,32,57];
    }

  
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = sawyer.name;
candidate2Name.innerText = shiloh.name;
 
candidate1Results.innerText = sawyer.electionResults[state];
candidate2Results.innerText = shiloh.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}  
  
 
   
}

  
sawyer.countTotalVotes();
shiloh.countTotalVotes();
 
//console log total votes
console.log(sawyer.totalVotes);
console.log(shiloh.totalVotes); 

var winner = "???"
    
if (sawyer.totalVotes > shiloh.totalVotes){
    winner = sawyer.name;
}else if (sawyer.totalVotes < shiloh.totalVotes){
    winner = shiloh.name;
}else{
    winner = "DRAW."
}
 
console.log("AND THE WINNER IS..." + winner + "!!!");


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = sawyer.name;
row.children[1].innerText = sawyer.totalVotes;
row.children[2].innerText = shiloh.name;
row.children[3].innerText = shiloh.totalVotes;
row.children[5].innerText = winner;


var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
