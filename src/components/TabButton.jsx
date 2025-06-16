/*function onClick(event) {
    console.log(event);
}*/

function TabButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button
                onClick={onSelect}
                style={{
                    fontWeight: isSelected ? 'bold' : 'normal',
                    letterSpacing: '1px'
                }}
                className={isSelected ? 'active' : undefined}>
                {children}
            </button>
        </li>
    )
}

export default TabButton;

