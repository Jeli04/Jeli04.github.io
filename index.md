<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">
    <title>Projects for Bootstrap</title>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/album/">
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- Custom styles for this template -->
    <link href="styles.css" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        background-image: url('images/background.jpg');
        background-size: cover; /* or contain, depending on your preference */
        background-attachment: fixed;
      }
    </style>
  </head>
  <body>
    <main role="main">
    <section id = "homepage" class="jumbotron text-center">
        <div class="container center">  
          <h1 id = "typewriter-text" class="jumbotron-heading">Jerry Li</h1>
          <h3 class="jumbotron-heading">UCR Undergraduate</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com/jeli.04/" target="_blank"><img src="images/instagram-icon.png" alt="Facebook"></a>
            <a href="https://www.linkedin.com/in/jerryli2025/" target="_blank"><img src="images/linkedin-icon.png" alt="LinkedIn"></a>
            <a href="https://github.com/Jeli04" target="_blank"><img src="images/github-icon.png" alt="GitHub"></a>
            <!-- Add more social media images and links as needed -->
          </div>
          <script src="assets/javascript/main_page.js"></script>
        </div>
    </section>
    <section id = "about" class="jumbotron text-center">
        <div class="container">  
          <h1 class="jumbotron-heading">About Me</h1>
          <p class="lead text-muted">Hello and welcome to my Profolio Website! I'm Jerry and I am currently a undergraduate student studying Computer Science at UCR. I am very interested in AI/ML, specifcally in NLP. I've also worked on other categories of Software Development such as Android App Development, Game Development, Web Development, and more recently some Blockchain. In my freetime I enjoy exercising (usually gym or tennis), watching movies with friends, and gaming.</p>
        </div>
    </section>
      <section id="research" class="jumbotron text-center hidden">
        <div class="container">  
          <h1 class="jumbotron-heading">Research</h1>
          <p class="lead text-muted">I am currently conducting research at the <a href="https://cisl.ucr.edu">Collaborative Intelligence Systems Lab</a> (CISL) at UCR led by Dr. Qiu. Within CISL I am part of the perception team and I am currently working on two projects: Perception Module and Multimodal Perception.</p>
          <p>
            <a href="https://cisl.ucr.edu" class="btn btn-primary my-2">Link to Lab Website</a>
          </p>
        </div>
      </section>
      <section id = "projects" class="jumbotron text-center hidden">
        <div class="container">  
          <h1 class="jumbotron-heading">Projects</h1>
          <p class="lead text-muted">Below are some of my ongoing and past projects.</p>
          <p>
            <a href="https://github.com/Jeli04" class="btn btn-primary my-2">Link to Github</a>
          </p>
        </div>
      </section>
      <div id = "projects-table" class="album py-5 bg-light hidden">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <div class="image-container">
                  <img class="card-img-top resized-image" src="images/transformer-architecture.png" alt="Card image cap">
                </div>
                <div class="card-body">
                  <p class="card-text">I recreated a Transformer based on the famous paper "Attention Is All You Need" to translate English to Spanish using PyTorch.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href="https://github.com/Jeli04/transformer-translator" target="_blank">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                      </a>
                    </div>
                    <small class="text-muted">September 2023 - October 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <div class="image-container">
                  <img class="card-img-top resized-image" src="images/tictactoeweb.png" alt="Card image cap">
                </div>
                <div class="card-body">
                  <p class="card-text">Trained a Pytorch Neural Network to learn how to play TicTacToe using Reinforcement Learning and Monte Carlo Value Estimation.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href="https://github.com/Jeli04/TicTacToeNeuralNetwork" target="_blank">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                      </a>
                    </div>
                    <small class="text-muted">August 2023 - September 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <div class="image-container">
                  <img class="card-img-top resized-image" src="images/hume-openai.png" alt="Card image cap">
                </div>
                <div class="card-body">
                  <p class="card-text">I created a Chatbot that detects your emotion through a webcam using the Hume API and can listen to your voice using OpenAI's Whisper API.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href="https://github.com/Jeli04/Simple-Hume-Chatbot" target="_blank">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                      </a>
                    </div>
                    <small class="text-muted">July 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <div class="image-container">
                  <img class="card-img-top resized-image" src="images/currScreenLayout1.png" alt="Card image cap">
                </div>
                <div class="card-body">
                  <p class="card-text">Using Git and C++, we created a Schedule Manager for our CS100 Final Group Project that represents everything we learned in our lower division CS classes.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href="https://github.com/Jeli04/CS100-Final-Project" target="_blank">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                      </a>
                    </div>
                    <small class="text-muted">March 2023 - June 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">This is a Social Anxiety Discorder Awareness Website created for my High School CS Pathway Capstone Project. We designed it through Figma and deployed a embedded Chatbot using Flask as our framework.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">Janurary 2022 - June 2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <section id = "activities" class="jumbotron text-center">
      <div class="container">  
        <h1 class="jumbotron-heading">Activities</h1>
        <p class="lead text-muted">Currently at UCR I am also part of two extracirricular activities on campus</p>
      <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <p class="card-text">I am currently Interning as a board member at <a href="https://acm.cs.ucr.edu">ACM@UCR</a>. My current responsibilites are planning General Meeting and other Events as well as leading a Build A MiniGPT workshop series for the Winter 2024 quarter.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="https://github.com/Jeli04/transformer-translator" target="_blank">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                  </a>
                </div>
                <small class="text-muted">September 2023 - October 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <p class="card-text">Trained a Pytorch Neural Network to learn how to play TicTacToe usingReinforcement Learning and Monte Carlo Value Estimation.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="https://github.com/Jeli04/TicTacToeNeuralNetwork" target="_blank">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Github</button>
                  </a>
                </div>
                <small class="text-muted">August 2023 - September 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
      </div>
    </footer>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../../assets/js/vendor/popper.min.js"></script>
    <script src="../../dist/js/bootstrap.min.js"></script>
    <script src="../../assets/js/vendor/holder.min.js"></script>
    <script src="assets/javascript/main_page.js"></script>
  </body>
</html>