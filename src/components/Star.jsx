

import starFilled from "../image/star-filled.png"
import starEmpty from "../image/star-empty.png"

export default function Star(props){

    return(

        <button
                    
                        aria-pressed={props.isFilled}
                        aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={props.isFilled ? starFilled : starEmpty}
                            alt={props.isFilled ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
        </button>
    )
}