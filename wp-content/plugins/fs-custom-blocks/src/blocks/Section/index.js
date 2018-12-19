const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls, InnerBlocks, MediaUpload } = wp.editor;

export default registerBlockType( 'fs-blocks/custom-section', {
    title: 'Custom Section',

    icon: 'calendar_view_day',

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
        }
    },

    edit: ({ attributes, setAttributes }) => {

        const {title, text, backgroundClass, backgroundImage} = attributes;

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

                    <br/>
                    <hr/>
                    <br/>
                    <h2>Add Custom classes to block:</h2>
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Class Names"
                        value={backgroundClass}
                        onChange={onChangeBackgroundClass}
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
                        className="content"
                        placeholder="Title"
                        value={title}
                        onChange={onChangeTitle}
                    /><br/>
                    <RichText
                        className="content"
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
            backgroundImage
        } } = props;

        let bg = null;
        if(backgroundImage) { bg = {backgroundImage: `url(${backgroundImage})`} }

        return (
            <div className={`section section__home-element ${backgroundClass}`} style={bg} >
                <div className="container">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <InnerBlocks.Content />
                </div>
            </div>
        )
    },
} );
