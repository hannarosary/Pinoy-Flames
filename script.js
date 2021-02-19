document.getElementById("btnEnter").addEventListener("click", flames); //clicking the enter button to know the flames of each other
document.getElementById("btnClear").addEventListener("click", clearFlames); //clicking the clear button to clear both text fields

function flames(yours, partner, output){
    var listOfFlames = ['None of the Above', 'Friends', 'Love', 'Accept', 'Marriage', 'Enemy', 'Sweet'];

    //getting rid of spaces
    var yoursNoSpace = yours.value.toLowerCase().trim().split(" ");
    var partnerNoSpace = partner.value.toLowerCase().trim().split(" ");

    var newYours = "", newPartner = "", merged = "", newMerged = "";
    /*
    newYours, newPartner - value without spaces left behind
    merged - combined names of yours and partner
    newMerged - a new value of merged that having common letters between yours and partner are removed
    */

    var sameLetters = new Array (); //a container of common letters

    var ctrX, ctrY, repeat = 0;
    /*
    ctrX - parent for loop
    ctrY - child for loop
    repeat - number of removed letters
    */

    //This is how to remove spaces between words
    for(ctrX=0; ctrX<yoursNoSpace.length; ctrX++){
        newYours += yoursNoSpace[ctrX];
    }
    for(ctrY=0; ctrY<partnerNoSpace.length; ctrY++){
        newPartner += partnerNoSpace[ctrY];
        console.log(newPartner);
    }

    merged = newYours + newPartner;

    //if there are common letters
    for(ctrX=0; ctrX<newYours.length; ctrX++){
        for(ctrY=0; ctrY<newPartner.length; ctrY++){
            if(newPartner[ctrY] == newYours[ctrX]){
                sameLetters.push(newYours[ctrX]);
            }
        }
    }

    //removing common letters
    for(ctrX=0; ctrX<sameLetters.length; ctrX++){
        for(ctrY=0; ctrY<merged.length; ctrY++){
            if(merged[ctrY] == sameLetters[ctrX]){
                newMerged = merged.replace(sameLetters[ctrX], "");
                merged = newMerged;
                repeat++;
            }
        }
    }

    //making it less than or equal to 6
    while(repeat > 6){
        repeat-=6;
    }

    //output
    output.innerHTML = listOfFlames[repeat];
}

//clearing both text fields
function clearFlames(){
    yours.value = "";
    partner.value = "";
    output.value = "";
}

function main(yours, partner){
    yours = document.getElementById("yourName"); //your name
    partner = document.getElementById("partnerName"); //your partner's/crush's name
    var output = document.getElementById("output"); //output
    
    flames(yours, partner, output);
    clearFlames(yours, partner, output);
}

