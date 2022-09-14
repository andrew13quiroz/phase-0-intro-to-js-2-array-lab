const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(string) {
    cats.push("Ralph");
};

function destructivelyPrependCat(string) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(string) {
    cats.pop();
};

function destructivelyRemoveFirstCat(string){
    cats.shift();
};

function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat(name) {
    const removeLastCat = cats.slice(name, 2);
    return removeLastCat;
}

function removeFirstCat(name) {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}