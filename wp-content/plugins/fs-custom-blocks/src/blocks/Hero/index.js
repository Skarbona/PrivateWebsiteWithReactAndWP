const { registerBlockType } = wp.blocks;

const { RichText, MediaUpload, InspectorControls } = wp.editor;

export default registerBlockType( 'fs-blocks/hero-block', {
    title: 'Hero Block',

    icon: 'format-image',

    category: 'fs-blocks',

    attributes: {
        title: {
            type: 'string',
            default: 'Hero Title'
        },
        subTitle: {
            type: 'string',
            default: 'Hero Sub Title'
        },
        buttonText: {
            type: 'string',
            default: null
        },
        buttonLink: {
            type: 'string',
            default: null
        },
        backgroundImage: {
            type: 'string',
            default: null,
        }
    },

    edit: ({ attributes, setAttributes }) => {

        const { title, subTitle, backgroundImage, buttonLink, buttonText } = attributes;

        const onChangeTitle = newTitle => {
                setAttributes( { title: newTitle } );
        };

        const onChangeSubTitle = newSubTitle => {
            setAttributes( { subTitle: newSubTitle } );
        };

        const onChangeButtonText = newButtonText => {
            setAttributes( { buttonText: newButtonText } );
        };

        const onChangeButtonLink = newButtonLink => {
            setAttributes( { buttonLink: newButtonLink } );
        };

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            })
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
                    render={({ open }) => (
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
                <RichText
                    type="text"
                    className="content"
                    placeholder="Button Link"
                    value={buttonLink}
                    onChange={onChangeButtonLink}
                /><br/>

            </InspectorControls>,
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '1rem',
                textAlign: 'center'
            }}>
                    <RichText
                        className="content"
                        placeholder="Title of Hero Page"
                        value={title}
                        onChange={onChangeTitle}
                    /><br/>
                    <RichText
                        className="content"
                        placeholder="Sub Title"
                        value={subTitle}
                        onChange={onChangeSubTitle}
                    /><br/>
                <a className="waves-effect btn primary darken-1"
                    style={{padding: '5px 10px'}}
                >
                    <RichText
                        type="text"
                        className="content"
                        placeholder="Button Text"
                        value={buttonText}
                        onChange={onChangeButtonText}
                    />
                </a>

                </div>
        ]);
    },

    save: props => {
        const { attributes: {
            title,
            backgroundImage,
            subTitle,
            buttonText,
            buttonLink,
        } } = props;
        let bg = null;
        if(backgroundImage) { bg = {backgroundImage: `url(${backgroundImage})`} }
        return (
                <div id="hero__element" className="section section__hero" style={bg}>
                    <div className="container">
                        <h1>{title}</h1>
                        <h2>{subTitle}</h2>
                        <div data-info-link={buttonLink} data-info-text={buttonText} />
                    </div>
                </div>
            )
    },
} );
