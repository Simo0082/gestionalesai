{crmScope extensionKey=uk.co.compucorp.civicrm.booking} 
<script id="resource-table-template" type="text/template">
    <div id="resources-container">
      <table id="" class="display">
        <thead>
          <tr>
            <th class="" rowspan="1" colspan="1">{ts}Struttura{/ts}</th>
            <th class="" rowspan="1" colspan="1">{ts}From{/ts}</th>
            <th class="" rowspan="1" colspan="1">{ts}To{/ts}</th>
            <th class="" rowspan="1" colspan="1">{ts}Prezzo{/ts}</th>
            <th class="" rowspan="1" colspan="1">{ts}Prezzo totale{/ts}</th>
            <th class="" rowspan="1" colspan="1"></th>
          </tr>
        </thead>
        <tbody >
          {foreach from=$resources key=key item=resource}
          <tr id="crm-booking-resource-row-{$key}" class="">
            <td class="">
              <a class="collapsed" href="#" data-ref="{$key}"></a>&nbsp;<strong>{$resource.label}</strong><br>
            </td>
            <td class="crm-booking-resource-to ">{$resource.start_date|crmDate}</td>
            <td class="crm-booking-resource-from ">{$resource.end_date|crmDate}</td>
            <td class="crm-booking-resource-price ">{$currencySymbols}<span data-ref="{$key}" id="resource-price-{$key}">{$resource.price}</span></td>
            <td class="crm-booking-resource-total-price ">{$currencySymbols}<span data-ref="{$key}" data-price="{$resource.price}" id="resource-total-price-{$key}">{$resource.price}<span></td>
          <tr class="hiddenElement" id="crm-booking-sub-resource-row-{$key}">
            <td ></td>
            <td colspan=2 >
            </td>
          </tr>
        {/foreach}
         <tr>
            <td class="text-right" colspan="4"><span>{ts}Subtotale{/ts}: </span></td>
            <td>{$currencySymbols}<span id="sub-total-summary">{$subTotal}</span></td>
            <td></td>
          </tr>
          <tr>
            <td class="text-right" colspan="4"><span>{ts}Prezzo totale{/ts}:</span></td>
            <td>{$currencySymbols}<span id="total-price-summary">{$totalPrice} </span></td>
          <td></td>
      </tbody>
      </table>
  </div>
</script>


<script id="sub-resource-row-template" type="text/template">
  <tr id="crm-booking-sub-resource-individual-row-<%= ref_id %>">
    <td><%= resource.label %></td>
    <td><%= configuration.label %></td>
    <td><%= quantity %></td>
    <td><%= moment(time_required,"YYYY-M-D HH:mm").strftime(crmDateFormat) %></td>
    <td>{$currencySymbols}<%= price_estimate %></td>
    <td>
        <span><a href="#" data-ref="<%=ref_id %>" data-parent-ref="<%= parent_ref_id %>" data-time-required="<%= time_required %>"  class="edit-sub-resource action-item action-item-first" >{ts}Edit{/ts}</a></span>
        <span><a href="#" data-ref="<%=ref_id %>" data-parent-ref="<%= parent_ref_id %>" data-price="<%= price_estimate %>"  class="remove-sub-resource action-item action-item-first" >{ts}Remove{/ts}</a></span>
    </td>
  </tr>
</script>
 {literal}
 <script type="text/javascript">
var timeConfig = "{/literal}{$timeconfig}{literal}";
</script>
 {/literal}
{/crmScope}
