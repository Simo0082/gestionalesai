<?php /* Smarty version 2.6.31, created on 2023-07-22 22:23:15
         compiled from CRM/Custom/Form/Preview.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Custom/Form/Preview.tpl', 1, false),array('block', 'ts', 'CRM/Custom/Form/Preview.tpl', 26, false),array('function', 'help', 'CRM/Custom/Form/Preview.tpl', 56, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php ob_start(); ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Preview Mode<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('infoTitle', ob_get_contents());ob_end_clean(); ?>
<?php $this->assign('infoType', 'info'); ?>
<?php if ($this->_tpl_vars['preview_type'] == 'group'): ?>
    <?php ob_start(); ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Showing the custom data group (fieldset) as it will be displayed within an edit form.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('infoMessage', ob_get_contents());ob_end_clean(); ?>
    <?php ob_start(); ?>
        <?php $_from = $this->_tpl_vars['groupTree']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['fieldName']):
?>
          <?php echo $this->_tpl_vars['fieldName']['title']; ?>

        <?php endforeach; endif; unset($_from); ?>
    <?php $this->_smarty_vars['capture']['legend'] = ob_get_contents(); ob_end_clean(); ?>
<?php else: ?>
    <?php ob_start(); ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Showing this field as it will be displayed in an edit form.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('infoMessage', ob_get_contents());ob_end_clean(); ?>
<?php endif; ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/info.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<div class="crm-block crm-form-block crm-custom-preview-form-block">
<?php echo ''; ?><?php $_from = $this->_tpl_vars['groupTree']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['group_id'] => $this->_tpl_vars['cd_edit']):
?><?php echo '<p></p><fieldset>'; ?><?php if ($this->_tpl_vars['preview_type'] == 'group'): ?><?php echo '<legend>'; ?><?php echo $this->_smarty_vars['capture']['legend']; ?><?php echo '</legend>'; ?><?php endif; ?><?php echo ''; ?><?php if ($this->_tpl_vars['cd_edit']['help_pre']): ?><?php echo '<div class="messages help">'; ?><?php echo $this->_tpl_vars['cd_edit']['help_pre']; ?><?php echo '</div><br />'; ?><?php endif; ?><?php echo '<table class="form-layout-compressed">'; ?><?php $_from = $this->_tpl_vars['cd_edit']['fields']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['field_id'] => $this->_tpl_vars['element']):
?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['is_view'] == 0): ?><?php echo ''; ?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['help_pre']): ?><?php echo '<tr><td class="label"></td><td class="description">'; ?><?php echo $this->_tpl_vars['element']['help_pre']; ?><?php echo '</td></tr>'; ?><?php endif; ?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['options_per_line']): ?><?php echo ''; ?><?php echo ''; ?><?php $this->assign('element_name', $this->_tpl_vars['element']['element_name']); ?><?php echo '<tr><td class="label">'; ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['label']; ?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['help_post']): ?><?php echo ''; ?><?php echo smarty_function_help(array('id' => $this->_tpl_vars['element']['id'],'file' => "CRM/Custom/Form/CustomField.hlp",'title' => $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['label']), $this);?><?php echo ''; ?><?php endif; ?><?php echo '</td><td>'; ?><?php $this->assign('count', '1'); ?><?php echo '<table class="form-layout-compressed"><tr>'; ?><?php echo ''; ?><?php $this->assign('index', '1'); ?><?php echo ''; ?><?php $_from = $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['outer'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['outer']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['item']):
        $this->_foreach['outer']['iteration']++;
?><?php echo ''; ?><?php if ($this->_tpl_vars['index'] < 10): ?><?php echo ''; ?><?php $this->assign('index', ($this->_tpl_vars['index']+1)); ?><?php echo ''; ?><?php else: ?><?php echo '<td class="labels font-light">'; ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']][$this->_tpl_vars['key']]['html']; ?><?php echo '</td>'; ?><?php if ($this->_tpl_vars['count'] == $this->_tpl_vars['element']['options_per_line']): ?><?php echo ''; ?><?php $this->assign('count', '1'); ?><?php echo '</tr>'; ?><?php else: ?><?php echo ''; ?><?php $this->assign('count', ($this->_tpl_vars['count']+1)); ?><?php echo ''; ?><?php endif; ?><?php echo ''; ?><?php endif; ?><?php echo ''; ?><?php endforeach; endif; unset($_from); ?><?php echo '</tr></table></td></tr>'; ?><?php else: ?><?php echo ''; ?><?php $this->assign('name', ($this->_tpl_vars['element']['name'])); ?><?php echo ''; ?><?php echo ''; ?><?php $this->assign('element_name', $this->_tpl_vars['element']['element_name']); ?><?php echo '<tr><td class="label">'; ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['label']; ?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['help_post']): ?><?php echo ''; ?><?php echo smarty_function_help(array('id' => $this->_tpl_vars['element']['id'],'file' => "CRM/Custom/Form/CustomField.hlp",'title' => $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['label']), $this);?><?php echo ''; ?><?php endif; ?><?php echo '</td><td>'; ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['html']; ?><?php echo '&nbsp;'; ?><?php if ($this->_tpl_vars['element']['html_type'] == 'Autocomplete-Select'): ?><?php echo ''; ?><?php if ($this->_tpl_vars['element']['data_type'] == 'ContactReference'): ?><?php echo ''; ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Custom/Form/ContactReference.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php echo ''; ?><?php endif; ?><?php echo ''; ?><?php endif; ?><?php echo '</td>'; ?><?php endif; ?><?php echo ''; ?><?php endif; ?><?php echo ''; ?><?php endforeach; endif; unset($_from); ?><?php echo '</table>'; ?><?php if ($this->_tpl_vars['cd_edit']['help_post']): ?><?php echo '<br /><div class="messages help">'; ?><?php echo $this->_tpl_vars['cd_edit']['help_post']; ?><?php echo '</div>'; ?><?php endif; ?><?php echo '</fieldset>'; ?><?php endforeach; endif; unset($_from); ?><?php echo ''; ?>

<div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
</div>

<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>