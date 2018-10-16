const mongoose = require("mongoose");
const db = require("../models");

// This file empties the drink collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactdrinklist"||"mongodb://localhost/reactdrinklist"||'mongodb://Codecamp:Skip123!@ds129003.mlab.com:29003/heroku_8fb4vpwf'
);


const drinkSeed = [
    {
        title: "AIRMAIL",
        ingredients: [
            "1 oz white rum",
            ".5 oz fresh lime",
            ".5 oz honey syrup"
        ],
        directions: "shake, strain, top with champagne & lime wheel",
        image: "./images/airmail.jpg",
        favorite: "no",
        category: "rum"
    },
    {
        title: "AMARETTO SOUR",
        ingredients: [
            "1.5 oz Disaronno",
            ".75 oz. Overproof Bourbon",
            "1 oz. Fresh Lemon",
            "Barspoon. Simple Syrup (1:1)",
            "1⁄2 an egg white"
        ],
        directions: "dry shake, shake with ice, fine strain, ice cubes, lemon twist, cherry",
        image: "./images/amaretto-sour.jpg",
        favorite: "no",
        category: "bourbon"
    },
    {
        title: "AMERICAN HIGHBALL",
        ingredients: [
            "1.5 oz. Italian Rosso Vermouth",
            "1.5 oz. Campari"
        ],
        directions: "build in a colins glass with ice, Top with club soda, an orange twist, and a half wheel of an orange",
        image: "./images/highball.jpg",
        favorite: "no",
        category: "whiskey"
    },
    {
        title: "APEROL SPRITZ",
        ingredients: [
            "2 oz. Aperol",
            "2 oz. Chilled club soda",
            "2 oz. Champagne"
        ],
        directions: "Build in a white wine glass filled with cracked ice. Stir gently to combine. Garnish with a half wheel of orange",
        image: "./images/aperol-spritz.jpg",
        favorite: "no",
        category: "champagne"
    },
    {
        title: "ARSENIC AND OLD LACE",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Dry Vermouth",
            ".25 oz. Crème de Violette"
        ],
        directions: "Stri, strain over an absinthe rinsed cup. Garnish with an orange twist.",
        image: "./images/arsenic-and-old-lace.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "AVIATION",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Simple Syrup (1:1)"
        ],
        directions: "Shave, strain over a creme de violette rinsed cup with brandied cherry in a glass.",
        image: "./images/aviation.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "BEE'S KNEES",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Honey Syrup (2:1)"
        ],
        directions: "Shanke and strain. Garnish with a lemon wheel.",
        image: "./images/bees-knees.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "BELLINI",
        ingredients: [
            ".4 oz. Crème de Peche",
            "1 oz. Peach Nectar (Kearn’s)"
        ],
        directions: "Top with Champagne",
        image: "./images/bellini.jpg",
        favorite: "no",
        category: "champagne"
    }, 
    {
        title: "BIJOU",
        ingredients: [
            "1.5 oz. Plymouth Gin",
            "1 oz. Italian Rosso Vermouth",
            ".75 oz. Green Chartreuse",
            "1 dash Orange Bitters"
        ],
        directions: "Stir and strain. Garnish with a lemon twist",
        image: "./images/bijou.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "BLACK RUSSIAN",
        ingredients: [
            "2 oz. Vodka",
            ".75 oz. Kahlua"
        ],
        directions: "Stir, serve over rocks",
        image: "./images/black-russian.jpg",
        favorite: "no",
        category: "vodka"
    },
    {
        title: "BLOODY MARY",
        ingredients: [
            "2 oz. Vodka",
            ".75 oz. Fresh Lemon",
            "Heavy pinch smoked salt",
            "Heavy pinch ground black pepper",
            "3 dashes hot sauce",
            "5 dashes Worchestershire sauce",
            "5 oz. V8 Tomato Juice"
        ],
        directions: "Roll between tins with ice until chilled. Strain into a collons glass over ice. Garnish with olives ona skewer, a lemon wedge and a celery stick.",
        image: "./images/bloody-mary.jpg",
        favorite: "no",
        category: "vodka"
    },
    {
        title: "BOULEVARDIER",
        ingredients: [
            "1.5 oz. Bourbon",
            ".75 oz. Campari",
            ".75 oz. Italian Rosso Vermouth"
        ],
        directions: "Short stir and pour over rocks. Garnish with an orange twist.",
        image: "./images/boulevardier.jpg",
        favorite: "no",
        category: "bourbon"
    },
    {
        title: "BRAMBLE",
        ingredients: [
            "1.5 oz. Overproof Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Gently crush 5 blackberries in bottom of a large rocks glass and add crushed ice on top. Shake and Strain into a prepped glass. Top with crushed ice and float .5oz of Creme de Mure. Garnish with a lemon wheel.",
        image: "./images/bramble.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "BRANDY ALEXANDER",
        ingredients: [
            "1 oz. Cognac",
            "1 oz. Dark Crème de Cacao",
            "1 oz. Heavy Cream"
        ],
        directions: "Shake and strain. Garnish with Nutmeg.",
        image: "./images/brandy-alexander.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "BROOKLYNITE",
        ingredients: [
            "2 oz. Aged Jamaican Rum",
            ".75 oz. Fresh Lime",
            ".75 oz. Honey Syrup (2:1)",
            "2 dashes Angostura Bitters"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/brooklynite.jpg",
        favorite: "no",
        category: "rum"
    }, 
    {
        title: "CAIPIRINA",
        ingredients: [
            "2 oz. Cachaca",
            ".5 oz. Simple Syrup (1:1)",
            "Barspoon Fresh Lime",
            "3 lime wedges"
        ],
        directions: "Muddle then fill the tin with ice. Shake and dump. Serve with a straw.",
        image: "./images/caipirina.jpg",
        favorite: "no",
        category: "rum"
    },
    {
        title: "CHAMPAGNE COCKTAIL",
        ingredients: [
            "Sugar cube",
            "3 dashes Angostura bitters"
        ],
        directions: "place sugar cube in a cup with bitters. Top with chilled champagne. Garnish with a spiraled lemon twist.",
        image: "./images/champagne-cocktail.jpg",
        favorite: "no",
        category: "champagne"
    },
    {
        title: "CHARTREUSE SWIZZLE",
        ingredients: [
            "1.25 oz. Green Chartreuse",
            ".5 oz. Falernum",
            "1 oz. Fresh Pineapple",
            ".75 oz. Fresh Lime"
        ],
        directions: "Build in a collins glass with crushed ice. Swizzle then add more crushed ice to just below the top of the glass. Hevily dash a layer of Angostura bitters. Agitate the bitters with a bar spoon to form a consistent layer. Top with fresh crushed ice up, over the rim of the glass. Garnish with grated nutmeg, mint sprig and a straw.",
        image: "./images/chartreuse-swizzle.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "CHRYSANTHEMUM",
        ingredients: [
            "2 oz. Dry Vermouth",
            ".75 oz. Benedictine",
            ".25 oz. Absinthe"
        ],
        directions: "Short stir and strain over rocks. Garnish with an orange twist.",
        image: "./images/chrysanthemum.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "CLOVER CLUB",
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
        favorite: "no",
        category: "gin"
    },
    {
        title: "CORN 'N OIL",
        ingredients: [
            "2 oz. Blackstrap Rum",
            ".25 oz. Falernum",
            "3 Lime Wedges",
            "2 dashes Angostura Bitters"
        ],
        directions: "Muddle the lime. Hard shake with ice and dump into a double rocks glass.",
        image: "./images/corn-oil.jpg",
        favorite: "no",
        category: "rum"
    },
    {
        title: "DAIQUIRI",
        ingredients: [
            "2 oz. White Rum",
            "1 oz. Fresh Lime",
            ".75 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain.",
        image: "./images/daiquiri.jpg",
        favorite: "no",
        category: "rum"
    },
    {
        title: "EASTSIDE",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Simple Syrup (1:1)",
            "Handful of fresh mint leaves, gently squeezed",
            "2 cucumber slices"
        ],
        directions: "Shake with 3 ice cubes. Strain into a large rocks glass with crushed ice. Garnish with a mint sprig and a cucumber slice.",
        image: "./images/eastside.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "FRENCH 75",
        ingredients: [
            "1 oz. London Dry Gin",
            ".5 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a cup or champagne glass. Top wit champagne. Garnish with a lemon twist.",
        image: "./images/french-75.jpg",
        favorite: "no",
        category: "gin"
    }, 
    {
        title: "GIMLET",
        ingredients: [
            "2 oz. London Dry Gin",
            "1 oz. Fresh Lime",
            ".5 oz. Simple Syrup (1:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain over a rocks glass. Garnish with lime twists.",
        image: "./images/gimlet.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "GIN RICKEY",
        ingredients: [
            "1.5 oz. London Dry Gin",
            ".75 oz. Fresh Lime",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a collins glass over ice. Add 1oz. club soda, and Garnish with a lime wedge.",
        image: "./images/gin-rickey.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "GODFATHER/GODMOTHER",
        ingredients: [
            "2 oz. Blended Scotch (J&B/Famous Grouse)",
            ".5 oz. DiSaronno"
        ],
        directions: "Stir in a rocks glass. If you are making a Godmother, substitute Vodka for the Scotch.",
        image: "./images/godfather.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "GRASSHOPPER",
        ingredients: [
            "1 oz. White Crème de Cacao",
            "1 oz. Green Crème de Menthe",
            "1 oz. Heavy Cream",
            "8 Mint Leaves"
        ],
        directions: "Shake and strain. Garnish with a mint leaf.",
        image: "./images/Grasshopper.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "HANKY PANKY",
        ingredients: [
            "1.5 oz. London Dry Gin",
            "1.5 oz. Italian Rosso Vermouth",
            ".25 oz. Fernet"
        ],
        directions: "Stir and strain. Garnish with a lemon twist.",
        image: "./images/hanky-panky.jpg",
        favorite: "no",
        category: "gin"
    },
    {
        title: "HEMINGWAY DAIQUIRI",
        ingredients: [
            "2 oz. White Rum",
            ".75 oz. Fresh Lime",
            ".5 oz. Fresh Grapefruit",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Cane Syrup (2:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/hemingway-daiquiri.jpg",
        favorite: "no",
        category: "rum"
    },
    {
        title: "HOT TODDY",
        ingredients: [
            "2 oz. Bourbon",
            "3.5 oz. Black Tea",
            ".5 oz. Honey Syrup (2:1)",
            ".25 oz. Benedictine",
            "2 dashes Peychauds Bitters"
        ],
        directions: "Heat cocktail with espresso wand/Pour into warm coffee cup/Garnish with cinnamon stick and clove-studded lemon wedge.",
        image: "./images/HotToddy.jpg",
        favorite: "no",
        category: "bourbon"
    },
    {
        title: "IRISH COFFEE",
        ingredients: [
            "2.5 oz. Water",
            "2 oz. Irish Whiskey",
            "1 oz. Espresso",
            ".75 oz. Demerara Syrup (1:1)"         
        ],
        directions: "Heat with espresso wand/Pour into hot cocktail cup/Top with hand-whipped heavy cream/Grated cinnamon.",
        image: "./images/IrishCoffee.jpg",
        favorite: "no",
        category: "whiskey"
    },
    {
        title: "JAPANESE COCKTAIL",
        ingredients: [
            "2.5 oz. Cognac",
            ".5 oz. Orgeat",
            "3 dashes Angostura Bitters"                  
        ],
        directions: "Stir/Strain/Nick & Nora/Lemon twist expressed and discarded.",
        image: "./images/JapaneseCocktail.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "KIR",
        ingredients: [
            ".5 oz. Crème de Cassis",
            "Dry White Wine"                    
        ],
        directions: "Fill white wine glass full of cracked ice/Quick stir to combine/Lemon twist/Straw.",
        image: "./images/Kir.jpg",
        favorite: "no",
        category: "misc"
    },
    {
        title: "KIR ROYALE",
        ingredients: [
            ".5 oz. Crème de Framboise",
            "Champagne"                    
        ],
        directions: "Serve in a coupe or Champagne flute/Garnish with a fresh raspberry/Lemon twist expressed and discarded.",
        image: "./images/KirRoyale.jpg",
        favorite: "no",
        category: "champagne"        
    },
    {
        title: "LAST WORD",
        ingredients: [
            ".75 oz. London Dry Gin",
            ".75 oz. Luxardo Maraschino Liqueur",
            ".75 oz. Green Chartreuse",
            ".75 oz. Fresh Lime"                   
        ],
        directions: "Shake/Fine strain.Serve in a Nick & Nora glass.",
        image: "./images/LastWord.jpg",
        favorite: "no",
        category: "gin"       
    },
    {
        title: "LONG ISLAND ICED TEA",
        ingredients: [
            ".5 oz. Vodka",
            ".5 oz. Blanco Tequila",
            ".5 oz. White Rum",
            ".5 oz. London Dry Gin",
            ".75 oz. Cointreau",
            ".75 oz. Fresh Lemon"                    
        ],
        directions: "Shake/Strain/Collins/Ice/Top with Coca Cola/Lemon wedge.",
        image: "./images/LongIslandIceTea.jpg",
        favorite: "no",
        category: "vodka"       
    },
    {
        title: "MAI TAI",
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
        favorite: "no",
        category: "rum"       
    },
    {
        title: "MANHATTAN",
        ingredients: [
            "2.5 oz. Bourbon OR Rye whiskey",
            "1 oz. Italian Rosso Vermouth",
            "3 dashes Angostura Bitters"                    
        ],
        directions: "Stir/Strain/Brandied cherries on cocktail pick.",
        image: "./images/Manhattan.jpg",
        favorite: "no",
        category: "bourbon"       
    },
    {
        title: "MARGARITA",
        ingredients: [
            "2 oz. Blanco Tequila",
            ".75 oz. Cointreau (Combier is better if you have it)",
            ".75 oz. Fresh Lime",
            "Barspoon Simple Syrup (1:1)"                    
        ],
        directions: "Shake/Fine strain/Top with a Lime wedge.",
        image: "./images/Margarita.jpg",
        favorite: "no",
        category: "misc"               
    },
    {
        title: "MARTINEZ",
        ingredients: [
            "2 oz. Old Tom Gin",
            "1 oz. Italian Rosso Vermouth",
            ".25 oz. Luxardo Maraschino Liqueur",
            "2 dashes Angostura bitters",
            "1 dash Aromatic bitters"                    
        ],
        directions: "Stir/Strain/Coupe/Garnish with a Lemon twist.",
        image: "./images/Martinez.jpg",
        favorite: "no",
        category: "gin"               
    },
    {
        title: "MIMOSA",
        ingredients: [
            "1⁄2 Champagne",
            "1⁄2 Orange Juice"
        ],
        directions: "Carefully poured into a flute.",
        image: "./images/Mimosa.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "MINT JULEP",
        ingredients: [
            "2.25 oz. Bourbon",
            ".5 oz. Demerara Syrup (1:1)",
            "Handful mint"                             
        ],
        directions: "Crush mint in hand/Whip all ingredients with 3 pieces ice/Strain/Julep cup/Crushed ice/Mint sprigs.",
        image: "./images/MintJulep.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "MOJITO",
        ingredients: [
            "2 oz. White Rum",
            "1 oz. Fresh Lime",
            ".75 oz. Simple Syrup (1:1)",
            "2 Lime Twists",
            "Large handful of mint"                    
        ],
        directions: "Gentle Muddle/Whip shake with 2 ice cubes/Dump everythingvinto chilled Collins glass/Top with crushed ice/.5 oz Club soda/Garnish with lime wheel and mint sprig/Straw.",
        image: "./images/Mojito.jpg",
        favorite: "no",
        category: "rum"               
    },
    {
        title: "MOSCOW MULE (AND ALL MULES)",
        ingredients: [
            "2 oz. Vodka (or other base)",
            "1 oz. Fresh Lime",
            ".75 oz. Fresh Ginger Syrup",
            ".5 oz. Demerara Syrup (1:1)"                    
        ],
        directions: "Shake with 3 ice cubes/Strain into Collins glass with ice/Top with club soda/3 dashes of Angostura Bitters/Lime wedge/Straw.",
        image: "./images/MoscowMule.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "NEGRONI",
        ingredients: [
            "1.5 oz. London Dry Gin",
            "1 oz. Italian Rosso Vermouth",
            "1 oz. Campari"                               
        ],
        directions: "Short stir/Rock/Orange twist.",
        image: "./images/Negroni.jpg",
        favorite: "no",
        category: "gin"               
    },
    {
        title: "OLD CUBAN",
        ingredients: [
            "2 oz. Aged Rum",
            ".5 oz. Demerara Syrup (1:1)",
            ".5 oz. Fresh Lime",
            "2 dashes Angostura Bitters",
            "6 Mint Leaves"                    
        ],
        directions: "Shake with 3 ice cubes/Fine strain/Coupe/Champagne/Mint leaf.",
        image: "./images/OldCuban.jpg",
        favorite: "no",
        category: "rum"               
    },
    {
        title: "OLD FASHIONED",
        ingredients: [
            "2.5 oz. Bourbon OR Rye",
            ".5 oz. Demerara Syrup (1:1)",
            "3 dashes Angostura Bitters",
            ".5 dash Aromatic Bitters"                    
        ],
        directions: "Short stir/Large rock/Lemon and Orange twists.",
        image: "./images/OldFashioned.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "OLD MAID AKA LONDON MAID",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Simple Syrup (1:1)",
            "Handful of fresh mint leaves, gently squeezed",
            "2 cucumber slices"                    
        ],
        directions: "Whip shake with 3 ice cubes/Fine strain/Large rocks glass with cracked ice/Mint sprig/Cucumber slice/Straw.",
        image: "./images/OldMaid.jpg",
        favorite: "no",
        category: "gin"               
    },
    {
        title: "PALOMA",
        ingredients: [
            "1.5 oz. Blanco Tequila",
            ".5 oz. Mezcal",
            "1 oz. Fresh Grapefruit",
            ".75 oz. Fresh Lime",
            ".5 oz. Agave Syrup"                    
        ],
        directions: "Shake/Strain/Salt-rimmed Collins filled with ice/Straw/Lime wedge",
        image: "./images/Paloma.jpg",
        favorite: "no",
        category: "misc"               
    },
    {
        title: "WISE GUY",
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
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "TUSCAN FRESCO",
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
        favorite: "no",
        category: "non-alcoholic"      
    },
    {
        title: "FUJI APPLE SODA",
        ingredients: [
            "2 oz. Apple-Ginger Syrup",
            "3 oz. chilled club soda",
            "2 apple slices"                               
        ],
        directions: "Stir.",
        image: "./images/FujiAppleSoda.jpg",
        favorite: "yes",
        category: "non-alcoholic" 

    },
    {
        title: "STRAWBERRY AND GINGER COOLER",
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
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "LILIKOI",
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
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "ROCKING ORANGE",
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
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "RASPBERRY FIZZ",
        ingredients: [
            "1 scoop of muddled Raspberries",
            "1 oz. Fresh Lemon juice",
            "1 teaspoon rose water",
            ".75 oz. Simple syrup",
            "2 oz. chilled club soda"                   
        ],
        directions: "Mix until pink ",
        image: "./images/RaspberryFizz.jpg",
        favorite: "yes",
        category: "non-alcoholic"               
    },
    {
        title: "LADY LAVENDER'S MOCKTAIL",
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
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "SOPHISTICATED LADY",
        ingredients: [
            "1 unpeeled cucumber wheel, plus 1 peeled cucumber spear",
            "1 oz. Simple Syrup",
            "1/4 teaspoon salt",
            "2 oz. Cranberry juice",
            "1 oz. Fresh Lime juice"                    
        ],
        directions: "In a cocktail shaker, muddle the cucumber wheel, Simple syrup and salt. Add the ice and the juices and shake well. Double strain into a chilled Martini glass. Garnish with the spear.",
        image: "./images/SophisticatedLady.jpg",
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "ALMOND-FENNEL COOLER",
        ingredients: [
            ".75 oz. Orgeat (almond-flavored syrup)",
            ".75 oz. Fennel Syrup",
            ".5 oz. Fresh Lemon juice",
            "6 oz. Chilled club soda",
            "1 Fennel frond, for garnish (optional)"                    
        ],
        directions: "In a collins glass, combine the orgeat, Fennel Syrup and fresh lemon juice and stir well. Add ice, stir in the chilled club soda and garnish with the fennel fron.",
        image: "./images/Almond-FennelCooler.jpg",
        favorite: "no",
        category: "non-alcoholic"               
    },
    {
        title: "VIRGIN MOJITO",
        ingredients: [
            "2 oz Apple Juice",
            "1 oz Lime Juice",
            ".75 oz Simple Syrup (1:1);",
            "2 Lime Twists",
            ".5 oz Club Soda",
            "Large Handful Of Mint"
        ],
        directions: "Gently Muddle. Garnish with mint sprig.",
        image: "./images/Virgin-Mojito.jpg",
        favorite: "yes",
        category: "non-alcoholic"
    },
    {
        title: "ARABIAN SUN",
        ingredients: [
            "5 oz Orange Juice",
            "1 oz Lemonade",
            "1 oz Grendine"
        ],
        directions: "Stir lightly.",
        image:"./images/Arabian-Sun.jpg",
        favorite: "yes",
        category: "non-alcoholic"

    },
    {
        title: "THE LAMBORN",
        ingredients: [
            "2 oz. Mount Gay Silver rum",
            "2 oz. snap pea juice",
            "1 oz. Lime juice",
            ".5 oz. jasmine syrup",                     
        ],
        directions: "Shake with ice and strain into a highball glass over fresh ice. Garnish with pea shoots and flower.",
        image: "./images/TheLamborn.jpg",
        favorite: "no",
        category: "rum"               
    },
    {
        title: "WALKING FAR FROM HOME",
        ingredients: [
            "2 oz. Plantation White Rum",
            "1.5 oz. red currant puree",
            ".25 oz. Fresh lime juice",
            ".25 oz. maple syrup(1:1)",
            "1 pinch of Raw Earl Grey Tea",
            "1 dehydrated lime wheel (for garnish)"                    
        ],
        directions: "In cocktail shaker, combine all ingredients with ice and shake hard for 25 seconds. Double strain over fresh ice into a double rocks glass and garnish with the dehydrated lime wheel.",
        image: "./images/WalkingFarFromHome.jpg",
        favorite: "no",
        category: "rum"               
    },
    {
        title: "SUMMER MOON",
        ingredients: [
            "2 oz. Barcardi Silver rum",
            "1 oz. fresh Lime juice",
            "1 oz. house made hibiscus and dandelion root syrup",
            "1 oz. blood orange juice",
            "2 dashes of Fee Bros. Grapefruit Bitters",
            "4 muddled mint leaves"                    
        ],
        directions: "Muddle mint in a mixing tin. Adding remaining indgredients into mixing tin with ice. Shake and double strain over ice. Top with crushed ice halfmoon and drizzle hibiscus and dandelion root syrup over.",
        image: "./images/SummerMoon.jpg",
        favorite: "no",
        category: "rum"               
    },
    {
        title: "OLD GLORY",
        ingredients: [
            "8-10 blueberries",
            "2 oz. Long Island Vodka",
            "1 oz. Fresh Lemon juice",
            "1 oz. simple syrup",
            "2 oz. Oregon Pinot Noir"                 
        ],
        directions: "Muddle fresh blueberries at the bottom of a double old fashioned glass and top with ice. Add vodka, lemon, and simple syrup to a mixing glass and shake vigorously until chilled and combined. Strain over ice and blueberries. Carefully pour wine over a spoon into the cocktail to create a red wine 'float'.",
        image: "./images/OldGlory.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "THE CHELSEA",
        ingredients: [
            "1.7 oz. Crop Cucumber Vodka",
            "1 oz. St. Germain liqueur",
            "5-6 Muddled green grapes",
            ".5 oz. Fresh squeeze lemon"                      
        ],
        directions: "In a collins glass, combine the orgeat, Fennel Syrup and fresh lemon juice and stir well. Add ice, stir in the chilled club soda and garnish with the fennel fron.",
        image: "./images/TheChelsea.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "GLASS GARDENS",
        ingredients: [
            "2 oz. Vodka",
            "1 oz. Fresh heirloom tomato juice",
            ".25 oz. Fresh Lemon juice",
            ".25 oz. Jalapeno simple syrup",
            "Muddled cucumber"
                                
        ],
        directions: "Muddle 3 cucumber slices with jalapeno simple syrup,add vodka, lemon, and tomato juice, shake with ice, strain into Luxardo Maraschino-rinsed coupe. Garnish with lemon swath/ jalapeno slice.",
        image: "./images/GlassGardens.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "PEAR MARTINI",
        ingredients: [
            "1.5 oz. vodka",
            "1 oz. Elderflower liqueur ",
            "Champagne top",
            "1 Pear slice"                           
        ],
        directions: "Combine vodka and elderflower liqueur in a cocktail shaker with ice, shake and strain into a martini glass. Top with champagne and garnish with a pear slice.",
        image: "./images/PearMartini.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "RASPBERRY COSMOPOLITAN",
        ingredients: [
            "2 oz. Vodka",
            "1 oz. Lemon juice",
            ".5 oz. Honey syrup",
            "5 Raspberries",
            "Prosecco"                    
        ],
        directions: "Shake all ingredients and double strain in a coupe glass. Top with prosecco.",
        image: "./images/RaspberryCosmopolitan.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "PUMPKIN SPICE LEBOWSKI",
        ingredients: [
            "2 oz. Reyka Vodka",
            "1 oz. Coffee liqueur",
            "1 oz. Heavy cream",
            "1/2 tsp Pumpkin Pie Spice"
                               
        ],
        directions: "Combine all ingredients in shaker over ice. Shake and serve in a rocks glass.",
        image: "./images/PumpkinSpiceLebowski.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "20TH CENTURY",
        ingredients: [
            "1.5 oz. Vodka",
            ".75 oz. Lemon juice",
            ".25 oz. Creme de Cacao",
            ".25 oz. Spiced pear liqueur",
            ".125 oz. of Maple syrup",
            "1 dash Chocolate bitters"                   
        ],
        directions: "Combine all ingredients in a shaker with ice. Shake to combine.",
        image: "./images/20thCentury.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "THE BLOODY FALL",
        ingredients: [
            "2 oz. Reyka Vodka",
            "2 oz. Tomato juice",
            ".25 oz. Lime juice",
            "2 dashes of Worcestershire sauce",
            "2 dashes Tabasco"                    
        ],
        directions: "Pinch celery salt, cumin, salt, black pepper. Combine all ingredients into cocktail shaker and roll back and forth. Serve in Collins glass and garnish with lime, peppers, and cherry tomatoes.",
        image: "./images/TheBloodyFall.jpg",
        favorite: "no",
        category: "vodka"               
    },
    {
        title: "LOVE LETTERS",
        ingredients: [
            "1 oz. Bourbon",
            ".5 oz. Patron Citronge orange liqueur",
            "7 dashes of Angostura bitters",
            "7 dashes of Peychauds bitters",
            "Champagne",
            "1 Lemon twist"                    
        ],
        directions: "Add all ingredients( except champagne) into a chilled mixing vessel and stir for 15 seconds. Pour into a chilled coupe, top off with champagne and garnish with an extra long lemon twist.",
        image: "./images/LoveLetters.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "THE LIBERTINE",
        ingredients: [
            "2 oz. Simple syrup",
            "2 sprigs Fresh Rosemary",
            "4 oz. Bourbon",
            "2 oz. Fresh Lemon juice",
            "2 tsp Orange marmalade",
            "1 tbsp Maple syrup",
            "1 tbsp Fresh Orange juice",
            "1 Egg white"                    
        ],
        directions: "Boil simple syrup amd rosemary in a small saucepan, and allow it to cool to room temperature. Strain the syrup and add it to a shaker with bourbon, lemon juice and marmalade. Add ice and shake. Pour into a glass with ice. Add maple syrup, orange juice, and egg white to the shaker. Shake until frothy and pour over cocktail. Garnish with a sprig of rosemary.",
        image: "./images/TheLibertine.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "THE OPTIMIST",
        ingredients: [
            "2 oz. Lustau Palo Cortado Sherry",
            ".5 oz. Amaro Nonino",
            ".25 oz. Vermont grade B maple syrup",
            "1 barspoon of E.H. Taylor Barrel Strength Bourbon",
            "1 dash Regan's Orange Bitters"                    
        ],
        directions: "Stir with ice and strain into a Nick and Nora glass. Garnish with an orange peel.",
        image: "./images/TheOptimist.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "CASANOVA",
        ingredients: [
            "1 oz. Elijah Craig Small Batch bourbon",
            ".25 oz. Licor 43",
            ".25 oz. St. Elizabeth allspice dram",
            ".25 oz. Fresh Lemon juice",
            "1 barspoon PAMA Pomegranate liqueur",
            "1 barspoon Don Nuno Oloroso sherry",
            "3 oz. Cinnamon-lemon infused hot water"                    
        ],
        directions: "Build all ingredients into a small toddy mug and top with the cinnamon-lemon infused hot water, add garnish, and serve.",
        image: "./images/Casanova.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "SPICE ME UP",
        ingredients: [
            "2 oz. Bourbon",
            ".5 oz. Allspice dram(such as Cotton & Reed Allspice Dram)",
            ".5 oz. Simple syrup",
            ".5 oz. Lemon juice",
            "Angostura bitters"                 
        ],
        directions: "Add all ingredients to a shaker with ice and shake well. Double strain into a rocks glass with a big ice cube. Garnish with a lemon segment on top of the ice cube.",
        image: "./images/SpiceMeUp.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "AUTUMN LEAVES",
        ingredients: [
            "2 slices Orange",
            "3 slices Lemon",
            "25.3605 oz. Knob Creek Bourbon",
            "50.72103 oz. Dry Apple cider",
            "6 oz. Pimento dram(such as The Bitter Truth Pimento Dram)",
            "8 oz. Apple cider syrup( such as King Arthur Flour Boiled Cider)",
            "25 dashes Angostura bitters"                 
        ],
        directions: "Place citrus in a warm pot, cook until brown on both sides. Add cider, syrup, pimento dram, bitters and whiskey.(In that order, unless you like fire.) Bring to a simmer and serve in 8 oz. mug. Garnish with one star anise.",
        image: "./images/AutumnLeaves.jpg",
        favorite: "no",
        category: "bourbon"               
    },
    {
        title: "ROYAL JULEP",
        ingredients: [
            "1 oz.Absolut Elyx Vodka",
            ".75 oz. Lemon juice",
            ".5 oz. Creme de Menthe",
            "1 oz. Prosecco",
            ".5 oz. Raspberry syrup"                 
        ],
        directions: "Combine Elyx, lemon juice, Creme de Menthe, and prosecco into a julep cup. Add crushed ice till about 3/4 full. Stir to dilute and chill. Add more crushed ice to create a mound, then drizzle raspberry syrup over the top. Garnish with a mint sprig and a raspberry.",
        image: "./images/RoyalJulep.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "POMEGRANATE ROYALE",
        ingredients: [
            "5 Pomegranate seeds",
            "1 oz. Pomegranate liqueur",
            "4 oz. Chilled Champagne",
                           
        ],
        directions: "Add pomegranate seed to glass. Add liqueur and pour champagne.",
        image: "./images/PomegranateRoyale.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "APRICOT FIZZ",
        ingredients: [
            "1 tbsp Vodka",
            "2 oz.  Apricot nectar",
            "4 oz. Champagne",
                           
        ],
        directions: "Pour the vodka and nectar into a flute. Top with champagne",
        image: "./images/ApricotFizz.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "GALLIANO FIZZ",
        ingredients: [
            "1.5 oz. Don q anejo tequila",
            ".5 oz. Galliano Yellow",
            ".5 oz. St. Germain",
            "1 oz. Lemon juice",
            ".75 oz. simple syrup",
            ".75 oz egg white",
            "5 drops Orange blossom water","Prosecco",
            "Dried Blood Orange wheel"                 
        ],
        directions: "Dry shake all ingredients. Add ice and shake again. Pour into a brandy snifter, top w/ prosecco and 5 drops orange blossom water. Garnish with a dried blood orange wheel.",
        image: "./images/GallianoFizz.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "IMPERIAL SPRITZ",
        ingredients: [
            ".75 oz. Fresh Lemon juice",
            ".75 oz. Raspberry syrup",
            ".25 oz. Creme de Cassis",
            "1 oz. Grey Goose Vodka",
            "2 oz. Prosecco",
            "2 Lemon wheels, for garnish",
            "Fresh mint, for garnish"                 
        ],
        directions: "In a shaking tin, add the lemon juice, raspberry syrup, cassis and vodka. Shake until indgredients are just combined, about 8 seconds. Add ice to a wine glass. Pour cocktail over ice; top with prosecco. Garnish drink with 2 lemon wheels and fresh bouquet of mint.",
        image: "./images/ImperialSpritz.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "INGRID BERGMAN",
        ingredients: [
            "1 dash Grapefruit bitters",
            "1 dash absinthe",
            ".5 oz. Lemon syrup",
            ".5 oz. Cedrat",
            ".5 oz. Beer distillate",
            "Top with Champagne"                 
        ],
        directions: "Stir ingredients with ice. Top with champagne. Garnish with grapefruit zest.",
        image: "./images/IngridBergman.jpg",
        favorite: "no",
        category: "champagne"               
    },
    {
        title: "CRANBERRY SPARKLE",
        ingredients: [
            "1.5 oz. Tito's Handmade Vodka",
            ".5 oz. Lime Juice",
            ".5 oz. Simple syrup",
            "1 tbsp cranberry sauce(from a can)",
            "Splash of champagne"                 
        ],
        directions: "Put Tito's Handmade Vodka, lime juice, simple syrup and cranberry sauce in a shaker with ice, and shake vigorously- takes some real shaking to break down the cranberries. Strain into a glass with ice, top with a splash of champagne. Garnish with lime.",
        image: "./images/CranberrySparkle.jpg",
        favorite: "no",
        category: "champagne"               
    },
    
     
]

db.Drink
  .remove({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });