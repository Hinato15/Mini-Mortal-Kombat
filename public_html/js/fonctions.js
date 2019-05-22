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
                    $(`#${result}`).css("background-color", "grey").addClass("move");
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

                    $(`#${result}`).css("background-color", "grey").addClass("move");
                }
            } else {
                break;
            }

        }

    }

};