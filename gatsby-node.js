exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const eventos = [
    { titulo: "geopolitica-em-transicao" },
    { titulo: "robotica-e-ia" },
  ];

  eventos.forEach((evento) => {
    createPage({
      path: `evento/${evento.titulo}`,
      component: require.resolve("./src/templates/eventTemplate.tsx"),
      context: {
        titulo: evento.titulo,
      },
    });
  });
};
