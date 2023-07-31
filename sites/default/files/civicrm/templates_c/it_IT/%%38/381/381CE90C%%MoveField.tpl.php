<?php /* Smarty version 2.6.31, created on 2023-07-26 16:11:57
         compiled from CRM/Custom/Form/MoveField.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Custom/Form/MoveField.tpl', 1, false),array('block', 'ts', 'CRM/Custom/Form/MoveField.tpl', 31, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>
<div class="crm-block crm-form-block crm-move-field-block">
    <table class="form-layout-compressed">
        <tr><td class="label"><?php echo $this->_tpl_vars['form']['dst_group_id']['label']; ?>
</td>
            <td><?php echo $this->_tpl_vars['form']['dst_group_id']['html']; ?>
<br />
                <span class="description"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Select a different Custom Data Set for this field.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
            </td>
        </tr>
        <tr><td class="label"><?php echo $this->_tpl_vars['form']['is_copy']['label']; ?>
</td><td><?php echo $this->_tpl_vars['form']['is_copy']['html']; ?>
</td></tr>
    </table>
    <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
</div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>