<?php /* Smarty version 2.6.31, created on 2023-09-28 10:38:00
         compiled from CRM/Case/Form/CaseFilter.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Case/Form/CaseFilter.tpl', 1, false),array('block', 'ts', 'CRM/Case/Form/CaseFilter.tpl', 29, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><div class="crm-case-filter-<?php echo $this->_tpl_vars['list']; ?>
">
  <div class="crm-accordion-wrapper crm-search_filters-accordion">
    <div class="crm-accordion-header">
    <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Filter by Case<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
    </div><!-- /.crm-accordion-header -->
    <div class="crm-accordion-body">
      <table class="no-border form-layout-compressed case-search-options-<?php echo $this->_tpl_vars['list']; ?>
">
        <tr>
          <td class="crm-contact-form-block-case_type_id crm-inline-edit-field">
            <?php echo $this->_tpl_vars['form']['case_type_id']['label']; ?>
<br /> <?php echo $this->_tpl_vars['form']['case_type_id']['html']; ?>

          </td>
          <td class="crm-contact-form-block-case_status_id crm-inline-edit-field">
            <?php echo $this->_tpl_vars['form']['case_status_id']['label']; ?>
<br /> <?php echo $this->_tpl_vars['form']['case_status_id']['html']; ?>

          </td>
          <?php if ($this->_tpl_vars['accessAllCases'] && $this->_tpl_vars['form']['upcoming']): ?>
            <td class="crm-case-dashboard-switch-view-buttons">
              <br/>
              <?php echo $this->_tpl_vars['form']['upcoming']['html']; ?>
&nbsp;<?php echo $this->_tpl_vars['form']['upcoming']['label']; ?>

            </td>
          <?php endif; ?>
        </tr>
      </table>
    </div><!-- /.crm-accordion-body -->
  </div><!-- /.crm-accordion-wrapper -->
</div>
<div class="spacer"></div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>