 //function definition - tager form element som parameter
 function validate(formElm) { //her ligger min validate function som jeg kalder i min html 
    // det indeni () er op til mig hvad det hedder

    let state = true; //definerer at state er true, altså har en værdi
    const inputs = document.querySelectorAll(':required'); //inputs bliver defineret ved alle required felterne i HTML'en (den laver et array, ALL = [])
    

    for (let input of inputs) { //en variabel (input) som samler data fra min inputs variabel
        if (!input.value){ // hvis der ingen værdi er i input varianblen
            console.log(input.type);
            setError(input, 'Du skal udfylde feltet'); //er her jeg laver min setError til input felterne
            state = false;  // her giver vi state en falsk vÃ¦rdi
            return false; //hopper ud af loopet med return false
        } else if (input.className == 'text'){ // her spørger jeg om class er = text (den jeg har givet til tekst felterne)
            if (!isValidAlpha(input.value)){ //hvis der er andet end bogstaver i inputfelterne
                setError(input, `Der må kun være bogstaver i feltet`); //sættes teksten ...
                state = false; //state bliver sat til false
                return false; //return false = der brydes ud af loopet
            }
        }
            else if (input.className == 'number'){ //er class= number (givet i html)
            if (!isValidNumber(input.value)){ // hvis der er andet end tal i inputfelterne
                setError(input, `Der må kun være tal i feltet`); //sættes teksten...
                state = false;
                return false;
            }
        }
        else if (input.className == 'email'){ //er class= email (givet i html)
            if (!isValidEmail(input.value)){ //hvis der ikke er indtastet en gyldig email
                setError(input, `Du har ikke indtastet en gyldig`); //sættes teksten
                state = false;
                return false;
            }
        }
    }
    if (state) { // hvis state er true, så gør js ind i det her --> sender en alert
        if(!document.querySelector('.success')){
            let div = document.createElement('div');
            div.classList.add('success');
            div.innerText = 'Formularen er sendt';
            document.getElementById('form').appendChild(div);
            //alert('Formularen er sendt'); her kunne det være en action fra html      !!!!!!!!!!!!!!!!!!!!!!!
        }
    }
    
 }
 //javaScript er ligeglad med hvor du placerer dine functions den skal nok finde dem
 function setError(element, text) { //her henviser jeg elementet (input) 
     // her viser vi element(input) --> sibling over input = label --> innertext
        element.classList.add('error'); //tilføjer en 'error' class til elementet (input) hvis der er en fejl
    if (!element.nextElementSibling){ //her definerer vi at vi skal ind i loopet HVIS input feltet er false
        let strError = `<br /><span class="errormessage"> ${text} ${element.placeholder.toLowerCase()}</span>`// declarerer strError og giver den vÃ¦rdien span med tekst indeni 
        // "${element.previousElementSibling.innerText.toLowerCase()}" det er den her der giver os label indholdet og laver forbogstavet smÃ¥t
        element.insertAdjacentHTML('afterend', strError); //inputfeltet får tilføjet str error og at den bliver placeret afterend = bagved inputfeltet
    }
    element.addEventListener('keydown', function(){ //en lytter på vores input felt som reagerer pÃ¥ keydown (alle taster) og kÃ¸rer funktionen hvos der tastes
        if (element.nextElementSibling){ //hvis der er inhold i input felterne (true) altsÃ¥ at der er en next sibling
            element.nextElementSibling.remove(); //så fjerner funktionen .errormessage
        }
    
        element.classList.remove('error'); //fjerner .error hvis den bliver rettet og sendt 
    })
 }
//Tjekker om værdi er et nummer
function isValidNumber(value) {
    let pattern = /^[0-9]+$/;
    return pattern.test(value);
}

//Tjekker om værdi er alfabet
function isValidAlpha(value) {
    let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
    return pattern.test(value);
}

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}

//Tjekker at værdi har en gyldig længde
function isValidLength(value, min, max) {
    let pattern = RegExp('^[0-9A-Za-z@#$%]{'+min+','+max+'}$');
    return pattern.test(value);
}


function testFunction(){
    let input = document.getElementById("cakePic");
    const [file] = input.files;
    if (file) {
        let img = document.getElementById("testImg");
        img.src = URL.createObjectURL(file)
    }
  }

  function optionalFunction(){
      let optionalInput = document.getElementById("personPic");
      const [optionalFile] = optionalInput.files;
      if(optionalFile) {
          let optionalImg = document.getElementById("optionalImg");
          optionalImg.src = URL.createObjectURL(optionalFile);
      }
  }