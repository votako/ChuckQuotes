import { Body as BodyDiv, Categories, Main as MainDiv } from './styled'
import Joke from '../joke'
import Category from '../caregory'
import Header from '../header'

export const Main = () => {
    return (
        <MainDiv>
            <Header />
            <BodyDiv>
                <Categories>
                    <Category />
                    <Category />
                    <Category />
                </Categories>
                <Joke />
            </BodyDiv>
        </MainDiv>  
    )
}