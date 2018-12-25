const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls, InnerBlocks, MediaUpload, DropdownMenu } = wp.editor;

export default registerBlockType( 'fs-blocks/columns', {
    title: 'Custom Columns',

    icon: 'universal-access-alt',

    category: 'fs-blocks',

    attributes: {
        backgroundClass: {
            type: 'string',
            default: null
        },
        backgroundImage: {
            type: 'string',
            default: null,
        },
    },

    edit: ({ attributes, setAttributes }) => {

        const { backgroundClass, backgroundImage } = attributes;

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            });
        }

        const onChangeBackgroundClass = newClass => {
            setAttributes({backgroundClass: newClass});
        };

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
                <h2>Add Custom classes to block:</h2>
                <RichText
                    type="text"
                    className="content"
                    placeholder="Class Names"
                    value={backgroundClass}
                    onChange={onChangeBackgroundClass}
                />
                <hr/>
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
                <div className="col s6 m6 l6 xl6"
                     style={{ position: 'relative', boxShadow: '1px 1px 1px #333'}}>
                    <div className="grey"
                         style={{position: 'absolute', left:'0',top: '0',
                             padding: '5px', fontSize: '0.7rem'}}>
                        COL</div>
                    <InnerBlocks/>
                </div>
            </div>
        ]);
    },

    save: props => {
        const { attributes: {
            backgroundClass,
            backgroundImage,
        } } = props;

        let bg = null;
        if(backgroundImage) { bg = {backgroundImage: `url(${backgroundImage})`} }

        return (
            <div className={`col ${backgroundClass}`} style={bg} >
                <InnerBlocks.Content />
            </div>
        )
    },
} );
