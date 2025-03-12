window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: window.location.href + "swagger.yaml", // Ensures it appends the file correctly
    dom_id: '#swagger-ui',
    deepLinking: true,
    defaultModelsExpandDepth: 1,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    showExtensions: false,
    showCommonExtensions: false
  });

  setTimeout(() => {
    document.querySelector(".topbar")?.remove();
    document.querySelector(".servers")?.parentElement?.remove();
  }, 500);
};
