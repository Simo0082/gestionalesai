<?php /* Smarty version 2.6.31, created on 2023-09-20 21:44:30
         compiled from CRM/common/navigation.js.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/common/navigation.js.tpl', 1, false),array('block', 'ts', 'CRM/common/navigation.js.tpl', 31, false),array('function', 'crmURL', 'CRM/common/navigation.js.tpl', 29, false),array('modifier', 'date_format', 'CRM/common/navigation.js.tpl', 47, false),array('modifier', 'json_encode', 'CRM/common/navigation.js.tpl', 50, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>// http://civicrm.org/licensing
<?php ob_start(); ?><?php echo '<ul id="civicrm-menu"><li id="crm-qsearch" class="menumain"><form action="'; ?><?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/search/advanced','h' => 0), $this);?><?php echo '" name="search_block" id="id_search_block" method="post"><div id="quickSearch"><input type="text" class="form-text" id="sort_name_navigation" placeholder="'; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'Contacts'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '" name="sort_name" style="width: 6em;" /><input type="text" id="sort_contact_id" style="display: none" /><input type="hidden" name="hidden_location" value="1" /><input type="hidden" name="hidden_custom" value="1" /><input type="hidden" name="qfKey" value="" /><div style="height:1px; overflow:hidden;"><input type="submit" value="'; ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo 'Go'; ?><?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '" name="_qf_Advanced_refresh" class="crm-form-submit default" /></div></div></form><ul>'; ?><?php $_from = $this->_tpl_vars['quicksearchOptions']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['optionKey'] => $this->_tpl_vars['optionLabel']):
?><?php echo '<li><label class="crm-quickSearchField"><input type="radio" '; ?><?php if ($this->_tpl_vars['optionKey'] == 'sort_name'): ?><?php echo 'checked="checked"'; ?><?php endif; ?><?php echo ' value="'; ?><?php echo $this->_tpl_vars['optionKey']; ?><?php echo '" name="quickSearchField"> '; ?><?php echo $this->_tpl_vars['optionLabel']; ?><?php echo '</label></li>'; ?><?php endforeach; endif; unset($_from); ?><?php echo '</ul></li>'; ?><?php echo $this->_tpl_vars['navigation']; ?><?php echo '</ul>'; ?>
<?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('menuMarkup', ob_get_contents());ob_end_clean(); ?>// <script> Generated <?php echo ((is_array($_tmp=time())) ? $this->_run_mod_handler('date_format', true, $_tmp, '%d %b %Y %H:%M:%S') : smarty_modifier_date_format($_tmp, '%d %b %Y %H:%M:%S')); ?>

<?php echo '
(function($) {
  var menuMarkup = '; ?>
<?php echo json_encode($this->_tpl_vars['menuMarkup']); ?>
<?php echo ';

  //Track Scrolling
  if ($(\'div.sticky-header\').length) {
    $(window).scroll(function () {
      $(\'div.sticky-header\').css({top: $(\'#civicrm-menu\').height() + "px", position: "fixed"});
    });
  }

  if ($(\'div#toolbar-box div.m\').length) {
    $(\'div#toolbar-box div.m\').html(menuMarkup);
  }
  else if ($("#crm-nav-menu-container").length) {
    $("#crm-nav-menu-container").html(menuMarkup).css({\'padding-bottom\': \'10px\'});
  }
  else {
    $(\'body\').append(menuMarkup);
  }

  // CRM-15493 get the current qfKey
  $("input[name=qfKey]", "#quickSearch").val($(\'#civicrm-navigation-menu\').data(\'qfkey\'));

$(\'#civicrm-menu\').ready(function() {
  $(\'#root-menu-div .outerbox\').css({\'margin-top\': \'6px\'});
  $(\'#root-menu-div .menu-ul li\').css({\'padding-bottom\': \'2px\', \'margin-top\': \'2px\'});
  $("#civicrm-menu >li").each(function(i){
    $(this).attr("tabIndex",i+2);
  });

  $(\'#sort_name_navigation\')
    .autocomplete({
      source: function(request, response) {
        //start spinning the civi logo
        $(\'.crm-logo-sm\').addClass(\'crm-i fa-spin\');
        var
          option = $(\'input[name=quickSearchField]:checked\'),
          params = {
            name: request.term,
            field_name: option.val()
          };
        CRM.api3(\'contact\', \'getquick\', params).done(function(result) {
          var ret = [];
          if (result.values.length > 0) {
            $(\'#sort_name_navigation\').autocomplete(\'widget\').menu(\'option\', \'disabled\', false);
            $.each(result.values, function(k, v) {
              ret.push({value: v.id, label: v.data});
            });
          } else {
            $(\'#sort_name_navigation\').autocomplete(\'widget\').menu(\'option\', \'disabled\', true);
            var label = option.closest(\'label\').text();
            var msg = ts(\''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js','1' => '%1')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>%1 not found.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ', {1: label});
            // Remind user they are not searching by contact name (unless they enter a number)
            if (params.field_name && !(/[\\d].*/.test(params.name))) {
              msg += '; ?>
' <?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Did you mean to search by Name/Email instead?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
            }
            ret.push({value: \'0\', label: msg});
          }
          response(ret);
          //stop spinning the civi logo
          $(\'.crm-logo-sm\').removeClass(\'crm-i fa-spin\');
        })
      },
      focus: function (event, ui) {
        return false;
      },
      select: function (event, ui) {
        if (ui.item.value > 0) {
          document.location = CRM.url(\'civicrm/contact/view\', {reset: 1, cid: ui.item.value});
        }
        return false;
      },
      create: function() {
        // Place menu in front
        $(this).autocomplete(\'widget\')
          .addClass(\'crm-quickSearch-results\')
          .css(\'z-index\', $(\'#civicrm-menu\').css(\'z-index\'));
      }
    })
    .keydown(function() {
      $.Menu.closeAll();
    })
    .on(\'focus\', function() {
      setQuickSearchValue();
      if ($(this).attr(\'style\').indexOf(\'14em\') < 0) {
        $(this).animate({width: \'14em\'});
      }
    })
    .on(\'blur\', function() {
      // Shrink if no input and menu is not open
      if (!$(this).val().length && $(this).attr(\'style\').indexOf(\'6em\') < 0 && !$(\'.crm-quickSearchField:visible\', \'#root-menu-div\').length) {
        $(this).animate({width: \'6em\'});
      }
    });
  $(\'.crm-hidemenu\').click(function(e) {
    $(\'#civicrm-menu\').slideUp();
    if ($(\'#crm-notification-container\').length) {
      var alert = CRM.alert('; ?>
'<a href="#" id="crm-restore-menu" style="text-align: center; margin-top: -8px;"><?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Restore CiviCRM Menu<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>'<?php echo ', \'\', \'none\', {expires: 10000});
      $(\'#crm-restore-menu\')
        .button({icons: {primary: \'fa-undo\'}})
        .click(function(e) {
          e.preventDefault();
          alert.close();
          $(\'#civicrm-menu\').slideDown();
        })
        .parent().css(\'text-align\', \'center\').find(\'.ui-button-text\').css({\'padding-top\': \'4px\', \'padding-bottom\': \'4px\'})
      ;
    }
    e.preventDefault();
  });
  function setQuickSearchValue() {
    var $selection = $(\'.crm-quickSearchField input:checked\'),
      label = $selection.parent().text(),
      value = $selection.val();
    // These fields are not supported by advanced search
    if (!value || value === \'first_name\' || value === \'last_name\') {
      value = \'sort_name\';
    }
    $(\'#sort_name_navigation\').attr({name: value, placeholder: label});
  }
  $(\'.crm-quickSearchField\').click(function() {
    setQuickSearchValue();
    $.Menu.closeAll();
    $(\'#sort_name_navigation\').focus().autocomplete("search");
  });
  // Set & retrieve default value
  if (window.localStorage) {
    $(\'.crm-quickSearchField\').click(function() {
      localStorage.quickSearchField = $(\'input\', this).val();
    });
    if (localStorage.quickSearchField) {
      $(\'.crm-quickSearchField input[value=\' + localStorage.quickSearchField + \']\').prop(\'checked\', true);
    }
  }
  // redirect to view page if there is only one contact
  $(\'#id_search_block\').on(\'submit\', function() {
    var $menu = $(\'#sort_name_navigation\').autocomplete(\'widget\');
    if ($(\'li.ui-menu-item\', $menu).length === 1) {
      var cid = $(\'li.ui-menu-item\', $menu).data(\'ui-autocomplete-item\').value;
      if (cid > 0) {
        document.location = CRM.url(\'civicrm/contact/view\', {reset: 1, cid: cid});
        return false;
      }
    }
  });
  // Close menu after selecting an item
  $(\'#root-menu-div\').on(\'click\', \'a\', $.Menu.closeAll);
});
$(\'#civicrm-menu\').menuBar({arrowClass: \'crm-i fa-caret-right\'});
$(\'#civicrm-menu\').trigger(\'crmLoad\');
$(window).on("beforeunload", function() {
  $(\'.crm-logo-sm\', \'#civicrm-menu\').addClass(\'crm-i fa-spin\');
});
})(CRM.$);'; ?>

<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>