function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    // alert("It works!");

    // get form values
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var adjective5 = document.getElementById('adjective5').value;
    var italianword1 = document.getElementById('italianword1').value;
    var city1 = document.getElementById('city1').value;
    var occupation1 = document.getElementById('occupation1').value;
    var pasttense1 = document.getElementById('pasttense1').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var pluralnoun3 = document.getElementById('pluralnoun3').value;
    var pluralnoun4 = document.getElementById('pluralnoun4').value;










    // Set title of story.
    var title = "napoleon";


    // Build story.
    var paragraph1 = "Although he was Emperor of France, Napoleon Bonaparte was actually a Coriscan, born on a small " + noun1 + " in the Meditteranean Sea. When he was just ten years old, Napoleon was sent to a military " + noun2 + " in France, where his " + adjective1 + " stature earned him the nickname of The " + adjective2 + " Corporal. At 24, he was made an " + adjective3 + " General and married Josephine, the daughter of a well-known Parisian " + noun3 + ". Soon after that, he defeated the Italians at " + italianword1 + " and in 1804 was proclaimed Emperor of all the " + pluralnoun1 + ". But he made an " + adjective4 + " mistake and attacked Russia. He reached Moscow, but the " + pluralnoun2 + " had burned all their " + pluralnoun3 + " and his men got frozen " + pluralnoun4 + ". In 1914, he was "
    + pasttense1 + " and sent to Elba. But a year later, he came back to France and for 100 days was again the " + occupation1 + ". However, he was defeated at Waterloo and imprisoned on the island of St.Helena, an " + adjective5 + " place which resembled " + city1 + ".";



    // Display story.
    document.getElementById('one').innerHTML = paragraph1;

}
