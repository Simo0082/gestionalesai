<?php

//$conn = db_connection();
$contact_id = "12299";  #adulto test
#$contact_id = "12311";  #MSNA test



//$contact_type = detect_contact_type($conn, $contact_id);
//echo $contact_type;

#$compet_ling_value = calc_compet_ling($contact_id);
//echo "PUNTEGGIO COMPETENZE LINGUISTICHE: ".$compet_ling_value."\n";
//calc_sviluppo_formazione_professionale($contact_id);
//calc_benessere_psicofisico($contact_id);


//echo "PUNTEGGIO BENESSERE =".calc_benessere_psicofisico($contact_id);
//echo "PUNTEGGIO FORMAZIONE PROFESSIONALE =".calc_sviluppo_formazione_professionale($contact_id);

//echo "PUNTEGGIO ABITARE: ".calc_abitare($contact_id);
//echo "PUNTEGGIO INSERIMENTO LAVORATOVIO: ".calc_inserimento_lavorativo($contact_id);

function calc_inserimento_lavorativo($contact_id){

	$conn = db_connection();
	$contact_type = detect_contact_type($conn,$contact_id);

	switch ($contact_type) {

		case "Student":

		$query_cond_professionale_ingresso	= "SELECT condizione_professionale_all_ing_530 FROM civicrm_value_sviluppo_prof_64 WHERE entity_id =".$contact_id." LIMIT 1";
		$query_cond_professionale_attuale	= "SELECT condizione_professionale_attuale_531 FROM civicrm_value_sviluppo_prof_64 WHERE entity_id =".$contact_id." LIMIT 1";
		$query_atteggiamento_proattivo_lav	= "SELECT atteggiamento_proattivo_nella_ri_532 FROM civicrm_value_sviluppo_prof_64 WHERE entity_id =".$contact_id." LIMIT 1";
		$query_cond_professionale_dimissioni	= "SELECT condizione_professionale_alle_di_644 FROM civicrm_value_dimissioni_66 WHERE entity_id =".$contact_id." LIMIT 1";

		break;

		case "MSNA":


		$query_cond_professionale_ingresso      = "SELECT condizione_professionale_all_ing_520 FROM civicrm_value_sviluppo_prof_63 WHERE entity_id =".$contact_id." LIMIT 1";
                $query_cond_professionale_attuale       = "SELECT condizione_professionale_attuale_521 FROM civicrm_value_sviluppo_prof_63 WHERE entity_id =".$contact_id." LIMIT 1";
                $query_atteggiamento_proattivo_lav      = "SELECT atteggiamento_proattivo_nella_ri_522 FROM civicrm_value_sviluppo_prof_63 WHERE entity_id =".$contact_id." LIMIT 1";
                $query_cond_professionale_dimissioni    = "SELECT condizione_professionale_alle_di_644 FROM civicrm_value_dimissioni_66 WHERE entity_id =".$contact_id." LIMIT 1";

		break;

	}

		$var_cond_professionale_ingresso	= mysqli_query($conn, $query_cond_professionale_ingresso);
		$var_cond_professionale_attuale		= mysqli_query($conn, $query_cond_professionale_attuale);
		$var_atteggiamento_proattivo_lav	= mysqli_query($conn, $query_atteggiamento_proattivo_lav);
		$var_cond_professionale_dimissioni	= mysqli_query($conn, $query_cond_professionale_dimissioni);
	
		$param_cond_professionale_ingresso	= mysqli_fetch_row($var_cond_professionale_ingresso)[0];
		$param_cond_professionale_attuale	= mysqli_fetch_row($var_cond_professionale_attuale)[0];
		$param_atteggiamento_proattivo_lav	= mysqli_fetch_row($var_atteggiamento_proattivo_lav)[0];
		$param_cond_professionale_dimissioni	= mysqli_fetch_row($var_cond_professionale_dimissioni)[0];
		
	return kpi_inserimento_lavorativo($param_cond_professionale_ingresso,$param_cond_professionale_attuale,$param_atteggiamento_proattivo_lav,$param_cond_professionale_dimissioni);




}



