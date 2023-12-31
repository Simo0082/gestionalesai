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
{* data-edit-params to reload this info whenever relationship gets updated *}
<div id="crm-contactinfo-content" {if $permission EQ 'edit'} class="crm-inline-edit" {/if} data-edit-params='{ldelim}"cid": "{$contactId}", "class_name": "CRM_Contact_Form_Inline_ContactInfo"{rdelim}'>
  <div class="crm-clear crm-inline-block-content" {if $permission EQ 'edit'}title="{ts}Edit info{/ts}"{/if}>
    {if $permission EQ 'edit'}
    <div class="crm-edit-help">
      <span class="crm-i fa-pencil"></span> {ts}Edit info{/ts}
    </div>
    {/if}


      {if $contact_type eq 'Organization'}
      <div class="crm-summary-row">
        <div class="crm-label">{ts}Legal Name{/ts}</div>
        <div class="crm-content crm-contact-legal_name">{$legal_name}</div>
      </div>
      <div class="crm-summary-row">
        <div class="crm-label">{ts}SIC Code{/ts}</div>
        <div class="crm-content crm-contact-sic_code">{$sic_code}</div>
      </div>
      {/if}

    </div>
</div>
