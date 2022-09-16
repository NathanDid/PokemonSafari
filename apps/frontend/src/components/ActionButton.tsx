import styled from 'styled-components';

type Props = {
    label: string,
    disabled: boolean,
    onClick?: () => void,
    title?: string
}

const ActionButton = ({disabled, onClick, label, title}: Props) => {
    return(
        <Button
            disabled={disabled}
            onClick={onClick}
            title={title}
        >
            {label}
        </Button>
    )
}


const Button = styled.button`
    color: ${props => props.disabled ? "red" : "limegreen"};
    border: 2px solid limegreen;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    &:hover {
        opacity: 0.9;
    }
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    [target] {
        background-color: grey;
    }
`;

export default ActionButton