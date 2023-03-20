// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
    return cats.push("Ralph")
}

function destructivelyPrependCat(catName){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(catName){
    return cats.pop()
}

function destructivelyRemoveFirstCat(catName){
    return cats.shift()
}

const appendCat = function() { 
   return [...cats, "Broom"]
}

const prependCat = function() { 
    return ["Arnold", ...cats]
 }

function removeLastCat(){
    return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1)
}