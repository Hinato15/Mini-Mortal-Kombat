let gameFunction = {

    /* Gere le deplacement lateral des joueurs */

    lateralDisplacement: function (signe) {

        let activePlayer = $(".activePlayer").attr("id");

        let result = 0;
        let nbM = 0;

        for (let i = 1; i < 4; i++)
        {
            if (signe == "+")
            {
                result = parseInt(activePlayer) + i;
            } else {
                result = parseInt(activePlayer) - i;
                nbM = 9;
            }

            if (result % game.column != nbM)
            {

                if ($(`#${result}`).hasClass("wall") || $(`#${result}`).hasClass("player"))
                {
                    break;

                } else {
                    $(`#${result}`).addClass("move");
                }

            } else {
                break;
            }
        }
    },

    /* Gere le vertical lateral des joueurs */

    verticalDisplacement: function (signe) {

        let activePlayer = $(".activePlayer").attr("id");

        let moveCase = 0;

        let columnTest;

        if (signe == "+")
        {
            moveCase = 10;
        } else {
            moveCase = -10;
        }

        for (let i = 0; i < 3; i++)
        {

            let result = parseInt(activePlayer) + moveCase;

            if (signe == "+")
            {
                moveCase += 10;
                columnTest = result < 100;

            } else {
                moveCase -= 10;
                columnTest = result >= 0;

            }

            if (columnTest)
            {
                if ($(`#${result}`).hasClass("wall") || $(`#${result}`).hasClass("player"))
                {
                    break;

                } else {

                    $(`#${result}`).addClass("move");
                }
            } else {
                break;
            }

        }

    },

    /* Gere le changement de joueur actif */

    playerDisplacement: function (firstPlayer, secondPlayer, thisCase) {

        thisCase.addClass(`${firstPlayer} player`).removeClass("vide");
        $(".activePlayer").removeClass(`${firstPlayer} player activePlayer`);
        $(`.${secondPlayer}`).addClass("activePlayer");

    },

    /* On donne l'arme ramassee au joueur et on dépose l'arme qu'il porte actuellement */

    playerWeapon: function (joueurArme, degatsArme, thisCase, fusil, fusilaPompe, lanceRoquette, couteau) {

        if (thisCase.hasClass(fusil.nom))
        {
            thisCase.addClass($(joueurArme).html());
            $(joueurArme).html(fusil.nom);
            $(degatsArme).html(fusil.degats);
            thisCase.removeClass(fusil.nom);
        } else if (thisCase.hasClass(fusilaPompe.nom))
        {
            thisCase.addClass($(joueurArme).html());
            $(joueurArme).html(fusilaPompe.nom);
            $(degatsArme).html(fusilaPompe.degats);
            thisCase.removeClass(fusilaPompe.nom);
        } else if (thisCase.hasClass(lanceRoquette.nom))
        {
            thisCase.addClass($(joueurArme).html());
            $(joueurArme).html(lanceRoquette.nom);
            $(degatsArme).html(lanceRoquette.degats);
            thisCase.removeClass(lanceRoquette.nom);
        } else if (thisCase.hasClass(couteau.nom))
        {
            thisCase.addClass($(joueurArme).html());
            $(joueurArme).html(couteau.nom);
            $(degatsArme).html(couteau.degats);
            thisCase.removeClass(couteau.nom);
        }
    },

    /* Gere le combat entre les deux joueurs */

    playerFight: function (firstPlayer) {


        /* On selectionne le joueur actif */

        if ($(`.${firstPlayer}`).hasClass("activePlayer"))
        {
            $(".attaque1, .defense1").show();
        } else {
            $(".attaque2, .defense2").show();
        }

        /* On initialise la defense */

        let getDefense = false;

        /* Bouton de defense */

        $(".defense1").click(function () {

            getDefense = true;

            gameFunction.playerDefense("playerOne", "playerTwo",
                    "attaque1", "defense1", "attaque2", "defense2");
        });


        $(".defense2").click(function () {

            getDefense = true;

            gameFunction.playerDefense("playerTwo", "playerOne",
                    "attaque2", "defense2", "attaque1", "defense1");

        });


        /* Bouton d'Attaque */

        $(".attaque1").click(function () {

            gameFunction.playerAttack("joueurArme1", "joueurVie2", "degatsArme1",
                    "playerOne", "playerTwo", "attaque1", "defense1", "attaque2", "defense2", getDefense);

            getDefense = false;

        });


        $(".attaque2").click(function () {

            gameFunction.playerAttack("joueurArme2", "joueurVie1", "degatsArme2",
                    "playerTwo", "playerOne", "attaque2", "defense2", "attaque1", "defense1", getDefense);

            getDefense = false;

        });

    },

    /* Gere l'attaque pour la fonction playerFight */

    playerAttack: function (joueurArme, joueurVie, degatsArme, playerOne, playerTwo, attackOne, defenseOne, attackTwo, defenseTwo, getDefense) {

        /* Audio */

        let couteau1 = new Audio('./audio/couteau1.mp3');
        let attaqueSon1 = new Audio('./audio/attaque1.mp3');
        let attaqueSon2 = new Audio('./audio/attaque2.mp3');
        let attaqueSon3 = new Audio('./audio/attaque3.mp3');

        let fatality = new Audio('./audio/fatality.mp3');

        if ($(`.${joueurArme}`).html() === "couteau")
        {
            couteau1.play();

        } else if ($(`.${joueurArme}`).html() === "fusil") {

            attaqueSon2.play();

        } else if ($(`.${joueurArme}`).html() === "fusilaPompe") {

            attaqueSon1.play();

        } else if ($(`.${joueurArme}`).html() === "lanceRoquette") {

            attaqueSon3.play();
        }


        let lifeOpponent = $(`.${joueurVie}`).html();
        let weaponDamage = $(`.${degatsArme}`).html();

        if (getDefense === true)
        {
            weaponDamage = weaponDamage / 2;
        }

        let newLife = lifeOpponent - weaponDamage;

        $(`.${joueurVie}`).html(newLife);

        $(`.${playerOne}`).removeClass("activePlayer");
        $(`.${playerTwo}`).addClass("activePlayer");

        $(`.${attackOne}, .${defenseOne}`).hide();

        if (parseInt($(`.${joueurVie}`).html()) <= 0)
        {
            $(".fatality").show("slow");
            fatality.play();

        } else {
            $(`.${attackTwo}, .${defenseTwo}`).show();
        }

    },

    /* Gere la defense pour la fonction playerFight */

    playerDefense: function (playerOne, playerTwo, attackOne, defenseOne, attackTwo, defenseTwo) {

        /* Audio */

        let defenseSon1 = new Audio('./audio/defense1.mp3');
        let defenseSon2 = new Audio('./audio/defense2.mp3');

        /* Choix du son */

        if ($(".playerOne").hasClass("activePlayer"))
        {
            defenseSon1.play();

        } else {

            defenseSon2.play();
        }

        /* Changement de joueur actif */

        $(`.${playerOne}`).removeClass("activePlayer");
        $(`.${playerTwo}`).addClass("activePlayer");

        $(`.${attackOne}, .${defenseOne}`).hide();

        $(`.${attackTwo}, .${defenseTwo}`).show();

    }

};