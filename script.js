// Lista ampliada de excusas divertidas y categorizadas
const excusas = [
  // 🏫 Excusas para no ir a clase
  "Me quedé dormido porque soñaba que ya estaba en clase.",
  "El autobús llegó tarde... y yo también.",
  "Mi perro hizo caca en mi mochila.",
  "Me conecté pero me absorbió un agujero negro de internet.",
  "No pude porque estaba estudiando cómo no estudiar.",

  // 🧑‍💼 Excusas para el trabajo
  "Mi teclado se rebeló y dejó de escribir.",
  "El Excel me atacó con una fórmula infinita.",
  "Me encerré sin querer en el baño... con el móvil.",
  "La silla giratoria me desorientó por completo.",
  "Mi café se cayó sobre el informe... y sobre mí.",

  // 🛌 Excusas para no salir
  "Me duele el entusiasmo.",
  "El universo me dijo que no era buena idea.",
  "El clima emocional está inestable.",
  "Hoy no tengo ropa emocionalmente disponible.",
  "Mi espíritu social está en modo avión.",

  // 💔 Excusas de pareja
  "No eres tú, es mi suscripción a Netflix.",
  "Mi horóscopo dijo que hoy no debía verme contigo.",
  "Me di cuenta de que estoy enamorado... de dormir.",
  "El universo me mandó señales. En serio, un pájaro me cagó encima.",
  "Estoy en una relación seria con mi almohada.",

  // 🤯 Excusas aleatorias
  "No fui porque me secuestró un repartidor de Glovo.",
  "Mi gato se comió el router.",
  "Tuve que actualizar el horno a Windows 11.",
  "Soñé que ya lo había hecho y pensé que era real.",
  "Mi vecino cambió la Wi-Fi y ya no tengo internet.",
  "Estaba ocupado resolviendo el cubo de Rubik mentalmente.",
  "Tenía COVID, pero emocional.",
  "Estaba esperando que Mercurio saliera de retrógrado.",
  "No podía, tenía que cuidar a los Pokémon del móvil.",
  "Fui abducido por aliens sindicalizados.",
  "Me distraje ordenando los archivos del escritorio... físico.",
  "Fui víctima de una actualización existencial.",
  "Estaba ocupado sobreviviendo al lunes."
];

// Referencias al HTML
const btn = document.getElementById("generate");
const excuseBox = document.getElementById("excuse");

// Evento al hacer clic
btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * excusas.length);
  excuseBox.textContent = excusas[randomIndex];
});
