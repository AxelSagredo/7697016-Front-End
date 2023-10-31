const response = await fetch("pieces-auto.json")
const pieces = await response.json()
console.log("hey")

const article1 = pieces[0]
const imageElement = document.createElement("img")
imageElement.src = article1.image
const nomElement = document.createElement("h2")
nomElement.innerText = article1.nom
const prixElement = document.createElement("p")
prixElement.innerText = `Prix : ${article1.prix}€` 
const categorieElement = document.createElement("p")
categorieElement = article1.categorie 
console.log("salut")

const sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imageElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)
console.log("coucou")