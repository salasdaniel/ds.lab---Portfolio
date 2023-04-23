

const palabras = [
    "agua",
    "aire",
    "alma",
    "amor",
    "arte",
    "boca",
    "casa",
    "cielo",
    "corazón",
    "dolor",
    "fecho",
    "fuego",
    "gente",
    "grito",
    "hacha",
    "honor",
    "imagen",
    "joyas",
    "jugar",
    "luz",
    "mano",
    "miedo",
    "mundo",
    "nariz",
    "noche",
    "nube",
    "oro",
    "paz",
    "pelo",
    "poder",
    "pulso",
    "razon",
    "risa",
    "rojo",
    "salud",
    "sangre",
    "seres",
    "silla",
    "sombra",
    "sonar",
    "tabla",
    "tiempo",
    "trigo",
    "valor",
    "verbo",
    "vida",
    "viento",
    "vista",
    "voz",
    "zumba",
    "abrir",
    "acero",
    "amigo",
    "apoyo",
    "arena",
    "ayuda",
    "banco",
    "barco",
    "bello",
    "besar",
    "brazo",
    "broma",
    "buscar",
    "campo",
    "canto",
    "cargar",
    "causa",
    "clase",
    "color",
    "comer",
    "creer",
    "crema",
    "cruel",
    "darle",
    "dejar",
    "delta",
    "doble",
    "drama",
    "ducha",
    "echar",
    "elegir",
    "enano",
    "entra",
    "espia",
    "estas",
    "estos",
    "falta",
    "flaco",
    "fondo",
    "fumar",
    "gafas",
    "ganar",
    "grado",
    "grano",
    "gusto",
    "hacer",
    "hallo",
    "helar",
    "helio",
    "horno",
    "joyas",
    "igual",
    "imagen",
    "jabon",
    "joven",
    "juzga",
    "labio",
    "largo",
    "lento",
    "leon",
    "linda",
    "lista",
    "llega",
    "locas",
    "locos",
    "madre",
    "malos",
    "mania",
    "manos",
    "marca",
    "marzo",
    "matar",
    "media",
    "mejor",
    "memes",
    "menta",
    "metal",
    "metro",
    "modas",
    "molde",
    "monte",
    "morir",
    "mosca",
    "mueve",
    "mundo",
    "nacer",
    "nubes",
    "nueva",
    "nuevo",
    "nunca",
    "oasis",
    "ocupa",
    "oídos",
    "opera",
    "ordas",
    "orden",
    "país",
    "palma",
    "palos",
    "parar",
    "pardo",
    "pared",
    "paris",
    "parte",
    "pasar",
    "pelea",
    "pelos",
    "perro",
    "pesos",
    "pinta",
    "piso",
    "poder",
    "poner",
    "poros",
    "portal",
    "prima",
    "primo",
    "prosa",
    "punto",
    "quien",
    "quita",
    "rampa",
    "rango",
  ]

  const palabras_verificadas = []
  const regex = /^([a-zA-Z]{5})$/


  for (let i=0; i<palabras.length; i++){

    if (regex.test(palabras[i])){

      palabras_verificadas.push(palabras[i])

    }
  }

export {palabras_verificadas};
