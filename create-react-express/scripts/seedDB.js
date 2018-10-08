const mongoose = require("mongoose");
const db = require("../models");

// This file empties the drink collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactdrinklist"
);


const drinkSeed = [
    {
        name: "Airmail",
        ingredients: [
            "1oz white rum",
            ".5oz fresh lime",
            ".5 oz honey syrup"
        ],
        directions: "shake, strain, top with champagne & lime wheel",
        image: "./images/airmail.jpg",
        favorite: "false"
    },
    {
        name: "Amaretto Sour",
        ingredients: [
            "1.5 oz Disaronno",
            ".75 oz. Overproof Bourbon",
            "1 oz. Fresh Lemon",
            "Barspoon. Simple Syrup (1:1)",
            "1⁄2 an egg white"
        ],
        directions: "dry shake, shake with ice, fine strain, ice cubes, lemon twist, cherry",
        image: "./images/amaretto-sour.jpg",
        favorite: "false"
    },
    {
        name: "American Highball",
        ingredients: [
            "1.5 oz. Italian Rosso Vermouth",
            "1.5 oz. Campari"
        ],
        directions: "build in a colins glass with ice, Top with club soda, an orange twist, and a half wheel of an orange",
        image: "./images/highball.jpg",
        favorite: "false"
    },
    {
        name: "Aperol Spritz",
        ingredients: [
            "2 oz. Aperol",
            "2 oz. Chilled club soda",
            "2 oz. Champagne"
        ],
        directions: "Build in a white wine glass filled with cracked ice. Stir gently to combine. Garnish with a half wheel of orange",
        image: "./images/aperol-spritz.jpg",
        favorite: "false"
    },
    {
        name: "Arsenic and old lace",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Dry Vermouth",
            ".25 oz. Crème de Violette"
        ],
        directions: "Stri, strain over an absinthe rinsed cup. Garnish with an orange twist.",
        image: "./images/arsenic-and-old-lace.jpg",
        favorite: "false"
    },
    {
        name: "Aviation",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Simple Syrup (1:1)"
        ],
        directions: "Shave, strain over a creme de violette rinsed cup with brandied cherry in a glass.",
        image: "./images/avation.jpg",
        favorite: "false"
    },
    {
        name: "Bee's Knees",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Honey Syrup (2:1)"
        ],
        directions: "Shanke and strain. Garnish with a lemon wheel.",
        image: "./images/bees-knees.jpg",
        favorite: "false"
    },
    {
        name: "Bellini",
        ingredients: [
            ".4 oz. Crème de Peche",
            "1 oz. Peach Nectar (Kearn’s)"
        ],
        directions: "Top with Champagne",
        image: "./images/bellini.jpg",
        favorite: "false"
    }, 
    {
        name: "Bijou",
        ingredients: [
            "1.5 oz. Plymouth Gin",
            "1 oz. Italian Rosso Vermouth",
            ".75 oz. Green Chartreuse",
            "1 dash Orange Bitters"
        ],
        directions: "Stir and strain. Garnish with a lemon twist",
        image: "./images/bijou.jpg",
        favorite: "false"
    },
    {
        name: "Black Russian",
        ingredients: [
            "2 oz. Vodka",
            ".75 oz. Kahlua"
        ],
        directions: "Stir, serve over rocks",
        image: "./images/black-russian.jpg",
        favorite: "false"
    },
    {
        name: "Bloody Mary",
        ingredients: [
            "2 oz. Vodka",
            "<.75 oz. Fresh Lemon",
            "Heavy pinch smoked salt",
            "Heavy pinch ground black pepper",
            "3 dashes hot sauce",
            "5 dashes Worchestershire sauce",
            "5 oz. V8 Tomato Juice"
        ],
        directions: "Roll between tins with ice until chilled. Strain into a collons glass over ice. Garnish with olives ona skewer, a lemon wedge and a celery stick.",
        image: "./images/bloody-mary.jpg",
        favorite: "false"
    },
    {
        name: "Boulevardier",
        ingredients: [
            "1.5 oz. Bourbon",
            ".75 oz. Campari",
            ".75 oz. Italian Rosso Vermouth"
        ],
        directions: "Short stir and pour over rocks. Garnish with an orange twist.",
        image: "./images/boulevardier.jpg",
        favorite: "false"
    },
    {
        name: "Bramble",
        ingredients: [
            "1.5 oz. Overproof Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Gently crush 5 blackberries in bottom of a large rocks glass and add crushed ice on top. Shake and Strain into a prepped glass. Top with crushed ice and float .5oz of Creme de Mure. Garnish with a lemon wheel.",
        image: "./images/bramble.jpg",
        favorite: "false"
    },
    {
        name: "Brandy Alexander",
        ingredients: [
            "1 oz. Cognac",
            "1 oz. Dark Crème de Cacao",
            "1 oz. Heavy Cream"
        ],
        directions: "Shake and strain. Garnish with Nutmeg.",
        image: "./images/brandy-alexander.jpg",
        favorite: "false"
    },
    {
        name: "Brooklynite",
        ingredients: [
            "2 oz. Aged Jamaican Rum",
            ".75 oz. Fresh Lime",
            ".75 oz. Honey Syrup (2:1)",
            "2 dashes Angostura Bitters"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/brooklynite.jpg",
        favorite: "false"
    }, 
    {
        name: "Caipirina",
        ingredients: [
            "2 oz. Cachaca",
            "<.5 oz. Simple Syrup (1:1)",
            "Barspoon Fresh Lime",
            "3 lime wedges"
        ],
        directions: "Muddle then fill the tin with ice. Shake and dump. Serve with a straw.",
        image: "./images/caipirina.jpg",
        favorite: "false"
    },
    {
        name: "Champagne Cocktail",
        ingredients: [
            "Sugar cube",
            "3 dashes Angostura bitters"
        ],
        directions: "place sugar cube in a cup with bitters. Top with chilled champagne. Garnish with a spiraled lemon twist.",
        image: "./images/champange-cocktail.jpg",
        favorite: "false"
    },
    {
        name: "Chartreuse Swizzle",
        ingredients: [
            "1.25 oz. Green Chartreuse",
            ".5 oz. Falernum",
            "1 oz. Fresh Pineapple",
            ".75 oz. Fresh Lime"
        ],
        directions: "Build in a collins glass with crushed ice. Swizzle then add more crushed ice to just below the top of the glass. Hevily dash a layer of Angostura bitters. Agitate the bitters with a bar spoon to form a consistent layer. Top with fresh crushed ice up, over the rim of the glass. Garnish with grated nutmeg, mint sprig and a straw.",
        image: "./images/chartreuse-swizzle.jpg",
        favorite: "false"
    },
    {
        name: "Chrysanthemum",
        ingredients: [
            "2 oz. Dry Vermouth",
            ".75 oz. Benedictine",
            ".25 oz. Absinthe"
        ],
        directions: "Short stir and strain over rocks. Garnish with an orange twist.",
        image: "./images/chrysanthemum.jpg",
        favorite: "false"
    },
    {
        name: "Clover Club",
        ingredients: [
            "1.5 oz. London Dry Gin",
            ".5 oz. Dry Vermouth",
            ".5 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)",
            "5 Raspberries",
            "1⁄2 an Egg White"
        ],
        directions: "Muddle the raspberries and shake. Then shake with ice and strain. Garnish with skewered raspberries and a lemon twist.",
        image: "./images/clover-club.jpg",
        favorite: "false"
    },
    {
        name: "Corn 'n Oil",
        ingredients: [
            "2 oz. Blackstrap Rum",
            ".25 oz. Falernum",
            "3 Lime Wedges",
            "2 dashes Angostura Bitters"
        ],
        directions: "Muddle the lime. Hard shake with ice and dump into a double rocks glass.",
        image: "./images/corn-oil.jpg",
        favorite: "false"
    },
    {
        name: "Daiquiri",
        ingredients: [
            "2 oz. White Rum",
            "<1 oz. Fresh Lime",
            ".75 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain.",
        image: "./images/daiquri.jpg",
        favorite: "false"
    },
    {
        name: "Eastside",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Simple Syrup (1:1)",
            "Handful of fresh mint leaves, gently squeezed",
            "2 cucumber slices"
        ],
        directions: "Shake with 3 ice cubes. Strain into a large rocks glass with crushed ice. Garnish with a mint sprig and a cucumber slice.",
        image: "./images/eastside.jpg",
        favorite: "false"
    },
    {
        name: "French 75",
        ingredients: [
            "1 oz. London Dry Gin",
            ".5 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a cup or champagne glass. Top wit champagne. Garnish with a lemon twist.",
        image: "./images/french-75.jpg",
        favorite: "false"
    }, 
    {
        name: "Gimlet",
        ingredients: [
            "2 oz. London Dry Gin",
            "<1 oz. Fresh Lime",
            ">.5 oz. Simple Syrup (1:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain over a rocks glass. Garnish with lime twists.",
        image: "./images/gimlet.jpg",
        favorite: "false"
    },
    {
        name: "Gin Rickey",
        ingredients: [
            "1.5 oz. London Dry Gin",
            ".75 oz. Fresh Lime",
            ">.5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a collins glass over ice. Add 1oz. club soda, and Garnish with a lime wedge.",
        image: "./images/gin-rickey.jpg",
        favorite: "false"
    },
    {
        name: "Godfather/Godmother",
        ingredients: [
            "2 oz. Blended Scotch (J&B/Famous Grouse)",
            ".5 oz. DiSaronno"
        ],
        directions: "Stir in a rocks glass. If you are making a Godmother, substitute Vodka for the Scotch.",
        image: "./images/godfather.jpg",
        favorite: "false"
    },
    {
        name: "Grasshopper",
        ingredients: [
            "1 oz. White Crème de Cacao",
            "1 oz. Green Crème de Menthe",
            "1 oz. Heavy Cream",
            "8 Mint Leaves"
        ],
        directions: "Shake and strain. Garnish with a mint leaf.",
        image: "./images/Grasshopper.jpg",
        favorite: "false"
    },
    {
        name: "Hanky Panky",
        ingredients: [
            "1.5 oz. London Dry Gin",
            "1.5 oz. Italian Rosso Vermouth",
            ".25 oz. Fernet"
        ],
        directions: "Stir and strain. Garnish with a lemon twist.",
        image: "./images/hanky-panky.jpg",
        favorite: "false"
    },
    {
        name: "Hemmingway Daiquiri",
        ingredients: [
            "2 oz. White Rum",
            ".75 oz. Fresh Lime",
            ".5 oz. Fresh Grapefruit",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Cane Syrup (2:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/hemmingway-daiquri.jpg",
        favorite: "false"
    },
    {
        name: "Hot Toddy",
        ingredients: [
            "2 oz. Bourbon",
            "3.5 oz. Black Tea",
            ".5 oz. Honey Syrup (2:1)",
            ".25 oz. Benedictine",
            "2 dashes Peychauds Bitters"
        ],
        directions: "Heat cocktail with espresso wand/Pour into warm coffee cup/Garnish with cinnamon stick and clove-studded lemon wedge.",
        image: "./images/HotToddy.jpg",
        favorite: "false"
    },
    {
        name: "Irish Coffee",
        ingredients: [
            "2.5 oz. Water",
            "2 oz. Irish Whiskey",
            "1 oz. Espresso",
            "<.75 oz. Demerara Syrup (1:1)"         
        ],
        directions: "Heat with espresso wand/Pour into hot cocktail cup/Top with hand-whipped heavy cream/Grated cinnamon.",
        image: "./images/IrishCoffee.jpg",
        favorite: "false"
    },
    {
        name: "Japanese Cocktail",
        ingredients: [
            "2.5 oz. Cognac",
            ".5 oz. Orgeat",
            "3 dashes Angostura Bitters"                  
        ],
        directions: "Stir/Strain/Nick & Nora/Lemon twist expressed and discarded.",
        image: "./images/JapeneseCocktail.jpg",
        favorite: "false"
    },
    {
        name: "Kir",
        ingredients: [
            "<.5 oz. Crème de Cassis",
            "Dry White Wine"                    
        ],
        directions: "Fill white wine glass full of cracked ice/Quick stir to combine/Lemon twist/Straw.",
        image: "./images/Kir.jpg",
        favorite: "false"
    },
    {
        name: "Kir Royale",
        ingredients: [
            "<.5 oz. Crème de Framboise",
            "Champagne"                    
        ],
        directions: "Serve in a coupe or Champagne flute/Garnish with a fresh raspberry/Lemon twist expressed and discarded.",
        image: "./images/KirRoyale.jpg",
        favorite: "false"        
    },
    {
        name: "Last Word",
        ingredients: [
            "<.75 oz. London Dry Gin",
            ".75 oz. Luxardo Maraschino Liqueur",
            ".75 oz. Green Chartreuse",
            ".75 oz. Fresh Lime"                   
        ],
        directions: "Shake/Fine strain.Serve in a Nick & Nora glass.",
        image: "./images/LastWord.jpg",
        favorite: "false"       
    },
    {
        name: "Long Island Iced Tea",
        ingredients: [
            "<.5 oz. Vodka",
            ".5 oz. Blanco Tequila",
            ".5 oz. White Rum",
            ".5 oz. London Dry Gin",
            ".75 oz. Cointreau",
            ".75 oz. Fresh Lemon"                    
        ],
        directions: "Shake/Strain/Collins/Ice/Top with Coca Cola/Lemon wedge.",
        image: "./images/LongIslandIceTea.jpg",
        favorite: "false"       
    },
    {
        name: "Mai Tai",
        ingredients: [
            "1 oz. Aged Jamaican Rum",
            "1 oz. Agricole Blanc",
            ".5 oz. Orange Curacao (Creole Shrubb is best)",
            "1 oz. Fresh Lime",
            ".75 oz. Orgeat",
            "1 lime twist"                    
        ],
        directions: "Shake with 3 ice cubes/Strain/Large rocks glass/Crushed ice/Orange half wheel fan and lime wheel/Straw.",
        image: "./images/MaiTai.jpg",
        favorite: "false"       
    },
    {
        name: "Manhattan",
        ingredients: [
            "2.5 oz. Bourbon OR Rye whiskey",
            "1 oz. Italian Rosso Vermouth",
            "3 dashes Angostura Bitters"                    
        ],
        directions: "Stir/Strain/Brandied cherries on cocktail pick.",
        image: "./images/Manhattan.jpg",
        favorite: "false"       
    },
    {
        name: "Margarita",
        ingredients: [
            "2 oz. Blanco Tequila",
            ".75 oz. Cointreau (Combier is better if you have it)",
            ".75 oz. Fresh Lime",
            "Barspoon Simple Syrup (1:1)"                    
        ],
        directions: "Shake/Fine strain/Top with a Lime wedge.",
        image: "./images/Margarita.jpg",
        favorite: "false"               
    },
    {
        name: "Martinez",
        ingredients: [
            "2 oz. Old Tom Gin",
            "1 oz. Italian Rosso Vermouth",
            ".25 oz. Luxardo Maraschino Liqueur",
            "2 dashes Angostura bitters",
            "1 dash Aromatic bitters"                    
        ],
        directions: "Stir/Strain/Coupe/Garnish with a Lemon twist.",
        image: "./images/Martinez.jpg",
        favorite: "false"               
    },
    {
        name: "Mimosa",
        ingredients: [
            "1⁄2 Champagne",
            "1⁄2 Orange Juice"
        ],
        directions: "Carefully poured into a flute.",
        image: "./images/Mimosa.jpg",
        favorite: "false"               
    },
    {
        name: "Mint Julep",
        ingredients: [
            "2.25 oz. Bourbon",
            "<.5 oz. Demerara Syrup (1:1)",
            "Handful mint"                             
        ],
        directions: "Crush mint in hand/Whip all ingredients with 3 pieces ice/Strain/Julep cup/Crushed ice/Mint sprigs.",
        image: "./images/MintJulep.jpg",
        favorite: "false"               
    },
    {
        name: "Mojito",
        ingredients: [
            "2 oz. White Rum",
            "<1 oz. Fresh Lime",
            ".75 oz. Simple Syrup (1:1)",
            "2 Lime Twists",
            "Large handful of mint"                    
        ],
        directions: "Gentle Muddle/Whip shake with 2 ice cubes/Dump everythingvinto chilled Collins glass/Top with crushed ice/.5 oz Club soda/Garnish with lime wheel and mint sprig/Straw.",
        image: "./images/Mojito.jpg",
        favorite: "false"               
    },
    {
        name: "Moscow Mule (and ALL Mules)",
        ingredients: [
            "2 oz. Vodka (or other base)",
            "<1 oz. Fresh Lime",
            "<.75 oz. Fresh Ginger Syrup",
            ".5 oz. Demerara Syrup (1:1)"                    
        ],
        directions: "Shake with 3 ice cubes/Strain into Collins glass with ice/Top with club soda/3 dashes of Angostura Bitters/Lime wedge/Straw.",
        image: "./images/MoscowMule.jpg",
        favorite: "false"               
    },
    {
        name: "Negroni",
        ingredients: [
            "1.5 oz. London Dry Gin",
            "1 oz. Italian Rosso Vermouth",
            "<1 oz. Campari"                               
        ],
        directions: "Short stir/Rock/Orange twist.",
        image: "./images/Negroni.jpg",
        favorite: "false"               
    },
    {
        name: "Old Cuban",
        ingredients: [
            "2 oz. Aged Rum",
            ".5 oz. Demerara Syrup (1:1)",
            ".5 oz. Fresh Lime",
            "2 dashes Angostura Bitters",
            "6 Mint Leaves"                    
        ],
        directions: "Shake with 3 ice cubes/Fine strain/Coupe/Champagne/Mint leaf.",
        image: "./images/OldCuban.jpg",
        favorite: "false"               
    },
    {
        name: "Old Fashioned",
        ingredients: [
            "2.5 oz. Bourbon OR Rye",
            "<.5 oz. Demerara Syrup (1:1)",
            "3 dashes Angostura Bitters",
            ".5 dash Aromatic Bitters"                    
        ],
        directions: "Short stir/Large rock/Lemon and Orange twists.",
        image: "./images/OldFashioned.jpg",
        favorite: "false"               
    },
    {
        name: "Old Maid aka London Maid",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Simple Syrup (1:1)",
            "Handful of fresh mint leaves, gently squeezed",
            "2 cucumber slices"                    
        ],
        directions: "Whip shake with 3 ice cubes/Fine strain/Large rocks glass with cracked ice/Mint sprig/Cucumber slice/Straw.",
        image: "./images/OldMaid.jpg",
        favorite: "false"               
    },
    {
        name: "Paloma",
        ingredients: [
            "1.5 oz. Blanco Tequila",
            ".5 oz. Mezcal",
            "1 oz. Fresh Grapefruit",
            ".75 oz. Fresh Lime",
            ".5 oz. Agave Syrup"                    
        ],
        directions: "Shake/Strain/Salt-rimmed Collins filled with ice/Straw/Lime wedge",
        image: "./images/Paloma.jpg",
        favorite: "false"               
    },
    {
        name: "Wise Guy",
        ingredients: [
            "4 sage leaves, plus 1 sprig for garnish",
            ".25 oz. Jalapeno Agave Syrup",
            "1.5 oz. Fresh Pineapple juice",
            "1 oz. verjus",
            ".5 oz. Fresh Lime juice",
            "pinch of salt",
            "pinch of Aleppo pepper"                    
        ],
        directions: "Muddle the leaves in a cocktail shaker with the Jalapeno Agave Syrup. Add the pineapple juice, verjus, lime juice and salt. Fill the shaker with ice cubes and shake well. Fine-strain into a chilled, crushed ice filled julep cup and garnish with sage sprig and Aleppo pepper.",
        image: "./images/WiseGuy.jpg",
        favorite: "false"               
    },
    {
        name: "Tuscan Fresco",
        ingredients: [
            "2 rosemary sprigs",
            "1 oz. peach nectar",
            "1 oz. White Cranberry juice",
            ".5 oz. Fresh Lemon juice",
            ".5 oz. Simple Syrup",
            "1 oz. chilled club soda"                    
        ],
        directions: "Fill a cocktail shaker with ice. Add 1 sprig of Rosemary and the peach nectar, white cranberry juice, lemon juice, and Simple Syrup. Shake well and strain into an ice-filled rocks glass. Stir in the club soda and garnish with the remaining Rosemary sprig.",
        image: "./images/TuscanFresco.jpg",
        favorite: "false"               
    },
    {
        name: "Fuji Apple Soda",
        ingredients: [
            "2 oz. Apple-Ginger Syrup",
            "3 oz. chilled club soda",
            "2 apple slices"                               
        ],
        directions: "Fill a highball glass with ice. Add the Apple-Ginger Syrup and soda; stir. Garnish with the apple slices.",
        image: "./images/FujiAppleSoda.jpg",
        favorite: "false" 

    },
    {
        name: "Strawberrry & Ginger Cooler",
        ingredients: [
            "2 large Strawberries, sliced, plus 1 Strawberry half",
            "1/2-inch piece of fresh ginger, chopped",
            ".5 oz. Simple syrup",
            "2 oz. Fresh Orange juice",
            "1 oz. Fresh Lime juice",
            "2 oz. chilled ginger beer"                    
        ],
        directions: "In a cocktail shaker, muddle the strawberry slices with the ginger and simple syrup. Add ice and the orange and lime juices and shake well. Double strain into an ice-filled collins glass. Stir in the ginger beer and garnish with the strawberry half.",
        image: "./images/StrawberryGingerCooler.jpg",
        favorite: "false"               
    },
    {
        name: "Lilikoi",
        ingredients: [
            "2 oz. Mango-Lilikoi Puree",
            "1 oz. Passion fruit nectar or juice",
            ".5 oz. Simple syrup",
            ".5 oz. Fresh Lime",
            ".5 oz. Fresh Lemon juice",
            "1 edible orchid, for garnish (optional)"                    
        ],
        directions: "Fill a cocktail shaker with ice. Add all of the remaining ingredients except the orchid and shake well. Strain into a chilled red wine glass or hurrican glass and garnish with orchid.",
        image: "./images/Lilikoi.jpg",
        favorite: "false"               
    },
    {
        name: "Rocking Orange",
        ingredients: [
            "2 oz. Fresh Orange Juice",
            "2 oz. Fresh Mandarin Orange juice",
            ".5 oz. Fresh Lemon juice",
            ".5 oz. Orange syrup",
            "2 oz. chilled club soda",
            "Thin strips of orange zest and 1 orange twist, for garnish"                    
        ],
        directions: "Fill a cocktail shaker with ice. Add all of the remaining ingredients except the club soda and garnishes and shake well. Strain into an ice-filled highball glass, then stir in the club soda. Garnish with the orange zest strips and the twist.",
        image: "./images/RockingOrange.jpg",
        favorite: "false"               
    },
    {
        name: "Raspberry Fizz",
        ingredients: [
            "8 Raspberries, plus 3 Rasberries skewered on a pick for garnish",
            "1 oz. Fresh Lemon juice",
            "1 teaspoon rose water",
            ".75 oz. Simple syrup",
            "2 oz. chilled club soda",
            "1 Lemon wheel, for garnish"                    
        ],
        directions: "In a cocktail shaker, muddle the 8 raspberries. Add ice and the lemon juice, rose water and Simple Syrup and shake well. Strain into an ice-filled highball glass. Stir in the club soda and garnish with the skewered raspberries and the lemon wheel.",
        image: "./images/RaspberryFizz.jpg",
        favorite: "false"               
    },
    {
        name: "Lady Lavender's Mocktail",
        ingredients: [
            "3 oz. Fresh Grapefruit juice",
            ".75 oz. Lavender Syrup",
            "2 oz. Chilled club soda",
            "1 Basil sprig",
            "1 Fresh Lavender sprig (optional)",
            ".25 oz. Grenadine, preferably homemade"                    
        ],
        directions: "Fill a cocktail shaker with ice. Add the grapefruit juice, Lavender Syrup and grenadine and shake well. Strain into an ice-filled collins glass, stir in the club soda and garnish with the basil and lavender sprigs.",
        image: "./images/LadyLavenderMocktail.jpg",
        favorite: "false"               
    },
    {
        name: "Sophisticated Lady",
        ingredients: [
            "1 unpeeled cucumber wheel, plus 1 peeled cucumber spear",
            "1 oz. Simple Syrup",
            "1/4 teaspoon salt",
            "2 oz. Cranberry juice",
            "1 oz. Fresh Lime juice"                    
        ],
        directions: "In a cocktail shaker, muddle the cucumber wheel, Simple syrup and salt. Add the ice and the juices and shake well. Double strain into a chilled Martini glass. Garnish with the spear.",
        image: "./images/SophisticatedLady.jpg",
        favorite: "false"               
    },
    {
        name: "Almond-Fennel Cooler",
        ingredients: [
            ".75 oz. Orgeat (almond-flavored syrup)",
            ".75 oz. Fennel Syrup",
            ".5 oz. Fresh Lemon juice",
            "6 oz. Chilled club soda",
            "1 Fennel frond, for garnish (optional)"                    
        ],
        directions: "In a collins glass, combine the orgeat, Fennel Syrup and fresh lemon juice and stir well. Add ice, stir in the chilled club soda and garnish with the fennel fron.",
        image: "./images/Almond-FennelCooler.jpg",
        favorite: "false"               
    },
     
]