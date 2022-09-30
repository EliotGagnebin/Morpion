$(function (){
    var array = [0,1,2,3,4,5,6,7,8]
    var x = 0


    //Boucle each qui permet que le programme soit effectué en boucle jusqu'à ce que plus aucun pions/signe ne puissent être jouer
   $("td").each(function (index, element){
      $(element).click(function (){
          //Condition if qui empêche que l'on puisse changer les signes en cliquant 2x dessus
          if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1") ){
          }else {
              //Si le clic est divisible par 2 et est égal à 0 sans reste alors le site affiche une croix dans la case
              if (x % 2 == 0){
                  $(element).addClass("symbole_1")
                  x++
                  array.splice(index, 1, "X")
              //Si le clic est impair le site mais alors un rond dans la case
              }else {
                  $(element).addClass("symbole_0")
                  x++
                  array.splice(index, 1, "0")
              }
          }
        console.log(array)
        if (x >= 5){
            if (
                //Mise en place des paternes gagnant pour "X"
                array[0] == "X" && array[1] == "X" && array[2] == "X" ||
                array[3] == "X" && array[4] == "X" && array[5] == "X" ||
                array[6] == "X" && array[7] == "X" && array[8] == "X" ||
                array[0] == "X" && array[3] == "X" && array[6] == "X" ||
                array[1] == "X" && array[4] == "X" && array[7] == "X" ||
                array[2] == "X" && array[5] == "X" && array[8] == "X" ||
                array[0] == "X" && array[4] == "X" && array[8] == "X" ||
                array[2] == "X" && array[4] == "X" && array[6] == "X"
            ){
                //Mise en place d'une "alert" pour annoncer la victoire de "X"
                alert("Congratulations ! Player X win")

                //Permet de clear le tableau afin de pouvoir directement recommencer une nouvelle partie
                array = [0,1,2,3,4,5,6,7,8]
                $("td").removeClass("symbole_0")
                $("td").removeClass("symbole_1")
                x = 0
            }else if (x > 8){
                var nul = 1

            };
            if (
                //Mise en place des paternes gagnant pour "0"
                array[0] == "0" && array[1] == "0" && array[2] == "0" ||
                array[3] == "0" && array[4] == "0" && array[5] == "0" ||
                array[6] == "0" && array[7] == "0" && array[8] == "0" ||
                array[0] == "0" && array[3] == "0" && array[6] == "0" ||
                array[1] == "0" && array[4] == "0" && array[7] == "0" ||
                array[2] == "0" && array[5] == "0" && array[8] == "0" ||
                array[0] == "0" && array[4] == "0" && array[8] == "0" ||
                array[2] == "0" && array[4] == "0" && array[6] == "0"

            ){
                //Mise en place d'une "alert" pour annoncer la victoire de "0"
                alert("Congratulations ! Player 0 win")
                //Permet de clear le tableau afin de pouvoir directement recommencer une nouvelle partie
                array = [0,1,2,3,4,5,6,7,8]
                $("td").removeClass("symbole_0")
                $("td").removeClass("symbole_1")
                x = 0
            }
            //Initialiser de la variable "nul" qui permet de calculer si il y a égalité ou non
        } else if (x > 8){
            nuL++
        }
        //Condition permettant d'afficher nul si les 8 cases sont remplie
        if (nul == 1){
            alert("Draw")
            //Permet de clear le tableau afin de pouvoir directement recommencer une nouvelle partie
            array = [0,1,2,3,4,5,6,7,8]
            $("td").removeClass("symbole_0")
            $("td").removeClass("symbole_1")
            x = 0
        }
      });

   });

});