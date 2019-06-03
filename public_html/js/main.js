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

    let fusil = new Weapons("fusil", 20);
    let fusilaPompe = new Weapons("fusilaPompe", 30);
    let lanceRoquette = new Weapons("lanceRoquette", 40);

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

        /* Si les joueurs sont cote à cote on lance le combat */

        if (($(`#${idPlayer + 1}`).hasClass("playerTwo")) || ($(`#${idPlayer - 1}`).hasClass("playerTwo")) || ($(`#${idPlayer + 10}`).hasClass("playerTwo")) || ($(`#${idPlayer - 10}`).hasClass("playerTwo")))
        {
            /* Fonction de combat */


            gameFunction.playerFight();


        } else {

            /* Action au ramassage des armes */

            if ($(this).hasClass("weapon")) {


                /* Joueur 1 */
                if ($(this).hasClass("playerOne"))
                {
                    gameFunction.playerWeapon(".joueurArme1", ".degatsArme1", $(this));
                } else {
                    gameFunction.playerWeapon(".joueurArme2", ".degatsArme2", $(this));
                }
            }




            game.selectMoveBox();


        }

    });
});