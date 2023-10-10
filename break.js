const palavra = 'palhaço'

let existe = false
for (const letras of palavra) {
    if (letras === 'H' || letras === 'h') {
        console.log('tem a letra');
        existe = true
        break
    }
}

if (!existe) {
    console.log('não tem letra')
}
