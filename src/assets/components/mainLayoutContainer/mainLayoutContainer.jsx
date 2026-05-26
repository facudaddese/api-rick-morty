import { Aside } from "../aside/Aside"
import MainLayout from "../mainLayout/MainLayout"
import './MainContainer.css'

const mainLayoutContainer = () => {
    return (
        <main className="grid [grid-area:main] h-120 overflow-hidden overflow-y-auto main-container ml-4 mr-30">
            <MainLayout />
            <Aside />
        </main>
    )
}

export default mainLayoutContainer