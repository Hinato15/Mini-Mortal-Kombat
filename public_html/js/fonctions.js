let gameFunction = {

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

    playerDisplacement: function (firstPlayer, secondPlayer, thisCase) {

        thisCase.addClass(`${firstPlayer} player`).removeClass("vide");
        $(".activePlayer").removeClass(`${firstPlayer} player activePlayer`);
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
    },

    playerFight: function (firstPlayer, secondPlayer, attackOne, attackTwo, defenceOne, denfenceTwo, weaponDamage, playerLife) {
        
        ("playerOne", "playerTwo", "attaque1", "defense1", "joueurVie1")


        if ($(`.${firstPlayer}`).hasClass("activePlayer"))
        {
            $(".attaque1").show();
            $(".defense1").show();
        } else {
            $(".attaque2").show();
            $(".defense2").show();
        }

        $(".attaque1").click(function () {

            // stat de vie

            let lifeOpponent = $(".joueurVie2").html();
            let weaponDamage = $(".degatsArme1").html();

            let newLife = lifeOpponent - weaponDamage;

            $(".joueurVie2").html(newLife);

            $(".playerOne").removeClass("activePlayer");
            $(".playerTwo").addClass("activePlayer");

            $(".attaque1").hide();
            $(".defense1").hide();

            if (parseInt($(".joueurVie2").html()) <= 0)
            {
                alert("Victoire");
            } else {
                $(".attaque2").show();
                $(".defense2").show();
            }



        });



        $(".attaque2").click(function () {
            let lifeOpponent = $(".joueurVie1").html();
            let weaponDamage = $(".degatsArme2").html();

            let newLife = lifeOpponent - weaponDamage;


            $(".joueurVie1").html(newLife);

            $(".playerTwo").removeClass("activePlayer");
            $(".playerOne").addClass("activePlayer");

            $(".attaque2").hide();
            $(".defense2").hide();

            if (parseInt($(".joueurVie1").html()) <= 0)
            {
                alert("Victoire");
            } else {
                $(".attaque1").show();
                $(".defense1").show();
            }


        });


    }


};