import '../../styles/CustomNavbar/Toggle.scss';

interface IToggle {
    isOpen: boolean,
}
const Toggle = ({
    isOpen,
}: IToggle) => {
    const svgClassName = isOpen ? 'show' : 'close';

    return (
        <svg className={svgClassName} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="nav-toggle-container">
                <g id="nav-toggle">
                    <path id="top-line" d="M11 29L33 29" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    <path id="bottom-line" d="M11 15L33 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </g>
            </g>
        </svg>
    );
}

export default Toggle;