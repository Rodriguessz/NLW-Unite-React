  import { MoreHorizontal , ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight} from "lucide-react"
  import { IconButton } from "./icon-button"
  import { Table } from "./table/table"
  import { TableHeader } from "./table/table-header"
  import { Searchinput } from "./search-input"
  import { TableCell } from "./table/table-cell"
  import { TableRow } from "./table/table-row"
  import dayjs from "dayjs"
  import "dayjs/locale/pt-br"
  import relativeTime from "dayjs/plugin/relativeTime"
  import { ChangeEvent, useEffect, useState } from "react"


  dayjs.extend(relativeTime);
  dayjs.locale("pt-br")


  interface Attendee {
    id:          string,
    name:        string,
    email:       string,
    createdAt:   string
    checkedInAt: string | null


  }
    

 
  export function AttendeeList() {

      //UseState - Seta um valor default que só poderá ser alterado utilizando o método desestruturado do arrayRetornado do useState()
      const [page, setPage] = useState(()=>{
        const url = new URL(window.location.toString())
        if(url.searchParams.has("page")){
          return Number(url.searchParams.get("page"))
        } else{
          return 1;
        }
      });
      const [attendees , setAttendees] = useState<Attendee[]>([]);
      const [total, setTotal] = useState(0);
      const [totalRows, setTotalRows] = useState(0);
      const [inputValue, setInputValue] = useState(()=>{
        const url = new URL(window.location.toString())
        if(url.searchParams.has("search")){
          return String(url.searchParams.get("search"))
        }
        return "";
      });
      
      //useEffect é uma forma de disparar métodos em react apenas quando determinados estados forem atualizados
      useEffect(()=> {
        const url = new URL("http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees")
        url.searchParams.set('pageIndex', String(page - 1))

        if(inputValue.length > 0){
        
            url.searchParams.set('query', inputValue )

        } 

        fetch(url)
          .then(response => response.json())
          .then(data => {
            setAttendees(data.attendees)  
            setTotalRows(data.attendees.length)
            setTotal(data.total)
          })
      } , [page, inputValue])
      

      const totalPages = Math.ceil(total /10);

    function setCurrentPage(page : number){
         //Retorna um objeto com todos os searchParams da minha URL
          const url=  new URL(window.location.toString())

          url.searchParams.set("page" , String(page))
          window.history.pushState({}, "", url)
          setPage(page)
    }
    
    function setCurrentSearch(search : string){
        const url=  new URL(window.location.toString())

        url.searchParams.set("search" , search)
        window.history.pushState({}, "", url)
        setInputValue(search)
    }

      function onSearchChange(event : ChangeEvent<HTMLInputElement>){

          setCurrentSearch(event.target.value)
          setPage(1);
      } 

      const goToNextPage =  ()=> {
          setCurrentPage(page + 1)

      }

      const goToPreviousPage =  ()=> {
          setCurrentPage(page - 1)
      }

       const goToLastPage =  ()=> {
          setCurrentPage(totalPages)
      }

       const goToFirstPage =  ()=> {
          setCurrentPage(1)
      }


    return (
      <>
        <div className="flex flex-col gap-4">

          {/* Header Table */}
          <div className="flex gap-5 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <Searchinput onChange={onSearchChange} type="text" placeholder="Buscar participante..."/>
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

                {attendees.map((attendee) => {
                  return (
                    <TableRow key={attendee.id} className="hover:bg-white/5">
                      <TableCell style={{width: 48}}> 
                          <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/>
                      </TableCell>
                      <TableCell> {attendee.id}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-white">{attendee.name}</span>
                          <span>{attendee.email}</span>
                        </div>
                        </TableCell>
                      <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                      <TableCell>{attendee.checkedInAt === null 
                      ? <span>Não fez check-in</span> 
                      : dayjs().to(attendee.checkedInAt)}</TableCell>
                      <TableCell style={{width: 64}}>

                        <IconButton transparent> <MoreHorizontal className="w-4 h-4 text-white "/> </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </tbody>

              <tfoot>
                <TableRow className="border-none">
                  <TableCell colSpan={3}>Mostrando {totalRows} de {total} itens</TableCell>

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