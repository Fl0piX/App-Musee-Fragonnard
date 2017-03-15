<?php

$pdo = new PDO('mysql:host=localhost;dbname=projetprogmobile;charset=utf8', 'root', '') or die('erreur de co');

if(isset($_GET['idquestion'])) {
    $req = $pdo->query("SELECT * FROM question WHERE id=".$_GET['id']);
}

$envoi = $pdo->prepare($req);
$envoi->execute();

echo json_encode($resultsid, JSON_UNESCAPED_UNICODE).json_encode($resultstitle, JSON_UNESCAPED_UNICODE);

?>