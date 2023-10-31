const response = await fetch("pieces-autos.json")
const pieces = await response.json()

const article1 = pieces[0]
var imageElement = document.createElement("img")
imageElement.src = article1.image
var nomElement = document.createElement("h2")
nomElement.innerText = article1.nom
var prixElement = document.createElement("p")
prixElement.innerText = `Prix : ${article1.prix}€` 
var categorieElement = document.createElement("p")
categorieElement.innerText = article1.categorie ?? "Pas de catégorie" 

var sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imageElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)

const article2 = pieces[1]
imageElement = document.createElement("img")
imageElement.src = article1.image
nomElement = document.createElement("h2")
nomElement.innerText = article1.nom
prixElement = document.createElement("p")
prixElement.innerText = `Prix : ${article1.prix}€` 
categorieElement = document.createElement("p")
categorieElement.innerText = article1.categorie ?? "Pas de catégorie" 

sectionFiches.appendChild(imageElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)