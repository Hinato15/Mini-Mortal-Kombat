let game = {

    line: 10,
    column: 10,
    numberWall: 15,

    initPlateau: function () {

        let nombreCase = this.line * this.column;

        for (let i = 0; i < nombreCase; i++)
        {
            $("<div>").appendTo($('#main_game')).addClass('case vide').attr("id", i);
        }

    },

    generateWall: function () {

        let nombreCase = this.line * this.column;

        for (let i = 0; i < this.numberWall; i++)
        {
            let maCase = $('#main_game');

            do {
                // je cherche une nouvelle case

                let indexMaCase = Math.floor(Math.random() * nombreCase);
                maCase = $(`#${indexMaCase}`);

            } while (!maCase.hasClass("vide")) // tant que ma case n'est pas vide

            // Ajout de  wall à la case et j'enleve vide
            maCase.addClass('wall');
            maCase.removeClass('vide');

        }


    },

    generateWeapons: function (arme) {

        let nombreCase = this.line * this.column;

        for (let i = 0; i < arme.length; i++)
        {
            let maCase = $('#main_game');

            do {
                // je cherche une nouvelle case

                let indexMaCase = Math.floor(Math.random() * nombreCase);
                maCase = $(`#${indexMaCase}`);

            } while (!maCase.hasClass("vide")) // tant que ma case n'est pas vide

            maCase.removeClass('vide');
            maCase.addClass(arme[i].nom + " weapon");

        }

    },

    generatePlayer: function (player) {

        let nombreCase = this.line * this.column;

        for (let i = 0; i < player.length; i++)
        {
            let maCase = $('#main_game');
            let indexMaCase = 0;

            do {
                // je cherche une nouvelle case

                indexMaCase = Math.floor(Math.random() * nombreCase);
                maCase = $(`#${indexMaCase}`);

            } while (!maCase.hasClass("vide")) // tant que ma case n'est pas vide


            /* Je verifie que les deux joueurs ne sont pas cote à cote */


            /* ------------------------------------ */

            indexMaCase += 1;

            if ($(`#${indexMaCase}`).hasClass('player') && indexMaCase % this.column != 0)
            {
                i = i - 1;
                continue;
            }

            /* ------------------------------------ */

            indexMaCase -= 2;

            if ($(`#${indexMaCase}`).hasClass('player') && indexMaCase % this.column != 9)
            {
                i = i - 1;
                continue;
            }

            /* ------------------------------------ */

            indexMaCase += 1 + this.column;

            if ($(`#${indexMaCase}`).hasClass('player') && indexMaCase < 100)
            {
                i = i - 1;
                continue;
            }

            /* ------------------------------------ */

            indexMaCase -= 2 * this.column;

            if ($(`#${indexMaCase}`).hasClass('player') && indexMaCase >= 0)
            {
                i = i - 1;
                continue;
            }

            maCase.removeClass('vide');
            maCase.addClass(`player${player[i].classe}` + " player");
            $(".playerOne").addClass("activePlayer");

        }


    },

    /* Place les cases de déplacement des joueurs */

    selectMoveBox: function () {

        /* ------------------------------------ */

        gameFunction.lateralDisplacement("+");

        /* ------------------------------------ */

        gameFunction.lateralDisplacement("-");

        /* ------------------------------------ */

        gameFunction.verticalDisplacement("+");

        /* ------------------------------------ */

        gameFunction.verticalDisplacement("-");

    },

    /* Affiche les stats des joueurs */

    playerStat: function (stat)
    {
        let joueur = $('<h2>').appendTo($('#main_info')).html(`${stat.nom}`).css('color', 'blue');

        let joueurArmeText = $('<h3>').insertAfter(joueur).html(`--- Arme ---`);
        let joueurArme = $('<span>').addClass(`joueurArme${stat.nombre}`).insertAfter(joueurArmeText).html(`${stat.arme}`);


        let degatsArmeText = $('<h3>').insertAfter(joueurArme).html("--- Degats de l'Arme ---");
        $('<hr/>').insertBefore(degatsArmeText);
        let degatsArme = $('<span>').addClass(`degatsArme${stat.nombre}`).insertAfter(degatsArmeText).html(`${stat.degatsArme}`);

        let joueurVieText = $('<h3>').insertAfter(degatsArme).html("--- Vie ---");
        $('<hr/>').insertBefore(joueurVieText);
        let joueurVie = $('<span>').addClass(`joueurVie${stat.nombre}`).insertAfter(joueurVieText).html(`${stat.vie}`);

        let containButton = $('<div>').addClass('containButton').insertAfter(joueurVie);
        $('<hr/>').insertBefore(containButton);

        let boutonAttaque = $('<button>').addClass(`attaque${stat.nombre} combatBouttonA`).appendTo(containButton).html("Attaque").hide();
        let boutonDefense = $('<button>').addClass(`defense${stat.nombre} combatBouttonB`).insertAfter(boutonAttaque).html("Defense").hide();
    }

};