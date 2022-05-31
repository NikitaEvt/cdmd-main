<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfefa10b23d58a2ca8793bc3ee874fc69
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'DrewM\\MailChimp\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'DrewM\\MailChimp\\' => 
        array (
            0 => __DIR__ . '/..' . '/drewm/mailchimp-api/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'J' => 
        array (
            'JasonGrimes' => 
            array (
                0 => __DIR__ . '/..' . '/jasongrimes/paginator/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfefa10b23d58a2ca8793bc3ee874fc69::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfefa10b23d58a2ca8793bc3ee874fc69::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitfefa10b23d58a2ca8793bc3ee874fc69::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
