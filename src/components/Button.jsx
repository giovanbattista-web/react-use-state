import { useState } from "react";

const Button = (props) => {
    const { language } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="button">
                <div>
                    <button className="cursor_pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "-" : "+"}
                        <h3>{language.title}</h3>
                    </button>
                </div>
                <div>
                    {isOpen && <div>{language.description}</div>}
                </div>

            </div>
        </>
    )
}

export default Button;