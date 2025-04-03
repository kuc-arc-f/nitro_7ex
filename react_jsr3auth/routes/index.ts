import { renderMove } from "../src/lib/renderUtil";

export default defineEventHandler(async (event) => {  
  if(!event.context.user){ return renderMove(); }
  
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>home</title>
    <link href="./output.css" rel="stylesheet" />
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/static/home.js"></script>
</body>
</html>
  `;
});
