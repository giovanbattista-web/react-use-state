// import { useState } from "react";

const Button = ({ language, isOpen, onToggle }) => {
    return (
        <>
            <div className="button">
                <div>
                    <div>
                        <button className="cursor_pointer" onClick={onToggle}>
                            <h3>{language.title}</h3>
                        </button>
                    </div>
                </div>
                <div>

                    {isOpen ? <div>
                        <button>
                            <h3>{language.title}</h3>
                            {language.description}
                        </button>
                    </div> : ""}

                </div>

            </div>
        </>
    )
}

export default Button;