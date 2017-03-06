([
    {
        tech: 'js',
        mustDeps: [
            { block: 'dropdown', tech: 'bemhtml' },
            { block: 'dropdown', mods: { switcher: 'link'}, tech: 'bemhtml' },
            // { block: 'popup', tech: 'bemhtml' },
            { block: 'tooltip', tech: 'bemhtml' }
        ]
    },{
        mustDeps: [
            { block: 'button' } ,
            { block: 'button', mods: { view: 'main' } },
            { block: 'input', mods: { theme: 'life-light' } },
            { block: 'button', mods: { theme: 'life-light' } },
            { block: 'select', mods: { theme: 'life-light' } },
            { block: 'input', mods: { theme: 'life-light', size: 'm', type: 'password' } } 
        ],
        shouldDeps: [
            // { block: 'dropdown', tech: 'bemhtml' },
            { block: 'dropdown' },
            { block: 'form', tech: 'bemhtml' },

            // { block: 'button', tech: 'bemhtml' },
            { block: 'link', tech: 'bemhtml' },
            { block: 'select', tech: 'bemhtml' },
            { block: 'link', tech: 'css' },
            { block: 'tooltip', tech: 'css' },
            { block: 'select', mods: { mode: 'radio' }, tech: 'bemhtml' },
            { block: 'modal', mods: { autoclosable: true } },
            { block: 'popup', mods: { autoclosable: true } },
            { elem: 'button-group' },
            { elem: 'cancel' },
            { elem: 'title' },
            { elem: 'text' },
            { elem: 'label' },
            { elem: 'submit' },
            { elem: 'text-error' },
            { elem: 'head-title' },
            { block: 'checkbox' },
            { block: 'menu', mods: { theme: 'islands' }, tech: 'css' },
            { block: 'select', mods: { theme: 'islands' }, tech: 'css' },
            { block: 'input', mods: { theme: 'islands' }, tech: 'css' }
        ]
    }
])