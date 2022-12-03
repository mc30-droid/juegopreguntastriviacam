
function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }

  let baseDePreguntas = [
    {
      pregunta: "¿Cual es el resultado de esta operación?",
      imagen: LaTeX(`\\int x dx`),
      respuesta: opnLaTeX("\\frac{1}{2}x^2"),
      distractores: [opnLaTeX("\\frac{1}{3}x^2"), opnLaTeX("x^2"), opnLaTeX("\\frac{1}{3}x^3")],
    },

    {
        pregunta:"¿Cuántos litros de sangre tiene una persona adulta?",
        imagen: "https://thumbs.dreamstime.com/b/hombre-mayor-y-mujer-mayores-125145622.jpg",
        respuesta:"Tiene entre 4 y 6 litros.",
        distractores: ["Tiene entre 2 y 4 litros", "Tiene 10 litros", "Tiene 7 litros"],
      },

    {
        pregunta:"¿Cuál es el país más grande y el más pequeño del mundo?",
        imagen:"https://t1.uc.ltmcdn.com/es/posts/7/1/6/cuantos_paises_hay_en_el_mundo_29617_600.jpg",
        respuesta:"Rusia y Vaticano.",
        distractores:["China y Nauru", "Canadá y Mónaco", "India y San Marino" ],
    },

    { 
        pregunta:"¿Cuál es el libro más vendido en el mundo después de la Biblia?",
        imagen:"https://img.freepik.com/foto-gratis/composicion-creativa-dia-mundial-libro_23-2148883765.jpg?w=2000",
        respuesta:"Don Quijote de la Mancha.",
        distractores:["El Señor de los Anillos", "Cien años de Soledad", "La Odisea"],
    },

    {
       pregunta:"¿Cuántos jugadores por equipo participan en un partido de voleibol?",
       imagen :"https://upload.wikimedia.org/wikipedia/commons/0/03/Voleibol_en_los_Juegos_Sudamericanos.jpg",
       respuesta:"6 jugadores",
       distractores:["2 jugadores", "3 jugadores", "5 jugadores"],
    },

    {
        pregunta:"¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
        imagen :"https://historiadelavida.editorialaces.com/wp-content/uploads/2020/05/El-Sol-gira-como-la-Tierra-ENTRADA.jpg",
        respuesta:"8 minutos",
        distractores:["8 segundos"," 12 minutos", "12 horas"],
    },

    {
        pregunta:"¿Cual de estas tres ciudades se localizan en las costas del mar Caribe?",
        imagen:"https://img.freepik.com/foto-gratis/isla-maldivas_74190-477.jpg",
        respuesta:"Santa Marta, Barranquilla y Cartagena.",
        distractores:["Tumacoí, Buenaventura y Nuquí.", "Cali, Medellín y Pasto.", "Buenaventura, Cartagena y Pasto"],

    },

    {
        pregunta:"¿Cuáles son y dónde se ubican las dos montañas más altas del país?",
        imagen:"https://cdn.pixabay.com/photo/2017/09/25/14/20/mountains-2785254_960_720.jpg",
        respuesta:" Los picos Cristóbal Colón y Simón Bolívar en la Sierra Nevada de Santa Marta.",
        distractores:["El Nevado del Tolima y el Nevado del Ruíz en la cordillera central.", " El páramo de Sumapaz y el páramo de Pisba en la cordillera oriental.", "Makalu y Monte Logan"],
    },

    {
        pregunta:"¿Cómo se llama y en qué ciudad se encuentra este ícono turístico?",
        imagen:"https://cdn.colombia.com/sdi/2015/10/18/torre-del-reloj-704593.jpg",
        respuesta:"La Torre del reloj, en Cartagena de Indias.",
        distractores:["El reloj del horizonte, Valledupar.", ". La puerta colonial de Tolú.", " Castillo de San Felipe de Barajas."],

    },

    {
      pregunta:"¿Cuál es la capital del Departamento de Amazonas?",
      imagen:"https://www.cooperatingvolunteers.com/wp-content/uploads/2017/04/Amazonas.jpg",
      respuesta:"Leticia",
      distractores:["Popayán.", "Florencia.", "Tarapaca"],

    },
  ];


