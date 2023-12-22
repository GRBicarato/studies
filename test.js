function telefone_validation(telefone) {
    telefone = telefone.replace(/\D/g, '');
    console.log('Número após remover não-numéricos:', telefone);

    if (!(telefone.length === 11)) {
        console.log('Número não tem 11 dígitos');
        return false;
    }

    if (!/^(\([1-9]{2}\))9[6789]\d{7}$/.test(telefone)) {
        console.log('Número não segue o formato de celular brasileiro');
        return false;
    }

    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        63, 64, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];

    if (codigosDDD.indexOf(parseInt(telefone.substring(1, 3))) == -1) {
        console.log('Código DDD não é válido');
        return false;
    }

    console.log('Número de telefone válido');
    return true;
}

