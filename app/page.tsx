import Image from 'next/image';
import Icon from '../components/Icon';

// next/image with `unoptimized: true` does not auto-prefix basePath for
// plain public/ files, so it's applied by hand here to match next.config.js.
const base = process.env.GITHUB_ACTIONS ? '/landing-humandetector' : '';

const FEATURES = [
  {
    icon: 'videocam',
    title: 'Detección real de gestos',
    body: 'MediaPipe Face Landmarker lee parpadeo, giro de cabeza, inclinación y apertura de boca desde la cámara del navegador. Nada está scripteado: si no movés la cara, no pasa.',
  },
  {
    icon: 'format_list_numbered',
    title: 'Escalada de 10 pasos',
    body: 'Cada sesión sortea un plan: unos pocos pasos reales, 1-2 teatrales que siempre pasan, y el resto de rechazo con instrucciones cada vez más absurdas.',
  },
  {
    icon: 'sync_alt',
    title: 'Todo por un WebSocket',
    body: 'El frontend manda los frames JPEG y recibe instrucciones, veredictos, la malla facial en vivo y un log de sospechas en paralelo. Sin REST, sin polling.',
  },
  {
    icon: 'memory',
    title: 'Sin base de datos',
    body: 'Todo el estado de la verificación vive en memoria por conexión. Cerrás la pestaña y no queda nada — ni un frame, ni un log.',
  },
  {
    icon: 'cloud',
    title: 'Backend on-demand en EC2',
    body: 'Contenedor Docker con Caddy y TLS automático de Let’s Encrypt; imagen construida en AWS CodeBuild y publicada en ECR. Se enciende para eventos y se apaga después.',
  },
  {
    icon: 'block',
    title: 'No hay forma justa de pasar',
    body: '"Humano confirmado" existe pero es raro a propósito: hay que superar un umbral de movimiento facial y además ganar un sorteo de 1/5. Esa es la moraleja.',
  },
];

const STACK = [
  'Next.js 16 (export estático)',
  'TypeScript',
  'Tailwind CSS',
  'Python 3.12 + FastAPI',
  'MediaPipe (Tasks API)',
  'WebSockets',
  'Docker',
  'AWS EC2 + ECR',
  'AWS CodeBuild',
  'Caddy (TLS Let’s Encrypt)',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-outline">
        <div
          aria-hidden
          className="animate-scan-line pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-x-0 top-0 h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px bg-accent/40 shadow-[0_0_12px_2px_rgba(0,255,102,0.35)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
          <div className="flex items-center gap-2 rounded-full border border-outline bg-surface px-4 py-1.5">
            <Icon name="fingerprint" filled className="text-accent" />
            <span className="font-mono text-sm font-semibold tracking-wide">HumanDetector</span>
          </div>
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Verificación de humanidad que <span className="text-accent">nunca te aprueba</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Instalación satírica para una antihackathon. Un "verificador de humanidad" te pide
            gestos frente a la cámara, hace detección real con MediaPipe, y con cada paso que
            superás te exige uno más difícil — hasta pedidos imposibles. Casi nunca aprueba, y
            esa es la idea: los algoritmos que deciden por vos tampoco te explican por qué.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://lorengrz.github.io/HumanDetector/"
              className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-background shadow-[0_0_24px_rgba(0,255,102,0.35)] transition-transform hover:scale-[1.02]"
            >
              <Icon name="videocam" />
              Probar la verificación
            </a>
            <a
              href="https://github.com/LorenGrz/HumanDetector"
              className="flex items-center gap-2 rounded-xl border border-outline px-6 py-3 font-semibold transition-colors hover:bg-surface"
            >
              <Icon name="code" />
              Ver el código
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-outline px-6 py-3 font-semibold transition-colors hover:bg-surface"
            >
              Cómo funciona
            </a>
          </div>
          <p className="font-mono text-xs text-muted">
            El backend es on-demand: se enciende para demos y eventos.
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="overflow-hidden rounded-2xl border border-outline bg-black shadow-[0_0_60px_rgba(0,255,102,0.08)]">
            <Image
              src={`${base}/verify.png`}
              alt="Pantalla de verificación de HumanDetector: paso 01/10, la instrucción 'Abrí la boca', el recuadro de cámara con marco verde y un log de sospechas."
              width={907}
              height={917}
              className="w-full"
            />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-xs text-muted">
            Paso 1 de 10: la instrucción actual, el escaneo en vivo de la cámara y el log de
            sospechas que corre en paralelo todo el tiempo.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold">Cómo funciona</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted">
          Cada frame de tu cámara pasa por el mismo circuito: detectar el gesto, decidir si el
          paso se aprueba, y — casi siempre — subir la exigencia.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-outline bg-surface p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                <Icon name={f.icon} className="text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="border-y border-outline bg-surface-alt py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold">Cómo está hecho</h2>
          <p className="mx-auto mb-10 max-w-2xl text-muted">
            Frontend estático en GitHub Pages, backend Python contenerizado en AWS. Un WebSocket
            los une; el estado vive solo mientras dura tu conexión.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-outline bg-surface px-4 py-2 font-mono text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-1.5">
          <Icon name="fingerprint" filled className="text-accent" />
          <span className="font-mono font-semibold">HumanDetector</span>
        </div>
        <p className="text-sm text-muted">Proyecto de portfolio — Lorenzo Graizzaro.</p>
        <a
          href="mailto:lorenzograizzaro55@gmail.com"
          className="text-sm font-semibold text-accent underline underline-offset-4"
        >
          lorenzograizzaro55@gmail.com
        </a>
      </footer>
    </main>
  );
}
