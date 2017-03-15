<?php

$pdo = new PDO('mysql:host=localhost;dbname=projetprogmobile;charset=utf8', 'root', '') or die('erreur de co');

if(isset($_GET['idquestion'])) {
    $req = $pdo->query("SELECT * FROM question WHERE idquestion=".$_GET['idquestion']);
    
    $results = $req->fetchAll();
    
    echo json_encode($results, JSON_UNESCAPED_UNICODE);
}

if(isset($_GET['user_score'])) {
    $req = "UPDATE user SET user_score=".$_GET['user_score']." WHERE iduser=".$_GET["iduser"];
    
    $envoi = $pdo->prepare($req);
    $envoi->execute();
}

?>