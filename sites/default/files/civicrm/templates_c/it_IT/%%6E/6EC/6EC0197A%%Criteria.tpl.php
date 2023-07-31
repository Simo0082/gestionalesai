<?php /* Smarty version 2.6.31, created on 2023-07-22 23:01:19
         compiled from CRM/Booking/Form/Search/Criteria.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Booking/Form/Search/Criteria.tpl', 1, false),array('block', 'ts', 'CRM/Booking/Form/Search/Criteria.tpl', 43, false),array('function', 'cycle', 'CRM/Booking/Form/Search/Criteria.tpl', 86, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "uk.co.compucorp.civicrm.booking")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?> 

<table class="form-layout">

<tr>
  <td>
    <label><?php echo $this->_tpl_vars['form']['booking_id']['label']; ?>
</label> <br />
    <?php echo $this->_tpl_vars['form']['booking_id']['html']; ?>

  </td>
  <td>
    <?php echo $this->_tpl_vars['form']['booking_title']['label']; ?>
<br />
    <?php echo $this->_tpl_vars['form']['booking_title']['html']; ?>

   </td>
</tr>

<tr>
  <td>
  <label><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Date Booking Made<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></label> <br/>
  </td>
</tr>
<tr>
  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Core/DateRange.tpl", 'smarty_include_vars' => array('fieldName' => 'booking_event_date','from' => '_low','to' => '_high')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</tr>
<tr>
  <td>
  <label><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Start Dates<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></label> <br/>
  </td>
</tr>
<tr>
  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Core/DateRange.tpl", 'smarty_include_vars' => array('fieldName' => 'booking_start_date','from' => '_low','to' => '_high')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</tr>
<tr>
  <td>
  <label><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>End Dates<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></label> <br/>
  </td>
</tr>
<tr>
  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Core/DateRange.tpl", 'smarty_include_vars' => array('fieldName' => 'booking_end_date','from' => '_low','to' => '_high')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
</tr>

<tr>
  <td>
    <?php echo $this->_tpl_vars['form']['booking_po_no']['label']; ?>
<br />
    <?php echo $this->_tpl_vars['form']['booking_po_no']['html']; ?>

   </td>
  <td>
  </td>
</tr>

<tr>
  <td class="crm-booking-form-block-booking_status_id"><label><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Status<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></label>
    <br />
    <div class="listing-box" style="width: auto; height: 120px">
    <?php $_from = $this->_tpl_vars['form']['booking_status_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['booking_status_id_val']):
?>
      <div class="<?php echo smarty_function_cycle(array('values' => "odd-row,even-row"), $this);?>
">
        <?php echo $this->_tpl_vars['booking_status_id_val']['html']; ?>

      </div>
    <?php endforeach; endif; unset($_from); ?>
    </div>
  </td>
  
  </tr>
</table>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>