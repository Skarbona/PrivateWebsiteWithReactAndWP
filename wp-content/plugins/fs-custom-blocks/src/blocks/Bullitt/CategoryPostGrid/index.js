const { registerBlockType } = wp.blocks;

const { SVG, Path } = wp.components;

//import CtaButton from '../CtaButton/';


const icon = <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" /></SVG>;

const placeholderCard = (
    <div className="col s4 m4 l4 xl4">
        <div className="card">
            <div className="card-image">
                <img src="https://via.placeholder.com/400" />
                <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">

            </div>
        </div>
    </div>
);

export default registerBlockType( 'bullitt-blocks/category-post-grid', {
    title: 'Category Post Grid',

    icon: icon,

    category: 'bullitt-blocks',

    edit: () => {
        return (
            <div className="container">
                <div className="row">
                    {placeholderCard}
                    {placeholderCard}
                    {placeholderCard}
                </div>
            </div>
        );
    },

    save: () => {
        return (
            <div className="container">

                <div className="row">
                    {placeholderCard}
                    {placeholderCard}
                    {placeholderCard}
                </div>
            </div>
        )
    },
} );
