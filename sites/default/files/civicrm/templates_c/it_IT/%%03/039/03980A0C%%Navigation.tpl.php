<?php /* Smarty version 2.6.31, created on 2023-07-16 18:23:24
         compiled from CRM/Admin/Page/Navigation.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Admin/Page/Navigation.tpl', 1, false),array('block', 'ts', 'CRM/Admin/Page/Navigation.tpl', 30, false),array('block', 'crmButton', 'CRM/Admin/Page/Navigation.tpl', 35, false),array('function', 'help', 'CRM/Admin/Page/Navigation.tpl', 30, false),array('function', 'crmURL', 'CRM/Admin/Page/Navigation.tpl', 37, false),array('function', 'crmKey', 'CRM/Admin/Page/Navigation.tpl', 125, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php if ($this->_tpl_vars['action'] == 1 || $this->_tpl_vars['action'] == 2 || $this->_tpl_vars['action'] == 8): ?>
  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Admin/Form/Navigation.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php else: ?>
  <div class="help">
    <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Customize the CiviCRM navigation menu bar for your users here.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php echo smarty_function_help(array('id' => "id-navigation"), $this);?>

  </div>

  <div class="crm-block crm-content-block">
    <div id="new-menu-item">
      <?php $this->_tag_stack[] = array('crmButton', array('p' => "civicrm/admin/menu",'q' => "action=add&reset=1",'id' => 'newMenuItem','icon' => "crm-i fa-plus-circle",'style' => "margin-left: 6px;")); $_block_repeat=true;smarty_block_crmButton($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Add Menu Item<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmButton($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>&nbsp;&nbsp;&nbsp;&nbsp;
        <span id="reset-menu" class="status" style="display:none">
        <?php ob_start(); ?><?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/admin/menu','q' => "reset=1"), $this);?>
<?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('rebuildURL', ob_get_contents());ob_end_clean(); ?>
          <?php $this->_tag_stack[] = array('ts', array('1' => $this->_tpl_vars['rebuildURL'])); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><a href='%1' title="Reload page"><strong>Click here</strong></a> to reload the page and see your changes in the menu bar above.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
        </span><br/><br/>
    </div>
    <div class="spacer"></div>
    <div style="padding-left: 25px;"><div class="crm-logo-sm"></div></div>
    <div id="navigation-tree" class="navigation-tree" style="height:auto; border-collapse:separate; background-color:#FFFFFF;"></div>
    <div class="spacer"></div>
    <div>
      <a href="#" class="nav-reset crm-hover-button">
                <i class="crm-i fa-undo"></i> <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Cleanup reports menu<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
      </a>
    </div>
    <div class="spacer"></div>
  </div>
  <?php echo '
  <script type="text/javascript">
    CRM.$(function($) {
      $("#navigation-tree").jstree({
        plugins: ["dnd", "contextmenu"],
        core: {
          data: function(tree, callBack) {
            CRM.api3(\'Navigation\', \'get\', {
              domain_id: '; ?>
<?php echo $this->_tpl_vars['config']->domainID(); ?>
<?php echo ',
              options: {limit: 0, sort: \'weight\'},
              return: [\'label\', \'parent_id\', \'icon\'],
              name: {\'!=\': \'Home\'},
              sequential: 1
            }).done(function(data) {
              var items = [];
              $.each(data.values, function(key, value) {
                items.push({
                  id: value.id,
                  text: value.label,
                  icon: value.icon || false,
                  parent: value.parent_id || \'#\'
                });
              });
              callBack(items);
            });
          },
          progressive_render: true,
          check_callback: true
        },
        dnd: {
          copy: false
        },
        contextmenu: {
          items: function (node, callBack) {
            var items = {
              add: {
                label: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Add<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
                icon: \'crm-i fa-plus\',
                action: editForm
              },
              edit: {
                label: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
                icon: \'crm-i fa-pencil\',
                action: editForm
              },
              delete: {
                label: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
                icon: \'crm-i fa-trash\',
                action: function (menu) {
                  var nodeID = menu.reference.attr(\'id\').replace(\'_anchor\', \'\'),
                    node = $("#navigation-tree").jstree(true).get_node(nodeID),
                    menuName = node.text;
                  var deleteMsg = '; ?>
"<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Are you sure you want to delete this menu item:<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> " + '"'<?php echo ' + menuName + '; ?>
'"? <?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>This action cannot be undone.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
                  if (node.children.length) {
                    deleteMsg += '; ?>
"<br /><br />" + ts('<?php $this->_tag_stack[] = array('ts', array('escape' => 'js','1' => '<strong>%1</strong>')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>%1 sub-menu items will also be deleted.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ', {1: node.children.length});
                  }
                  CRM.confirm({message: deleteMsg})
                    .on(\'crmConfirm:yes\', function() {
                      CRM.api3(\'Navigation\', \'delete\', {id: nodeID}, true);
                      $("#navigation-tree").jstree(true).delete_node(menu.reference.closest(\'li\'));
                      $("#reset-menu").show();
                    });
                }
              }
            };
            callBack(items);
          }
        }
      }).on("move_node.jstree", function (e, data) {
        var nodeID = data.node.id;
        var refID = data.parent === \'#\' ? \'\' : data.parent;
        var ps = data.position;
        var postURL = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/menutree','h' => 0,'q' => 'key='), $this);?>
<?php echo smarty_function_crmKey(array('name' => 'civicrm/ajax/menutree'), $this);?>
"<?php echo ';
        CRM.status({}, $.get( postURL + \'&type=move&id=\' +  nodeID + \'&ref_id=\' + refID + \'&ps=\'+ps));
        $("#reset-menu").show();
      });

      function editForm(menu) {
        var nodeID = menu.reference.attr(\'id\').replace(\'_anchor\', \'\'),
          action = menu.item.icon === \'crm-i fa-pencil\' ? \'update\' : \'add\',
          args = {reset: 1, action: action};
        if (action === \'add\') {
          args.parent_id = nodeID;
        } else {
          args.id = nodeID;
        }
        CRM.loadForm(CRM.url(\'civicrm/admin/menu\', args)).on(\'crmFormSuccess\', function() {
          $("#navigation-tree").jstree(true).refresh();
          $("#reset-menu").show();
        });
      }

      $(\'#new-menu-item a.button\')
        .on(\'click\', CRM.popup)
        .on(\'crmPopupFormSuccess\', function() {
          $("#navigation-tree").jstree(true).refresh();
          $("#reset-menu").show();
        });

      $(\'a.nav-reset\').on(\'click\', function(e) {
        e.preventDefault();
        CRM.confirm({
          title: $(this).text(),
          message: \''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>This will add links for all currently active reports to the "Reports" menu under the relevant component. If you have added report instances to other menus, they will be moved to "Reports".  Are you sure?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '\'
        })
          .on(\'crmConfirm:yes\', function() {
            $(\'#crm-container\').block();
            CRM.api3(\'Navigation\', \'reset\', {\'for\': \'report\'}, true)
              .done(function() {
                $(\'#crm-container\').unblock();
                $("#navigation-tree").jstree(true).refresh();
                $("#reset-menu").show();
              })
          });
      });
    });
</script>
'; ?>

<?php endif; ?>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>