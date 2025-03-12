window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Map supplier paths to their Swagger YAML URLs
  const pathMap = {
    "9f3xk/tds": "https://api-docs.poweredbyams.com/9f3xk/tds/swagger.yaml",
    "7v2mt/afs": "https://api-docs.poweredbyams.com/7v2mt/afs/swagger.yaml",
    "5b8zr/macadam": "https://api-docs.poweredbyams.com/5b8zr/macadam/swagger.yaml",
    "2y4jd/cops": "https://api-docs.poweredbyams.com/2y4jd/cops/swagger.yaml",
    "6a1wx/remman": "https://api-docs.poweredbyams.com/6a1wx/remman/swagger.yaml"
  };

  // Extract the supplier folder from the URL
  let currentPath = window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2];

  // Check if the path exists in our map
  if (!pathMap[currentPath]) {
    // Redirect to root (or show an error page)
    window.location.href = "https://api-docs.poweredbyams.com/";
    return;
  }

  // Load the correct Swagger file
  window.ui = SwaggerUIBundle({
    url: pathMap[currentPath],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
