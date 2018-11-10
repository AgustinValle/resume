<?php
/*$name = $_GET["name"];
$mail = $_GET["mail"];
$phone = $_GET["phone"];
$message = $_GET["message"];

$to = "agusstin91@gmail.com";
$subject = "New email from resume website! yey!! 🙌🙌🙌" ;
$body = "
<html>
<head>
<title>New email 🙌🙌🙌</title>
</head>
<body>
<p>'$message'</p>
<table>
<tr>
<th>Firstname</th>
<th>Phone</th>
<th>Mail</th>
</tr>
<tr>
<td>'$name'</td>
<td>'$phone'</td>
<td>'$mail'</td>
</tr>
</table>
</body>
</html>
";
$headers = "From: ".$mail;
mail($to,$subject,$body,$headers);*/


$recipient_email    = "agusstin91@gmail.com";
$from_email         = "agusstin91@gmail.com";
$headers = "From:".$from_email."\r\n".
    "Reply-To: asd@gmail.com \n" .
    "X-Mailer: PHP/" . phpversion();
$sentMail = mail($recipient_email, "test", "hola", $headers);
if($sentMail)
{
    echo ('success');
    exit;
}
else echo "mal";