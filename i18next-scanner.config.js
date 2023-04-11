// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Parser = require('i18next-scanner').Parser;

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const vfs = require('vinyl-fs');


module.exports = {
    input: ['src/**/*.{js,jsx,ts,tsx}'],
    output: './',
    options: {
        debug: false && process.env.NODE_ENV === 'development',
        func: {
            list: ['t'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.js', '.jsx'],
            fallbackKey: function (ns, value) {
                return value;
            },

            // https://react.i18next.com/latest/trans-component#usage-with-simple-html-elements-like-less-than-br-greater-than-and-others-v10.4.0
            supportBasicHtmlNodes: true, // Enables keeping the name of simple nodes (e.g. <br/>) in translations instead of indexed keys.
            keepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'], // Which nodes are allowed to be kept in translations during defaultValue generation of <Trans>.

            // https://github.com/acornjs/acorn/tree/master/acorn#interface
            acorn: {
                ecmaVersion: 2020,
                sourceType: 'module', // defaults to 'module'
            }
        },
        lngs: ['en', 'ar'],
        ns: [
            'common'
        ],
        defaultLng: 'en',
        defaultNs: 'common',
        // defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
            savePath: 'locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        },
        metadata: {},
        allowDynamicKeys: false,
    },
    transform: function (file, enc, done) {
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);

        parser.parseFuncFromString(content, { list: ['t'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                defaultValue: key,
            }));
        });
        done();
    },
};