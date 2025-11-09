'use client'

import React, { useState } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { cn } from '@/lib/utils'

// Sample menu data - would come from CMS
const menuCategories = {
  dinner: {
    appetizers: [
      { name: 'Zucchini Florentine', price: 19 },
      { name: 'Stuffed Celery with Roquefort Mousse', price: 17 },
      { name: 'Avocado Cocktail', price: 17 },
      { name: 'Imported Sardines', price: 15 },
      { name: 'Baked Escargot', price: 19 },
      { name: 'Burrata', description: 'Strawberries, Walnuts, Truffled Honey', price: 23 },
      { name: 'Meatballs & Polenta', description: 'Pork & Beef with Fresh Ricotta', price: 25 },
      { name: 'Olives Antipasto', description: 'Marinated Olives, Peppers, Parmigiano Reggiano', price: 15 },
      { name: 'Marinated Herring with Sour Cream Sauce', price: 22 },
      { name: 'Grilled Portobello Mushroom', description: 'On Mascarpone Polenta, Mushroom Jus', price: 23 },
      { name: 'Musso\'s Traditional Steak Tartare', description: 'Quail Egg, Cornichons, Crostini', price: 26 },
    ],
    soups: [
      { name: 'Onion Soup Au Gratin', description: 'Cup $12', price: 15 },
      { name: 'Cream of Tomato', description: 'Cup $10', price: 12 },
      { name: 'Consommé', description: 'Cup $9', price: 11 },
      { name: 'Jellied Consommé', price: 10 },
    ],
    salads: [
      { name: 'Baby Iceberg Wedges', price: 20 },
      { name: 'Chiffonade Salad', price: 20 },
      { name: 'Tomato & Onion Salad', description: 'With Crispy Bacon $18', price: 17 },
      { name: 'Tuna Salad', price: 19 },
      { name: 'Chef\'s Salad', price: 21 },
      { name: 'Dinner Salad', price: 16 },
      { name: 'Musso-Frank Special', price: 23 },
      { name: 'Mixed Green Salad', description: 'With Sherry Vinaigrette Dressing', price: 16 },
      { name: 'Caesar Salad', price: 19 },
      { name: 'Avocado Salad', price: 19 },
    ],
    coldSeafood: [
      { name: 'Shrimp Louie', price: 35 },
      { name: 'Crab Louie', price: 40 },
      { name: 'Combination Louie', price: 45 },
      { name: 'Oyster on Half Shell', price: 29 },
      { name: 'Seafood Chiffonade Salad', description: 'With Lobster, Dungeness Crab, Shrimp', price: 46 },
      { name: 'Salmon Tartare', price: 24 },
      { name: 'Lobster Cocktail', price: 40 },
      { name: 'Crab Cocktail', price: 30 },
      { name: 'Shrimp Cocktail', price: 27 },
    ],
    fishSeafood: [
      { name: 'Filet of Sandabs, Sauté Meuniere', price: 33 },
      { name: 'Salmon Filet', price: 39 },
      { name: 'Lobster Thermidor', price: 'Market Price' },
      { name: 'Broiled Lobster Tail', price: 'Market Price' },
      { name: 'Swordfish, Sauté Meuniere or Grilled', price: 41 },
      { name: 'Scallops, Pan Seared', price: 41 },
      { name: 'Fried Oysters', price: 30 },
      { name: 'Fried Shrimp', price: 29 },
      { name: 'Shrimp, Sauce Poulette', price: 35 },
      { name: 'Branzino, Pistachio Date Gremolata', price: 42 },
    ],
    steaksChops: [
      { name: 'Filet Mignon', description: '8oz', price: 56 },
      { name: 'Filet Mignon', description: '12oz', price: 64 },
      { name: 'Ribeye Steak', price: 58 },
      { name: 'Ribeye Cap Steak', description: 'based on availability', price: 57 },
      { name: 'Bone In Ribeye Steak', price: 66 },
      { name: 'Lamb Chops (3) Colorado', price: 68 },
      { name: 'Bone-In Pork Chop Berkshire Farm', price: 39 },
      { name: 'New York Steak', description: '12oz', price: 51 },
      { name: 'Calf\'s Liver Steak', price: 34 },
      { name: 'Grilled Lamb Kidneys, Bacon', price: 30 },
      { name: 'Ground Beef Steak', price: 37 },
      { name: 'Roast Prime Rib of Beef', description: 'served with Baked Potato', price: 69 },
    ],
    sauces: [
      { name: 'Green Peppercorn Sauce', price: 9 },
      { name: 'Bearnaise', price: 9 },
      { name: 'Musso & Frank Steak Sauce', price: 9 },
      { name: 'Hollandaise', price: 9 },
    ],
    italian: [
      { name: 'Spaghetti And Meatballs', price: 30 },
      { name: 'Tagliatelle alla Bolognese', price: 30 },
      { name: 'Rigatoni with Lamb Ragout', description: 'With Ricotta and Mint Pesto', price: 30 },
      { name: 'Gnocchi Gorgonzola e Noci', description: 'With Walnuts, Gorgonzola Cheese', price: 30 },
      { name: 'Original Fettuccine Alfredo', price: 30 },
      { name: 'Spaghetti Pomodoro e Burrata', description: 'With Fresh Burrata Cheese and Basil', price: 26 },
      { name: 'Spicy Rigatoni Vodka', price: 26 },
      { name: 'Risotto Ai Frutti Di Mare', description: 'With Scallops, Shrimp, Calamari', price: 38 },
    ],
    classics: [
      { name: 'Grenadine of Beef', description: 'With Bearnaise Sauce', price: 49 },
      { name: 'Calf\'s Liver', description: 'With Onions or Bacon, Grilled', price: 34 },
      { name: 'Grilled Lamb Kidneys', description: 'With Bacon', price: 29 },
      { name: 'Boneless Garlic Chicken', price: 38 },
      { name: 'Chicken Parmigiana', price: 38 },
      { name: 'Chicken or Turkey Á La King', price: 34 },
      { name: 'Broiled Chicken', price: 34 },
      { name: 'Welsh Rarebit', price: 22 },
      { name: 'Sauté Calf\'s Sweetbreads', price: 30 },
      { name: 'Oyster Stew', price: 29 },
      { name: 'Veal Schnitzel', description: 'With Prosciutto di Parma Arugula & Parmigiano', price: 39 },
    ],
    sides: [
      { name: 'Mashed Potatoes', price: 16 },
      { name: 'Baked Potato', description: 'with Sour Cream, Smoked Bacon, Chives, Cheddar & Butter', price: 16 },
      { name: 'French Fries, Steak Cut or Julienne', price: 15 },
      { name: 'Lyonnaise Potatoes', price: 17 },
      { name: 'Cottage Fried Potatoes', price: 17 },
      { name: 'Potatoes Au Gratin', price: 18 },
      { name: 'Sautéed Mushrooms', price: 18 },
      { name: 'Truffled Mac and Cheese', price: 22 },
      { name: 'Creamed Spinach', price: 18 },
      { name: 'Grilled Broccolini With Hollandaise Sauce', price: 19 },
      { name: 'Fresh Asparagus With Hollandaise Sauce', price: 19 },
      { name: 'French Fried Onion Rings', price: 15 },
      { name: 'Garlic Toast', price: 14 },
      { name: 'Musso\'s Sourdough Loaf', description: 'To go, if available', price: 14 },
    ],
    dailyFeatures: [
      { name: 'Tuesday', description: 'Corned Beef and Cabbage', price: null },
      { name: 'Wednesday', description: 'Sauerbraten, Potato Pancakes', price: null },
      { name: 'Thursday', description: 'Homemade Chicken Pot Pie', price: null },
      { name: 'Friday', description: 'Bouillabaisse Marseillaise', price: null },
      { name: 'Saturday', description: 'Braised Short Ribs of Beef with Vegetables', price: null },
      { name: 'Sunday', description: 'Duck Confit', price: null },
    ],
  },
  desserts: {
    desserts: [
      { name: '1919 Sundae', description: 'Vanilla Ice Cream, Caramelized Banana, Peanut Brittle', price: 17 },
      { name: 'Musso & Frank Torten', description: 'Sweet Puff Pastry, Chantilly Cream, Strawberry Jam', price: 16 },
      { name: 'Diplomat Pudding', description: 'Grand Marnier, Strawberry Sauce', price: 17 },
      { name: 'Brioche-Bread Pudding', description: 'Pan De Mie, Custard, Wild Blueberry, Vanilla Gelato', price: 16 },
      { name: 'Key Lime Pie', description: 'Key Lime Custard, Graham Cracker', price: 17 },
      { name: 'Crème Brûlée', description: 'Turbinato Sugar, Vanilla Bean, Fresh Berries', price: 17 },
      { name: 'Apple Pie A La Mode', description: 'Caramel Sauce, Vanilla Ice Cream', price: 17 },
      { name: 'New York Cheese Cake', description: 'Classic Graham Cracker Crust', price: 16 },
      { name: 'Chocolate Mousse Cake', description: 'Layered Dark Chocolate, Chocolate Ganache', price: 17 },
      { name: 'Trio Of Sorbet', description: 'Please Inquire With Your Server', price: 17 },
      { name: 'Coppa Gelato', description: 'Vanilla or Chocolate', price: 17 },
    ],
    flannelCakes: [
      { name: 'Flannel Cakes with Syrup', price: 13 },
      { name: 'Flannel Cakes with Yogurt Cream and Mixed Berries', price: 15 },
      { name: 'Flannel Cakes with Yogurt Cream, Banana and Chocolate', price: 15 },
    ],
    coffeeAndTea: [
      { name: 'Single Shot Espresso', price: 5 },
      { name: 'Double Shot Espresso', price: 6.5 },
      { name: 'Cappuccino', price: 6.5 },
      { name: 'Latte', price: 6.5 },
      { name: 'Americano', price: 6.5 },
      { name: 'Regular Coffee', price: 5 },
      { name: 'Decaffeinated Coffee', price: 5 },
      { name: 'Loose Leaf Organic Tea', price: 4.5 },
    ],
    cognacArmagnac: [
      { name: 'Hennessy VS', price: 17 },
      { name: 'Martell VS', price: 20 },
      { name: 'D\'Usse VSOP', price: 20 },
      { name: 'Courvoisier VSOP', price: 20 },
      { name: 'Remy Martin VSOP', price: 23 },
      { name: 'D\'Usse XO', price: 33 },
      { name: 'Remy Martin XO', price: 48 },
      { name: 'Martell XO', price: 55 },
      { name: 'Martell Cordon Bleu', price: 58 },
      { name: 'Castarede Armagnac VSOP', price: 32 },
      { name: 'Bhakta Armagnac 1973', price: 149 },
    ],
    digestiveLiqueur: [
      { name: 'Cointreau', price: 14 },
      { name: 'Limoncello Caravella', price: 14 },
      { name: 'Amaro Averna', price: 14 },
      { name: 'Benedictine', price: 15 },
      { name: 'B&B', price: 15 },
      { name: 'Frangelico', price: 15 },
      { name: 'Drambuie', price: 15 },
      { name: 'Galliano L\'Originale', price: 15 },
      { name: 'Sambuca Antica', price: 15 },
      { name: 'St. Germain Elderflower Liqueur', price: 15 },
      { name: 'Bailey\'s Irish Cream', price: 15 },
      { name: 'Kahlua Coffee Liqueur', price: 15 },
      { name: 'Fernet Branca', price: 15 },
      { name: 'Grand Marnier', price: 16 },
      { name: 'Pernod Anise', price: 16 },
      { name: 'Canton Ginger Liqueur', price: 16 },
      { name: 'Amaretto Di Saronno', price: 17 },
      { name: 'Barolo Chinato', price: 17 },
      { name: 'Grappa Nonino Chardonnay', price: 20 },
    ],
    dessertWines: [
      { name: 'Moscato, Tenuta Carretta 2022', description: 'Light body, Sparkling, Jasmine and Lychee', price: 14 },
      { name: 'Sherry "Dulce" Gonzales Byass Pedro Ximénez', description: 'Extra sweet, thick, dried figs, burnt caramel', price: 14 },
      { name: 'Passito Di Pantelleria Pellegrino', description: 'Top dried apricot notes with caramel and vanilla', price: 16 },
      { name: 'Sauterne, Carmes De Riussec 2022', description: 'Full body, Candied Fruit, Quince, Spices', price: 21 },
      { name: 'Reif Estate Vidal Icewine Grand Reserve 2019', description: 'Full body, Ginger, Saffron and Apricot', price: 27 },
      { name: 'Marsala Superiore Riserva Rubino Dolce "Genesi"', description: 'Maraschino Cherries, Vanilla, Milk Chocolate', price: 36 },
    ],
    portMadeiraSherry: [
      { name: 'Special Reserve Port Cockburn', description: 'Baker\'s Cocoa, Syrupy Cherries, Spices', price: 13 },
      { name: 'Reserve Port Graham Six Grapes', description: 'Full body, Candied Fruit, Quince, Spices', price: 14 },
      { name: 'Emilio Lustau Sherry Cream East India Solera', description: 'Ginger, Toasted Walnuts, Burnt Orange', price: 14 },
      { name: 'Four Grape Vintage Port, Pedroncelli', description: 'Confit Plums, Burnt Sugar, Dark Cherries', price: 16 },
      { name: 'Madeira "Boston" RWC Historic', description: 'Dark Sugar and orange', price: 16 },
      { name: 'Madeira "New York" RWC Historic', description: 'Rich, dark fruitcake, dry spice', price: 16 },
      { name: 'Madeira "Charleston" RWC Historic', description: 'Salted Caramel, toasted nuts', price: 16 },
      { name: 'Tawny Port 20 Years Sandeman', description: 'Toasted Nuts, Caramel, Candied Orange', price: 19 },
      { name: 'Graham\'s 20 Year Tawny Port', description: 'Cocoa, Dried Figs, Fresh Walnuts', price: 19 },
    ],
  },
  wineByGlass: {
    sparkling: [
      { name: 'CASTELLO BONOMI Franciacorta "Cuvée 22"', description: 'Lombardia, Italy NV', price: 18 },
      { name: 'SCHRAMSBERG "Brut Rosé"', description: 'North Coast, CA 2020', price: 25 },
    ],
    white: [
      { name: 'I BEATI Pinot Grigio Delle Venezie', description: 'Veneto, Italy 2022', price: 15 },
      { name: 'CANTINE PELLEGRINO Zibibbo Secco "Gibele"', description: 'Sicilia, Italy 2023', price: 15 },
      { name: 'TIKI Sauvignon Blanc Single Vineyard', description: 'Waipara, New Zealand 2023', price: 15 },
      { name: 'VILLE CORNIOLE Chardonnay', description: 'Alto Adige, Italy 2023', price: 16 },
      { name: 'SCRIBE Chardonnay "Estate"', description: 'Carneros, Sonoma, California 2022', price: 22 },
    ],
    rose: [
      { name: 'LA MADELEINE "Juli" Rosato Di Pinot Nero', description: 'Umbria, Italy 2023', price: 15 },
    ],
    red: [
      { name: 'SILVIA CELLARS Cabernet Sauvignon', description: 'North Coast, California 2019', price: 15 },
      { name: 'CANTINE PELLEGRINO Passimora Nero D\'Avola', description: 'Sicilia Italy 2018', price: 17 },
      { name: 'SANTA VITTORIA Poggio Al Tempio Sangiovese', description: 'Toscana Italy 2021', price: 17 },
      { name: 'GAZZEROTTA "Tanaurpi" Malbec', description: 'Sicilia, Italy 2021', price: 18 },
      { name: 'MUSSO & FRANK Syrah "Zotovich Vineyard"', description: 'Sta. Rita Hills, California 2021', price: 18 },
      { name: 'CHALLEN Pinot Noir "Zotovich Vineyard"', description: 'St. Rita Hills California 2021', price: 19 },
      { name: 'ETTORE ROSSO Cabernet Sauvignon', description: 'Mendocino County CA 2019', price: 26 },
      { name: 'SAXON BROWN Pinot Noir "Fighting Brothers"', description: 'Anderson Valley, CA 2019', price: 26 },
      { name: 'BOCALE Montefalco Sagrantino', description: 'Umbria, Italy 2018', price: 27 },
    ],
    beer: [
      { name: 'Menabrea Ambrata', price: null },
      { name: 'Paulaner Lager', price: null },
      { name: 'Bitburger Non-Alcoholic', price: null },
      { name: 'Flying Dog', price: null },
    ],
  },
  bar: {
    gin: [
      { name: 'Tanqueray No. Ten', description: 'UK, 94.6 Proof', price: 18 },
      { name: 'Hendrick\'s', description: 'UK, 88 Proof', price: 19 },
      { name: 'St. George Terroir', description: 'CA, 90 Proof', price: 18 },
      { name: 'St. George Botanivore', description: 'CA, 90 Proof', price: 18 },
      { name: 'Aviation', description: 'USA, 84 Proof', price: 17 },
      { name: 'The Botanist', description: 'Islay, UK, 92 Proof', price: 18 },
      { name: 'Sipsmith VJOP', description: 'UK, 120 Proof', price: 16 },
      { name: 'Boodles', description: 'UK, 90.4 Proof', price: 17 },
      { name: 'Monkey 47', description: 'Germany, 94 Proof', price: 29 },
      { name: 'Nolet\'s Silver Gin', description: 'Holland, 95.2 Proof', price: 17 },
      { name: 'Barr Hill', description: 'USA, 87 Proof', price: 15 },
      { name: 'Uncle Val\'s Botanical Gin', description: 'USA, 114 Proof', price: 18 },
      { name: 'Barr Hill Tom Cat Barrel Aged', description: 'USA, 87 Proof', price: 20 },
      { name: 'Ford\'s Gin', description: 'UK, 94 Proof', price: 16 },
    ],
    vodka: [
      { name: 'Grey Goose', description: 'France, 80 Proof', price: 19 },
      { name: 'Smirnoff', description: 'USA, 80 Proof', price: 18 },
      { name: 'Absolut', description: 'Sweden, 80 Proof', price: 18 },
      { name: 'Ketel One', description: 'Netherlands, 80 Proof', price: 18 },
      { name: 'Chopin', description: 'Poland, 80 Proof', price: 19 },
      { name: 'Belvedere', description: 'Poland, 80 Proof', price: 19 },
      { name: 'Stoli Elite', description: 'Russia, 80 Proof', price: 20 },
      { name: 'Stolichnaya', description: 'Russia, 80 Proof', price: 18 },
    ],
    tequila: [
      { name: 'Herradura Añejo', description: '80 Proof', price: 25 },
      { name: 'Don Julio 1942', description: '80 Proof', price: 50 },
      { name: 'Patron Silver', description: '80 Proof', price: 19 },
      { name: 'Don Julio Reposado', description: '80 Proof', price: 17 },
      { name: 'Patron Añejo', description: '80 Proof', price: 22 },
      { name: 'Casa Del Sol Añejo', description: '80 Proof', price: 35 },
      { name: 'Casamigos Blanco', description: '80 Proof', price: 19 },
      { name: 'Clase Azul', description: '80 Proof', price: 25 },
      { name: 'Don Fulano Blanco', description: '80 Proof', price: 20 },
      { name: 'Patron Reposado', description: '80 Proof', price: 26 },
      { name: 'Don Fulano Imperial Extra Añejo', description: '80 Proof', price: 60 },
      { name: 'Casamigos Añejo', description: '80 Proof', price: 35 },
      { name: 'Casamigos Reposado', description: '80 Proof', price: 23 },
      { name: 'Don Fulano Añejo', description: '80 Proof', price: 25 },
    ],
    bourbon: [
      { name: 'Basil Hayden\'s', description: '90 Proof', price: 18 },
      { name: 'Henry McKenna 10 Years', description: '100 Proof', price: 16 },
      { name: 'Law\'s Straight Bourbon', description: '120 Proof', price: 20 },
      { name: 'Redwood Empire Pipe Dream', description: '120 Proof', price: 17 },
      { name: 'Knob Creek Single Barrel', description: '120 Proof', price: 18 },
      { name: 'Joseph Magnus Bourbon', description: '99 Proof', price: 36 },
      { name: 'Bhakta Bourbon 2014', description: '120 Proof', price: 65 },
      { name: 'Maker\'s Mark 46', description: '94 Proof', price: 16 },
      { name: 'Hogsworth Bourbon', description: '120 Proof', price: 19 },
    ],
    rye: [
      { name: 'Law\'s San Luis Valley Rye', description: '92 Proof', price: 20 },
      { name: 'Rittenhouse 100', description: '100 Proof', price: 15 },
      { name: 'High West Double Rye', description: '92 Proof', price: 16 },
      { name: 'Whistle Pig', description: '100 Proof', price: 29 },
      { name: 'Redwood Empire Rye', description: '100 Proof', price: 17 },
      { name: 'Old Overholt', description: '95 Proof', price: 15 },
      { name: 'Michter\'s 10Y Single Barrel', description: '84.8 Proof', price: 35 },
      { name: 'Bulleit', description: '90 Proof', price: 18 },
    ],
    irishJapaneseCanadian: [
      { name: 'Bushmill', description: '80 Proof', price: 16 },
      { name: 'Jameson 12 Years', description: '80 Proof', price: 16 },
      { name: 'Jameson 18Y Limited Reserve', description: '94 Proof', price: 27 },
      { name: 'Kaiyo Mizunara Signature', description: '86 Proof', price: 28 },
      { name: 'Shibui Pure Malt', description: '86 Proof', price: 28 },
      { name: 'Crown Royal 12', description: '80 Proof', price: 25 },
    ],
    blendedScotch: [
      { name: 'Johnnie Walker Black Label', description: '80 Proof', price: 18 },
      { name: 'Johnnie Walker Blue Label', description: '80 Proof', price: 60 },
      { name: 'Johnnie Walker Gold Label', description: '80 Proof', price: 25 },
      { name: 'Chivas Regal 15 Years', description: '84 Proof', price: 25 },
      { name: 'Dewar\'s White Label', description: '80 Proof', price: 16 },
      { name: 'Chivas Regal 18 Years', description: '84 Proof', price: 30 },
      { name: 'Monkey Shoulder', description: '80 Proof', price: 16 },
    ],
    scotchSpeyside: [
      { name: 'Glenlivet 12 Years', description: '80 Proof', price: 20 },
      { name: 'Balvenie 14Y Caribbean Casks', description: '86 Proof', price: 36 },
      { name: 'Balvenie 21 Years', description: '86 Proof', price: 120 },
      { name: 'Glenlivet 18 Years', description: '88 Proof', price: 42 },
      { name: 'The Macallan 12 Year', description: '80 Proof', price: 20 },
      { name: 'Glenfiddich 26 Year Grand Couronne', description: '86 Proof', price: 190 },
      { name: 'The Macallan 15 Year', description: '80 Proof', price: 40 },
      { name: 'Glenfiddich 23 Year Grand Cru', description: '80 Proof', price: 135 },
      { name: 'The Macallan 18 Year', description: '86 Proof', price: 50 },
      { name: 'Glenfiddich 21 Year Grand Cru', description: '80 Proof', price: 50 },
      { name: 'Glenfiddich 18 Year', description: '80 Proof', price: 34 },
    ],
    scotchHighland: [
      { name: 'Highland Park 12 Years', description: '92 Proof', price: 17 },
      { name: 'Highland Park 15 Years', description: '92 Proof', price: 40 },
      { name: 'The Dalmore 12 Years', description: '92 Proof', price: 23 },
      { name: 'The Dalmore 15 Years', description: '92 Proof', price: 48 },
      { name: 'The Dalmore 18 Years', description: '92 Proof', price: 98 },
      { name: 'The Dalmore Portwood', description: '92 Proof', price: 35 },
      { name: 'Glendronach 12Y Sherry Cask', description: '80 Proof', price: 20 },
      { name: 'Oban 14 Year', description: '80 Proof', price: 28 },
      { name: 'Glenmorangie 12Y', description: '80 Proof', price: 17 },
    ],
    scotchIslay: [
      { name: 'Talisker 10Y', description: '86 Proof', price: 19 },
      { name: 'Lagavulin 16 Years', description: '86 Proof', price: 26 },
      { name: 'Bowmore 12 Years', description: '80 Proof', price: 19 },
      { name: 'Bruichladdich Classic Laddie', description: '80 Proof', price: 19 },
      { name: 'Bruichladdich Port Charlotte', description: '80 Proof', price: 19 },
      { name: 'Laphroaig 10 Years', description: '80 Proof', price: 19 },
    ],
    cognac: [
      { name: 'Park VSOP', description: '80 Proof', price: 19 },
      { name: 'Hennessy VS', description: '80 Proof', price: 17 },
      { name: 'Remy Martin VSOP', description: '80 Proof', price: 23 },
      { name: 'Remy Martin XO', description: '80 Proof', price: 48 },
      { name: 'Martell VS', description: '80 Proof', price: 20 },
      { name: 'Courvoisier VSOP', description: '80 Proof', price: 20 },
      { name: 'Park XO', description: '80 Proof', price: 33 },
      { name: 'Martell Cordon Bleu', description: '80 Proof', price: 58 },
      { name: 'D\'Usse VSOP', description: '80 Proof', price: 20 },
      { name: 'D\'Usse XO', description: '80 Proof', price: 33 },
      { name: 'Martell XO', description: '80 Proof', price: 55 },
    ],
    armagnac: [
      { name: 'Castarede Armagnac VSOP', price: 32 },
      { name: 'Bhakta Armagnac 1973', price: 149 },
    ],
    rum: [
      { name: 'Kirk & Sweeney Reserve', description: '92 Proof', price: 15 },
      { name: 'Captain Morgan', description: '70 Proof', price: 15 },
      { name: 'Zaya Gran Reserva', description: '80 Proof', price: 16 },
      { name: 'Kirk & Sweeney Gran Reserve', description: '92 Proof', price: 19 },
    ],
    liqueurs: [
      { name: 'Sambuca Antica Black', description: '76 Proof', price: 15 },
      { name: 'Sambuca Molinari Black', description: '76 Proof', price: 15 },
      { name: 'Bailey\'s', description: '34 Proof', price: 15 },
      { name: 'Chambord', description: '36 Proof', price: 15 },
      { name: 'Cointreau', description: '80 Proof', price: 14 },
      { name: 'Galliano L\'Originale', description: '84.6 Proof', price: 15 },
      { name: 'Amaretto Di Saronno', description: '56 Proof', price: 17 },
      { name: 'Grand Marnier', price: 16 },
    ],
    amaroGrappaDigestives: [
      { name: 'Averna', description: '58 Proof', price: 14 },
      { name: 'Grappa Nonino Chardonnay', description: '86 Proof', price: 20 },
      { name: 'Barolo Chinato Vite Colte', description: '32 Proof', price: 17 },
      { name: 'Amaro Nonino Quintessentia', description: '40 Proof', price: 17 },
      { name: 'Grappa Bocale Sagrantino', description: '81 Proof', price: 21 },
      { name: 'Limoncello', description: '59 Proof', price: 14 },
      { name: 'B&B', description: '80 Proof', price: 15 },
      { name: 'Bénédictine', description: '80 Proof', price: 15 },
      { name: 'Frangelico', description: '40 Proof', price: 15 },
      { name: 'Drambuie', price: 15 },
    ],
    mezcal: [
      { name: 'Xicaru Mezcal', price: null },
    ],
  },
  wines: {
    champagneSparklingFranciacorta: [
      { name: 'CHARLES DE CAZANOVE "Tête de Cuvée"', description: 'Reims, France NV', price: 105 },
      { name: 'CASTELLO BONOMI Franciacorta "CruPerdu"', description: 'Lombardia, Italia 2016', price: 145 },
      { name: 'ROEDERER ESTATE "Brut L\'Ermitage"', description: 'Anderson Valley, California 2019', price: 154 },
      { name: 'DEUTZ "Brut Classic"', description: 'Aÿ, France NV', price: 165 },
      { name: 'DELAMOTTE "Brut Le Mesnil"', description: 'Le Mesnil-sur-Oger, France NV', price: 223 },
      { name: 'GIMONNET ET FILS 1er Cru Blanc de Blanc', description: 'Cuis, France NV', price: 175 },
      { name: 'BILLECART-SALMON Brut Rosé', description: 'Mareuil-sur-Aÿ, France NV', price: 290 },
      { name: 'LALLIER "Millésime - Grand Cru"', description: 'Ay, France 2014', price: 329 },
      { name: 'LOUIS ROEDERER "CRISTAL" Brut', description: 'Reims, France 2014', price: 1350 },
      { name: 'LOUIS ROEDERER "CRISTAL ROSE" Brut', description: 'Reims, France 2012', price: 1980 },
      { name: 'SALON Brut Blanc De Blanc "Le Mesnil"', description: 'Le Mesnil-sur-Oger, France 2013', price: 2950 },
    ],
    whiteChardonnayNewWorld: [
      { name: 'INCEPTION', description: 'Santa Barbara County, CA 2021', price: 58 },
      { name: 'CHALLEN "Fiddlestix Vineyard"', description: 'Sta. Rita Hills, CA 2020', price: 79 },
      { name: 'CHALLEN "Dierberg Vineyard"', description: 'Sta. Maria Valley, CA 2019', price: 79 },
      { name: 'JORDAN', description: 'Russian River Valley, CA 2023', price: 95 },
      { name: 'GRAN MORAINE', description: 'Yamhill-Carlton, Oregon 2020', price: 105 },
      { name: 'ROMBAUER VINEYARDS', description: 'Carneros, CA 2023', price: 119 },
      { name: 'HARTFORD COURT "Four Hearts Vineyards"', description: 'Russian River Valley, CA 2021', price: 139 },
      { name: 'FAR NIENTE "Estate"', description: 'Oakville, Napa, CA 2022', price: 199 },
      { name: 'CERITAS "Peter Martin Ray Vineyard"', description: 'Russian River Valley, CA 2015', price: 189 },
      { name: 'SHAFER "Red Shoulder Ranch"', description: 'Carneros Napa Valley, CA 2022', price: 195 },
      { name: 'SEA SMOKE Monopole', description: 'Sta. Rita Hills, CA 2020', price: 265 },
    ],
    whiteBurgundy: [
      { name: 'LE CHABLISIENNE Chablis "Le Finage"', description: 'Chablis, Burgundy, France 2023', price: 79 },
      { name: 'DOMAINE CLAUDIE JOBARD Rully "Montagne La Folie"', description: 'Côte Chalonnaise, Burgundy, France 2020', price: 89 },
      { name: 'ALBERT BICHOT "Secret de Famille"', description: 'Côte D\'Or, Burgundy, France 2020', price: 125 },
      { name: 'DOMAINE JOLLY & FILS Chablis Premier Cru Fourchaume "L\' Homme Mort"', description: 'Chablis, Burgundy, France 2022', price: 170 },
      { name: 'LOUIS LATOUR Pernand-Vergelesses Premier Cru "En Caradeux"', description: 'Côte de Beaune, Burgundy, France 2022', price: 199 },
      { name: 'VINCENT DAUVISSAT Petit Chablis', description: 'Chablis, Burgundy, France 2022', price: 180 },
      { name: 'VINCENT DAUVISSAT Chablis', description: 'Chablis, Burgundy, France 2022', price: 195 },
      { name: 'DOMAINE LAURENT TRIBUT Chablis', description: 'Chablis, Burgundy, France 2018', price: 190 },
      { name: 'DOMAINE PAUL PERNOT Puligny Montrachet', description: 'Côte de Beaune, Burgundy, France 2022', price: 255 },
      { name: 'DOMAINE JEAN FERY Meursault', description: 'Côte de Beaune, Burgundy, France 2021', price: 299 },
      { name: 'MARK HAISMA Chassagne-Montrachet', description: 'Côte d\'Or, Burgundy, France 2020', price: 325 },
      { name: 'DOMAINE JEAN FERY Puligny Montrachet "Les Nosroyes"', description: 'Côte de Beaune, Burgundy, France 2021', price: 350 },
      { name: 'VINCENT GIRARDIN Chassagne-Montrachet Premier Cru "Morgeot"', description: 'Côte de Beaune, Burgundy, France 2020', price: 365 },
      { name: 'VINCENT GIRARDIN Chassagne-Montrachet Premier Cru "Les Chaumées"', description: 'Côte de Beaune, Burgundy, France 2020', price: 399 },
      { name: 'DOMAINE JEAN FERY Chassagne-Montrachet "Abbaye De Morgeot"', description: 'Côte de Beaune, Burgundy, France 2021', price: 399 },
      { name: 'DOMAINE VOCORET & FILS Chablis Grand Cru "Les Clos"', description: 'Chablis, Burgundy, France 2021', price: 410 },
      { name: 'VINCENT GIRARDIN Puligny-Montrachet Premier Cru "Les Referts"', description: 'Côte de Beaune, Burgundy, France 2020', price: 475 },
      { name: 'VINCENT GIRARDIN Chassagne-Montrachet Premier Cru "La Romanée"', description: 'Côte de Beaune, Burgundy, France 2020', price: 490 },
      { name: 'VINCENT GIRARDIN Puligny-Montrachet Premier Cru "Les Folatières"', description: 'Côte de Beaune, Burgundy, France 2020', price: 580 },
      { name: 'DOMAINE JEAN FERY Corton Charlemagne Grand Cru', description: 'Côte de Beaune, Burgundy, France 2021', price: 795 },
    ],
    whiteOtherRegions: [
      { name: 'FRIÕ FRIÕ Vinho Verde D.O.C.', description: 'Portugal 2023', price: 53 },
      { name: 'RAPHAËL MIDOIR Touraine Sauvignon', description: 'Loire Valley, France 2023', price: 55 },
      { name: 'JEAN-YVES BRETAUDEAU Muscadet Sèvre-et-Maine Sur Lie "L\' Envol"', description: 'Loire Valley, France 2019', price: 59 },
      { name: 'ANTXIOLA Getariako Txakolina DO', description: 'Basque Country 2022', price: 65 },
      { name: 'MASSERIA CLEMENTE Falanghina Del Sannio Taburno', description: 'Campania, Italia 2022', price: 65 },
      { name: 'VITECOLTE Roero Arneis "Villata"', description: 'Piemonte, Italy 2022', price: 66 },
      { name: 'MASSERIA CLEMENTE Fiano Beneventano', description: 'Campania, Italy 2022', price: 71 },
      { name: 'LIVIO FELLUGA Pinot Grigio', description: 'Collio, Italy 2023', price: 79 },
      { name: 'GRANBAZÀN Albariño "Etiqueta Àmbar"', description: 'Rias Baixas, Spain 2022', price: 85 },
      { name: 'BELONDRADE Verdejo "Quinta Apolonia"', description: 'Valladolid, Spain 2022', price: 79 },
      { name: 'WEINGUT ROBERT WEIL Riesling Kabinett', description: 'Rheingau, Germany 2020', price: 98 },
      { name: 'NICOLAS GAUDRY Pouilly-Fumé "Les Champs de Cri"', description: 'Loire Valley, France 2023', price: 89 },
      { name: 'DOMAINE DE CHEVALIER "Clos des Lunes" Lune d\' Argent', description: 'Sauternes, France 2020', price: 89 },
      { name: 'DOMAINE OGEREAU "En Chenin"', description: 'Anjou, Loire Valley France 2020', price: 79 },
      { name: 'ALPHONSE MELLOT Sancerre Blanc "La Moussiere"', description: 'Loire Valley, France 2023', price: 110 },
      { name: 'DOMAINES SCHLUMBERGER Riesling Grand Cru Saering', description: 'Alsace, France 2021', price: 105 },
      { name: 'MERRY EDWARDS Russian River Valley Sauvignon Blanc', description: 'Russian River Valley, CA 2022', price: 105 },
      { name: 'TIKI Sauvignon Blanc Single Vineyard', description: 'Waipara North Canterbury, New Zealand 2023', price: 72 },
      { name: 'HABIT "McGinley Vineyard" Sauvignon Blanc', description: 'Happy Canyon, CA 2022', price: 85 },
      { name: 'GAJA "Rossj Bass" Langhe Bianco', description: 'Piemonte, IT 2021', price: 250 },
      { name: 'LIVIO FELLUGA "Terre Alte" Rosazzo DOCG', description: 'Collio, Italy 2015', price: 265 },
    ],
    rose: [
      { name: 'DOMAINES OTT "Clos Mireille", Cru Classé', description: 'Côte De Provence, France 2021', price: 139 },
      { name: 'HECHT & BANNIER Coteaux d\'Aix-en-Provence', description: 'Provence, France 2023', price: 72 },
      { name: 'CANTINA UMBRA LA MADELÉiNE "Julì" Pinot Nero Rosato', description: 'Umbria, Italy 2023', price: 72 },
    ],
    redPinotNoirNewWorld: [
      { name: 'MORGAN "Twelve Clones"', description: 'Santa Lucia Highlands, CA 2023', price: 69 },
      { name: 'BENTON LANE', description: 'Willamette Valley, Oregon 2023', price: 79 },
      { name: 'CHALLEN Pinot Noir "Zotovitch Vineyard"', description: 'Sta. Rita Hills, CA 2022', price: 86 },
      { name: 'BELLE GLOS "Dairyman"', description: 'Russian River Valley, CA 2022', price: 95 },
      { name: 'WINDRACER "Sealift Vineyard"', description: 'Sonoma Coast, CA 2021', price: 108 },
      { name: 'SAXON BROWN Pinot Noir "Fighting Brothers"', description: 'Sonoma Coast, CA 2019', price: 119 },
      { name: 'OUR LADY OF GUADALUPE Pinot Noir', description: 'Santa Barbara County, CA 2022', price: 163 },
      { name: 'TYLER "La Encantada Vineyard"', description: 'Sta. Rita Hills, CA 2021', price: 199 },
      { name: 'HOPE WELL "Sunday\'s Child"', description: 'Eola–Amity Hills, Oregon 2019', price: 220 },
      { name: 'BREWER-CLIFTON "Machado"', description: 'Sta. Rita Hills, CA 2018', price: 225 },
      { name: 'PISONI ESTATE', description: 'Santa Lucia Highlands, CA 2019', price: 300 },
      { name: 'PISONI ESTATE', description: 'Santa Lucia Highlands, CA 2021', price: 300 },
      { name: 'SEA SMOKE "Ten"', description: 'Sta. Rita Hills, CA 2020', price: 325 },
      { name: 'SEA SMOKE "Southing"', description: 'Sta. Rita Hills, CA 2021', price: 325 },
      { name: 'KOSTA BROWNE', description: 'Sta. Rita Hills, CA 2022', price: 355 },
    ],
    redBurgundyBeaujolais: [
      { name: 'DU GRAPPIN "Beaujolais Cru" Côte de Brouilly', description: 'Beaujolais France 2021', price: 129 },
      { name: 'DOMAINE BUISSON-BATTAULT Bourgogne Rouge', description: 'Côte De Beaune, France 2020', price: 120 },
      { name: 'DOMAINE FAIVELEY Mercurey "Vieilles Vignes"', description: 'Côte Chalonnaise, France 2022', price: 158 },
      { name: 'BOUCHARD PÈRE & FILS "Beaune Clos de la Mousse" 1er Cru Monopole', description: 'Côte d\'Or, France 2020', price: 195 },
      { name: 'DOMAINE BERTHELEMOT Pommard "Noizons"', description: 'Côte De Beaune, France 2022', price: 195 },
      { name: 'DOMAINE ALAIN MICHELOT Nuit-Saint-Georges 1er Cru "Aux Champs Perdrix"', description: 'Côte De Nuit, France 2013', price: 234 },
      { name: 'DOMAINE BART Fixin 1er Cru', description: 'Côte d\'Or, France 2022', price: 249 },
      { name: 'CHÂTEAU DE MARSANNAY "Les Longeroies"', description: 'Côte De Nuit, France 2019', price: 289 },
      { name: 'DOMAINE PIERRE AMIOT ET FILS "Clos De La Roche" Grand Cru', description: 'Côte De Nuit, France 2017', price: 690 },
      { name: 'BOUCHARD PÈRE & FILS "Beaune Clos du Roi" 1er Cru', description: 'Côte De Beaune, France 2017', price: 245 },
      { name: 'DOMAINE PIERRE AMIOT ET FILS Gevrey Chambertin 1er Cru "Les Combottes"', description: 'Côte De Nuit, France 2020', price: 399 },
    ],
    redEclectic: [
      { name: 'ZACA MESA "Z Cuvée" Grenache', description: 'Santa Ynez Valley, CA 2018', price: 65 },
      { name: 'DOMAINE DE LA COMMANDERIE Chinon "Sélection Vieilles Vignes"', description: 'Loire Valley, France 2020', price: 59 },
      { name: 'TABLAS CREEK Patelin De Tablas Rouge', description: 'Paso Robles, CA 2023', price: 68 },
      { name: 'STOLPMAN VINEYARDS Sangiovese Estate Grown "Ballard Canyon"', description: 'Ballard Canyon, CA 2022', price: 84 },
      { name: 'TURLEY Juvenile Zinfandel', description: 'California 2023', price: 95 },
      { name: 'TURLEY Zinfandel "Dusi"', description: 'California 2022', price: 159 },
      { name: 'LUÍS DUARTE "Rubrica" Vinho Regional Alentejano', description: 'Portugal 2020', price: 99 },
      { name: 'ORIXE SOTELO "Tinta Alta" Tempranillo', description: 'California 2021', price: 115 },
      { name: 'PRAY TELL Gamay Noir', description: 'Willamette Valley, Oregon 2022', price: 129 },
      { name: 'ADELAIDA Cabernet Franc "Viking Estate Vineyard"', description: 'Paso Robles, CA 2019', price: 189 },
      { name: 'TABLAS CREEK Esprit De Tablas', description: 'Paso Robles, CA 2020', price: 205 },
    ],
    redSyrah: [
      { name: 'MUSSO & FRANK Syrah "Zotovich Vineyard"', description: 'Sta. Rita Hills, CA 2022', price: 78 },
      { name: 'PAX Syrah "The Bench Vineyard"', description: 'Clements Hills, CA 2022', price: 125 },
      { name: 'ANALEMMA "Mosier Hills Estate"', description: 'Columbia Gorge, Oregon 2016', price: 170 },
      { name: 'ORIN SWIFT Petite Sirah "Machete"', description: 'Napa Valley, CA 2021', price: 158 },
      { name: 'THE JOY FANTASTIC "Estate" Syrah', description: 'Sta. Rita Hills, CA 2019', price: 149 },
      { name: 'SINE QUA NON "Distenta IV" Syrah', description: 'California 2022', price: 675 },
      { name: 'SINE QUA NON "Le Supplement" Estate Syrah', description: 'Santa Barbara County, CA 2013', price: 1290 },
      { name: 'SINE QUA NON "Jusqu\' a\' l\'os" Confession Vineyard', description: 'Santa Barbara County, CA 2013', price: 1290 },
      { name: 'SINE QUA NON "Hated Hunter" Syrah', description: 'California 2017', price: 890 },
    ],
    redBordeaux: [
      { name: 'CHÂTEAU CHAPELLE D\'ALIÉNOR', description: 'Bordeaux Supérieur, France 2019', price: 63 },
      { name: 'CHÂTEAU LOUDENNE Cru Bourgeois', description: 'Medoc France 2018', price: 92 },
      { name: 'CHÂTEAU MARCADIS Lalande De Pomerol', description: 'Pomerol, France 2021', price: 79 },
      { name: 'CHÂTEAU LACOSTE BORIE', description: 'Pauillac, France 2017', price: 135 },
      { name: 'CHÂTEAU LASSÈGUE', description: 'Saint-Emilion, France 2013', price: 145 },
      { name: 'CHÂTEAU HAUT-CHAIGNEAU Lalande De Pomerol', description: 'Pomerol, France 2018', price: 156 },
      { name: 'CHÂTEAU GISCOURS "Le Sirène de Giscours"', description: 'Margaux, France 2018', price: 149 },
      { name: 'CHÂTEAU DE PEZ', description: 'Saint-Estèphe, France 2019', price: 195 },
      { name: 'CHÂTEAU LALANDE BORIE', description: 'Saint-Julien, France 2015', price: 149 },
      { name: 'LA CROIX DUCRU BEAUCAILLOU "Cuvée Colbert"', description: 'Saint-Julien, France 2018', price: 199 },
      { name: 'RESERVE DE LA COMTESSE DE LALANDE', description: 'Pauillac, France 2015', price: 215 },
      { name: 'CHÂTEAU ROUGET', description: 'Pomerol, France 2018', price: 245 },
      { name: 'CHÂTEAU D\'ISSAN Grand Cru Classé', description: 'Margaux, France 2018', price: 299 },
      { name: 'CHÂTEAU RIPEAU Grand Cru Classé', description: 'Saint-Émilion, France 2018', price: 235 },
      { name: 'CHÂTEAU PAPE CLÉMENT Grand Cru Classé de Graves', description: 'Pessac Léognan, France 2014', price: 399 },
      { name: 'CHÂTEAU COS D\'ESTOURNEL', description: 'Saint-Estèphe, France 2000', price: 1450 },
      { name: 'CHÂTEAU COS D\'ESTOURNEL', description: 'Saint-Estèphe, France 2005', price: 1380 },
      { name: 'CHÂTEAU HAUT-BRION', description: 'Pessac Léognan, France 2015', price: 1980 },
      { name: 'CHÂTEAU MARGAUX', description: 'Margaux, France 2012', price: 1850 },
      { name: 'CHÂTEAU LAFITE-ROTHSCHILD', description: 'Pauillac, France 2005', price: 3900 },
      { name: 'CHÂTEAU CHEVAL BLANC', description: 'Saint-Émilion, France 2012', price: 1650 },
      { name: 'CHÂTEAU LÉOVILLE LAS CASES', description: 'Saint-Julien, France 1989', price: 1350 },
      { name: 'CHÂTEAU LÉOVILLE LAS CASES', description: 'Saint-Julien-Médoc, France 2007', price: 695 },
      { name: 'CHÂTEAU LÉOVILLE LAS CASES', description: 'Saint-Julien-Médoc, France 2010', price: 1150 },
      { name: 'CHÂTEAU LYNCH BAGES', description: 'Pauillac, France 2015', price: 620 },
      { name: 'CHÂTEAU MOUTON ROTHSCHILD', description: 'Pauillac, France 2007', price: 2150 },
      { name: 'CHÂTEAU HOSANNA', description: 'Pomerol, France 2018', price: 795 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 1989', price: 5100 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 2003', price: 3400 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 2006', price: 3000 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 2011', price: 3100 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 2012', price: 3500 },
      { name: 'CHÂTEAU PETRUS', description: 'Pomerol, France 2014', price: 5750 },
      { name: 'CHÂTEAU PALMER', description: 'Margaux, France 2011', price: 1100 },
      { name: 'CHÂTEAU PICHON LONGUEVILLE Comtesse de Lalande', description: 'Pauillac, France 2009', price: 890 },
    ],
    redRhone: [
      { name: 'RESERVE MONT-REDON Côte Du Rhône Villages', description: 'Rhone Valley, France 2022', price: 71 },
      { name: 'COUDOULET DE BEAUCASTEL Côte Du Rhône Villages', description: 'Courthezon, France 2021', price: 119 },
      { name: 'RESERVE MONT-REDON Gigondas', description: 'Gigondas, France 2019', price: 139 },
      { name: 'DOMAINE DE LA JANASSE Châteauneuf du Pape', description: 'Châteauneuf-du-Pape, France 2021', price: 185 },
      { name: 'CHÂTEAU VANNIÈRES Bandol Rouge', description: 'Bandol France 1990', price: 255 },
      { name: 'E. GUIGAL Côte Rôtie "Brune et Blonde De Guigal"', description: 'Côte Rôtie, France 2020', price: 299 },
      { name: 'JEAN-LUC COLOMBO "Les Ruchets"', description: 'Cornas, France 2016', price: 340 },
      { name: 'MARK HAISMA', description: 'Cornas, France 2021', price: 269 },
    ],
    redItalyPiemonte: [
      { name: 'VITE COLTE Barbaresco DOCG "Casa In Collina"', description: 'Piemonte, Italy 2018', price: 99 },
      { name: 'SERRE DEI ROVERI Barolo DOCG', description: 'Piemonte, Italy 2019', price: 119 },
      { name: 'ALDO CONTERNO Langhe Nebbiolo DOC "Il Favot"', description: 'Piemonte, Italy 2020', price: 179 },
      { name: 'PODERI ELIA Barbaresco DOCG "Serracapelli"', description: 'Piemonte, Italy 2015', price: 178 },
      { name: 'TREVITIS Barolo DOCG Riserva "Duchet"', description: 'Piemonte, Italy 2015', price: 189 },
      { name: 'CA\' BRUSA\' Barolo DOCG "Vigna Vai" Riserva 10 Anni', description: 'Piemonte, Italy 2008', price: 285 },
      { name: 'ALDO CONTERNO Barolo DOCG "Bussia"', description: 'Piemonte, Italy 2018', price: 280 },
      { name: 'CORDERO DI MONTEZEMOLO Barolo DOCG "Enrico IV"', description: 'Piemonte, Italy 2017', price: 391 },
      { name: 'RENATO RATTI Barolo DOCG "Rocche Dell\' Annunziata"', description: 'Piemonte, Italy 2019', price: 450 },
      { name: 'GAJA Barbaresco', description: 'Piemonte, Italy 2019', price: 780 },
      { name: 'GAJA Barbaresco "Sorì San Lorenzo"', description: 'Piemonte, Italy 2016', price: 1690 },
      { name: 'GAJA Barbaresco "Sorì Tildin"', description: 'Piemonte, Italy 2016', price: 1690 },
    ],
    redItalyToscana: [
      { name: 'VENTOLAIO Rosso Di Montalcino DOC', description: 'Toscana, Italy 2021', price: 71 },
      { name: 'TENUTE DI FRATERNITA Chianti Riserva DOCG "Ser Mariotto"', description: 'Toscana, Italy 2017', price: 79 },
      { name: 'POGGIO PETROSO "Governo All\'uso Toscano"', description: 'Toscana, Italy 2019', price: 92 },
      { name: 'I TIRRENI "Beccaia" Bolgheri DOC', description: 'Toscana, Italy 2021', price: 99 },
      { name: 'CAMPO DEI FIORI Brunello Di Montalcino DOCG', description: 'Toscana, Italy 2019', price: 135 },
      { name: 'FATTORIA UCCELLIERA "Ginepraia – Botte N.7"', description: 'Toscana, Italy 2020', price: 180 },
      { name: 'VENTOLAIO Brunello Di Montalcino DOCG', description: 'Toscana, Italy 2017', price: 189 },
      { name: 'TENUTA SAN GUIDO "Sassicaia" Bolgheri Sassicaia DOC', description: 'Toscana, Italy 2015', price: 1340 },
      { name: 'TENUTA SAN GUIDO "Sassicaia" Bolgheri Sassicaia DOC', description: 'Toscana, Italy 2018', price: 850 },
      { name: 'TENUTA SAN GUIDO "Sassicaia" Bolgheri Sassicaia DOC', description: 'Toscana, Italy 2020', price: 950 },
      { name: 'AZIENDA AGRICOLA LE RAGNAIE Brunello Di Montalcino DOCG', description: 'Toscana, Italy 2017', price: 235 },
      { name: 'ALTESINO Brunello Di Montalcino "Vigna Montosoli" DOCG', description: 'Toscana, Italy 2019', price: 420 },
      { name: 'PIAN DELLE QUERCI Brunello Di Montalcino Riserva DOCG', description: 'Toscana, Italy 2017', price: 335 },
      { name: 'LA CASACCIA DI FRANCESCHI Brunello Di Montalcino Riserva DOCG', description: 'Toscana, Italy 2015', price: 485 },
      { name: 'I TIRRENI "Tyrsinoi"', description: 'Toscana, Italy 2016', price: 290 },
      { name: 'LA CASACCIA DI FRANCESCHI "San Leopoldo"', description: 'Toscana, Italy 2019', price: 260 },
      { name: 'POGGIO AL VENTO COL D\'ORCIA Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 2015', price: 695 },
      { name: 'POGGIO AL VENTO COL D\'ORCIA Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 2006', price: 765 },
      { name: 'POGGIO AL VENTO COL D\'ORCIA Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 2001', price: 820 },
      { name: 'BIONDI SANTI Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 1998', price: 2500 },
      { name: 'BIONDI SANTI Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 2007', price: 2300 },
      { name: 'BIONDI SANTI Brunello Di Montalcino DOCG Riserva', description: 'Toscana, Italy 2012', price: 2200 },
    ],
    redItalyOther: [
      { name: 'CANTINE PELLEGRINO Etna Rosso DOC "Ulysse"', description: 'Sicilia, Italy 2019', price: 69 },
      { name: 'PROGETTI AGRICOLI Rosso Appassimento "Capo Zafferano"', description: 'Puglia, Italy 2021', price: 69 },
      { name: 'VILLA SAN CARLO Valpolicella DOC', description: 'Veneto, Italy 2019', price: 70 },
      { name: 'I FAVATI Campi Taurasini DOC "Cretarossa"', description: 'Campania, Italy 2015', price: 89 },
      { name: 'CANTINA DI MOGORO Cannonau Di Sardegna DOC Riserva', description: 'Sardegna, Italy 2014', price: 99 },
      { name: 'CANTINE FINA "Caro Maestro"', description: 'Sicilia, Italy 2017', price: 115 },
      { name: 'DALIBRÀ Montepulciano D\'Abruzzo Rosso Appassito "Primatus"', description: 'Abruzzo, Italy 2023', price: 81 },
      { name: 'RICCI CURBASTRO Curtefranca Rosso DOC Riserva "Vigna Santella del Grom"', description: 'Lombardia, Italy 2016', price: 115 },
      { name: 'MASSERIA FRATTASI Aglianico Beneventano "Kapnios"', description: 'Campania, Italy 2018', price: 175 },
      { name: 'CANTINE BOCALE Montefalco Sagrantino DOCG "Ennio"', description: 'Umbria, Italy 2016', price: 199 },
      { name: 'BENEDETTI Amarone Della Valpolicella DOCG', description: 'Veneto, Italy 2018', price: 149 },
      { name: 'FEUDI DI SAN GREGORIO Irpinia Aglianico DOC "Serpico"', description: 'Campania, Italy 2015', price: 285 },
      { name: 'MASSERIA FRATTASI Capri Rosso DOC', description: 'Campania, Italy 2020', price: 335 },
      { name: 'DAL FORNO ROMANO Amarone Della Valpolicella Classico DOCG', description: 'Veneto, Italy 2013', price: 1140 },
      { name: 'DAL FORNO ROMANO Amarone Della Valpolicella Classico DOCG', description: 'Veneto, Italy 2011', price: 1230 },
    ],
    redAustraliaArgentinaChile: [
      { name: 'MOLLYDOOKER "The Boxer"', description: 'Mc Laren Vale, Australia 2022', price: 90 },
      { name: 'PAUL HOBBS VIÑA COBOS "Bramare"', description: 'Lujan De Cuyo, Argentina 2018', price: 125 },
      { name: 'DE MARTINO "Las Cruces"', description: 'Cachapoal Valley, Chile 2018', price: 137 },
      { name: 'MAAL Malbec "Bestial" Old Vines', description: 'Mendoza, Argentina 2019', price: 175 },
      { name: 'PENFOLDS "BIN 389"', description: 'South Australia 2018', price: 220 },
      { name: 'BODEGAS CARO, "Aruma" Malbec', description: 'Mendoza, Argentina 2022', price: 75 },
      { name: 'PENFOLDS "Grange Bin 95" Shiraz', description: 'South Australia 2015', price: 2150 },
    ],
    redCaliforniaMerlot: [
      { name: 'GAINEY', description: 'Santa Ynez Valley, CA 2021', price: 69 },
      { name: 'KEENAN Ghisletta Vineyard', description: 'Carneros-Napa Valley, CA 2022', price: 95 },
      { name: 'DUCKHORN VINEYARDS', description: 'St. Helena-Napa Valley, CA 2022', price: 145 },
      { name: 'LA JOTA', description: 'Howell Mountain-Napa Valley, CA 2014', price: 290 },
      { name: 'LA JOTA', description: 'Howell Mountain-Napa Valley, CA 2013', price: 315 },
      { name: 'LA JOTA', description: 'Howell Mountain-Napa Valley, CA 2012', price: 330 },
    ],
    redCaliforniaCabernet: [
      { name: 'BREA "Margarita Vineyard" Cabernet Sauvignon', description: 'Paso Robles 2022', price: 90 },
      { name: 'OPOLO "Estate" Cabernet Sauvignon', description: 'Paso Robles 2021', price: 110 },
      { name: 'ETTORE Cabernet Sauvignon', description: 'Mendocino County 2019', price: 119 },
      { name: 'THE PRISONER Cabernet Sauvignon', description: 'Oakville-Napa Valley 2021', price: 129 },
      { name: 'BLACKBIRD VINEYARDS "Arise" Bordeaux Blend', description: 'Oak Knoll District-Napa Valley 2019', price: 153 },
      { name: 'GROTH Cabernet Sauvignon', description: 'Oakville-Napa Valley 2022', price: 185 },
      { name: 'MUSSO & FRANK Cabernet Sauvignon', description: 'Happy Canyon of Santa Barbara 2021', price: 190 },
      { name: 'APERTURE "Soil Specific" Red Blend', description: 'Alexander Valley 2021', price: 166 },
      { name: 'SCRIBE "West Side Atlas Peak" Cabernet Sauvignon', description: 'Atlas Peak, Napa Valley 2019', price: 225 },
      { name: 'GHOSTBLOCK "Estate" Cabernet Sauvignon', description: 'Oakville, Napa Valley 2021', price: 255 },
      { name: 'CHECKERBOARD "Impetuous" Cabernet Blend', description: 'Calistoga-Napa Valley 2020', price: 265 },
      { name: 'JORDAN WINERY Cabernet Sauvignon', description: 'Alexander Valley 2019', price: 195 },
      { name: 'HEITZ CELLAR "Lot C-91" Cabernet Sauvignon', description: 'Napa Valley 2018', price: 299 },
      { name: 'HEITZ CELLAR "Martha\'s Vineyard" Cabernet Sauvignon', description: 'Oakville, Napa Valley 2018', price: 785 },
      { name: 'FROG\'S LEAP Cabernet Sauvignon Estate Grown', description: 'Rutherford Napa Valley 2019', price: 320 },
      { name: 'DOMINUS ESTATES "Napanook" Cabernet Sauvignon Estate Grown', description: 'Yountville-Napa Valley 2021', price: 330 },
      { name: 'SALVESTRIN Cabernet Sauvignon Dr. Crane Vineyard', description: 'St. Helena-Napa Valley 2022', price: 370 },
      { name: 'MACAULEY "Bestoffer To Kalon" Cabernet Sauvignon', description: 'Oakville, Napa Valley 2017', price: 690 },
      { name: 'MACAULEY "Stagecoach" Cabernet Sauvignon', description: 'Oakville, Napa Valley 2018', price: 499 },
      { name: 'ULYSSES VINEYARD "Estate" Bordeaux Blend', description: 'Napa Valley 2013', price: 540 },
      { name: 'QUINTESSA', description: 'Rutherford-Napa Valley 2019', price: 755 },
      { name: 'OPUS ONE', description: 'Oakville-Napa Valley 2018', price: 899 },
      { name: 'OPUS ONE', description: 'Oakville-Napa Valley 2019', price: 989 },
      { name: 'CONTINUUM ESTATES - 100TH HARVEST "Sage Mountain Vineyard"', description: 'St. Helena-Napa Valley 2019', price: 850 },
      { name: 'PAUL HOBBS WINERY "Beckstoffer Dr. Crane Vineyard"', description: 'Oakville-Napa Valley 2017', price: 790 },
      { name: 'SHAFER VINEYARDS "Hillside Select" Cabernet Sauvignon', description: 'Stag\'s Leap District-Napa Valley 2014', price: 865 },
      { name: 'SHAFER VINEYARDS "Hillside Select" Cabernet Sauvignon', description: 'Stag\'s Leap District-Napa Valley 2018', price: 1159 },
      { name: 'SHAFER VINEYARDS "Hillside Select" Cabernet Sauvignon', description: 'Stag\'s Leap District-Napa Valley 2019', price: 1159 },
      { name: 'ACCENDO CELLARS Cabernet Sauvignon', description: 'Napa Valley 2014', price: 995 },
      { name: 'CHECKERBOARD VINEYARDS "Kings Row" Cabernet Sauvignon', description: 'Calistoga-Napa Valley 2018', price: 550 },
      { name: 'CHECKERBOARD VINEYARDS "Kings Row" Cabernet Sauvignon', description: 'Calistoga-Napa Valley 2019', price: 590 },
      { name: 'DOMINUS', description: 'Yountville-Napa Valley 2019', price: 999 },
      { name: 'DOMINUS', description: 'Yountville-Napa Valley 2021', price: 1250 },
      { name: 'CHECKERBOARD VINEYARDS "Aurora" Cabernet Sauvignon', description: 'Calistoga-Napa Valley 2019', price: 1150 },
      { name: 'HUNDRED ACRE - FORTUNATE SON "The Warrior"', description: 'Napa Valley 2018', price: 1250 },
      { name: 'COLGIN IX ESTATE', description: 'St. Helena-Napa Valley 2014', price: 2250 },
      { name: 'COLGIN IX ESTATE', description: 'St. Helena-Napa Valley 2018', price: 2450 },
    ],
    largeFormats: [
      { name: 'GALERIE "Latro" Cabernet Sauvignon [MAGNUM 1.5L]', description: 'Knights Valley, CA 2016', price: 240 },
      { name: 'CAIN VINEYARD Cain Concept [MAGNUM 1.5L]', description: 'St. Helena-Napa Valley 2015', price: 350 },
      { name: 'RENATO RATTI Barolo DOCG "Marcenasco" [MAGNUM 1.5L]', description: 'Piemonte, Italy 2018', price: 455 },
    ],
    fortifiedWines: [
      { name: 'RWC HISTORIC Madeira "Boston"', description: 'Madeira, Portugal NV', price: 16 },
      { name: 'RWC HISTORIC Madeira "New York"', description: 'Madeira, Portugal NV', price: 16 },
      { name: 'RWC HISTORIC Madeira "Charleston"', description: 'Madeira, Portugal NV', price: 16 },
      { name: 'PELLEGRINO Marsala Superiore Riserva Rubino Dolce D.O.C. "GENESI"', description: 'Marsala, Sicily NV', price: 36 },
      { name: 'EMILIO LUSTAU SHERRY EAST INDIA SOLERA', description: 'Jerez De La Frontera, Spain NV', price: 14 },
      { name: 'GRAHAM SIX GRAPES Reserve Port', description: 'Douro, Portugal NV', price: 13 },
      { name: 'COCKBURN Special Reserve Port', description: 'Douro, Portugal NV', price: 12 },
      { name: 'SANDEMAN Late Bottle Vintage Port', description: 'Douro, Portugal 2007', price: 19 },
      { name: 'PEDRONCELLI Four Grapes Vintage Port', description: 'Sonoma County, CA 2007', price: 15 },
    ],
    dessertWines: [
      { name: 'TENUTA CARRETTA Moscato D\'Asti DOCG', description: 'Piemonte, Italy 2023', price: '14/52' },
      { name: 'REIF ESTATE Vidal Icewine Grand Reserve VQA', description: 'Niagara River, Canada 2019', price: '27/160' },
      { name: 'CHATEAU DE RIEUSSEC – CARMES DE RIEUSSEC 375ml', description: 'Sauternes AOP, France 2022', price: '21/97' },
      { name: 'VITE COLTE "Bella Estate" Moscato Passito', description: 'Piemonte, Italy 2021', price: '14/52' },
      { name: 'EMILIO LUSTAU Pedro Ximénez Sherry "San Emilio"', description: 'Jerez de la Frontera, Spain NV', price: '12/99' },
      { name: 'CANTINE PELLEGRINO Passito Di Pantelleria', description: 'Sicily, Italy NV', price: '15/99' },
    ],
    halfBottles: [
      { name: 'HENRIOT "Brut Souverain" [375ml]', description: 'Reims, France NV', price: 98 },
      { name: 'KRUG Grande Cuvee [375ml]', description: 'Reims, France NV', price: 375 },
      { name: 'THE PRISONER Chardonnay [375ml]', description: 'Carneros, CA 2019', price: 57 },
      { name: 'SANFORD Chardonnay [375ml]', description: 'Sta. Rita Hills, CA 2019', price: 59 },
      { name: 'DOMAINE VOCORET ET FILS Chablis [375ml]', description: 'Chablis, Burgundy France 2021', price: 59 },
      { name: 'SIDURI Pinot Noir [375ml]', description: 'Willamette Valley, Oregon 2023', price: 46 },
      { name: 'FAMILLE PERRIN Côte du Rhône Réserve [375ml]', description: 'Rhône Valley, France 2021', price: 46 },
      { name: 'FREEMARK ABBEY Cabernet Sauvignon [375ml]', description: 'Napa Valley 2021', price: 89 },
      { name: 'COL D\'ORCIA Brunello Di Montalcino [375ml]', description: 'Toscana, Italy 2019', price: 120 },
      { name: 'ECHO DE LYNCH BAGES [375ml]', description: 'Pauillac, Bordeaux–France 2015', price: 139 },
      { name: 'STAGLIN "Salus" Cabernet Sauvignon [375ml]', description: 'Rutherford-Napa Valley, CA 2019', price: 169 },
      { name: 'QUINTESSA [375ml]', description: 'Rutherford-Napa Valley, CA 2018', price: 299 },
    ],
  },
}

const menuTabs = [
  { id: 'dinner', name: 'Dinner Menu' },
  { id: 'desserts', name: 'Dessert Menu' },
  { id: 'wines', name: 'Wine List' },
  { id: 'wineByGlass', name: 'Wine by the Glass & Beer' },
  { id: 'bar', name: 'Spirits' },
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('dinner')

  const renderMenuItem = (item: any, index: number) => (
    <div key={index} className="flex justify-between items-start mb-6 group">
      <div className="flex-1">
        <h4 className="font-playfair text-lg font-semibold text-rich-black group-hover:text-musso-burgundy transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-gray-600 font-crimson text-sm mt-1">
            {item.description}
          </p>
        )}
      </div>
      {item.price !== null && (
        <span className="font-inter font-semibold text-musso-burgundy ml-4">
          {typeof item.price === 'number' ? `$${item.price.toFixed(2).replace(/\.00$/, '')}` : item.price}
        </span>
      )}
    </div>
  )

  const renderMenuSection = (title: string, items: any[]) => (
    <div className="mb-12">
      <h3 className="heading-md text-musso-burgundy mb-6 pb-2 border-b-2 border-heritage-gold/30">
        {title}
      </h3>
      <div className="grid lg:grid-cols-2 gap-x-12">
        {items.map(renderMenuItem)}
      </div>
    </div>
  )

  const currentMenu = menuCategories[activeTab as keyof typeof menuCategories] as any

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Musso & Frank Menu"
          subtitle="Culinary Excellence Since 1919"
          description="Classic American cuisine prepared with time-honored techniques"
          image="/images/light-photo-bg.jpg"
          height="medium"
        />

        <Section background="white">
          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-8 py-3 font-inter font-medium rounded-full transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-musso-burgundy text-white'
                    : 'bg-classic-cream text-rich-black hover:bg-heritage-gold/20'
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Menu Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dinner' && (
              <>
                {renderMenuSection('Appetizers', currentMenu.appetizers)}
                {renderMenuSection('Soups', currentMenu.soups)}
                {renderMenuSection('Salads', currentMenu.salads)}
                {renderMenuSection('Cold Seafood', currentMenu.coldSeafood)}
                {renderMenuSection('Fish and Seafood', currentMenu.fishSeafood)}
                {renderMenuSection('Steaks and Chops from the Grill', currentMenu.steaksChops)}
                {renderMenuSection('Sauces', currentMenu.sauces)}
                {renderMenuSection('Italian Entrees', currentMenu.italian)}
                {renderMenuSection('Classics to Order', currentMenu.classics)}
                {renderMenuSection('Potatoes, Vegetables & Side Dishes', currentMenu.sides)}
                {renderMenuSection('Daily Features', currentMenu.dailyFeatures)}
                {/* Note about served à la carte */}
                <div className="mt-8 p-4 bg-classic-cream rounded-lg text-center">
                  <p className="text-sm text-gray-600 font-inter italic">
                    Fish, Seafood, Steaks and Chops are served à la carte. Daily feature prices available upon request.
                  </p>
                </div>

                {/* Special Notes - Only on Dinner Menu */}
                <div className="mt-12 p-8 bg-classic-cream rounded-lg">
                  <h3 className="font-playfair text-xl font-semibold text-center mb-4">
                    Important Information
                  </h3>
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-700 font-inter font-semibold uppercase">
                      THERE WILL BE A $4.00 CHARGE ON ALL SPLIT ORDERS
                    </p>
                    <div className="text-sm text-gray-600 font-inter">
                      <span className="font-bold">▲DISCLAIMER:</span> Consuming raw or under cooked meats, poultry, seafood, shellfish or eggs may
                      increase your risk of food illness. For a list of which sauces and dressings contain raw
                      eggs inquire with your server
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'desserts' && (
              <>
                {renderMenuSection('Desserts', currentMenu.desserts)}
                {renderMenuSection('Musso\'s Flannel Cakes', currentMenu.flannelCakes)}
                <div className="mt-8 p-4 bg-classic-cream rounded-lg text-center mb-8">
                  <p className="text-sm text-gray-600 font-inter italic">
                    We Proudly Serve Danesi Coffee For Our Espresso Drinks
                  </p>
                </div>
                {renderMenuSection('Coffee & Tea Selection', currentMenu.coffeeAndTea)}
                {renderMenuSection('Cognac & Armagnac', currentMenu.cognacArmagnac)}
                {renderMenuSection('Digestive & Liqueur', currentMenu.digestiveLiqueur)}
                {renderMenuSection('Dessert Wines', currentMenu.dessertWines)}
                {renderMenuSection('Port, Madeira & Sherry', currentMenu.portMadeiraSherry)}
              </>
            )}
            {activeTab === 'wines' && (
              <>
                {renderMenuSection('Champagne, Franciacorta & Sparkling', currentMenu.champagneSparklingFranciacorta)}
                {renderMenuSection('White Wines: Chardonnay, New World', currentMenu.whiteChardonnayNewWorld)}
                {renderMenuSection('White Wines: Burgundy', currentMenu.whiteBurgundy)}
                {renderMenuSection('White Wines: Other Regions', currentMenu.whiteOtherRegions)}
                {renderMenuSection('Rosé Wines', currentMenu.rose)}
                {renderMenuSection('Red Wines: Pinot Noir, New World', currentMenu.redPinotNoirNewWorld)}
                {renderMenuSection('Red Wines: Burgundy & Beaujolais', currentMenu.redBurgundyBeaujolais)}
                {renderMenuSection('Red Wines: Eclectic', currentMenu.redEclectic)}
                {renderMenuSection('Red Wines: Syrah & Syrah Blends', currentMenu.redSyrah)}
                {renderMenuSection('Red Wines: Bordeaux', currentMenu.redBordeaux)}
                {renderMenuSection('Red Wines: Rhône Valley', currentMenu.redRhone)}
                {renderMenuSection('Red Wines: Italy, Piemonte', currentMenu.redItalyPiemonte)}
                {renderMenuSection('Red Wines: Italy, Toscana', currentMenu.redItalyToscana)}
                {renderMenuSection('Red Wines: Italy, Other Regions', currentMenu.redItalyOther)}
                {renderMenuSection('Red Wines: Australia, Argentina & Chile', currentMenu.redAustraliaArgentinaChile)}
                {renderMenuSection('Red Wines: California Merlot', currentMenu.redCaliforniaMerlot)}
                {renderMenuSection('Red Wines: California Cabernet & Blends', currentMenu.redCaliforniaCabernet)}
                {renderMenuSection('Large Formats: Magnum [1.5L]', currentMenu.largeFormats)}
                {renderMenuSection('Fortified Wines', currentMenu.fortifiedWines)}
                {renderMenuSection('Dessert Wines', currentMenu.dessertWines)}
                {renderMenuSection('Half Bottles [375ml]', currentMenu.halfBottles)}
              </>
            )}
            {activeTab === 'wineByGlass' && (
              <>
                {renderMenuSection('Sparkling', currentMenu.sparkling)}
                {renderMenuSection('White', currentMenu.white)}
                {renderMenuSection('Rosé', currentMenu.rose)}
                {renderMenuSection('Red', currentMenu.red)}
                {renderMenuSection('Beer', currentMenu.beer)}
              </>
            )}
            {activeTab === 'bar' && (
              <>
                {renderMenuSection('GIN', currentMenu.gin)}
                {renderMenuSection('VODKA', currentMenu.vodka)}
                {renderMenuSection('TEQUILA', currentMenu.tequila)}
                {renderMenuSection('BOURBON', currentMenu.bourbon)}
                {renderMenuSection('RYE', currentMenu.rye)}
                {renderMenuSection('IRISH, JAPANESE & CANADIAN WHISKEY', currentMenu.irishJapaneseCanadian)}
                {renderMenuSection('BLENDED SCOTCH', currentMenu.blendedScotch)}
                {renderMenuSection('SCOTCH: SPEYSIDE', currentMenu.scotchSpeyside)}
                {renderMenuSection('SCOTCH: HIGHLAND', currentMenu.scotchHighland)}
                {renderMenuSection('SCOTCH: ISLAY', currentMenu.scotchIslay)}
                {renderMenuSection('COGNAC', currentMenu.cognac)}
                {renderMenuSection('ARMAGNAC', currentMenu.armagnac)}
                {renderMenuSection('RUM', currentMenu.rum)}
                {renderMenuSection('LIQUEURS', currentMenu.liqueurs)}
                {renderMenuSection('AMARO, GRAPPA & DIGESTIVES', currentMenu.amaroGrappaDigestives)}
                {renderMenuSection('MEZCAL', currentMenu.mezcal)}
              </>
            )}
          </div>
        </Section>

        {/* Wine Program CTA */}
        <Section background="pattern">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Award-Winning Wine Program
            </h2>
            <div className="mb-8 flex justify-center">
              <img
                src="/images/wine-spectator-awards.png"
                alt="Wine Spectator Awards of Excellence 2019-2025"
                className="w-full max-w-2xl h-auto"
              />
            </div>
            <p className="body-lg text-gray-700 mb-8">
              <strong>Wine Director:</strong> Andrea Scuto<br />
              <strong>Sommelier:</strong> Serge Kiraz<br />
              <strong>450+ exceptional wines from $53 to $5,750.</strong>
            </p>
            <p className="body-lg text-gray-700 mb-8">
              From legendary Château Pétrus, Opus One, and Sassicaia to rare Champagnes and First Growth Bordeaux—our collection spans the world's most celebrated vineyards. Whether seeking a special occasion treasure or exploring new favorites, we'll guide you to perfection.
            </p>
            <div className="flex justify-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab('wines')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                View Wine List
              </button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
