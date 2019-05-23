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

            // j'ajoute wall Ã  la case et j'enleve vide
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

    playerStat: function (stat)
    {
        let joueur = $('<h2>').appendTo($('#main_info')).html(`${stat.nom}`).css('color', 'blue');
        let joueurArme = $('<h3>').addClass(`joueurArme${stat.nombre}`).insertAfter(joueur).html(`Arme: ${stat.arme}`);
        let degatsArme = $('<h3>').addClass(`degatsArme${stat.nombre}`).insertAfter(joueurArme).html(`Degats Arme: ${stat.degatsArme}`);
        let joueurVie = $('<h3>').addClass(`joueurVie{stat.nombre}`).insertAfter(degatsArme).html(`Vie: ${stat.vie} <br/><br/>`);
    }

};