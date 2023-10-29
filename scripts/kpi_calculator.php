<?php

$conn = db_connection();
//$contact_id = "12299";  #adulto test
$contact_id = "12311";  #MSNA test



$contact_type = detect_contact_type($conn, $contact_id);
//echo $contact_type;

$compet_ling_value = calc_compet_ling($conn, $contact_id, $contact_type);
echo "PUNTEGGIO COMPETENZE LINGUISTICHE: ".$compet_ling_value."\n";





function detect_contact_type($conn, $contact_id){

	$query_get_contact_type = "SELECT contact_sub_type FROM civicrm_contact WHERE id = ".$contact_id." LIMIT 1";
	$var_contact_type   = mysqli_query($conn, $query_get_contact_type);
         if(mysqli_num_rows($var_contact_type) == 0){
                echo "contatto non trovato";
                return "ND";
        }
        $c_type = mysqli_fetch_row($var_contact_type)[0];
	$c_type = substr($c_type, 1, -1);
	return $c_type;
	//return filter_var($c_type, FILTER_SANITIZE_STRING);

}

function calc_compet_ling($conn, $contact_id, $contact_type){
	//$contact_type = "Student";
	echo "verifico contatto di tipo:    ".$contact_type;

        switch ($contact_type) {

		case "Student":
			echo "entro in adulto";
			#Variabili: test ingresso italiano; corsi di italiano frequentati; frequenza corsi scolastici; livello certificazione conseguito; obiettivo 
			$query_test_ingresso = "SELECT test_di_ingresso_italiano_o_live_381 FROM civicrm_value_competenze_li_57 WHERE entity_id = ".$contact_id." LIMIT 1";
			$query_freq_corsi_ita = "SELECT count(*) FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id where 
				civicrm_case.case_type_id = 10 AND civicrm_case_contact.contact_id = ".$contact_id." AND civicrm_case.is_deleted=0";
			$query_freq_scolastica = "SELECT `frequenza_corsi_scolastici_311` FROM `civicrm_value_istruzione_ad_51` WHERE entity_id = ".$contact_id." LIMIT 1";
			$query_certificato_ita  = "SELECT civicrm_value_frequenza_cor_80.ha_ottenuto_una_certificazione_p_602  FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id JOIN civicrm_value_frequenza_cor_80 ON civicrm_case.id = civicrm_value_frequenza_cor_80.entity_id where contact_id = ".$contact_id;
			$query_livello_pei	= "SELECT obiettivo_italiano_fissato_alla__382 FROM civicrm_value_competenze_li_57 WHERE entity_id = ".$contact_id." LIMIT 1";
	


                break;

                case "MSNA":

			 $query_test_ingresso = "SELECT test_di_ingresso_italiano_o_live_381 FROM civicrm_value_competenze_li_57 WHERE entity_id = ".$contact_id." LIMIT 1";
                        $query_freq_corsi_ita = "SELECT count(*) FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id where
                                civicrm_case.case_type_id = 10 AND civicrm_case_contact.contact_id = ".$contact_id." AND civicrm_case.is_deleted=0";
                        $query_freq_scolastica = "SELECT `frequenza_corsi_scolastici_650` FROM `civicrm_value_istruzione_ms_52` WHERE entity_id = ".$contact_id." LIMIT 1";
                        $query_certificato_ita  = "SELECT civicrm_value_frequenza_cor_80.ha_ottenuto_una_certificazione_p_602  FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id JOIN civicrm_value_frequenza_cor_80 ON civicrm_case.id = civicrm_value_frequenza_cor_80.entity_id where contact_id = ".$contact_id;
                        $query_livello_pei      = "SELECT obiettivo_italiano_fissato_alla__382 FROM civicrm_value_competenze_li_57 WHERE entity_id = ".$contact_id." LIMIT 1";


                //        return "ND";
                break;


                default:

                        return "ND";
                break;



	}

			$var_test_ingresso   = mysqli_query($conn, $query_test_ingresso);
			$var_freq_corsi_ita  = mysqli_query($conn, $query_freq_corsi_ita);
			$var_freq_scolastica = mysqli_query($conn, $query_freq_scolastica);
			$var_cert_italiano   = mysqli_query($conn, $query_certificato_ita);
			$var_livello_pei     = mysqli_query($conn, $query_livello_pei);

			if(mysqli_num_rows($var_test_ingresso) == 0 || mysqli_num_rows($var_freq_corsi_ita) == 0 || mysqli_num_rows($var_freq_scolastica) == 0 || mysqli_num_rows($var_cert_italiano) == 0 || mysqli_num_rows($var_livello_pei) == 0){

				$param_test_ingresso 		= "ND";
				$param_freq_corsi_italiano	= "ND";
				$param_freq_scolastica		= "ND";
				$param_cert_italiano		= "ND";
				$param_livello_pei		= "ND";
			}	
                             
                                $param_test_ingresso 		= mysqli_fetch_row($var_test_ingresso)[0];
				$param_freq_corsi_italiano 	= mysqli_fetch_row($var_freq_corsi_ita)[0];
				$param_freq_scolastica		= mysqli_fetch_row($var_freq_scolastica)[0];
				for($i = 0; $param_cert_italiano[$i] = mysqli_fetch_row($var_cert_italiano); $i++) ;    #recupero intero array di valori	
				$param_livello_pei		= mysqli_fetch_row($var_livello_pei)[0];
		
				return kpi_compet_ling_calculator($param_test_ingresso, $param_freq_corsi_italiano, $param_freq_scolastica, $param_cert_italiano, $param_livello_pei);




		

}

	
function kpi_compet_ling_calculator($param_test_ingresso, $param_freq_corsi_italiano, $param_freq_scolastica, $param_cert_italiano, $param_livello_pei){

	$compet_lang_score = "ND";
	echo "TEST INGRESSO: ".$param_test_ingresso."\n";
        echo "FREQ. CORSI ITALIANO: ".$param_freq_corsi_italiano."\n";
        echo "FREQ. SCOLASTICA: ".$param_freq_scolastica."\n";
        echo "CERT. ITALIANO: ".var_dump($param_cert_italiano)."\n";
        echo "LIVELLO PEI: ".$param_livello_pei."\n";


	if(($param_test_ingresso == "PRE-A1" || $param_test_ingresso == "A1") && $param_freq_corsi_italiano == "0"){

		$compet_lang_score = 1;
	}
	
	else if($param_test_ingresso == "A2/B1"  && $param_freq_corsi_italiano == "0"){

                $compet_lang_score = 2;
	}

	 else if(($param_test_ingresso == "PRE-A1" || $param_test_ingresso == "A1") && $param_freq_corsi_italiano > 0){

                $compet_lang_score = 3;
        }
	 
	 else if(($param_test_ingresso == "A2/B1" && $param_freq_corsi_italiano > 0) || ($param_test_ingresso == "B1/B2" )){

                $compet_lang_score = 4;
	 }
         
	 else if(($param_test_ingresso == "C1" || $param_test_ingresso == "C2" || $param_livello_pei == "C1/C2")){

                $compet_lang_score = 5;
         }

	 
	return $compet_lang_score;

}











function db_connection(){
	$servername = "localhost";
	$username = "sammartini";
	$password = "bB37#2rr#S0t";
	$database = "sammartini_db";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $database);


	return $conn;



}







?>
