import {useState} from "react"
import avatar from "./image/user.png"
import starFull from "./image/star-filled.png"
import starEmpty from "./image/star-empty.png"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
   
    let starIcon = contact.isFavorite ? starFull : starEmpty

    function toggleFavorite() {
        setContact(prev => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        className="favorite-button"
                        aria-label={`${contact.isFavorite ? "Remove from" : "Add to"} favorites`}
                    >
                        <img
                            src={starIcon}
                            alt={`${contact.isFavorite ? "filled" : "empty"} star icon`}
                            
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}