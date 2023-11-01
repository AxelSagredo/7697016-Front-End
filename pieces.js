const response = await fetch("pieces-autos.json")
const pieces = await response.json()
const sectionFiches = document.querySelector(".fiches")

for (var i = 0; i < pieces.length ; i++) {
    const pieceElement = document.appendChild("article")
    const imageElement = document.createElement("img")
    imageElement.src = pieces[i].image
    const nomElement = document.createElement("h2")
    nomElement.innerText = pieces[i].nom
    const prixElement = document.createElement("p")
    prixElement.innerText = `Prix : ${pieces[i].prix}€ (${pieces[i].prix <= 35 ? "€" : "€€€"})` 
    const categorieElement = document.createElement("p")
    categorieElement.innerText = pieces[i].categorie ?? "Aucune catégorie"
    const descriptionElement = document.createElement("p")
    descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment..."
    const disponibiliteElement = document.createElement("p")
    disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock"

    pieceElement.appendChild(imageElement)
    pieceElement.appendChild(nomElement)
    pieceElement.appendChild(prixElement)
    pieceElement.appendChild(categorieElement)
    pieceElement.appendChild(descriptionElement)
    pieceElement.appendChild(disponibiliteElement)
    sectionFiches.appendChild(pieceElement)
}
