const Button = (props) => {
    const { language } = props;
    return (
        <>
            <div className="button">
                <div>
                    <button className="cursor_pointer">
                        <h3>{language.title}</h3>
                    </button>
                </div>
                <div>
                    {language.description}
                </div>

            </div>
        </>
    )
}

export default Button;