function calc_abitare($contact_id){

	$conn = db_connection();
	
	$query_abitare				= "SELECT supporto_nella_ricerca_di_soluzi_536 FROM civicrm_value_ricerca_soluz_65 WHERE entity_id = ".$contact_id." LIMIT 1";

	$var_abitare				= mysqli_query($conn,$query_abitare);
	$param_abitare				= mysqli_fetch_row($var_abitare)[0];

	return kpi_abitare_calculator($param_abitare);
}



function calc_benessere_psicofisico($contact_id){
	
	$conn = db_connection();
	$contact_type = detect_contact_type($conn,$contact_id);

	switch ($contact_type) {

		case "Student":

		$query_attivita_ricreative_enti 	= "SELECT partecipazioni_a_laboratori_o_at_457 FROM civicrm_value_attivita_ricr_62 WHERE entity_id = ".$contact_id." LIMIT 1";
		$query_attivita_ricreative_altri 	= "SELECT partecipazioni_a_laboratori_o_at_458 FROM civicrm_value_attivita_ricr_62 WHERE entity_id = ".$contact_id." LIMIT 1";
		$query_iniziative_sportive		= "SELECT partecipazione_a_iniziative_spor_459 FROM civicrm_value_attivita_ricr_62 WHERE entity_id = ".$contact_id." LIMIT 1";
		$query_cura_gestione_igiene		= "SELECT cura_e_gestione_dell_igiene_pers_432 FROM civicrm_value_salute_e_cura_60 WHERE entity_id = ".$contact_id." LIMIT 1";
		$query_cura_gestione_salute		= "SELECT cura_e_gestione_di_eventuali_pro_433 FROM civicrm_value_salute_e_cura_60 WHERE entity_id = ".$contact_id." LIMIT 1";	
			
                break;

                case "MSNA":

                $query_attivita_ricreative_enti         = "SELECT partecipazioni_a_laboratori_o_at_462 FROM civicrm_value_attivita_ricr_61 WHERE entity_id = ".$contact_id." LIMIT 1";
                $query_attivita_ricreative_altri        = "SELECT partecipazioni_a_laboratori_o_at_463 FROM civicrm_value_attivita_ricr_62 WHERE entity_id = ".$contact_id." LIMIT 1";
                $query_iniziative_sportive              = "SELECT partecipazione_a_iniziative_spor_464 FROM civicrm_value_attivita_ricr_62 WHERE entity_id = ".$contact_id." LIMIT 1";
                $query_cura_gestione_igiene		= "SELECT cura_e_gestione_dell_igiene_pers_436 FROM civicrm_value_salute_e_cura_59 WHERE entity_id = ".$contact_id." LIMIT 1";
                $query_cura_gestione_salute		= "SELECT cura_e_gestione_di_eventuali_pro_437 FROM civicrm_value_salute_e_cura_59 WHERE entity_id = ".$contact_id." LIMIT 1";

                break;
        }


		$var_attivita_ricreative_enti	= mysqli_query($conn, $query_attivita_ricreative_enti);
		$var_attivita_ricreative_altri	= mysqli_query($conn, $query_attivita_ricreative_altri);
		$var_iniziative_sportive	= mysqli_query($conn, $query_iniziative_sportive);
		$var_cura_gestione_igiene	= mysqli_query($conn, $query_cura_gestione_igiene);		
		$var_cura_gestione_salute	= mysqli_query($conn, $query_cura_gestione_salute);

		$param_attivita_ricreative_enti	 = mysqli_fetch_row($var_attivita_ricreative_enti)[0];
		$param_attivita_ricreative_altri = mysqli_fetch_row($var_attivita_ricreative_altri)[0];
		$param_iniziative_sportive	 = mysqli_fetch_row($var_iniziative_sportive)[0];
		$param_cura_gestione_igiene	 = mysqli_fetch_row($var_cura_gestione_igiene)[0];
		$param_cura_gestione_salute	 = mysqli_fetch_row($var_cura_gestione_salute)[0];



return kpi_benessere_calculator($param_attivita_ricreative_enti,$param_attivita_ricreative_altri,$param_iniziative_sportive,$param_cura_gestione_igiene,$param_cura_gestione_salute);	

	
}


