<?php
require 'connect.php';

$token = 'Bearer-jsdfnkj223';
$headers = apache_request_headers();
//print_r($headers);


$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  //print_r($request);

  // Sanitize.
  $username = $request->username;
  $password = $request->password;

  $sql = "SELECT * FROM `register` WHERE `username` ='{$username}' AND `password` = '{$password}'";

  $result = mysqli_query($con, $sql);

  // echo "<pre>";
  // print_r($result);
  // exit;

  if (mysqli_num_rows($result) != 0) {
    echo json_encode(
      array(
        "status" => true,
        "message" => "Successful login.",
        "token" => $token,
        "email" => $username
      )
    );
    http_response_code(200);
  
  } else {
    //http_response_code(401);
    echo json_encode(array("status" => false,"message" => "Login failed."));
    http_response_code(200);
  }
}
