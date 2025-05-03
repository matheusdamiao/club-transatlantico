// import React from "react";
// import { HeadFC, PageProps } from "gatsby";
// import SEO from "../components/seo";
// import eventos from "./../data/events.json";

// import HeroSectionEvents from "../components/heroSectionEvents";

// interface EventPageContext {
//   titulo: string;
// }

// const EventTemplate: React.FC<PageProps<{}, EventPageContext>> = ({
//   pageContext,
// }) => {
//   const { titulo } = pageContext;

//   // Busca o evento no JSON
//   const evento = eventos[titulo as keyof typeof eventos];

//   if (!evento) {
//     return <p>Evento não encontrado.</p>;
//   }

//   return (
//     <div>
//       <HeroSectionEvents
//         imageDesktop={evento.imageDesktop}
//         imageMobile={evento.imageMobile}
//       />
//       <h1 class="lg:font-title lg:text-5xl text-2xl">{evento.title}</h1>
//       <p>{evento.description}</p>
//       <p>
//         Data: {evento.date} - Horário: {evento.time}
//       </p>
//       <p>Local: {evento.location}</p>
//     </div>
//   );
// };

// export default EventTemplate;

// // Atualize o Head para usar o JSON
// export const Head: HeadFC<EventPageContext> = ({ pageContext }) => {
//   const { titulo } = pageContext;

//   const evento = eventos[titulo as keyof typeof eventos];

//   if (!evento) {
//     return null; // Retorna vazio se o evento não for encontrado
//   }

//   return <SEO title={evento.title} description={evento.description} />;
// };
