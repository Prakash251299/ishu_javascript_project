<?php
$name=$_POST["name"];
$lanm=$_POST["lanm"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$dob=$_POST["dob"];
$add=$_POST["address"];

$servername="localhost";
$username="root";
$password="";
$database="project";

$subject = "test";
$message = "how are you";
$from = "prakashpratapsingh.cse2020@nsec.ac.in";
$header = "From: $from";

$conn=mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
    echo "no wrok";echo "br";
}
else
{echo "work done";echo "br"}
$sql="INSERT INTO `project`(`name`,`lanm`,`email`,`phone`,`usnm`,`password`) VALUES('$name','$lannm','$email','$phone','$dob','$add')";
$result=mysqli_query($conn,$sql);
if($result)
 {echo"Your have successfully signed up";echo "<br>";
    if(mail($email,$subject,$message,$header))
     echo"mail sent";
    else 
     echo"mail failed";
 }
else{
    echo"Your form is not submitted".mysqli_error($conn);
}
?>