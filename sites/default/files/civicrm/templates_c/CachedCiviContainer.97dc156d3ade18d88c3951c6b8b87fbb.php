<?php

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\Exception\InactiveScopeException;
use Symfony\Component\DependencyInjection\Exception\InvalidArgumentException;
use Symfony\Component\DependencyInjection\Exception\LogicException;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;
use Symfony\Component\DependencyInjection\ParameterBag\FrozenParameterBag;

/**
 * This class has been auto-generated
 * by the Symfony Dependency Injection Component.
 */
class CachedCiviContainer extends Container
{
    private $parameters;
    private $targetDirs = array();

    public function __construct()
    {
        $this->parameters = $this->getDefaultParameters();

        $this->services =
        $this->scopedServices =
        $this->scopeStacks = array();
        $this->scopes = array();
        $this->scopeChildren = array();
        $this->methodMap = array(
            'angular' => 'getAngularService',
            'asset_builder' => 'getAssetBuilderService',
            'cache.checks' => 'getCache_ChecksService',
            'cache.community_messages' => 'getCache_CommunityMessagesService',
            'cache.default' => 'getCache_DefaultService',
            'cache.js_strings' => 'getCache_JsStringsService',
            'cache.long' => 'getCache_LongService',
            'cache.session' => 'getCache_SessionService',
            'cache.settings' => 'getCache_SettingsService',
            'cache_config' => 'getCacheConfigService',
            'civi.activity.triggers' => 'getCivi_Activity_TriggersService',
            'civi.case.statictriggers' => 'getCivi_Case_StatictriggersService',
            'civi.case.triggers' => 'getCivi_Case_TriggersService',
            'civi.mailing.triggers' => 'getCivi_Mailing_TriggersService',
            'civi_api_kernel' => 'getCiviApiKernelService',
            'civi_container_factory' => 'getCiviContainerFactoryService',
            'civi_token_compat' => 'getCiviTokenCompatService',
            'crm_activity_tokens' => 'getCrmActivityTokensService',
            'crm_contribute_tokens' => 'getCrmContributeTokensService',
            'crm_event_tokens' => 'getCrmEventTokensService',
            'crm_mailing_action_tokens' => 'getCrmMailingActionTokensService',
            'crm_mailing_tokens' => 'getCrmMailingTokensService',
            'crm_member_tokens' => 'getCrmMemberTokensService',
            'cxn_reg_client' => 'getCxnRegClientService',
            'dispatcher' => 'getDispatcherService',
            'httpclient' => 'getHttpclientService',
            'i18n' => 'getI18nService',
            'lockmanager' => 'getLockmanagerService',
            'magic_function_provider' => 'getMagicFunctionProviderService',
            'paths' => 'getPathsService',
            'pear_mail' => 'getPearMailService',
            'prevnext' => 'getPrevnextService',
            'prevnext.driver.redis' => 'getPrevnext_Driver_RedisService',
            'prevnext.driver.sql' => 'getPrevnext_Driver_SqlService',
            'psr_log' => 'getPsrLogService',
            'resources' => 'getResourcesService',
            'runtime' => 'getRuntimeService',
            'settings_manager' => 'getSettingsManagerService',
            'sql_triggers' => 'getSqlTriggersService',
            'userpermissionclass' => 'getUserpermissionclassService',
            'usersystem' => 'getUsersystemService',
        );
        $this->aliases = array(
            'cache.short' => 'cache.default',
        );
    }

    /**
     * {@inheritdoc}
     */
    public function compile()
    {
        throw new LogicException('You cannot compile a dumped frozen container.');
    }

    /**
     * {@inheritdoc}
     */
    public function isFrozen()
    {
        return true;
    }

    /**
     * Gets the public 'angular' shared service.
     *
     * @return \Civi\Angular\Manager
     */
    protected function getAngularService()
    {
        return $this->services['angular'] = $this->get('civi_container_factory')->createAngularManager();
    }

    /**
     * Gets the public 'asset_builder' shared service.
     *
     * @return \Civi\Core\AssetBuilder
     */
    protected function getAssetBuilderService()
    {
        return $this->services['asset_builder'] = new \Civi\Core\AssetBuilder();
    }

    /**
     * Gets the public 'cache.checks' shared service.
     *
     * @return \CRM_Utils_Cache_Interface
     */
    protected function getCache_ChecksService()
    {
        return $this->services['cache.checks'] = \CRM_Utils_Cache::create(array('name' => 'checks', 'type' => array(0 => '*memory*', 1 => 'SqlGroup', 2 => 'ArrayCache')));
    }

