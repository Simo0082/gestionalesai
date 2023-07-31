<?php
/*
 +--------------------------------------------------------------------+
 | CiviCRM version 5                                                  |
 +--------------------------------------------------------------------+
 | Copyright CiviCRM LLC (c) 2004-2019                                |
 +--------------------------------------------------------------------+
 | This file is a part of CiviCRM.                                    |
 |                                                                    |
 | CiviCRM is free software; you can copy, modify, and distribute it  |
 | under the terms of the GNU Affero General Public License           |
 | Version 3, 19 November 2007 and the CiviCRM Licensing Exception.   |
 |                                                                    |
 | CiviCRM is distributed in the hope that it will be useful, but     |
 | WITHOUT ANY WARRANTY; without even the implied warranty of         |
 | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.               |
 | See the GNU Affero General Public License for more details.        |
 |                                                                    |
 | You should have received a copy of the GNU Affero General Public   |
 | License and the CiviCRM Licensing Exception along                  |
 | with this program; if not, contact CiviCRM LLC                     |
 | at info[AT]civicrm[DOT]org. If you have questions about the        |
 | GNU Affero General Public License or the licensing of CiviCRM,     |
 | see the CiviCRM license FAQ at http://civicrm.org/licensing        |
 +--------------------------------------------------------------------+
 */

/**
 *
 * @package CRM
 * @copyright CiviCRM LLC (c) 2004-2019
 */

/**
 * Class to represent the actions that can be performed on a group of contacts used by the search forms.
 */
class CRM_Contact_Task extends CRM_Core_Task {

  const
    // Contact tasks
    HOUSEHOLD_CONTACTS = 101,
    ORGANIZATION_CONTACTS = 102,
    RECORD_CONTACTS = 103,
    MAP_CONTACTS = 104,
    ADD_EVENT = 105,
    MERGE_CONTACTS = 106,
    EMAIL_UNHOLD = 107,
    RESTORE = 108,
    COMMUNICATION_PREFS = 109,
    INDIVIDUAL_CONTACTS = 110,
    ADD_TO_CASE = 111;

  static $objectType = 'contact';

  public static function tasks() {
    if (!self::$_tasks) {
      self::$_tasks = array(
        self::TASK_EXPORT => array(
          'title' => ts('Esporta'),
          'class' => array(
            'CRM_Export_Form_Select',
            'CRM_Export_Form_Map',
          ),
          'result' => FALSE,
        ),
        self::DELETE_PERMANENTLY => array(
          'title' => ts('Elimina'),
          'class' => 'CRM_Contact_Form_Task_Delete',
          'result' => FALSE,
        ),
      );

      if (!CRM_Core_Permission::check('delete contacts')) {
        unset(self::$_tasks[self::TASK_DELETE]);
      }

      //show map action only if map provider and geoprovider are set (Google doesn't need geoprovider)
      // should fix this to be more flexible as providers are added ??
      $config = CRM_Core_Config::singleton();

      if ($config->mapProvider &&
        ($config->mapProvider == 'Google' ||
          ($config->mapProvider == 'OpenStreetMaps' ||
            $config->geoProvider == 'Google'
          )
        )
      ) {
        self::$_tasks[self::MAP_CONTACTS] = array(
          'title' => ts('Map contacts'),
          'class' => 'CRM_Contact_Form_Task_Map',
          'result' => FALSE,
        );
      }


      if (CRM_Core_Permission::access('CiviMail')
        || (CRM_Mailing_Info::workflowEnabled() && CRM_Core_Permission::check('create mailings'))
      ) {
        self::$_tasks[self::CREATE_MAILING] = array(
          'title' => ts('Email - schedule/send via CiviMail'),
          'class' => 'CRM_Mailing_Form_Task_AdhocMailing',
          'result' => FALSE,
        );
      }

      if (CRM_Core_Permission::access('CiviCase')) {
        self::$_tasks[self::ADD_TO_CASE] = array(
          'title' => 'Add to case as role',
          'class' => 'CRM_Case_Form_AddToCaseAsRole',
          'result' => FALSE,
        );
      }

      parent::tasks();
    }

    return self::$_tasks;
  }

  /**
   * Show tasks selectively based on the permission level
   * of the user
   *
   * @param int $permission
   * @param array $params
   *             bool deletedContacts: Are these tasks for operating on deleted contacts?.
   *
   * @return array
   *   set of tasks that are valid for the user
   */
  public static function permissionedTaskTitles($permission, $params = array()) {
    if (!isset($params['deletedContacts'])) {
      $params['deletedContacts'] = FALSE;
    }
    self::tasks();
    $tasks = array();
    if ($params['deletedContacts']) {
      if (CRM_Core_Permission::check('access deleted contacts')) {
        $tasks[self::RESTORE] = self::$_tasks[self::RESTORE]['title'];
        if (CRM_Core_Permission::check('delete contacts')) {
          $tasks[self::DELETE_PERMANENTLY] = self::$_tasks[self::DELETE_PERMANENTLY]['title'];
        }
      }
    }
    elseif ($permission == CRM_Core_Permission::EDIT) {
      $tasks = self::taskTitles();
    }
    else {
      $tasks = array(
        self::TASK_EXPORT => self::$_tasks[self::TASK_EXPORT]['title'],
        self::TASK_EMAIL => self::$_tasks[self::TASK_EMAIL]['title'],
        self::LABEL_CONTACTS => self::$_tasks[self::LABEL_CONTACTS]['title'],
      );

      foreach ([
        self::MAP_CONTACTS,
        self::CREATE_MAILING,
        self::TASK_SMS
      ] as $task) {
        if (isset(self::$_tasks[$task]) &&
          !empty(self::$_tasks[$task]['title'])
        ) {
          $tasks[$task] = self::$_tasks[$task]['title'];
        }
      }
    }

    $tasks = parent::corePermissionedTaskTitles($tasks, $permission, $params);
    return $tasks;
  }

  /**
   * @param $value
   *
   * @return array
   */
  public static function getTask($value) {
    self::tasks();

    if (!CRM_Utils_Array::value($value, self::$_tasks)) {
      // make it the print task by default
      $value = self::TASK_PRINT;
    }
    return parent::getTask($value);
  }

}
