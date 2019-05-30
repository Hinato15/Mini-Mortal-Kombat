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

    /* Fonction de combat */







    /* Action au click sur une des cases de déplacement */

    $(document).on("click", ".move", function () {
        
         $(".move").removeClass("move");
         
           /* Deplacement des Joueurs */
        
             if ($(".activePlayer").hasClass("playerOne"))
        {
            gameFunction.playerDisplacement("playerOne", "playerTwo", $(this));
        } else {
            gameFunction.playerDisplacement("playerTwo", "playerOne", $(this));
        }

       

      

        
        
            let idPlayer = parseInt($(".playerOne").attr("id"));


        /* Action au ramassage des armes */
        if (($(`#${idPlayer + 1}`).hasClass("playerTwo")) || ($(`#${idPlayer - 1}`).hasClass("playerTwo")) || ($(`#${idPlayer + 10}`).hasClass("playerTwo")) || ($(`#${idPlayer - 10}`).hasClass("playerTwo")))
        {
            gameFunction.playerFight();


        } else {
            
                /* Joueur 1 */
              
                    
             
           
                if ($(".activePlayer").hasClass("fusil") && $(".playerOne").hasClass("fusil"))
            {

                $(".playerOne").removeClass("fusil").addClass($(".joueurArme1").html());

              // playerStatOne.arme = fusil.nom;
                $(".joueurArme1").html(fusil.nom);
                $(".degatsArme1").html(fusil.degats);

            } else if ($(".activePlayer").hasClass("fusilaPompe") && $(".playerOne").hasClass("fusilaPompe")) {

                $(".playerOne").removeClass("fusilaPompe").addClass($(".joueurArme1").html());

              //  playerStatOne.arme = fusilaPompe.nom;
                $(".joueurArme1").html(fusilaPompe.nom);
                $(".degatsArme1").html(fusilaPompe.degats);




            } else if ($(".activePlayer").hasClass("lanceRoquette") && $(".playerOne").hasClass("lanceRoquette")) {

                $(".playerOne").removeClass("lanceRoquette").addClass($(".joueurArme1").html());

               // playerStatOne.arme = lanceRoquette.nom;
                $(".joueurArme1").html(lanceRoquette.nom);
                $(".degatsArme1").html(lanceRoquette.degats);

            } else if ($(".activePlayer").hasClass("couteau") && $(".playerOne").hasClass("couteau")) {

                $(".playerOne").removeClass("couteau").addClass($(".joueurArme1").html());

              //  playerStatOne.arme = lanceRoquette.nom;
                $(".joueurArme1").html(couteau.nom);
                $(".degatsArme1").html(couteau.degats);

            }
           


            


            



            // gameFunction.playerWeapon("playerOne", "1", playerStatOne, tabWeapons);

            /* Joueur 2 */


            if ($(".playerTwo").hasClass("fusil") && $(".activePlayer").hasClass("fusil"))
            {
                $(".playerTwo").removeClass("fusil").addClass($(".joueurArme2").html());


              //  playerStatTwo.arme = fusil.nom;
                $(".joueurArme2").html(fusil.nom);
                $(".degatsArme2").html(fusil.degats);

                //   $(".playerTwo").removeClass($(".joueurArme2").html());


            } else if ($(".playerTwo").hasClass("fusilaPompe") && $(".activePlayer").hasClass("fusilaPompe")) {

                $(".playerTwo").removeClass("fusilaPompe").addClass($(".joueurArme2").html());


              //  playerStatTwo.arme = fusilaPompe.nom;
                $(".joueurArme2").html(fusilaPompe.nom);
                $(".degatsArme2").html(fusilaPompe.degats);

                //   $(".playerTwo").removeClass($(".joueurArme2").html());


            } else if ($(".playerTwo").hasClass("lanceRoquette") && $(".activePlayer").hasClass("lanceRoquette")) {

                $(".playerTwo").removeClass("lanceRoquette").addClass($(".joueurArme2").html());


                //playerStatTwo.arme = lanceRoquette.nom;
                $(".joueurArme2").html(lanceRoquette.nom);
                $(".degatsArme2").html(lanceRoquette.degats);

                // $(".playerTwo").removeClass($(".joueurArme2").html());


            } else if ($(".playerTwo").hasClass("couteau") && $(".activePlayer").hasClass("couteau")) {
                $(".playerTwo").removeClass("couteau").addClass($(".joueurArme2").html());

                //  playerStatOne.arme = lanceRoquette.nom;
                $(".joueurArme2").html(couteau.nom);
                $(".degatsArme2").html(couteau.degats);

                //  $(".playerTwo").removeClass($(".joueurArme2").html());
            }
            
       
            game.selectMoveBox();

        }

    });
});