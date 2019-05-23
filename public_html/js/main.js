$(document).ready(function () {

    /* Recuperation des noms des joueurs */

    //  let playerOneName = prompt("Entrer le nom du joueur 1");
    //  let playerTwoName = prompt("Entrer le nom du joueur 2");

    /* Generation du Plateau de jeu */

    game.initPlateau();

    /* Generation des murs */

    game.generateWall();

    /* Generation des armes */

    let couteau = new Weapons("couteau", 10);

    let fusil = new Weapons("fusil", 15);
    let fusilaPompe = new Weapons("fusilaPompe", 20);
    let lanceRoquette = new Weapons("lanceRoquette", 25);

    let tabWeapons = [];

    tabWeapons.push(fusil, fusilaPompe, lanceRoquette);

    game.generateWeapons(tabWeapons);
     
     /* Placement des Joueurs */

    let playerOne = new Player("One", 100);
    let playerTwo = new Player("Two", 100);

    let tabPlayers = [];

    tabPlayers.push(playerOne, playerTwo);

    game.generatePlayer(tabPlayers);
    
    /* Generation des Stats */

     let playerStatOne = new playerStat(1, "Valentin", couteau.nom, couteau.degats, playerOne.vie);
     let playerStatTwo = new playerStat(2, "Alan", couteau.nom, couteau.degats, playerTwo.vie);
     
     game.playerStat(playerStatOne);
     game.playerStat(playerStatTwo);

    /* Placement des Cases de deplacements des Joueurs */

    game.selectMoveBox();



/* Mouvement des Joueurs */

$(document).on("click", ".move", function () {
    
    let activePlayer = $("#main_game").find(".activePlayer");
    
    $(".move").removeClass("move");
    
    /* Deplacement des Joueurs */
    
    
    if($(".activePlayer").hasClass("playerOne"))
    {
        $(this).addClass("playerOne player").removeClass("vide");
        activePlayer.removeClass("playerOne player activePlayer");
        $(".playerTwo").addClass("activePlayer");
        
      //  gameFunction.playerDisplacement("playerOne","playerTwo",$(this));
    } else {
        $(this).addClass("playerTwo player").removeClass("vide");
        activePlayer.removeClass("playerTwo player activePlayer");
         $(".playerOne").addClass("activePlayer");
        
      //  gameFunction.playerDisplacement("playerTwo","playerOne",$(this));
    }
    
    game.selectMoveBox();
    
    /* Action Arme */
    
    /* Joueur 1 */
    
    if($(".playerOne").hasClass("fusil"))
    {
          playerStatOne.arme = fusil.nom;
          $(".joueurArme1").html(`Arme: ${fusil.nom}`);
          $(".degatsArme1").html(`Degats Arme: ${fusil.degats}`);
          
          $(this).removeClass("fusil").addClass("couteau");
          
    } else if ($(".playerOne").hasClass("fusilaPompe")) {
        
        playerStatOne.arme = fusilaPompe.nom;
          $(".joueurArme1").html(`Arme: ${fusilaPompe.nom}`);
          $(".degatsArme1").html(`Degats Arme: ${fusilaPompe.degats}`);
          
          $(this).removeClass("fusilaPompe").addClass("couteau");
        
    }  else if ($(".playerOne").hasClass("lanceRoquette")) {
        
        playerStatOne.arme = lanceRoquette.nom;
          $(".joueurArme1").html(`Arme: ${lanceRoquette.nom}`);
          $(".degatsArme1").html(`Degats Arme: ${lanceRoquette.degats}`);
          
          $(this).removeClass("lanceRoquette").addClass("couteau");
          
        
    }
    
   // gameFunction.playerWeapon("playerOne", "1", playerStatOne, tabWeapons);
    
    /* Joueur 2 */
    
    if($(".playerTwo").hasClass("fusil"))
    {
          playerStatOne.arme = fusil.nom;
          $(".joueurArme2").html(`Arme: ${fusil.nom}`);
          $(".degatsArme2").html(`Degats Arme: ${fusil.degats}`);
          
          $(this).removeClass("fusil").addClass("couteau");
          
    } else if ($(".playerTwo").hasClass("fusilaPompe")) {
        
        playerStatOne.arme = fusilaPompe.nom;
          $(".joueurArme2").html(`Arme: ${fusilaPompe.nom}`);
          $(".degatsArme2").html(`Degats Arme: ${fusilaPompe.degats}`);
          
          $(this).removeClass("fusilaPompe").addClass("couteau");
        
    }  else if ($(".playerTwo").hasClass("lanceRoquette")) {
        
        playerStatOne.arme = lanceRoquette.nom;
          $(".joueurArme2").html(`Arme: ${lanceRoquette.nom}`);
          $(".degatsArme2").html(`Degats Arme: ${lanceRoquette.degats}`);
          
          $(this).removeClass("lanceRoquette").addClass("couteau");
        
    }
    
    
    
    
});

});