let modalEle = document.querySelector(".modal");
let modalContainer = document.querySelector('.modalContent')
let modalImage = document.querySelector(".modalImage");

//laver modal variabler

document.querySelector(".close").addEventListener("click", () => {
modalEle.style.display = "none";
modalContainer.innerHTML = "";
})

//sætter display none på modal når man trykker på krydset inde i modal, derudover fjerner den modal containers indhold. Så det resetter.

let infoArr = [
    {imgUrl: "/assets/images/denduvednokkage.jpg", title:"Den du ved nok", recipe: "Dejen: Sukker og æg piskes godt. Mel, vanille, bagepulver og kakao blandes og hældes i dejen skiftevis med mælken. Smelt smørret, afkøl det og hæld det i dejen. Fyldes i en stor bradepande ca. 33x38 cm. Bages ved 190 grader C. alm. ovn i ca. 25 minutter. Når kagen er afkølet smøres den med glasur. <br />Glasur: smør smeltes og røres med færdigbrygget kaffe, kakao og vaniljesukker, kokosmel og flormelis.", ingredients:"Ingredienser til dej: <br /> 500 g sukker, 4 æg, 4 dl sødmælk, 450 g hvedemel, 4 tsk. vaniljesukker. 100 g kokosmel, 375 g flormelis."},
    {imgUrl: "/assets/images/gulerodskage.jpg", title:"Gulerodskage", recipe: "Dejen:<br /> Farin og olie røres sammen, æggene piskes i et af gangen, derefter blandes tør ingredienserne og hældes / røres sammen med reven gulerod. Hældes i bradepande 23x33 cm. og bages ved 185 grader C. alm. ovn i 45 minutter. <br /> Ostecreme: Flødeost, smør, flormelis og vaniljesukker røres sammen. Ostecremen fordeles oven på kagen når denne er kølet af.", ingredients:"Ingredienser til dej: <br /> 300 g brun farin, 2 dl. solsikkeolie/vindruekerneolie, 4 æg, 275 g hvedemel, 1.5 tsk bagepulver, 0.5 tsk salt, 1 tsk natron, 2 tsk stødt kanel, 375 g gulerrøder. Ingredienser til glasur: <br /> 200 g neutral ostecreme, 120 g smør, 180 g flormelis, 2 tsk. vaniljecreme"},
    {imgUrl: "/assets/images/droemmekage.jpg", title:"Drømmekage", recipe: "Dej: Pisk vanilje, sukker og æg sammen, til det er luftigt. Bland bagepulver med mel og vend det forsigtigt i dejen gennem en sigte, så melet ikke klumper. Skær smør i tern og varm det op i en gryde sammen med mælk, når smøret er smeltet, vendes det i dejen og hele dejen kommes i et ovnfast fad beklædt med bagepapir. Jeg bruger et ovnfast på ca. 30 x 24 cm med en god kant på, så der er plads til fyldet. Bag kagen i 30 minutter i en forvarmet ovn ved 175 grader varmluft til den næsten er færdig. <br<br /> Topping: Kom kokosmel, smør, mælk og muscovadosukker i en gryde, varm op til kogepunktet under omrøring og tag straks af varmen. Når kagen er færdig tages den ud af ovnen, som skrues op til 225 grader. Fordel fyldet ud over kagen, og sæt den tilbage i ovnen-bag i yderligere 5 minutter. Lad drømmekagen køle af og så er den klar til at blive nydt.", ingredients: "Ingredienser til dej:<br /> 300 g sukker, 4 æg, 0,5 tsk vaniljepulver, 280 g hvedemel, 3 tsk bagepulver, 2 dl mælk, 65 g smør. <br /><br />  Ingredienser til topping:<br /> 125 g smør, 175 g kokusmel, 250 g brun farin, 1 dl mælk."},
    {imgUrl: "/assets/images/fødselsdagskage.jpg", title:"Fødselsdagskage", recipe: "Chokoladebunde:<br /> Pisk sukker, smør og salt lyst og luftigt - fx med en håndmixer. Pisk æggene i.Bland mel, kakao og natron sammen og rør det i æggeblandingen. Tilsæt kærnemælk og hvidvinseddike og rør dejen godt sammen. Spænd et stykke bagepapir fast mellem ring og bund af en springform (ca. 22 cm i diameter) - smør siderne. Fordel dejen jævnt i springformen og bag kagen midt i ovnen. Lad den køle helt af i formen på en bagerist. Tag kagen ud af formen og fjern bagepapiret. Skær evt. den rundede top af kagen. Del kagen i tre med en brødkniv, så du for tre ens, flade kagebunde. Vaniljecreme:<br /> Flæk vaniljestængerne, skrab vaniljekornene ud og bland dem med lidt flormelis for at få vaniljekornene skilt ad. <br />Fyld og pynt:<br /> Skyl jordbærrene og skær dem i halve eller kvarte - alt efter størrelse. Læg chokoladebundene lagvis sammen med vaniljecreme og jordbær - afslut med ekstra jordbær. Pynt med jordbær, spiselige blomster eller citronmelisse og fødselsdagsflag.", ingredients:"<strong>Chokoladebunde:</strong> Sukker (ca. 3.5 dl), Blødt smør i mindre stykkker (125g), groft salt (0.5 tsk), æg (2), hvedemel (ca. 5 dl), kakaopulver (4 spsk), natron (1 tsk), kærnemælk (2.5 dl), hvidvinseddike (1 spsk). <br />Vaniljecreme: Vaniljestænger (2), flormelis (3 spsk), Karolines Køkken Kvark (2.5 dl), Karolines Køkken Piskefløde (0.5 l), grofthakket mørk chokolade (ca. 55% kakao 100g) Fyld og pynt: Friske jordbær (500 g), spiselige blomster eller citronmelisseblade, fødselsdagsflag."}
]
//array med 4 objekter der har 4 properties. Ingredients, recipe, title og imgurl.


for (let x = 0; x < infoArr.length; x++){
    let container = document.getElementById('container')
    let img = document.createElement('img')
    img.src = infoArr[x].imgUrl
    img.onclick = (event) => modalContent(event)
    img.id = x
    container.append(img)
}

//looper arrayet og laver en container, og et image. Image sourcen bliver fundet ved at klikke på det pågældene billede. Når man klikker på billedet kører den funktionen modalContent, og giver billedet et id tilsvarende dets index tal, herefter appendes billedet til containeren. 


function modalContent(e){
    console.log(e.target.id)
    modalEle.style.display = "block"
    let modalTitle = document.createElement('h2')
    let modalRecipe = document.createElement('p')
    let modalIngredients = document.createElement('p')
    modalTitle.style.color = "white"
    modalRecipe.style.color = "white"
    modalIngredients.style.color = "white"
    modalTitle.innerText = infoArr[e.target.id].title
    modalRecipe.innerHTML = infoArr[e.target.id].recipe
    modalIngredients.innerHTML = infoArr[e.target.id].ingredients
    let img = document.createElement('img')
    img.src = infoArr[e.target.id].imgUrl
    modalContainer.append(modalTitle)
    modalContainer.append(img)
    modalContainer.append(modalRecipe)
    modalContainer.append(modalIngredients)
}

//Sætter modalEle til at blive displayed, herefter laver den tekst for recipe, title og ingredients. Title har innerText og de to andre har innerHTML fordi ellers kan man ikke bruge <br />. InnerText og innerHTML bliver sat ved at pege på arrayets target id og den tilsvarende property. Derudover laver den et billede og sætter sourcen til target id imgUrl. Til sidst appender den elementerne til modalContainer.





//img onclick skal ta id fra img og bruge det id til at displaye billedet i modal


