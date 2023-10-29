<?php /* Smarty version 2.6.31, created on 2023-09-26 14:41:16
         compiled from CRM/Case/Form/Selector.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Case/Form/Selector.tpl', 1, false),array('block', 'ts', 'CRM/Case/Form/Selector.tpl', 58, false),array('function', 'counter', 'CRM/Case/Form/Selector.tpl', 49, false),array('function', 'cycle', 'CRM/Case/Form/Selector.tpl', 52, false),array('function', 'crmURL', 'CRM/Case/Form/Selector.tpl', 58, false),array('function', 'crmScript', 'CRM/Case/Form/Selector.tpl', 88, false),array('modifier', 'crmDate', 'CRM/Case/Form/Selector.tpl', 71, false),array('modifier', 'replace', 'CRM/Case/Form/Selector.tpl', 74, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/pager.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php echo '<table class="caseSelector row-highlight"><tr class="columnheader">'; ?><?php if (! $this->_tpl_vars['single'] && $this->_tpl_vars['context'] == 'Search'): ?><?php echo '<th scope="col" title="Select Rows">'; ?><?php echo $this->_tpl_vars['form']['toggleSelect']['html']; ?><?php echo '</th>'; ?><?php endif; ?><?php echo '<th></th>'; ?><?php $_from = $this->_tpl_vars['columnHeaders']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['header']):
?><?php echo '<th scope="col">'; ?><?php if ($this->_tpl_vars['header']['sort']): ?><?php echo ''; ?><?php $this->assign('key', $this->_tpl_vars['header']['sort']); ?><?php echo ''; ?><?php echo $this->_tpl_vars['sort']->_response[$this->_tpl_vars['key']]['link']; ?><?php echo ''; ?><?php else: ?><?php echo ''; ?><?php echo $this->_tpl_vars['header']['name']; ?><?php echo ''; ?><?php endif; ?><?php echo '</th>'; ?><?php endforeach; endif; unset($_from); ?><?php echo '</tr>'; ?><?php echo smarty_function_counter(array('start' => 0,'skip' => 1,'print' => false), $this);?><?php echo ''; ?><?php $_from = $this->_tpl_vars['rows']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['row']):
?><?php echo '<tr id=\'rowid'; ?><?php echo $this->_tpl_vars['list']; ?><?php echo ''; ?><?php echo $this->_tpl_vars['row']['case_id']; ?><?php echo '\' class="'; ?><?php echo smarty_function_cycle(array('values' => "odd-row,even-row"), $this);?><?php echo ' crm-case crm-case-status_'; ?><?php echo $this->_tpl_vars['row']['case_status_id']; ?><?php echo ' crm-case-type_'; ?><?php echo $this->_tpl_vars['row']['case_type_id']; ?><?php echo '">'; ?><?php if ($this->_tpl_vars['context'] == 'Search' && ! $this->_tpl_vars['single']): ?><?php echo ''; ?><?php $this->assign('cbName', $this->_tpl_vars['row']['checkbox']); ?><?php echo '<td>'; ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['cbName']]['html']; ?><?php echo '</td>'; ?><?php endif; ?><?php echo '<td class="crm-case-id crm-case-id_'; ?><?php echo $this->_tpl_vars['row']['case_id']; ?><?php echo '"><a title="'; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'Activities'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '" class="crm-expand-row" href="'; ?><?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/case/details','q' => "caseId=".($this->_tpl_vars['row']['case_id'])."&cid=".($this->_tpl_vars['row']['contact_id'])), $this);?><?php echo '"></a></td>'; ?><?php if (! $this->_tpl_vars['single']): ?><?php echo '<td class="crm-case-id crm-case-id_'; ?><?php echo $this->_tpl_vars['row']['case_id']; ?><?php echo '"><a href="'; ?><?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view','q' => "reset=1&cid=".($this->_tpl_vars['row']['contact_id'])), $this);?><?php echo '" title="'; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'View Contact Details'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '">'; ?><?php echo $this->_tpl_vars['row']['sort_name']; ?><?php echo '</a>'; ?><?php if ($this->_tpl_vars['row']['phone']): ?><?php echo '<br /><span class="description">'; ?><?php echo $this->_tpl_vars['row']['phone']; ?><?php echo '</span>'; ?><?php endif; ?><?php echo '<br /><span class="description">'; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'Case ID'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo ': '; ?><?php echo $this->_tpl_vars['row']['case_id']; ?><?php echo '</span></td>'; ?><?php endif; ?><?php echo '<td class="crm-case-subject">'; ?><?php echo $this->_tpl_vars['row']['case_subject']; ?><?php echo '</td><td class="'; ?><?php echo $this->_tpl_vars['row']['class']; ?><?php echo ' crm-case-status_'; ?><?php echo $this->_tpl_vars['row']['case_status']; ?><?php echo '">'; ?><?php echo $this->_tpl_vars['row']['case_status']; ?><?php echo '</td><td class="crm-case-case_type">'; ?><?php echo $this->_tpl_vars['row']['case_type']; ?><?php echo '</td><td class="crm-case-case_role">'; ?><?php if ($this->_tpl_vars['row']['case_role']): ?><?php echo ''; ?><?php echo $this->_tpl_vars['row']['case_role']; ?><?php echo ''; ?><?php else: ?><?php echo '---'; ?><?php endif; ?><?php echo '</td><td class="crm-case-case_manager">'; ?><?php echo $this->_tpl_vars['row']['casemanager']; ?><?php echo '</td><td class="crm-case-case_recent_activity_type">'; ?><?php if ($this->_tpl_vars['row']['case_recent_activity_type']): ?><?php echo ''; ?><?php echo $this->_tpl_vars['row']['case_recent_activity_type']; ?><?php echo '<br />'; ?><?php echo ((is_array($_tmp=$this->_tpl_vars['row']['case_recent_activity_date'])) ? $this->_run_mod_handler('crmDate', true, $_tmp) : smarty_modifier_crmDate($_tmp)); ?><?php echo ''; ?><?php else: ?><?php echo '---'; ?><?php endif; ?><?php echo '</td><td class="crm-case-case_scheduled_activity_type">'; ?><?php if ($this->_tpl_vars['row']['case_scheduled_activity_type']): ?><?php echo ''; ?><?php echo $this->_tpl_vars['row']['case_scheduled_activity_type']; ?><?php echo '<br />'; ?><?php echo ((is_array($_tmp=$this->_tpl_vars['row']['case_scheduled_activity_date'])) ? $this->_run_mod_handler('crmDate', true, $_tmp) : smarty_modifier_crmDate($_tmp)); ?><?php echo ''; ?><?php else: ?><?php echo '---'; ?><?php endif; ?><?php echo '</td><td>'; ?><?php echo ((is_array($_tmp=$this->_tpl_vars['row']['action'])) ? $this->_run_mod_handler('replace', true, $_tmp, 'xx', $this->_tpl_vars['row']['case_id']) : smarty_modifier_replace($_tmp, 'xx', $this->_tpl_vars['row']['case_id'])); ?><?php echo ''; ?><?php echo ((is_array($_tmp=$this->_tpl_vars['row']['moreActions'])) ? $this->_run_mod_handler('replace', true, $_tmp, 'xx', $this->_tpl_vars['row']['case_id']) : smarty_modifier_replace($_tmp, 'xx', $this->_tpl_vars['row']['case_id'])); ?><?php echo '</td>'; ?><?php endforeach; endif; unset($_from); ?><?php echo ''; ?><?php echo ''; ?><?php if ($this->_tpl_vars['context'] == 'dashboard' && $this->_tpl_vars['limit'] && $this->_tpl_vars['pager']->_totalItems > $this->_tpl_vars['limit']): ?><?php echo '<tr class="even-row"><td colspan="10"><a href="'; ?><?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/case/search','q' => 'reset=1'), $this);?><?php echo '">&raquo; '; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'Find more cases'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '... </a></td></tr>'; ?><?php endif; ?><?php echo '</table>'; ?>


<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/pager.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php echo smarty_function_crmScript(array('file' => 'js/crm.expandRow.js'), $this);?>

<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>