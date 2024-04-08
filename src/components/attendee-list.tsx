import { Search } from "lucide-react"



export function AttendeeList(){
    return(
        <>  
        <div>
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>

            <input type="text" placeholder="Buscar participante..." className=" w-[280px] bg-transparent border-[1px] border-zinc-800 pl-10 py-1.5 rounded-lg bg-[url('./assets/search.svg')] bg-left-search bg bg-no-repeat "/>
          </div>


            <table>
              <thead>
                <tr>
                <th> <input type="checkbox" /> </th>
                <th>Código</th>
                <th>Participante</th>
                <th>Data de Inscrição</th>
                <th>Data do Check-in</th>
                <th></th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                <td> <input type="checkbox" /> </td>
                <td> 192945</td>
                <td> 
                  <div className="flex flex-col items-start">
                    <span>Enzo Rodrigues</span>
                    <span>enzo.orodrigues03@gmail.com</span>

                  </div>
                </td>
                <td> 7 dias atrás </td>
                <td> 7 dias atrás </td>
                <td></td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan={3}>Mostrando 10 de 228 itens</td>
                  <td colSpan={3}>Página 1 de 23</td>

                </tr>
              </tfoot>
            </table>

        </div>
       
    </>
    )
    
}