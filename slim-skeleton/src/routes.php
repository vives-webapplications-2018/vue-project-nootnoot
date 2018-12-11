<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);

});

$app->post('/submit', function (Request $request, Response $response, array $args) {
   
    $body = $request->getParsedBody();

    $myfile = fopen("public\image.png", "w") or die("Unable to open file!");

    $data = explode( ',', $body['image'] );

    // we could add validation here with ensuring count( $data ) > 1
    fwrite($myfile, base64_decode( $data[ 1 ] ) );
    fclose($myfile);

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);

});
