// ELEMENTOS PRINCIPALES
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const chat = document.getElementById("chat");
const photoContainer = document.querySelector(".photo-background");

// 📸 FOTOS DE FONDO (CAMBIA LOS NOMBRES POR LOS TUYOS)
const photos = [
  "images/Foto (1).jpeg",
  "images/Foto (2).jpeg",
  "images/Foto (3).jpeg",
  "images/Foto (4).jpeg",
  "images/Foto (5).jpeg",
  "images/Foto (6).jpeg",
  "images/Foto (7).jpeg",
  "images/Foto (8).jpeg",
  "images/Foto (9).jpeg",
  "images/Foto (10).jpeg",
  "images/Foto (11).jpeg",
  "images/Foto (12).jpeg",
  "images/Foto (13).jpeg",
  "images/Foto (14).jpeg",
  "images/Foto (15).jpeg",
  "images/Foto (16).jpeg",
  "images/Foto (17).jpeg",
  "images/Foto (18).jpeg",
  "images/Foto (19).jpeg",
  "images/Foto (20).jpeg",
  "images/Foto (21).jpeg",
  "images/Foto (22).jpeg",
  "images/Foto (23).jpeg"
];

// 🔀 Función para mezclar (Shuffle tipo cartas)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Copia mezclada
let shuffledPhotos = shuffleArray([...photos]);
let photoIndex = 0;

const floatingImages = [];

function createInitialPhotos() {
  for (let i = 0; i < 10; i++) {

    // Si se acaban las fotos, volver a mezclar
    if (photoIndex >= shuffledPhotos.length) {
      shuffledPhotos = shuffleArray([...photos]);
      photoIndex = 0;
    }

    const img = document.createElement("img");
    img.src = shuffledPhotos[photoIndex];
    photoIndex++;

    const size = Math.random() * 150 + 120;
    img.style.width = size + "px";

    img.style.top = Math.random() * 80 + "%";
    img.style.left = Math.random() * 80 + "%";

    const rotate = Math.random() * 20 - 10;
    img.dataset.rotate = rotate;

    img.style.transform = `rotate(${rotate}deg)`;
    img.style.opacity = 0.5;

    photoContainer.appendChild(img);
    floatingImages.push(img);
  }
}

