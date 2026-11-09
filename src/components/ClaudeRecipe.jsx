import Markdown from 'react-markdown'

export default function ClaudeRecipe(props){


    return (
        <section className='suggested-recipe-container mt-8' aria-live='polite'>
            <h2 className='mb-7'>Chef Claude Recommends:</h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )

}