<?php


update_data();

function update_data(){
require('config.php');

$sql_clean_report = "DELETE FROM civicrm_booking_daily_stats";
$result_get_resources = $mysqli->query($sql_clean_report);
#exit; 



$sql_get_resources = "SELECT civicrm_booking_resource_config_option.id AS id_res, civicrm_booking_resource.label AS nome_struttura, civicrm_booking_resource_config_option.label AS tipo_struttura, max_size  FROM civicrm_booking_resource JOIN civicrm_booking_resource_config_option ON civicrm_booking_resource.set_id = civicrm_booking_resource_config_option.set_id WHERE  civicrm_booking_resource.is_active='1' and  civicrm_booking_resource.is_deleted ='0'";

$result_get_resources = $mysqli->query($sql_get_resources);


while($row_res = $result_get_resources->fetch_array(MYSQLI_ASSOC)){
  $resource_data[] = $row_res;
}

//echo var_dump($resource_data);

$arr_length = count($resource_data); 
for($i=0;$i<$arr_length;$i++) 
{ 
 
    $sql_insert_resource = "INSERT INTO civicrm_booking_daily_stats (id,resource_name, resource_type, max_size,free) VALUES('".$resource_data[$i]['id_res']."','".$resource_data[$i]['nome_struttura']."','".$resource_data[$i]['tipo_struttura']."','".$resource_data[$i]['max_size']."','".$resource_data[$i]['max_size']."') ON DUPLICATE KEY UPDATE max_size = '".$resource_data[$i]['max_size']."', booked = '0',free = '".$resource_data[$i]['max_size']."'";

//echo $sql_insert_resource;
$mysqli->query($sql_insert_resource);
}

//query per esportare totale prenotazioni

$sql_booked = "SELECT SUM(quantity) as quantity, start, end, config_id FROM `civicrm_booking_slot` WHERE is_deleted = 0 AND is_cancelled = 0 AND start <= CURRENT_TIMESTAMP AND end >= CURRENT_TIMESTAMP group by config_id"; 
$result_get_booking = $mysqli->query($sql_booked);

while($row_res = $result_get_booking->fetch_array(MYSQLI_ASSOC)){
  $booking_data[] = $row_res;
}

$arr_length = count($booking_data);

//echo var_dump($booking_data);

for($i=0;$i<$arr_length;$i++){
	
	$sql_update_quantity = "UPDATE civicrm_booking_daily_stats SET booked = ".$booking_data[$i]['quantity'].", free = max_size-booked  WHERE id = '".$booking_data[$i]['config_id']."'" ;

//echo $sql_update_quantity;

	$mysqli->query($sql_update_quantity);


}

}

?>