function animateAllPhotos() {
  floatingImages.forEach(img => {
    const rotate = parseFloat(img.dataset.rotate);

    const moveX = Math.random() * 120 - 60;
    const moveY = Math.random() * 120 - 60;

    img.animate(
      [
        { transform: `translate(0px, 0px) rotate(${rotate}deg)` },
        { transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate + 5}deg)` }
      ],
      {
        duration: 6000 + Math.random() * 4000,
        direction: "alternate",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
}





// 💌 RAZONES (puedes expandir hasta 100)
const reasons = [
  "1. Amo la forma en la que me amas",
  "2. Amo la confianza que me das",
  "3. Amo la forma en la que expresas tu amor",
  "4. Amo la forma en la que me dices “amor”",
  "5. Amo cómo cada día que pasa tu amor se siente como la primera vez",
  "6. Amo cómo todos los días me dejas en claro cuánto me amas",
  "7. Amo la intensidad con la que demuestras tu amor",
  "8. Amo que tu comprensión es otra forma de amar",
  "9. Amo nuestras conversaciones diarias",
  "10. Amo cada plática que tenemos por horas y horas",
  "11. Amo que siempre sacas tiempo para que hablemos",
  "12. Amo cómo podemos pasar horas hablando sin cansarnos",
  "13. Amo cuando me cuentas de tu día",
  "14. Amo cómo me escuchas cuando te cuento algo que me gusta",
  "15. Amo que siempre preguntas por mi opinión",
  "16. Amo cómo estás al pendiente de mi sentir",
  "17. Amo que siempre quieres que explique más lo que digo",
  "18. Amo cómo me haces sentir que lo que digo sí tiene sentido",
  "19. Amo que no te cansas de mí cuando empiezo a divagar",
  "20. Amo cuando hablamos de temas profundos",
  "21. Amo que siempre me haces pensar de maneras distintas a la mía",
  "22. Amo que siempre que hablamos aprendo algo nuevo",
  "23. Amo que siempre me explicas incluso cuando no entiendo algo",
  "24. Amo tu forma de ver las cosas",
  "25. Amo cómo crees que aún hay esperanza para el mundo",
  "26. Amo aprender más y más de ti",
  "27. Amo tu sinceridad",
  "28. Amo cómo defiendes tus opiniones",
  "29. Amo lo buena persona que eres",
  "30. Amo lo responsable que eres",
  "31. Amo la resiliencia que te caracteriza",
  "32. Amo que siempre sigues adelante",
  "33. Amo cómo me impulsas a seguir mis metas",
  "34. Amo cómo me impulsas a ser mi mejor versión",
  "35. Amo cómo me animas cuando me siento mal",
  "36. Amo cómo me has hecho sentir cómodo siendo yo mismo a tu lado",
  "37. Amo cómo contigo me siento seguro de mostrarme vulnerable",
  "38. Amo cuando te muestras vulnerable cuando estamos juntos",
  "39. Amo que incluso cuando estás triste siempre preguntas cómo estoy",
  "40. Amo que siempre estás presente",
  "41. Amo que te preocupas por mí y notas cuando algo me pasa",
  "42. Amo cómo me entiendes cuando algo me hace sobrepensar",
  "43. Amo tu voz cuando me tranquiliza cuando empiezo a sobrepensar",
  "44. Amo cómo siempre dices que todo saldrá bien",
  "45. Amo que nunca me haces sentir mal conmigo mismo",
  "46. Amo que haces que mi vida sea más alegre",
  "47. Amo que todo el mundo nota lo feliz que soy desde que empezamos a andar",
  "48. Amo que nunca te has aburrido de mí",
  "49. Amo cómo has estado en cada noticia importante de mi vida",
  "50. Amo que me recuerdas las cosas que se me olvidan",
  "51. Amo cada notificación en mi pantalla que viene de ti",
  "52. Amo tus mensajes de buenos días",
  "53. Amo cuando me marcas",
  "54. Amo tu voz cuando te marco y me dices “holi holi, mi vida”",
  "55. Amo cómo suenas en mi teléfono en las noches cuando dormimos",
  "56. Amo cuando despierto en la noche y te escucho en mi teléfono",
  "57. Amo cómo me mandas videos en TikTok",
  "58. Amo cuando me etiquetas en publicaciones o en fotos",
  "59. Amo cómo te gusta que nos tomemos fotos",
  "60. Amo cómo subes esas fotos",
  "61. Amo todas las fotos que te tomas",
  "62. Amo cómo nos hacemos reír siempre",
  "63. Amo la forma en la que nos reímos entre besos",
  "64. Amo la forma en la que nos abrazamos",
  "65. Amo la calidez de cuando me abrazas",
  "66. Amo cuando caminamos agarrados de la mano",
  "67. Amo tu aroma",
  "68. Amo pasar tiempo contigo",
  "69. Amo que nos sentamos uno al lado del otro cuando comemos",
  "70. Amo cada platillo que has preparado y he podido probar",
  "71. Amo cómo te ves cuando cocinas",
  "72. Amo cómo te ves cuando me cuentas algo que te emociona",
  "73. Amo lo adorable que te ves cuando me cuentas algún chisme",
  "74. Amo lo linda que te ves cuando estás durmiendo",
  "75. Amo cómo te arreglas y siempre luces increíble",
  "76. Amo cada lunar impreso en tu piel",
  "77. Amo cómo tus ojos me miran y me calman",
  "78. Amo cómo tu sonrisa es capaz de hacerme sentir feliz",
  "79. Amo lo suave de tus labios al besarte",
  "80. Amo cómo se sienten tus labios en mi piel",
  "81. Amo cómo tus manos me tocan",
  "82. Amo cómo se siente dormir contigo en mis brazos",
  "83. Amo cuando me dices que no quieres que me vaya en las noches",
  "84. Amo que durante la intimidad nos decimos “te amo”",
  "85. Amo cómo nos hacemos sentir el uno al otro",
  "86. Amo todas las formas cariñosas en las que me llamas",
  "87. Amo tu creatividad",
  "88. Amo tus gustos musicales",
  "89. Amo cómo siempre hay algo que recomiendas para que veamos",
  "90. Amo tu amor por los gatos y las jirafas",
  "91. Amo cómo a pesar de decir que tienes mala memoria intentas recordar cada detalle que menciono",
  "92. Amo cómo te preocupas por mí cuando me voy de tu casa",
  "93. Amo cómo preguntas por mi familia",
  "94. Amo lo atenta que eres al escucharme",
  "95. Amo que siempre hablamos de todo",
  "96. Amo cada una de tus cicatrices",
  "97. Amo cómo me haces sentir que pertenezco a tu vida",
  "98. Amo cómo hemos construido algo tan nuestro",
  "99. Amo cómo imaginamos cómo será nuestra vida juntos en el futuro",
  "100. Amo todo lo que eres, todo lo que somos y todo lo que aún nos falta vivir juntos"
];

let index = 0;

// ✨ ABRIR CARTA
function openLetter() {
  envelope.classList.add("hidden");
  letter.classList.remove("hidden");



  if (navigator.vibrate) navigator.vibrate(15);
}

// 📸 CARGAR FOTOS DE FONDO ANIMADAS
function loadPhotos() {
  const container = document.querySelector(".photo-background");

  // Limpia por si se vuelve a abrir
  container.innerHTML = "";

  photos.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;

    // Posición aleatoria
    img.style.top = Math.random() * 80 + "%";
    img.style.left = Math.random() * 80 + "%";

    // Tamaño aleatorio ligero
    img.style.width = 120 + Math.random() * 80 + "px";

    // Retraso diferente para cada foto
    img.style.animationDelay = (i * 4) + "s";

    container.appendChild(img);
  });
}

// 💬 INICIAR MENSAJES
function startMessages() {
  letter.classList.add("hidden");
  chat.classList.remove("hidden");

  showMessage();
}

// 💕 MOSTRAR MENSAJES UNO POR UNO
function showMessage() {
  if (index >= reasons.length) return;

  const msg = document.createElement("div");
  msg.className = "message " + (index % 2 ? "right" : "left");
  msg.textContent = reasons[index];

  chat.appendChild(msg);

  // Scroll automático tipo app
  chat.scrollTop = chat.scrollHeight;

  index++;

  setTimeout(showMessage, 700);
}

createInitialPhotos();
animateAllPhotos();
