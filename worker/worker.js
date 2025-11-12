// Worker simple que "tickea" y escribe un log cada X segundos.
// Simula procesamiento background (cola, cronjob, consumidor, etc.)
const INTERVAL_MS = parseInt(process.env.TICK_MS || "5000", 10);

console.log('Worker arrancado — PID:', process.pid);

let counter = 0;
setInterval(() => {
  counter++;
  const msg = `[${new Date().toISOString()}] tick #${counter}`;
  console.log(msg);
  // aquí podrías conectar a DB, cola, etc.
}, INTERVAL_MS);

// Mantener proceso vivo
process.on('SIGTERM', () => {
  console.log('Worker recibiendo SIGTERM, cerrando...');
  process.exit(0);
});
