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
{ts 1=$totalSelectedContacts}Numero di contatti che saranno rimossi: %1{/ts}

{if $searchtype eq 'ts_sel'}
<div id="popupContainer">
  <div class="crm-block crm-form-block crm-search-form-block">
    <table id="selectedRecords-{$group.id}" class="display crm-copy-fields crm-sortable">
      <thead>
      <tr class="columnheader">
        <th class="contact_details">{ts}Name{/ts}</th>
      </tr>
      </thead>

      <tbody>
        {foreach from=$value item='row'}
        <tr class="{cycle values="odd-row,even-row"}">
          <td class="name">{$row}</td>
        </tr>
        {/foreach}
      </tbody>
    </table>
  </div>
</div><br />
<a href="#" id="popup-button" title="{ts}View Selected Contacts{/ts}">{ts}View Selected Contacts{/ts}</a>
{/if}

{if $searchtype eq 'ts_sel'}
{literal}
<script type="text/javascript">
  CRM.$(function($) {
    $("#popupContainer").css({
      "background-color":"#E0E0E0",
      'display':'none'
    });

    $("#popup-button").click(function() {
      $("#popupContainer").dialog({
        title: {/literal}"{ts escape='js'}Selected Contacts{/ts}"{literal},
        width:700,
        height:500,
        modal: true,
        overlay: {
          opacity: 0.5,
          background: "black"
        }
      });
      return false;
    });

    var count = 0; var columns = ''; var sortColumn = '';
    $('#selectedRecords-{/literal}{$group.id}{literal} th').each(function() {
      if ($(this).attr('class') == 'contact_details') {
        sortColumn += '[' + count + ', "asc" ],';
        columns += '{"sClass": "contact_details"},';
      }
      else {
        columns += '{ "bSortable": false },';
      }
      count++;
    });

  });

</script>
{/literal}
{/if}

{if $rows}
<div class="form-item">
  <table width="30%">
    <tr class="columnheader">
      <th>{ts}Name{/ts}</th>
    </tr>
    {foreach from=$rows item=row}
      <tr class="{cycle values="odd-row,even-row"}">
        <td>{$row.displayName}</td>
      </tr>
    {/foreach}
  </table>
</div>
{/if}
