let carte = document.querySelector('.card');
let btnCta = document.getElementById('btnCta');

btnCta.addEventListener('click', function() {
    //ajouter une classe
    //carte.classList.add('cardActive');
    
    
    //retirer une classe et ajouter une autre
    // carte.classList.remove('card');
    // carte.classList.add('cardAlternative');
    

    //basculer une classe
    carte.classList.toggle('cardActive');

    // let li = document.createElement("li");
    // li.textContent = tache;
    // liste.appendChild(li);
});

