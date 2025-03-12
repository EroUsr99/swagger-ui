window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Define the Swagger YAML URL for Macadam only
  const swaggerUrl = "https://api-docs.poweredbyams.com/5b8zr/macadam/";

  // Load the correct Swagger file
  window.ui = SwaggerUIBundle({
    url: swaggerUrl,
    dom_id: '#swagger-ui',
    deepLinking: true,
    defaultModelsExpandDepth: 1, // Expands the schema by default
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    configUrl: "",
    showExtensions: false,
    showCommonExtensions: false
  });

  // Remove top black bar and server label after UI loads
  setTimeout(() => {
    document.querySelector(".topbar")?.remove();
    document.querySelector(".servers")?.parentElement?.remove();
  }, 500);

  //</editor-fold>
};
