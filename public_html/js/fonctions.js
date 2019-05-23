let gameFunction = {

    lateralDisplacement: function (signe) {

        let activePlayer = $("#main_game").find(".activePlayer").attr("id");

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

    verticalDisplacement: function (signe) {

        let activePlayer = $("#main_game").find(".activePlayer").attr("id");

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

    playerDisplacement: function (firstPlayer, secondPlayer, thisCase) {

        let activePlayer = $("#main_game").find(".activePlayer");

        thisCase.addClass(`${firstPlayer} player`).removeClass("vide");
        activePlayer.removeClass(`${firstPlayer} player activePlayer`);
        $(`.${secondPlayer}`).addClass("activePlayer");

    },

    playerWeapon: function (Player, number, stat, weapon) {

        if ($(`.${Player}`).hasClass("fusil"))
        {
            stat.arme = weapon[0].nom;
            console.log(weapon);
            $(`.joueurArme${number}`).html(`Arme: ${weapon[0].nom}`);
            $(`.degatsArme${number}`).html(`Degats Arme: ${weapon[0].degats}`);
            

        } else if ($(".playerOne").hasClass("fusilaPompe")) {

            stat.arme = weapon[1].nom;
            $(`.joueurArme${number}`).html(`Arme: ${weapon[1].nom}`);
            $(`.degatsArme${number}`).html(`Degats Arme: ${weapon[1].degats}`);
            

        } else if ($(".playerOne").hasClass("lanceRoquette")) {

            stat.arme = weapon[2].nom;
            $(`.joueurArme${number}`).html(`Arme: ${weapon[2].nom}`);
            $(`.degatsArme${number}`).html(`Degats Arme: ${weapon[2].degats}`);
            

        }
    }
    
    

};