import langs from '../config/langs.js';

/**
 * Copy text to clipboard
 *
 * @param text
 * @returns {boolean}
 */
export const copyTextToClipboard = text => {
    let res;
    const textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        res = !!successful;
    } catch (err) {
        console.error('[copyTextToClipboard] unable to copy', err);
        res = false;
    }

    document.body.removeChild(textArea);
    return res;
};

/**
 * Validate source object according to docs
 *
 * @param obj
 * @returns {string|undefined}
 */
export const validateSource = obj => {
    if (!obj.name || typeof obj.name !== 'string') {
        return 'Invalid source object. `name` is required and should be a string.';
    } else if (!obj.source || !obj.source.default) {
        return 'Invalid source object. `source` is required and should be a require statement like so `require(\'!!raw-loader!./filename.stories.js\')`.';
    } else if (!obj.language || typeof obj.language !== 'string' || !langs[obj.language]) {
        const availOpts = [];
        for (let l in langs) {
            if (langs.hasOwnProperty(l)) availOpts.push(l);
        }
        return `Invalid source object. \`language\` is required and should be one of ${availOpts.join(',')}.`;
    }
};