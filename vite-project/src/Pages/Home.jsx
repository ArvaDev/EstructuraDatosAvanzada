import { Header } from "../Components/Atoms/Header";
import Autores from "../Store/Database";
import Table from "../Components/Atoms/Table";
export function Home (){
    return (
        <>
        <Header>
            {
                Autores.Title
            }
        </Header>
      
      <Table></Table>
        
        </>
    );
}