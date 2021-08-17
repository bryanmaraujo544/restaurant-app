import { Container } from 'styles/UnitiesPage'
import { NavBar } from 'components/NavBar'
import { unitiesPageData } from 'data/unitiesPageData'
import { Titles } from 'components/Banner/Titles'
import { Banner } from 'components/Banner'



const Unities = ({pageData}) => {
    const [data] = pageData
    return (
        <Container>
            <NavBar />
            <Banner 
                uptitle={data.horario}
                title="Você está na unidade"
                unityName={data.title}
                description={data.local}
                
                firstBtnText="Cardápios"
                secondBtnText="Sobre"
            />
        </Container>
    )
}

export default Unities





export const getStaticProps = ({params}) => {
    const title = params.title;
    const pageData = unitiesPageData.filter(item => title === item.path)
    console.log("pagesData",pageData)
    return {
        props: {
            pageData
        },
        revalidate: 60 * 60 * 24 * 30
    }
}

export const getStaticPaths = () => {
    const paths = unitiesPageData.map(item => {
        return {
            params: {
                title: item.path
            }
        }
    })
    return {
        paths, 
        fallback: false,
    }
}