const { registerBlockType } = wp.blocks;

const { SVG, Path } = wp.components;

const fullStar = <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></SVG>;

const halfStar =  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></SVG>;

const emptyStar = <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></SVG>;

export default registerBlockType( 'bullitt-blocks/feefo-reviews', {
    title: 'Feefo Reviews',

    icon: halfStar,

    category: 'bullitt-blocks',

    edit: () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{halfStar}</div>
                    <div className="col s1 m1 l1 xl1">{emptyStar}</div>
                </div>
            </div>
        );
    },

    save: () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{fullStar}</div>
                    <div className="col s1 m1 l1 xl1">{halfStar}</div>
                    <div className="col s1 m1 l1 xl1">{emptyStar}</div>
                </div>
            </div>
        )
    },
} );