function calc_sviluppo_formazione_professionale($contact_id){
        //$contact_type = "Student";

        $conn = db_connection();

        $contact_type = detect_contact_type($conn,$contact_id);
        //echo "verifico contatto di tipo:    ".$contact_type;

        switch ($contact_type) {

                case "Student":
                        //echo "entro in adulto";
                        $query_obiettivo_formativo_pei = "SELECT obiettivo_formativo_alla_stesura_389 FROM civicrm_value_competenze_pr_58  WHERE entity_id = ".$contact_id." LIMIT 1";
			$query_corso_formazione_profes = "SELECT count(*) FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id where
                                civicrm_case.case_type_id = 11 AND civicrm_case_contact.contact_id = ".$contact_id." AND civicrm_case.is_deleted=0";
			$query_attestato_corso_formaz  = "SELECT civicrm_value_frequenza_cor_81.ha_conseguito_un_attestato_nei_c_608 FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id JOIN civicrm_value_frequenza_cor_81 ON civicrm_case.id = civicrm_value_frequenza_cor_81.entity_id where contact_id = ".$contact_id." and civicrm_case.is_deleted =0";

			
		break;

		case "MSNA":

			$query_obiettivo_formativo_pei = "SELECT obiettivo_formativo_alla_stesura_389 FROM civicrm_value_competenze_pr_58  WHERE entity_id = ".$contact_id." LIMIT 1";
                        $query_corso_formazione_profes = "SELECT count(*) FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id where civicrm_case.case_type_id = 11 AND civicrm_case_contact.contact_id = ".$contact_id." AND civicrm_case.is_deleted=0";
                        $query_attestato_corso_formaz  = "SELECT civicrm_value_frequenza_cor_81.ha_conseguito_un_attestato_nei_c_608 FROM `civicrm_case_contact` JOIN civicrm_case ON `civicrm_case_contact`.`case_id` = civicrm_case.id JOIN civicrm_value_frequenza_cor_81 ON civicrm_case.id = civicrm_value_frequenza_cor_81.entity_id where contact_id = ".$contact_id." and civicrm_case.is_deleted =0";


		break;
	}

        
                        $var_obiettivo_formativo_pei	= mysqli_query($conn, $query_obiettivo_formativo_pei);
			$var_corso_formazione_profes	= mysqli_query($conn, $query_corso_formazione_profes);
			$var_attestato_corso_formaz	= mysqli_query($conn, $query_attestato_corso_formaz);	
                 	
			//if(mysqli_num_rows($var_obiettivo_formativo_pei) == 0 || mysqli_num_rows($var_corso_formazione_profes) == 0 || mysqli_num_rows($var_attestato_corso_formaz) == 0){
       				
			//	return "ND";
	
                        //}

			$param_obiettivo_formativo_pei = mysqli_fetch_row($var_obiettivo_formativo_pei)[0];
			$param_corso_formazione_profes = mysqli_fetch_row($var_corso_formazione_profes)[0];
			$param_attestato_corso_formaz  = mysqli_fetch_row($var_attestato_corso_formaz)[0];
			
	
		        //echo $param_obiettivo_formativo_pei."\n";
			//echo "corsi formazione prof".$param_corso_formazione_profes."\n";
			//echo $param_attestato_corso_formaz."\n";
			
			return kpi_formaz_calculator($param_obiettivo_formativo_pei,$param_corso_formazione_profes,$param_attestato_corso_formaz);

}	



function detect_contact_type($conn, $contact_id){

	$query_get_contact_type = "SELECT contact_sub_type FROM civicrm_contact WHERE id = ".$contact_id." LIMIT 1";
	$var_contact_type   = mysqli_query($conn, $query_get_contact_type);
         if(mysqli_num_rows($var_contact_type) == 0){
                //echo "contatto non trovato";
                return "ND";
        }
        $c_type = mysqli_fetch_row($var_contact_type)[0];
	$c_type = substr($c_type, 1, -1);
	return $c_type;
	//return filter_var($c_type, FILTER_SANITIZE_STRING);

}

