<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

include ("config.php");
include ("connect.php");

$title_arr = [];
class tablica
{
    public $question_arr = [];
    public $a1_arr = [];
    public $a2_arr = [];
    public $a3_arr = [];
    public $answer_arr = [];
    public $n_right_answer_arr = [];
}
$quiz1 = new tablica();

$sql = 'SELECT * FROM tablica';
//$out = "<table><tr><td>#</td><td>Площа</td><td>Эл. счетчик</td><td>Электричество</td><td>Кварт</td><td>Мусор</td><td>Хол.В.</td><td>Отопл.</td><td>Долг.</td></tr>";
if ($result = $mysqli->query($sql)) { 
    while($row = $result->fetch_assoc() ){
         array_push($quiz1->question_arr, $row['question']);
        array_push($quiz1->a1_arr, $row['a1']);
        array_push($quiz1->a2_arr, $row['a2']);
        array_push($quiz1->a3_arr, $row['a3']);
        array_push($quiz1->answer_arr, $row['answer']);
        array_push($quiz1->n_right_answer_arr, $row['right_answer']);
    }
    }
echo(json_encode($quiz1));
?>