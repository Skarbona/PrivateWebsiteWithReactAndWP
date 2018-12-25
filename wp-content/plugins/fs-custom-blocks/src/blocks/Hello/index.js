const { registerBlockType } = wp.blocks;
const blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

export default registerBlockType( 'fs-blocks/hello-world', {
    title: 'Hello World',

    icon: 'universal-access-alt',

    category: 'fs-blocks',

    edit() {
        return <p style={ blockStyle }>Hello editor.</p>;
    },

    save() {
        return <p style={ blockStyle }>Hello saved content.</p>;
    },
} );


