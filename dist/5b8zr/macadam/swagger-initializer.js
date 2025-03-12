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
  let pathSegments = window.location.pathname.split('/').filter(segment => segment);
  let currentPath = pathSegments.length >= 2 ? pathSegments[0] + '/' + pathSegments[1] : null;

  // Check if the path exists in our map
  if (!pathMap[currentPath]) {
    document.body.innerHTML = "<h2 style='text-align:center;color:red;'>Access Denied: Invalid Supplier</h2>";
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