function calc_compet_ling($contact_id){
	//$contact_type = "Student";

	$conn = db_connection();
	
	$contact_type = detect_contact_type($conn,$contact_id);
	//echo "verifico contatto di tipo:    ".$contact_type;

        switch ($contact_type) {

		case "Student":
			//echo "entro in adulto";
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


function kpi_formaz_calculator($param_obiettivo_formativo_pei,$param_corso_formazione_profes,$param_attestato_corso_formaz){
		
	  $formaz_score = "ND";

	

        if($param_obiettivo_formativo_pei== 0 && $param_corso_formazione_profes == 0){

                $formaz_score= 1;
        }
        
        if($param_corso_formazione_profes == 0  && $param_attestato_corso_formaz <= 0 ){
		
		$formaz_score = 2;
	}

	if($param_corso_formazione_profes == 1  && $param_attestato_corso_formaz <= 0  ){

		$formaz_score = 3;

        }

	 if($param_corso_formazione_profes == 1  && $param_attestato_corso_formaz == 5  ){

		 $formaz_score = 4;

	 }

	 if($param_corso_formazione_profes == "1"  && $param_attestato_corso_formaz == "6"  ){

                 $formaz_score = 5;

         }

	return $formaz_score;

}




	
function kpi_compet_ling_calculator($param_test_ingresso, $param_freq_corsi_italiano, $param_freq_scolastica, $param_cert_italiano, $param_livello_pei){

	$compet_lang_score = "ND";
	//echo "TEST INGRESSO: ".$param_test_ingresso."\n";
        //echo "FREQ. CORSI ITALIANO: ".$param_freq_corsi_italiano."\n";
        //echo "FREQ. SCOLASTICA: ".$param_freq_scolastica."\n";
        //echo "CERT. ITALIANO: ".var_dump($param_cert_italiano)."\n";
        //echo "LIVELLO PEI: ".$param_livello_pei."\n";


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




function kpi_benessere_calculator($param_attivita_ricreative_enti,$param_attivita_ricreative_altri,$param_iniziative_sportive,$param_cura_gestione_igiene,$param_cura_gestione_salute){

	$benessere_score = "ND";


	if (($param_attivita_ricreative_enti < 2 && $param_attivita_ricreative_altri < 2) && ($param_cura_gestione_igiene <= 1 || $param_cura_gestione_salute <= 1) ){

		$benessere_score = 1;
	}

	else if(($param_attivita_ricreative_enti >= 2 || $param_attivita_ricreative_altri >= 2) && ($param_cura_gestione_igiene <= 1 || $param_cura_gestione_salute <= 1)){

                $benessere_score = 2;
        }

	else if(($param_attivita_ricreative_enti < 2 && $param_attivita_ricreative_altri < 2) && ($param_cura_gestione_igiene >= 2 && $param_cura_gestione_salute >= 2)){

		$benessere_score = 3;
	}

	else if(($param_attivita_ricreative_enti >= 2 || $param_attivita_ricreative_altri >= 2) && ($param_cura_gestione_igiene == 2 && $param_cura_gestione_salute == 2)){

		$benessere_score = 4;
        }

	else if(($param_attivita_ricreative_enti >= 2 || $param_attivita_ricreative_altri >= 2) && ($param_cura_gestione_igiene == 3 && $param_cura_gestione_salute == 3)){

		$benessere_score = 5;
        }

	
	return $benessere_score;	

}

function kpi_abitare_calculator($param_abitare){

	if($param_abitare < 1 )
		
		$abitare_score	= "ND";

	else 	$abitare_score = $param_abitare;
	return $abitare_score;

}




function kpi_inserimento_lavorativo($param_cond_professionale_ingresso,$param_cond_professionale_attuale,$param_atteggiamento_proattivo_lav,$param_cond_professionale_dimissioni){

	$cond_professionale_score = "ND";

	if(($param_cond_professionale_attuale == 0) || ($param_cond_professionale_attuale == 1 && $param_atteggiamento_proattivo_lav <= 2)){

		$cond_professionale_score = 1;
	}

	else if (($param_cond_professionale_attuale == 1 && $param_atteggiamento_proattivo_lav >= 3) || ($param_cond_professionale_attuale == 2 && $param_atteggiamento_proattivo_lav <= 2)){

		$cond_professionale_score = 2;
	}

	else if (($param_cond_professionale_attuale == 3 && $param_atteggiamento_proattivo_lav <= 2) || ($param_cond_professionale_attuale == 2 && $param_atteggiamento_proattivo_lav >= 3)){
	
		 $cond_professionale_score = 3;
        }
	
	
	else if ($param_cond_professionale_attuale == 3 && $param_atteggiamento_proattivo_lav >= 3){

		$cond_professionale_score = 4;
        }

	else if ($param_cond_professionale_attuale == 5){

		$cond_professionale_score = 5;
	}


	return $cond_professionale_score;
	
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
