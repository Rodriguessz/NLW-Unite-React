  import { MoreHorizontal , ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight} from "lucide-react"
  import { IconButton } from "./icon-button"
  import { Table } from "./table/table"
  import { TableHeader } from "./table/table-header"
  import { Searchinput } from "./search-input"
  import { TableCell } from "./table/table-cell"
  import { TableRow } from "./table/table-row"
  import { atteends } from "../data/attendees"
  import dayjs from "dayjs"
  import "dayjs/locale/pt-br"
  import relativeTime from "dayjs/plugin/relativeTime"
import { MouseEventHandler, useState } from "react"


  dayjs.extend(relativeTime);
  dayjs.locale("pt-br")

  export function AttendeeList() {

      //UseState - Seta um valor default que só poderá ser alterado utilizando o método desestruturado do arrayRetornado do useState()
      const [page, setPage] = useState(1);
      const totalPages = Math.ceil(atteends.length /10);

      const goToNextPage =  ()=> {
          setPage(page + 1)
      }

      const goToPreviousPage =  ()=> {
          setPage(page - 1)
      }

       const goToLastPage =  ()=> {
          setPage(totalPages)
      }

       const goToFirstPage =  ()=> {
          setPage(1)
      }
    return (
      <>
        <div className="flex flex-col gap-4">

          {/* Header Table */}
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <Searchinput  type="text" placeholder="Buscar participante..."/>

          </div>
          {/* Fim Header Table */}


          {/* Table */}
              <Table>
              <thead>
                <TableRow>
                  <TableHeader style={{width: 48}}><input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/></TableHeader>
                  <TableHeader>Código</TableHeader>
                  <TableHeader>Participante</TableHeader>
                  <TableHeader>Data de Inscrição</TableHeader>
                  <TableHeader>Data do Check-in</TableHeader>
                  <TableHeader style={{ width: 64}}></TableHeader>
                </TableRow>
              </thead>

              <tbody>
                {/* Exibindo itens repetidos sem precisar copiar várias vezes */}

                {atteends.slice((page - 1) * 10, page * 10).map((atteend) => {
                  return (
                    <TableRow key={atteend.id} className="hover:bg-white/5">
                      <TableCell style={{width: 48}}> 
                          <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/>
                      </TableCell>
                      <TableCell> {atteend.id}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-white">{atteend.nome}</span>
                          <span>{atteend.email}</span>
                        </div>
                        </TableCell>
                      <TableCell>{dayjs().to(atteend.createdAt)}</TableCell>
                      <TableCell>{dayjs().to(atteend.createdAt)}</TableCell>
                      <TableCell style={{width: 64}}>

                        <IconButton transparent> <MoreHorizontal className="w-4 h-4 text-white "/> </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </tbody>

              <tfoot>
                <TableRow className="border-none">
                  <TableCell colSpan={3}>Mostrando 10 de {atteends.length} itens</TableCell>

                  <TableCell className="text-right" colSpan={3}>
                  
                    <div className="inline-flex gap-8 items-center">
                        <span>Página {page} de {totalPages}</span>
                        <div className="flex gap-2">
                            <IconButton onClick={goToFirstPage} disabled={page === 1}> <ChevronsLeft className="w-4 h-4 text-white "/></IconButton>
                            <IconButton onClick={goToPreviousPage} disabled={page === 1}> <ChevronLeft className="w-4 h-4 text-white "/></IconButton>
                            <IconButton onClick={goToNextPage} disabled={page === totalPages}> <ChevronRight className="w-4 h-4 text-white "/></IconButton>
                            <IconButton onClick={goToLastPage} disabled={page === totalPages}> <ChevronsRight className="w-4 h-4 text-white "/></IconButton>

                        
                      </div>
                      
                    </div>
                
                  </TableCell>

                  
                </TableRow>
              </tfoot>
            </Table>
          {/* Fim da Table */}


        </div>

      </>
    )

  }