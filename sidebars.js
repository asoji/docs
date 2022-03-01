/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check


module.exports = {
    mySidebar: [
        'intro',
        {
            type: 'category',
            label: 'Control Patcher',
            link: {type: 'doc', id: 'controlpatcher/controlpatcher'},
            items: ['controlpatcher/definitions']
        },
        {
            type: 'category',
            label: 'Yiski Bot',
            link: {type: 'doc', id: 'yiski/yiski'},
            items: ['yiski/setup', 'yiski/config', 'yiski/discord', 'yiski/revolt']
        }
    ]
}
