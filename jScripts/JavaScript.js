//-----------------------------------------------בחירת פנקייק-------------------------------------------------------

var clearPancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_clear/clear_one.png" alt="פנקייק אחד ללא רוטב"/>',
        '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_clear/clear_two.png" alt="שני פנקייקים ללא רוטב"/>',
        '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_clear/clear_three.png" alt="שלושה פנקייקים ללא רוטב"/>'];

var chocolatePancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_chocolate/chocolate_one.png" alt="פנקייק אחד עם רוטב שוקולד"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_chocolate/chocolate_two.png" alt="שני פנקייקים עם רוטב שוקולד"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_chocolate/chocolate_three.png" alt="שלושה פנקייקים עם רוטב שוקולד"/>'];

var whiteChocolatePancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_whiteChocolate/whiteChocolate_one.png" alt="פנקייק אחד עם רוטב שוקולד לבן"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_whiteChocolate/whiteChocolate_two.png" alt="שני פנקייקים עם רוטב שוקולד לבן"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_whiteChocolate/whiteChocolate_three.png" alt="שלושה פנקייקים עם רוטב שוקולד לבן"/>'];

var maplePancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_maple/maple_one.png" alt="פנקייק אחד עם רוטב מייפל"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_maple/maple_two.png" alt="שני פנקייקים עם רוטב מייפל"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_maple/maple_three.png" alt="שלושה פנקייקים עם רוטב מייפל"/>'];

var strawberriesPancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_strawberries/strawberries_one.png" alt="פנקייק אחד עם רוטב תות"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_strawberries/strawberries_two.png" alt="שני פנקייקים עם רוטב תות"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_strawberries/strawberries_three.png" alt="שלושה פנקייקים עם רוטב תות"/>'];


var saltedCaramelPancakes =
    ['<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_soltedCaramel/saltedCaramel_one.png" alt="פנקייק אחד עם רוטב קרמל מלוח"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_soltedCaramel/saltedCaramel_two.png" alt="שני פנקייקים עם רוטב קרמל מלוח"/>'
        , '<img class="menuPancakesAllSauces" src="images/images_InteractiveMenu_products/pancakes_soltedCaramel/saltedCaramel_three.png" alt="שלושה פנקייקים עם רוטב קרמל מלוח"/>'];


var i = 0;
var checkedbox = document.getElementsByName("numOfPancakes");
var sauce_arr = document.getElementsByName("sauceOfPancakes");

function requiredPancake() {
    i = 0;
    while (!checkedbox[i].checked) {
        i++;
    }

    var IsChecked = 'false';
    var sauce_num = 0;
    for (var j = 0; j < sauce_arr.length; j++) {
        if (sauce_arr[j].checked) {
            IsChecked = 'true';
            sauce_num = j;
        }
    }

    if (IsChecked == 'false') {
        document.getElementById("reqiredPancakeImage").innerHTML = clearPancakes[i];
    }
    else {
        switch (sauce_num) {
            case 0:
                Chocolate();
                break;
            case 1:
                WhiteChocolate();
                break;
            case 2:
                Maple();
                break;
            case 3:
                Strawberries();
                break;
            case 4:
                Caramel();
                break;
            case 5:
                noSauce();
                break;
        }
    }
}

function Chocolate() {
    document.getElementById("reqiredPancakeImage").innerHTML = chocolatePancakes[i];
}

function WhiteChocolate() {
    document.getElementById("reqiredPancakeImage").innerHTML = whiteChocolatePancakes[i];
}

function Maple() {
    document.getElementById("reqiredPancakeImage").innerHTML = maplePancakes[i];
}

function Strawberries() {
    document.getElementById("reqiredPancakeImage").innerHTML = strawberriesPancakes[i];
}

function Caramel() {
    document.getElementById("reqiredPancakeImage").innerHTML = saltedCaramelPancakes[i];
}

function noSauce() {
    document.getElementById("reqiredPancakeImage").innerHTML = clearPancakes[i];
}



//----------------------------------------------------תוספת---------------------------------------------------------------

function requiredAddition() {
    var AdditionsChecked = document.getElementsByName("additionName");
    var AdditionsImgs = document.getElementsByClassName("menuAdditions");

    for (var j = 0; j < AdditionsChecked.length; j++) {
        if (AdditionsChecked[j].checked) {
            AdditionsImgs[j].style.opacity = '100%';      
        }
        if (!AdditionsChecked[j].checked) {
            AdditionsImgs[j].style.opacity = '30%';
        }
    }
}


//--------------------------------------------------שתייה-------------------------------------------------------

function requiredDrink() {
    var DrinksChecked = document.getElementsByName("drinkName");
    var DrinksImgs = document.getElementsByClassName("menuDrinks");

    for (var j = 0; j < DrinksChecked.length; j++) {
        if (DrinksChecked[j].checked) {
            DrinksImgs[j].style.opacity = '100%';
        }
        if (!DrinksChecked[j].checked) {
            DrinksImgs[j].style.opacity = '30%';
        }
    }
}