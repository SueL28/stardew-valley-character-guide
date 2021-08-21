/* ALEX BUTTON */
function characterButtonAlex() {
    let promptAnswer = prompt(
      "What would you like to know about Alex, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Alex LOVES these gifts: Complete Breakfast, Salmon Dinner, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Alex LIKES these gifts: Corn, Crocus, Eggs(no void Eggs), Green Bean, Kale, Sweet Pea, Parnsip, Potato, Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Alex DISLIKES these gifts: Salmonberry, Wild Horseradish and Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Alex HATES these gifts: Holly, Quartz, and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Alex lives with his grandparents George and Evelyn, his birthday is on Summer 13. Alex's movement SCHEDULE during SPRING Alex will leave his home at 8 AM if it is not raining and will hang around his grandparent's home. SUMMER Alex will be found on the beach or running the ice-cream stand near the museum. Summer 16th Alex will be at the Clinic. FALL he will hang around inside and outisde of his grandparent's home. WINTER Alex will usually be at the Spa exercising in the change room if he is not there then he is at his grandparent's home."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let alexButton = document.querySelector(".character-button-alex");
  alexButton.addEventListener("click", characterButtonAlex);

  /* ABIGAIL BUTTON*/

  function characterButtonAbigail() {
    let promptAnswer = prompt(
      "What would you like to know about Abigail, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Abigail LOVES these gifts: Amethyst, Banana Pudding, Blackberry Cobbler, Chocolate Cake, Pufferfish, Pumpkin, Spicy Eel, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Abigail LIKES these gifts: Blueberry, Crocus, Sweet Pea, Tulip, Quartz"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Abigail DISLIKES these gifts: All Eggs, All Fruit except Fruit from Trees, All Vegetables except Hops, Pumpkin, Tea Leaves, and Wheat, Sugar, Wild Horseradish and Universal Stardew Dislikes except Pufferfish"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Abigail HATES these gifts: Clay, Holly and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Abigail lives at Pierre's store, her birthday is Fall 13. Her parents are are Pierre and Caroline. On sunny SPRING/SUMMER/FALL days Abigail will be on the brdige at the river east of Pierre's store. You can generally find Abigail either at Robin's house or at the graveyard. When it rains Abigial will move at random around town. In WINTER Abigail can be either at home, at Robin's, at The Stardrop Saloon or at the Wizard's tower."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let abigailButton = document.querySelector(".character-button-abigail");
  abigailButton.addEventListener("click", characterButtonAbigail);

  /* ELLIOTT BUTTON*/

  function characterButtonElliott() {
    let promptAnswer = prompt(
      "What would you like to know about Elliot, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Elliott LOVES these gifts: Crab Cakes, Duck Feather, Lobster, Pomegrante, Squid Ink, Tom Kha Soup Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Elliott LIKES these gifts: Octopus, Parsnip, Squid, Tulip");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Elliott DISLIKES these gifts: All Milk, Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Pizza, Purple Mushroom, Snow Yam, Wild Horseradish, Winter Root and Universal Stardew Dislikes except fish"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Elliott HATES these gifts: Amaranth, Quartz, Salmonberry, Sea Cucumber and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Elliott lives in a cabin on the beach. Elliott's birthday is Fall 5. Elliot will always be in his cabin when it is raining. SPRING Elliott can be found on the bridge before the beach or in the Stardrop Saloon. SUMMER Elliott will be either at Pierre's General Store, the docks  next to Willy's house or by the forest near Leah's House. FALL Elliott will be either at Pierre's General Store, the dock's next to Willy's house or at the Library. WINTER Elliott will be either at Pierre's General Store, the Stardrop Saloon, the Museum or the Library."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let elliottButton = document.querySelector(".character-button-elliott");
  elliottButton.addEventListener("click", characterButtonElliott);

  /* EMILY BUTTON*/

  function characterButtonEmily() {
    let promptAnswer = prompt(
      "What would you like to know about Emily, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Emily LOVES these gifts: Amethyst, Aquamarine, Cloth, Emerald, Jade, Ruby, Survival Burger, Wool, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Emily LIKES these gifts: Crocus, Daffodil, Parsnip");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Emily DISLIKES these gifts: Fried Eel, Ice Cream, Rice Pudding, Salmonberry, Spicy Eel and Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Emily HATES these gifts: Fish Tacos, Holly, Maki Roll, Salmon Dinner, Sashimi and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Emily lives right next to Jodi's house (the house with a Sun on it). Emily's birthday is Spring 27. Emily works in the evenings at the Stardrop Saloon. Emily's is usually found at home or at the Stardrop Saloon. When she is not at home or at the Saloon she will either be doing exercises in the back of Pierre's General Store, visiting Sandy in Calico Desert or at Harvey's Clinic. "
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let emilyButton = document.querySelector(".character-button-emily");
  emilyButton.addEventListener("click", characterButtonEmily);

  /* HALEY BUTTON*/

  function characterButtonHaley() {
    let promptAnswer = prompt(
      "What would you like to know about Haley, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Haley LOVES these gifts: Coconut, Fruit Salad, Pink Cake, Sunflower, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Haley LIKES these gifts: Crocus, Daffodil, Sweet Pea, Tulip");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Haley DISLIKES these gifts: All Eggs, All Fruit (except Coconut), All Vegetables (except Hops, Tea Leaves & Wheat), Chanterelle, Common Mushroom, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Purple Mushroom, Quartz, Snow Yam, Winter Root and Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Haley HATES these gifts: All Fish, Clay, Prismatic Shard, Wild Horseradish, and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Haley lives with her sister Emily. Haley's birthday is Spring 14. In SPRING she can be usually found by the fountain (left of the Community Centre) or by the river near Marnie's Ranch. SUMMER Haley will either be by the ice cream stand, the beach or at home. FALL and WINTER Haley will be either beside the fountain or inside her home."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let haleyButton = document.querySelector(".character-button-haley");
  haleyButton.addEventListener("click", characterButtonHaley);

  /* HARVEY BUTTON*/

  function characterButtonHarvey() {
    let promptAnswer = prompt(
      "What would you like to know about Harvey, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Harvey LOVES these gifts: Coffee, Lobster Bisque, Pickles, Super Meal, Truffle Oil, Wine, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Harvey LIKES these gifts: Blackberry, Blueberry, Bok Choy, Corn, Daffodil, Duck Egg, Duck Feather, Goat Milk, Grape, Melon, Parsnip, Potato, Purple Mushroom, Strawberry, Wild Plum"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Harvey DISLIKES these gifts: Blueberry Tarts, Bombs, Bread, Chocolate Cake, Cookies, Cranberry Sauce, Fried Mushrooms, Glazed Yams, Goat Cheese, Hashbrowns, Ice Cream, Pancakes, Pink Cake, Pizza, Rhubarb Pie, Rice Pudding, All Construction Materials, Anything from the Mines, Jack-O-Lanterns, All Fish except Clam, Geodes, Seeds, Cheese and Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Harvey HATES these gifts: Coral, Nautilus Shells, Rainbow Shells, Salmonberry, Spice Berries, Bait, Monster Loot, Artifacts, and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Harvey lives in the Clinic, his birthday is Winter 14. Harvey is usually at the front of his clinic or walking around Pelican Town. There are times where Harvey will be inside the museum or Pierre's General Store. "
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let harveyButton = document.querySelector(".character-button-harvey");
  harveyButton.addEventListener("click", characterButtonHarvey);

  /* LEAH BUTTON*/

  function characterButtonLeah() {
    let promptAnswer = prompt(
      "What would you like to know about Leah, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Leah LOVES these gifts: Goat Cheese, Poppyseed Muffin, Salad, Stir Fry, Truffle, Vegetable Medley, Wine, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Leah LIKES these gifts: Blackberry, Chanterelle, Cheese, Common Mushroom, Crocus, Daffodil Dandelion Driftwood, Eggs, Ginger, Hazelnut, Holly, Leek, Magma Cap, Milk, Morel, Purple Mushroom, Salmonberry, Snow Yam, Spring Onion, Wild Horseradish, Winter Root"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Leah DISLIKES these gifts: All Foraged Minerals except Earth Crystal, All Gems except Diamond and Prismatic Shard, Carp Surprise, Cookie, Fried Egg, Ice Cream, Pink Cake, Rice Pudding, Seaweed, Survival Burger, Truffle and Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Leah HATES these gifts: Bread, Hashbrowns, Pancakes, Pizza, Void Egg and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Leah lives in a cottage her birthday is Winter 23. When it is raining Leah will be at home. Leah will usually be in her home in the morning. The afternoon she will be either at Pierre's General Store or on the Beach in the SUMMER. In the evenings Leah will be found at the Stardrop Saloon."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let leahButton = document.querySelector(".character-button-leah");
  leahButton.addEventListener("click", characterButtonLeah);

  /* MARU BUTTON*/

  function characterButtonMaru() {
    let promptAnswer = prompt(
      "What would you like to know about Maru, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Maru LOVES these gifts: Battery Pack, Cauliflower, Cheese Cauliflower, Diamond, Gold Bar, Iridium Bar, Miner's Treat, Rhubarb Pie, Strawberry, Prismatic Shard, Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Maru LIKES these gifts: Amaranth, Copper Bar, Crocus, Eggplant, Iron Bar, Parsnip, Sweet Pea, Yam"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Maru DISLIKES these gifts: Blackberry, Cave Carrot, Celestine, Cherry Bomb, Chub, Clay, Common Mushroom, Crayfish, Crystal Fruit, Fiber, Field Snack, Frozen Geode, Geode, Hardwood, Herring, Iridium Bar, Iridium Ore, Maple Syrup, Oyster, Refind Quartz, Salmonberry, Sardine, Solar Essence, Spring Onion, Sunfish, Thunder Egg"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Maru HATES these gifts: Bat Wing, Copper Ore, Dwarf Scroll III, Green Algae, Holly, Iron Ore, Joja Cola, Pickled Corn or Tomato, Poppy, Red Mushroom, Rusty Cog, Rusty Spoon, Rusty Spur, Sea Urchin, Snail, Snow Yam, Stone, Truffle, Wild Honey and Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Maru lives with her parents Robin and Demetrius in the house by the Caves. Maru works at Harvey's Clinic, her birthday is on Summer 10. Maru can usually be found at home, at the Clinic, sitting near the Community Center or sitting near the Stardrop Saloon. SUMMER Maru will also stand by the lake near her house and WINTER Maru will be sitting on the bench north of the graveyard."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let maruButton = document.querySelector(".character-button-maru");
  maruButton.addEventListener("click", characterButtonMaru);

  /* PENNY BUTTON*/

  function characterButtonPenny() {
    let promptAnswer = prompt(
      "What would you like to know about Penny, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Penny LOVES these gifts: Diamond, Emerald, Melon, Poppy, Red Plate, Roots Platter, Sandfish, Tom Kha Soup"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Penny LIKES these gifts: Corn, Dandelion, Leek, Parsnip, Sweet Pea, Sunflower, Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Penny DISLIKES these gifts: Algae Soup, Duck Feather, Pale Broth, Purple Mushroom, Quartz, Red Mushroom, Salmon Berry, Wool and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Penny HATES these gifts: Beer, Grape, Holly, Hops, Mead, Pale Ale, Pina Colada, Rabbit's Foot, Wine and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Penny lives in the trailer beside Evelyn and George's house, her birthday is Fall 2. When it is raining Penny is usually inside her trailer or at the museum. Penny is usually around Jas and Vincent during mid day and can be found near the graveyard, playground or museum. During the SPRING Penny may sit at the bench outside of the Stardrop Saloon. During SUMMER Penny will also go to Robin's house, the Community Center or stand near the river where Joja Mart is. "
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let pennyButton = document.querySelector(".character-button-penny");
  pennyButton.addEventListener("click", characterButtonPenny);

  /* SAM BUTTON*/

  function characterButtonSam() {
    let promptAnswer = prompt(
      "What would you like to know about Sam, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Sam LOVES these gifts: Cactus Fruit, Maple Bar, Pizza, Tigerseye, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Sam LIKES these gifts:  Amethyst, Apple, Apricot, Aquamarine, Beer, Cheese, Cherry, Chocolate Cake, Chowder, Cloth, Coffee, Cookies, Crocus, Diamond, Joja Cola, Egg (Chicken/Duck), Emerald, Glazed Yams, Honey, Ice Cream, Jade, Jelly, Joja Cola, Orange, Pale Ale, Peach, Pomegranate, Sweet Pea, Topaz, Trout Soup, Tulip, Wine"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Sam DISLIKES these gifts: Acorn, Cauliflower, Cockle, Common Mushroom, Copper, Corn, Daffodil, Dandelion, Eggplant, Field Snack, Garlic, Hardwood, Hay, Hazelnut, Herring, Holly, Leek, Mussel, Parsnip, Pike, Potato, Quartz, Salmonberry, Sardine, Seaweed, Smallmouth Bass, Snow Yam, Solar Essence, Spring Onion, Tomato, Wheat, Wild Horseradish, Wild Plum, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Sam HATES these gifts: All Mayo, Pickles, Coal, All Mined Goods, Refined Quartz, Bait, Oil of Garlic, Red Mushrooms, Sap, Sea Urchins, Seafoam Pudding, Snails, Strange Buns, Sugar and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Sam lives with his parents Jodi and Kent, his birthday is on Summer 17. Sam is usually at home in his room, hanging around outside his house, inside the Stardrop Saloon or inside the Museum. In SPRING Sam will have an additional spot he will move to, he can be found around the Mayor's house."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let samButton = document.querySelector(".character-button-sam");
  samButton.addEventListener("click", characterButtonSam);

  /* SEBASTIAN BUTTON*/

  function characterButtonSebastian() {
    let promptAnswer = prompt(
      "What would you like to know about Sebastian, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Sebastian LOVES these gifts: Frozen Tear, Obsidian, Pumpkin Soup, Sashimi, Void Eggs, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Sebastian LIKES these gifts: Cauliflower, Parsnip, Potato, Pumpkin and Tomato"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Sebastian DISLIKES these gifts: All Flowers, Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Purple Mushroom, Salmonberry, Snow Yam, Wild Horseradish, Winter Root, and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Sebastian HATES these gifts: All Artisan Goods except Coffee, Green Tea and Oil, All Eggs except Void Eggs, Clay, Complete Breakfast, Farmer's Lunch, Omelet and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Sebastian lives in the basement of Robin's home, Robin is his mother and Demetrius is his Step-Father. Sebastian's birthday is on Winter 10. Sebastian is usually at home. In SPRING Sebastian can be found either on the pier or at the Stardrop Saloon. In SUMMER Sebastian can be found again either at the pier, smoking at the train station or in Sam's bedroom. In FALL Sebastian can be either in the Stardrop Saloon, smoking by the lake near his house, in Sam's bedroom or at home. In WINTER Sebastian is either near the lake around the mines smoking, at home or at the Stardrop Saloon."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let sebastianButton = document.querySelector(".character-button-sebastian");
  sebastianButton.addEventListener("click", characterButtonSebastian);

  /* SHANE BUTTON*/

  function characterButtonShane() {
    let promptAnswer = prompt(
      "What would you like to know about Shane, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Shane LOVES these gifts: Beer, Hot Pepper, Pepper Poppers, Pizza and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Shane LIKES these gifts: Blue Jazz, Corn, Eggs, Fairy Rose, Fruit, Green Bean and Sweet Pea"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Shane DISLIKES these gifts: Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Purple Mushroom, Seaweed, Snow Yam, Wild Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Shane HATES these gifts: Pickles, Quartz and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Shane lives with his Aunt Marnie at her Ranch and is the Godfather to Jas. Shane's birthday is on Spring 20. Shane can usually be found either on Marnie's Ranch, in the Stardrop Saloon or at Pierre's General Store."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let shaneButton = document.querySelector(".character-button-shane");
  shaneButton.addEventListener("click", characterButtonShane);

  /*NON-MARRIAGE CHARACTERS */

  /* CAROLINE BUTTON*/

  function characterButtonCaroline() {
    let promptAnswer = prompt(
      "What would you like to know about Caroline, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Caroline LOVES these gifts: Fish Taco, Green Tea, Summer Spangle, Tropical Curry, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Caroline LIKES these gifts: Blue Jazz, Corn, Crocus, Daffodil, Eggplant, Fairy Rose, Parsnip, Radish, Tea Leaves and Tomato"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Caroline DISLIKES these gifts: Common Mushroom, Amaranth, Leek, Chanterelle, Wild Horseradish, All Mayo, Holly, Dandelion, Purple Mushroom, Hazelnut, Winter Root, Morel, Snow Yam and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Caroline HATES these gifts: Salmonberry, Quartz and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Caroline lives with Pierre at his store, her birthday is on Winter 7. You can usually find Caroline inside her tea room in the morning or standing or sitting near the town square. Some times Caroline will be exercising in her house or by the Community Center. "
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let carolineButton = document.querySelector(".character-button-caroline");
  carolineButton.addEventListener("click", characterButtonCaroline);

  /* CLINT BUTTON*/

  function characterButtonClint() {
    let promptAnswer = prompt(
      "What would you like to know about Clint, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Clint LOVES these gifts: Aquarmarine, Artichoke Dip, Emerald, Fiddlehead Risotto, Gold Bar, Iridium Bar, Omni Geode, Ruby, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Clint LIKES these gifts: Copper Bar, Iron Bar, Parsnip and Tomato"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Clint DISLIKES these gifts: Quartz, Salmonberry, Wild Horseradish, All Flowers and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Clint HATES these gifts: Holly and All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Clint is the town's blacksmith and lives in his shop behind the museum. Clint's birthday is on Winter 26. Clint can usually be either found during the day in his shop or in the evening at the Stardrop Saloon. "
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let clintButton = document.querySelector(".character-button-clint");
  clintButton.addEventListener("click", characterButtonClint);

  /* DEMETRIUS BUTTON*/

  function characterButtonDemetrius() {
    let promptAnswer = prompt(
      "What would you like to know about Demetrius, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Demetrius LOVES these gifts: Bean Hotpot, Ice Cream, Rice Pudding, Strawberry, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Demetrius LIKES these gifts: Corn, Hot Pepper, Parsnip and Purple Mushroom"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Demetrius DISLIKES these gifts: Quartz and All Universal Stardew Dislikes except Fish"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Demetrius HATES these gifts: Holly and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Demetrius is the town's Scientist and his the husband to Robin. Demetrius' birthday is on Summer 19. When it is raining Demetrius will stay at home. in SPRING he can be found either at home, standing by his house or the lake by the mines or at the Stardrop Saloon. SUMMER he can be found either at home, by the Community Center or at the Stardrop Saloon. FALL he will either be at home or at the Saloon. WINTER he will either be at home or in the Saloon."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let demetriusButton = document.querySelector(".character-button-demetrius");
  demetriusButton.addEventListener("click", characterButtonDemetrius);

  /* DWARF BUTTON*/

  function characterButtonDwarf() {
    let promptAnswer = prompt(
      "What would you like to know about Dwarf, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Dwarf LOVES these gifts: Amethyst, Aquarmarine, Emerald, Jade, Omni Geode, Ruby, Topaz, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Dwarf LIKES these gifts: Dwarf Scroll I - IV, Dwarvish Helm and Dwarf Gadget"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Dwarf DISLIKES these gifts: Chanterelle, Common Mushroom, Daffodil, Dandelion, Hazelnut, Holly, Leek, Morel, Purple Mushroom, Salmonberry, Snow Yam, Wild Horseradish, Winter Root, All Flowers and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Dwarf HATES these gifts: All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "The Dwarf lives right beside the cave entrance, you can access him once you upgrade your pickaxe enough and break the wall. The Dwarf will always be in the cave entrance."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let dwarfButton = document.querySelector(".character-button-dwarf");
  dwarfButton.addEventListener("click", characterButtonDwarf);

  /* EVELYN BUTTON*/

  function characterButtonEvelyn() {
    let promptAnswer = prompt(
      "What would you like to know about Evelyn, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Evelyn LOVES these gifts: Beets, Chocolate Cake, Diamond, Fairy Rose, Stuffing, Tulip, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Evelyn LIKES these gifts: Baked Fish, Crocus, Daffodil, Summer Spangle and Sweet Pea"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Evelyn DISLIKES these gifts: Quartz, Wild Horseradish, All Flowers and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Evelyn HATES these gifts: Clam, Clay, Coral, Fried Eel, Garlic, Holly, Maki Roll, Salmonberry, Sashimi, Spice Berry, Spicy Eel, Trout Soup, All Fish and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Evelyn lives with her husband George in the blue house to the right of Pierre's General Store. Evelyn's birthday is on Winter 20. Evelyn is in charge of the town flowers and you can usually find her around the flower pots in the Town Square if she is not there then she is usually home. If she is not found in either of those places she is either inside the Community Center or at the Clinic."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let evelynButton = document.querySelector(".character-button-evelyn");
  evelynButton.addEventListener("click", characterButtonEvelyn);

  /* GEORGE BUTTON*/

  function characterButtonGeorge() {
    let promptAnswer = prompt(
      "What would you like to know about George, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "George LOVES these gifts: Fried Mushroom, Leek, and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("George LIKES these gifts: Daffodil");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "George DISLIKES these gifts: Salmonberry, Wild Horseradish, All Flowers and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "George HATES these gifts: Clay, Holly, Dandelion, Quartz and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "George lives with his wife Evelyn, his birthday is on Fall 24. George can usually be found inside or around his home. There will be ocassions where he will be either at the Clinic or at the back of Pierre's General Store at the Chapel."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let georgeButton = document.querySelector(".character-button-george");
  georgeButton.addEventListener("click", characterButtonGeorge);

  /* GUS BUTTON*/

  function characterButtonGus() {
    let promptAnswer = prompt(
      "What would you like to know about Gus, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Gus LOVES these gifts: Diamond, Escargot, Fish Taco, Orange, Tropical Curry and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Gus LIKES these gifts: Cauliflower, Kale, Parsnip, Potato and Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Gus DISLIKES these gifts: Salmonberry, Wild Horseradish and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Gus HATES these gifts: Coleslaw, Holly, Quartz and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Gus lives at the Stardrop Saloon, his birthday is on Summer 8. George can usually be found in the Stardrop Saloon, however there will be ocasions where he will be at Pierre's General Store, the Community Center or the Clinc."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let gusButton = document.querySelector(".character-button-gus");
  gusButton.addEventListener("click", characterButtonGus);

  /* JAS BUTTON*/

  function characterButtonJas() {
    let promptAnswer = prompt(
      "What would you like to know about Jas, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Jas LOVES these gifts: Fairy Rose, Pink Cake, Plum Pudding and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Jas LIKES these gifts: Coconut, Crocus, Daffodil, Sweet Pea and Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Jas DISLIKES these gifts: Chanterelle, Common Mushroom, Dandelion, Hazelnut, Holly, Leek, Morel, Purple Mushroom, Quartz, Snow Yam, Winter Root, All Eggs, All Fruit, All Vegetables and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Jas HATES these gifts: Clay, Triple Shot Espresso, Wild Horseradish, All Artisian Goods and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Jas lives with her Aunt Marnie at her ranch, her birthday is on Summer 4. Jas is usually jumping rope by the large tree closest to the Wizard's Tower. If she is not there she is with Penny and Vincent at the Museum or the Playground. If it is raining Jas will be at home."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let jasButton = document.querySelector(".character-button-jas");
  jasButton.addEventListener("click", characterButtonJas);

  /* JODI BUTTON*/

  function characterButtonJodi() {
    let promptAnswer = prompt(
      "What would you like to know about Jodi, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Jodi LOVES these gifts: Chocolate Cake, Crispy Bass, Diamond, Eggplant Parmesan, Fried Eel, Pancakes, Rhubarb Pie, Vegetable Medley, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Jodi LIKES these gifts: Eggs, Milk, Fruits except Spice Berry, Parnsip and Sweet Pea"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Jodi DISLIKES these gifts: Chanterelle, Common Mushroom, Garlic, Hazelnut, Holly, Leek, Morel, Purple Mushroom, Quartz, Snow Yam, Wild Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Jodi HATES these gifts: Daffodil, Dandelion, Spice Berry and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Jodi lives with her husband Kent, their home is right beside Emily's house on the Southwest side of the Town. Jodi's birthday is Fall 11. Jodi can usually be found at home, at Pierre's Store or at Joja Mart, if it is open or the Community Center if it is open. In SPRING Jodi will exercise once a week at the back of Pierre's store."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let jodiButton = document.querySelector(".character-button-jodi");
  jodiButton.addEventListener("click", characterButtonJodi);

  /* KENT BUTTON*/

  function characterButtonKent() {
    let promptAnswer = prompt(
      "What would you like to know about Kent, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Kent LOVES these gifts: Fiddlehead Risotto, Roasted Hazelnuts, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Kent LIKES these gifts: Daffodil, Eggs, Fruits, Parsnip and Sweet Pea"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Kent DISLIKES these gifts: Quartz, Snow Yam and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Kent HATES these gifts: Algae Soup, Holly, Sashimi, Tortilla, All Milk and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Kent lives with his wife Jodi, his birthday is on Spring 4. Kent is usually standing by a tree near his house or by the sewer. Otherwise he will be at home. If he is not at either spot he will be at the Stardrop Saloon with Jodi."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let kentButton = document.querySelector(".character-button-kent");
  kentButton.addEventListener("click", characterButtonKent);

  /* KROBUS BUTTON*/

  function characterButtonKrobus() {
    let promptAnswer = prompt(
      "What would you like to know about Krobus, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Krobus LOVES these gifts: Diamond, Iridum Bar, Pumpkin, Void Eggs, Wild Horseradish, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Krobus LIKES these gifts: Gold Bar and Quartz");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Krobus DISLIKES these gifts: All Cooking except Bread, Fried Egg, Seafoam Pudding and Strange Bun, Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Life Elixir, Magma Cap, Morel, Purple Mushroom, Salmonberry, Snow Yam, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Krobus HATES these gifts: All Universal Stardew Hates except Void Mayo"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Krobus lives in the Sewer, his birthday is on Winter 1. Krobus will never leave the Sewers and you can gain access to Krobus after you obtain the Rusty Key."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let krobusButton = document.querySelector(".character-button-krobus");
  krobusButton.addEventListener("click", characterButtonKrobus);

  /* LEO BUTTON*/

  function characterButtonLeo() {
    let promptAnswer = prompt(
      "What would you like to know about Leo, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Leo LOVES these gifts: Duck Feather, Mango, Ostrich Egg and Poi"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Leo LIKES these gifts: Dragon Tooth, Mango Sticky Rice, Nautilus Shell, Quartz, Rainbow Shell, Sea Urchin and Spice Berry"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Leo DISLIKES these gifts: Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Leek, Magma Cap, Pickles, Purple Mushroom, Salmonberry, Snow Yam, Wild Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Leo HATES these gifts: Beer, Holly, Hops, Mead, Morel, Oil, Pale Ale, Pina Colada, Triple Shot Espresso, Unmilled Rice, Wine and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Leo lives on Ginger Island, his parents were lost at sea and sees the parrots as his family. Leo's birthday is on Summer 26. Leo will only leave the island when you have 6 friendship hearts. Leo will be inside his hut when it is raining. If you do not have 6 friendship hearts you can find Leo on Ginger Island either at his house, the dock, beside the parrot perch in the middle west area on Ginger Island or by the Volcano. If Leo moves to Stardew you can find him on Sundays and Mondays at Ginger Island. SPRING, SUMMER and WINTER Leo can be found either in his treehouse, Museum or at the Playground. FALL Leo can be found either at his treehouse, the museum, the Community Center or the Playground."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let leoButton = document.querySelector(".character-button-leo");
  leoButton.addEventListener("click", characterButtonLeo);

  /* LEWIS BUTTON*/

  function characterButtonLewis() {
    let promptAnswer = prompt(
      "What would you like to know about Lewis, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Lewis LOVES these gifts: Autumn's Bounty, Glazed Yams, Green Tea, Hot Pepper and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Lewis LIKES these gifts: Blueberry, Catcus Fruit, Coconut, Corn and Parsnip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Lewis DISLIKES these gifts: All Milk, Salmonberry, Wild Horseradish and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Lewis HATES these gifts: Holly, Quartz and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Lewis lives the white house closets to the bridge to the beach, his birthday is Spring 7. Lewis can usually be found in his house. In SPRING Lewis will move alot he can be either in Pierre's General Store, The Community Center if it is restored if it is not restored he could be at Marnie's Ranch, The Blacksmith's, near the Clinc or at the Stardrop Saloon. SUMMER Lewis will be in the same palces as Spring but with an addition of the pier at the beach near Willy's. FALL Lewis will be either at his home, Marnie's Ranch, Pierre's General Store or the Stardrop Saloon. WINTER Lewis can be found at the Fish Shop, Pierre's General Store, Near the Clinic, outside or at his home."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let lewisButton = document.querySelector(".character-button-lewis");
  lewisButton.addEventListener("click", characterButtonLewis);

  /* LINUS BUTTON*/

  function characterButtonLinus() {
    let promptAnswer = prompt(
      "What would you like to know about Linus, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Linus LOVES these gifts: Blueberry Tart, Cactus Fruit, Coconut, Dish of the Sea, Yam, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Linus LIKES these gifts: Chanterelle, Common Mushroom, Corn, Eggs, Fruits, Milk and Vegetables"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Linus DISLIKES these gifts: All Foraged Minerals, All Gems and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Linus HATES these gifts: All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Linus lives in a yellow tent in the mountains by the mines. Linus' birthday is on Winter 3. Linus can usually be found in or around his tent, around the lake near the mines or the spa during the Fall and Winter seasons."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let linusButton = document.querySelector(".character-button-linus");
  linusButton.addEventListener("click", characterButtonLinus);

  /* MARNIE BUTTON*/

  function characterButtonMarnie() {
    let promptAnswer = prompt(
      "What would you like to know about Marnie, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Marnie LOVES these gifts: Diamond, Farmer's Lunch, Pink Cake, Pumpkin Pie and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Marnie LIKES these gifts: Blue Jazz, Eggs, Corn, Garlic, Milk, Parsnip, and Sweet Pea"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Marnie DISLIKES these gifts: Salmonberry, Seaweed, Wild Horseradish and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Marnie HATES these gifts: Clay, Holly and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Marnie lives at the Ranch just south of your farm, near Leah's house. Marnie's birthday is on Fall 18. Marnie can usually be found at her Ranch, when it is raining she will be at home. If she is not at home she is either at Pierre's General Store shopping or exercising or at the Stardrop Saloon in the evening."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let marnieButton = document.querySelector(".character-button-marnie");
  marnieButton.addEventListener("click", characterButtonMarnie);

  /* PAM BUTTON*/

  function characterButtonPam() {
    let promptAnswer = prompt(
      "What would you like to know about Pam, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Pam LOVES these gifts: Beer, Cactus Fruit, Glazed Yams, Mead, Pale Ale, Parsnip Soup, Pina Colada and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Pam LIKES these gifts: Blackberry, Crocus, Milk and Sweet Pea");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Pam DISLIKES these gifts: Quartz, Wild Horseradish and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Pam HATES these gifts: Holly, Octopus, Squid and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Pam lives in the trailer next to Evelyn and George's home. Penny is Pam's daughter, Pam's birthday is on Spring 18. Pam can either be found in her trailer, at Joja Mart if it is still active or at the Stardrop Saloon. If the bus is restored Pam will be found at the Bus Stop for most of the day, in the evening she will be at the Saloon."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let pamButton = document.querySelector(".character-button-pam");
  pamButton.addEventListener("click", characterButtonPam);

  /* PIERRE BUTTON*/

  function characterButtonPierre() {
    let promptAnswer = prompt(
      "What would you like to know about Pierre, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert("Pierre LOVES these gifts: Calamari and Rabbit's Foot");
    }
    if (promptAnswer === "likes") {
      alert(
        "Pierre LIKES these gifts: Blue Jazz, Cauliflower, Daffodil, Dandelion, Eggs, Eggplant, Green Beans, Parsnip, Potato, Sweet Pea and Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Pierre DISLIKES these gifts: Chanterelle, Common Mushroom, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Salmonberry, Purple Mushroom, Snow Yam, Wild Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Pierre HATES these gifts: All Fish, Corn, Garlic, Parsnip Soup, Tortilla and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Pierre lives his General Store in the back. his birthday is on Spring 26. Pierre is usually found in his store and his house. If he is not there he may be at the Stardrop Saloon."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let pierreButton = document.querySelector(".character-button-pierre");
  pierreButton.addEventListener("click", characterButtonPierre);

  /* ROBIN BUTTON*/

  function characterButtonRobin() {
    let promptAnswer = prompt(
      "What would you like to know about Robin, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Robin LOVES these gifts: Goat Cheese, Peach, Spaghetti, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Robin LIKES these gifts: All Milk, All Fruit, Blue Jazz, Crocus, Hardwood Sweet Pea, Tulip, and Quartz"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Robin DISLIKES these gifts: Wild Horseradish and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Robin HATES these gifts: Holly and All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Robin lives in the house by the mines with her husband Demetrius. Robin's birthday is on Fall 21. Robin can usually be found in her house or outside around her house by the lake. Some evenings she will be at the Stardrop Saloon with her husband or exercising behind Pierre's Store. When it rains Robin will stay in unless you have asked her to upgrade or build you a farm structure."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let robinButton = document.querySelector(".character-button-robin");
  robinButton.addEventListener("click", characterButtonRobin);

  /* SANDY BUTTON*/

  function characterButtonSandy() {
    let promptAnswer = prompt(
      "What would you like to know about Sandy, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Sandy LOVES these gifts: Crocus, Daffodil, Mango Sticky Rice, Sweet Pea, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Sandy LIKES these gifts: All Fruit, All Milk, Wool and Quartz");
    }
    if (promptAnswer === "dislikes") {
      alert("Sandy DISLIKES these gifts: All Universal Stardew Dislikes");
    }
    if (promptAnswer === "hates") {
      alert("Sandy HATES these gifts: Holly and All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Sandy lives in the Calico Desert and runs the Oasis store. Sandy never leaves the Oasis store and can be found there. Sandy is friends with Emily."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let sandyButton = document.querySelector(".character-button-sandy");
  sandyButton.addEventListener("click", characterButtonSandy);

  /* VINCENT BUTTON*/

  function characterButtonVincent() {
    let promptAnswer = prompt(
      "What would you like to know about Vincent, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Vincent LOVES these gifts: Cranberry Candy, Grape, Ginger Ale, Pink Cake, Snail and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert("Vincent LIKES these gifts: Clam, Coconut, Crocus and Daffodil");
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Vincent DISLIKES these gifts: All Eggs, All Fruit, All Vegetables, Chanterelle, Common Mushroom, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Purple Mushroom, Quartz, Snow Yam, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert(
        "Vincent HATES these gifts: Clay, Pina Colada, Triple Shot Espresso, Wild Horseradish and All Universal Stardew Hates"
      );
    }
    if (promptAnswer === "bio") {
      alert(
        "Vincent lives with parents Jodi and Kent, his birthday is on Spring 10. Vincent is usually found inside his home, around the Town Square, in the museum or on the playground with Jas and Penny. In the SUMMER he can be found on the beach. If it is raining Vincent will stay at home all day."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let vincentButton = document.querySelector(".character-button-vincent");
  vincentButton.addEventListener("click", characterButtonVincent);

  /* WILLY BUTTON*/

  function characterButtonWilly() {
    let promptAnswer = prompt(
      "What would you like to know about Willy, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Willy LOVES these gifts: Catfish, Diamond, Iridium Bar, Octopus, Pumpkin, Sea Cucumber, Sturgeon, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Willy LIKES these gifts: Gold Bar, Green Bean, Kale, Lingcod, Parsnip, Potato, Sweet Pea, Tiger Trout and Tulip"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Willy DISLIKES these gifts: All Cooking, Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Life Elixir, Magma Cap, Morel, Purple Mushroom, Salmonberry, Snow Yam, Wild Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Willy HATES these gifts: All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Willy lives in his fishing shop on the pier, his birthday is on Summer 24. Willy is usually in his shop until 5 PM and then he fishes outside of his shop for a bit before returning home. Or he will visit the Stardrop Saloon and then return home. When it is raining Willy will stay inside his house."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let willyButton = document.querySelector(".character-button-willy");
  willyButton.addEventListener("click", characterButtonWilly);

  /* WIZARD BUTTON*/

  function characterButtonWizard() {
    let promptAnswer = prompt(
      "What would you like to know about Wizard, type loves, likes, dislikes, hates or bio?"
    );
    promptAnswer = promptAnswer.trim();
    promptAnswer = promptAnswer.toLowerCase();

    if (promptAnswer === "loves") {
      alert(
        "Wizard LOVES these gifts: Purple Mushroom, Solar Essence, Void Essence, Prismatic Shard and Rabbit's Foot"
      );
    }
    if (promptAnswer === "likes") {
      alert(
        "Wizard LIKES these gifts: Amaranth, Blue Jazz, Esperite, Parsnip, Thunder Egg and Quartz"
      );
    }
    if (promptAnswer === "dislikes") {
      alert(
        "Wizard DISLIKES these gifts: All Eggs, All Milk, Chanterelle, Common Mushroom, Daffodil, Dandelion, Ginger, Hazelnut, Holly, Leek, Magma Cap, Morel, Salmonberry, Slime, Snow Yam, White Horseradish, Winter Root and All Universal Stardew Dislikes"
      );
    }
    if (promptAnswer === "hates") {
      alert("Wizard HATES these gifts: All Universal Stardew Hates");
    }
    if (promptAnswer === "bio") {
      alert(
        "Wizard lives in his Wizard's Tower on the West side of the Cindersap Forest just below the Secret Woods. The Wizard's birthday is on Winter 17 and can always be found in the Wizards Tower. You cannot enter after 11 PM."
      );
    }
    if (
      promptAnswer != "loves" &&
      promptAnswer != "likes" &&
      promptAnswer != "dislikes" &&
      promptAnswer != "hates" &&
      promptAnswer != "bio"
    ) {
      alert("You have not entered the correct word, please try again");
    }
  }

  let wizardButton = document.querySelector(".character-button-wizard");
  wizardButton.addEventListener("click", characterButtonWizard);

  /* NON-GIFTABLE CHARACTERS*/

  /* BIRDIE BUTTON */

  function characterButtonBirdie() {
    alert(
      "Birdie is an old woman who lives on Ginger Island on the West Side of the Island. Birdie will request you to complete one quest. Birdie cannot be found when it rains on Ginger Island."
    );
  }

  let birdieButton = document.querySelector(".character-button-birdie");
  birdieButton.addEventListener("click", characterButtonBirdie);

  /* BOUNCER BUTTON */

  function characterButtonBouncer() {
    alert(
      "The Bouncer guards the entrance to the Casino at the back of the Oasis in the Calico Desert. The Bouncer will disappear once the player completes The Mysterious Qi Quest."
    );
  }

  let bouncerButton = document.querySelector(".character-button-bouncer");
  bouncerButton.addEventListener("click", characterButtonBouncer);

  /* GIL BUTTON */

  function characterButtonGil() {
    alert(
      "Gil can be found inside the Adventurer's Guild, he sits on a chair in the top right of the screen. Gil awards the player with items when they complete his Monster Eradication Goals listed inside the Adventurer's Guild."
    );
  }

  let gilButton = document.querySelector(".character-button-gil");
  gilButton.addEventListener("click", characterButtonGil);

  /* GOVERNOR BUTTON */

  function characterButtonGovernor() {
    alert(
      "You will only encounter the Governor during the Luau in the Summer. The Governor will taste test the Luau soup and will react extremely well to the soup if you place an Iridium star quality food item into the soup."
    );
  }

  let governorButton = document.querySelector(".character-button-governor");
  governorButton.addEventListener("click", characterButtonGovernor);

  /* GRANDPA BUTTON */

  function characterButtonGrandpa() {
    alert(
      "Grandpa is the first NPC the player will meet. Grandpa will task the player to do well and succeed within the first 3 years. The player will head to the Northwest corner of the farm for Grandpa's Ghost to evaluate the farm and determine the success. If Grandpa deems it successfuly the player will receive an award. To tell if the farm is successful players will need to get all 4 candles around Grandpa's Shrine to light up. If the player is not succesful within the 3 year mark the player can offer a diamond to the shrine and the next day they can be re-evaluated."
    );
  }

  let grandpaButton = document.querySelector(".character-button-grandpa");
  grandpaButton.addEventListener("click", characterButtonGrandpa);

  /* GUNTHER BUTTON */

  function characterButtonGunther() {
    alert(
      "Gunther runs the museum and will provide rewards to the player for a certain number of donations made to the museum. After a certain number or donations are made Gunther will present the player with a Rusty Key."
    );
  }

  let guntherButton = document.querySelector(".character-button-gunther");
  guntherButton.addEventListener("click", characterButtonGunther);

  /* HENCHMAN BUTTON */

  function characterButtonHenchman() {
    alert(
      "The Henchman is a goblin that guards the outside of the Witch's Hut inside the Witch's Swamp. The player must solve the Goblin's riddle in order to get past him."
    );
  }

  let henchmanButton = document.querySelector(".character-button-henchman");
  henchmanButton.addEventListener("click", characterButtonHenchman);

  /* MARLON BUTTON */

  function characterButtonMarlon() {
    alert(
      "Marlon lives in the Adventurer's Guild and manages the counter inside the Guild. Marlon purchases monster loot and sells weapons and armour. Marlon also runs the Item Recovery Service, if a player faints in the mines he will recover what was lost for a price. Marlon never leaves the Guild unless there are events happening in town."
    );
  }

  let marlonButton = document.querySelector(".character-button-marlon");
  marlonButton.addEventListener("click", characterButtonMarlon);

  /* MORRIS BUTTON */

  function characterButtonMorris() {
    alert(
      "Morris is the manager of the Joja Mart in Pelican Town. Morris offers the player a Joja Membership at the beginning of the game. If the player purchases it the Community Center will be removed. If the player completes the Community Center then Joja Mart closes and Morris leaves town."
    );
  }

  let morrisButton = document.querySelector(".character-button-morris");
  morrisButton.addEventListener("click", characterButtonMorris);

  /* MR QI BUTTON */

  function characterButtonMrQi() {
    alert(
      "Mr Qi. is a mysterious NPC, he will task the player with challenges. The challenges start when the player completes the first challenge that involves the lockbox in the tunnel. Mr Qi, runs the casino in Calico Desert and the Walnut Room on Ginger Island. Mr Qi. rewards the player with Qi Gems that can be used to purchase rare items."
    );
  }

  let mrQiButton = document.querySelector(".character-button-mr-qi");
  mrQiButton.addEventListener("click", characterButtonMrQi);

  /* PROFESSOR SNAILBUTTON */

  function characterButtonProfessorSnail() {
    alert(
      "Professor Snail lives on Ginger Island, they player will first meet Professor Snail who is trapped inside a cave. Once the Professor is freed he will always be inside his Island Field Office. Professor Snail will ask the players to help complete his fossil collection. The player will be rewarded with Golden Walnuts for each donated fossil."
    );
  }

  let professorSnailButton = document.querySelector(
    ".character-button-professor-snail"
  );
  professorSnailButton.addEventListener(
    "click",
    characterButtonProfessorSnail
  );

  /* SUBSCRIBE BUTTON */

  function subEmailPrompt() {
    let yesOrNo = prompt("Would you like to subscribe? Enter Yes or No");
    yesOrNo = yesOrNo.toLowerCase();
    yesOrNo = yesOrNo.trim();

    if (yesOrNo === "yes") {
      let firstName = prompt("What is your first name?");
      let email = prompt("What is your email?");
      let confirmationText = document.querySelector(".subscribe-text");
      confirmationText.innerHTML =
        "🐑 Thanks " + firstName + " we'll be in touch! 🐄";
    } else {
      let confirmationText = document.querySelector(".subscribe-text");
      confirmationText.innerHTML = "You have not subscribed. 👋👋👋";
    }
  }

  let subscribeButton = document.querySelector(".subscribe-button");
  subscribeButton.addEventListener("click", subEmailPrompt);