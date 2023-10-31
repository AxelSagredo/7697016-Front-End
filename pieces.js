const response = await fetch("pieces-autos.json")
const pieces = await response.json()

const article1 = pieces[2]
var imageElement = document.createElement("img")
imageElement.src = article1.image
var nomElement = document.createElement("h2")
nomElement.innerText = article1.nom
var prixElement = document.createElement("p")
prixElement.innerText = `Prix : ${article1.prix}€ (${article1.prix <= 35 ? "€" : "€€€"})` 
var categorieElement = document.createElement("p")
categorieElement.innerText = article1.categorie ?? "Aucune catégorie"
var descriptionElement = document.createElement("p")
descriptionElement.innerText = article1.description ?? "Pas de description pour le moment..."
var disponibiliteElement = document.createElement("p")
disponibiliteElement.innerText = article1.disponibilite ? "En stock" : "Rupture de stock"

var sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imageElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)
sectionFiches.appendChild(descriptionElement)
sectionFiches.appendChild(disponibiliteElement)