<?php

require('config.php');
require('update_report.php');

update_data();

$sql = "SELECT * FROM civicrm_booking_daily_stats";
$result = $mysqli->query($sql);


while($row = $result->fetch_array(MYSQLI_ASSOC)){
  $data[] = $row;
}


$results = ["sEcho" => 1,
        	"iTotalRecords" => count($data),
        	"iTotalDisplayRecords" => count($data),
        	"aaData" => $data ];


echo json_encode($results);

?>
