// afficher les teddies dans la page d'accueil
class Teddies{
    constructor(jsonTeddies){
        jsonTeddies && Object.assign(this, jsonTeddies);
    }
}


class TeddiesManager{
    constructor(listTeddies){
        this.listTeddies = listTeddies;
    }

    sort(){
        return this.listTeddies.sort((a, b) => {
            return (a.description) < (b.description)?1:-1;
        });
    }
}

/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

    fetch("http://localhost:3000/api/teddies").then(data => data.json())
        .then(jsonListTeddies => {
            for (let jsonTeddies of jsonListTeddies) {
                let teddies = new Teddies(jsonTeddies);
                document.querySelector(".justifyProduits").innerHTML += `


                                                                    <!--produit à l'unité-->
                                                                    <article class="produit">
                                                                       <div class="imgContainer">
                                                                       <img src="${teddies.imageUrl}" alt="product" class="imgProduit">
                                                                       <a href="../../frontend/html/description.html" > <button class="boutonDetails" data-id="${teddies._id}">
                                                                       <i class="fas fa-question-circle"></i>                                                                    
                                                                       <h3>${teddies.name}</h3>
                                                                   </button></a>
                                                                     </div>
                                                               
                                                                    
                                                                   </article>
                                                                   <!-- fin produit à l'unité-->
                                                                    `;
            }

        });
