import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HumanDetector — Verificación de humanidad que nunca te aprueba',
  description:
    'Instalación satírica de "verificación de humanidad" para una antihackathon: pide gestos por cámara con detección real (MediaPipe), escala los pedidos hasta lo imposible y casi nunca aprueba. Portfolio preview.',
  openGraph: {
    title: 'HumanDetector',
    description:
      'Un verificador de humanidad que te presiona a demostrar que sos humano — y casi nunca aprueba.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-foreground antialiased">{children}</body>
    </html>
  );
}