    /**
     * Gets the public 'cache.community_messages' shared service.
     *
     * @return \CRM_Utils_Cache_Interface
     */
    protected function getCache_CommunityMessagesService()
    {
        return $this->services['cache.community_messages'] = \CRM_Utils_Cache::create(array('name' => 'community_messages', 'type' => array(0 => '*memory*', 1 => 'SqlGroup', 2 => 'ArrayCache')));
    }

    /**
     * Gets the public 'cache.default' shared service.
     *
     * @return \CRM_Utils_Cache
     */
    protected function getCache_DefaultService()
    {
        return $this->services['cache.default'] = \CRM_Utils_Cache::singleton();
    }

    /**
     * Gets the public 'cache.js_strings' shared service.
     *
     * @return \CRM_Utils_Cache_Interface
     */
    protected function getCache_JsStringsService()
    {
        return $this->services['cache.js_strings'] = \CRM_Utils_Cache::create(array('name' => 'js_strings', 'type' => array(0 => '*memory*', 1 => 'SqlGroup', 2 => 'ArrayCache')));
    }

    /**
     * Gets the public 'cache.long' shared service.
     *
     * @return \CRM_Utils_Cache_Interface
     */
    protected function getCache_LongService()
    {
        return $this->services['cache.long'] = \CRM_Utils_Cache::create(array('name' => 'long', 'type' => array(0 => '*memory*', 1 => 'SqlGroup', 2 => 'ArrayCache')));
    }

    /**
     * Gets the public 'cache.session' shared service.
     *
     * @return \CRM_Utils_Cache_Interface
     */
    protected function getCache_SessionService()
    {
        return $this->services['cache.session'] = \CRM_Utils_Cache::create(array('name' => 'CiviCRM Session', 'type' => array(0 => '*memory*', 1 => 'SqlGroup', 2 => 'ArrayCache')));
    }

    /**
     * Gets the public 'cache.settings' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getCache_SettingsService()
    {
        throw new RuntimeException('You have requested a synthetic service ("cache.settings"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'cache_config' shared service.
     *
     * @return \ArrayObject
     */
    protected function getCacheConfigService()
    {
        return $this->services['cache_config'] = $this->get('civi_container_factory')->createCacheConfig();
    }

    /**
     * Gets the public 'civi.activity.triggers' shared service.
     *
     * @return \Civi\Core\SqlTrigger\TimestampTriggers
     */
    protected function getCivi_Activity_TriggersService()
    {
        return $this->services['civi.activity.triggers'] = new \Civi\Core\SqlTrigger\TimestampTriggers('civicrm_activity', 'Activity');
    }

    /**
     * Gets the public 'civi.case.statictriggers' shared service.
     *
     * @return \Civi\Core\SqlTrigger\StaticTriggers
     */
    protected function getCivi_Case_StatictriggersService()
    {
        return $this->services['civi.case.statictriggers'] = new \Civi\Core\SqlTrigger\StaticTriggers(array(0 => array('upgrade_check' => array('table' => 'civicrm_case', 'column' => 'modified_date'), 'table' => 'civicrm_case_activity', 'when' => 'AFTER', 'event' => array(0 => 'INSERT'), 'sql' => ''."\n".'UPDATE civicrm_case SET modified_date = CURRENT_TIMESTAMP WHERE id = NEW.case_id;'."\n".''), 1 => array('upgrade_check' => array('table' => 'civicrm_case', 'column' => 'modified_date'), 'table' => 'civicrm_activity', 'when' => 'BEFORE', 'event' => array(0 => 'UPDATE', 1 => 'DELETE'), 'sql' => ''."\n".'UPDATE civicrm_case SET modified_date = CURRENT_TIMESTAMP WHERE id IN (SELECT ca.case_id FROM civicrm_case_activity ca WHERE ca.activity_id = OLD.id);'."\n".'')));
    }

    /**
     * Gets the public 'civi.case.triggers' shared service.
     *
     * @return \Civi\Core\SqlTrigger\TimestampTriggers
     */
    protected function getCivi_Case_TriggersService()
    {
        return $this->services['civi.case.triggers'] = new \Civi\Core\SqlTrigger\TimestampTriggers('civicrm_case', 'Case');
    }

    /**
     * Gets the public 'civi.mailing.triggers' shared service.
     *
     * @return \Civi\Core\SqlTrigger\TimestampTriggers
     */
    protected function getCivi_Mailing_TriggersService()
    {
        return $this->services['civi.mailing.triggers'] = new \Civi\Core\SqlTrigger\TimestampTriggers('civicrm_mailing', 'Mailing');
    }

    /**
     * Gets the public 'civi_api_kernel' shared service.
     *
     * @return \Civi\API\Kernel
     */
    protected function getCiviApiKernelService()
    {
        return $this->services['civi_api_kernel'] = $this->get('civi_container_factory')->createApiKernel($this->get('dispatcher'), $this->get('magic_function_provider'));
    }

