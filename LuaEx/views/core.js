exports.main = function(prop) {
  return (`
    <!DOCTYPE html>
    <!--  This site was created in Webflow. http://www.webflow.com  -->
    <!--  Last Published: Sat Aug 04 2018 09:45:36 GMT+0000 (UTC)  -->
    <html data-wf-page="5b5b88a9b008d17bcee68a94" data-wf-site="5b57dbb4061bae8270a56a72">
    <head>
      <meta charset="utf-8">
      <title>Core</title>
      <meta content="Core" property="og:title">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta content="Webflow" name="generator">
      <link href="css/normalize.css" rel="stylesheet" type="text/css">
      <link href="css/webflow.css" rel="stylesheet" type="text/css">
      <link href="css/nicolass-dynamite-project-d5e70a.webflow.css" rel="stylesheet" type="text/css">
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js" type="text/javascript"></script>
      <script type="text/javascript">WebFont.load({  google: {    families: ["Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
      <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
      <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon">
    </head>
    <body>
      <div class="section-8">
        <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar-2 w-nav">
          <div class="w-container">
            <nav role="navigation" class="nav-menu w-nav-menu"><a href="index.html" class="nav-link-2 w-nav-link">Home</a><a href="core.html" class="nav-link-2 w-nav-link w--current">Orders</a><a href="register.html" class="nav-link-2 w-nav-link">Register</a><a href="user.html" class="nav-link-2 w-nav-link">User</a><a href="check.html" class="nav-link-2 w-nav-link">Check</a><a href="ipfs.html" class="nav-link-2 w-nav-link">IPFS</a></nav>
            <div class="w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-9">
        <div class="container w-container">
          <div class="w-row">
            <div class="column-10 w-col w-col-6">
              <div class="w-row">
                <div class="column-8 w-col w-col-6">
                  <div class="form-block w-form">
                    <form id="email-form" action="contratos/ordens/cadastrar" method="post" name="email-form" data-name="Email Form" class="form">
                      <h1 class="heading-3">SELL</h1><label for="contractId" class="field-label-2">CONTRACT ID:</label><input type="text" class="text-field w-input" maxlength="256" name="contractId" data-name="contractId" id="contractId"><label for="accountId" class="field-label-3">ACCOUNT ID:</label><input type="text" class="text-field-2 w-input" maxlength="256" name="accountId" data-name="accountId" id="accountId" required=""><label for="price" class="field-label-4">PRICE:</label><input type="text" class="text-field-3 w-input" maxlength="256" name="price" data-name="price" id="price" required=""><input type="hidden" name="type" value="-1"><label for="amount" class="field-label-4">AMOUNT:</label><input type="text" class="w-input" maxlength="256" name="amount" data-name="amount" id="amount" required=""><input type="submit" value="SELL" data-wait="Please wait..." class="submit-button sell w-button"></form>
                    <div class="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
                <div class="column-9 w-col w-col-6">
                  <div class="form-block w-form">
                    <form id="email-form" action="contratos/ordens/cadastrar" method="post" name="email-form" data-name="Email Form" class="form">
                      <h1 class="heading-3">BUY</h1><label for="contractId-2" class="field-label-2">CONTRACT ID:</label><input type="text" class="text-field w-input" maxlength="256" name="contractId" data-name="contractId" id="contractId-2"><label for="accountId-2" class="field-label-3">ACCOUNT ID:</label><input type="text" class="text-field-2 w-input" maxlength="256" name="accountId" data-name="accountId" id="accountId-2" required=""><label for="price-2" class="field-label-4">PRICE:</label><input type="text" class="text-field-3 w-input" maxlength="256" name="price" data-name="price" id="price-2" required=""><input type="hidden" name="type" value="1"><label for="amount-2" class="field-label-4">AMOUNT:</label><input type="text" class="w-input" maxlength="256" name="amount" data-name="amount" id="amount-2" required=""><input type="submit" value="BUY" data-wait="Please wait..." class="submit-button buy w-button"></form>
                    <div class="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-6 w-col w-col-6">
              <h1 class="heading-9">ORDERS BOOK</h1>
              <div class="">
                <div class="row-2 w-row">
                  <div class="column-11 w-col w-col-3">
                    <p class="paragraph-3 bold">Value</p>
                  </div>
                  <div class="column-12 w-col w-col-3">
                    <p class="paragraph-4 bold">Buy/Sell</p>
                  </div>
                </div>
                ` + prop + `
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-10"></div>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="js/webflow.js" type="text/javascript"></script>
      <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    </body>
    </html>




        `)
}
