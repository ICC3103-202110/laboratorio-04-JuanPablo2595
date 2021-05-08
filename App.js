//IMPORTANTE: Para que mi app funcione, es necesario que NPM este
// instalado, ya que sino, no se puede usar prompt y ocurre el error
// MODULE-NOT-FOUND.
// Si al momento de corregir, no funciona mi app, lo unico que hay
// que hacer es ejecutar  "npm install prompt-sync" en el terminal.


// Funcion pura que retorna un string
function view(counter){
    return("Count: " + counter + "\n\n" + "(+) (-)" + "\n\n\n" + "(q) for quit" + "\n");
}
// Funcion pura que retorna counter +- 1 dependiendo de msg
function update(msg, counter){
    if (msg === '+'){
        return counter + 1
    }
    if (msg === '-'){
        return counter - 1
    }
    if (msg != '+'){
        if (msg != '-'){
            return counter + 0
        }
    }
}

// Funcion impura que imprime y actualiza la vista
function app(counter){
    while(true){
        console.log(view(counter));
        const input = require('prompt-sync')();
        let msg = input('What would you do? ');
        if (msg === 'q'){
            console.clear()
            break
        }
        counter = update(msg, counter)
        console.clear()
    }
}
console.clear()
app(0)