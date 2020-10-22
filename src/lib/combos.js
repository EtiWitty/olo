function isEqualArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

export function getTopCombos(pizzas) {
    const frequencyMap = {};

    const n = pizzas.length;
    for (let i = 0; i < n; i++) {
        // Sort toppings, so later we would only have one version of ["beef", "sausage"]
        // and not a different ["sausage", "beef"]
        const thisPizza = pizzas[i].toppings.sort();
        const pizzaKey = thisPizza.join("|");

        if (!frequencyMap[pizzaKey]) {
            frequencyMap[pizzaKey] = 1;
        } else {
            frequencyMap[pizzaKey]++;
        }
    }

    const pizzaPairs = [];

    for(let toppingsKey in frequencyMap) {
        pizzaPairs.push([toppingsKey, frequencyMap[toppingsKey]]);
    }
    
    const topPizzas = pizzaPairs
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map((pizzaPair, i) => {
            return {
                rank: i + 1,
                toppings: pizzaPair[0].split("|"),
                frequency: pizzaPair[1]
            };
        });

    // console.dir({ topPizzas });
    return topPizzas;
}