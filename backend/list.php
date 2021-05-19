<?php
require 'connect.php';
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * FROM  register";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $students[$cr]['id']    = $row['id'];
    $students[$cr]['username'] = $row['username'];
    $students[$cr]['firstName'] = $row['first_name'];
    $students[$cr]['lastName'] = $row['last_name'];
    $students[$cr]['age'] = $row['age'];
    $students[$cr]['salary'] = $row['salary'];
    $cr++;
  }
    
    //print_r($students);

  echo json_encode($students);
}
else
{
  http_response_code(404);
}
?>