    /**
     * Gets the public 'civi_container_factory' shared service.
     *
     * @return \Civi\Core\Container
     */
    protected function getCiviContainerFactoryService()
    {
        return $this->services['civi_container_factory'] = new \Civi\Core\Container();
    }

    /**
     * Gets the public 'civi_token_compat' shared service.
     *
     * @return \Civi\Token\TokenCompatSubscriber
     */
    protected function getCiviTokenCompatService()
    {
        return $this->services['civi_token_compat'] = new \Civi\Token\TokenCompatSubscriber();
    }

    /**
     * Gets the public 'crm_activity_tokens' shared service.
     *
     * @return \CRM_Activity_Tokens
     */
    protected function getCrmActivityTokensService()
    {
        return $this->services['crm_activity_tokens'] = new \CRM_Activity_Tokens();
    }

    /**
     * Gets the public 'crm_contribute_tokens' shared service.
     *
     * @return \CRM_Contribute_Tokens
     */
    protected function getCrmContributeTokensService()
    {
        return $this->services['crm_contribute_tokens'] = new \CRM_Contribute_Tokens();
    }

    /**
     * Gets the public 'crm_event_tokens' shared service.
     *
     * @return \CRM_Event_Tokens
     */
    protected function getCrmEventTokensService()
    {
        return $this->services['crm_event_tokens'] = new \CRM_Event_Tokens();
    }

    /**
     * Gets the public 'crm_mailing_action_tokens' shared service.
     *
     * @return \CRM_Mailing_ActionTokens
     */
    protected function getCrmMailingActionTokensService()
    {
        return $this->services['crm_mailing_action_tokens'] = new \CRM_Mailing_ActionTokens();
    }

    /**
     * Gets the public 'crm_mailing_tokens' shared service.
     *
     * @return \CRM_Mailing_Tokens
     */
    protected function getCrmMailingTokensService()
    {
        return $this->services['crm_mailing_tokens'] = new \CRM_Mailing_Tokens();
    }

    /**
     * Gets the public 'crm_member_tokens' shared service.
     *
     * @return \CRM_Member_Tokens
     */
    protected function getCrmMemberTokensService()
    {
        return $this->services['crm_member_tokens'] = new \CRM_Member_Tokens();
    }

    /**
     * Gets the public 'cxn_reg_client' shared service.
     *
     * @return \Civi\Cxn\Rpc\RegistrationClient
     */
    protected function getCxnRegClientService()
    {
        return $this->services['cxn_reg_client'] = \CRM_Cxn_BAO_Cxn::createRegistrationClient();
    }

    /**
     * Gets the public 'dispatcher' shared service.
     *
     * @return \Civi\Core\CiviEventDispatcher
     */
    protected function getDispatcherService()
    {
        $this->services['dispatcher'] = $instance = $this->get('civi_container_factory')->createEventDispatcher($this);

        $instance->addListenerService('hook_civicrm_triggerInfo', array(0 => 'civi.mailing.triggers', 1 => 'onTriggerInfo'), 0);
        $instance->addListenerService('hook_civicrm_triggerInfo', array(0 => 'civi.activity.triggers', 1 => 'onTriggerInfo'), 0);
        $instance->addListenerService('hook_civicrm_triggerInfo', array(0 => 'civi.case.triggers', 1 => 'onTriggerInfo'), 0);
        $instance->addListenerService('hook_civicrm_triggerInfo', array(0 => 'civi.case.statictriggers', 1 => 'onTriggerInfo'), 0);
        $instance->addSubscriberService('civi_token_compat', 'Civi\\Token\\TokenCompatSubscriber');
        $instance->addSubscriberService('crm_mailing_action_tokens', 'CRM_Mailing_ActionTokens');
        $instance->addSubscriberService('crm_activity_tokens', 'CRM_Activity_Tokens');
        $instance->addSubscriberService('crm_contribute_tokens', 'CRM_Contribute_Tokens');
        $instance->addSubscriberService('crm_event_tokens', 'CRM_Event_Tokens');
        $instance->addSubscriberService('crm_mailing_tokens', 'CRM_Mailing_Tokens');
        $instance->addSubscriberService('crm_member_tokens', 'CRM_Member_Tokens');

        return $instance;
    }

    /**
     * Gets the public 'httpclient' shared service.
     *
     * @return \CRM_Utils_HttpClient
     */
    protected function getHttpclientService()
    {
        return $this->services['httpclient'] = \CRM_Utils_HttpClient::singleton();
    }

