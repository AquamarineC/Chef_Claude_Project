import chefIcon from "../image/chef-claude-icon.png"

export default function Header(props){
    
    return(
        <header className="bg-yellow-100 flex justify-center items-center h-34">
            <img className="h-18 mr-4" src={chefIcon} alt="chef-claude-icon" />
            <h1 className="text-5xl ml-4">Chef Claude {props.username}</h1>
        </header>
    )
}