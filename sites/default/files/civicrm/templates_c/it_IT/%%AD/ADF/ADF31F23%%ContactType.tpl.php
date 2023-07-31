<?php /* Smarty version 2.6.31, created on 2023-07-16 18:22:46
         compiled from CRM/Admin/Form/ContactType.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Admin/Form/ContactType.tpl', 1, false),array('block', 'ts', 'CRM/Admin/Form/ContactType.tpl', 32, false),array('function', 'help', 'CRM/Admin/Form/ContactType.tpl', 55, false),array('modifier', 'crmAddClass', 'CRM/Admin/Form/ContactType.tpl', 56, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>
<div class="crm-block crm-form-block crm-contact-type-form-block">
<?php if ($this->_tpl_vars['action'] == 8): ?>
  <div class="messages status no-popup">
    <div class="icon inform-icon"></div>
        <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>WARNING: <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>This action cannot be undone.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Do you want to continue?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
    </div>
<?php else: ?>
 <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
 <table class="form-layout-compressed">
   <tr class="crm-contact-type-form-block-label">
      <td class="label"><?php echo $this->_tpl_vars['form']['label']['label']; ?>

      <?php if ($this->_tpl_vars['action'] == 2): ?>
        <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_contact_type','field' => 'label','id' => $this->_tpl_vars['cid'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
      <?php endif; ?>
      </td>

      <td><?php echo $this->_tpl_vars['form']['label']['html']; ?>
</td>
   </tr>
   <tr class="crm-contact-type-form-block-parent_id">
      <td class="label"><?php echo $this->_tpl_vars['form']['parent_id']['label']; ?>
</td>
           <?php if ($this->_tpl_vars['is_parent'] || $this->_tpl_vars['action'] == 1): ?>
             <td><?php echo $this->_tpl_vars['form']['parent_id']['html']; ?>
</td>
           <?php else: ?>
             <td><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo $this->_tpl_vars['contactTypeName']; ?>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>(built-in)<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></td>
           <?php endif; ?>
   </tr>
   <tr class="crm-contact-type-form-block-image_URL">
      <td class="label"><?php echo $this->_tpl_vars['form']['image_URL']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-image_URL"), $this);?>
</td>
      <td><?php echo ((is_array($_tmp=$this->_tpl_vars['form']['image_URL']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'huge40') : smarty_modifier_crmAddClass($_tmp, 'huge40')); ?>
</td>
   </tr>
   <tr class="crm-contact-type-form-block-description">
     <td class="label"><?php echo $this->_tpl_vars['form']['description']['label']; ?>

     <?php if ($this->_tpl_vars['action'] == 2): ?>
       <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_contact_type','field' => 'description','id' => $this->_tpl_vars['cid'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
     <?php endif; ?>
     </td>

     <td><?php echo $this->_tpl_vars['form']['description']['html']; ?>
</td>
   </tr>
   <tr class="crm-contact-type-form-block-is_active">
     <td class="label"><?php echo $this->_tpl_vars['form']['is_active']['label']; ?>
</td><td><?php echo $this->_tpl_vars['form']['is_active']['html']; ?>
</td>
   </tr>
 </table>
<?php endif; ?>
<div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
</div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>