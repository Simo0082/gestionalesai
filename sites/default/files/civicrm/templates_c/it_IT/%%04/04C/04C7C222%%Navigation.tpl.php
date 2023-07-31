<?php /* Smarty version 2.6.31, created on 2023-07-16 18:23:33
         compiled from CRM/Admin/Form/Navigation.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Admin/Form/Navigation.tpl', 1, false),array('function', 'help', 'CRM/Admin/Form/Navigation.tpl', 34, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><div class="crm-block crm-form-block crm-navigation-form-block">
  <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
  <table class="form-layout-compressed">
    <tr class="crm-navigation-form-block-label">
      <td class="label"><?php echo $this->_tpl_vars['form']['label']['label']; ?>
</td><td><?php echo $this->_tpl_vars['form']['label']['html']; ?>
</td>
    </tr>
    <tr class="crm-navigation-form-block-url">
      <td class="label"><?php echo $this->_tpl_vars['form']['url']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-menu_url",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['url']['html']; ?>
 </td>
    </tr>
    <tr class="crm-navigation-form-block-icon">
      <td class="label"><?php echo $this->_tpl_vars['form']['icon']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-menu_icon",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['icon']['html']; ?>
 </td>
    </tr>
    <?php if ($this->_tpl_vars['form']['parent_id']['html']): ?>
      <tr class="crm-navigation-form-block-parent_id">
        <td class="label"><?php echo $this->_tpl_vars['form']['parent_id']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-parent",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</td>
        <td><?php echo $this->_tpl_vars['form']['parent_id']['html']; ?>
</td>
      </tr>
    <?php endif; ?>
    <tr class="crm-navigation-form-block-has_separator">
      <td class="label"><?php echo $this->_tpl_vars['form']['has_separator']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-has_separator",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['has_separator']['html']; ?>
 </td>
    </tr>
    <tr class="crm-navigation-form-block-permission">
      <td class="label"><?php echo $this->_tpl_vars['form']['permission']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-menu_permission",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['permission']['html']; ?>
 <span class="permission_operator_wrapper"><?php echo $this->_tpl_vars['form']['permission_operator']['html']; ?>
  <?php echo smarty_function_help(array('id' => "id-permission_operator",'file' => "CRM/Admin/Form/Navigation.hlp"), $this);?>
</span></td>
    </tr>
    <tr class="crm-navigation-form-block-is_active">
      <td class="label"><?php echo $this->_tpl_vars['form']['is_active']['label']; ?>
</td><td><?php echo $this->_tpl_vars['form']['is_active']['html']; ?>
</td>
    </tr>
  </table>
  <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
</div>
<?php echo '
<script type="text/javascript">
  CRM.$(function($) {
    var $form = $(\'form.'; ?>
<?php echo $this->_tpl_vars['form']['formClass']; ?>
<?php echo '\');
    $(\'input[name=permission]\', $form)
      .on(\'change\', function() {
        $(\'span.permission_operator_wrapper\').toggle(CRM._.includes($(this).val(), \',\'));
      })
      .change()
      .crmSelect2({
        formatResult: CRM.utils.formatSelect2Result,
        formatSelection: function(row) {return row.label},
        multiple: true
      });
  });
</script>
'; ?>

<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>