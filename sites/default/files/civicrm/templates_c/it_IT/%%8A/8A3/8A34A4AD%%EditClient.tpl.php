<?php /* Smarty version 2.6.31, created on 2023-09-28 10:39:34
         compiled from CRM/Case/Form/EditClient.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Case/Form/EditClient.tpl', 1, false),array('block', 'ts', 'CRM/Case/Form/EditClient.tpl', 29, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><div class="crm-block crm-form-block crm-case-editclient-form-block">
  <div class="messages status no-popup">
    <div class="icon inform-icon"></div> <?php $this->_tag_stack[] = array('ts', array('1' => $this->_tpl_vars['currentClientName'])); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>This is case is currently assigned to %1.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
  </div>
  <div class="crm-form-block">
    <table class="form-layout-compressed">
      <tr class="crm-case-editclient-form-block-change_client_id">
        <td class="label">
          <?php echo $this->_tpl_vars['form']['reassign_contact_id']['label']; ?>

        </td>
        <td>
          <?php echo $this->_tpl_vars['form']['reassign_contact_id']['html']; ?>

        </td>
    </table>
    <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
  </div>
</div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>