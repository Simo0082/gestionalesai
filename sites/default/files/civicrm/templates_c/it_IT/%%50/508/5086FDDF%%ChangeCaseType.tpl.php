<?php /* Smarty version 2.6.31, created on 2023-09-29 11:52:49
         compiled from CRM/Case/Form/Activity/ChangeCaseType.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Case/Form/Activity/ChangeCaseType.tpl', 1, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>   <div class="crm-block crm-form-block crm-case-changecasetype-form-block">
    <tr class="crm-case-changecasetype-form-block-case_type_id">
      <td class="label"><?php echo $this->_tpl_vars['form']['case_type_id']['label']; ?>
</td>
  <td><?php echo $this->_tpl_vars['form']['case_type_id']['html']; ?>
</td>
    </tr>
    <tr class="crm-case-changecasetype-form-block-is_reset_timeline">
  <td class="label"><?php echo $this->_tpl_vars['form']['is_reset_timeline']['label']; ?>
</td>
  <td><?php echo $this->_tpl_vars['form']['is_reset_timeline']['html']; ?>
</td>
    </tr>
    <tr class="crm-case-changecasetype-form-block-reset_date_time" id="resetTimeline">
        <td class="label"><?php echo $this->_tpl_vars['form']['reset_date_time']['label']; ?>
</td>
        <td><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/jcalendar.tpl", 'smarty_include_vars' => array('elementName' => 'reset_date_time')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></td>
    </tr>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/showHideByFieldValue.tpl", 'smarty_include_vars' => array('trigger_field_id' => 'is_reset_timeline','trigger_value' => true,'target_element_id' => 'resetTimeline','target_element_type' => "table-row",'field_type' => 'radio','invert' => 0)));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
  </div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>