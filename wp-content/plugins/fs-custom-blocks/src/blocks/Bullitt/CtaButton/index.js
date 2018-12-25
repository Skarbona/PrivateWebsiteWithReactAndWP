const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls } = wp.editor;

const { SVG, Path } = wp.components;

const icon =  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z" /></SVG>;

const BUTTON_TEXT = 'BUTTON_TEXT';
const BUTTON_CLASS = 'BUTTON_CLASS';

export default registerBlockType( 'bullitt-blocks/cta-button', {
    title: 'CTA Button',

    icon: icon,

    category: 'bullitt-blocks',

    attributes: {
        text: {
            type: 'string',
            default: 'Button Text'
        },
        buttonClass: {
            type: 'string',
            default: 'waves-effect yellow accent-3t black-text'
        },
    },

    edit: ({ attributes, setAttributes }) => {

        const { text, buttonClass } = attributes;

        function onChangeValue(newValue, typeOfValue) {
            if (typeOfValue === BUTTON_TEXT) {
                setAttributes({text: newValue});
            }
            if (typeOfValue === BUTTON_CLASS) {
                setAttributes({buttonClass: newValue});
            }
        }

        return ([
                <InspectorControls>
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Custom Class Names"
                        value={buttonClass}
                        onChange={(buttonClass) => onChangeValue(buttonClass, BUTTON_CLASS)}
                    />
                </InspectorControls>,
            <a className={`btn ${buttonClass}`} style={{padding: '5px'}}>
                <RichText
                type="text"
                className="content"
                placeholder="Class Names"
                value={text}
                onChange={(text) => onChangeValue(text, BUTTON_TEXT)}
                />
            </a>
        ]);
    },

    save: props => {
        const { buttonClass, text  } = props.attributes;
        return (
            <a href="" className={`btn ${buttonClass}`}> {text} </a>
        )
    },
} );
