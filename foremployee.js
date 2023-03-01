function clickSimulate(){
    document.getElementById('fichier').click();
}


function afficherCV(){


    var nomPrenom =document.formCV.nom.value;
    var dateNaissance=new Date (document.formCV.dateNaissance.value);
    let dateLocale =dateNaissance.toLocaleDateString('fr-FR',{weekday: 'long',year:'numeric', month:'long', day:'numeric'});
    
    //radio box
    let listeR=document.getElementsByName('etatCivil');
    let etatCivil="";
    for(let i=0; i< listeR.length; i++)
    {
        if (listeR[i].checked)
            etatCivil=listeR[i].value;
    }

    let nbEnfants=0;
    if (etatCivil=="celibataire"){
        nbEnfants=0;
        document.formCV.nbEnfants.value=0;}
    else
        { nbEnfants= Number(document.formCV.nbEnfants.value);}
    let adresse = document.formCV.adresse.value;


    //affichage info perso
    var infosPerso="Je m'appelle " +nomPrenom+ ", je suis né le "+ dateLocale +". Je suis "+ etatCivil+ " et j'ai "+nbEnfants+ " enfants." +"\nVoici mon adresse email : "+adresse; 
    let str1=document.getElementById('p1');
    str1.innerHTML=infosPerso;


    //boîtes à cocher
    let listeCHK = document.getElementsByName('diplomes');
    let diplome="";
    for (let i = 0; i < listeCHK.length; i++) 
    {
        if (listeCHK[i].checked) 
            diplome +=listeCHK[i].value;
    }


    //listes de choix
    let select = document.getElementById('competences');
    listeComp = "";
    for (let i=0; i<select.length; i++) 
    {
        if (select[i].selected) 
            listeComp += select[i].value + ', ';
    }


    let selectUniversite = document.getElementById('universite');
    let universite = selectUniversite[selectUniversite.selectedIndex].value;


    //affichage cursus et comp
    var competences= "j'ai les diplomes suivants : " + diplome + ", je suis compétant en : " + listeComp +" et j'appartenait à l'université de "+ universite;
    let str2=document.getElementById('p2');
    str2.innerHTML=competences;
}

function activer()
    { document.getElementById('nbEnfants').disabled = false; }

function desactiver() 
    { document.getElementById('nbEnfants').disabled = true; }


function testConfirmDialog()  {
    var result = confirm("Voulez vous vraiment réinitialiser la page ?");
    if(result)  {
        alert("Page réinitialisée !");
    } else {
        alert("Demande annulée !");
    }
}