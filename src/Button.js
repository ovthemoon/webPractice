import PropTypes from "prop-types";
import styled from "./Button.module.css";
//우리가 원하는것은 CSS의 집중화이다. 그래서 CSS를 따로 빼서 관리하는것이 좋다.
//CSS Module을 사용해 CSS를 따로 관리하자.
function Button({text,onClick}){
    return (
        <button className={styled.btn} onClick={onClick}>{text}</button>
    );
}

Button.propTypes={
    text: PropTypes.string.isRequired,
}
export default Button;