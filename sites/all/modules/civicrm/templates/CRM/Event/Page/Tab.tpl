{*
 +--------------------------------------------------------------------+
 | CiviCRM version 5                                                  |
 +--------------------------------------------------------------------+
 | Copyright CiviCRM LLC (c) 2004-2019                                |
 +--------------------------------------------------------------------+
 | This file is a part of CiviCRM.                                    |
 |                                                                    |
 | CiviCRM is free software; you can copy, modify, and distribute it  |
 | under the terms of the GNU Affero General Public License           |
 | Version 3, 19 November 2007 and the CiviCRM Licensing Exception.   |
 |                                                                    |
 | CiviCRM is distributed in the hope that it will be useful, but     |
 | WITHOUT ANY WARRANTY; without even the implied warranty of         |
 | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.               |
 | See the GNU Affero General Public License for more details.        |
 |                                                                    |
 | You should have received a copy of the GNU Affero General Public   |
 | License and the CiviCRM Licensing Exception along                  |
 | with this program; if not, contact CiviCRM LLC                     |
 | at info[AT]civicrm[DOT]org. If you have questions about the        |
 | GNU Affero General Public License or the licensing of CiviCRM,     |
 | see the CiviCRM license FAQ at http://civicrm.org/licensing        |
 +--------------------------------------------------------------------+
*}

{php}

include 'scripts/kpi_calculator.php';

$contact_Id= $this->get_template_vars('contactId');

$compet_ling_score = calc_compet_ling($contact_Id); 
$compet_form_score = calc_sviluppo_formazione_professionale($contact_Id);
$benessere_score   = calc_benessere_psicofisico($contact_Id);
$abitare_score	   = calc_abitare($contact_id);
{/php}

PAGINA DEGLI INDICATORI ( CONTATTO {$contactId} )

<br><br>
<br>

<style="bold">COMPETENZE LINGUISTICHE:</style> {php}echo $compet_ling_score{/php}
<br>
<br>
<style="bold">SVILUPPO FORMAZIONE PROFESSIONALE:</style> {php}echo $compet_form_score{/php}
<br>
<br>
<style="bold">BENESSERE PSICOFISICO:</style> {php}echo $benessere_score{/php}
<br>
<br>
<style="bold">ABITARE:</style> {php}echo $abitare_score{/php}

<br>
