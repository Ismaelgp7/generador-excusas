// Lista de excusas divertidas y absurdas
const excusas = [
  "Me quedé dormido porque soñaba que ya estaba en clase.",
  "El autobús llegó tarde... y yo también.",
  "Mi perro hizo caca en mi mochila.",
  "Me conecté pero me absorbió un agujero negro de internet.",
  "No pude porque estaba estudiando cómo no estudiar.",
  "Mi teclado se rebeló y dejó de escribir.",
  "El Excel me atacó con una fórmula infinita.",
  "Me encerré sin querer en el baño... con el móvil.",
  "La silla giratoria me desorientó por completo.",
  "Mi café se cayó sobre el informe... y sobre mí.",
  "Me duele el entusiasmo.",
  "El universo me dijo que no era buena idea.",
  "El clima emocional está inestable.",
  "Hoy no tengo ropa emocionalmente disponible.",
  "Mi espíritu social está en modo avión.",
  "No eres tú, es mi suscripción a Netflix.",
  "Mi horóscopo dijo que hoy no debía verme contigo.",
  "Me di cuenta de que estoy enamorado... de dormir.",
  "Un pájaro me cagó encima y lo tomé como señal.",
  "Estoy en una relación seria con mi almohada.",
  "No fui porque me secuestró un repartidor de Glovo.",
  "Mi gato se comió el router.",
  "Tuve que actualizar el horno a Windows 11.",
  "Soñé que ya lo había hecho y pensé que era real.",
  "Mi vecino cambió la Wi-Fi y ya no tengo internet.",
  "Estaba resolviendo el cubo de Rubik mentalmente.",
  "Tenía COVID, pero emocional.",
  "Estaba esperando que Mercurio saliera de retrógrado.",
  "No podía, tenía que cuidar a los Pokémon del móvil.",
  "Fui abducido por aliens sindicalizados.",
  "Me distraje ordenando los archivos del escritorio... físico.",
  "Fui víctima de una actualización existencial.",
  "Estaba ocupado sobreviviendo al lunes.",
  "Creí que hoy era domingo hasta que sonó el timbre.",
  "Mi perro se comió la hoja de asistencia.",
  "La clase se canceló… en mis sueños.",
  "Tuve que reiniciar mi motivación y se quedó colgada.",
  "El WiFi decidió tomarse el día libre.",
  "Mi despertador entró en huelga.",
  "Me puse la camisa al revés y decidí no enfrentar al mundo.",
  "El tráfico existencial estaba imposible.",
  "Mi tarjeta de acceso me rechazó por falta de ganas.",
  "Me absorbió la junta de vecinos.",
  "No salí porque mi sofá me atrapó.",
  "Perdí la noción del tiempo viendo vídeos de gatos.",
  "Me quedé sin batería… emocional.",
  "Mi camiseta favorita estaba en la lavadora y eso fue señal.",
  "El universo me dijo que no saliera… por Twitter.",
  "Fui atacado por una bandada de patos existenciales.",
  "Mi espejo me dijo que hoy no era el día.",
  "Estaba negociando con un robot para que hiciera mi tarea.",
  "Se me cayó el internet al suelo y se rompió.",
  "Mi planta carnívora me pidió atención.",
  "Me absorbió el agujero negro de la procrastinación.",
  "Vi un alien en el salón y tuve que investigar.",
  "Estaba atrapado en un bucle de YouTube educativo.",
  "Mi habitación se volvió zona de guerra contra el polvo.",
  "Tuve que consolar a mi impresora porque colapsó."
];

// Lista de emojis
const emojis = ["😅", "🤯", "🐱", "🤡", "😬", "🛸", "💤", "📚", "🥴", "🔥", "📵", "🧠"];

// Cargar sonido
const sonido = new Audio("https://www.soundjay.com/button/button-3.mp3");

// Obtener elementos del DOM
const btn = document.getElementById("generate");
const excuseBox = document.getElementById("excuse");
const counterDisplay = document.getElementById("counter");
const btnWhatsapp = document.getElementById("share-whatsapp");
const btnTwitter = document.getElementById("share-twitter");

// Inicializar contador
let counter = 0;

// Evento: generar excusa
btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * excusas.length);
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const excusa = `${excusas[randomIndex]} ${randomEmoji}`;

  // Reproducir sonido
  sonido.play();

  // Reiniciar animación
  excuseBox.classList.remove("fade");
  void excuseBox.offsetWidth;
  excuseBox.classList.add("fade");

  // Mostrar excusa
  excuseBox.textContent = excusa;

  // Actualizar contador
  counter++;
  counterDisplay.textContent = `Excusas generadas: ${counter}`;
});

// Compartir por WhatsApp
btnWhatsapp.addEventListener("click", () => {
  const text = excuseBox.textContent;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)} ${location.href}`;
  window.open(url, "_blank");
});

// Compartir por Twitter
btnTwitter.addEventListener("click", () => {
  const text = excuseBox.textContent;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)} ${location.href}`;
  window.open(url, "_blank");
});
