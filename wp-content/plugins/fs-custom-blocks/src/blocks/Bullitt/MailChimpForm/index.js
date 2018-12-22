const { registerBlockType } = wp.blocks;

const { SVG, Path } = wp.components;


const icon = <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></SVG>;


export default registerBlockType( 'bullitt-blocks/mailchimp-form', {
    title: 'Mailchimp Form',

    icon: icon,

    category: 'bullitt-blocks',

    edit: () => {
        return (
            <div className="container">
                <div className="row">
                    <h2>STAY IN TOUCH</h2>
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                    <span className="helper-text" data-error="wrong"
                                          data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select className="browser-default">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>By clicking sign up, you are confirming your consent to receive marketing communications via E-mail from Bullitt Mobile Ltd (Manufacturer of Cat® phones), and agree to the Bullitt Mobile Terms of Service and Privacy Policy.</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    },

    save: () => {
        return (
            <div className="container">
                <div className="row">
                    <h2>STAY IN TOUCH</h2>
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text" data-error="wrong"
                                      data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select className="browser-default">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>By clicking sign up, you are confirming your consent to receive marketing communications via E-mail from Bullitt Mobile Ltd (Manufacturer of Cat® phones), and agree to the Bullitt Mobile Terms of Service and Privacy Policy.</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        )
    },
} );
