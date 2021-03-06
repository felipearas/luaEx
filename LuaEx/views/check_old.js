exports.main = function(prop) {
  return (`
    <!DOCTYPE html>
    <!--  This site was created in Webflow. http://www.webflow.com  -->
    <!--  Last Published: Sat Aug 04 2018 00:04:03 GMT+0000 (UTC)  -->
    <html data-wf-page="5b624b3d509255d77f387246" data-wf-site="5b57dbb4061bae8270a56a72">
    <head>
      <meta charset="utf-8">
      <title>Check</title>
      <meta content="Check" property="og:title">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta content="Webflow" name="generator">
      <link href="/css/normalize.css" rel="stylesheet" type="text/css">
      <link href="/css/webflow.css" rel="stylesheet" type="text/css">
      <link href="/css/nicolass-dynamite-project-d5e70a.webflow.css" rel="stylesheet" type="text/css">
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>
      <script type="text/javascript">WebFont.load({  google: {    families: ["Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
      <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
      <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon">
    </head>
    <body>
      <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar-2 w-nav">
        <div class="w-container">
          <nav role="navigation" class="nav-menu w-nav-menu"><a href="index.html" class="nav-link-2 w-nav-link">Home</a><a href="core.html" class="nav-link-2 w-nav-link">Orders</a><a href="register.html" class="nav-link-2 w-nav-link">Register</a><a href="user.html" class="nav-link-2 w-nav-link">User</a><a href="check.html" class="nav-link-2 w-nav-link w--current">Check</a><a href="ipfs.html" class="nav-link-2 w-nav-link">IPFS</a></nav>
          <div class="w-nav-button">
            <div class="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div class="section-20"></div>
      <div class="section-21">
        <div class="container-5 w-container">
          <h1 class="heading-12">CONTRACT</h1>
          <div class="div-block-4">
            <div class="row-6 w-row">
              <div class="column-21 w-col w-col-4">
                <div class="text-block-6 bold">Strike</div>
              </div>
              <div class="column-22 w-col w-col-4">
                <div class="text-block-7 bold">Option (PUT/CALL)</div>
              </div>
              <div class="column-23 w-col w-col-4">
                <div class="text-block-8 bold">Expiration date</div>
              </div>
            </div>
            ` + prop + `
          </div>
        </div>
      </div>
      <div class="section-22"></div>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="js/webflow.js" type="text/javascript"></script>
      <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    </body>
    </html>

        `)
}