    /**
     * Gets the public 'i18n' shared service.
     *
     * @return \CRM_Core_I18n
     */
    protected function getI18nService()
    {
        return $this->services['i18n'] = \CRM_Core_I18n::singleton();
    }

    /**
     * Gets the public 'lockmanager' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getLockmanagerService()
    {
        throw new RuntimeException('You have requested a synthetic service ("lockmanager"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'magic_function_provider' shared service.
     *
     * @return \Civi\API\Provider\MagicFunctionProvider
     */
    protected function getMagicFunctionProviderService()
    {
        return $this->services['magic_function_provider'] = new \Civi\API\Provider\MagicFunctionProvider();
    }

    /**
     * Gets the public 'paths' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getPathsService()
    {
        throw new RuntimeException('You have requested a synthetic service ("paths"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'pear_mail' shared service.
     *
     * @return \Mail
     */
    protected function getPearMailService()
    {
        return $this->services['pear_mail'] = \CRM_Utils_Mail::createMailer();
    }

    /**
     * Gets the public 'prevnext' shared service.
     *
     * @return \CRM_Core_PrevNextCache_Interface
     */
    protected function getPrevnextService()
    {
        return $this->services['prevnext'] = $this->get('civi_container_factory')->createPrevNextCache($this);
    }

    /**
     * Gets the public 'prevnext.driver.redis' shared service.
     *
     * @return \CRM_Core_PrevNextCache_Redis
     */
    protected function getPrevnext_Driver_RedisService()
    {
        return $this->services['prevnext.driver.redis'] = new \CRM_Core_PrevNextCache_Redis($this->get('cache_config'));
    }

    /**
     * Gets the public 'prevnext.driver.sql' shared service.
     *
     * @return \CRM_Core_PrevNextCache_Sql
     */
    protected function getPrevnext_Driver_SqlService()
    {
        return $this->services['prevnext.driver.sql'] = new \CRM_Core_PrevNextCache_Sql();
    }

    /**
     * Gets the public 'psr_log' shared service.
     *
     * @return \CRM_Core_Error_Log
     */
    protected function getPsrLogService()
    {
        return $this->services['psr_log'] = new \CRM_Core_Error_Log();
    }

    /**
     * Gets the public 'resources' shared service.
     *
     * @return \CRM_Core_Resources
     */
    protected function getResourcesService()
    {
        return $this->services['resources'] = $this->get('civi_container_factory')->createResources($this);
    }

    /**
     * Gets the public 'runtime' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getRuntimeService()
    {
        throw new RuntimeException('You have requested a synthetic service ("runtime"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'settings_manager' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getSettingsManagerService()
    {
        throw new RuntimeException('You have requested a synthetic service ("settings_manager"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'sql_triggers' shared service.
     *
     * @return \Civi\Core\SqlTriggers
     */
    protected function getSqlTriggersService()
    {
        return $this->services['sql_triggers'] = new \Civi\Core\SqlTriggers();
    }

    /**
     * Gets the public 'userpermissionclass' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getUserpermissionclassService()
    {
        throw new RuntimeException('You have requested a synthetic service ("userpermissionclass"). The DIC does not know how to construct this service.');
    }

    /**
     * Gets the public 'usersystem' shared service.
     *
     * @throws RuntimeException always since this service is expected to be injected dynamically
     */
    protected function getUsersystemService()
    {
        throw new RuntimeException('You have requested a synthetic service ("usersystem"). The DIC does not know how to construct this service.');
    }

    /**
     * {@inheritdoc}
     */
    public function getParameter($name)
    {
        $name = strtolower($name);

        if (!(isset($this->parameters[$name]) || array_key_exists($name, $this->parameters))) {
            throw new InvalidArgumentException(sprintf('The parameter "%s" must be defined.', $name));
        }

        return $this->parameters[$name];
    }

    /**
     * {@inheritdoc}
     */
    public function hasParameter($name)
    {
        $name = strtolower($name);

        return isset($this->parameters[$name]) || array_key_exists($name, $this->parameters);
    }

    /**
     * {@inheritdoc}
     */
    public function setParameter($name, $value)
    {
        throw new LogicException('Impossible to call set() on a frozen ParameterBag.');
    }

    /**
     * {@inheritdoc}
     */
    public function getParameterBag()
    {
        if (null === $this->parameterBag) {
            $this->parameterBag = new FrozenParameterBag($this->parameters);
        }

        return $this->parameterBag;
    }

    /**
     * Gets the default parameters.
     *
     * @return array An array of the default parameters
     */
    protected function getDefaultParameters()
    {
        return array(
            'civicrm_base_path' => '/var/www/html/sites/all/modules/civicrm',
        );
    }
}
