import Button from '../components/Button'

export default function NotFound() {
  return <section className="container-k flex min-h-[75svh] flex-col justify-center py-40">
    <p className="label-mono mb-8 text-accent">K/ · 404 / SIGNAL LOST</p>
    <h1 className="text-display">Página no encontrada.</h1>
    <p className="text-body-lg mb-10 mt-6 max-w-xl text-muted">La dirección puede haber cambiado o no existir. Sigamos desde el inicio.</p>
    <div><Button href="/" arrow="right">Volver al inicio</Button></div>
  </section>
}
