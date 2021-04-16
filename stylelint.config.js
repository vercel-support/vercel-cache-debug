module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    ':global',
                    'apply',
                    'layer',
                    'responsive',
                    'screen',
                    'tailwind',
                    'variants',
                ],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'export',
                    'import',
                    'global',
                    'local',
                    'external',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        indentation: 4,
        'no-descending-specificity': null,
    },
}
