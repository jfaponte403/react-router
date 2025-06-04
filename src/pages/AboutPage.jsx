import { Link } from "../Link.jsx";

const i18n = {
  en: {
    title: 'About',
    description: 'This page gives you a little context about what this app does and who made it. It\'s still pretty minimal, though.',
    imageAlt: 'A simple illustrative image'
  },
  es: {
    title: 'Acerca de',
    description: 'Esta página te da un poco de contexto sobre qué hace esta app y quién la hizo. Aún está bastante minimalista.',
    imageAlt: 'Una imagen ilustrativa sencilla'
  }
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
}

export default function AboutPage({ routeParams }) {
  console.log(routeParams.lang)
  const i18n = useI18n(routeParams.lang ?? 'en');

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <img src="https://media1.tenor.com/m/jHY_wV7LEVkAAAAd/jojo.gif" alt={i18n.imageAlt} />
      <Link to="/">Home...</Link>
    </>
  );
}
