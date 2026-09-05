import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="page-hero not-found"><div className="page-container"><div className="eyebrow eyebrow--light"><span aria-hidden="true" />404</div><h1>That page is not in the exhibition hall.</h1><p>The route may have changed or the content may no longer be available.</p><Button href="/">Return home</Button></div></section>
  );
}
