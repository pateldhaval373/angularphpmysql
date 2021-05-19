<?php

require 'connect.php';

$id = $_GET['id']; 

  // Get by id.
$sql = "SELECT * FROM `register` WHERE `id` ='{$id}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);
  
    $students['id']    = $row['id'];
    $students['username'] = $row['username'];
    $students['firstName'] = $row['first_name'];
    $students['lastName'] = $row['last_name'];
    $students['password'] = $row['password'];
    $students['age'] = $row['age'];
    $students['salary'] = $row['salary'];
   // $cr++;
  
    
   //print_r($students);

  echo json_encode($students);
}
else
{
  http_response_code(404);
}