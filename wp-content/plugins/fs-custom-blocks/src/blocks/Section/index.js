const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.editor;
const { SVG, Path } = wp.components;

const icon =  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z" /></SVG>;

export default registerBlockType( 'fs-blocks/custom-section', {
    title: 'Custom Section',

    icon: icon,

    category: 'fs-blocks',

    attributes: {
        title: {
            type: 'string',
            default: 'Section Title'
        },
        text: {
            type: 'string',
            default: 'Section description'
        },
        backgroundClass: {
            type: 'string',
            default: 'primary darken-1'
        },
        backgroundImage: {
            type: 'string',
            default: null,
        },
        classTitle: {
            type: 'string',
            default: null,
        },
        classDesc: {
            type: 'string',
            default: null,
        }
    },

    edit: ({ attributes, setAttributes }) => {

        const {title, text, backgroundClass, backgroundImage, classTitle, classDesc } = attributes;

        const onChangeTitle = newTitle => {
            setAttributes({title: newTitle});
        };

        const onChangeText = newText => {
            setAttributes({text: newText});
        };

        const onChangeBackgroundClass = newClass => {
            setAttributes({backgroundClass: newClass});
        };

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            });
        }

        function RemoveImage(){
            setAttributes({ backgroundImage: null });
        }

        function onChangeClass(newClass, typeOfClass) {
            if(typeOfClass === 'title') {
                setAttributes({ classTitle: newClass });
            }
            if(typeOfClass === 'desc') {
                setAttributes({ classDesc: newClass });
            }
        }

            return ([
                <InspectorControls>
                    <h2>Select a background image:</h2>
                    <MediaUpload
                        onSelect={onImageSelect}
                        type="image"
                        value={backgroundImage}
                        render={({open}) => (
                            <button onClick={open}>
                                Upload Image!
                            </button>
                        )}
                    />
                    { backgroundImage ? (
                        <span className="badge red white-text"
                              style={{cursor: 'pointer'}}
                              onClick={RemoveImage}
                        >
                            Remove Image
                        </span>
                        ) : ( '' )
                    }
                    <hr/>
                    <h2>Add Custom classes to block:</h2>
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Class Names"
                        value={backgroundClass}
                        onChange={onChangeBackgroundClass}
                    />
                    <hr/>
                    <h3>Add Custom classes to title:</h3>
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Class Title"
                        value={classTitle}
                        onChange={(classTitle) => onChangeClass(classTitle,'title')}
                    />
                    <hr/>
                    <h3>Add Custom classes to description:</h3>
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Class for Descriptions"
                        value={classDesc}
                        onChange={(classDesc) => onChangeClass(classDesc,'desc')}
                    />
                </InspectorControls>,
                <div className={`section section__home-element ${backgroundClass}`}
                     style={{
                         backgroundImage: `url(${backgroundImage})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         padding: '1rem',
                         textAlign: 'center'
                     }}
                >
                    <RichText
                        className={classTitle}
                        placeholder="Title"
                        value={title}
                        onChange={onChangeTitle}
                    /><br/>
                    <RichText
                        className={classDesc}
                        placeholder="Text"
                        value={text}
                        onChange={onChangeText}
                    /><br/>
                    <br/>
                    <div style={{border: '1px solid #eee', padding: '5px', margin: '5px'}}>
                        <InnerBlocks/>
                    </div>
                </div>
            ]);
        },

    save: props => {
        const { attributes: {
            title,
            text,
            backgroundClass,
            backgroundImage,
            classTitle,
            classDesc
        } } = props;

        let bg = null;
        if(backgroundImage) { bg = {backgroundImage: `url(${backgroundImage})`} }

        return (
            <div className={`section section__home-element ${backgroundClass}`} style={bg} >
                <div className="container">
                    <h2 className={classTitle}>{title}</h2>
                    <p className={classDesc}>{text}</p>
                    <InnerBlocks.Content />
                </div>
            </div>
        )
    },
} );
