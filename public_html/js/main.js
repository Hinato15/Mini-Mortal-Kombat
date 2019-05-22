$(document).ready(function () {

    /* Recuperation des noms des joueurs */

    //  let playerOneName = prompt("Entrer le nom du joueur 1");
    //  let playerTwoName = prompt("Entrer le nom du joueur 2");

    /* Generation du Plateau de jeu */

    game.initPlateau();

    /* Generation des murs */

    game.generateWall();

    /* Generation des armes */

    let couteau = new Weapons("couteau", 10, "./css/image/couteau.png");

    let fusil = new Weapons("fusil", 15, "./css/image/fusil.png");
    let fusilaPompe = new Weapons("fusilaPompe", 20, "./css/image/fusilapompe.png");
    let lanceRoquette = new Weapons("lanceRoquette", 25, "./css/image/lanceroquette.png");

    let tabWeapons = [];

    tabWeapons.push(fusil, fusilaPompe, lanceRoquette);

    game.generateWeapons(tabWeapons);

    /* Generation des Stats */

    /*  let playerStatOne = new playerStat(1, playerOneName, "couteau", 100);
     let playerStatTwo = new playerStat(2, playerTwoName, "couteau", 100);
     
     game.playerStat(playerStatOne);
     game.playerStat(playerStatTwo);
     
     /* Placement des Joueurs */

    let playerOne = new Player("One", "./css/image/joueurUn.png");
    let playerTwo = new Player("Two", "./css/image/joueurDeux.png");

    let tabPlayers = [];

    tabPlayers.push(playerOne, playerTwo);

    game.generatePlayer(tabPlayers);

    /* Placement des Cases de deplacements des Joueurs */

    game.selectMoveBox();
    
    /* Mouvement des Joueurs */
    
    game.movePlayer();

});

